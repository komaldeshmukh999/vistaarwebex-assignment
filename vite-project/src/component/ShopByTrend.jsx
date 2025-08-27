 

"use client"
import arrow from "../assets/arrow.png"
import { ArrowUpRight } from "lucide-react"

export default function ShopByTrend() {
 const trends = [
    {
      id: 1,
      title: "Minimal Must-haves",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e195c869952ce31cf1a96fcbee5eb02f9d61ef4b.jpg-XBCqWS5JavKAcKZMd7B44m1rmR5l9M.jpeg",
      alt: "Golden traditional wear with pearl jewelry",
    },
    {
      id: 2,
      title: "Print Parade",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ca0b2a5e914a9340d3ba776a77858df0e409feac.jpg-MqwBDtjJ9uhyXZA5mlIXf7wUgfHnbJ.jpeg",
      alt: "Red traditional wear with silver jewelry and patterns",
    },
    {
      id: 3,
      title: "Pastel Perfection",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-10%20at%2018.05.30-3l1VSheoPrdHg76tpKDmYTU8qFLNx8.jpeg",
      alt: "Woman in pastel pink floral saree with delicate hand positioning",
    }]

  return (
    <section>
      <div className="flex flex-col gap-10">
        {/* Section Title with Decorative Elements */}
       <div className="flex justify-center items-center flex-col">
              <div className="font-kalnia leading-none text-2xl sm:text-3xl">
                Shop By Trend
              </div>
              <img
                src={arrow}
                alt="Arrow"
                className="block w-6 sm:w-auto -mt-1"
              />
        </div>

        {/* Trend Cards Container */}
        <div className="relative">
          {/* Desktop: Grid layout for all 3 items */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow h-96">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={trend.image || `/placeholder.svg?height=320&width=400&query=${trend.title}`}
                      alt={trend.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="w-16 h-16 bg-[#8B1538] border-8 border-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#A01B47] transition-colors">
                      <ArrowUpRight className="w-8 h-8 text-white stroke-[3]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F4C430] transition-colors">
                      {trend.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

         
          </div>
         
          




       

        
         
       

          {/* Mobile/Tablet: Horizontal scroll */}
          <div className="lg:hidden">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2">
              {trends.map((trend, index) => (
                <div key={index} className="flex-shrink-0 w-80 sm:w-96 group cursor-pointer">
                  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow h-96">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={trend.image || `/placeholder.svg?height=320&width=400&query=${trend.title}`}
                        alt={trend.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="w-16 h-16 bg-[#8B1538] border-8 border-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#A01B47] transition-colors">
                        <ArrowUpRight className="w-8 h-8 text-white stroke-[3]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F4C430] transition-colors">
                        {trend.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
              
          
            </div>
            
            

            {/* Scroll indicator dots for mobile */}
            <div className="flex justify-center space-x-2 mt-6">
              {trends.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
              ))}
            </div>
          </div>
          
        </div>
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


