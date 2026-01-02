/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";

export default function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Success stories data with images
  const successStories = [
    {
      id: 1,
      quote:
        "It’s sad to acknowledge that suppression is real as outlined in the course, and I realize I have had suppressive friends in the past.  Knowing about suppression puts me at cause to handle it.Great course, very informative and I feel like I better understand SP's and how to handle them!",
      name: "Independent Scientology Success Stories - Conquering Life's Ups and Downs Course",
      role: "Cleared Theta Clear",
      location: "Toronto, Canada",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      quote:
        "WOW!! Either you make an impact or you don't. I used to wonder what was at the root of success. Mine for one, and others'. Well, how about one's ability to Confront communication? In this processing I was able to observe degrees of communication and its influence on achievement. The lower one's communication level; the longer it takes for things to happen. Someone with HIGH communication is bound to move the air, disturb the peace; but find his answers. Also funny how a communicator is higher toned than someone who doesn't express himself. The guy at the raw bottom of the tone scale is out-of comm even with himself.",
      name: "Independent Scientology Grade Zero Completion Success Story",
      role: "Class VI Auditor",
      location: "London, UK",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      quote:
        "The condition of BEING is defined as the assumption of a category of identity. It could be said to be the role in a game, and an example of beingness could be one’s own name. Another example would be one’s profession. Another example would be one’s physical characteristics. Each or all of these things could be called one’s beingness. Beingness is assumed by oneself or given to one’s self or is attained, for example, in the playing of a game, each player having his own beingness.",
      name: "Independent Scientology Tech Blog",
      role: "OT V",
      location: "Sydney, Australia",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      quote:
        " will try to put together in an understandable manner my wins and realizations...The concept of time to me has always been measurable by observing decay, but when observing time from a distance I come to see more clearly what is meant when some say... there is no time. Like if you remove yourself from your daily physical life, there is only existence. No clock is ticking to tell you that you are late or tired. Existence doesn't get old; it is on-going, immortal.",
      name: "ARC Straightwire Grade Completion Success Story",
      role: "Solo Auditor",
      location: "Austin, Texas",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      quote:
        "For myself, L11 was magical. The magic IS, my perceptions have become more powerful, synchronizing with the (Theta) universe vibes on the dynamics. I postulate, I receive. - Sometimes there is a physical universe comm. lag.",
      name: "Indpendent Scientology L 11 Success Story",
      role: "OT VII",
      location: "Berlin, Germany",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      quote:
        "Life repair auditing is generally any auditing aimed at resolving the current, troublesome issues in your life. Your auditor will have an interview with you about various aspects of your life to find what to audit, in your life repair and then develop a program tailored to your needs.",
      name: "Independent Scientology Auditor Services",
      role: "Case Supervisor",
      location: "Auckland, New Zealand",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  // Calculate total slides based on showing 2 at a time
  const slidesToShow = 2;
  const totalSlides = Math.ceil(successStories.length / slidesToShow);

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, totalSlides]);

  // Get current stories to display (2 at a time)
  const getCurrentStories = () => {
    const startIndex = currentIndex * slidesToShow;
    const endIndex = startIndex + slidesToShow;
    return successStories.slice(startIndex, endIndex);
  };

  return (
    <section className="relative bg-[#f8f9fa] py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Vertical Label - Mobile: horizontal, Desktop: vertical */}
      <div
        className="w-full md:w-60 flex items-center justify-center mb-8 md:mb-0
                   md:absolute md:top-12 md:-left-20 md:-rotate-90 
                   lg:absolute lg:top-16 lg:-left-8 lg:-rotate-90 
                   xl:absolute xl:top-20 xl:-left-10 xl:-rotate-90 
                   2xl:absolute 2xl:top-50 2xl:-left-25 2xl:-rotate-90"
        style={{
          backgroundColor: "#e9ecef",
          height: "40px",
        }}
      >
        <span className="whitespace-nowrap p-3 text-xs font-semibold tracking-wider text-[#4A6FA5] md:text-base lg:text-[20px]">
          SUCCESS STORIES
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2c3e50] mb-4">
            Tranformational Spiritual Journeys
          </h2>
          <p className="text-lg md:text-xl text-[#5a6c7d] max-w-3xl mx-auto">
            Join over 300 individuals who have advanced up the Bridge through
            AOGP's auditing, training, and spiritual help.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Track */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 transition-all duration-500">
            {getCurrentStories().map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#e1e8ed] transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Story Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

                  {/* Role Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-[#4A6FA5]/90 text-white text-xs md:text-sm font-medium px-3 py-1.5 rounded-full">
                      {story.role}
                    </span>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-4 right-4 flex items-center text-white/90">
                    <svg
                      className="w-4 h-4 mr-1"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M13 6.66667C13 11.3333 8 14.6667 8 14.6667C8 14.6667 3 11.3333 3 6.66667C3 4.45875 4.791 2.66667 7 2.66667C9.209 2.66667 11 4.45875 11 6.66667Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      {story.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {/* Quote Icon */}
                  <div className="text-[#4A6FA5] mb-4">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M10 30V20C10 13.3726 15.3726 8 22 8H24M30 30V20C30 13.3726 24.6274 8 18 8H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 md:mb-8">
                    <p className="text-base md:text-lg lg:text-xl text-[#34495e] italic leading-relaxed">
                      "{story.quote}"
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-[#e1e8ed] pt-6">
                    <h4 className="font-serif text-xl md:text-2xl text-[#2c3e50] font-semibold">
                      {story.name}
                    </h4>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[#4A6FA5] font-medium">
                        AOGP Graduate
                      </p>
                      <div className="flex items-center space-x-2">
                        {/* Auto-play indicator */}
                        <div
                          className={`w-2 h-2 rounded-full ${
                            !isHovered
                              ? "bg-[#4A6FA5] animate-pulse"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span className="text-xs text-gray-500 hidden sm:block">
                          {!isHovered ? "Auto" : "Paused"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section with Images */}
        <div className="mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-10 lg:pt-12 border-t border-[#e1e8ed]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Stat 1 */}
            <div className="relative group overflow-hidden rounded-lg bg-white border border-[#e1e8ed] hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-[#4A6FA5]/10 to-transparent"></div>
              <div className="relative p-4 md:p-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A6FA5] mb-2">
                  15+
                </div>
                <div className="text-sm md:text-base text-[#5a6c7d] font-medium">
                  Years of Operation
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Founded in 2011, international Independent Scientology Organization
                </div>
              </div>
              <div className="h-1 bg-linear-to-r from-[#4A6FA5] to-[#2c5282]"></div>
            </div>

            {/* Stat 2 */}
            <div className="relative group overflow-hidden rounded-lg bg-white border border-[#e1e8ed] hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-[#4A6FA5]/10 to-transparent"></div>
              <div className="relative p-4 md:p-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A6FA5] mb-2">
                  300+
                </div>
                <div className="text-sm md:text-base text-[#5a6c7d] font-medium">
                  Individuals Helped
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  On their Bridge to Total Freedom using original LRH Tech
                </div>
              </div>
              <div className="h-1 bg-linear-to-r from-[#4A6FA5] to-[#2c5282]"></div>
            </div>

            {/* Stat 3 */}
            <div className="relative group overflow-hidden rounded-lg bg-white border border-[#e1e8ed] hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-[#4A6FA5]/10 to-transparent"></div>
              <div className="relative p-4 md:p-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A6FA5] mb-2">
                  202+
                </div>
                <div className="text-sm md:text-base text-[#5a6c7d] font-medium">
                  Podcast Episodes
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Technical discussions & auditing insights
                </div>
              </div>
              <div className="h-1 bg-linear-to-r from-[#4A6FA5] to-[#2c5282]"></div>
            </div>

            {/* Stat 4 */}
            <div className="relative group overflow-hidden rounded-lg bg-white border border-[#e1e8ed] hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-linear-to-br from-[#4A6FA5]/10 to-transparent"></div>
              <div className="relative p-4 md:p-6">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-8 h-8 text-[#4A6FA5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A6FA5] mb-2">
                    Global
                  </div>
                </div>
                <div className="text-sm md:text-base text-[#5a6c7d] font-medium">
                  Network Reach
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Supporting spiritual advancement worldwide
                </div>
              </div>
              <div className="h-1 bg-linear-to-r from-[#4A6FA5] to-[#2c5282]"></div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center mt-12 md:mt-16">
          <button
            className="group relative uppercase tracking-wide text-[16px] md:text-[18px] font-semibold text-[#4A6FA5] p-1 px-6 sm:px-7 cursor-pointer
            after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0
            after:bg-[#4A6FA5] after:transition-all after:duration-300
            after:-translate-x-1/2 hover:after:w-full hover:opacity-100"
          >
            <span className="flex items-center gap-2">
              VIEW MORE SUCCESS STORIES
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
