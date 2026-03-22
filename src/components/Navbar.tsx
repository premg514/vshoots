"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-gray-200 py-3 shadow-sm" : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <Image
            src="https://res.cloudinary.com/deeejohfw/image/upload/v1774190718/IMG_3745_dacau7.png"
            alt="Vshoots Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-bold text-v-gray hover:text-v-dark transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-bold text-v-gray hover:text-v-dark transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+919440771314"
            className="hidden sm:flex text-sm font-black text-v-dark items-center gap-2"
          >
            <span className="text-v-yellow text-lg">☎</span> 944 077 1314
          </a>
          <Link
            href="#contact"
            className="bg-v-yellow hover:bg-[#eab308] text-v-dark text-xs sm:text-sm font-bold py-2 sm:py-2.5 px-5 sm:px-6 rounded-full shadow-[0_4px_10px_rgba(242,191,24,0.3)] transition-all transform hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
