import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  var yearNow = new Date().getFullYear();

  return (
    <div className="w-full bg-slate-600 dark:bg-slate-900 h-20 text-white flex justify-between items-center mt-8 px-5 border-t-2">
      <p className="w-full text-center">
        &copy; {new Date().getFullYear()} Amene Ter'Hemen
      </p>
    </div>
  );
}
