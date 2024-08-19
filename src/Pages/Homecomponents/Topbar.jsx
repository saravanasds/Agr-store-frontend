import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Topbar = () => {
  return (
    <>
      <div className="hidden md:flex flex-col">
        <div className="w-full bg-[rgb(129,196,8)] text-white lg:px-20 text-sm tracking-wider overflow-hidden py-2">
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* Left Side: Address and Email */}
            <div className="hidden md:flex   lg:justify-evenly md:justify-center items-center lg:gap-4">
              <div className="hidden lg:flex items-center gap-2 text-[rgb(255,181,36)]">
                <MdLocationPin className="text-[#3E4095] w-6 h-6 rounded-full mt-1" />
                <a href="#" className="text-white">
                  123 Street, New York
                </a>
              </div>
              <div className="flex items-center gap-2 hover:text-[rgb(255,181,36)] ">
                <IoMdMail className="text-[#3E4095] w-6 h-6 rounded-full mt-1" />
                <a href="#" className="hover:underline underline-offset-4 font-semibold">
                  email@example.com
                </a>
              </div>
            </div>

            {/* Center: Links */}
            <div className="flex items-center gap-2 hover:text-[rgb(255,181,36)] ">
              <FaPhone className="text-[#3E4095] w-6 h-6 rounded-full mt-1"/>
              <p className="tracking-wider" >9994442222</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Topbar;
