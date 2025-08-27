import React from 'react';
import arrow from "../assets/arrow.png";
import officewearimg from "../assets/officewear.png";
import festivewearimg from "../assets/festivewear.png";
import casualwearimg from "../assets/casualwear.png";

export default function ShopByOcassion() {
  let arr_of_img = [
    { img: officewearimg, label: "Office Wear" },
    { img: festivewearimg, label: "Festive Wear" },
    { img: casualwearimg, label: "Casual Wear" }
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Heading */}
      <div className="flex justify-center items-center flex-col">
        <div className="font-kalnia leading-none text-2xl sm:text-3xl">
          Shop By Occasion
        </div>
        <img
          src={arrow}
          alt="Arrow"
          className="block w-6 sm:w-auto -mt-1"
        />
      </div>

      {/* Image Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-4">
        {arr_of_img.map((obj, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl w-full sm:w-[300px] md:w-[350px] lg:w-[396px]"
          >
            {/* Image */}
            <div className="aspect-[3/4] rounded-[20px]">
              <img
                src={obj.img}
                className="object-cover object-top w-full h-full"
                alt={obj.label}
              />
            </div>
            {/* Label */}
            <div className="flex justify-center items-center text-lg sm:text-xl md:text-2xl text-pink-950 font-kalnia h-[12%] w-full absolute bottom-0 bg-[#f09d8dc3]">
              {obj.label}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center align-center">
    <button className="
  bg-[#1F4A5C] 
  text-white 
  font-extrabold 
  px-14 
  py-6 
  rounded-full 
  border-4 
  border-[#1F4A5C] 
  shadow-2xl 
  text-1xl
  tracking-wide
  transition-all 
  duration-300 
  hover:bg-white 
  hover:text-[#1F4A5C] 
  hover:shadow-1xl 
  transform 
  hover:scale-115
  w-30
  h-10
">
 Explore
</button>
</div>
    </div>
  );
}



