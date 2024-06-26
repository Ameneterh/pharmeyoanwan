import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import CommentSection from "../components/CommentSection";
import { MotivationalCard } from "../components/Card";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import Divider from "../components/Divider";
import Comment from "../components/Comment";

export default function PostView() {
  const { motivationId } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [motivation, setMotivation] = useState({});
  const [motivations, setMotivations] = useState([]);
  const [motComments, setMotComments] = useState([]);
  const [author, setAuthor] = useState({});
  const [showCommentComponent, setShowCommentComponent] = useState(false);

  useEffect(() => {
    const fetchMotivation = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/motivational/${motivationId}`);
        let data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setMotivation(data);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchMotivation();
  }, [motivationId]);

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const res = await fetch(`/api/user/${motivation.userId}`);
        const data = await res.json();
        if (res.ok) {
          setAuthor(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getAuthor();
  }, [motivation]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getpostcomments/${motivationId}`);

        if (res.ok) {
          const data = await res.json();
          setMotComments(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, [motivationId]);

  const handleLike = async (motivationId) => {
    try {
      if (!currentUser) {
        navigate("/login");
        return;
      }
      const res = await fetch(
        `/api/motivational/likemotivation/${motivationId}`,
        {
          method: "PUT",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setMotivations(
          motivations.map((motivation) =>
            motivation._id === motivationId
              ? {
                  ...motivation,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : motivation
          )
        );
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="pt-4 sm:pt-10 p-3 flex flex-col max-w-3xl pb-10 mx-auto min-h-screen border-l-[1px] border-r-[1px]">
      <div className="flex gap-2 items-center w-fulll text-xl font-bold mb-4">
        <Link to="/motivationals">
          <BiArrowBack className="text-2xl font-bold" />
        </Link>
        <span className="text-slate-600 dark:text-slate-400">
          Motivational Post
        </span>
      </div>
      <Divider />
      <div className="group relative w-full overflow-hidden transition-all p-2 flex items-start">
        <div className="bg-black h-10 w-10 rounded-full">
          <img
            src={author.avatar}
            alt={author.fullname}
            className="h-10 w-10 rounded-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2 pl-2">
          <p className="text-sm font-bold flex flex-col">
            {author.fullname}{" "}
            <Link
              to={`mailto:author@email.com`}
              className="font-normal text-blue-600 hover:underline flex gap-1 items-center"
            >
              <MdOutlineAlternateEmail />
              {author.email}
            </Link>
          </p>
          <div className="flex flex-col-reverse gap-6">
            {motivation.image ? (
              <img
                src={motivation.image}
                alt={motivation._id}
                className="rounded-xl mb-2"
              />
            ) : (
              ""
            )}
            <div
              dangerouslySetInnerHTML={{
                __html: motivation && motivation.content,
              }}
              className="text-sm max-w-4xl mx-auto w-full post-content text-justify flex-1"
            ></div>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400 flex gap-1">
            <span>{new Date(motivation.createdAt).toLocaleDateString()}</span>
            <p>.</p>
            <span>
              {new Date(motivation.createdAt).toLocaleTimeString("en-US")}
            </span>
          </span>
          {/* <Divider /> */}
          <div className="flex gap-5 items-center">
            <span className="flex gap-1 items-center text-gray-400">
              <button
                type="button"
                onClick={() => setShowCommentComponent(true)}
                className={`text-gray-400 hover:text-blue-500`}
              >
                <FaRegComment />
              </button>
              <p className="text-gray-400">
                {motComments.length > 0 &&
                  motComments.length +
                    " " +
                    (motComments.length === 1 ? "comment" : "comments")}
              </p>
            </span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => handleLike(motivation._id)}
                className={`text-gray-400 hover:text-blue-500 ${
                  currentUser &&
                  motivation.likes.includes(currentUser._id) &&
                  "!text-blue-500"
                }`}
              >
                <FaRegHeart />
              </button>
              <p className="text-gray-400">
                {motivation.numberOfLikes > 0 &&
                  motivation.numberOfLikes +
                    " " +
                    (motivation.numberOfLikes === 1 ? "like" : "likes")}
              </p>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-5">
            <div className="flex-1">
              <CommentSection postId={motivation._id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
