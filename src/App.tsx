import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProcessFlow } from './components/ProcessFlow';
import { FeaturesSection } from './components/FeaturesSection';
import { ResultsSection } from './components/ResultsSection';
import { TechProjectsSection } from './components/TechProjectsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { TeamSection } from './components/TeamSection';
import { FAQSection } from './components/FAQSection';
import { AuditSection } from './components/AuditSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';


export function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('Full Growth Audit');

  const handleOpenInquiry = (topic = 'Full Growth Audit') => {
    setInquiryTopic(topic);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] selection:bg-[#E59C69] selection:text-black">

      {/* Fixed Hanging Pill Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry('General Inquiry')} />

      {/* Hero Section (Section 1) */}
      <HeroSection
        onOpenInquiry={() => handleOpenInquiry('Full Growth Audit')}
      />


      {/* About Section (Section 2) */}
      <AboutSection />

      {/* Scroll-Linked Growth Path: Audit → Build → Market → Automate → Scale */}
      <ProcessFlow />

      {/* Features & Studio Workflows Section (Section 3) */}
      <FeaturesSection onLearnMore={(topic: string) => handleOpenInquiry(topic)} />

      {/* Verified Performance & Case Studies (OneLoop Data) */}
      <ResultsSection />

      {/* Shipped Tech Products */}
      <TechProjectsSection />

      {/* Social Proof 14: Wall of Proof & Sticky Intro Rail */}
      <SocialProofSection />

      {/* Meet the Team ("About 6" block) */}
      <TeamSection />

      {/* FAQ 3: Tabbed Multi-Category Accordion */}
      <FAQSection />

      {/* Contact 7: Dedicated Complimentary Growth Audit Form */}
      <AuditSection />

      {/* Site Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry('Audit My Business')} />


      {/* Interactive Business Audit / Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultTopic={inquiryTopic}
      />
    </div>
  );
}

export default App;
