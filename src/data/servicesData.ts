import { ServiceCardData } from '../types';

export const ONELOOP_SERVICES: ServiceCardData[] = [
  {
    id: "web-app-dev",
    slug: "web-app-development",
    index: "01",
    title: "Web & App Development",
    image: "/images/service_web_dev.jpg",
    tagline: "High-converting digital platforms engineered for sub-second speed, verified attribution, and rock-solid scalability.",
    description: "We build modern web and mobile applications designed around measurable business acquisition. From conversion-optimized sales funnels to complex multi-tenant SaaS architectures, every interface is engineered with crisp UX, accessible semantic code, and instant load times.",
    checklist: [
      "Conversion-first websites & product builds",
      "Custom web apps & internal tools",
      "Modular, scalable front-end architecture",
      "Fast, SEO-ready deployment"
    ],
    deliverables: [
      "Custom React, Next.js & Vite Web Applications",
      "Native & Cross-Platform Mobile Apps (iOS & Android)",
      "High-Converting Landing Pages & Lead Capture Funnels",
      "Headless E-Commerce & Checkout Architectures",
      "API Integrations & Payment Gateway Setup"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL", "Firebase"],
    outcomes: [
      "Sub-second page load times across mobile and desktop",
      "Verified analytics and conversion tracking integration",
      "Modular design systems that scale without code debt"
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    index: "02",
    title: "End-to-End Digital Marketing",
    image: "/images/service_digital_marketing.jpg",
    tagline: "Full-funnel customer acquisition across Meta, Google Search, and Performance Max tied directly to verified revenue.",
    description: "Stop paying for vanity clicks and unverified impressions. We manage full-funnel paid media with rigorous conversion tracking, localized audience targeting, and high-frequency creative iteration across Google Search, Shopping, Meta, and LinkedIn.",
    checklist: [
      "Paid ads across Meta, Google & Performance Max",
      "SEO / AEO / GEO & Google Business Profile optimization",
      "Full-funnel content & social media management",
      "Performance tracking tied to real ROAS"
    ],
    deliverables: [
      "Google Search, Shopping & Performance Max Management",
      "Meta Ads (Instagram & Facebook) High-ROAS Campaigns",
      "Server-Side Conversion API (CAPI) & Tracking Setup",
      "Search Engine Optimization (SEO, AEO & Google Business Profile)",
      "High-Impact Creative Ad Production & Copywriting"
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "GA4", "Google Tag Manager", "Looker Studio", "Search Console"],
    outcomes: [
      "Dependable 4x to 9x+ Return on Ad Spend (ROAS)",
      "Up to 79% reduction in cost per qualified lead",
      "100% transparent attribution reporting with zero fluff"
    ]
  },
  {
    id: "process-automation",
    slug: "process-automation",
    index: "03",
    title: "Business Process Automation",
    image: "/images/service_automation.jpg",
    tagline: "Autonomous workflows and AI pipelines that eliminate repetitive manual busywork and connect disconnected systems.",
    description: "Operational drag kills growth. We audit your internal handoffs and replace manual data entry, repetitive customer follow-ups, and disconnected spreadsheets with robust, self-healing automated pipelines.",
    checklist: [
      "Automated lead routing & instant follow-ups",
      "Workflows that replace manual busywork",
      "Internal dashboards & reporting pipelines",
      "Integrations that eliminate data silos"
    ],
    deliverables: [
      "Automated Lead Routing & Instant Multi-Channel Response",
      "CRM & Payment Gateway Webhook Workflows",
      "Custom Client Intake & Onboarding Pipelines",
      "Operational Executive Dashboards & Alert Systems",
      "Cross-Platform Two-Way Database Synchronization"
    ],
    technologies: ["Python", "Node.js", "Webhooks", "REST APIs", "Cloud Functions", "PostgreSQL", "Zapier / Make"],
    outcomes: [
      "20+ hours of repetitive manual busywork saved weekly",
      "Instant response times for inbound customer enquiries",
      "Elimination of human error in cross-system data transfer"
    ]
  },
  {
    id: "saas-infrastructure",
    slug: "saas-infrastructure",
    index: "04",
    title: "SaaS & Infrastructure Projects",
    image: "/images/service_infrastructure.jpg",
    tagline: "Production-grade cloud architecture, custom LLM integrations, and resilient backend systems built to scale seamlessly.",
    description: "Whether engineering an internal AI copilot or architecting a multi-region SaaS platform, we deliver scalable infrastructure that handles activity surges without degrading response times or ballooning cloud costs.",
    checklist: [
      "Custom AI models & LLM pipelines",
      "Cloud infrastructure & backend systems",
      "Scalable data architecture",
      "Production-grade deployment & monitoring"
    ],
    deliverables: [
      "Custom AI Models & LLM Integration Pipelines",
      "Cloud Microservices & Serverless Architectures",
      "Database Sharding, Caching & Performance Optimization",
      "CI/CD Automated Deployment & Test Automation",
      "24/7 Cloud Health Monitoring & Security Hardening"
    ],
    technologies: ["Python", "FastAPI", "Docker", "AWS", "Google Cloud", "Supabase", "Redis", "OpenAI / Claude APIs"],
    outcomes: [
      "99.99% system availability with automated failover",
      "Sub-100ms API response latency under traffic spikes",
      "Predictable, optimized cloud infrastructure costs"
    ]
  },
  {
    id: "custom-tech",
    slug: "custom-technology-solutions",
    index: "05",
    title: "Custom Technology Solutions",
    image: "/images/service_custom_tech.jpg",
    tagline: "Tailored software engineering built around your specific business logic and legacy modernization requirements.",
    description: "Off-the-shelf software often forces you to compromise your unique competitive advantage. We engineer bespoke software solutions that fit your exact operational workflows and bridge legacy systems with modern cloud infrastructure.",
    checklist: [
      "Bespoke software built around your exact workflow",
      "Systems integration & legacy modernization",
      "Tailored tooling for niche business needs",
      "Ongoing technical partnership, not one-off delivery"
    ],
    deliverables: [
      "Custom Internal Business Tools & Operations Software",
      "Legacy System Modernization & Cloud Migration",
      "Custom Middleware, Micro-APIs & Data Extractors",
      "Secure Role-Based Access Control & Permissions",
      "Long-term Technical Advisory & Fractional CTO Support"
    ],
    technologies: ["TypeScript", "React", "Node.js", "Python", "REST / GraphQL", "Docker", "PostgreSQL"],
    outcomes: [
      "Proprietary technology ownership with zero vendor lock-in",
      "Seamless integration with your existing legacy stack",
      "A dedicated engineering partner invested in your long-term growth"
    ]
  },
  {
    id: "branding-growth",
    slug: "branding-growth-solutions",
    index: "06",
    title: "Branding & Digital Growth Solutions",
    image: "/images/service_branding.jpg",
    tagline: "Visual identity systems, strategic positioning, and conversion copywriting that turn your brand into an unfair advantage.",
    description: "Design is not just decoration — it is the first filter of brand authority and premium pricing power. We craft cohesive visual systems, high-converting copy, and brand narratives that make your company instantly memorable.",
    checklist: [
      "Brand identity, positioning & visual systems",
      "Content & creative production (photo/video)",
      "Growth-focused messaging & copywriting",
      "Cohesive brand experience across every channel"
    ],
    deliverables: [
      "Comprehensive Visual Identity & Logo Design Systems",
      "Strategic Brand Positioning & Market Category Narrative",
      "Conversion-Focused Website & Ad Campaign Copywriting",
      "Content & Creative Direction for Photography / Video",
      "Design Systems & Brand Style Guides for Cohesive Scaling"
    ],
    technologies: ["Figma", "Adobe Creative Cloud", "Motion Graphics", "Design Tokens", "Typography Systems"],
    outcomes: [
      "Immediate brand authority that commands higher pricing",
      "Cohesive customer experience across all digital touchpoints",
      "Clear, persuasive messaging that turns visitors into buyers"
    ]
  }
];
