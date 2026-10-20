import type { ExperienceItem, ProjectItem, SocialLink } from '@/types/portfolio';

export interface PortfolioContent {
  name: string;
  title: string;
  description: string;
  socialLinks: SocialLink[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
}
