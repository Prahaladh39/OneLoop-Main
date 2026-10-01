import React from 'react';
import { SEO } from '../components/SEO';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProcessFlow } from '../components/ProcessFlow';
import { FeaturesSection } from '../components/FeaturesSection';
import { ResultsSection } from '../components/ResultsSection';
import { TechProjectsSection } from '../components/TechProjectsSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { TeamSection } from '../components/TeamSection';
import { FAQSection } from '../components/FAQSection';
import { AuditSection } from '../components/AuditSection';

interface HomePageProps {
  onOpenInquiry: (topic?: string) => void;
}

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.oneloop.in/#organization",
      "name": "OneLoop",
      "url": "https://www.oneloop.in",
      "logo": "https://www.oneloop.in/images/logo/oneloop-logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/oneloop-in",
        "https://www.instagram.com/oneloop.in",
        "https://x.com/one_loop70030",
        "https://www.youtube.com/@OneLoopConnect",
        "https://www.threads.com/@oneloop.in"
      ],
      "areaServed": ["AU", "AE", "IN", "GB", "NZ"]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.oneloop.in/#website",
      "url": "https://www.oneloop.in",
      "name": "OneLoop",
      "publisher": { "@id": "https://www.oneloop.in/#organization" }
    }
  ]
};

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  return (
    <main>
      <SEO
        title="OneLoop: Audit. Build. Market. Automate."
        description="OneLoop helps businesses grow. We build high-converting websites and apps, execute data-driven marketing, automate operations, and scale tech infrastructure across Australia, Dubai, and Hyderabad."
        canonicalUrl="https://www.oneloop.in/"
        schema={HOME_SCHEMA}
      />

      {/* Hero Section */}
      <HeroSection onOpenInquiry={() => onOpenInquiry('Full Growth Audit')} />

      {/* About Section */}
      <AboutSection />

      {/* Scroll-Linked Growth Path */}
      <ProcessFlow />

      {/* Features & Studio Workflows Section */}
      <FeaturesSection onLearnMore={(topic: string) => onOpenInquiry(topic)} />

      {/* Verified Performance & Case Studies */}
      <ResultsSection />

      {/* Shipped Tech Products */}
      <TechProjectsSection />

      {/* Social Proof: Marquee Scroller */}
      <SocialProofSection />

      {/* Meet the Team */}
      <TeamSection />

      {/* FAQ */}
      <FAQSection />

      {/* Complimentary Growth Audit Form */}
      <AuditSection />
    </main>
  );
};
