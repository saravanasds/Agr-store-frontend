import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import heroimg from "./HomeImages/heroimg.jpg";
import heroslideimg1 from "./HomeImages/heroslideimg1.png";
import heroslideimg2 from "./HomeImages/heroslideimg2.jpg";

const data = [
  {
    img : heroslideimg1,
  },
  {
    img: heroslideimg2,
  },
];

const Homehero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        className="w-full h-[500px] flex justify-center items-center "
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative", // Ensure that child elements can be positioned absolutely
        }}
      >
        {/* Static content */}
        <div className="w-[85%] h-[70%] flex justify-center items-center gap-10 ">
          <div className="w-[55%] h-[100%] flex flex-col justify-center items-start gap-5">
            <h4 className="text-xl font-semibold tracking-wider text-[rgb(255,181,36)] mb-5">
              100% Organic Food
            </h4>
            <h2 className="text-6xl font-bold tracking-wider text-[rgb(129,196,8)] mb-5">
              Find What You Love Here!
            </h2>
            <button className=" w-[90%] text-lg px-6 py-4 tracking-wider border-[rgb(255,181,36)] border-2 bg-[rgb(129,196,8)] hover:bg-[rgb(152,204,55)] text-white rounded-full">
              View More
            </button>
          </div>

          {/* Slider */}
          <div className="w-[50%] h-[100%] flex justify-center  items-center ">
          <div className="w-[70%] h-[75%]  bg-[rgb(255,181,36)] rounded-2xl">
            <Slider {...settings}>
              {data.map((m, index) => (
                <div key={index} className="flex justify-center items-center  rounded-2xl">
                  <img
                    className="w-[100%] h-[100%]  rounded-2xl  "
                    src={m.img}
                    alt={`Slide ${index}`}
                    style={{backgroundPosition:"center",backgroundSize:"cover"}}
                  />
                </div>
              ))}
            </Slider>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homehero;



// import React from "react";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";
// import heroimg from "./HomeImages/heroimg.jpg";
// import heroslideimg1 from "./HomeImages/heroslideimg1.png";
// import heroslideimg2 from "./HomeImages/heroslideimg2.jpg";

// const data = [
//   {
//     img: heroslideimg1,
//   },
//   {
//     img: heroslideimg2,
//   },
// ];

// const Homehero = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <div
//         className="w-[100%] h-[500px] flex justify-center items-center "
//         style={{
//           backgroundImage: `url(${heroimg})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         {/* Content here */}

//         <div className="w-[85%] h-[80%] flex justify-center items-center  gap-5 ">
//           <div className="w-[50%] h-[80%]  p-2 flex flex-col   ">
//             <h4 className="text-xl font-semibold tracking-wider text-[rgb(255,181,36)] mb-10">
//               100% Organic food
//             </h4>
//             <h2 className="text-6xl font-bold tracking-wider  text-[rgb(129,196,8)] mb-10">
//               Find What You Love Here!
//             </h2>
//             <div>
//               <button className="w-[100%]  text-lg px-6 py-4 tracking-wider border-[rgb(255,181,36)] border-2 bg-[rgb(129,196,8)] hover:bg-[rgb(152,204,55)] text-white rounded-full ">
//                 View More
//               </button>
//             </div>
//           </div>

//           {/* <img className="w-[100%] h-[100%] px-3 bg-[rgb(255,181,36)] rounded-2xl" src={heroslideimg1} alt="" />
//                 <img className="w-[100%] h-[100%] px-3 rounded-2xl" src={heroslideimg2} alt="" /> */}

//           <Slider {...settings}>
//             {data.map((m) => (
//               <div className="w-[50%] h-[80%]  flex justify-center items-center bg-red-400 rounded-2xl">
//                 <div className="w-[100%] h-[100%] ">
//                   <img
//                     className="w-[100%] h-[100%] px-3 bg-[rgb(255,181,36)] rounded-2xl"
//                     src={m.img}
//                     alt=""
//                   />
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homehero;