import React from 'react';
import { motion } from 'framer-motion';
import { TECH_PRODUCTS } from '../data/oneloopData';
import { ExternalLink, Terminal } from 'lucide-react';

export const TechProjectsSection: React.FC = () => {
  return (
    <section id="products" className="relative w-full bg-black py-24 px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[10px] uppercase tracking-widest text-[#E59C69] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            Shipped Products & Platforms
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
            Built & Deployed by <span className="italic font-serif text-[#E59C69]">OneLoop</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-3 font-light">
            Platforms spanning EdTech, mental wellness, sports infrastructure, luxury travel, and internal AI systems.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_PRODUCTS.map((prod, idx) => (
            <motion.a
              key={idx}
              href={prod.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E59C69]/40 hover:bg-[#181818] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-mono tracking-wider bg-[#222222] text-[#E59C69] border border-[#E59C69]/20">
                    {prod.badge}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#E59C69] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FDC7A1] transition-colors mb-1.5 font-sans">
                  {prod.name}
                </h3>
                <span className="text-[11px] text-[#E59C69]/80 font-medium block mb-3">
                  {prod.category}
                </span>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {prod.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors">
                  View Live Platform
                </span>
                <span className="text-xs text-[#E59C69] font-mono">→</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
