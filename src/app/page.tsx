import { SiteLayout } from '@/layouts/site-layout';
import { ExperienceSection } from '@/sections/experience-section';
import { HeroSection } from '@/sections/hero-section';
import { ProjectsSection } from '@/sections/projects-section';
import { SkillsSection } from '@/sections/skills-section';
import { StatsSection } from '@/sections/stats-section';

export default function HomePage() {
  return (
    <SiteLayout
      screens={[
        {
          id: 'work',
          content: (
            <>
              <HeroSection />
              <StatsSection />
            </>
          ),
        },
        {
          id: 'expertise',
          content: <SkillsSection />,
        },
        {
          id: 'trajetoria',
          content: <ExperienceSection />,
        },
        {
          id: 'projetos',
          content: <ProjectsSection />,
        },
      ]}
    />
  );
}
