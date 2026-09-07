import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ChevronRight, Building2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface StatBlock {
  label: string;
  value: string;
  subtext: string;
}

interface PerformanceCase {
  id: string;
  tabLabel: string;
  flag: string;
  client: string;
  meta: string;
  milestone: string;
  stats: [StatBlock, StatBlock, StatBlock, StatBlock];
  challenge: string;
  playbook: string[];
}

const CASES_DATA: PerformanceCase[] = [
  {
    id: 'rmc-plumbing',
    tabLabel: 'RMC Plumbing Services',
    flag: '🇦🇺',
    client: 'RMC Plumbing Services',
    meta: '🇦🇺 Australia · Local Services & Lead Gen · Google Ads (Search) · Client since October 2023',
    milestone: '6.1x Leads & 79% Cost Reduction',
    stats: [
      { label: 'Lead Growth', value: '6.1x', subtext: 'Scaled from 11/mo to 66/mo' },
      { label: 'Cost Per Lead', value: '-79%', subtext: 'Plummeted from $92 to $19' },
      { label: 'Total Leads', value: '1,327', subtext: 'Delivered on AUD $32,499 spend' },
      { label: 'Blended CPL', value: '~$24', subtext: 'Across full engagement' }
    ],
    challenge:
      'RMC Plumbing needed a steady, predictable flow of local service calls and job requests from Google Ads, at a cost per lead that kept the campaign profitable as they scaled spend.',
    playbook: [
      'Rebuilt campaign structure around high-intent, service-specific search terms instead of broad-match generic keywords',
      'Continuously trimmed underperforming keywords and search terms to lift click-through rate and Quality Score, pulling average CPC down over time',
      'Shifted budget toward the times of day and campaign types converting at the lowest cost per lead',
      'Ongoing monthly testing of ad copy and offers to keep conversion rate climbing as the account matured'
    ]
  },
  {
    id: 'bamboo-spa',
    tabLabel: 'Bamboo Spa',
    flag: '🇳🇿',
    client: 'Bamboo Spa',
    meta: '🇳🇿 New Zealand · Wellness & Local Bookings · Google Ads (Search) · Client since October 2024',
    milestone: '2.1x Conversions & 46% Cost Reduction',
    stats: [
      { label: 'Conversion Growth', value: '2.1x', subtext: 'Scaled from 1,237/mo to 2,587/mo' },
      { label: 'Cost Per Conversion', value: '-46%', subtext: 'Dropped from $1.44 to $0.78' },
      { label: 'Total Conversions', value: '40,624', subtext: 'Delivered on NZD $38,778 spend' },
      { label: 'Total Ad Spend', value: 'NZD $38.8K', subtext: 'Full engagement to date' }
    ],
    challenge:
      'Bamboo Spa runs on a high volume of small, everyday booking actions — calls, form fills, and directions requests — so the priority was driving more of these local conversions each month while keeping cost per conversion low enough to scale spend comfortably.',
    playbook: [
      'Expanded coverage across the full range of local booking and enquiry actions customers take, not just phone calls',
      'Tightened geo and audience targeting to focus spend on the areas driving real footfall',
      'Used performance data month over month to keep shifting budget toward the highest-converting campaigns'
    ]
  },
  {
    id: 'bikers-wear-au',
    tabLabel: 'Bikers Wear Australia',
    flag: '🇦🇺',
    client: 'Bikers Wear Australia',
    meta: '🇦🇺 Australia · E-commerce Revenue & ROAS · Google Ads (Shopping & Search) · Client since April 2024',
    milestone: '9x Sustained ROAS at Scale',
    stats: [
      { label: 'Monthly Revenue', value: '$51.4K', subtext: 'Up from $39.9K/mo' },
      { label: 'Monthly Spend', value: '$5.8K', subtext: 'Scaled from $4.3K/mo' },
      { label: 'Return on Ad Spend', value: '~9x', subtext: 'Sustained across 17 months' },
      { label: '17-Month Revenue', value: '$753K', subtext: 'On $88K ad spend' }
    ],
    challenge:
      'An established e-commerce account, already running profitably, needed to scale ad spend without losing return on ad spend (ROAS) — and to do it on cleanly-tracked, trustworthy conversion data.',
    playbook: [
      'Restructured Shopping campaigns around product margin and sell-through, not just click volume',
      'Cleaned up and re-validated conversion tracking so bidding decisions were based on trustworthy data',
      'Used performance max and audience signals to find incremental, high-value customers as budget scaled up'
    ]
  },
  {
    id: 'bikers-gear-uk',
    tabLabel: 'Bikers Gear UK',
    flag: '🇬🇧',
    client: 'Bikers Gear UK',
    meta: '🇬🇧 United Kingdom · E-commerce Revenue & ROAS · Google Ads (Shopping & Search) · Client since January 2025',
    milestone: 'Consistently 4–5x Monthly ROAS',
    stats: [
      { label: 'Blended ROAS', value: '4.6x', subtext: 'Across full tracking period' },
      { label: '10-Month Revenue', value: '£123.9K', subtext: 'On £26,723 ad spend' },
      { label: '10-Month Ad Spend', value: '£26.7K', subtext: 'Stable verified spend' },
      { label: 'Consistent ROAS', value: '4–5x', subtext: 'Month after month consistency' }
    ],
    challenge:
      'Similar brief to its Australian counterpart: keep the account profitable through a conversion-tracking clean-up, and hold a healthy ROAS as the market and account matured.',
    playbook: [
      'Re-mapped and verified conversion actions to get bidding decisions onto reliable data',
      'Kept campaign structure aligned to the AU account\'s proven approach while adapting for the UK market',
      'Held ROAS steady through the tracking transition — the platform\'s foundation for scaling spend going forward'
    ]
  }
];

