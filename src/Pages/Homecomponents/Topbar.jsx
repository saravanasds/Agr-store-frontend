import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Topbar = () => {
  return (
    <>
    <div className="hidden md:flex flex-col">
  <div className="w-full md:w-[95%] lg:w-auto lg:mx-20 mx-auto bg-[rgb(129,196,8)] text-white lg:px-4 text-lg rounded-tl-2xl rounded-br-2xl rounded-bl-[50px] rounded-tr-[50px] tracking-wider overflow-hidden">
    <div className="flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Side: Address and Email */}
      <div className="hidden md:flex flex-col md:flex-row md:w-[40%] lg:justify-evenly md:justify-center items-center lg:gap-1">
        <div className="hidden lg:flex items-center gap-2 text-[rgb(255,181,36)]">
          <MdLocationPin className="text-lg" />
          <a href="#" className="text-white">
            123 Street, New York
          </a>
        </div>
        <div className="flex items-center gap-2 hover:text-[rgb(255,181,36)]">
          <IoMdMail className="text-[rgb(255,181,36)]"/>
          <a href="#" className="hover:underline underline-offset-4">
            Email@Example.com
          </a>
        </div>
      </div>

      {/* Center: Links */}
      <div className="w-full md:w-1/2 text-center flex md:flex-row gap-3 md:gap-5 justify-center items-center">
        <a href="#" className="lg:p-2 p-2 rounded-lg transition duration-800 hover:bg-[rgb(255,181,36)] hover:text-black">
          <small className="font-bold">Privacy Policy</small>
        </a>
        <a href="#" className="lg:p-2 p-2 rounded-lg transition duration-800 hover:bg-[rgb(255,181,36)] hover:text-black">
          <small className="font-bold">Terms of Use</small>
        </a>
        <a href="#" className="lg:p-2 p-2 rounded-lg transition duration-800 hover:bg-[rgb(255,181,36)] hover:text-black">
          <small className="font-bold">Sales and Refunds</small>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Topbar;
