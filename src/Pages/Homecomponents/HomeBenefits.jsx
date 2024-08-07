import React from 'react'
import { IoIosPeople } from "react-icons/io";

const HomeBenefits = () => {
  return (
    <div class=" w-full  min-h-[500px] flex justify-center items-center lg:container mx-auto">
    <div class="w-full h-[100%] flex justify-center items-center ">
        {/* <div class="bg-[rgb(65,144,223)] flex justify-center items-center lg:my-10 p-5 w-full h-[100%] rounded "> */}

            <div class=" w-full h-auto lg:min-h-[350px] grid grid-cols-1 md:grid-cols-2 gap-10 md:py-20 lg:grid-cols-4 lg:py-5 lg:px-10 py-10 justify-items-center">
               
                    <div class="bg-white  p-5 flex flex-col justify-center items-center lg:min-w-[250px] h-[100%] border-[1px] border-[rgb(129,196,8)] rounded-xl hover:scale-[1.1] transform transition-all duration-300 hover:shadow-xl">
                        <IoIosPeople class="  text-[rgb(255,181,36)] text-9xl"/>
                        <h4 class="text-2xl text-wrap font-medium text-[rgb(129,196,8)] mb-3">Satisfied customers</h4>
                        <h1 class="text-3xl font-bold text-[rgb(69,89,91)]">1963</h1>
                    </div>
               

                    <div class="bg-white  p-5 flex flex-col justify-center items-center lg:min-w-[250px] h-[100%] border-[1px] border-[rgb(129,196,8)] rounded-xl hover:scale-[1.1] transform transition-all duration-300 hover:shadow-xl">
                        <IoIosPeople class=" text-[rgb(255,181,36)] text-9xl"/>
                        <h4 class="text-2xl font-medium text-[rgb(129,196,8)] mb-3">Quality of service</h4>
                        <h1 class="text-3xl font-bold text-[rgb(69,89,91)]">99%</h1>
                    </div>
              
              
                    <div class="bg-white  p-5 flex flex-col  justify-center items-center lg:min-w-[250px] h-[100%] border-[1px] border-[rgb(129,196,8)] rounded-xl hover:scale-[1.1] transform transition-all duration-300 hover:shadow-xl">
                        <IoIosPeople class=" text-[rgb(255,181,36)] text-9xl"/>
                        <h4 class="text-2xl text-wrap font-medium text-[rgb(129,196,8)] mb-3">Quality certificates</h4>
                        <h1 class="text-3xl font-bold text-[rgb(69,89,91)]">33</h1>
                    </div>
               
                
                    <div class="bg-white  p-5 flex flex-col justify-center items-center lg:min-w-[250px] h-[100%] border-[1px] border-[rgb(129,196,8)] rounded-xl hover:scale-[1.1] transform transition-all duration-300 hover:shadow-xl">
                        <IoIosPeople class=" text-[rgb(255,181,36)] text-9xl"/>
                        <h4 class="text-2xl text-wrap font-medium text-[rgb(129,196,8)] mb-3">Available Products</h4>
                        <h1 class="text-3xl font-bold text-[rgb(69,89,91)]">789</h1>
                    </div>
                
            </div>
        {/* </div> */}
    </div>
</div>

  )
}

export default HomeBenefits