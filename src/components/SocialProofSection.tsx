import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Quote, 
  X
} from 'lucide-react';
import { SOCIAL_PROOF_DATA } from '../data/socialProofData';
import { SocialProofEntry } from '../types';

export const SocialProofSection: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<SocialProofEntry | null>(null);

  // Divide the 22 clients into 2 balanced rows for the dual-direction marquee
  const row1 = SOCIAL_PROOF_DATA.filter((_, idx) => idx % 2 === 0);
  const row2 = SOCIAL_PROOF_DATA.filter((_, idx) => idx % 2 !== 0);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedClient(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderCard = (client: SocialProofEntry, index: number, rowTag: string) => {
    return (
      <div
        key={`${rowTag}-${client.id}-${index}`}
        onClick={() => setSelectedClient(client)}
        className="w-[280px] xs:w-[310px] sm:w-[360px] md:w-[390px] h-[220px] sm:h-[235px] shrink-0 rounded-2xl bg-[#121212]/95 hover:bg-[#181818] border border-white/[0.08] hover:border-[#E59C69]/60 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-[0_8px_30px_rgba(229,156,105,0.12)] relative overflow-hidden select-none active:scale-[0.98]"
      >
        {/* Ambient Hover Glow */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#E59C69]/10 rounded-full blur-2xl group-hover:bg-[#E59C69]/25 transition-all duration-500 pointer-events-none" />

        {/* Top Header: Logo + Title + Tags */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {/* Brand Logo / Monogram Emblem */}
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center overflow-hidden shrink-0 shadow-inner transition-all duration-300 ${
                  client.logo
                    ? 'bg-white border-white/10 p-1 group-hover:border-[#E59C69]/60 group-hover:shadow-[0_0_12px_rgba(229,156,105,0.2)]'
                    : 'bg-[#1A1A1A] border-white/10 text-[#E59C69] font-mono font-bold text-xs tracking-wider group-hover:border-[#E59C69]/50'
                }`}
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                ) : (
                  client.monogram
                )}
              </div>

              {/* Title and Category */}
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FDC7A1] transition-colors truncate tracking-tight">
                  {client.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] sm:text-[11px] text-[#E59C69] font-medium tracking-wide truncate">
                    {client.category}
                  </span>
                  {client.location && (
                    <>
                      <span className="text-gray-600 text-[9px]">•</span>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {client.location}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Highlight Pill */}
            {client.highlightBadge && (
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#1B1B1B] text-gray-300 border border-white/5 shrink-0 group-hover:border-[#E59C69]/30">
                {client.highlightBadge}
              </span>
            )}
          </div>

          {/* Testimonial Quote */}
          <div className="mt-3 relative">
            <Quote className="w-3.5 h-3.5 text-[#E59C69]/40 mb-1" />
            <p className="text-xs sm:text-[13px] text-gray-300 font-light leading-relaxed italic line-clamp-3">
              "{client.quote}"
            </p>
          </div>
        </div>

        {/* Card Bottom: Scope of Work + Verified Status */}
        <div className="relative z-10 pt-2.5 border-t border-white/5 flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <span className="text-[8px] uppercase font-mono tracking-widest text-[#E59C69]/70 block">
              Engagement
            </span>
            <p className="text-[10px] sm:text-[11px] text-gray-400 font-light truncate">
              {client.scope || 'Digital Engineering & Growth'}
            </p>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#181818] border border-white/5 text-[9px] sm:text-[10px] font-mono text-[#E59C69] shrink-0 group-hover:border-[#E59C69]/30 transition-colors">
            <ShieldCheck className="w-3 h-3 text-[#E59C69]" />
            <span>Verified</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="clients" 
      className="relative w-full bg-[#0A0A0A] py-20 sm:py-28 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#E59C69]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#E59C69]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Kicker Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/10 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#E59C69] mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Editorial Wall of Proof
          </div>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1]">
            <span className="font-serif italic text-[#E59C69]">Proof</span> over promises.
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed mt-4 max-w-2xl mx-auto">
            22+ verified client partnerships across web applications, mobile platforms, enterprise automation, and performance marketing — no stock testimonials, just the work.
          </p>

          {/* Quick Metrics & Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121212] border border-white/5 text-xs text-gray-300">
              <Building2 className="w-3.5 h-3.5 text-[#E59C69]" />
              <span className="font-mono text-white font-semibold">22+</span>
              <span className="text-gray-400">Deployments</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121212] border border-white/5 text-xs text-gray-300">
              <Globe2 className="w-3.5 h-3.5 text-[#E59C69]" />
              <span className="font-mono text-[#E59C69]">AU · AE · IN · NZ · UK</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121212] border border-white/5 text-xs text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E59C69]" />
              <span className="text-gray-300">100% Real Engagements</span>
            </div>
          </div>
        </div>
      </div>

      {/* DUAL-ROW INFINITE MARQUEE SCROLLER */}
      <div 
        className={`group-marquee relative w-full overflow-hidden space-y-4 sm:space-y-6 ${
          selectedClient ? 'pause-marquee' : ''
        }`}
      >
        {/* Seamless Edge Fades (Mobile-optimized width) */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-24 md:w-36 lg:w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-24 md:w-36 lg:w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-20 pointer-events-none" />

        {/* ROW 1: Scrolls Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 shrink-0">
            {/* 1st copy */}
            {row1.map((client, idx) => renderCard(client, idx, 'row1-a'))}
            {/* 2nd copy for seamless infinite loop */}
            {row1.map((client, idx) => renderCard(client, idx, 'row1-b'))}
          </div>
        </div>

        {/* ROW 2: Scrolls Right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex gap-4 sm:gap-6 shrink-0">
            {/* 1st copy */}
            {row2.map((client, idx) => renderCard(client, idx, 'row2-a'))}
            {/* 2nd copy for seamless infinite loop */}
            {row2.map((client, idx) => renderCard(client, idx, 'row2-b'))}
          </div>
        </div>
      </div>

      {/* Marquee Footnote / Interactive Hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex items-center justify-center text-center relative z-10">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E59C69] animate-pulse" />
          <span>Interactive stream • Tap or hover any card to inspect full scope</span>
        </div>
      </div>

      {/* CLIENT DETAIL INSPECTION MODAL */}
      <AnimatePresence>
        {selectedClient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClient(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-7 shadow-2xl z-10 overflow-hidden"
            >
              {/* Radial Accent Glow */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#E59C69]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedClient(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Client Profile Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-xl border flex items-center justify-center overflow-hidden shrink-0 shadow-md ${
                    selectedClient.logo
                      ? 'bg-white border-white/10 p-1.5'
                      : 'bg-[#1E1E1E] border-white/10 text-[#E59C69] font-mono font-bold text-base'
                  }`}
                >
                  {selectedClient.logo ? (
                    <img
                      src={selectedClient.logo}
                      alt={`${selectedClient.name} logo`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  ) : (
                    selectedClient.monogram
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {selectedClient.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-[#E59C69] font-medium">
                      {selectedClient.category}
                    </span>
                    {selectedClient.location && (
                      <>
                        <span className="text-gray-600 text-xs">•</span>
                        <span className="text-xs text-gray-400 font-mono">
                          {selectedClient.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Highlight badge if available */}
              {selectedClient.highlightBadge && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#1E1E1E] text-[#E59C69] border border-white/5 mb-4">
                  <Sparkles className="w-3 h-3 text-[#E59C69]" />
                  <span>{selectedClient.highlightBadge}</span>
                </div>
              )}

              {/* Full Testimonial Quote */}
              <div className="my-4 p-4 rounded-xl bg-[#0D0D0D] border border-white/5 relative">
                <Quote className="w-4 h-4 text-[#E59C69]/50 mb-2" />
                <p className="text-sm text-gray-200 font-light leading-relaxed italic">
                  "{selectedClient.quote}"
                </p>
              </div>

              {/* Scope of Engagement */}
              {selectedClient.scope && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E59C69]/80 block mb-1">
                    Delivered Engagement Scope
                  </span>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {selectedClient.scope}
                  </p>
                </div>
              )}

              {/* Footer status & Actions */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-white/5 text-xs font-mono text-[#E59C69]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E59C69]" />
                  <span>Verified Engagement</span>
                </div>

                <button
                  onClick={() => setSelectedClient(null)}
                  className="px-4 py-1.5 rounded-xl bg-[#1E1E1E] hover:bg-[#252525] text-xs font-medium text-white border border-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
