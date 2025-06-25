import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../assets/images/fwm1.jpg";
import img2 from "../assets/images/fwm2.jpg";
import img3 from "../assets/images/fwm3.jpg";
import slide4 from "../assets/images/fwm4.jpg";
import slide5 from "../assets/images/fwm5.jpg";




const images = [img1, img2, img3];


const ImageCarousel = () => {
 


  return (
      <div className="w-full min-h-screen bg-gradient-to-b from-[#1C2563] to-[#B5B2D9] flex flex-col items-center justify-center p-8 space-y-6">
      
      {/* Top Text */}
      <h2 className="text-white text-center italic text-lg md:text-2xl max-w-3xl leading-relaxed">
        Let us transport you to the fairytale worlds of your favourite Disney stories and immerse yourself in the magic of Disneyland.
      </h2>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-4 mt-4">
        
        {/* Left Image */}
        <img
          src={images[0]}
          alt="Left"
          className="w-[240px] h-[300px] object-cover rounded-xl transition duration-500 hover:scale-105"
        />

        {/* Center Image with Text */}
        <div className="relative w-[360px] h-[300px] overflow-hidden rounded-xl">
          <img
            src={images[1]}
            alt="Center"
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-white">
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              DISNEYLAND
              <br />
              PARIS
            </h3>
          </div>
        </div>

        {/* Right Image */}
        <img
          src={images[2]}
          alt="Right"
          className="w-[240px] h-[300px] object-cover rounded-xl transition duration-500 hover:scale-105"
        />
      </div>

      {/* Nav Icons */}
      <div className="flex items-center justify-center gap-6 pt-6">
        <FaChevronLeft className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
        <FaChevronRight className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
      </div>
    </div>
  );
};
export default ImageCarousel;
