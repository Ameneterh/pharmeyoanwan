import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-around items-center mt-6 md:mt-8 gap-8 text-center">
        <h2 className="sm:text-[44px] font-bold text-slate-600 dark:text-slate-400">
          How can I be of help?
          <span className="block">I am here to help!</span>
        </h2>
        {/* <Link
          to="/contact"
          className="flex items-center justify-center uppercase bg-blue-700 text-white w-[200px] h-12 hover:opacity-70 mt-5 rounded-lg"
        >
          contact me
        </Link> */}
      </div>
    </div>
  );
}
