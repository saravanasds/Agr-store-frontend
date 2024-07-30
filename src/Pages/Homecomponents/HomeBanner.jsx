import React from 'react'
import Strawberry from "./HomeImages/Strawberry.\jpg";

const HomeBenefit = () => {
  return (
    <div class=" w-full min-h-[600px]  flex justify-center items-center bg-[rgb(255,181,36)] p-10 lg:p-0">
    <div class="w-full container px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
            <div class="lg:col-span-1 ">
                <div class="py-4 md:text-center text-center">
                    <h1 class="text-white font-bold lg:text-7xl  text-5xl mb-5">Fresh Exotic Fruits</h1>
                    <p class="font-normal text-[rgb(69,89,91)] lg:text-6xl text-4xl mb-5">in Our Store</p>
                    <p class="mb-10 text-[rgb(69,89,91)] lg:text-normal text-normal ">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                    <a href="#" class="btn text-[rgb(69,89,91)] border-2 border-white rounded-full py-4 lg:px-36 md:px-28 px-20  hover:bg-[rgb(129,196,8)] hover:text-white ">BUY</a>
                </div>
            </div>
            <div class="lg:col-span-1 flex justify-center items-center lg:w-full lg:h-[100%] ">
                <div class="relative flex justify-center items-center" >
                    <img src={Strawberry} class="w-full lg:h-[80%] rounded " alt=""/>
                    <div class="flex items-center justify-center text-white border-2 border-[rgb(255,181,36)] bg-[rgb(129,196,8)] rounded-full absolute top-0 left-0 w-40 h-40">
                        <div class="flex flex-col">
                            <span class="text-4xl mb-0 ">$50</span>
                            <span class="text-xl text-muted mb-0">kg</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default HomeBenefit