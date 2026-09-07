import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';
import { OneLoopMark } from './OneLoopLogo';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = "Full Growth Audit"
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    topic: defaultTopic,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate auto-close or reset after 4s
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
        >
          {/* Subtle copper corner glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#E59C69]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <OneLoopMark className="w-6 h-6 text-[#E59C69]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#E59C69]">
                  OneLoop Growth Lab
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Request a Business Audit
              </h3>
              <p className="text-xs text-gray-400 font-light mb-6">
                Tell us about your brand. We'll identify bottlenecks across your website, conversion tracking, and operations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Marcus Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E59C69]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">Work Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E59C69]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">Company / Brand Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Studio"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E59C69]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">Website URL</label>
                    <input
                      type="text"
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E59C69]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-gray-400 mb-1 font-medium">Primary Focus Area</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#E59C69]"
                  >
                    <option value="Full Growth Audit">Full Growth Audit (Website + Ads + Ops)</option>
                    <option value="Web & App Development">Web & App Systems (High Conversion)</option>
                    <option value="Performance Marketing">Performance Marketing & Google Ads Scaling</option>
                    <option value="Process Automation & AI">Business Process Automation & Custom AI</option>
                    <option value="Branding & Strategic Positioning">Branding & Strategic Positioning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-gray-400 mb-1 font-medium">What's your biggest growth challenge right now?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current conversion rate, ad spend, or team bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E59C69]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#E59C69] hover:bg-[#FDC7A1] text-black font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E59C69]/20 cursor-pointer mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E59C69]/20 text-[#E59C69] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">Successfully sent</h3>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed font-light">
                Our team will get back to you in 24hrs.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors"
              >
                Back to Site
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
