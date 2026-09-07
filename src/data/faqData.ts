export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  questions: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'general',
    label: 'General',
    questions: [
      {
        id: 'what-is-oneloop',
        q: 'What is OneLoop, exactly?',
        a: 'OneLoop is a full-loop growth company — we handle the Audit, Build, Market, and Automate stages under one roof, instead of you piecing together a web dev shop, a marketing agency, and an automation vendor separately. We start by finding the actual bottleneck holding a brand back, then build and run the systems that fix it.'
      },
      {
        id: 'free-audit-included',
        q: "What's included in the free audit?",
        a: "Our complimentary Operational Scalability Assessment looks at your website, funnel, and current marketing setup to identify exactly where you're losing revenue or leads — not a generic checklist audit, but a breakdown specific to your business. You walk away with a clear picture of what to fix first, whether or not you work with us further."
      },
      {
        id: 'pricing-structure',
        q: 'How much does it cost to work with OneLoop?',
        a: 'It depends on scope — a website build, ongoing marketing management, and automation work are priced differently, and most engagements are tailored once we understand what you actually need. Rather than a fixed price list, we start with the free audit and give you a clear quote from there.'
      },
      {
        id: 'time-to-results',
        q: 'How long does it take to see results?',
        a: "It varies by what we're solving — a website ships in weeks, while marketing and automation gains build month over month as we optimize based on real performance data. We'd rather set expectations honestly during the audit than promise a generic timeline upfront."
      },
      {
        id: 'target-businesses',
        q: 'What kind of businesses do you work with?',
        a: "A wide mix — hospitality, retail, EdTech, e-commerce, apps, and brand identity work, across India, Australia, Dubai, and the UK. What connects them isn't industry, it's the same underlying need: a system that actually drives growth instead of just looking good."
      }
    ]
  }
];
