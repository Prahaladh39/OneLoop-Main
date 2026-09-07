import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_CATEGORIES } from '../data/faqData';

export const FAQSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(FAQ_CATEGORIES[0].id);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(FAQ_CATEGORIES[0].questions[0].id);

  const activeCategory = FAQ_CATEGORIES.find((c) => c.id === activeCategoryId) || FAQ_CATEGORIES[0];

  const toggleQuestion = (id: string) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E59C69]/5 rounded-full blur-3xl pointer-events-none" />


      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#E59C69] font-bold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight font-sans">
            Got questions? We've got <span className="italic font-serif text-[#E59C69]">clarity</span>.
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light leading-relaxed">
            Everything you need to know about our growth loops, free audits, and execution timelines.
          </p>
        </div>

        {/* Tab List (Step 6 Data-Driven Category Tabs) */}
        {FAQ_CATEGORIES.length > 1 && (
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryId(cat.id);
                    setOpenQuestionId(cat.questions[0]?.id || null);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#E59C69] text-black border-[#E59C69] font-semibold shadow-md'
                      : 'bg-[#141414] text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Accordion List (Step 5 Animated Accordions with 150-250ms ease) */}
        <div className="space-y-3.5">
          {activeCategory.questions.map((item, idx) => {
            const isOpen = openQuestionId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141414] border-[#E59C69]/40 shadow-xl shadow-black/40'
                    : 'bg-[#101010] border-white/5 hover:border-white/15'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleQuestion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono text-[#E59C69]/70 group-hover:text-[#E59C69] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#FDC7A1] transition-colors">
                      {item.q}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#E59C69] text-black border-[#E59C69] rotate-180'
                        : 'bg-[#1A1A1A] text-gray-400 border-white/10 group-hover:text-white group-hover:border-white/30'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Animated Answer Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-white/5 pl-14">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 font-light">
            Have a custom operational requirement?{' '}
            <a href="#audit" className="text-[#E59C69] hover:underline font-medium">
              Book a complimentary operational audit →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
