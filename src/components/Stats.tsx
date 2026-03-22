"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Reels Delivered", value: "10,000+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Average Rating", value: "4.9/5" },
    { label: "Cities Covered", value: "Vijayawada" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-v-darker border-y border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-v-yellow/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 sm:gap-6 md:divide-x divide-gray-200"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-2 sm:px-4">
              <div className={`font-black text-v-dark mb-1 sm:mb-2 ${stat.value.length > 6 ? "text-xl sm:text-2xl md:text-4xl" : "text-3xl sm:text-4xl md:text-5xl"}`}>
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm font-bold text-v-gray uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
