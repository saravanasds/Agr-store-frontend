import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";


const Topbar = () => {
  return (
    <>
            
            <div class="w-full h-auto flex justify-center items-center">
        <div class="w-full lg:h-[10%] bg-[rgb(129,196,8)] text-white p-3 text-lg rounded-lg tracking-wider">
            <div class="w-full flex flex-col lg:flex-row justify-center items-center">
             
                <div class="w-full lg:w-1/2 flex  lg:flex-row justify-center items-center gap-5 mb-3 lg:mb-0">
                    <small class="flex justify-center items-center gap-2 text-[rgb(255,181,36)]">
                        <MdLocationPin className='text-lg' />
                        <a href="#" class="text-white">123 Street, New York</a>
                    </small>
                    <small class="flex justify-center items-center gap-2 text-[rgb(255,181,36)]">
                        <IoMdMail />
                        <a href="#" class="text-white">Email@Example.com</a>
                    </small>
                </div>
               
                <div class="w-full lg:w-1/2 flex lg:flex-row justify-center items-center gap-1 text-center">
                    <a href="#" class="text-white"><small>Privacy Policy</small></a>
                    <a href="#" class="text-white"><small>/Terms of Use</small></a>
                    <a href="#" class="text-white"><small>/Sales and Refunds</small></a>
                </div>
            </div>
        </div>
    </div>
           
    
    </>
  )
}

export default Topbar