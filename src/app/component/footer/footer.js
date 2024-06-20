import React from "react";
import { GoHeartFill } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <div className="bg-[#202b35] text-white font-OpenSans flex flex-col items-center justify-center">
        <p className="text-[22px] italic">
          Thanks for <span className="text-[#ecdf24] underline">visiting</span>
        </p>
        <p className="pt-10">© All rights reserved</p>
        <p className="flex items-center gap-2">
          Made with
          <span>
            <GoHeartFill className="text-[red]" />
          </span>
          by Kawser Hossain
        </p>
        <p>2024</p>
      </div>
    </>
  );
};

export default Footer;
