import React from "react";
import { PiHeartLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/logo.png"

export default function NavbarBigScreen() {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Top Banner */}
      <div className="flex justify-center items-center bg-[#6D001D] w-full h-9 text-xs md:text-base text-white">
        Step Into Style and Discover Your Signature Look
      </div>

      {/* Main Navbar */}
      <div className="hidden md:flex bg-white justify-between items-center h-24 px-10 shadow-md">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Atulya Karigari Logo"
            className="w-16 h-auto object-contain"
          />
          {/* <span className="text-xl font-bold text-[#6D001D] tracking-widest">
            Atulya Karigari
          </span> */}
        </div>

        {/* Nav Links */}
        <ul className="flex gap-8 items-center text-sm text-[#686868] font-medium">
          <li><a href="#">HANDLOOM</a></li>
          <li><a href="#">SHOP BY OCCASION</a></li>
          <li><a href="#">CRAFT STORIES</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>

        {/* Right Section */}
        <div className="flex gap-5 items-center text-[#686868]">
          {/* Search Bar */}
          <div className="flex items-center border border-[#6D001D] rounded-full bg-[#F09D8D] px-5 py-5">
            <input
              type="text"
              placeholder="Search for Banarasi Sarees"
              className="outline-none text-white placeholder-white text-sm px-3 py-1 bg-transparent w-52"
            />
            <IoIosSearch size={20} className="text-[#6D001D]" />
          </div>

          <PiHeartLight size={24} />
          <CiShoppingCart size={24} />
          <button className="px-3 py-1 border border-[#6D001D] rounded text-[#6D001D] hover:bg-[#6D001D] hover:text-white transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