export const ResultsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CASES_DATA[0].id);
  const [isMoreBrandsOpen, setIsMoreBrandsOpen] = useState(false);

  const activeCase = CASES_DATA.find((c) => c.id === activeId) || CASES_DATA[0];

  return (
    <section id="results" className="relative w-full bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(229,156,105,0.06),transparent_70%)] pointer-events-none" />


      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* STEP 4 — STATIC SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E59C69] font-bold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Audited & Verified Track Records
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight font-sans">
            Proven Results. Zero <span className="italic font-serif text-[#E59C69]">Fluff</span>.
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light max-w-2xl mx-auto leading-relaxed">
            Real, verified Google Ads performance across live client accounts. The raw campaign telemetry behind each result is fully verifiable.
          </p>
        </div>

        {/* STEP 5 — BRAND TOGGLE BAR */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {CASES_DATA.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveId(c.id);
                  setIsMoreBrandsOpen(false);
                }}
                className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-[#E59C69] text-black border-[#E59C69] font-semibold shadow-lg shadow-[#E59C69]/20 scale-[1.02]'
                    : 'bg-[#121212] text-gray-300 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.tabLabel}</span>
              </button>
            );
          })}

          {/* "+ More Brands" Chip */}
          <button
            onClick={() => setIsMoreBrandsOpen(!isMoreBrandsOpen)}
            className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer border ${
              isMoreBrandsOpen
                ? 'bg-[#222222] text-[#E59C69] border-[#E59C69]/50'
                : 'bg-[#161616] text-gray-400 border-dashed border-white/20 hover:border-[#E59C69]/50 hover:text-[#E1E0CC]'
            }`}
          >
            <span className="text-[#E59C69] font-bold">+</span>
            <span>More Brands</span>
          </button>
        </div>

        {/* "+ More Brands" Expandable Roster Notice */}
        <AnimatePresence>
          {isMoreBrandsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden"
            >
              <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#141414] border border-[#E59C69]/30 text-center">
                <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#E59C69] uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>21+ Additional Client Portfolios</span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                  We maintain active full-service, tech deployment, and growth contracts across retail, healthcare, hospitality, luxury jewelry, automotive, and sports facilities in Australia, UAE, India, and the UK.
                </p>
                <a
                  href="#clients"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#E59C69] hover:underline"
                >
                  <span>Explore the full 25-client Wall of Proof below</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STEP 6 & STATS 10 COLOR-BLOCKED CARDS GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="space-y-8"
          >
            
            {/* Meta Line & Milestone Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
              <div className="text-xs font-mono text-gray-400 tracking-wide">
                {activeCase.meta}
              </div>
              <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E59C69] font-sans">
                <span>Milestone:</span>
                <span className="text-white underline decoration-[#E59C69]/40 underline-offset-4 font-normal">
                  {activeCase.milestone}
                </span>
              </div>
            </div>

            {/* REACT BITS PRO "STATS 10" 4-CARD COLOR-BLOCKED GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              
              {/* Card 1: Light Mint Green (#D2EBE0) */}
              <div className="rounded-3xl bg-[#D2EBE0] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[250px] shadow-lg hover:scale-[1.01] transition-transform duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#113222] tracking-tight font-sans">
                  <AnimatedCounter value={activeCase.stats[0].value} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#184630] font-mono mb-1">
                    {activeCase.stats[0].label}
                  </div>
                  <p className="text-xs text-[#285740] font-medium leading-snug">
                    {activeCase.stats[0].subtext}
                  </p>
                </div>
              </div>

              {/* Card 2: Deep Dark Forest Slate (#132219) */}
              <div className="rounded-3xl bg-[#132219] border border-white/5 p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[250px] shadow-lg hover:scale-[1.01] transition-transform duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#88C9AA] tracking-tight font-sans">
                  <AnimatedCounter value={activeCase.stats[1].value} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#88C9AA]/90 font-mono mb-1">
                    {activeCase.stats[1].label}
                  </div>
                  <p className="text-xs text-gray-300 font-light leading-snug">
                    {activeCase.stats[1].subtext}
                  </p>
                </div>
              </div>

              {/* Card 3: Soft Lavender (#DCD3F8) */}
              <div className="rounded-3xl bg-[#DCD3F8] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[250px] shadow-lg hover:scale-[1.01] transition-transform duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#241748] tracking-tight font-sans">
                  <AnimatedCounter value={activeCase.stats[2].value} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#352367] font-mono mb-1">
                    {activeCase.stats[2].label}
                  </div>
                  <p className="text-xs text-[#3E2977] font-medium leading-snug">
                    {activeCase.stats[2].subtext}
                  </p>
                </div>
              </div>

              {/* Card 4: Warm Peach / Terracotta (#FCE0C7) */}
              <div className="rounded-3xl bg-[#FCE0C7] p-7 sm:p-8 flex flex-col justify-between min-h-[220px] sm:min-h-[250px] shadow-lg hover:scale-[1.01] transition-transform duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#48250E] tracking-tight font-sans">
                  <AnimatedCounter value={activeCase.stats[3].value} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5D3215] font-mono mb-1">
                    {activeCase.stats[3].label}
                  </div>
                  <p className="text-xs text-[#6E3C1B] font-medium leading-snug">
                    {activeCase.stats[3].subtext}
                  </p>
                </div>
              </div>

            </div>

            {/* CHALLENGE & EXECUTION PLAYBOOK DEEP-DIVE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
              
              {/* Challenge Box */}
              <div className="lg:col-span-5 p-7 rounded-2xl bg-[#121212] border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E59C69] block mb-2">
                    The Challenge
                  </span>
                  <h4 className="text-base font-bold text-white mb-3">
                    Operational & Growth Bottleneck
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Client: {activeCase.client}</span>
                  <span className="text-[#E59C69]">Verified Data</span>
                </div>
              </div>

              {/* Execution Playbook Box */}
              <div className="lg:col-span-7 p-7 rounded-2xl bg-[#121212] border border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E59C69] block mb-2">
                  Execution Playbook
                </span>
                <h4 className="text-base font-bold text-white mb-4">
                  How OneLoop Engineered This Growth
                </h4>

                <ul className="space-y-3">
                  {activeCase.playbook.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E59C69] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
