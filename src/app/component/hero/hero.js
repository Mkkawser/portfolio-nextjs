import React from "react";

const Hero = () => {
  return (
    <>
      <div  className="font-OpenSans bg-[#202b35] p-6 sm:grid sm:grid-cols-[40%_60%] sm:gap-4 sm:items-center">
        <div className="img mx-auto pl-2 pt-2">
          <img
            src={`/img/Mkkawser.jpg`}
            className="rounded-full w-[250px] h-[250px]"
            alt="unsplash"
          />
        </div>
        <div className="pl-2 pt-4 font-OpenSans text-[#de930c]">
          {/* Name */}
          <p className="text-[#d3ebe9ff] text-[25px]">Kawser Hossain</p>

          {/* Degination */}
          <small className="opacity-40 text-white">Frontend Developer</small>

          {/* Languages */}
          <p>
            <span className="underline text-white text-[15px] my-1">
              Languages:
            </span>
            &nbsp; JavaScript, Python
          </p>

          {/* Expertise */}
          <p>
            <span className="underline text-white text-[15px] my-1">
              Expertise:
            </span>
            &nbsp; ReactJS, NextJS, TailwindCSS, Bootstrap, Redux-Toolkit,
            Router
          </p>

          {/* Project */}
          <p>
            <span className="underline text-white text-[15px] my-1">
              Portfolio projects:
            </span>
            &nbsp; Maze generator, NLP-based text generator, Webscraper
          </p>

          {/* Intersts */}
          <p>
            <span className="underline text-white text-[15px] my-1">
              Interests:
            </span>
            &nbsp; Frontend, Machine Learning
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
