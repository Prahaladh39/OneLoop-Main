import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { OneLoopMark } from './OneLoopLogo';
import { submitLead } from '../services/leadService';
import { COUNTRY_CODES } from '../data/countryCodes';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState('+91');
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    topic: defaultTopic,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate 10-digit mobile number
    const trimmedPhone = formData.phone.trim();
    if (!trimmedPhone) {
      setPhoneError('Mobile number is compulsory.');
      return;
    }
    if (trimmedPhone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!/^\d{10}$/.test(trimmedPhone)) {
      setPhoneError('Mobile number must contain digits only.');
      return;
    }

    setPhoneError(null);
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: `${countryCode} ${trimmedPhone}`,
      company: formData.business,
      website: formData.website,
      topic: formData.topic,
      message: formData.message,
      source: 'inquiry_modal',
      honeypot,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error || 'Failed to submit inquiry. Please try again.');
    }
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
                {/* Cybersecurity Anti-Bot Honeypot Trap */}
                <div style={{ position: 'absolute', opacity: 0, zIndex: -1, pointerEvents: 'none', height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="modal_hp">Website Check</label>
                  <input
                    id="modal_hp"
                    name="modal_hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">
                      Your Name <span className="text-[#E59C69]">*</span>
                    </label>
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
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">
                      Work Email <span className="text-[#E59C69]">*</span>
                    </label>
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
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">
                      Mobile Number <span className="text-[#E59C69]">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        aria-label="Country Dialing Code"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-[105px] px-2 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#E59C69] cursor-pointer truncate font-sans"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={`${c.iso}-${c.code}`} value={c.code} className="bg-[#181818] text-white">
                            {c.flag} {c.code} ({c.name})
                          </option>
                        ))}
                      </select>
                      <input
                        required
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setFormData({ ...formData, phone: digitsOnly });
                          if (phoneError && digitsOnly.length === 10) setPhoneError(null);
                        }}
                        className={`flex-1 px-3.5 py-2.5 rounded-xl bg-[#181818] border text-xs text-white placeholder:text-gray-600 focus:outline-none transition-colors ${
                          phoneError ? 'border-[#E59C69] focus:border-[#E59C69]' : 'border-white/10 focus:border-[#E59C69]'
                        }`}
                      />
                    </div>
                    {phoneError && (
                      <p className="text-[11px] text-[#E59C69] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{phoneError}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">
                      Website URL <span className="text-gray-500 font-normal text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E59C69]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">
                      Company / Brand Name <span className="text-gray-500 font-normal text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Studio"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E59C69]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1 font-medium">
                      Primary Focus Area <span className="text-[#E59C69]">*</span>
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#E59C69]"
                    >
                      <option value="Full Growth Audit">Full Growth Audit</option>
                      <option value="Web / App Development">Web / App Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-gray-400 mb-1 font-medium">
                    What's your biggest growth challenge right now? <span className="text-gray-500 font-normal text-[10px]">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current conversion rate, ad spend, or team bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E59C69]"
                  />
                </div>

                {submitError && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full bg-[#E59C69] hover:bg-[#FDC7A1] text-black font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#E59C69]/20 cursor-pointer mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
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
