import { useState } from "react";
import SideBar from "../Components/SideBar";
import ProfilePic from "../Components/ProfilePic";
import ProgressBar from "../Components/ProgressBar";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div>
      {/* <Header /> */}
      <SideBar />
      <div className="ml-12 sm:ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 min-h-screen p-2 sm:p-4 mt-4 sm:mt-10">
          {/* for web development */}
          <div className="w-full border-2 rounded-lg relative flex flex-col mb-20">
            <p className="absolute top-[-15px] left-[5px] bg-white px-2 dark:bg-[rgb(30,40,68)] text-xl font-bold">
              Web Development Services:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 p-4">
              <img src="web-development.png" alt="" className="h-80 sm:h-40" />
              <div className="flex-1 flex flex-col">
                <ol
                  className="w-full p-4 flex flex-col gap-4"
                  type="lower-roman"
                  style={{ listStyleType: "lower-roman" }}
                >
                  <li>
                    <b>UI/UX Design using ReactJs Technology Stack:</b> Speedy,
                    yet trendy, word perfect website design.
                  </li>
                  <li>
                    <b>Full Stack Application Development:</b> Employing the
                    MERN Stack Technology (MongoDb, ExpressJs, ReactJs, and
                    NodeJs)
                  </li>
                </ol>

                <p>
                  Open for collaboration and remote opportunities,{" "}
                  <Link to="/contact" className="text-blue-600 hover:underline">
                    Reach Out to me
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* for graphics design */}
          <div className="w-full border-2 rounded-lg relative flex flex-col mb-20">
            <p className="absolute top-[-15px] left-[5px] bg-white px-2 dark:bg-[rgb(30,40,68)] text-xl font-bold">
              Graphics Design Services:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 p-4">
              <img src="graphics-design.png" alt="" className="h-80 sm:h-40" />
              <div className="flex-1 flex flex-col">
                <ol
                  className="w-full p-4 flex flex-col gap-4"
                  type="lower-roman"
                  style={{ listStyleType: "lower-roman" }}
                >
                  <li>
                    <b>Products Packaging Design:</b> Speedy, and trendy
                    packaging design.
                  </li>
                  <li>
                    <b>Flyers/Handbills:</b> Looking for trendy flyers and
                    handbills? Look no further, these can be delivered within
                    record time; the designing and printing.
                  </li>
                  <li>
                    <b>Book Cover Design/Book Typesetting:</b> Speedy design,
                    word perfect typesetting, reducing your time to production
                    and book launch.
                  </li>
                </ol>

                <p>
                  Open for collaboration and remote opportunities,{" "}
                  <Link to="/contact" className="text-blue-600 hover:underline">
                    Reach Out to me
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* for tutorials */}
          <div className="w-full border-2 rounded-lg relative flex flex-col">
            <p className="absolute top-[-15px] left-[5px] bg-white px-2 dark:bg-[rgb(30,40,68)] text-xl font-bold">
              Web Dev/Graphics Design Tutorial Services:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 p-4">
              <img src="tutorials.png" alt="" className="h-96 sm:h-40" />
              <div className="flex-1 flex flex-col">
                <ol
                  className="w-full p-4 flex flex-col gap-4"
                  type="lower-roman"
                  style={{ listStyleType: "lower-roman" }}
                >
                  <li>
                    <b>General Tutorials:</b> Computer appreciation.
                  </li>
                  <li>
                    <b>Microsoft Packages:</b> MsWord, MsExcel, MsPowerPoint
                  </li>
                  <li>
                    <b>Graphic Design:</b> CorelDraw, Photoshop, etc
                  </li>
                  <li>
                    <b>Web Development:</b> HTML, CSS, Javascript, ReactJs,
                    TailwindCSS, MOngoDb, Express, NodeJs
                  </li>
                </ol>

                <p>
                  Open for collaboration and remote opportunities,{" "}
                  <Link to="/contact" className="text-blue-600 hover:underline">
                    Reach Out to me
                  </Link>
                </p>
              </div>
            </div>
          </div>
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
