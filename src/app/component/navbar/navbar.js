import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsToggleOn } from "react-icons/bs";
import { IoMailUnread } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-10 bg-[#303437] p-5 flex flex-wrap justify-between items-center gap-4">
        {/* Social Network */}
        <div className="mx-6">
          <div className="text-white flex gap-6 text-[18px]">
            {/* Linkedin Icon */}
            <a
              className="text-[#eda62f]"
              target={"_blank"}
              href="https://www.linkedin.com/in/mkkawser1/"
              rel="noreferrer"
            >
              <FaLinkedinIn className="hover:text-white" />
            </a>

            {/* Github Icon */}
            <a
              href="https://github.com/mkkawser/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub className="hover:text-[#d0d183]" />
            </a>

            {/* Mail Icon */}
            <a
              href={`mailto:irumorgan420@gmail.com`}
              target={"_blank"}
              rel="noreferrer"
            >
              <IoMailUnread className="hover:text-[#fff] text-[#69d89fa3]" />
            </a>

            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              className="text-[#33859d]"
              target={"_blank"}
              rel="noreferrer"
            >
              <ImFacebook className="hover:text-white" />
            </a>
          </div>
        </div>

        {/* nav list */}
        <div className="text-[#eaa860] flex gap-8 mx-6 text-[14px] font-OpenSans">
          <a href="#Project" className="hover:text-white">
            Projects
          </a>
          <a href="#3in1" className="hover:text-white">
            Skill
          </a>
          <a href="#Contract" className="hover:text-white">
            Contact
          </a>
          <a href="#3in1" className="hover:text-white">
            AboutMe
          </a>
          <a href="#3in1" className="hover:text-white">
            Education
          </a>
        </div>

        {/* Dark/Light */}
        <div className="text-[18px] text-white mx-6">
          <BsToggleOn />
        </div>
      </div>
    </>
  );
};

export default Navbar;
