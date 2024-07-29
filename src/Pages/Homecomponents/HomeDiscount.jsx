import React from "react";
import Strawberry from "./HomeImages/Strawberry.jpg";
import Banana from "./HomeImages/Banana.png";
import Brocoli from "./HomeImages/Brocoli.jpg";

// const services = [
//   {
//     img:Strawberry,
//     bgColor: "bg-secondary",
//     borderColor:"border-secondary",
//     contentBgColor: "bg-primary",
//     titleColor: "text-white",
//     title: "Fresh Apples",
//     description: "20% OFF",
//   },
//   {
//     img:Banana,
//     bgColor: "bg-dark",
//     borderColor: "border-dark",
//     contentBgColor: "bg-light",
//     titleColor: "text-primary",
//     title: "Tasty Fruits",
//     description: "Free delivery",
//   },
//   {
//     img:Brocoli,
//     bgColor: "bg-primary",
//     borderColor: "border-primary",
//     contentBgColor: "bg-secondary",
//     titleColor: "text-white",
//     title: "Exotic Vegitable",
//     description: "Discount 30$",
//   },
// ];

const ServiceSection = () => {
  return (
    <div className="container mx-auto flex justify-center items-center py-5 pb-20">
      <div className="container w-[85%] gap-5 py-5">
        <div className="grid grid-cols-3 gap-5 rounded-xl">
         
          <div className="w-[350px] h-[100%] border-[1px] border-[rgb(255,181,36)] rounded-xl relative">
            <img
              className="w-[100%] h-[65%] object-cover rounded-t-xl"
              src={Strawberry}
              alt=""
            />
            <div className="w-[100%] h-[35%] bg-[rgb(255,181,36)] absolute bottom-0 rounded-b-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="w-[70%] h-[35%] flex flex-col justify-center items-center -mb-32 bg-[rgb(129,196,8)] rounded-xl">
                <h2 className="text-white font-semibold text-lg">Fresh Apple</h2>
                <p className="text-[rgb(69,89,91)] text-2xl font-medium">20% OFF</p>
              </span>
            </div>
          </div>

          <div className="w-[350px] h-[420px] border-[1px] border-[rgb(69,89,91)] rounded-xl relative">
            <img
              className="w-[100%] h-[65%] object-cover rounded-t-xl"
              src={Banana}
              alt=""
            />
            <div className="w-[100%] h-[35%] bg-[rgb(69,89,91)] absolute bottom-0 rounded-b-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="w-[70%] h-[35%] flex flex-col justify-center items-center -mb-32 bg-[rgb(244,246,248)] rounded-xl">
              <h2 className="text-[rgb(129,196,8)] font-semibold text-lg">Tasty Fruits</h2>
              <p className="text-[rgb(69,89,91)] text-2xl font-medium">Free Delivery</p>
              </span>
            </div>
          </div>

            <div className="w-[350px] h-[420px] border-[1px] border-[rgb(129,196,8)] rounded-xl relative">
            <img
              className="w-[100%] h-[65%] object-cover rounded-t-xl"
              src={Brocoli}
              alt=""
            />
            <div className="w-[100%] h-[35%] bg-[rgb(129,196,8)] absolute bottom-0 rounded-b-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="w-[70%] h-[35%] flex flex-col justify-center items-center -mb-32 bg-[rgb(255,181,36)]   rounded-xl">
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

// {services.map((service, index) => (
//     <div key={index} className="w-full md:w-1/2 lg:w-[100%]">
//       <a href="#">
//         <div className={`service-item ${service.bgColor} rounded border ${service.borderColor}`}>
//           <img src={service.img} className=" rounded-t w-full" alt="" />
//           <div className="px-4 rounded-b ">
//             <div className={`service-content ${service.contentBgColor} text-center p-4 rounded`}>
//               <h5 className={`text-lg ${service.titleColor}`}>{service.title}</h5>
//               <h3 className="mb-0 text-xl">{service.description}</h3>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   ))}
