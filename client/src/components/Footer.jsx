import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall, MdOutlineMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  var yearNow = new Date().getFullYear();

  return (
    <div className="w-full flex-wrap gap-2 bg-slate-600 dark:bg-slate-900 h-20 text-white flex justify-center items-center mt-8 px-5 border-t-2">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Amene Ter'Hemen
      </p>
      <Link to="mailto:ameneterh@gmail.com" target="_blank">
        <MdOutlineMarkEmailUnread className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
      </Link>
      <Link to="https://wa.me/+2348154230654" target="_blank">
        <FaWhatsapp className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
      </Link>
      <Link to="tel:+2348154230654" target="_blank">
        <MdAddCall className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
      </Link>
    </div>
  );
}
