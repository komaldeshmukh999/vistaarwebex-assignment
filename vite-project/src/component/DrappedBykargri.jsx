import React from 'react';
// import { Instagram } from 'lucide-react';
import girl from "../assets/footer_image/girl.png"
import love from "../assets/footer_image/love.png"
import orangesaree from "../assets/footer_image/orangesaree.png"
import blue from "../assets/footer_image/blue.png"
import sindoori from "../assets/footer_image/sindoori.png"
import arrow from "../assets/arrow.png"

const DrappedByKarigri = () => {
  return (
    <div className="flex flex-col gap-10">
         <div className="flex justify-center items-center flex-col">
                            {/* Remove extra line height */}
                            <div className="font-kalnia leading-none text-3xl">Draped By Atulya Karigri</div>
                            
                            {/* Pull image up slightly */}
                            <img 
                              src={arrow} 
                              alt="Arrow"  
                              className="block w-auto -mt-1" 
                            />
        </div>

         <div>
      {/* Grid container matching Figma layout */}
      <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[800px] lg:h-[600px]">
        
        {/* Large left image - Fendi model with Instagram overlay */}
        <div className="col-span-12 lg:col-span-4 row-span-3 lg:row-span-6 rounded-2xl overflow-hidden relative">
          <img 
            src={girl}
            alt="Atulya Karigari model with Fendi bag"
            className="w-full h-full object-cover"
          />
          {/* Instagram overlay */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px] rounded-xl mb-3">
              <div className="bg-white p-2 rounded-xl">
                {/* <Instagram className="w-6 h-6 text-black" /> */}
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-purple-600 font-medium text-sm">@atulyakarigariindia</p>
            </div>
          </div>
        </div>

        {/* Top center image - Couple */}
        <div className="col-span-6 lg:col-span-3 row-span-2 lg:row-span-3 rounded-2xl overflow-hidden">
          <img 
            src={love}
            alt="Couple in traditional wear - Mohabbat"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top right image - Sitashma silk */}
        <div className="col-span-6 lg:col-span-5 row-span-2 lg:row-span-3 rounded-2xl overflow-hidden">
          <img 
            src={orangesaree}
            alt="Sitashma Pure Tissue Silk"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom center image - Hand with jewelry */}
        <div className="col-span-6 lg:col-span-4 row-span-1 lg:row-span-3 rounded-2xl overflow-hidden">
          <img 
            src={blue}
            alt="Traditional jewelry and fabric details"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom right image - Orange saree model */}
        <div className="col-span-6 lg:col-span-4 row-span-1 lg:row-span-3 rounded-2xl overflow-hidden">
          <img 
            src={sindoori}
            alt="Model in orange saree outdoors"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>
    </div>
    </div>
   
  );
};

export default DrappedByKarigri;
