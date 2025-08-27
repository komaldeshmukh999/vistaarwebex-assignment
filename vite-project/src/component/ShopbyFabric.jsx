// import React from 'react'
import arrow from "../assets/arrow.png";
import Silkfabric from "../assets/Fabric/Silk.png"
import Cottonfabric from "../assets/Fabric/Cotton.png"
import Geogettefabric from "../assets/Fabric/Georgette.png"
import Organzafabric from "../assets/Fabric/Organza.png"
import Blendedfabric from "../assets/Fabric/Blended.png"
import { useState, useRef, useEffect } from "react"


"use client"


export default function ShopByFabric() {
  const scrollContainerRef = useRef(null)

  const fabrics = [
  {
    id: 1,
    name: "Silk",
    image:Silkfabric,
  },
  {
    id: 2,
    name: "Cotton",
    image: Cottonfabric,
  },
  {
    id: 3,
    name: "Georgette",
    image:Geogettefabric,
  },
  {
    id: 4,
    name: "Organza",
    image:Organzafabric,
  },
  {
    id: 5,
    name: "Blended",
    image:Blendedfabric,
  },
]

  return (
    <section>
      <div className="flex flex-col gap-10">
        {/* Section Title */}
       <div className="flex justify-center items-center flex-col">
              <div className="font-kalnia leading-none text-2xl sm:text-3xl">
                Shop By Fabric
              </div>
              <img
                src={arrow}
                alt="Arrow"
                className="block w-6 sm:w-auto -mt-1"
              />
            </div>

        {/* Fabric Cards Container */}
        <div className="relative">
          {/* Desktop: Grid layout for all 5 items */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 mb-8">
            {fabrics.map((fabric, index) => (
              <div key={index} className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={fabric.image || "/placeholder.svg"}
                      alt={`${fabric.name} fabric`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{fabric.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: Horizontal scroll */}
          <div className="lg:hidden mb-8">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" },
              }}
            >
              {fabrics.map((fabric, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 sm:w-56 group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={fabric.image || "/placeholder.svg"}
                        alt={`${fabric.name} fabric`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">{fabric.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator dots for mobile */}
            <div className="flex justify-center space-x-2 mt-4">
              {fabrics.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
              ))}
            </div>
          </div>
        </div>

        {/* Explore Button */}
       
   
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

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}


