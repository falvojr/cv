export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  technologies: string[];
  results: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  impact: string;
}
