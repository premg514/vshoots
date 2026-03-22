"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const reelItems = [
  { 
    label: "Brand Story Reel", 
    video: "https://res.cloudinary.com/deeejohfw/video/upload/v1774193077/WhatsApp_Video_2026-03-22_at_8.50.11_PM_oxxepk.mp4",
  },
  { 
    label: "Product Showcase", 
    video: "https://res.cloudinary.com/deeejohfw/video/upload/v1774193076/WhatsApp_Video_2026-03-22_at_8.50.16_PM_yfkisn.mp4",
  },
  { 
    label: "Professional Shoot", 
    video: "https://res.cloudinary.com/deeejohfw/video/upload/v1774193077/WhatsApp_Video_2026-03-22_at_8.50.11_PM_oxxepk.mp4",
  },
  { 
    label: "Creative Edit", 
    video: "https://res.cloudinary.com/deeejohfw/video/upload/v1774193076/WhatsApp_Video_2026-03-22_at_8.50.16_PM_yfkisn.mp4",
  },
];

const variants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.35, ease: "easeIn" },
  }),
};

export default function Work() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMuted, setIsMuted] = useState(true);

  const go = (newIndex: number, dir: number) => {
    setDirection(dir);
    setCurrent((newIndex + reelItems.length) % reelItems.length);
  };

  const prev = () => go(current - 1, -1);
  const next = () => go(current + 1, 1);

  // Show 3 cards centered — active, prev ghost, next ghost
  const getItem = (offset: number) =>
    reelItems[(current + offset + reelItems.length) % reelItems.length];

  return (
    <section id="work" className="py-20 sm:py-32 bg-[#f9f9f9] overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f2bf18]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center px-4 mb-14 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-v-yellow animate-pulse" />
          <span className="text-xs font-bold text-v-dark tracking-widest uppercase">Our Work</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-v-dark tracking-tight leading-[1.05]">
          Content that <span className="text-v-yellow">speaks</span> for itself.
        </h2>
        <p className="mt-5 text-v-gray font-medium max-w-xl mx-auto text-base sm:text-lg">
          Premium iPhone reels crafted and delivered for businesses across Vijayawada.
        </p>
      </motion.div>

      {/* Slideshow */}
      <div className="relative flex items-center justify-center px-4">
        {/* Side ghost cards (desktop only) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-full max-w-5xl justify-between items-center pointer-events-none">
          {/* Left ghost */}
          <div className="w-[180px] aspect-[9/16] flex-shrink-0 opacity-10 scale-90 origin-right -translate-x-12">
            <GhostCard item={getItem(-1)} />
          </div>
          {/* Center spacer */}
          <div className="w-[320px]" />
          {/* Right ghost */}
          <div className="w-[180px] aspect-[9/16] flex-shrink-0 opacity-10 scale-90 origin-left translate-x-12">
            <GhostCard item={getItem(1)} />
          </div>
        </div>

        {/* Active Card Container */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] z-10 aspect-[9/16]">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50;
                if (info.offset.x > swipeThreshold) {
                  prev();
                } else if (info.offset.x < -swipeThreshold) {
                  next();
                }
              }}
              className="cursor-grab active:cursor-grabbing select-none touch-none h-full"
            >
              <ActiveCard 
                item={reelItems[current]} 
                isMuted={isMuted} 
                toggleMuted={() => setIsMuted(!isMuted)} 
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-v-dark hover:bg-v-yellow hover:border-v-yellow transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5">
          {reelItems.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-8 h-2.5 bg-v-dark" : "w-2.5 h-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-v-dark hover:bg-v-yellow hover:border-v-yellow transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-12 sm:mt-16"
      >
        <a
          href={`https://wa.me/919440771314?text=${encodeURIComponent("Hi Vshoots! I saw your work on the website and I'm interested in booking a shoot.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-v-dark text-white font-bold rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-v-yellow hover:text-v-dark hover:shadow-[0_8px_24px_rgba(242,191,24,0.3)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <span>See More & Book a Shoot</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

function ActiveCard({ 
  item, 
  isMuted, 
  toggleMuted 
}: { 
  item: typeof reelItems[0]; 
  isMuted: boolean;
  toggleMuted: () => void;
}) {
  return (
    <div className="relative w-full h-full bg-black rounded-[32px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-white/10 group">
      {/* Video Background - Contain for original aspect */}
      <video
        src={item.video}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
      />
      
      {/* Gradient Overlay for content legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Controls / Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
        <div className="flex items-center justify-between relative z-10">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleMuted();
            }}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#f2bf18] hover:text-v-dark transition-all duration-300"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            )}
          </button>
          <div className="w-2.5 h-2.5 rounded-full bg-v-yellow shadow-[0_0_15px_#f2bf18] animate-pulse" />
        </div>

        <div className="relative z-10">
          <p className="text-white/60 text-[9px] font-bold tracking-[0.2em] uppercase mb-1.5">Vshoots Original</p>
          <h3 className="text-white font-black text-lg sm:text-xl tracking-tight leading-none mb-4">{item.label}</h3>
          
          {/* Custom Progress Bar */}
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              key={item.label}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              className="h-full bg-v-yellow shadow-[0_0_10px_#f2bf18]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GhostCard({ item }: { item: typeof reelItems[0] }) {
  return (
    <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 bg-black">
      <video
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain opacity-40"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

