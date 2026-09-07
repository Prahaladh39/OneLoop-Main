import { CaseStudy, TechProduct, ServiceItem } from '../types';

export const ONE_LOOP_INFO = {
  name: "OneLoop",
  fullName: "OneLoop Intelligence LLP",
  tagline: "We help businesses grow.",
  mantra: "AUDIT. BUILD. MARKET. AUTOMATE.",
  headquarters: "Hyderabad, India",
  regions: ["Australia", "Dubai", "Hyderabad", "New Zealand", "United Kingdom"],
  description: "We build the websites and apps that turn visitors into customers, run marketing that brings the right people to you, automate the work that eats your team's time, and put in place the technology to scale without breaking. One team, one outcome: your growth.",
  philosophy: "Growth breaks down in the gaps — between a business's website, its marketing, its operations, and its brand — usually because each piece is handled by a different vendor with no one owning the outcome. We close that loop."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Web & App Systems",
    tagline: "Built to convert, not just look good",
    description: "From high-impact marketing engines to complex multi-tenant platforms, every site we ship is built around the single metrics that matter: customer acquisition, bookings, and revenue throughput.",
    features: [
      "Conversion-first UI/UX architecture",
      "Sub-second load times & modern web vitals",
      "Full-stack React, Next.js & mobile native apps",
      "Verified analytics & event telemetry"
    ],
    iconName: "Code"
  },
  {
    number: "02",
    title: "Performance Marketing",
    tagline: "Clean, verified conversion tracking",
    description: "Full-funnel Google Ads, Meta Ads, and search intelligence engineered for profitable ROAS and dependable volume. No vanity metrics — only trackable pipeline.",
    features: [
      "Precision Google Search & Shopping campaigns",
      "Clean server-side conversion validation",
      "High-intent keyword harvesting & negative pruning",
      "Performance Max & dynamic margin-based bidding"
    ],
    iconName: "TrendingUp"
  },
  {
    number: "03",
    title: "Process Automation & AI",
    tagline: "Reclaim hundreds of team hours",
    description: "Workflows and intelligent pipelines that eliminate manual repetition — from intelligent lead qualification to automated document generation and CRM reconciliation.",
    features: [
      "Custom workflow automation (Make, n8n, Python)",
      "Self-correcting RAG & custom AI models",
      "Automated lead routing & real-time notifications",
      "Custom internal operations dashboards"
    ],
    iconName: "Zap"
  },
  {
    number: "04",
    title: "SaaS & Platform Scale",
    tagline: "Cloud infrastructure engineered for resilience",
    description: "Cloud architectures, high-concurrency backends, and rock-solid databases designed to sustain exponential traffic spikes without breaking.",
    features: [
      "Zero-downtime serverless & containerized deployments",
      "Resilient database schemas & query caching",
      "Security hardening & API rate limiting",
      "Multi-region availability & monitoring"
    ],
    iconName: "Server"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "rmc-plumbing",
    client: "RMC Plumbing Services",
    country: "Australia",
    flag: "🇦🇺",
    category: "Local Services & Lead Gen",
    subtitle: "Google Ads (Search) · Client since October 2023",
    metrics: [
      { label: "Lead Growth", value: "6.1x", detail: "Scaled from 11/mo to 66/mo" },
      { label: "Cost Per Lead", value: "-79%", detail: "Plummeted from $92 to $19" },
      { label: "Total Leads", value: "1,327", detail: "Delivered on AUD $32,499 spend" },
      { label: "Blended CPL", value: "~$24", detail: "Across full engagement" }
    ],
    challenge: "RMC Plumbing needed a steady, predictable flow of local service calls and job requests from Google Ads, at a cost per lead that kept the campaign profitable as they scaled spend.",
    solution: [
      "Rebuilt campaign structure around high-intent, service-specific search terms instead of broad-match generic keywords",
      "Continuously trimmed underperforming keywords and search terms to lift click-through rate and Quality Score, pulling average CPC down over time",
      "Shifted budget toward the times of day and campaign types converting at the lowest cost per lead",
      "Ongoing monthly testing of ad copy and offers to keep conversion rate climbing as the account matured"
    ],
    highlight: "6.1x Leads & 79% Cost Reduction"
  },
  {
    id: "bamboo-spa",
    client: "Bamboo Spa",
    country: "New Zealand",
    flag: "🇳🇿",
    category: "Wellness & Booking Platform",
    subtitle: "Google Ads (Search) · Client since October 2024",
    metrics: [
      { label: "Conversions Growth", value: "2.1x", detail: "Scaled from 1,237 to 2,587/mo" },
      { label: "Cost Per Conv.", value: "-46%", detail: "Reduced from $1.44 to $0.78" },
      { label: "Total Actions", value: "40,624", detail: "Conversions on NZD $38,778 spend" },
      { label: "Direct Footfall", value: "+180%", detail: "Local directions & calls surge" }
    ],
    challenge: "Bamboo Spa runs on a high volume of small, everyday booking actions — calls, form fills, directions requests — so the priority was driving more of these local conversions each month while keeping cost per conversion low enough to scale spend comfortably.",
    solution: [
      "Expanded coverage across the full range of local booking and enquiry actions customers take, not just phone calls",
      "Tightened geo and audience targeting to focus spend on the areas driving real footfall",
      "Used performance data month over month to keep shifting budget toward the highest-converting campaigns"
    ],
    highlight: "40,624 Total Bookings Delivered at $0.78"
  },
  {
    id: "bikers-wear-au",
    client: "Bikers Wear Australia",
    country: "Australia",
    flag: "🇦🇺",
    category: "E-Commerce Apparel & Gear",
    subtitle: "Google Ads (Shopping & Search) · Client since April 2024",
    metrics: [
      { label: "Target ROAS", value: "9.0x", detail: "Consistently held throughout scaling" },
      { label: "Monthly Revenue", value: "AUD $51K+", detail: "Grew from $39,886 to $51,394/mo" },
      { label: "Gross Revenue", value: "AUD $753K+", detail: "Generated on AUD $88,017 ad spend" },
      { label: "Spend Scaled", value: "+33%", detail: "With zero margin erosion" }
    ],
    challenge: "An established e-commerce account, already running profitably, needed to scale ad spend without losing return on ad spend (ROAS) — and to do it on cleanly-tracked, trustworthy conversion data.",
    solution: [
      "Restructured Shopping campaigns around product margin and sell-through, not just click volume",
      "Cleaned up and re-validated conversion tracking so bidding decisions were based on trustworthy data",
      "Used Performance Max and audience signals to find incremental, high-value customers as budget scaled up"
    ],
    highlight: "AUD $753K Revenue at steady 9x ROAS"
  },
  {
    id: "bikers-gear-uk",
    client: "Bikers Gear UK",
    country: "United Kingdom",
    flag: "🇬🇧",
    category: "E-Commerce International",
    subtitle: "Google Ads (Shopping & Search) · Client since January 2025",
    metrics: [
      { label: "Blended ROAS", value: "4.64x", detail: "Held stable in 4–5x range" },
      { label: "Revenue Generated", value: "£123,940", detail: "Generated on £26,723 ad spend" },
      { label: "Active Window", value: "10 Mos", detail: "Oct 2025 – Jul 2026 performance" },
      { label: "Conversion Rate", value: "+38%", detail: "Post-tracking re-mapping" }
    ],
    challenge: "Similar brief to its Australian counterpart — keep the account profitable through a conversion-tracking clean-up, and hold a healthy ROAS as the market and account matured.",
    solution: [
      "Re-mapped and verified conversion actions to get bidding decisions onto reliable data",
      "Kept campaign structure aligned to the AU account's proven approach while adapting for the UK market",
      "Held ROAS steady through the tracking transition — the platform for scaling spend going forward"
    ],
    highlight: "£123.9K Revenue at 4.64x ROAS"
  }
];

