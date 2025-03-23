


import React, { useState } from "react";
import bn from "./photos//Categories/D.jpeg";

const Kanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[200px] sm:h-[360px] md:h-[450px] cursor-pointer overflow-hidden shadow-lg rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with shadow and smooth scaling effect */}
      <img
        src={bn}
        alt="Banner"
        className={`w-auto h-66 object-cover transition-transform duration-500 ease-in-out ${
          isHovered ? "scale-110" : "scale-100"
        } shadow-xl`}
      />

      {/* Overlay with fade effect on hover */}
      {/* <div
        className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-500 ${
          isHovered ? "opacity-40" : "opacity-60"
        }`}
      ></div> */}

      {/* Overlay content */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-8 text-center">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4">
          SECRETS FROM THE KITCHEN
        </h1>
      </div> */}
    </div>
  );
};

export default Kanner;
