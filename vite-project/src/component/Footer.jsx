import React from "react";
import Logo from "../assets/logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-white text-[#222] min-h-[300px] flex flex-col items-center">
      <div className="max-w-[1180px] mx-auto px-8 py-20 flex-1 mt-3.5">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-[#F3EAEA] pt-9 h-full mt-10">
          
          {/* Left Columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-10 text-center md:text-left items-center">
            <div className="flex flex-col items-center md:items-start justify-center">
              <h3 className="text-sm uppercase tracking-[2px] font-semibold text-[#1f1f1f] mb-6">
                QUICK LINKS
              </h3>
              <ul className="space-y-4 text-base leading-relaxed text-[#4b4b4b]">
                <li><a href="#" className="hover:underline">Handloom</a></li>
                <li><a href="#" className="hover:underline">New Collection</a></li>
                <li><a href="#" className="hover:underline">Corporate Gifting</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start justify-center">
              <h3 className="text-lg uppercase tracking-[2px] font-semibold text-[#1f1f1f] mb-6">
                INFO
              </h3>
              <ul className="space-y-4 text-base leading-relaxed text-[#4b4b4b]">
                <li><a href="#" className="hover:underline">Privacy policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Refund Policy</a></li>
                <li><a href="#" className="hover:underline">Shipping Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-[#F3EAEA] pt-6 md:pt-0 h-full flex flex-col justify-center">
            <h3 className="text-lg uppercase tracking-[2px] font-semibold text-[#1f1f1f] mb-6">
                Contact Us
              </h3>
            <address className="not-italic text-base leading-relaxed text-[#333] space-y-5 text-center md:text-left">
              <p className="flex items-start justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-[3px]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#8B1D23" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.2" fill="#8B1D23" />
                </svg>
                <span>Plot No 1215/1511; Khandagiri Bari, Ghatikiya, Khordha, Bhubaneswar-751030 Odisha (India)</span>
              </p>

              <p className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9" stroke="#8B1D23" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 7.5l-9 6-9-6" stroke="#8B1D23" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:atulyakarigariindia@gmail.com" className="hover:underline">atulyakarigariindia@gmail.com</a>
              </p>

              <p className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 6.18 2 2 0 0 1 4 4h3.09a1 1 0 0 1 1 .75c.12.7.36 1.37.71 2.01a1 1 0 0 1-.23 1L7.7 9.7a15.05 15.05 0 0 0 7.6 7.6l1.9-1.9a1 1 0 0 1 1-.23c.64.35 1.31.59 2.01.71a1 1 0 0 1 .75 1V20z" stroke="#8B1D23" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="tel:+919078077078" className="hover:underline">+91 9078077078</a>
              </p>

              <div className="flex justify-center md:justify-start gap-5 mt-4">
                {/* Social icons */}
                <a href="#" aria-label="YouTube" className="w-8 h-8 inline-flex items-center justify-center">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><rect width="18" height="12" rx="2" fill="#222" opacity="0.9"/><path d="M7 3.5l4 2.5-4 2.5V3.5z" fill="#fff"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 inline-flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="18" height="18" x="3" y="3" rx="4" fill="#222" opacity="0.9"/><circle cx="12" cy="12" r="3" fill="#fff"/></svg>
                </a>
                <a href="#" aria-label="Facebook" className="w-8 h-8 inline-flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="18" height="18" x="3" y="3" rx="4" fill="#222" opacity="0.9"/><path d="M13 8h2v-2h-2c-1.1 0-2 .9-2 2v2h-2v2h2v6h2v-6h2l.5-2H15V9c0-.28.22-.5.5-.5z" fill="#fff"/></svg>
                </a>
                <a href="#" aria-label="X" className="w-8 h-8 inline-flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="18" height="18" x="3" y="3" rx="4" fill="#222" opacity="0.9"/><path d="M7 7l10 10M17 7L7 17" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-[#EDEDED] pt-6">
        <p className="text-center text-sm tracking-[3px] text-[#8B1D23]">
          © {new Date().getFullYear()} ATULYA KARIGARI. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

