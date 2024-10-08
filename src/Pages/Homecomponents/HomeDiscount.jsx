import React from "react";
import Strawberry from "./HomeImages/Strawberry.jpg";
import Banana from "./HomeImages/Banana.png";
import Brocoli from "./HomeImages/Brocoli.jpg";

const ServiceSection = () => {
  return (
    <div className="container mx-auto flex justify-center items-center py-20 ">
      <div className="container w-full gap-5 py-5 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl">
         
          <div className="w-full min-h-[420px] border-[1px] border-[rgb(255,181,36)] rounded-xl relative hover:scale-[1.1] transform transition-all duration-300 hover:shadow-xl">
            <img
              className="w-full h-[65%] object-cover rounded-t-xl"
              src={Strawberry}
              alt=""
            />
            <div className="w-full h-[35%] bg-[rgb(255,181,36)] absolute bottom-0 rounded-b-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="w-[70%] h-[35%] flex flex-col justify-center items-center -mb-32 bg-[rgb(129,196,8)] rounded-xl">
                <h2 className="text-white font-semibold text-lg">Offered Commision Also</h2>
                <p className="text-[rgb(69,89,91)] text-2xl font-medium">2% OFF (free)</p>
              </span>
            </div>
          </div>

          <div className="w-full min-h-[420px] border-[1px] border-[rgb(69,89,91)] rounded-xl relative hover:scale-[1.1] transform transition-all duration-300 hover:shadow-xl">
            <img
              className="w-full h-[65%] object-cover rounded-t-xl"
              src={Banana}
              alt=""
            />
            <div className="w-full h-[35%] bg-[rgb(69,89,91)] absolute bottom-0 rounded-b-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="w-[70%] h-[35%] flex flex-col justify-center items-center -mb-32 bg-[rgb(244,246,248)] rounded-xl">
              <h2 className="text-[rgb(129,196,8)] font-semibold text-lg">Tasty Fruits</h2>
              <p className="text-[rgb(69,89,91)] text-2xl font-medium">Free Delivery</p>
              </span>
            </div>
          </div>

            <div className="w-full min-h-[420px] border-[1px] border-[rgb(129,196,8)] rounded-xl relative hover:scale-[1.1] transform transition-all duration-300 hover:shadow-xl">
            <img
              className="w-full h-[65%] object-cover rounded-t-xl"
              src={Brocoli}
              alt=""
            />
            <div className="w-full h-[35%] bg-[rgb(129,196,8)] absolute bottom-0 rounded-b-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="w-[70%] h-[35%] flex flex-col justify-center items-center -mb-32 bg-[rgb(255,181,36)] rounded-xl">
              <h2 className="text-white font-semibold text-lg">As Member</h2>
              <p className="text-[rgb(69,89,91)] text-2xl font-medium">Discount 30%</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;


