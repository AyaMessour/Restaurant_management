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
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent font-bold font-dancing-script mb-6">
          Welcome to Our Restaurant
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Experience the finest dining with our exquisite menu, crafted with the freshest ingredients and served in a cozy, elegant atmosphere.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(250,204,21,0.5)]" // yellow-400 shadow
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={img}
                  alt={`Restaurant ${index + 1}`}
                  className="w-full h-[500px] object-cover rounded-3xl transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Arrows */}
          <div className="swiper-button-next text-yellow-400 hover:text-yellow-300 scale-125"></div>
          <div className="swiper-button-prev text-yellow-400 hover:text-yellow-300 scale-125"></div>

          {/* Custom Pagination */}
          <div className="swiper-pagination mt-6"></div>
        </Swiper>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #facc15 !important; /* Tailwind yellow-400 */
        }

        .swiper-pagination-bullet {
          background-color: rgba(250, 204, 21, 0.6) !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #facc15 !important;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
};

export default Restaurant;
