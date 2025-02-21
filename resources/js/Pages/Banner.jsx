import React, { useState } from 'react';
import bn from "./photos/N.jpg";

const Banner = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="relative w-full h-auto cursor-pointer" onClick={handleImageClick}>
      {/* Image with transition */}
      <img 
        src={bn} 
        alt="Banner" 
        className={`w-full h-auto object-cover transition-transform duration-500 ease-in-out ${isClicked ? 'scale-110' : 'scale-100'}`} 
      />
      {/* Overlay with fade effect */}
      <div className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-500 ${isClicked ? 'opacity-30' : 'opacity-50'}`}></div>

      {/* Overlay content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">SCRETS FROM THE KITCHEN</h1>
        <p className="text-sm sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga veniam magnam, quaerat sunt eos, cupiditate ullam aspernatur consectetur, voluptatum dolores! Molestiae fugiat inventore exercitationem quibusdam aliquid saepe. Reprehenderit, illo.
        </p>
      </div>
    </div>
  );
};

export default Banner;
