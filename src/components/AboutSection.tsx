import React from 'react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { AnimatedTextReveal } from './AnimatedLetter';
import { OneLoopMark } from './OneLoopLogo';

export const AboutSection: React.FC = () => {
  const headlineSegments = [
    {
      text: "We are OneLoop,",
      className: "font-normal text-[#E1E0CC]"
    },
    {
      text: "closing the gaps in modern growth.",
      className: "italic font-serif text-[#E59C69] font-normal"
    },
    {
      text: "We engineer websites that convert, ads that track, and automations that scale.",
      className: "font-normal text-[#E1E0CC]"
    }
  ];

  const revealParagraph = "Over the last several years, OneLoop has partnered with visionary brands across Australia, Dubai, New Zealand, the United Kingdom, and Hyderabad. Growth breaks down in the gaps between a business's website, its marketing, its operations, and its brand — usually because each piece is handled by a different vendor with no one owning the outcome. We close that loop with verified conversion tracking, resilient custom software, and autonomous pipelines.";

  return (
    <section id="about" className="relative w-full bg-black py-16 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto rounded-3xl md:rounded-[2.5rem] bg-[#101010] border border-white/5 p-6 sm:p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
        
        {/* Subtle background copper radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E59C69]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Small Top Label */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <OneLoopMark className="w-5 h-5 text-[#E59C69]" />
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold">
            The Philosophy of The Loop
          </span>
        </div>

        {/* Main Multi-Style Headline with WordsPullUp */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.0] sm:leading-[0.95] tracking-tight">
            <WordsPullUpMultiStyle segments={headlineSegments} />
          </h2>
        </div>

        {/* Scroll-Linked Character Opacity Reveal Body Paragraph */}
        <div className="max-w-2xl mx-auto">
          <AnimatedTextReveal
            text={revealParagraph}
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed tracking-normal font-light"
          />
        </div>

      </div>
    </section>
  );
};
