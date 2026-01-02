/* eslint-disable react/no-unescaped-entities */
import React from "react";

const UniversalTextSection = () => {
  return (
    <section
      style={{ backgroundImage: "url('/sky_bg.jpg')" }}
      className="w-full bg-cover bg-center bg-no-repeat min-h-150 flex items-center justify-center"
    >
      <div className="w-full max-w-3xl px-6 py-16 md:py-24 text-center">
        <p className="text-gray-900 font-sans text-base md:text-lg leading-relaxed">
          "“One's attitude toward life makes every possible difference in one's living. You know, 
          you don't have to study a thousand ancient books to discover that fact. 
          But sometimes it needs to be pointed out again that life doesn't change so much as you. ...

          The day when you stop building your own environment, when you stop building your own surroundings, 
          when you stop waving a magic hand and gracing everything around you with magic and beauty, 
          things cease to be magical, things cease to be beautiful. Well, maybe you've just neglected 
          somewhere back in the last few years to wave that magic hand.” 
        </p>

        <p className="text-gray-800 font-sans text-sm md:text-base leading-relaxed mt-8 md:mt-12 font-bold">
          ~ L. Ron Hubbard 
        </p>
      </div>
    </section>
  );
};

export default UniversalTextSection;