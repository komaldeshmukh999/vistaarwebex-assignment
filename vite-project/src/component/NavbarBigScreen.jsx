import React, { useState } from "react";
import { PiHeartLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/logo.png"
export default function NavbarBigScreen() {
    return (
        <div className="w-full">
            <div className="flex justify-center items-center bg-[#6D001D] w-full h-[35px] text-xs   md:text-base  text-white">
                Step Into Style and Discover Your Signature Look
            </div>
            <div className="hidden md:flex bg-white  gap-48 justify-center items-center h-[94px]">
                {/* logo */}
                 {/* <img src={logo} className="bg-white"/> */}
                <div className="flex">Atulya karigri</div>

                {/* List items */}
                <div className="flex gap-26 justify-center items-center">
                    <div>
                        <ul className="flex gap-8 items-center md:text-sm text-[#686868]">
                            <li><a>HANDLOOM</a></li>
                            <li><a>SHOP BY OCASSION</a></li>
                            <li><a>CRAFT STORIES</a></li>
                            <li><a>ABOUT US</a></li>
                        </ul>
                    </div>


                    <div className="flex gap-2  text-[#686868]">
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


        </div>

    )
}
