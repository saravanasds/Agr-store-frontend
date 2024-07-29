import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";


const Topbar = () => {
  return (
    <>
            <div className='w-[100%] h-auto flex  justify-center items-center '>
            <div class="w-[100%] h-[10%] bg-[rgb(129,196,8)] text-white p-3 text-lg  rounded-lg tracking-wider">
                <div class="w-[100%] flex  justify-center items-center ">
                    <div class="w-[50%] flex  justify-center items-center  gap-5">
                        <small className="flex  justify-center items-center gap-2 text-[rgb(255,181,36)]"><MdLocationPin className='text-lg'/><a href="#" class="text-white">123 Street, New York</a></small>
                        <small class="flex  justify-center items-center gap-2 text-[rgb(255,181,36)]"><IoMdMail/><a href="#" className="text-white">Email@Example.com</a></small>
                    </div>
                    <div class="w-[50%] text-center gap-5">
                        <a href="#" class="text-white"><small class="text-white ">Privacy Policy</small>/</a>
                        <a href="#" class="text-white"><small class="text-white ">Terms of Use</small>/</a>
                        <a href="#" class="text-white"><small class="text-white ">Sales and Refunds</small></a>
                    </div>
                </div>
            </div>
            </div>
           
    
    </>
  )
}

export default Topbar