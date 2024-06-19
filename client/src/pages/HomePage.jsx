import { useState } from "react";
import SideBar from "../Components/SideBar";
import ProfilePic from "../Components/ProfilePic";
import Typewriter from "typewriter-effect";
import ProgressBar from "../Components/ProgressBar";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import Strings from "../Shared/Strings";
import { IoArrowForwardOutline } from "react-icons/io5";
import SkillSet from "../Components/SkillSet";

import mongo from "/mongo-icon.png";
import express from "/express-icon.png";
import reactIcon from "/react-icon.png";
import nodejs from "/node-icon.png";
import coreldraw from "/coreldraw-icon.png";

export default function HomePage() {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTEND,
      desc: Strings.FRONTEND_DESC,
      logo: "/ui-ux-design.png",
    },
    {
      id: 2,
      title: Strings.GRAPHICS,
      desc: Strings.GRAPHICS_DESC,
      logo: "/backend.png",
    },
    {
      id: 3,
      title: Strings.COACHING,
      desc: Strings.COACHING_DESC,
      logo: "/teaching.png",
    },
  ];
  return (
    <div>
      <SideBar />
      <div className="ml-12 sm:ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2">
          {/* <Introduction /> */}
          <div className="w-full flex justify-center flex-col items-center text-center">
            <div className="h-[20px] border-r-[3px]"></div>
            <h2 className="uppercase mt-5 text-black dark:text-slate-400 font-medium sm:text-[13px] tracking-widest">
              hello! my name is
            </h2>
            <h2 className="uppercase text-[40px] md:text-[70px] font-bold text-black dark:text-slate-500 tracking-widest leading-[60px] md:leading-[80px] mt-5">
              <span className="block">
                <Typewriter
                  options={{
                    strings: ["ikpuri", "eyoanwan", "olaitan"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <h2 className="uppercase mt-5 text-gray-600 dark:text-slate-300 font-medium text-[13px] tracking-widest">
              a pharmacist, & public health expert
            </h2>

            <img
              src="/pharmeyo1.png"
              className="w-[200px] h-[200px] p-4 bg-gray-400 rounded-full mt-5"
            />
          </div>
          <div className="w-full justify-center flex gap-3 mt-5 text-2xl">
            <Link to="#">
              <FaFacebook className="hover:opacity-85 hover:scale-110" />
            </Link>
            <Link to="#">
              <FaTwitterSquare className="hover:opacity-85 hover:scale-110" />
            </Link>
            <Link to="#">
              <FaLinkedin className="hover:opacity-85 hover:scale-110" />
            </Link>
            <Link to="#">
              <FaInstagramSquare className="hover:opacity-85 hover:scale-110" />
            </Link>
          </div>

          <CallToAction />
          <Link
            to="/contact"
            className="flex items-center justify-center uppercase bg-blue-700 text-white w-[200px] h-12 hover:opacity-70 mt-5 rounded-lg mx-auto"
          >
            contact me
          </Link>
        </div>
        <div className="hidden md:block right-0">
          <ProgressBar />
          <ProfilePic />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
