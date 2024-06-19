import { useState } from "react";
import SideBar from "../components/SideBar";
import ProfilePic from "../components/ProfilePic";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div>
      {/* <Header /> */}
      <SideBar />
      <div className="ml-12 sm:ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 min-h-screen p-2 sm:p-4 mt-4 sm:mt-10">
          <h1>Services Page</h1>
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
