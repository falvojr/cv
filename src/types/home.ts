export type Language = 'pt-BR' | 'en';

export interface HomeMetric {
  value: string;
  label: string;
  description: string;
}

export interface HomeTimelineItem {
  period: string;
  company: string;
  role: string;
  summary: string;
  technologies: string[];
  results: string[];
}

export interface HomeProject {
  name: string;
  description: string;
  stack: string[];
  impact: string;
}

export interface HomeSkillGroup {
  category: string;
  items: string[];
}

export interface HomeContactLink {
  label: string;
  href: string;
}

export interface HomeContent {
  metrics: HomeMetric[];
  timeline: HomeTimelineItem[];
  projects: HomeProject[];
  skillGroups: HomeSkillGroup[];
  contactLinks: HomeContactLink[];
}
