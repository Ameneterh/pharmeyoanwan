import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import Divider from "./Divider";
import { useSelector } from "react-redux";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full border border-teal-500 hover:border-2 h-[370px] overflow-hidden rounded-lg sm:w-[250px] transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.postimage}
          alt="post cover"
          className="h-[260px] w-full object-cover object-top group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.posttitle}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/posts/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all 300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
}

export function PostCardMobile({ post }) {
  return (
    <div className="flex group relative w-full border border-teal-500 hover:border-2 h-[120px] overflow-hidden rounded-lg transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.postimage}
          alt="post cover"
          className="h-full w-36 object-cover object-top group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col flex-1 gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.posttitle}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/posts/${post.slug}`}
          className="z-10 group-hover:bottom-0  text-teal-500"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
}

export function VideoCard({ video }) {
  const videoURL = `https://www.youtube.com/embed/${video.videoId}`;

  return (
    <div className="w-80 p-1 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-md">
      <div className="p-1 flex flex-col flex-1 gap-2">
        <iframe
          src={videoURL}
          width="300"
          height="280"
          className="rounded-lg"
        ></iframe>

        <div className="flex gap-2">
          <div className="flex w-10 h-10 rounded-full bg-black"></div>
          <div className="flex-1">
            <p className="text-md line-clamp-1">{video.videotitle}</p>
            <span className="italic text-sm">Category: {video.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Motivational Card

export function MotivationalCard({ motivation }) {
  const { currentUser } = useSelector((state) => state.user);
  const [author, setAuthor] = useState({});

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

  // useEffect(() => {
  //   const getmotivation = async () => {
  //     try {
  //       const res = await fetch(`/api/motivational/${motivation._id}`);

  //       if (res.ok) {
  //         const data = await res.json();
  //         setMotComments(data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getmotivation();
  // }, [motivation._id]);

  return (
    <div className="group relative w-full overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-600 transition-all shadow-md p-2 flex items-start">
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
        <Link to={`/motivationals/${motivation._id}`}>
          <div
            dangerouslySetInnerHTML={{
              __html: motivation && motivation.content,
            }}
            className="text-sm max-w-4xl mx-auto w-full post-content text-justify"
          ></div>
        </Link>
        <span className="text-sm text-slate-500 dark:text-slate-400 flex gap-1">
          <span>{new Date(motivation.createdAt).toLocaleDateString()}</span>
          <p>.</p>
          <span>
            {new Date(motivation.createdAt).toLocaleTimeString("en-US")}
          </span>
        </span>
      </div>
    </div>
  );
}
