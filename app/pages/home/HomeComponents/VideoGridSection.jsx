/* eslint-disable react-hooks/immutability */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import Link from "next/link";

const videoTiles = [
  {
    id: 1,
    title: "Independent Scientology - Retrograde, is Mercury the Cause?",
    youtubeId: "NVI66_SXfVM",
    description: `Ever notice how tech fails, texts misfire, and travel plans wobble all at once? We follow that thread into Mercury retrograde, solar flares, and the harder question beneath them: do cosmic cycles run your life, or does orientation decide what sticks?  We unpack how subtle physical forces, group agreement, and personal anchor points combine to create experience. The goal isn't to argue superstition versus science; it's to find leverage where you actually live.

We break down Mercury retrograde in plain language, why so many people associate it with communication and technology breakdowns, and how expectation can amplify small signals into big events. Then we zoom out: what happens when a stable datum like "energy cannot be created" meets spiritual tech that turns on somatics like a sunburn in session? If consideration can outrank matter, you gain options. You can track cycles without surrendering agency, tighten comm lines during volatile windows, and hold your position in space when others spiral. We explore agree-upon reality, the spread of myths (from "poisonous" tomatoes to today's trending warnings), and the vital skill of setting anchors that boost certainty.

Expect practical takeaways: how to reorient when your anchors slip, why ridicule feels so destabilizing (it grabs your anchor point and holds it away), and ways to use cycles as reference, not rulers. Whether you embrace astrology or dismiss it, you'll get a toolkit for steadier communication, cleaner planning, and calmer choices under pressure. If you're ready to replace reactive blame with operational clarity, this conversation hands you the map and the compass.

Enjoyed the episode? Follow the show, share it with a friend who blames their router on Mercury, and leave a review to help more curious minds find us.`,
    duration: "01:00:48",
  },
  {
    id: 2,
    title: "Independent Scientology - Gradient Scales",
    youtubeId: "2DNJ76-Avg4",
    description: `Ever notice how one tricky word can stall an entire study session? We take that everyday moment as a beginning analogy and we then pull a bigger thread: How all of the gradient scales in Independent Scientology and Dianetics are really one BIG scale using that very same  analogy of how misunderstood words drop you to "mystery" on the Tone Scale, why and how the CDEI scale shifts from "refused" to "no" to ultimately "curious" and above, and how a single stable datum can pull you out of confusion towards a condition of Power on anything in your life. By stacking scales—Tone, CDEI, awareness on the Grade Chart, and ethics conditions—we show a clear, workable map for moving from overwhelm to certainty on ANYTHING.then, we get practical. 

Opening a dictionary isn't busywork; it's a deliberate shift from enforced reality to genuine understanding. Using new terms in sentences pushes you up through curiosity into knowing. We connect that process to Axiom 11's states of being and the communication cycle, explaining why shared definitions create duplication and why agreement is the bridge to action. 

We also explore undercuts like the Small Common Words dictionary and the Key to Life approach, showing how time, place, form, and event live inside language and why skipping these gradients keeps people stuck.For those who love the deep cuts, we talk about the prehavingness scale developed by LRH in the early 1960s and fine-grain tone levels—how nuanced states between one tone level on the tone scale can be assessed and used to guide precise change as an example. Zoomed out, this is the same formula everywhere: correctly sized steps, steady duplication, and consistent application. 

Zoomed in, it's the next word, the next sentence, the next moment of understanding. Follow the gradients long enough and the role of words recedes; communication gets cleaner, knowingness speeds up, ability rises, as does a being's awareness.

If you're ready to trade mystery for clarity and confusion for power, press play. Then tell us: which scale shift do you need most today? Subscribe, share with a friend who's stuck, and leave a review to help others find the map.`,
    duration: "01:10:00",
  },
  {
    id: 3,
    title: "Independent Scientology - The Anatomy of Traps",
    youtubeId: "jmgYSKLzEO0",
    description: `What if the things that dazzle you most are the very things that keep you stuck? We pull apart the mechanics of entrapment—how curiosity, rewards, and confusion combine to fix your attention and quietly shrink your choices. From gossip that hijacks your focus to ornate spaces that feel powerful but dull your awareness, we examine the subtle baits that turn into commitments, obligations, and ultimately the feeling of no escape.

We share a clear framework for recognizing traps: N‑theta (confusing, destructive communications), enmest (enturbulated ,matter, energy, space and time=MEST), and the way spaces can hold residues of past events that "play back" when activated. Layered on top are deeper confusions—flipped dichotomies like love as hate and good as bad—that live below awareness and make sticky situations feel irresistible. You'll learn to spot the slide from curiosity to desire, agreement to commitment, obligation to confusion, and how to interrupt that drift before it hardens into a cage.

The practical takeaway is simple and powerful: a trap ends the moment you see it. Once exposed, it becomes a problem—and problems can be solved. We walk through ways to reclaim attention units, re‑imbue your environment with intention, and use auditing to discharge the charge that keeps old patterns alive. Whether your trap is a relationship dynamic, a work culture, or a schedule that runs you, you'll leave with tools to turn glamour into clarity and pressure into choice.

If this resonates, subscribe, share the show with a friend who needs it, and leave a review. Ready to talk it through and get practical help? Reach out at ao-gp.org or create a profile at collegeofindependentscientology.com and start your next step today.`,
    duration: "01:32:08",
  },
  {
    id: 4,
    title: "Independent Scientology - These Darned Emotions!",
    youtubeId: "vTOx8gZYl8I",
    description: `Ever notice how a tiny comment can unleash a tidal wave of feeling that makes no sense in the moment? We get candid about misemotion—the mismatch between what's happening and how hard it hits—and map a practical route to regain choice over your emotional life. With Quentin Stroud joining me, we unpack why certain sights, sounds, and places "equal" danger, how secondaries stack on top of earlier engrams, and why the reactive mind's effort to protect you can become a saboteur.

We don't stop at theory. You'll hear how auditing turns reactions into data: guiding you to the beginning of an incident, moving through it with full perceptics, and returning until charge bleeds off. When things stall, "earlier similar" often reveals the true source you didn't know was there. The result isn't numbness—it's appropriate emotion. Anger can signal an injustice without wrecking your day. Grief can honor love without freezing your life. From workplace blowups to relationship flashpoints, we show how responsibility and clear communication replace reactivity once the charge is handled.

We also dig into New Era Dianetics as a multi-tool for human problems, why talk alone rarely reaches what persists, and what it feels like when memories go flat: still real, no longer running the show. If you've asked why old wounds hijack new moments, this conversation offers language, method, and hope. Subscribe, share this with someone who needs emotional relief, and leave a review telling us the one trigger you're ready to handle next.`,
    duration: "40:18",
  },
  {
    id: 5,
    title: "Independent Scientology Affirmations, do they Work?",
    youtubeId: "QtY9CT3uXuA",
    description: `Positive phrases feel good, but do they actually change anything? We pulled apart the promise of affirmations and found the hidden machinery beneath: old postulates, create vs counter‑create loops, and the be‑do‑have sequence that quietly predicts whether change will stick. From early autosuggestion to modern mirror talk, we mapped how language can interrupt a pattern yet still leave the root decision untouched—and why that's exactly when life snaps back.

You'll hear a candid story about ending a long streak of abusive relationships, not by repeating better words, but by finding the original moment a mind equated love with violence. That single postulate ran across lifetimes until it was contacted and as‑ised in session. We also get practical: when affirmations can help as short‑term primers, how to avoid the trap of counterpostulates, and why "tell me about..." is safer than firing off endless what, who, or why questions that can spin up out‑lists and more charge.

We bring this down to earth with LRH's Cope and Organize policy: stabilize as needed, but build structure while you do it. Use small pattern interrupts to move, then organize your attention and actions so a clean intention turns into a real product. The truest "affirmation" is completion—evidence in the physical universe that confirms a decision already made. If belief shapes reality, shape it where it was actually chosen, and let your outcomes, not slogans, do the talking.

If this resonates, follow the show, share it with a friend who's stuck in mirror talk, and leave a review telling us one postulate you're ready to replace with clear action.`,
    duration: "01:07:33",
  },
  {
    id: 6,
    title: "Independent Scientology and Taxes",
    youtubeId: "wQnpcW3_3VM",
    description: `Taxes promise shared benefit, yet so often they feel like a penalty on momentum. We open the hood on income tax through LRH's lens, exploring how punishing upstats can shrink national vitality and individual morale. From stacked levies and inflation to the creeping possibility of programmable money, we trace taxation back to its roots in arbitrary power—kings with pointy sticks, colonial borders, and modern agencies that decide who pays to stay. The patterns repeat; the tech for control gets slicker.

Then we flip the script. If beings are the real capital, value begins with the ability to create, coordinate, and move particles—ideas, projects, exchange—through the physical universe. That's where independent Scientology becomes practical: auditing and training increase focus, reduce wasted cycles of action, and multiply results. Faster particle flow equals power. With more awareness, you can navigate lawful deductions, invoice truthfully in the independent space, and align exchange around use value so you give more utility than you take in money. The result isn't tax evasion—it's intelligent causation.

We also unpack why real estate prices feel rigged, how institutional buyers set comps, and what "capitalism as taxation" looks like when pricing power skims human energy. Still, the point isn't outrage; it's sovereignty. Replace limiting, assumed rules with self-chosen arbitraries that expand your ability to create. Study definitions, test LRH's claims against your life, and keep only what proves out. When understanding rises, you don't need to wrestle the system head-on—you out-create its traps by producing more value with less friction.

If this moved you, subscribe, share the show with a friend who's wrestling with money and morale, and leave a review so more listeners can find these conversations. Your feedback sets the next arc—what should we unpack next?
`,
    duration: "58:49",
  },
];

