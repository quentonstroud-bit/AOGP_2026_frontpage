"use client";
import React from "react";

const TextInfoSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/sky_bg.jpg')" }}
      className="w-full bg-cover bg-center bg-no-repeat py-20 px-6"
    >
      {/* Container */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Paragraph */}
        <div className="text-gray-900 font-sans text-[15px] md:text-[17px] leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4 text-black">
            Who We Are
          </h2>
          <p className="mb-6">
            <span
              className="
                float-left 
                text-[85px] 
                md:text-[100px] 
                font-serif 
                leading-[0.75] 
                mr-3 
                mt-[-6px]
                text-black
              "
            >
              A
            </span>
            OGP International was founded in 2011 and has been in continuous
            operation for over 15 years. We are one of the most active and
            upstat organizations in the Independent Scientology field, having
            helped over 200 individuals begin or continue their Bridge through
            auditing coordination, training, study, and spiritual guidance.
            <br/>
            <br />
             Our
            focus has always been on enrolling people on course, getting people
            trained, and ensuring that LRH technology is studied, applied, and
            preserved in its original, unaltered form. Through our global
            network, podcasts, and college platform, AOGP exists to support
            personal freedom, responsibility, and spiritual advancement.
          </p>
        </div>

        {/* Right Paragraph */}
        <div className="text-gray-900 font-sans text-[15px] md:text-[17px] leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-4 text-black">
            Independent Scientology
          </h2>
          <p className="mb-6">
            <span
              className="
                float-left 
                text-[85px] 
                md:text-[100px] 
                font-serif 
                leading-[0.75] 
                mr-3 
                mt-[-6px]
                text-black
              "
            >
              I
            </span>
            Independent Scientology refers to the study and application of
            L. Ron Hubbard’s spiritual technology outside of the institutional
            Church structure. It is practiced by individuals and groups who
            value standard tech, personal responsibility, and freedom of
            spiritual choice. 
            <br /><br />
            AOGP International operates fully independently
            and provides access to materials, training pathways, and auditing
            coordination while respecting the autonomy of each individual’s
            spiritual journey.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TextInfoSection;
