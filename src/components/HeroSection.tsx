import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {

  return (
    <section className="relative w-full min-h-[100dvh] h-[100dvh] p-3 sm:p-4 md:p-6 bg-black">
      {/* Inset Container with rounded borders */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black flex flex-col justify-between border border-white/10 shadow-2xl">
        
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80 pointer-events-none z-10" />

        {/* Top Tagline Badge */}
        <div className="relative z-20 pt-16 md:pt-14 px-4 sm:px-6 md:px-12 flex justify-between items-start">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-widest text-[#E59C69]">
            <span className="w-2 h-2 rounded-full bg-[#E59C69] animate-pulse" />
            AUSTRALIA · DUBAI · HYDERABAD · NZ · UK
          </div>

          <div className="ml-auto hidden md:block text-right">
            <p className="text-[11px] tracking-widest uppercase text-white/50">Intelligence · Systems · Growth</p>
            <p className="text-xs text-[#E59C69] font-medium tracking-wider">AUDIT. BUILD. MARKET. AUTOMATE.</p>
          </div>
        </div>

        {/* Bottom Hero Content: 12-Column Grid */}
        <div className="relative z-20 pb-4 sm:pb-6 md:pb-10 px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-12 gap-4 lg:gap-8 items-end">
            
            {/* Left 8 Columns: Heading "OneLoop*" */}
            <div className="col-span-12 lg:col-span-8 flex items-end overflow-visible pr-2">
              <h1
                style={{ color: '#E1E0CC' }}
                className="text-[17vw] sm:text-[15vw] md:text-[13vw] lg:text-[9.8vw] xl:text-[9.2vw] 2xl:text-[9.5vw] font-medium leading-[0.85] tracking-[-0.06em] select-none uppercase font-sans whitespace-nowrap"
              >
                <WordsPullUp text="OneLoop" showAsterisk={true} />
              </h1>
            </div>

            {/* Right 4 Columns: Description + CTA Button */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-end gap-4 sm:gap-5 pb-2 md:pb-4 lg:pl-4">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.25] font-normal"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5
                }}
              >
                OneLoop is a growth intelligence collective bound not by vanity metrics or silos, but by passion to unlock business potential through websites that convert, marketing that tracks, and systems that scale.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.7
                }}
                className="flex items-stretch sm:items-center flex-wrap gap-3"
              >
                <button
                  onClick={onOpenInquiry}
                  className="group inline-flex items-center justify-between pl-5 pr-2 py-2.5 sm:py-2.5 min-h-[44px] bg-primary text-black rounded-full font-medium text-sm sm:text-base tracking-tight hover:gap-3 transition-all duration-300 hover:bg-[#FDC7A1] shadow-lg shadow-black/50 cursor-pointer"
                >
                  <span className="mr-3 font-semibold">Audit my business</span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center text-[#E1E0CC] transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <ArrowRight className="w-4 h-4 text-[#E1E0CC] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </motion.div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
