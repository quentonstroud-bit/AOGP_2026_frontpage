/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const LibraryFlowerSection = () => {
  return (
    <>
      {/* Top Section with Image and White Fade Effect */}
      <div className="relative w-full  h-100 md:h-220 bg-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/man3.jpeg')` }}
        />

        {/* White to Transparent Gradient Overlay - creates fade effect */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/50 to-transparent" />

        {/* Quote Content with Black Text */}
        <div className="relative z-10 h-full flex justify-center items-baseline pt-20 text-[28px] text-[#1F1E1D]">
          <div className="max-w-3xl mx-auto text-center px-4 text-black">
            <p className="mt-4 mb-2 text-3xl uppercase tracking-wide font-semibold">
               Five Core Beliefs 
            </p>
            <br/><br/>
            <p className="text-base md:text-xl font-serif leading-relaxed  text-start ml-0 2xl:ml-25">
              1. Man is a spiritual being capable of improvement.<br /> 2. Knowledge
              increases responsibility and freedom. <br/> 3. Life is best understood
              and improved through application. <br/> 4. Spiritual progress is
              individual and self-determined. <br/> 5. The Bridge exists to be
              traveled, not merely studied.
            </p>
            <p className="mt-4 text-base uppercase tracking-wide font-semibold">
              - Independent Scientology -
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Background Image and Library Info */}
      <div className="relative w-full h-75 md:h-60 ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/flower_low_bg.jpeg')` }}
        />

        {/* Library Info Content - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-[#F2DBB9] px-4">
          <h1 className="text-2xl md:text-3xl font-serif mb-2">
            AOGP International LRH Reference Library
          </h1>
          <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto">
            The LRH Reference Library is the online SOURCE of
            AOGP International's philosophy, principles and practices.<br/>

            “Scientology does not teach you. It only reminds you. For the information was yours in the first place.” 
            ~ L. Ron Hubbard, Scientology: The Fundamentals of Thought
          </p>
          <button className="text-sm md:text-base underline uppercase tracking-wide hover:text-gray-300 transition-colors duration-300">
            Visit The LRH Library
          </button>
        </div>

        {/* flower image */}
        <img
          className="absolute left-[38vw] -bottom-10 2xl:top-44 2xl:left-[44.8vw] w-30 h-20 2xl:w-50 2xl:h-30 z-100"
          src="/flower_brl.png"
          alt=""
        />
      </div>
    </>
  );
};

export default LibraryFlowerSection;
