import React from 'react';
import { TbWorld } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";


function Footer() {

  return (
    <>
      <div className="w-full bg-[rgb(69,89,91)]">
        <div className="w-full flex justify-center items-center py-5 ">

          <div className="w-full flex flex-col justify-center items-center ">
            <h2 className="w-full text-xl sm:text-3xl font-semibold text-white tracking-wider mb-4 text-center uppercase">
              Join With <span className="text-[rgb(129,196,8)] font-bold">AGR</span>
            </h2>
            <div className="w-full h-full md:py-5 flex flex-col md:flex-row justify-around items-center text-white gap-2 text-sm sm:text-lg">
              {/* <p className="tracking-wider flex justify-center items-center gap-2 mb-1"><FaLocationDot className='text-[rgb(255,181,36)]' />178/4, jevasakthi complex, periya kadaiveethi, palani - 624601</p>    */}
              <p className="tracking-wider flex justify-center items-center gap-2 mb-1"><SiGmail className='text-[rgb(255,181,36)] mt-1' /><a href="">agrpremium@gmail.com</a></p>
              <p className="flex justify-center items-center gap-2"><FaPhone className='text-[rgb(255,181,36)] ' />8778445828</p>
              <p className="tracking-wider flex justify-center items-center gap-2 mb-1"><TbWorld className='text-[rgb(255,181,36)] mt-1' /><a href="https://agrgroupofcompanies.in">agrgroupofcompanies.in</a></p>
            </div>
          </div>

        </div>

        {/* <div className="w-full h-auto flex justify-center items-center p-5 gap-10 py-5">
          <div className="w-[25%] h-auto border-2 border-[rgb(255,181,36)] text-white flex justify-center items-center  rounded-xl shadow-xl">
            <div className="w-[70%] flex flex-col justify-center items-center gap-3">
              <h2 className="text-md font-semibold tracking-wider">
                New User
              </h2>

            </div>
            <button className="w-[30%] px-6 py-2 font-semibold tracking-wider bg-[rgb(129,196,8)] text-white rounded-lg">
              Register
            </button>
          </div>

          <h3 className="text-4xl font-bold text-[rgb(129,196,8)] tracking-wider">
            AGR STORE
          </h3>

          <div className="w-[25%] h-auto border-2 border-[rgb(255,181,36)]  text-white flex justify-center items-center  rounded-xl shadow-xl">
            <div className="w-[70%] flex flex-col justify-center items-center gap-3">
              <h2 className="text-md font-semibold tracking-wider">
                Already a Member
              </h2>

            </div>
            <button className="w-[30%] px-6 py-2 font-semibold tracking-wider bg-[rgb(129,196,8)] text-white rounded-lg">
              Login
            </button>
          </div>
        </div> */}

        <div className=" w-full h-auto flex flex-col sm:flex-row p-3 px-10 text-white justify-between  items-center border-t-[1px] border-[rgb(255,181,36)] text-md font-semibold gap-4 text-sm sm:text-lg">
          <h2 className='tracking-wider font-normal'>Copyright@2024.</h2>
          <h2 className="font-normal tracking-wider text-center">
            Designed by{" "}
            <span className="text-[rgb(129,196,8)] font-normal tracking-wider">
              <a href="">SDS Technologies</a>
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
