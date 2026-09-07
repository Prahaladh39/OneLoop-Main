import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { OneLoopMark } from './OneLoopLogo';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry: _onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Our story", href: "#about" },
    { label: "Services", href: "#features" },
    { label: "Results", href: "#results" },
    { label: "Products", href: "#products" },
    { label: "Clients", href: "#clients" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
    { label: "Audit", href: "#audit", isPrimary: true }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        
        {/* DESKTOP FLOATING PILL (md and above) */}
        <nav
          className={`hidden md:flex pointer-events-auto transition-all duration-300 bg-black/95 backdrop-blur-md rounded-b-2xl md:rounded-b-3xl px-6 py-2.5 md:px-8 border-b border-x border-white/10 shadow-2xl ${
            scrolled ? 'translate-y-1 shadow-[#E59C69]/10' : ''
          }`}
        >
          <div className="flex items-center gap-4 lg:gap-7">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="flex items-center gap-2 mr-2 cursor-pointer group"
              title="OneLoop Home"
            >
              <OneLoopMark className="w-7 h-7 group-hover:scale-105 transition-transform" />
            </a>

            {navItems.map((item, idx) => {
              if (item.isPrimary) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="min-h-[38px] flex items-center text-xs lg:text-sm font-semibold tracking-wide transition-all duration-200 px-4 py-1.5 rounded-full bg-[#E59C69] text-black hover:bg-[#FDC7A1] whitespace-nowrap cursor-pointer shadow-md shadow-[#E59C69]/20"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href!)}
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  className="min-h-[38px] flex items-center text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 hover:!text-[#E1E0CC] whitespace-nowrap cursor-pointer hover:drop-shadow-[0_0_8px_rgba(229,156,105,0.4)]"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>

        {/* MOBILE FLOATING BAR (< md) */}
        <div className="md:hidden pointer-events-auto w-full px-4 pt-3 flex items-center justify-between">
          <div className="w-full bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 flex items-center justify-between shadow-xl">
            {/* Logo */}
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <OneLoopMark className="w-7 h-7" />
              <span className="font-mono text-xs font-bold tracking-widest text-[#E1E0CC] uppercase">
                OneLoop
              </span>
            </a>

            {/* Quick Actions: Audit & Hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="#audit"
                onClick={(e) => scrollToSection(e, '#audit')}
                className="px-3.5 py-1.5 min-h-[38px] flex items-center rounded-full bg-[#E59C69] text-black text-[11px] font-bold tracking-wide shadow-sm"
              >
                Audit
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="w-10 h-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-[#181818] border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#E59C69]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN / DRAWER MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Menu Links */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-center pb-4 mb-3 border-b border-white/10">
                <img
                  src="/images/logo/oneloop-full-logo.png"
                  alt="OneLoop"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E59C69] font-semibold mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Navigation & Sections</span>
              </div>

              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className={`flex items-center justify-between min-h-[48px] px-4 py-3 rounded-xl border transition-all ${
                    item.isPrimary
                      ? 'bg-[#E59C69] text-black border-[#E59C69] font-bold shadow-lg shadow-[#E59C69]/20'
                      : 'bg-[#141414] text-gray-200 border-white/5 hover:border-[#E59C69]/40 hover:text-white'
                  }`}
                >
                  <span className="text-base font-sans tracking-wide">
                    {item.label}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${item.isPrimary ? 'text-black' : 'text-[#E59C69]'}`} />
                </motion.a>
              ))}
            </div>

            {/* Footer inside mobile menu */}
            <div className="pt-6 border-t border-white/10 mt-6 text-center space-y-2">
              <p className="text-xs text-gray-400 font-light">
                AUSTRALIA · DUBAI · HYDERABAD · NZ · UK
              </p>
              <p className="text-[10px] font-mono text-[#E59C69]">
                AUDIT · BUILD · MARKET · AUTOMATE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
