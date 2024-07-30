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
  {
    id: 5,
    img:heroslideimg1,
    h: "Hello",
    p: "helooo this id AGr store",
  },
];

const Homecatagory = () => {
  return (
    <>
     

    <div class="w-full min-h-[600px] flex justify-center items-center gap-5 flex-wrap p-4 lg:px-10 py-20 lg:py-0">
       
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {data.map((d, index) => (
                <div key={index} className="bg-[rgb(244,246,248)] rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full h-[200px] flex justify-center items-center">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src={d.img}
                            alt={`Slide ${index}`}
                        />
                    </div>
                    <div className="w-full text-center py-5 text-[rgb(69,89,91)]">
                        <h2 className="text-xl font-semibold">{d.h}</h2>
                        <p className="text-md">{d.p}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>


    </>
  );
};

export default Homecatagory;
