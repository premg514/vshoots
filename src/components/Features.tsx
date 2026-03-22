"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      step: "01",
      title: "Shoot",
      description: "Professional shooting using the latest iPhone technology for stunning 4K visuals.",
      icon: "🎥",
    },
    {
      step: "02",
      title: "Edit",
      description: "Cinematic edits, trending transitions, and color grading that makes your content pop.",
      icon: "✂️",
    },
    {
      step: "03",
      title: "Delivery",
      description: "Get your fully edited reels delivered almost instantly so you can post on time.",
      icon: "⚡",
    },
    {
      step: "04",
      title: "Premium",
      description: "We guarantee crisp audio, perfect lighting adjustments, and engaging subtitles.",
      icon: "✨",
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-v-darker relative overflow-hidden">
      {/* Premium subtle background glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-v-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-32 max-w-3xl mx-auto px-2"
        >
          {/* Subtle glowing pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6 mt-2">
            <span className="w-2 h-2 rounded-full bg-v-yellow animate-pulse"></span>
            <span className="text-xs font-bold text-v-dark tracking-widest uppercase">The Process</span>
          </div>
          
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-v-dark leading-[1.1] tracking-tight">
            A seamless journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-v-yellow to-[#eab308]">premium content</span>.
          </h3>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* DESKTOP TIMELINE BACKGROUND LINE */}
          {/* h-24 icon -> center is at top 48px */}
          <div className="hidden md:block absolute h-0.5 bg-gray-200" style={{ top: "47px", left: "12.5%", right: "12.5%" }} />
          
          {/* DESKTOP FILL ANIMATION LINE */}
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "75%" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            className="hidden md:block absolute h-1 bg-v-yellow rounded-full z-0 origin-left shadow-[0_0_8px_rgba(242,191,24,0.5)]"
            style={{ top: "46px", left: "12.5%" }}
          />

          {/* DESKTOP TRAVELING SPOT DOT */}
          {/* h-4 dot -> center is at top 48px -> top should be 40px (48 - 8) */}
          <motion.div
             animate={{ left: ["12.5%", "87.5%"] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
             className="hidden md:block absolute w-4 h-4 bg-white border-2 border-v-yellow rounded-full z-20 shadow-[0_0_20px_#f2bf18]"
             style={{ top: "40px", marginLeft: "-8px" }}
          />

          {/* MOBILE TIMELINE BACKGROUND LINE */}
          {/* w-20 icon -> center is at left 40px */}
          <div className="md:hidden absolute w-0.5 bg-gray-200" style={{ top: "40px", bottom: "40px", left: "39px" }} />
          
          {/* MOBILE FILL ANIMATION LINE */}
          <motion.div 
            initial={{ height: "0px" }}
            whileInView={{ height: "calc(100% - 80px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            className="md:hidden absolute w-1 bg-v-yellow rounded-full z-0 origin-top shadow-[0_0_8px_rgba(242,191,24,0.5)]"
            style={{ top: "40px", left: "38px" }}
          />

          {/* MOBILE TRAVELING SPOT DOT */}
          {/* w-4 dot -> center is at left 40px -> left should be 32px */}
          <motion.div
             animate={{ top: ["40px", "calc(100% - 40px)"] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
             className="md:hidden absolute w-4 h-4 bg-white border-2 border-v-yellow rounded-full z-20 shadow-[0_0_20px_#f2bf18]"
             style={{ left: "32px", marginTop: "-8px" }}
          />

          {/* Timeline Nodes (Steps) */}
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-16 md:gap-0">
            {features.map((feature, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 + (index * 0.2), ease: [0.16, 1, 0.3, 1] }}
                key={index}
                className="flex md:flex-col items-start md:items-center relative w-full md:w-1/4 group cursor-default"
              >
                {/* Node Icon Circle */}
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] z-10 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(242,191,24,0.3)] relative md:mx-auto border border-gray-50 group-hover:border-v-yellow/30">
                  <span className="relative z-10">{feature.icon}</span>
                </div>
                
                {/* Node Text Description */}
                <div className="ml-6 md:ml-0 md:mt-10 md:text-center md:px-6 flex-1">
                  <div className="text-v-yellow font-bold text-[10px] md:text-xs tracking-[0.2em] mb-2 uppercase opacity-80 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300">Section {feature.step}</div>
                  <h4 className="text-xl md:text-2xl font-black text-v-dark tracking-tight mb-3 group-hover:text-v-yellow transition-colors duration-300">{feature.title}</h4>
                  <p className="text-v-gray font-medium text-sm md:text-base leading-relaxed md:leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
