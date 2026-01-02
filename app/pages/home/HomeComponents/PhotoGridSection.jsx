/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const tiles = [
  // Top row (3)
  {
    title: "God and His Covenant",
    image: "/down.jpeg",
    classes: "col-span-1",
  },
  {
    title: "The Life of the Spirit",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    classes: "col-span-1",
  },
  {
    title: "God and His Creation",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    classes: "col-span-1",
  },

  // Middle row (one wide left + one right)
  {
    title: "Essential Relationships",
    image: "map1.jpeg",
    classes: "col-span-2",
  },
  {
    title: "Universal Peace",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    classes: "col-span-1",
  },

  // Third row (3)
  {
    title: "Response to the Call of Christ",
    image: "man4.jpeg",
    classes: "col-span-1",
  },
  {
    title: "Devotional Life",
    image: "map2.jpeg",
    classes: "col-span-1",
  },
  {
    title: "Family Life and Children",
    image: "man5.jpeg",
    classes: "col-span-1",
  },

  // Fourth row (3)
  {
    title: "Youth",
    image: "/man1.jpeg",
    classes: "col-span-1",
  },
  {
    title: "Institutional Capacity",
    image: "man2.jpeg",
    classes: "col-span-1",
  },
  {
    title: "Involvement in Society",
    image: "man3.jpeg",
    classes: "col-span-1",
  },
];

export default function PhotoGridSection() {
  return (
    <section className="bg-linear-to-b from-sky-50 to-white py-12">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-serif text-gray-800">
          Exploring Thematic Areas
        </h2>
        <p className="mb-8 text-sm text-gray-600">
          Explore below a selection of thematic areas central to AOGP International belief and
          practice.
        </p>

        {/* Grid wrapper: left vertical labels + mosaic */}
        <div className="mx-auto flex max-w-4xl items-start gap-1.5">
          {/* Left vertical labels column */}
          <div className="flex w-14 flex-col gap-1.5">
            {/* First label - #debf74 */}
            <div 
              className="relative w-full flex items-center justify-center"
              style={{ 
                backgroundColor: '#debf74',
                height: '285px'
              }}
            >
              <span className="-rotate-90 whitespace-nowrap text-xs font-semibold tracking-wider text-[#5a3f20]">
                WHAT BAHÁ'ÍS BELIEVE
              </span>
            </div>
            
            {/* Second label - #9a755e */}
            <div 
              className="relative w-full flex items-center justify-center "
              style={{ 
                backgroundColor: '#9a755e',
                height: '285px'
              }}
            >
              <span className="-rotate-90 whitespace-nowrap text-xs font-semibold tracking-wider text-white">
                WHAT AOGP International DO
              </span>
            </div>
          </div>

          {/* Mosaic grid */}
          <div className="flex-1">
            {/* First row */}
            <div className="grid grid-cols-3 gap-1.5 mb-1.5">
              {tiles.slice(0, 3).map((t, i) => (
                <PhotoTile key={i} tile={t} />
              ))}
            </div>
            
            {/* Second row */}
            <div className="grid grid-cols-3 gap-1.5 mb-1.5">
              {tiles.slice(3, 5).map((t, i) => (
                <PhotoTile key={i + 3} tile={t} />
              ))}
            </div>
            
            {/* Third row */}
            <div className="grid grid-cols-3 gap-1.5 mb-1.5">
              {tiles.slice(5, 8).map((t, i) => (
                <PhotoTile key={i + 5} tile={t} />
              ))}
            </div>
            
            {/* Fourth row */}
            <div className="grid grid-cols-3 gap-1.5">
              {tiles.slice(8, 11).map((t, i) => (
                <PhotoTile key={i + 8} tile={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoTile({ tile }) {
  return (
    <Link href={'https://www.buzzsprout.com/1310851'}
      className={`${tile.classes} relative overflow-hidden shadow-sm h-35`}
    >
      <img
        src={tile.image}
        alt={tile.title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      {/* Title */}
      <div className="absolute left-4 bottom-4 w-[85%]">
        <h3 className="font-serif text-sm text-white drop-shadow">
          {tile.title}
        </h3>
      </div>

      {/* Clickable overlay for hover */}
      <a
        className="absolute inset-0 cursor-pointer"
        aria-label={tile.title}
      />
    </Link>
  );
}