// Helper function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoId, quality = "hqdefault") => {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

// Helper function to get multiple thumbnail qualities for better reliability
const getYouTubeThumbnails = (videoId) => ({
  default: `https://img.youtube.com/vi/${videoId}/default.jpg`,
  medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
  high: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  standard: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
  maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
});

export default function VideoGridSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsVideoOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isVideoOpen) {
        handleCloseVideo();
      }
    };

    if (isVideoOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isVideoOpen]);

  return (
    <section className="bg-linear-to-b from-sky-50 to-white py-12">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-serif text-gray-800">
          Featured Video Content
        </h2>
        <p className="mb-8 text-sm text-gray-600">
          Watch our latest videos exploring spiritual technology, auditing
          insights, and Independent Scientology principles.
        </p>

        {/* Grid wrapper: left vertical labels + mosaic */}
        <div className="mx-auto flex max-w-4xl items-start gap-1.5">
          {/* Video Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-1.5">
              {videoTiles.map((video) => (
                <VideoTile
                  key={video.id}
                  video={video}
                  onClick={() => handleVideoClick(video)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative w-full max-w-4xl flex flex-col h-full max-h-[90vh]">
              {/* Modal Container */}
              <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                  <h3 className="font-serif text-xl text-gray-800 font-semibold truncate pr-8">
                    {selectedVideo.title}
                  </h3>
                  <button
                    onClick={handleCloseVideo}
                    className="flex-shrink-0 ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close video"
                  >
                    <X size={24} className="text-gray-600" />
                  </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto">
                  {/* Video Container */}
                  <div className="relative w-full pt-[56.25%] bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={selectedVideo.title}
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                          </svg>
                          <span className="text-sm text-gray-500">YouTube</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Duration: {selectedVideo.duration}
                        </span>
                      </div>
                      <span className="text-sm text-[#4A6FA5] font-medium">
                        AOGP International
                      </span>
                    </div>

                    {/* Description with Scroll */}
                    <div className="max-h-[300px] overflow-y-auto pr-2">
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {selectedVideo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Click outside to close */}
              <div 
                className="absolute inset-0 -z-10" 
                onClick={handleCloseVideo}
                aria-label="Close modal"
              />
            </div>
          </div>
        )}

        {/* See More Videos Button */}
        <div className="flex items-center justify-center mt-12">
          <Link
            href={"https://www.youtube.com/@independentscientologyauditor"}
            target="_blank"
            rel="noopener noreferrer"
            className="relative uppercase tracking-wide text-[16px] opacity-90 text-[#A03B50] font-semibold p-1 px-6 cursor-pointer
            after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0
            after:bg-[#A03B50] after:transition-all after:duration-300
            after:-translate-x-1/2 hover:after:w-full hover:opacity-100"
          >
            VIEW MORE VIDEOS
          </Link>
        </div>
      </div>
    </section>
  );
}

