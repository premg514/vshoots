"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const reelItems = [
  { label: "Brand Story Reel", tag: "Brand", emoji: "🎬", bg: "from-[#1a1a1a] to-[#2a2a2a]" },
  { label: "Product Showcase", tag: "E-commerce", emoji: "📦", bg: "from-[#111827] to-[#1f2937]" },
  { label: "Restaurant Special", tag: "Food & Bev", emoji: "🍽️", bg: "from-[#1a1a1a] to-[#292524]" },
  { label: "Fashion Drop", tag: "Lifestyle", emoji: "👗", bg: "from-[#111827] to-[#1e1b4b]" },
  { label: "Event Coverage", tag: "Events", emoji: "🎉", bg: "from-[#1a1a1a] to-[#27272a]" },
  { label: "Fitness Studio", tag: "Wellness", emoji: "💪", bg: "from-[#0f172a] to-[#1e293b]" },
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
          <span className="w-2 h-2 rounded-full bg-[#a61d27] animate-pulse" />
          <span className="text-xs font-bold text-v-dark tracking-widest uppercase">Our Work</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-v-dark tracking-tight leading-[1.05]">
          Content that <span className="text-[#a61d27]">speaks</span> for itself.
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
          <div className="w-[220px] h-[380px] flex-shrink-0 opacity-30 scale-90 origin-right -translate-x-4">
            <GhostCard item={getItem(-1)} />
          </div>
          {/* Center spacer */}
          <div className="w-[280px]" />
          {/* Right ghost */}
          <div className="w-[220px] h-[380px] flex-shrink-0 opacity-30 scale-90 origin-left translate-x-4">
            <GhostCard item={getItem(1)} />
          </div>
        </div>

        {/* Active Card */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] z-10 overflow-hidden">
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
              className="cursor-grab active:cursor-grabbing select-none touch-none"
            >
              <ActiveCard item={reelItems[current]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        {/* Prev Button */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-v-dark hover:bg-v-yellow hover:border-v-yellow hover:text-v-dark hover:-translate-y-0.5 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2.5">
          {reelItems.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-v-dark"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-v-yellow"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next"
          className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-v-dark hover:bg-v-yellow hover:border-v-yellow hover:text-v-dark hover:-translate-y-0.5 transition-all duration-300"
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
          href={`https://wa.me/919440771314?text=${encodeURIComponent("Hi Vshoots! I'd love to see more of your work and discuss a shoot.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-v-dark text-white font-bold rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:bg-v-yellow hover:text-v-dark hover:shadow-[0_8px_24px_rgba(242,191,24,0.3)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <span>Book a Shoot</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

function ActiveCard({ item }: { item: typeof reelItems[0] }) {
  return (
    <div className={`relative w-full h-[460px] sm:h-[520px] bg-gradient-to-br ${item.bg} rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-white/5`}>
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <span className="bg-white/10 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-sm">
            {item.tag}
          </span>
          <div className="w-2.5 h-2.5 rounded-full bg-[#f2bf18] animate-pulse shadow-[0_0_10px_#f2bf18]" />
        </div>

        <div className="flex items-center justify-center text-8xl opacity-20">{item.emoji}</div>

        {/* Center play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>

        <div>
          <p className="text-white/40 text-[10px] font-medium tracking-widest uppercase mb-1.5">Vshoots Original</p>
          <h4 className="text-white font-black text-xl leading-tight">{item.label}</h4>
          <div className="mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              key={item.label}
              className="h-full bg-[#f2bf18] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GhostCard({ item }: { item: typeof reelItems[0] }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${item.bg} rounded-3xl border border-white/5 flex items-center justify-center text-5xl`}>
      {item.emoji}
    </div>
  );
}
