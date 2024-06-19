import React from "react";
import SubmitForm from "./submitForm";

const Form = () => {
  return (
    <>
      <div id="Contract" className="font-OpenSans bg-[#202b35] p-6">
        <div className="flex flex-col items-center text-white">
          <p className="text-[25px] text-[#ded450] pb-3">Got an interesting job?</p>
          <div className="flex gap-4 text-[12px] py-2">
            <button className="bg-[#654141] rounded-[20px] h-[40px] w-[80px]">
              Call Mk
            </button>
            <button className="bg-[#6f4242] rounded-[20px] h-[40px] w-[100px]">
              Shoot an email
            </button>
          </div>
          <p className="text-[12px] text-[#ded450] py-2">OR?</p>
          <p className="text-[#8c8b7f]">Fill out the form below</p>
        </div>
        <SubmitForm />
      </div>
    </>
  );
};

export default Form;
