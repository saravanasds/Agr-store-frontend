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
        className="lg:w-full min-h-[250px] sm:min-h-[500px] md:py-5 h-auto flex justify-center items-start sm:items-center"
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Static content */}
        <div className="lg:w-[85%] lg:h-[70%] h-auto md:gap-10 gap-4 w-full md:w-[70%]  flex lg:flex-row flex-col justify-center items-center lg:gap-10 p-2 sm:p-4">
        
          <div className="lg:w-full lg:h-full w-full md:h-[50%] flex flex-col justify-center px-5 lg:px-5 py-2 item-center lg:items-start ">
            <h2 className="lg:text-6xl sm:text-4xl text-[14px] font-bold tracking-wider text-center lg:text-start text-[rgb(129,196,8)] lg:mb-4">
              Find What You Love Here!
            </h2>
          </div>

          {/* Slider */}
          <div className="w-full xs:w-[70%] lg:w-[40%] flex justify-center items-center">
            <div className="w-full h-full bg-[rgb(255,181,36)] rounded-md overflow-hidden">
              <Slider {...settings}>
                {data.map((m, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center rounded-md"
                  >
                    <img
                      className="w-full h-full object-cover rounded-md lg:object-fill"
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

