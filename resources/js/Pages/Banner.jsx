import React, { useState } from "react";
import bn from "./photos/N.jpg";

const Banner = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
<div className="relative w-full h-[360px] cursor-pointer overflow-hidden" onClick={handleImageClick}>
{/* Image with transition */}
      <img
        src={bn}
        alt="Banner"
        className={`w-full h-auto object-cover transition-transform duration-500 ease-in-out ${
          isClicked ? "scale-110" : "scale-100"
        }`}
      />
      {/* Overlay with fade effect */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-500 ${
          isClicked ? "opacity-30" : "opacity-50"
        }`}
      ></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
          SECRETS FROM THE KITCHEN
        </h1>
      </div>
      <br />
      
    </div>
  );
};

export default Banner;
