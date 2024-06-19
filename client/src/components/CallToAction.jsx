import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="mt-12">
      <div className="flex items-center w-full">
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
        <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="uppercase text-[24px] font-bold flex-1">
          make it happen
        </h2>
        <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
      </div>
      <div className="flex flex-col justify-around items-center mt-6 md:mt-8 gap-8 text-center">
        <h2 className="sm:text-[44px] font-bold text-slate-600 dark:text-slate-400">
          Ready to bring your ideas to life?
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
