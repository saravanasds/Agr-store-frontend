import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import heroimg from "./HomeImages/heroimg.jpg";

const Homehero = () => {
  const [settingsData, setSettingsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettingsData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getSettings');
        setSettingsData(response.data.data[0]); // Assuming this returns the first settings object
      } catch (err) {
        console.error('Error fetching data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettingsData();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Set speed in milliseconds (3 seconds)
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div
      className="lg:w-full sm:min-h-[500px] md:py-5 h-auto flex justify-center items-center"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Static content */}
      <div className="lg:w-[90%] lg:h-[70%] h-auto md:gap-10 gap-2 w-full md:w-[70%] flex lg:flex-row flex-col justify-center items-center lg:gap-10 p-2 sm:p-4">
        <div className="lg:w-full lg:h-full w-full md:h-[50%] flex flex-col justify-center px-5  item-center lg:items-start">
          <h2 className="lg:text-6xl sm:text-4xl text-[14px] font-bold tracking-wider text-center lg:text-start text-[rgb(129,196,8)] lg:mb-4">
            {settingsData.heroHeading}
          </h2>
        </div>

        {/* Slider */}
        <div className="w-full xs:w-[70%] lg:w-[50%] flex justify-center items-center">
          <div className="w-full h-full rounded-md overflow-hidden">
            <Slider {...settings}>
              {settingsData.heroImages && settingsData.heroImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center rounded-md"
                >
                  <img
                    className="w-full h-full object-cover rounded-md lg:object-fill"
                    src={imageUrl}
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homehero;
