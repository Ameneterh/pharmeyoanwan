import React from "react";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const path = useLocation().pathname;

  return (
    <div className="w-12 sm:w-[90px] h-screen border-r-[1px] fixed flex flex-col justify-around items-center bg-white dark:bg-slate-900">
      <h2 className="-rotate-90 tracking-widest">
        {path === "/" && "HOMEPAGE"}
        {path === "/writings" && "WRITINGS"}
        {path === "/health-talks" && "TALKS"}
        {path === "/contact" && "CONTACT"}
      </h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <Link
          to="https://www.linkedin.com/in/eyoanwan-ekanem-0a6785133"
          target="_blank"
        >
          <IoLogoLinkedin className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
        </Link>
        <Link to="https://www.twitter.com/EyoanwanEkanem" target="_blank">
          <IoLogoTwitter className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
        </Link>
        <Link to="https://www.facebook.com/eyoanwan.ekanem.5" target="_blank">
          <IoLogoFacebook className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
        </Link>
        <Link to="https://www.instagram.com/eyoanwanolaitan" target="_blank">
          <IoLogoInstagram className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
        </Link>
      </div>
    </div>
  );
}
