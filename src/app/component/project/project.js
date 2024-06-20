"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BsGithub } from "react-icons/bs";

const Project = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1200, // Animation duration in milliseconds
      });
    }
  }, []);

  return (
    <>
      <div id="Project" className="bg-[#202b35] text-white">
        {/* Project Header Text */}
        <p className="text-[25px] w-[80%] mx-auto pt-10 pb-6">
          My Some Recent Project
        </p>
      </div>
      <div data-aos="fade-down" className="bg-[#202b35]">
        <div className="px-6 flex flex-col gap-5 min-[480px]:flex-row">
          <div className="relative">
            <img src={`/img/project-edu-app.png`} alt="project" />
            {/* Project Name & Link */}
            <div className="flex flex-col items-center justify-center absolute bottom-0 bg-[#989890ac] w-full h-[60px]">
              <p>NextJs Edu-App</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/Mkkawser/edu-app"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  href="https://clone-edu-app.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    className="w-[25px]"
                    src="/img/live-icon.png"
                    alt="live"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={`/img/project-edu-app.png`} alt="project" />
            {/* Project Name & Link */}
            <div className="flex flex-col items-center justify-center absolute bottom-0 bg-[#989890ac] w-full h-[60px]">
              <p>NextJs Edu-App</p>
              <div className="flex items-center justify-center gap-4">
                <BsGithub />
                <img className="w-[25px]" src="/img/live-icon.png" alt="live" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={`/img/project-edu-app.png`} alt="project" />
            {/* Project Name & Link */}
            <div className="flex flex-col items-center justify-center absolute bottom-0 bg-[#989890ac] w-full h-[60px]">
              <p>NextJs Edu-App</p>
              <div className="flex items-center justify-center gap-4">
                <BsGithub />
                <img className="w-[25px]" src="/img/live-icon.png" alt="live" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
