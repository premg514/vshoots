"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white relative overflow-hidden">
      {/* Top yellow accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-v-yellow" />

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-v-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 relative z-10">

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 pb-12 border-b border-white/10"
        >
          {/* Brand Column */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <Image
                src="https://res.cloudinary.com/deeejohfw/image/upload/v1774190718/IMG_3745_dacau7.png"
                alt="Vshoots Logo"
                width={130}
                height={45}
                className="h-11 w-auto object-contain brightness-0 invert group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-white/50 text-sm font-medium leading-relaxed max-w-xs mt-3">
              The world&apos;s quickest content creation service. We shoot, edit, and deliver premium iPhone reels — almost instantly.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-v-yellow hover:bg-v-yellow hover:text-v-dark text-white/60 transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-v-yellow hover:bg-v-yellow hover:text-v-dark text-white/60 font-bold text-xs transition-all duration-300"
              >
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-black tracking-widest uppercase text-v-yellow mb-6">Quick Links</h4>
            <ul className="space-y-3.5">
              {[
                { label: "Features", href: "#features" },
                { label: "Our Work", href: "#work" },
                { label: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-v-yellow transition-colors font-medium text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-v-yellow transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-black tracking-widest uppercase text-v-yellow mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919440771314"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-full bg-v-yellow/10 border border-v-yellow/20 flex items-center justify-center text-v-yellow group-hover:bg-v-yellow group-hover:text-v-dark transition-all duration-300 text-base">
                    ☎
                  </span>
                  <span className="font-bold text-white group-hover:text-v-yellow transition-colors">
                    +91 944 077 1314
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 text-base">
                    📍
                  </span>
                  <span className="font-bold text-white/60 tracking-widest text-sm uppercase">
                    Vijayawada, AP
                  </span>
                </div>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/919440771314?text=${encodeURIComponent("Hi Vshoots, I'm interested in your services!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-v-yellow text-v-dark text-sm font-black hover:bg-white hover:text-v-dark transition-all duration-300 shadow-[0_4px_14px_rgba(242,191,24,0.3)]"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30 font-medium">
          <p>© {new Date().getFullYear()} Vshoots. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.digitalarc.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-v-yellow/70 hover:text-v-yellow transition-colors font-bold"
            >
              Digital Arc Technologies
            </a>
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-v-yellow transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-v-yellow transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
