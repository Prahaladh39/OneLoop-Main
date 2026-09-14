import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Building2, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { submitLead } from '../services/leadService';
import { COUNTRY_CODES } from '../data/countryCodes';

interface FormFieldConfig {
  id: 'name' | 'company' | 'email' | 'phone' | 'topic' | 'message';
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder: string;
  required: boolean;
  options?: string[];
  rows?: number;
  icon: React.ElementType;
}

const FORM_FIELDS: FormFieldConfig[] = [
  {
    id: 'name',
    label: 'Your Name',
    type: 'text',
    placeholder: 'e.g. Marcus Chen',
    required: true,
    icon: User
  },
  {
    id: 'email',
    label: 'Work Email',
    type: 'email',
    placeholder: 'you@company.com',
    required: true,
    icon: Mail
  },
  {
    id: 'phone',
    label: 'Mobile Number',
    type: 'tel',
    placeholder: '98765 43210',
    required: true,
    icon: Phone
  },
  {
    id: 'topic',
    label: 'Primary Focus Area',
    type: 'select',
    placeholder: 'Select Focus Area',
    required: true,
    options: [
      'Full Growth Audit',
      'Web / App Development',
      'Digital Marketing',
      'AI & Workflow Automation'
    ],
    icon: Sparkles
  },
  {
    id: 'company',
    label: 'Company / Brand Name',
    type: 'text',
    placeholder: 'e.g. Apex Studio',
    required: false,
    icon: Building2
  },
  {
    id: 'message',
    label: 'Project Details / Challenge',
    type: 'textarea',
    placeholder: 'Briefly tell us about your current bottlenecks or goals...',
    required: false,
    rows: 4,
    icon: MessageSquare
  }
];

