export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  country: string;
  flag: string;
  category: string;
  subtitle: string;
  metrics: MetricItem[];
  challenge: string;
  solution: string[];
  highlight: string;
}

export interface TechProduct {
  name: string;
  category: string;
  description: string;
  link: string;
  badge: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface ProcessStep {
  id: string;            // "audit" | "build" | "market" | "automate" | "scale"
  index: string;         // "01".."05"
  title: string;         // headline, e.g. "Audit & Identify"
  keyword?: string;      // optional short word/phrase to highlight in accent color, e.g. "Strategic"
  description: string;   // 3–4 line supporting copy
}

export interface ServiceCardData {
  id: string;
  index: string;
  title: string;
  image: string;
  checklist: string[];
}

export interface SocialProofEntry {
  id: string;
  name: string;
  category: string;
  scope?: string;
  quote: string;
  reviewer: string;
  featured: boolean;
  monogram: string;
  highlightBadge?: string;
  location?: string;
}

