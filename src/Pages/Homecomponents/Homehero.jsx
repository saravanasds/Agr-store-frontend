import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import heroimg from "./HomeImages/heroimg.jpg";
import heroslideimg1 from "./HomeImages/heroslideimg1.png";
import heroslideimg2 from "./HomeImages/heroslideimg2.jpg";

const data = [
  {
    img: heroslideimg1,
  },
  {
    img: heroslideimg2,
  },
];

const Homehero = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        className="lg:w-full min-h-[500px] md:py-5 h-auto flex  justify-center items-center"
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Static content */}
        <div className="lg:w-[85%] lg:h-[70%] h-auto md:gap-10 gap-10 w-5/6 md:w-1/2  flex lg:flex-row md:flex-col flex-col-reverse justify-center items-center lg:gap-10  p-5 ">
        
          <div className="lg:w-full lg:h-full w-full md:h-[50%] py-3 flex flex-col justify-center px-5 lg:px-5 lg:py-2 item-center lg:items-start gap-5 ">
            <h4 className="lg:text-xl text-lg font-semibold tracking-wider text-center text-[rgb(255,181,36)] lg:mb-3">
              100% Organic Food
            </h4>
            <h2 className="lg:text-6xl text-4xl font-bold tracking-wider text-center lg:text-start text-[rgb(129,196,8)] lg:mb-4">
              Find What You Love Here!
            </h2>
            {/* <button className=" lg:w-[80%] lg:text-lg lg:px-6 lg:py-4 px-4 py-2 text-center tracking-wider border-[rgb(255,181,36)] border-2 bg-[#3E4095] hover:scale-[1.1] transform transition-all duration-300 text-white rounded-3xl font-bold">
              View More
            </button> */}
          </div>

          {/* Slider */}
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <div className="w-full h-full bg-[rgb(255,181,36)] rounded-2xl">
              <Slider {...settings}>
                {data.map((m, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center rounded-2xl"
                  >
                    <img
                      className="w-full h-full object-cover rounded-2xl lg:object-fill"
                      src={m.img}
                      alt={`Slide ${index}`}
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
