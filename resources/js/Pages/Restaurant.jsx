import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from './photos/Restaux/hero-3.png';
import img2 from './photos/Restaux/hero-4.png';
import img3 from './photos/Restaux/hero-5.png';
import img4 from './photos/Restaux/hero-6.png';
import img5 from './photos/Restaux/hero-7.png';

const Restaurant = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="w-full bg-black py-10">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-6xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent font-bold font-dancing-script  mb-4">
          Welcome to Our Restaurant
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-8">
          Experience the finest dining with our exquisite menu, crafted with the freshest ingredients and served in a cozy, elegant atmosphere. Join us for an unforgettable culinary journey.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Restaurant ${index + 1}`} className="w-full h-96 object-cover rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Restaurant;