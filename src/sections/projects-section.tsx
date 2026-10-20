'use client';

import { Code2 } from 'lucide-react';

import { AnimatedSection } from '@/components/animated-section';
import { useLanguage } from '@/components/language-provider';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/section-heading';

export function ProjectsSection() {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <AnimatedSection
      id="projetos"
      className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl scroll-mt-24 flex-col justify-center px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <SectionHeading eyebrow={projects.eyebrow} title={projects.title} description={projects.description} className="max-w-2xl" />
        <span className="hidden text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase sm:block">04 / {t.nav.projects}</span>
      </div>

      <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-border/70 bg-border/70 lg:grid-cols-3">
        {t.home.projects.map((project, index) => (
          <article key={project.name} className="flex min-h-[26rem] flex-col bg-background/90 p-6 transition-colors hover:bg-card sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">0{index + 1}</span>
            </div>
            <Code2 className="mt-12 h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground">{project.name}</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p>

            <div className="mt-auto pt-8">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <Badge key={technology} className="border-border/80 bg-transparent text-muted-foreground">
                    {technology}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 border-t border-border/70 pt-4">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">{projects.impactLabel}</p>
                <p className="mt-2 text-sm leading-6 text-foreground/80">{project.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
