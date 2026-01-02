/* eslint-disable @next/next/no-img-element */
import { Play } from "lucide-react";

export default function VideoGridSection() {
  return null; // Hide this section
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
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
  
  const videos = [
    {
      title: "Expressions of Equality in the Family",
      source: "faith.org",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      title: "Practitioners of Peace: Youth & Society",
      source: "faith world news",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    },
    {
      title: "Communities Find Strength After Disaster",
      source: "faith world news",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    },
  ];
  
  return (
    <div>
      <section className="relative bg-[#f3efe6] py-8 sm:py-10 md:py-12 lg:pt-22">
        {/* Vertical Label - Mobile: horizontal, Desktop: vertical */}
        <div
          className="w-full md:w-60 flex items-center justify-center mb-6 md:mb-0
                     md:absolute md:top-12 md:-left-20 md:-rotate-90 
                     lg:absolute lg:top-16 lg:-left-8 lg:-rotate-90 
                     xl:absolute xl:top-20 xl:-left-10 xl:-rotate-90 
                     2xl:absolute 2xl:top-50 2xl:-left-25 2xl:-rotate-90"
          style={{
            backgroundColor: "#f5e19c",
            height: "40px",
          }}
        >
          <span className="whitespace-nowrap p-3 text-xs font-semibold tracking-wider text-[#ab8547] md:text-base lg:text-[20px]">
            FEATURED VIDEOS
          </span>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          {/* Video Container */}
          <div className="relative overflow-hidden rounded-sm">
            <video
              className="h-64 sm:h-80 md:h-96 lg:h-105 w-full object-cover"
              poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            />

            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/80 backdrop-blur">
                <Play className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-gray-800" fill="currentColor" />
              </div>
            </button>

            {/* Bottom Title Bar */}
            <div className="absolute bottom-0 w-full bg-linear-to-r from-[#9c6228] to-[#c9b29b] px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4">
              <p className="text-xs uppercase text-white/80">
                Faith World News Service
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-white">
                2025: Year in Review
              </h2>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#f3efe6] pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="h-40 sm:h-44 md:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/80">
                      <Play
                        className="h-5 w-5 sm:h-5.5 sm:w-5.5 md:h-6 md:w-6 text-gray-800"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-xs uppercase text-gray-500">
                  {video.source}
                </p>
                <h3 className="mt-1 font-serif text-base sm:text-lg text-gray-900">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* see more videos button */}
        <div className="flex items-center justify-center mt-12 md:mt-16">
          <button className="text-[#a03b50] text-base sm:text-lg md:text-[18px] font-semibold p-1 px-6 sm:px-7 cursor-pointer">
            SEE MORE VIDEOS
          </button>
        </div>
      </section>
    </div>
  );
}