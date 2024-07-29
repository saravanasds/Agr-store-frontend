import React from "react";
import { IoPerson } from "react-icons/io5";
import heroslideimg1 from "./HomeImages/heroslideimg1.png";
import heroslideimg2 from "./HomeImages/heroslideimg2.jpg";

const data = [
  {
    id: 1,
    img:heroslideimg1,
    h: "Hello",
    p: "helooo this id AGr store",
  },
  {
    id: 2,
    img:heroslideimg2,
    h: "Hello",
    p: "helooo this id AGr store",
  },
  {
    id: 3,
    img:heroslideimg1,
    h: "Hello",
    p: "helooo this id AGr store",
  },
  {
    id: 4,
    img:heroslideimg2,
    h: "Hello",
    p: "helooo this id AGr store",
  },
];

const Homecatagory = () => {
  return (
    <>
      <div className="w-[100%] min-h-[600px] flex justify-center items-center gap-5 ">
       
          {data.map((d,index) => (
             <div key={index} className="w-[270px] h-[300px] grid grid-col-4 rounded-xl bg-[rgb(244,246,248)]">
              <div className="w-[100%] h-[100%] flex justify-center items-center p-3">
              <img
                    className="w-[250px] h-[200px]  rounded-full "
                    src={d.img}
                    alt={`Slide ${index}`}
                    style={{backgroundPosition:"center",backgroundSize:"cover"}}
                  />
              </div>
              <div className="w-[100%] h-[100%] text-center py-3 text-[rgb(69,89,91)]">
                <h2 className="text-xl font-semibold">{d.h}</h2>
                <h2 className="text-md">{d.p}</h2>
              </div>
            </div>
          
            
          ))}
        </div>
     
    </>
  );
};

export default Homecatagory;