function VideoTile({ video, onClick }) {
  // Get all available thumbnail sizes for this video
  const thumbnails = getYouTubeThumbnails(video.youtubeId);

  return (
    <div
      className="group relative overflow-hidden shadow-sm h-35 cursor-pointer"
      onClick={onClick}
    >
      {/* Video Thumbnail with fallback strategy */}
      <div className="relative h-full w-full">
        {/* Using picture element for responsive images with fallbacks */}
        <picture>
          <source srcSet={thumbnails.maxres} media="(min-width: 1024px)" />
          <source srcSet={thumbnails.standard} media="(min-width: 768px)" />
          <source srcSet={thumbnails.high} media="(min-width: 640px)" />
          <img
            src={thumbnails.medium}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              // If medium fails, try default
              e.target.src = thumbnails.default;
            }}
          />
        </picture>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <Play
              className="h-5 w-5 md:h-6 md:w-6 text-gray-800"
              fill="currentColor"
            />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>

        {/* YouTube Logo */}
        <div className="absolute top-2 left-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF0000">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </div>
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* Title */}
      <div className="absolute left-3 bottom-3 right-3">
        <h3 className="font-serif text-sm text-white drop-shadow line-clamp-2">
          {video.title}
        </h3>
      </div>
    </div>
  );
}