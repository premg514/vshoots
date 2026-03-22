"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "1,999",
      description: "Perfect for quick updates and single reels.",
      features: ["1 Hour Shoot", "2 Edited Reels", "Instant Delivery", "Shot on iPhone"],
      buttonText: "Book Starter",
      popular: false,
    },
    {
      name: "Creator Pro",
      price: "4,999",
      description: "Best for consistent weekly content generation.",
      features: ["Half Day Shoot", "5 Edited Reels", "Trending Audio Sync", "Priority Delivery"],
      buttonText: "Book Pro",
      popular: true,
    },
    {
      name: "Luxe Brand",
      price: "9,999",
      description: "Full production value for brand campaigns.",
      features: ["Full Day Shoot", "10+ Edited Reels", "Advanced Color Grading", "Dedicated Editor"],
      buttonText: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-v-darker relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:px-0 mb-10 sm:mb-16"
        >
          <h2 className="text-xs sm:text-sm font-black text-v-yellow tracking-widest uppercase mb-3 sm:mb-4">Transparent Pricing</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-v-dark">Choose your package</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-1 sm:px-0">
          {plans.map((plan, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index} 
              className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${
                plan.popular 
                  ? 'border-v-yellow shadow-[0_10px_30px_rgba(242,191,24,0.15)] hover:border-v-yellow hover:shadow-[0_15px_40px_rgba(242,191,24,0.25)]' 
                  : 'border-gray-200 shadow-sm hover:border-v-yellow hover:shadow-[0_8px_30px_rgba(242,191,24,0.15)]'
              } flex flex-col hover:-translate-y-2 transition-all duration-300 group`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-v-yellow text-v-dark text-xs font-black uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md">
                   Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-2xl font-black text-v-dark mb-2">{plan.name}</h4>
                <p className="text-v-gray font-medium text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl font-black text-v-dark">₹{plan.price}</span>
                <span className="text-v-gray font-medium text-sm sm:text-base">/session</span>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1 text-sm sm:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-v-dark font-medium">
                    <span className="text-v-yellow mt-0.5 sm:mt-0 font-bold text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/919440771314?text=${encodeURIComponent(`Hi Vshoots, I'm interested in booking the ${plan.name} package for ₹${plan.price}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-full font-bold text-center transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-v-yellow text-v-dark hover:bg-[#eab308] shadow-[0_4px_14px_rgba(242,191,24,0.39)] hover:shadow-[0_4px_14px_rgba(242,191,24,0.5)]' 
                    : 'bg-v-darker text-v-dark hover:bg-v-yellow hover:text-v-dark'
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
