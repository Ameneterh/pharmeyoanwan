import React from "react";
import { Link } from "react-router-dom";

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
          to={`/post/${post.slug}`}
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
          src={post.image}
          alt="post cover"
          className="h-full w-36 object-cover object-top group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col flex-1 gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
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
