import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ONELOOP_SERVICES } from '../data/servicesData';
import { OneLoopMark } from './OneLoopLogo';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
  onLearnMore?: (serviceName: string) => void;
}

export const FeaturesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onLearnMore }) => {
  const handleAction = (title: string) => {
    if (onSelectService) onSelectService(title);
    if (onLearnMore) onLearnMore(title);
  };
  return (
    <section id="features" className="relative min-h-screen bg-[#000000] py-24 px-4 md:px-6 overflow-hidden border-t border-white/5">
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <OneLoopMark className="w-5 h-5 text-[#E59C69]" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#E59C69] font-bold">
              Services & Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight font-sans">
            The engine behind brands that <span className="italic font-serif text-[#E59C69]">actually</span> scale.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light max-w-xl mx-auto leading-relaxed">
            From first click to repeat customer — six loops built to compound revenue, not just generate reports.
          </p>
        </div>

        {/* Uniform 2 Rows x 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ONELOOP_SERVICES.map((card) => (
            <div
              key={card.id}
              tabIndex={0}
              role="button"
              aria-label={`${card.title} service details`}
              onClick={() => handleAction(card.title)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleAction(card.title);
                }
              }}
              className="group relative h-[420px] rounded-2xl overflow-hidden bg-[#161616] border border-white/10 hover:border-[#E59C69]/40 focus-visible:border-[#E59C69] focus-visible:ring-2 focus-visible:ring-[#E59C69]/50 focus:outline-none transition-all duration-200 cursor-pointer shadow-xl"
            >
              {/* Card Background Image with subtle zoom on hover */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out md:group-hover:scale-[1.03] md:group-focus-visible:scale-[1.03] motion-reduce:transform-none"
              />

              {/* Resting State Gradient: ensures title is legible from the start */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none transition-opacity duration-200 md:group-hover:opacity-0 md:group-focus-visible:opacity-0" />

              {/* Desktop Hover Dark Overlay: semi-transparent black (80-85%) */}
              <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] opacity-90 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-200 ease-out pointer-events-none motion-reduce:transition-none" />

              {/* Top-Right Index Number */}
              <div className="absolute top-5 right-5 z-20 font-mono text-xs font-semibold text-[#E59C69] tracking-widest bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 shadow-md">
                {card.index}
              </div>

              {/* Card Body Content */}
              <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between">
                
                {/* Title & Checklist Container */}
                <div className="transition-transform duration-200 ease-out md:translate-y-[205px] md:group-hover:translate-y-0 md:group-focus-visible:translate-y-0 motion-reduce:transform-none">
                  
                  {/* Title (Stays visible at resting state bottom-left, anchors to top on hover) */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug font-sans mb-5 drop-shadow-md pr-12">
                    {card.title}
                  </h3>

                  {/* 3-4 Checklist Items (Fades and slides up into view on hover) */}
                  <div className="space-y-3">
                    {card.checklist.map((item, i) => (
                      <div
                        key={i}
                        style={{ transitionDelay: `${i * 40}ms` }}
                        className="flex items-start gap-2.5 opacity-100 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-visible:opacity-100 md:group-focus-visible:translate-y-0 transition-all duration-200 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#E59C69]/15 border border-[#E59C69]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#E59C69]" />
                        </div>
                        <span className="text-xs text-gray-300 leading-snug font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer (Revealed on hover / always visible on mobile) */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-200 ease-out motion-reduce:opacity-100">
                  <span className="text-xs font-medium text-[#E59C69] flex items-center gap-1.5 group-hover:text-[#FDC7A1] transition-colors">
                    Consult on this loop
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#E59C69]/20 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#E59C69] -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
