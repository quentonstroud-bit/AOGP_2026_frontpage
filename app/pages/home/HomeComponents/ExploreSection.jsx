import React from "react";

const ExploreSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/exp_img.jpeg')`,
      }}
      className="w-full h-96 bg-cover bg-center bg-no-repeat flex justify-center items-center text-slate-700 relative mt-35 md:mt-52 2xl:mt-0"
    >
      

      {/* Your content - positioned above the overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="text-white text-2xl sm:text-3xl md:text-[64px] leading-tight mb-4">
          Endeavor College of <br/> Independent Scientology
        </div>

        <a 
  href="https://members.ao-gp.org/signin" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block rounded-full border border-[#B19F52] text-[#B19F52] bg-[#1d4e8f] text-base sm:text-[17px] py-2 px-6 sm:px-7 mt-2 hover:bg-[#1a4590] transition-colors duration-300"
>
  Enroll Now!
</a>
      </div>
    </div>
  );
};

export default ExploreSection;