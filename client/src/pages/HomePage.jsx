import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import ProfilePic from "../components/ProfilePic";
import Typewriter from "typewriter-effect";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { Button, Modal } from "flowbite-react";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("User");
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.fullname);
    } else {
      setName("User");
    }
    setShowModal(true);
  }, [!currentUser || currentUser._id]);

  return (
    <div>
      <SideBar />
      <div className="ml-12 sm:ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2">
          <div className="w-full flex justify-center flex-col items-center text-center">
            <div className="h-[20px] border-r-[3px]"></div>
            <h2 className="uppercase mt-5 text-black dark:text-slate-400 font-medium sm:text-[13px] tracking-widest">
              hello! my name is
            </h2>
            <h2 className="uppercase text-[40px] md:text-[60px] font-bold text-black dark:text-slate-500 tracking-widest leading-[60px] md:leading-[80px] mt-5">
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
              className="w-[230px] h-[230px] p-4 bg-gradient-to-r from-slate-300 via-red-700 to-slate-300 rounded-full mt-5"
            />
          </div>
          <div className="w-full justify-center flex gap-3 mt-5 text-2xl">
            <Link
              to="https://www.facebook.com/eyoanwan.ekanem.5"
              target="_blank"
            >
              <FaFacebook className="hover:opacity-85 hover:scale-110" />
            </Link>
            <Link to="https://www.twitter.com/EyoanwanEkanem" target="_blank">
              <FaTwitterSquare className="hover:opacity-85 hover:scale-110" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/eyoanwan-ekanem-0a6785133"
              target="_blank"
            >
              <FaLinkedin className="hover:opacity-85 hover:scale-110" />
            </Link>
            <Link
              to="https://www.instagram.com/eyoanwanolaitan"
              target="_blank"
            >
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

          {/* modal show */}
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            popup
            size="md"
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <p className=" text-md border-t-2 border-b-2 py-2 px-4 border-red-500">
                  Hello <span className="font-bold">{name}</span> and welcome to
                  my website! <br />I am{" "}
                  <span className="font-bold">Ikpuri Eyoanwan Olaitan</span>,
                  your host and guide on this online journey. I am thrilled to
                  have you here and do hope that our time together will be
                  filled with insightful conversations, learning, and enjoyment.
                  Let's explore new ideas, share perspectives, and have a great
                  time while doing so!
                </p>
                <div className="flex justify-center mt-4">
                  <Button color="failure" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
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
