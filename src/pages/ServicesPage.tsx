import React from 'react';
import { SEO } from '../components/SEO';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Cpu, 
  TrendingUp, 
  Zap, 
  Layers, 
  Code2, 
  Palette,
  ShieldCheck
} from 'lucide-react';
import { ONELOOP_SERVICES } from '../data/servicesData';
import { OneLoopMark } from '../components/OneLoopLogo';

interface ServicesPageProps {
  onOpenInquiry: (topic?: string) => void;
}

const SERVICE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'web-app-dev': Code2,
  'digital-marketing': TrendingUp,
  'process-automation': Zap,
  'saas-infrastructure': Cpu,
  'custom-tech': Layers,
  'branding-growth': Palette,
};

const SERVICES_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oneloop.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services & Capabilities",
        "item": "https://www.oneloop.in/services"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "OneLoop Growth Capabilities & Services",
    "description": "Six specialized loops engineered to eliminate operational drag, acquire high-value customers, and build lasting enterprise equity.",
    "itemListElement": ONELOOP_SERVICES.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.description || service.tagline || service.title,
      "url": `https://www.oneloop.in/services#${service.slug || service.id}`,
      "provider": {
        "@type": "Organization",
        "name": "OneLoop",
        "url": "https://www.oneloop.in"
      },
      "areaServed": ["AU", "AE", "IN", "GB", "NZ"]
    }))
  }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] pt-24 pb-20 overflow-hidden">
      {/* Dynamic SEO Tags & Schema */}
      <SEO
        title="Services & Capabilities | Web, Marketing, Automation & AI — OneLoop"
        description="Explore OneLoop's 6 full-loop growth capabilities: Web & App Development, High-ROAS Performance Marketing, Workflow Automation, SaaS Scaling, Custom Software & AI, and Brand Systems."
        canonicalUrl="https://www.oneloop.in/services"
        schema={SERVICES_SCHEMA}
      />

      {/* Ambient Radial Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(229,156,105,0.12),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PAGE HERO HEADER (SEO H1) */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 pt-8 sm:pt-12">
          {/* Kicker Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#E59C69] mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Full-Loop Growth Capabilities
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
            The engine behind brands that <span className="italic font-serif text-[#E59C69]">actually</span> scale.
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed mt-5 max-w-2xl mx-auto">
            From first click to repeat customer — six specialized growth loops engineered to eliminate operational drag, acquire high-value customers, and build lasting enterprise equity.
          </p>

          {/* Quick Sub-Navigation Anchor Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {ONELOOP_SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.slug || service.id}`}
                className="px-3.5 py-1.5 rounded-full bg-[#121212] hover:bg-[#1C1C1C] border border-white/10 hover:border-[#E59C69]/40 text-[11px] font-mono text-gray-300 hover:text-[#E59C69] transition-all cursor-pointer"
              >
                {service.index}. {service.title}
              </a>
            ))}
          </div>
        </div>

        {/* DETAILED SERVICES DIRECTORY */}
        <div className="space-y-12 sm:space-y-16">
          {ONELOOP_SERVICES.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.id] || Zap;
            const isReversed = index % 2 !== 0;

            return (
              <section
                key={service.id}
                id={service.slug || service.id}
                className="scroll-mt-28 rounded-3xl bg-[#101010] border border-white/[0.08] hover:border-[#E59C69]/40 transition-colors duration-300 overflow-hidden shadow-2xl relative"
              >
                {/* Subtle Ambient Hover Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#E59C69]/5 rounded-full blur-3xl pointer-events-none" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 p-6 sm:p-10 lg:p-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}>
                  
                  {/* Service Visual Preview / Graphic Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-white/10 group shadow-xl">
                      <img
                        src={service.image}
                        alt={`${service.title} — OneLoop`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-[#E59C69]">
                          {service.index}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-gray-300">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                          {service.title}
                        </span>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#E59C69]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#E59C69]" />
                          <span>Verified Loop</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deep-Dive Specifications & Deliverables Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      {/* Service Category & Title */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-[#E59C69]/15 border border-[#E59C69]/30 flex items-center justify-center text-[#E59C69]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#E59C69] font-bold">
                          Loop {service.index} • Core Capability
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans mb-3">
                        {service.title}
                      </h2>

                      {/* Tagline */}
                      {service.tagline && (
                        <p className="text-sm sm:text-base text-[#FDC7A1] font-normal leading-relaxed mb-4">
                          {service.tagline}
                        </p>
                      )}

                      {/* Detailed Description */}
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      {service.deliverables && (
                        <div className="mb-6">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-[#E59C69]/80 block mb-2.5">
                            Key Deliverables & Systems Built:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.deliverables.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-gray-300 font-light">
                                <div className="w-4 h-4 rounded-full bg-[#E59C69]/15 border border-[#E59C69]/30 flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-2.5 h-2.5 text-[#E59C69]" />
                                </div>
                                <span className="leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies Pill Row */}
                      {service.technologies && (
                        <div className="mb-6 pt-4 border-t border-white/5">
                          <span className="text-[9px] uppercase font-mono tracking-widest text-gray-400 block mb-2">
                            Technologies & Infrastructure:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-md bg-[#181818] border border-white/5 text-[10px] font-mono text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Measurable Business Outcomes */}
                      {service.outcomes && (
                        <div className="mb-6 p-4 rounded-xl bg-[#141414] border border-white/5">
                          <span className="text-[9px] uppercase font-mono tracking-widest text-[#E59C69] block mb-1.5 font-bold">
                            Target Business Impact:
                          </span>
                          <ul className="space-y-1.5">
                            {service.outcomes.map((outcome, i) => (
                              <li key={i} className="text-xs text-gray-300 font-light flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E59C69]" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                      <button
                        onClick={() => onOpenInquiry(service.title)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E59C69] hover:bg-[#FDC7A1] text-black text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#E59C69]/20 cursor-pointer active:scale-95"
                      >
                        <span>Audit My {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </button>

                      <a
                        href="/#audit"
                        className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
                      >
                        Complimentary 30-min strategy review &rarr;
                      </a>
                    </div>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <div className="mt-20 rounded-3xl bg-[#121212] border border-white/10 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E59C69]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2">
              <OneLoopMark className="w-6 h-6 text-[#E59C69]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#E59C69]">
                Zero Vanity Metrics
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to close the gaps in your growth loop?
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              We audit your unit economics, ad spend, conversion architecture, and backend operations before proposing a scope.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Full Growth Audit')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#E59C69] hover:bg-[#FDC7A1] text-black text-sm font-bold transition-all shadow-lg shadow-[#E59C69]/25 cursor-pointer"
              >
                Claim Your Complimentary Audit
              </button>
              <a
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 text-white text-sm font-medium transition-all cursor-pointer"
              >
                Back to Homepage
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
