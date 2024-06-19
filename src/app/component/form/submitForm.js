import React from "react";

const SubmitForm = () => {
  const SubmitFormData = (e) => {
    e.preventDefault();
    console.log("first");
  };

  return (
    <>
      <div className="mx-auto text-white md:px-9 md:pt-4">
        <form>
          {/* Name & Email */}
          <div className="grid py-6 md:grid-cols-2">
            <input
              className="outline-none bg-[#202b35] py-4"
              type="text"
              placeholder="Enter Name"
            />
            <input
              className="outline-none bg-[#202b35] py-4"
              type="text"
              placeholder="Enter Email"
            />
          </div>

          {/* Text Area */}
          <div className="w-full ">
            <textarea
              rows={3}
              cols={4}
              className="w-full outline-none bg-[#262f38] placeholder:text-[14px]"
              placeholder="Write Message"
            />
          </div>
          <button className="bg-[#2222] w-full text-[18px] py-4" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SubmitForm;
