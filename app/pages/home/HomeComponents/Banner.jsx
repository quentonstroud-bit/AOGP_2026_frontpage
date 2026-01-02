/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";

const SLIDES = [
  {
    image: "/lion.jpeg",
    text: "What is Greatness?",
    author: "L. Ron Hubbard",
  }
];

export default function Banner({ autoplayInterval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);

      setTimeout(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
        setFading(false);
      }, 500);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [index, autoplayInterval]);

  // Ensure images are in public folder with correct names
  useEffect(() => {
    console.log(
      "Checking images:",
      SLIDES.map((s) => s.image)
    );
  }, []);

  return (
    <div className="w-full h-[50vh] md:h-screen flex flex-col">
      <div className="w-full relative flex-1">
        {/* Top thin stripe
        <div className="hidden 2xl:flex absolute top-0 z-50 w-full bg-linear-to-r from-transparent via-white to-yellow-400 px-6 md:px-12 py-1 justify-end text-slate-700">
          <nav className="flex gap-6 items-center uppercase tracking-wide text-[16px]">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#BA884B]"
            >
              Films
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#BA884B]"
            >
              The Bahá'í Calendar
            </a>
          </nav>
        </div> */}
        {/* Banner */}
        <div className="w-full h-[50vh] md:h-screen">
          {/* All images stacked with opacity control */}
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                i === index
                  ? fading
                    ? "opacity-100"
                    : "opacity-100"
                  : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                zIndex: i === index ? 1 : 0,
              }}
            ></div>
          ))}

          {/* Quote - now fades with the image */}
          <div className="absolute top-8 sm:top-12 md:top-20 right-4 sm:right-6 md:right-10 w-full  text-right text-white block z-10 max-w-[90vw] md:max-w-[80vw] lg:[max-w-[75vw] xl:[max-w-[70vw] 2xl:max-w-[60vw]">
            {/* Simple gradient overlay for text */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-l from-black/40 to-transparent -ml-6 sm:-ml-10 -mr-2 sm:-mr-4 -my-2 sm:-my-4 blur-0 rounded"></div>
              <div className="relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6">
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl  leading-tight font-serif transition-opacity duration-500 whitespace-pre-line`}
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  A civilization without insanity, without criminals and without war, where the Able can prosper and honest beings can have rights, and where Man is free to rise to greater heights, are the aims of Scientology.
                </h2>
                <div
                  className={`mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm tracking-wider transition-opacity duration-500`}
                >
                  ~ L. Ron Hubbard, September 1965
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom button section for Big Screen */}
        <div className="p-10 opacity-0 absolute sm:hidden  2xl:flex 2xl:opacity-100 bottom-0 z-10 w-full h-52 bg-linear-to-r from-transparent via-white/95 to-transparent  justify-center items-center text-slate-700">
          <div className="flex items-center justify-center gap-16 md:gap-24 text-center">
            <div className="flex flex-col items-center cursor-pointer group">
              <h1 className="text-[16px] font-semibold w-32 bg-[#a03a46] text-white px-4 py-1.5 transition-all duration-300 group-hover:bg-[#8a2f3a] group-hover:scale-105">
                EXPLORE
              </h1>
              <div className="text-[28px] md:text-[32px] leading-tight mt-4 font-medium tracking-tight">
                <p className="transition-all duration-300 group-hover:text-[#a03a46]">
                  What AOGP International
                </p>
                <p className="transition-all duration-300 group-hover:text-[#a03a46]">
                  Believe
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer group">
              <h1 className="text-[16px] font-semibold w-32 bg-[#a03a46] text-white px-4 py-1.5 transition-all duration-300 group-hover:bg-[#8a2f3a] group-hover:scale-105">
                EXPLORE
              </h1>
              <div className="text-[28px] md:text-[32px] leading-tight mt-4 font-medium tracking-tight">
                <p className="transition-all duration-300 group-hover:text-[#a03a46]">
                  What AOGP International
                </p>
                <p className="transition-all duration-300 group-hover:text-[#a03a46]">
                  Do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom button section for Small Screen */}
      <div className="2xl:hidden z-10 w-full h-auto min-h-35 md:min-h-52 justify-center items-center text-slate-700 bg-white">
        <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 lg:gap-24 text-center p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex flex-col items-center cursor-pointer group w-full sm:w-auto">
            <h1 className="text-sm sm:text-base font-semibold w-28 sm:w-32 bg-[#a03a46] text-white px-3 sm:px-4 py-1.5 transition-all duration-300 group-hover:bg-[#8a2f3a] group-hover:scale-105">
              EXPLORE
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] leading-tight mt-3 sm:mt-4 font-medium tracking-tight">
              <p className="transition-all duration-300 group-hover:text-[#a03a46]">
                What AOGP International
              </p>
              <p className="transition-all duration-300 group-hover:text-[#a03a46]">
                Believe
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer group w-full sm:w-auto">
            <h1 className="text-sm sm:text-base font-semibold w-28 sm:w-32 bg-[#a03a46] text-white px-3 sm:px-4 py-1.5 transition-all duration-300 group-hover:bg-[#8a2f3a] group-hover:scale-105">
              EXPLORE
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] leading-tight mt-3 sm:mt-4 font-medium tracking-tight">
              <p className="transition-all duration-300 group-hover:text-[#a03a46]">
                What AOGP International
              </p>
              <p className="transition-all duration-300 group-hover:text-[#a03a46]">
                Do
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
