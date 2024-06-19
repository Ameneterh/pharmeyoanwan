import { useState } from "react";
import SideBar from "../Components/SideBar";
import ProfilePic from "../Components/ProfilePic";
import Typewriter from "typewriter-effect";
import ProgressBar from "../Components/ProgressBar";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import { Link } from "react-router-dom";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
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
            <div className="h-[80px] border-r-[3px]"></div>
            <div className="w-[10px] h-[10px] bg-green-700 rounded-full"></div>
            <h2 className="uppercase mt-5 text-black dark:text-slate-400 font-medium sm:text-[13px] tracking-widest">
              hello! my name is
            </h2>
            <h2 className="uppercase text-[40px] md:text-[70px] font-bold text-black dark:text-slate-500 tracking-widest leading-[60px] md:leading-[80px] mt-5">
              <span className="block">
                <Typewriter
                  options={{
                    strings: ["amene", "terhemen"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <h2 className="uppercase mt-5 text-gray-600 dark:text-slate-300 font-medium text-[13px] tracking-widest">
              frontend dev, graphics designer
            </h2>
            <span className="uppercase font-bold text-red-500 text-xl">
              <Typewriter
                options={{
                  strings: "(amene terhemen)",
                  // autoStart: true,
                  // loop: true,
                }}
              />
            </span>
            <img
              src="/ameneindex.jpg"
              className="w-[200px] h-[200px] p-4 bg-gray-400 rounded-full mt-5"
            />
          </div>

          {/* <About /> */}
          <div className="mt-6 md:mt-12 px-6 md:px-44 text-center flex flex-col items-center">
            <h2 className="sm:text-[20px] md:text-[40px] font-bold">
              Hi! I am{" "}
              <span className="underline underline-offset-4">ameneterh,</span>
              <br />a Frontend Developer and
              <br /> Graphics Designer based in Kaduna, Nigeria
            </h2>
            <div className="relative border-2 px-8 rounded-xl mt-5 shadow-md">
              <BiSolidQuoteAltLeft className="bg-green-500 p-3 absolute top-[-16px] left-[-15px] text-[44px] rounded-full text-white" />
              <h2 className="w-full my-10 text-slate-700 dark:text-slate-400 text-[16px]">
                {Strings.ABOUT_DESC}
              </h2>
              <BiSolidQuoteAltRight className="bg-green-500 p-3 absolute bottom-[-16px] right-[-15px] text-[44px] rounded-full text-white" />
            </div>
          </div>

          {/* <SkillSet /> */}
          <div className="px-4 sm:px-12 mt-12">
            <div className="flex items-center">
              <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
              <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
              <h2 className="uppercase text-[24px] font-bold">My Skill Set</h2>
              <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
              <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-around items-center mt-6 md:mt-8 gap-8 text-center flex-wrap">
              <SkillSet imageTitle={mongo} SkillSet="MongoDb" />
              <SkillSet imageTitle={express} SkillSet="Express Js" />
              <SkillSet imageTitle={reactIcon} SkillSet="React Js" />
              <SkillSet imageTitle={nodejs} SkillSet="Node Js" />
              <SkillSet imageTitle={coreldraw} SkillSet="CorelDraw" />
            </div>
          </div>

          {/* <Services /> */}
          <div className="px-4 sm:px-12 mt-12">
            <div className="flex items-center w-full">
              <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
              <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
              <h2 className="uppercase text-[24px] font-bold">services</h2>
              <div className="flex-1 border-[1px] mx-4 mt-[-2px]"></div>
              <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-around mt-6 md:mt-8 gap-8">
              {servicesList.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex flex-col justify-between items-center gap-3 w-full max-w-96"
                >
                  <div className="bg-gray-200 rounded-full w-[80px] h=[80px]">
                    <img
                      src={item.logo}
                      className="w-[80px] h=[80px] p-5 hover:scale-125 transition-all ease-in-out cursor-pointer"
                    />
                  </div>
                  <h2 className="mt-5 font-bold">{item.title}</h2>
                  <h2 className="text-slate-700 dark:text-slate-400">
                    {item.desc}
                  </h2>
                </div>
              ))}
            </div>
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
