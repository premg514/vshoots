"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    step: "01",
    title: "Shoot",
    description:
      "Professional shooting using the latest iPhone technology for stunning 4K visuals and perfect stability.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Edit",
    description:
      "Cinematic edits with trending transitions, color grading, and speed ramping that makes your content pop.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.395 3.072m2.792-3.072-1.394 3.072m2.793-3.072 1.395 3.072M6.375 21h11.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H6.375c-.621 0-1.125.504-1.125 1.125v15c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Get your fully edited reels delivered almost instantly so you can stay ahead of the social trends.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Premium",
    description:
      "We guarantee crisp audio, perfect lighting adjustments, and engaging subtitles for maximum reach.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442a.562.562 0 0 1 .311.988l-4.235 3.84a.562.562 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.235-3.84a.562.562 0 0 1 .311-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Glow layer */}
      <div className="absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#F2BF18]/30 via-transparent to-transparent blur-sm pointer-events-none" />

      {/* Card */}
      <div className="relative h-full rounded-[28px] bg-gradient-to-b from-[#1A1A1A] to-[#111] border border-white/[0.06] overflow-hidden flex flex-col p-8 transition-transform duration-500 group-hover:-translate-y-1.5">

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        {/* Inner top border highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Step number — large ghost */}
        <div className="absolute bottom-4 right-5 text-[7rem] font-black leading-none text-white/[0.025] select-none pointer-events-none transition-all duration-700 group-hover:text-[#F2BF18]/[0.06]">
          {feature.step}
        </div>

        {/* Top row: step chip + icon */}
        <div className="flex items-start justify-between mb-8 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.07] text-[10px] font-bold tracking-[0.18em] uppercase text-white/40 group-hover:border-[#F2BF18]/20 group-hover:text-[#F2BF18]/60 transition-all duration-500">
            Step {feature.step}
          </span>

          {/* Icon box */}
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/[0.04] border border-white/[0.07] text-white/60 group-hover:bg-[#F2BF18] group-hover:border-[#F2BF18] group-hover:text-[#0D0D0D] group-hover:shadow-[0_0_30px_rgba(242,191,24,0.35)] transition-all duration-500 group-hover:scale-105">
            {feature.icon}
          </div>
        </div>

        {/* Text content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end">
          <h3 className="text-2xl font-black text-white tracking-tight mb-3 group-hover:text-[#F2BF18] transition-colors duration-400">
            {feature.title}
          </h3>
          <p className="text-white/40 text-sm leading-[1.8] font-medium group-hover:text-white/55 transition-colors duration-500">
            {feature.description}
          </p>
        </div>

        {/* Bottom progress bar */}
        <div className="relative z-10 mt-8 h-[2px] bg-white/[0.05] rounded-full overflow-hidden">
          <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#F2BF18] to-[#F2BF18]/50 rounded-full transition-all duration-700 ease-out" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Ambient orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden
        aria-label=""
      >
        <div className="w-full h-full rounded-full bg-[#F2BF18] opacity-[0.04] blur-[120px]" />
      </motion.div>
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden
        aria-label=""
      >
        <div className="w-full h-full rounded-full bg-[#F2BF18] opacity-[0.03] blur-[100px]" />
      </motion.div>

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 sm:mb-28">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-7">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2BF18]/10 border border-[#F2BF18]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2BF18] animate-pulse" />
                <span className="text-[10px] font-black text-[#F2BF18] tracking-[0.2em] uppercase">The Vshoots Standard</span>
              </div>
            </div>

            <h2 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white tracking-[-0.02em] leading-[1.02]">
              Redefining{" "}
              <span className="relative inline-block">
                <span className="text-[#F2BF18]">Content</span>
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#F2BF18]/40 rounded-full origin-left"
                />
              </span>
              <br />
              for the Digital Age.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:max-w-xs"
          >
            <p className="text-white/40 text-lg font-medium leading-relaxed lg:text-right mb-8">
              High-end production quality with the speed of social media trends.
            </p>
            {/* Stat row */}
            <div className="flex items-center gap-6 lg:justify-end">
              {[["500+", "Brands Served"], ["4K", "Resolution"], ["24h", "Delivery"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-xl font-black text-[#F2BF18]">{val}</div>
                  <div className="text-[10px] font-semibold text-white/30 tracking-widest uppercase mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 sm:mb-20 origin-left"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F2BF18] animate-pulse" />
            <span className="text-white/50 text-sm font-medium">Every project treated like a flagship production</span>
          </div>
          <a href="#pricing" className="group/btn flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#F2BF18] text-[#0D0D0D] text-sm font-black tracking-wide hover:bg-white transition-colors duration-300">
            Start a Project
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}