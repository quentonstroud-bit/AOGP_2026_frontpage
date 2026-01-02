/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const CenterUnderlineLink = ({ href, children }) => (
  <a
    href={href}
    className="relative uppercase tracking-wide text-[16px] opacity-90
      after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0
      after:bg-yellow-800 after:transition-all after:duration-300
      after:-translate-x-1/2 hover:after:w-full hover:opacity-100"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseAll = () => {
    setShowMenu(false);
  };

  return (
    <header className="w-full text-[#292929] relative z-50">
      {/* Main banner */}
      <div
        className="relative bg-cover bg-center h-28 md:h-24 px-6 md:px-12 flex items-center"
        style={{ backgroundImage: "url('/navbar_bg.png')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/60 to-white/30" />

        {/* Content */}
        <div className="relative z-50 flex w-full items-center">
          {/* Left title */}
          <div className="flex-1">
            <h1
              className="text-2xl md:text-[40px] leading-tight font-light"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              AOGP International
            </h1>
            <p className="text-xs md:text-sm opacity-90 tracking-wide">
              Supporting spiritual growth with LRH technology since 2011.
            </p>
          </div>

          {/* Center nav - Desktop */}
          <div className="hidden 2xl:flex items-center gap-8">
            <CenterUnderlineLink href="#">
              Personality Test
            </CenterUnderlineLink>
            <CenterUnderlineLink href="#">Contact</CenterUnderlineLink>
            {/* Login as a button with hover effect */}
            <a
              href="#"
              className="relative uppercase tracking-wide text-[16px] bg-[#c9a674] text-white px-6 py-2 rounded-sm hover:bg-[#b89a5f] transition-colors duration-300 cursor-pointer"
            >
              Login
            </a>
          </div>

          {/* Mobile Hamburger Menu Icon - Only on mobile (md:hidden) */}
          <button
            className="md:hidden ml-4 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
            aria-label={showMenu ? "Close menu" : "Open menu"}
          >
            <div className="relative w-8 h-8">
              <RxHamburgerMenu
                size={32}
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  showMenu
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <IoClose
                size={32}
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  showMenu
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </div>
          </button>

          {/* Desktop links for md to 2xl */}
          <div className="hidden md:flex 2xl:hidden items-center gap-6 ml-8">
            <a
              href="#"
              className="relative uppercase tracking-wide text-[16px] opacity-90
                after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0
                after:bg-yellow-800 after:transition-all after:duration-300
                after:-translate-x-1/2 hover:after:w-full hover:opacity-100"
            >
              Personality Test
            </a>
            <a
              href="#"
              className="relative uppercase tracking-wide text-[16px] opacity-90
                after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0
                after:bg-yellow-800 after:transition-all after:duration-300
                after:-translate-x-1/2 hover:after:w-full hover:opacity-100"
            >
              Contact
            </a>
            {/* Login as a button for md to 2xl */}
            <a
              href="#"
              className="relative uppercase tracking-wide text-[16px] bg-[#c9a674] text-white px-6 py-2 rounded-sm hover:bg-[#b89a5f] transition-colors duration-300 cursor-pointer"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 cursor-pointer"
          onClick={handleCloseAll}
        />
      )}

      {/* Main Mobile Menu - Full width no gap - Only on mobile (md:hidden) */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#fffefe] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Menu header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-[#292929]">Menu</h2>
            <button
              onClick={handleCloseAll}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Close menu"
            >
              <IoClose size={28} className="text-[#292929]" />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-8 space-y-6">
              <a
                href="#"
                className="flex items-center justify-between group cursor-pointer"
                onClick={handleCloseAll}
              >
                <span className="text-[#c9a674] font-medium text-lg uppercase tracking-wide">
                  Personality Test
                </span>
              </a>
              
              <a
                href="#"
                className="flex items-center justify-between group cursor-pointer"
                onClick={handleCloseAll}
              >
                <span className="text-[#c9a674] font-medium text-lg uppercase tracking-wide">
                  Contact
                </span>
              </a>
              
              {/* Login as a button in mobile menu */}
              <a
                href="#"
                className="flex items-center justify-center bg-[#c9a674] text-white text-lg uppercase tracking-wide font-medium py-3 rounded-sm hover:bg-[#b89a5f] transition-colors duration-300 cursor-pointer"
                onClick={handleCloseAll}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}