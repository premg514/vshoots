"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 bg-[#ffffff] overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Tagline */}
        <div className="text-[#f2bf18] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
          WORLD'S QUICK CONTENT SERVICE
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] tracking-tight leading-tight mb-2">
          We Shoot <span className="text-[#666666] font-medium px-1 sm:px-2">•</span> Edit <span className="text-[#666666] font-medium px-1 sm:px-2">•</span> Deliver Reels in
        </h1>
        
        {/* Giant Red Text */}
        <div className="text-[5rem] sm:text-8xl md:text-[9rem] lg:text-[11rem] font-bold text-[#a61d27] leading-none tracking-tighter mb-8 md:mb-12" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", lineHeight: "0.9" }}>
          Instantly<span className="text-4xl md:text-7xl align-top text-[#a61d27] font-light">*</span>
        </div>

        {/* Apple Logo / "Shoot on iPhone" Badge */}
        <div className="flex items-center justify-center gap-2 text-lg sm:text-xl font-bold text-[#333333] mb-12 sm:mb-16">
          SHOOT ON 
          <svg viewBox="0 0 384 512" className="w-5 h-5 sm:w-6 sm:h-6 -translate-y-[2px]" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
          PHONE
        </div>

        {/* Action Buttons (Keeping them accessible above the phone mockup) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full max-w-[16rem] sm:max-w-xl mx-auto">
          <a href="#pricing" className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#f2bf18] text-[#333333] font-bold text-lg rounded-full hover:bg-opacity-90 transition-colors shadow-lg hover:scale-105">
            Book Now
          </a>
          <a href="tel:+919440771314" className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white border-2 border-[#333333] text-[#333333] font-bold text-lg rounded-full hover:bg-gray-50 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Phone Mockup Section */}
        <motion.div 
          className="relative w-[85%] max-w-[280px] sm:w-full sm:max-w-[340px] md:max-w-[380px] -mb-1"
          initial={{ opacity: 0, y: 150, rotateX: 25, rotateY: -15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} /* Custom spring-like easing */
          style={{ perspective: 1500 }}
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0], 
              rotateX: [0, 3, 0], 
              rotateY: [0, -3, 0] 
            }}
            transition={{ 
              duration: 6, 
              ease: "easeInOut", 
              repeat: Infinity,
              delay: 1.2 // Starts floating after entrance
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Mockup Outer Frame */}
            <div className="w-full aspect-[1/2.05] bg-[#1a1a1a] rounded-[2.5rem] md:rounded-[3rem] p-2 sm:p-3 shadow-2xl relative border-4 sm:border-[6px] border-gray-100 border-b-0 rounded-b-none">
             
             {/* Dynamic Island / Notch */}
             <div className="absolute top-2 w-[30%] sm:w-[35%] h-6 sm:h-7 bg-[#1a1a1a] left-1/2 -translate-x-1/2 rounded-b-2xl sm:rounded-b-3xl z-20"></div>
             
             {/* Mockup Screen inner container */}
             <div className="w-full h-full bg-[#0a0a0a] rounded-t-[1.8rem] md:rounded-t-[2.2rem] overflow-hidden relative text-left">
               
               {/* UI Elements representing the app interface inside the phone */}
               <div className="p-5 sm:p-6 pt-12 sm:pt-14 space-y-6 sm:space-y-8">
                 
                 {/* Greeting */}
                 <div>
                   <div className="text-gray-400 text-xs sm:text-sm font-medium">Hey, Creator!</div>
                   <div className="text-white text-xl sm:text-2xl font-bold leading-snug mt-1">You are just in<br/>the right place!</div>
                 </div>

                 {/* Circular Action Buttons Grid */}
                 <div className="flex justify-between items-center text-center mt-6 px-1">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[#f2bf18] flex items-center justify-center text-[#333333] text-xl font-light shadow-lg hover:scale-105 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                      </div>
                      <div className="text-white text-[10px] sm:text-xs font-medium tracking-wide">Book Now</div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 opacity-70">
                      <div className="w-12 h-12 rounded-full border border-gray-700 bg-[#1a1a1a] flex items-center justify-center text-white text-xl">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                      </div>
                      <div className="text-white text-[10px] sm:text-xs font-medium tracking-wide">Packages</div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 opacity-70">
                      <div className="w-12 h-12 rounded-full border border-gray-700 bg-[#1a1a1a] flex items-center justify-center text-white text-xl">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div className="text-white text-[10px] sm:text-xs font-medium tracking-wide">My Work</div>
                    </div>
                 </div>

                 {/* Banner */}
                 <div className="mt-8 bg-gradient-to-br from-[#f2bf18] to-[#d4a000] rounded-2xl p-5 relative overflow-hidden shadow-lg border border-[#f2bf18]/50">
                    <div className="text-[#333333] font-black leading-tight text-sm sm:text-base relative z-10 w-2/3">
                      REELS CREATED<br/>AND DELIVERED<br/>ON THE SPOT
                    </div>
                    {/* Placeholder for the person icon/image in the banner */}
                    <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/10 rounded-tl-full flex items-end justify-end p-3">
                      <div className="w-12 h-16 bg-white/20 rounded-t-full"></div>
                    </div>
                 </div>

                 {/* Discover Section */}
                 <div className="mt-8">
                   <div className="text-white text-sm sm:text-base font-bold mb-4">Discover with Vshoots</div>
                   <div className="grid grid-cols-2 gap-3 sm:gap-4">
                     <div className="h-32 bg-[#1a1a1a] rounded-xl border border-gray-800 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                       <div className="absolute bottom-2 left-2 right-2 h-2 bg-gray-800 rounded"></div>
                     </div>
                     <div className="h-32 bg-[#1a1a1a] rounded-xl border border-gray-800 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                       <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <span className="text-2xl text-[#f2bf18]">⚡</span>
                       </div>
                     </div>
                   </div>
                 </div>

               </div>
             </div>
           </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