export const TECH_PRODUCTS: TechProduct[] = [
  {
    name: "XP Academy",
    category: "EdTech & Gamification",
    description: "Gamified EdTech platform engineered for student engagement, interactive skill leveling, and dynamic retention.",
    link: "https://xpacademy-neon.vercel.app/",
    badge: "Live Web App"
  },
  {
    name: "Nirvaha",
    category: "Mental Wellness & Mobile",
    description: "Wellness & mindfulness mobile application crafted with calming UX, meditation tracking, and daily balance routines.",
    link: "https://play.google.com/store/apps/details?id=org.nirvaha.app",
    badge: "Google Play Store"
  },
  {
    name: "LN Sports Arena",
    category: "Elite Sports Infrastructure",
    description: "Elite gym, olympic swimming & badminton facility digital booking portal and brand hub in Hyderabad.",
    link: "https://www.lnsports.in/",
    badge: "Live Website"
  },
  {
    name: "Sithiyam Travel",
    category: "Bespoke Luxury Travel",
    description: "Tailor-made Sri Lanka luxury tours, boutique holiday planning, and private experience curations.",
    link: "https://sithiyam.com/",
    badge: "Live Portal"
  },
  {
    name: "Campus Cartel",
    category: "Peer Community & Commerce",
    description: "High-density campus marketplace platform enabling peer-to-peer student transactions, housing, and essentials.",
    link: "https://frontend-jwtm86dpm-prahaladhs-projects.vercel.app/",
    badge: "Live Demo"
  },
  {
    name: "DocOnCommit",
    category: "Developer Tooling & Automation",
    description: "Automated developer pipeline that parses git commits and continuously maintains up-to-date repository documentation.",
    link: "https://github.com/Prahaladh39/DocOnCommit",
    badge: "Open Source"
  },
  {
    name: "Self-Correcting RAG",
    category: "Enterprise AI & LLM Systems",
    description: "Next-generation retrieval-augmented generation engine with active feedback loops and automated hallucination self-correction.",
    link: "https://github.com/Prahaladh39/SelfCorrecting-Rag",
    badge: "AI Repository"
  }
];

