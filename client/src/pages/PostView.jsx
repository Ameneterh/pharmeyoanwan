import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import CommentSection from "../components/CommentSection";

export default function PostView() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState({});
  const [postAuthor, setPostAuthor] = useState({});
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts/?slug=${slug}`);
        let data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchPosts();

    const fetchPostAuthor = async (userId) => {
      const res = await fetch(`/api/user/${userId}`);
      const author = await res.json();
      if (res.ok) {
        setPostAuthor(author);
      }
    };

    fetchPostAuthor(post.userId);
  }, [slug, post.userId]);

  // useEffect(() => {
  //   try {
  //     const fetchRecentProjects = async () => {
  //       const res = await fetch(`/api/project/getprojects?limit=3`);
  //       const data = await res.json();
  //       if (res.ok) {
  //         setRecentProjects(data.projects);
  //       }
  //     };
  //     fetchRecentProjects();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-3xl pb-10 mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-bold max-w-2xl mx-auto lg:text-4xl">
        {post && post.posttitle}
      </h1>
      <div className="flex gap-4 items-center justify-center border-t border-slate-700 pt-2 text-sm">
        <Link
          to={`/user/${postAuthor._id}`}
          className="text-teal-700 hover:underline underline-offset-4"
        >
          {postAuthor.fullname}
        </Link>
        <Link
          to={`mailto:${postAuthor.email}`}
          className="text-teal-700 hover:underline underline-offset-4"
        >
          {postAuthor.email}
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col w-full md:w-[400px]">
          <div className="flex items-center gap-10"></div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-3xl text-xs">
            <Link
              to={`/search?category=${post && post.category}`}
              className="text-lg text-blue-700 hover:underline"
            >
              {post && post.category}
            </Link>
            <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
            <span className="italic">
              {post && (post.postcontent.length / 1000).toFixed(0)} mins read
            </span>
          </div>
          <img
            src={post && post.postimage}
            alt={post && post.posttitle}
            className="hidden md:flex mt-4 p-3 max-h-[350px] max-w-4xl mx-auto object-cover object-top"
          />

          <div
            dangerouslySetInnerHTML={{ __html: post && post.postcontent }}
            className="p-3 max-w-4xl mx-auto w-full post-content text-justify"
          ></div>

          <CommentSection postId={post._id} />
        </div>
      </div>
    </main>
  );
}
