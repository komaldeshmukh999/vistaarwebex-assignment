import React from 'react';
import img from "../assets/summersaree.png";
import img1 from "../assets/summersaree2.png";
import img2 from "../assets/summersaree3.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col">
      {/* Top 3 Images */}
      <div className="flex">
        <img src={img} alt="Image 1" className="w-1/3 h-auto" />
        <img src={img1} alt="Image 2" className="w-1/3 h-auto" />
        <img src={img2} alt="Image 3" className="w-1/3 h-auto" />
      </div>

      {/* Bottom Banner */}
      <div className="flex flex-wrap md:flex-nowrap justify-around items-center font-normal bg-[#F09D8D] text-[#FFFFFF] text-center p-6 md:h-[170px] font-['Kalnia'] gap-6">
        {/* Left Heading */}
        <div className="text-2xl sm:text-3xl md:text-4xl w-full md:w-auto">
          SHOP AFFORDABLE RANGE
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-around gap-6 mt-4 md:mt-0 w-full md:w-auto">
          {/* Under ₹2000 */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xs sm:text-sm">UNDER</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl">₹2000</h1>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-[#ffffff] mx-4"></div>

          {/* Discount */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xs sm:text-sm font-['Lato']">upto</p>
            <div className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              20%
              <p className="text-xs sm:text-sm">off</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


