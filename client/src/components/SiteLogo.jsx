import React from "react";
import { Link } from "react-router-dom";

export default function SiteLogo(props) {
  return (
    <div>
      <p className="text-xl sm:text-2xl sm:font-bold whitespace-nowrap italic">
        drug
        <span className="uppercase font-extrabold p-2 bg-gradient-to-r from-indigo-700 via-purple-600 to-red-700 rounded-2xl text-white not-italic">
          search
        </span>
      </p>
      {/* <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-bold dark:text-white italic"
      >
        drug
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white uppercase not-italic">
          search
        </span>
      </Link> */}
    </div>
  );
}
