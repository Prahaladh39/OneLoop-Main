import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Sparkles, Building2, Globe2, ShieldCheck, Quote } from 'lucide-react';
import { SOCIAL_PROOF_DATA } from '../data/socialProofData';
import { SocialProofEntry } from '../types';

export const SocialProofSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Single typed array with featured flag filter per Step 7
  const visibleClients = isExpanded
    ? SOCIAL_PROOF_DATA
    : SOCIAL_PROOF_DATA.filter((client) => client.featured);

  // Balanced 2-column masonry distribution
  const col1 = visibleClients.filter((_, idx) => idx % 2 === 0);
  const col2 = visibleClients.filter((_, idx) => idx % 2 !== 0);

  const renderClientCard = (client: SocialProofEntry, index: number) => {
    // Intentional subtle height and layout variations for natural masonry rhythm
    const isTall = index % 3 === 0;
    const isUltraCompact = index % 4 === 1;

    return (
      <motion.div
        key={client.id}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
        className={`group relative rounded-2xl bg-[#121212] border border-white/5 hover:border-[#E59C69]/40 hover:bg-[#161616] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
          isTall ? 'p-6 sm:p-7' : isUltraCompact ? 'p-5' : 'p-6'
        }`}
      >
        {/* Ambient Hover Radial Glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#E59C69]/5 rounded-full blur-2xl group-hover:bg-[#E59C69]/15 transition-all duration-500 pointer-events-none" />


        <div className="relative z-10">
          {/* Card Top: Minimal Brand Mark + Meta Tags */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              {/* Minimalist Dark/Cream Brand Mark (No fake human photos) */}
              <div className="w-11 h-11 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#E1E0CC] font-mono font-bold text-xs tracking-wider shadow-inner group-hover:border-[#E59C69]/40 group-hover:text-[#E59C69] transition-colors">
                {client.monogram}
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#FDC7A1] transition-colors tracking-tight">
                  {client.name}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] text-[#E59C69] font-medium tracking-wide">
                    {client.category}
                  </span>
                  {client.location && (
                    <>
                      <span className="text-gray-600 text-[10px]">•</span>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {client.location}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Optional Highlight Pill */}
            {client.highlightBadge && (
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#1F1F1F] text-gray-300 border border-white/5 group-hover:border-[#E59C69]/30">
                {client.highlightBadge}
              </span>
            )}
          </div>

          {/* Literal Placeholder Quote (Per Step 5 / Rules: DO NOT synthesize quotes) */}
          <div className="my-4 relative">
            <Quote className="w-4 h-4 text-white/10 mb-2" />
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed italic select-all">
              "{client.quote}"
            </p>
          </div>

          {/* Delivered Scope / Engagement Work Details (Varies height naturally) */}
          {client.scope && (
            <div className="mt-3 pt-3 border-t border-white/5">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#E59C69]/70 block mb-1">
                Engagement Scope
              </span>
              <p className="text-xs text-gray-400 font-light leading-snug">
                {client.scope}
              </p>
            </div>
          )}
        </div>

        {/* Card Footer: Clean Verified Status Only */}
        <div className="relative z-10 pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E59C69]" />
            <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">
              {client.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#181818] border border-white/5 text-[10px] font-mono text-[#E59C69] group-hover:border-[#E59C69]/30 transition-colors">
            <ShieldCheck className="w-3 h-3 text-[#E59C69]" />
            <span>Verified</span>
          </div>
        </div>
      </motion.div>

    );
  };

  return (
    <section id="clients" className="relative w-full bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E59C69]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#E59C69]/5 rounded-full blur-3xl pointer-events-none" />


      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main 2-Column Grid: Sticky Intro Rail (Left) & Balanced Masonry (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* STEP 4 — STICKY INTRO RAIL */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div>
              {/* Kicker Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[10px] uppercase tracking-widest text-[#E59C69] mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Editorial Wall of Proof
              </div>

              {/* Headline in Instrument Serif italic per Step 4 */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.05]">
                <span className="font-serif italic text-[#E59C69]">Proof</span> over promises.
              </h2>

              {/* Subhead in Almarai font-sans per Step 4 */}
              <p className="font-sans text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed mt-4">
                24+ brands across web, app, marketing, and automation — no stock testimonials, just the work.
              </p>
            </div>

            {/* Editorial Scorecard / Trust Indicators */}
            <div className="rounded-2xl bg-[#121212] border border-white/5 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Building2 className="w-4 h-4 text-[#E59C69]" />
                  <span>Roster Scale</span>
                </div>
                <span className="text-xs font-mono font-bold text-white">
                  25 Active Brands
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Globe2 className="w-4 h-4 text-[#E59C69]" />
                  <span>Global Footprint</span>
                </div>
                <span className="text-[11px] font-mono text-[#E59C69]">
                  AU · AE · IN · NZ · UK
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-[#E59C69]" />
                  <span>Verification</span>
                </div>
                <span className="text-xs font-mono text-gray-300">
                  100% Real Engagements
                </span>
              </div>
            </div>

            {/* Live Counter & Expand Toggle Affordance */}
            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="text-xs text-gray-500 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E59C69] animate-pulse" />
                <span>
                  Showing {visibleClients.length} of {SOCIAL_PROOF_DATA.length} client partnerships
                </span>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#181818] hover:bg-[#202020] text-xs font-medium text-[#E1E0CC] border border-white/10 hover:border-[#E59C69]/40 transition-all cursor-pointer group"
              >
                {isExpanded ? (
                  <>
                    <Minus className="w-3.5 h-3.5 text-[#E59C69]" />
                    <span>Collapse to 7 Featured Clients</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5 text-[#E59C69] group-hover:rotate-90 transition-transform duration-300" />
                    <span>View All 25 Client Deployments</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* STEP 5, 6, 7 — BALANCED MASONRY WALL */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-5">
                {col1.map((client, idx) => renderClientCard(client, idx * 2))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-5">
                {col2.map((client, idx) => renderClientCard(client, idx * 2 + 1))}

                {/* STEP 6 — EXPAND AFFORDANCE ("+") CARD */}
                {!isExpanded && (
                  <motion.button
                    layout
                    onClick={() => setIsExpanded(true)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group relative rounded-2xl bg-[#121212]/90 border-2 border-dashed border-[#DEDBC8]/30 hover:border-[#DEDBC8] hover:bg-[#161616] p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer min-h-[260px] shadow-lg"
                  >
                    {/* Plus Glyph in Cream / Copper Circle */}

                    <div className="w-14 h-14 rounded-full bg-[#1F1F1F] border border-[#DEDBC8]/40 flex items-center justify-center text-[#E1E0CC] group-hover:bg-[#E59C69] group-hover:text-black group-hover:border-[#E59C69] group-hover:scale-110 transition-all duration-300 shadow-md mb-4">
                      <Plus className="w-6 h-6 stroke-[2.5]" />
                    </div>

                    <h4 className="text-base font-bold text-[#E1E0CC] group-hover:text-white transition-colors mb-1">
                      View more
                    </h4>

                    <span className="text-xs text-gray-400 font-mono mb-3">
                      +18 additional brands
                    </span>

                    <p className="text-[11px] text-gray-500 max-w-xs font-light leading-relaxed">
                      Expand the masonry wall to explore our retail, healthcare, hospitality, and automotive network.
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-[11px] font-mono text-[#E59C69] group-hover:translate-x-0.5 transition-transform">
                      <span>Explore full roster</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.button>
                )}
              </div>

            </div>

            {/* When expanded, show a collapse footer at the bottom of the masonry wall */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4"
                >
                  <p className="text-xs text-gray-400 font-light">
                    Showing all 25 active OneLoop client engagements and technology platforms.
                  </p>
                  <button
                    onClick={() => {
                      setIsExpanded(false);
                      const el = document.getElementById('clients');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161616] hover:bg-[#202020] text-xs font-mono text-[#E59C69] border border-white/10 hover:border-[#E59C69]/40 transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                    <span>Show featured 7 only</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