interface FormDataState {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export const AuditSection: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: 'Full Growth Audit',
    message: ''
  });

  const [countryCode, setCountryCode] = useState('+91');
  const [errors, setErrors] = useState<Partial<Record<keyof FormDataState, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormDataState, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const validateField = (id: keyof FormDataState, value: string): string => {
    const trimmed = value.trim();

    if (id === 'name') {
      if (!trimmed) return 'Name is required.';
    }

    if (id === 'email') {
      if (!trimmed) return 'Work email is required.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
    }

    if (id === 'phone') {
      if (!trimmed) return 'Mobile number is compulsory.';
      if (trimmed.length !== 10) return 'Please enter a valid 10-digit mobile number.';
      if (!/^\d{10}$/.test(trimmed)) return 'Mobile number must contain digits only.';
    }

    if (id === 'topic') {
      if (!trimmed) return 'Please select a focus area.';
    }

    return '';
  };

  const handleBlur = (id: keyof FormDataState) => {
    setTouched((prev) => ({ ...prev, [id]: true }));
    const errorMsg = validateField(id, formData[id]);
    setErrors((prev) => ({ ...prev, [id]: errorMsg }));
  };

  const handleChange = (id: keyof FormDataState, value: string) => {
    if (id === 'phone') {
      // Strip all non-digit characters and cap strictly to 10 digits
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      if (touched.phone) {
        const errorMsg = validateField('phone', digitsOnly);
        setErrors((prev) => ({ ...prev, phone: errorMsg }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [id]: value }));
    if (touched[id]) {
      const errorMsg = validateField(id, value);
      setErrors((prev) => ({ ...prev, [id]: errorMsg }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submit
    const newErrors: Partial<Record<keyof FormDataState, string>> = {};
    let hasError = false;

    (Object.keys(formData) as (keyof FormDataState)[]).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) {
        newErrors[key] = err;
        hasError = true;
      }
    });

    setTouched({
      name: true,
      company: false,
      email: true,
      phone: true,
      topic: true,
      message: false
    });
    setErrors(newErrors);

    if (hasError) return;

    setSubmitError(null);
    setIsSubmitting(true);
    const result = await submitLead({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: `${countryCode} ${formData.phone}`,
      topic: formData.topic,
      message: formData.message,
      source: 'audit_section',
      honeypot,
    });
    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
    } else {
      setSubmitError(result.error || 'Failed to submit. Please try again.');
    }
  };

  return (
    <section id="audit" className="relative w-full bg-[#0A0A0A] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-[#E59C69]/5 rounded-full blur-3xl pointer-events-none" />


      {/* REACT BITS PRO "CONTACT 7" NARROW CENTERED COLUMN */}
      <div className="max-w-xl mx-auto relative z-10">
        
        {/* STEP 5 — HEADLINE / COPY */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#E59C69] font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Complimentary Growth Audit
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight font-sans">
            Let's <span className="font-serif italic text-[#E59C69]">talk</span>.
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed mt-4 max-w-md mx-auto">
            Tell us about your business — we'll come back with what we'd actually do about it.
          </p>
        </div>

        {/* Form Container Panel */}
        <div className="rounded-3xl bg-[#101010] border border-white/5 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-5"
                noValidate
              >
                {/* Cybersecurity Anti-Bot Honeypot Trap */}
                <div style={{ position: 'absolute', opacity: 0, zIndex: -1, pointerEvents: 'none', height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="company_hp">Website Check</label>
                  <input
                    id="company_hp"
                    name="company_hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* DATA-DRIVEN 5 FIELDS RENDER */}
                {FORM_FIELDS.map((field) => {
                  const error = touched[field.id] ? errors[field.id] : undefined;
                  const Icon = field.icon;

                  return (
                    <div key={field.id} className="space-y-1.5 text-left">
                      <label
                        htmlFor={field.id}
                        className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gray-400 font-medium"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#E59C69]/70" />
                        <span>{field.label}</span>
                        {field.required ? (
                          <span className="text-[#E59C69]">*</span>
                        ) : (
                          <span className="text-gray-500 font-normal normal-case text-[10px] tracking-normal">(Optional)</span>
                        )}
                      </label>

                      <div className="relative">
                        {field.type === 'textarea' ? (
                          <textarea
                            id={field.id}
                            name={field.id}
                            rows={field.rows || 4}
                            value={formData[field.id]}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                            onBlur={() => handleBlur(field.id)}
                            placeholder={field.placeholder}
                            required={field.required}
                            aria-invalid={!!error}
                            aria-describedby={error ? `${field.id}-error` : undefined}
                            className={`w-full rounded-xl bg-[#161616] border px-4 py-3.5 text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-200 resize-none font-sans ${
                              error
                                ? 'border-[#E59C69] focus:border-[#E59C69] focus:ring-[#E59C69]/30 bg-[#1A1513]'
                                : 'border-white/10 focus:border-[#E59C69] focus:ring-[#E59C69]/20 hover:border-white/20'
                            }`}
                          />
                        ) : field.type === 'select' ? (
                          <select
                            id={field.id}
                            name={field.id}
                            value={formData[field.id]}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                            onBlur={() => handleBlur(field.id)}
                            required={field.required}
                            aria-invalid={!!error}
                            aria-describedby={error ? `${field.id}-error` : undefined}
                            className={`w-full rounded-xl bg-[#161616] border px-4 py-3 text-sm text-[#E1E0CC] focus:outline-none focus:ring-1 transition-all duration-200 font-sans cursor-pointer ${
                              error
                                ? 'border-[#E59C69] focus:border-[#E59C69] focus:ring-[#E59C69]/30 bg-[#1A1513]'
                                : 'border-white/10 focus:border-[#E59C69] focus:ring-[#E59C69]/20 hover:border-white/20'
                            }`}
                          >
                            {field.options?.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#161616] text-[#E1E0CC]">
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : field.id === 'phone' ? (
                          <div className="flex gap-2">
                            {/* Country Code Dropdown */}
                            <div className="relative shrink-0 w-[110px] sm:w-[130px]">
                              <select
                                id="country_code"
                                aria-label="Country Dialing Code"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="w-full rounded-xl bg-[#161616] border border-white/10 px-2.5 sm:px-3 py-3 text-xs sm:text-sm text-[#E1E0CC] focus:outline-none focus:border-[#E59C69] focus:ring-1 focus:ring-[#E59C69]/20 hover:border-white/20 transition-all duration-200 font-sans cursor-pointer truncate"
                              >
                                {COUNTRY_CODES.map((c) => (
                                  <option key={`${c.iso}-${c.code}`} value={c.code} className="bg-[#161616] text-[#E1E0CC]">
                                    {c.flag} {c.code} ({c.name})
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* 10-Digit Mobile Input */}
                            <div className="relative flex-1">
                              <input
                                id={field.id}
                                name={field.id}
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={10}
                                value={formData[field.id]}
                                onChange={(e) => handleChange(field.id, e.target.value)}
                                onBlur={() => handleBlur(field.id)}
                                placeholder="98765 43210"
                                required={field.required}
                                aria-invalid={!!error}
                                aria-describedby={error ? `${field.id}-error` : undefined}
                                className={`w-full rounded-xl bg-[#161616] border px-4 py-3 text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-200 font-sans ${
                                  error
                                    ? 'border-[#E59C69] focus:border-[#E59C69] focus:ring-[#E59C69]/30 bg-[#1A1513]'
                                    : 'border-white/10 focus:border-[#E59C69] focus:ring-[#E59C69]/20 hover:border-white/20'
                                }`}
                              />
                            </div>
                          </div>
                        ) : (
                          <input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            value={formData[field.id]}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                            onBlur={() => handleBlur(field.id)}
                            placeholder={field.placeholder}
                            required={field.required}
                            aria-invalid={!!error}
                            aria-describedby={error ? `${field.id}-error` : undefined}
                            className={`w-full rounded-xl bg-[#161616] border px-4 py-3 text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-200 font-sans ${
                              error
                                ? 'border-[#E59C69] focus:border-[#E59C69] focus:ring-[#E59C69]/30 bg-[#1A1513]'
                                : 'border-white/10 focus:border-[#E59C69] focus:ring-[#E59C69]/20 hover:border-white/20'
                            }`}
                          />
                        )}
                      </div>

                      {/* Warm Amber/Rust Non-Jarring Error Message */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            id={`${field.id}-error`}
                            role="alert"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="flex items-center gap-1.5 text-xs text-[#E59C69] pt-1"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{error}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Submit Button with Loading State */}
                <div className="pt-2">
                  {submitError && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#E59C69] hover:bg-[#FDC7A1] text-black font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#E59C69]/20 cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending diagnostic request...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-500 text-center font-mono mt-3">
                    Strict confidentiality · No synthetic pitches · Direct response within 24h
                  </p>
                </div>
              </motion.form>
            ) : (
              /* Success Confirmation Banner in Place of Form */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#18281F] border border-[#86C7A7]/40 text-[#86C7A7] flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Successfully sent
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm mx-auto">
                    Our team will get back to you in 24hrs.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', company: '', email: '', phone: '', topic: 'Full Growth Audit', message: '' });
                    setCountryCode('+91');
                    setTouched({});
                    setErrors({});
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#1E1E1E] hover:bg-[#252525] text-xs font-mono text-gray-300 border border-white/10 hover:border-[#E59C69]/40 transition-colors cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
