import { ArrowUpRight, Star, Heart } from "lucide-react"
import girls from "../assets/footer_image/girls.png"
import arrow from "../assets/arrow.png"
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Atulyakarigari piece. Truly wearable art.",
      name: "Nivedita Roy",
      location: "Kolkata",
      avatar: "/customer-avatar.png",
      rating: 5,
    },
    {
      id: 2,
      text: "As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Atulyakarigari piece. Truly wearable art.",
      name: "Nivedita Roy",
      location: "Kolkata",
      avatar: "/customer-avatar.png",
      rating: 5,
    },
    {
      id: 3,
      text: "As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Atulyakarigari piece. Truly wearable art.",
      name: "Nivedita Roy",
      location: "Kolkata",
      avatar: "/customer-avatar.png",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="flex flex-col gap-10">
        {/* Section Title */}
        <div className="flex justify-center items-center flex-col mb-2.5">
               <div className="font-kalnia leading-none text-2xl sm:text-3xl">
                 Testimonial
               </div>
               <img
                 src={arrow}
                 alt="Arrow"
                 className="block w-6 sm:w-auto -mt-1"
               />
             </div>


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image with Speech Bubble */}
           <div className="relative">
    {/* Speech Bubble */}
    <div className="absolute z-10 top-0 left-0 rounded-lg p-4 shadow-lg">
      {/* Speech Bubble Text */}
      <div className="space-y-2">
        <h3 className="text-xl md:text-4xl font-bold inline-block bg-white text-gray-800 leading-loose border-amber-50">
          Hear from our satisfied
        </h3>
        <div className="flex items-center gap-2">
          <h3 className="text-xl md:text-4xl font-bold inline-block bg-white text-gray-800 leading-loose">
            Clients have to say.
             <Heart className="w-6 h-6 text-[#8B1538] fill-current inline-block bg-white" />
          </h3>
         
        </div>
      </div>

      {/* Speech bubble tail */}
     
    </div>

    {/* Image */}
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
  <img
    src={girls}
    alt="Three women wearing beautiful handloom sarees"
    className="w-full h-full object-cover object-top"
  />
</div>
  </div>


          {/* Right Side - Testimonial Cards Container */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
            <div className="flex flex-col gap-10">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative bg-[#8B1538] rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow group"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="w-5 h-20 text-[#F4C430] fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-sm md:text-base leading-relaxed mb-6">"{testimonial.text}"</p>

                  {/* Customer Info and Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                        <img
                          src={testimonial.avatar || "/placeholder.svg?height=40&width=40"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                        <p className="text-white/80 text-xs">{testimonial.location}</p>
                      </div>
                    </div>

                    {/* Arrow Icon */}

                    <div className="absolute -bottom-5 -right-0 z-0">
                    <div className="w-16 h-16 bg-[#F09D8D] border-8 border-white rounded flex items-center justify-center shadow-lg group-hover:bg-[#F09D8D] transition-colors">
                      <ArrowUpRight className="w-8 h-8 text-white stroke-[3]" />
                    </div>
                  </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


