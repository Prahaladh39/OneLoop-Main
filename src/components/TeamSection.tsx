import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowUpRight, Users } from 'lucide-react';

import { FOUNDERS_DATA, TEAM_SCALE_DATA } from '../data/teamData';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative w-full bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[350px] bg-[#E59C69]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[350px] bg-[#E59C69]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* STEP 4 — WORDMARK HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#E59C69] font-bold mb-4">
            <Users className="w-3.5 h-3.5" />
            Leadership & Scale
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight font-sans">
            Meet the <span className="italic font-serif text-[#E59C69]">Loop</span>.
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed mt-4 max-w-2xl mx-auto">
            25+ specialists across web & app development, digital marketing, brand & creative, and AI automation — not two people wearing ten hats.
          </p>
        </div>

        {/* STEP 5 — FOUNDER PROFILE CARDS (2 Real People) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {FOUNDERS_DATA.map((founder, idx) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-[#111111] border border-white/10 hover:border-[#E59C69]/40 hover:bg-[#141414] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E59C69]/5 rounded-full blur-2xl group-hover:bg-[#E59C69]/10 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Photo Frame with Fallback Handling */}
                <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-[#181818] border border-white/10 mb-6 group-hover:border-[#E59C69]/40 transition-colors shadow-inner flex items-center justify-center">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top hover:scale-[1.03] transition-all duration-500 z-10 relative"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Architectural Backdrop / Fallback Badge */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#1D1D1D] to-[#121212] z-0">
                    <div className="w-20 h-20 rounded-2xl bg-[#222222] border border-white/10 flex items-center justify-center text-[#E1E0CC] font-mono font-bold text-2xl mb-3 shadow-inner group-hover:border-[#E59C69]/50 group-hover:text-[#E59C69] transition-colors">
                      {founder.monogram}
                    </div>
                    <span className="text-sm font-semibold text-white tracking-tight">{founder.name}</span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#E59C69] mt-1">OneLoop Leadership</span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FDC7A1] transition-colors tracking-tight">
                      {founder.name}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-[#1F1F1F] text-[#E59C69] border border-white/5 shrink-0">
                      Core Founder
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-[#E59C69] font-medium tracking-wide">
                    {founder.title}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mt-4">
                  {founder.bio}
                </p>
              </div>

              {/* LinkedIn Connect Button - Touch Friendly min 44px */}
              <div className="relative z-10 pt-5 mt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-3">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-[#181818] hover:bg-[#222222] text-xs font-mono text-[#E1E0CC] hover:text-white border border-white/10 hover:border-[#E59C69]/40 transition-all cursor-pointer group/link"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover/link:text-[#E59C69] transition-colors shrink-0" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover/link:text-[#E59C69] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
                </a>

                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#E59C69]" />
                  <span>Active</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* STEP 6 — TEAM-SCALE ELEMENT */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#111111] border border-white/10 p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,156,105,0.06),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-sans">
              {TEAM_SCALE_DATA.statNumber}
            </div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#E59C69] font-semibold">
              {TEAM_SCALE_DATA.statLabel}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto leading-relaxed pt-1">
              Engineers, growth architects, creative directors, and automation specialists executing across every stage of the growth loop.
            </p>

            {/* Domain Tag Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6">
              {TEAM_SCALE_DATA.domainTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#161616] border border-[#DEDBC8]/20 hover:border-[#E59C69]/50 text-xs font-mono uppercase tracking-wider text-[#E1E0CC] transition-colors shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