export const CLIENT_PORTFOLIO = {
  marketing: [
    "DSL Virtue Mall",
    "AMR Planet Mall",
    "Next Galleria Panjagutta Mall",
    "Hyderabad Smiles Dental Hospital",
    "Zaravi (Footwear)",
    "Khan Saab",
    "Mirame Cafe",
    "Amyra Cafe and Kitchen"
  ],
  fullService: [
    "YRJ EV Bikes",
    "UJ Management Solutions",
    "Stellar Reserve",
    "Orbit",
    "Nirvaha",
    "The Diamond Store (by Chandubhai)",
    "Studlyf",
    "LN Sports Arena",
    "The Antique Loft",
    "LFE – Learn French Enligne",
    "CtrlX Studios",
    "Cellbay",
    "FuturoWorks",
    "Ignis Inspired Learning"
  ]
};

export const APPROACH_STEPS = [
  {
    step: "01",
    title: "Audit & Identify",
    desc: "We diagnose the exact bottleneck holding back revenue — not a superficial template audit, but deep customer and funnel forensics."
  },
  {
    step: "02",
    title: "Understand & Model",
    desc: "We unpack unit economics, conversion leakages, and team time sinks to engineer a bespoke solution blueprint."
  },
  {
    step: "03",
    title: "Build & Deploy",
    desc: "We ship the high-converting web engine, targeted ad campaigns, or automated backends with zero fluff and ruthless speed."
  },
  {
    step: "04",
    title: "Scale & Automate",
    desc: "We optimize month-over-month. As lead volume spikes, we automate operational friction so margins expand as you grow."
  }
];
