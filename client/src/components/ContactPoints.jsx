import React from "react";
import { Link } from "react-router-dom";

export default function ContactPoints({ title, url, smavatar }) {
  return (
    <div className="w-32 bg-slate-900 text-slate-300 rounded-lg hover:scale-110 transition-all shadow-md">
      <Link to={url} className="flex flex-col items-center px-5 py-1">
        <p>{title}</p>
        {smavatar}
      </Link>
    </div>
  );
}
