import React from 'react';
import { OneLoopLogo } from './OneLoopLogo';
import { Globe } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer className="relative w-full bg-[#080808] border-t border-white/5 py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <OneLoopLogo size="lg" />
            <p className="text-xs sm:text-sm text-gray-400 max-w-md font-light leading-relaxed pt-2">
              We help businesses grow by closing the gaps between high-converting websites, verified conversion tracking, and automated operations. One team, one outcome: your growth.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[#E59C69]">
              <Globe className="w-3.5 h-3.5" />
              <span>Active in Australia, Dubai, Hyderabad, New Zealand, and the United Kingdom</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#about" className="hover:text-[#E59C69] transition-colors">Our Story & Approach</a></li>
              <li><a href="#features" className="hover:text-[#E59C69] transition-colors">Studio Workflows</a></li>
              <li><a href="#results" className="hover:text-[#E59C69] transition-colors">Verified Results (ROAS)</a></li>
              <li><a href="#products" className="hover:text-[#E59C69] transition-colors">Shipped Tech Products</a></li>
              <li>
                <button
                  onClick={onOpenInquiry}
                  className="text-[#E59C69] hover:underline cursor-pointer"
                >
                  Request Business Audit →
                </button>
              </li>
            </ul>
          </div>

          {/* Company Entity Details */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block">
              Legal Entity
            </span>
            <p className="text-xs text-white font-semibold">OneLoop Intelligence LLP</p>
            <p className="text-xs text-gray-400">Hyderabad, India</p>
            <p className="text-[11px] text-gray-500 pt-3">
              Performance telemetry & live audits available upon NDA / verified inquiry.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} OneLoop Intelligence LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Audit</span>
            <span>·</span>
            <span>Build</span>
            <span>·</span>
            <span>Market</span>
            <span>·</span>
            <span>Automate</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
