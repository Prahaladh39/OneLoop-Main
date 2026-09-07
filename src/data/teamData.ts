export interface FounderProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  linkedin: string;
  monogram: string;
}

export interface TeamScaleData {
  statNumber: string;
  statLabel: string;
  domainTags: string[];
}

export const FOUNDERS_DATA: FounderProfile[] = [
  {
    id: 'naga-datta',
    name: 'K. Naga Datta Sai',
    title: 'Founder',
    bio: "Leads product and strategy at OneLoop — previously co-founded and led product at an AI startup before starting OneLoop's full-loop growth model.",
    photo: '/assets/team/naga-datta.jpg',
    linkedin: 'https://www.linkedin.com/in/naga-datta/',
    monogram: 'ND'
  },
  {
    id: 'prahaladh',
    name: 'S.L.N Prahaladh',
    title: 'Co-Founder — MERN Stack & AI Automation',
    bio: "Builds the automation and AI systems behind OneLoop's Automate loop — from custom AI pipelines to the workflows that keep client operations running without manual busywork.",
    photo: '/assets/team/prahaladh.jpg',
    linkedin: 'https://www.linkedin.com/in/slnprahaladh/',
    monogram: 'SP'
  }
];

export const TEAM_SCALE_DATA: TeamScaleData = {
  statNumber: '25+',
  statLabel: 'Specialists across every domain',
  domainTags: [
    'Web & App Development',
    'Digital Marketing',
    'Business Automation',
    'Brand & Creative',
    'AI & Infrastructure'
  ]
};
