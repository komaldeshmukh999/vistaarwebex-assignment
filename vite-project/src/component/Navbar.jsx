import React, { useState } from "react";
import { PiHeartLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [openlist, setOpenList] = useState(false);
  const [opensearchbar, setOpenSearchbar] = useState(false);

  return (
    <div className="w-full relative">
      {/* Top Banner */}
      <div className="flex justify-center items-center bg-[#6D001D] w-full h-[35px] text-xs md:text-base text-white">
        Step Into Style and Discover Your Signature Look
      </div>

      {/* -------- Big Screen Navbar -------- */}
      <div className="hidden md:flex bg-white gap-48 justify-center items-center h-[94px]">
        {/* Logo */}
  <div className="flex items-center text-2xl font-bold tracking-wide bg-gradient-to-r from-[#FFD700] to-[#6D001D] bg-clip-text text-transparent">
  Atulya Karigari
</div>



        {/* Menu Items */}
        <div className="flex gap-26 justify-center items-center">
          <div>
            <ul className="flex gap-8 items-center md:text-sm text-[#686868]">
              <li><a>HANDLOOM</a></li>
              <li><a>SHOP BY OCASSION</a></li>
              <li><a>CRAFT STORIES</a></li>
              <li><a>ABOUT US</a></li>
            </ul>
          </div>

          {/* Search, Wishlist, Cart, Login */}
          <div className="flex gap-2 text-[#686868]">
            <div className="flex justify-center items-center border border-[#6D001D] rounded-full bg-[#F09D8D] gap-4 px- py-2">
              <input
                type="text"
                placeholder="Search for Banarasi Sarees"
                className="outline-none text-white placeholder-white placeholder:text-sm px-3 py-2 bg-transparent"
              />
              <IoIosSearch size={20} className="text-[#6D001D]" />
            </div>

            <div><PiHeartLight size={24} /></div>
            <div><CiShoppingCart size={24} /></div>
            <div><button>Login</button></div>
          </div>
        </div>
      </div>

      {/* -------- Mobile Navbar -------- */}
      <div className="relative flex justify-around items-center bg-amber-50 px-6 py-4 h-[5vh] lg:hidden md:hidden">
        {/* Hamburger Menu */}
        <TfiAlignJustify size={24} onClick={() => setOpenList(true)} />
        <div>Atulya Karigri</div>
        
        {/* Search Icon */}
        <IoIosSearch size={24} onClick={() => setOpenSearchbar(true)} />

        {/* Wishlist & Cart */}
        <button>
          <PiHeartLight size={24} />
        </button>
        <button>
          <CiShoppingCart size={24} />
        </button>

        {/* Search bar overlay */}
        {opensearchbar && (
          <div className="absolute inset-0 bg-white flex items-center z-50">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded outline-none"
            />
            <IoMdClose
              size={28}
              className="ml-3 cursor-pointer"
              onClick={() => setOpenSearchbar(false)}
            />
          </div>
        )}
      </div>

      {/* -------- Side Drawer Menu for Mobile -------- */}
      {/* Background Overlay */}
      {openlist && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpenList(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white z-50 p-6 transform transition-transform duration-300 ${
          openlist ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <IoMdClose
            size={28}
            className="cursor-pointer"
            onClick={() => setOpenList(false)}
          />
        </div>

        {/* Menu Items */}
        <ul className="mt-8 space-y-4 text-[#686868] text-lg">
          <li><a>Handloom</a></li>
          <li><a>Shop by Ocassion</a></li>
          <li><a>Craft Stories</a></li>
          <li><a>About us</a></li>
          <li><button>Login</button></li>
        </ul>
      </div>
    </div>
  );
}



// "use client"

// import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react"
// import { useState } from "react"

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <div className="w-full">
//       {/* Top Banner */}
//       <div className="bg-[#8B1538] text-white text-center py-2 px-4">
//         <p className="text-sm font-medium">Step into Style and Discover Your Signature Look</p>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-[#FDF6E3] border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex items-center space-x-2">
//               <span className="text-2xl font-bold text-[#8B1538]">Atulya</span>
//               <span className="bg-[#F4C430] text-[#8B1538] px-3 py-1 rounded-full text-sm font-semibold">Karigari</span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#" className="text-gray-700 hover:text-[#8B1538] font-medium transition-colors">
//                 HANDLOOM
//               </a>
//               <a href="#" className="text-gray-700 hover:text-[#8B1538] font-medium transition-colors">
//                 SHOP BY OCCASION
//               </a>
//               <a href="#" className="text-gray-700 hover:text-[#8B1538] font-medium transition-colors">
//                 CRAFT STORIES
//               </a>
//               <a href="#" className="text-gray-700 hover:text-[#8B1538] font-medium transition-colors">
//                 ABOUT US
//               </a>
//             </div>

//             {/* Search Bar and Icons */}
//             <div className="flex items-center space-x-4">
//               {/* Search Bar - Hidden on mobile */}
//               <div className="hidden lg:flex items-center bg-[#F5E6D3] rounded-full px-4 py-2 w-64">
//                 <input
//                   type="text"
//                   placeholder="Search for Banarasi Sarees"
//                   className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-500"
//                 />
//                 <Search className="w-4 h-4 text-gray-500 ml-2" />
//               </div>

//               {/* Icons */}
//               <div className="flex items-center space-x-3">
//                 {/* Search icon for mobile */}
//                 <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
//                   <Search className="w-5 h-5 text-gray-700" />
//                 </button>

//                 <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                   <Heart className="w-5 h-5 text-gray-700" />
//                 </button>

//                 <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                   <ShoppingCart className="w-5 h-5 text-gray-700" />
//                 </button>

//                 {/* User Avatar */}
//                 <div className="w-10 h-10 rounded-full overflow-hidden">
//                   <img src="/woman-profile.png" alt="User Profile" className="w-full h-full object-cover" />
//                 </div>
//               </div>

//               {/* Mobile Menu Button */}
//               <button
//                 className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-5 h-5 text-gray-700" />
//                 ) : (
//                   <Menu className="w-5 h-5 text-gray-700" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden border-t border-gray-200 py-4">
//               {/* Mobile Search */}
//               <div className="lg:hidden mb-4">
//                 <div className="flex items-center bg-[#F5E6D3] rounded-full px-4 py-2 mx-2">
//                   <input
//                     type="text"
//                     placeholder="Search for Banarasi Sarees"
//                     className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-500"
//                   />
//                   <Search className="w-4 h-4 text-gray-500 ml-2" />
//                 </div>
//               </div>

//               {/* Mobile Navigation Links */}
//               <div className="space-y-2">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:text-[#8B1538] hover:bg-gray-50 font-medium transition-colors"
//                 >
//                   HANDLOOM
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:text-[#8B1538] hover:bg-gray-50 font-medium transition-colors"
//                 >
//                   SHOP BY OCCASION
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:text-[#8B1538] hover:bg-gray-50 font-medium transition-colors"
//                 >
//                   CRAFT STORIES
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:text-[#8B1538] hover:bg-gray-50 font-medium transition-colors"
//                 >
//                   ABOUT US
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   )
// }
