'use client';

import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';

import { AnimatedSection } from '@/components/animated-section';
import { useLanguage } from '@/components/language-provider';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/section-heading';

export function ExperienceSection() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <AnimatedSection
      id="trajetoria"
      className="mx-auto min-h-[calc(100svh-5rem)] w-full max-w-7xl scroll-mt-24 px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
          className="max-w-2xl"
        />
        <span className="hidden text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase sm:block">03 / {t.nav.trajectory}</span>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-[1.05rem] top-0 hidden w-px bg-border/70 sm:block" aria-hidden="true" />
        <div>
          {t.home.timeline.map((item, index) => (
            <article key={`${item.company}-${item.period}`} className="relative grid gap-7 border-t border-border/70 py-8 sm:grid-cols-[5.5rem_1fr] sm:pl-0 lg:grid-cols-[8rem_1fr]">
              <div className="relative flex items-start gap-4 sm:block">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-muted-foreground">
                  0{index + 1}
                </span>
                <Badge className="mt-1 border-border/80 bg-transparent text-muted-foreground sm:mt-4">{item.period}</Badge>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-primary">
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  {item.company}
                </div>
                <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">{item.role}</h3>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base">{item.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <Badge key={technology} className="border-border/80 bg-transparent text-muted-foreground">
                      {technology}
                    </Badge>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {item.results.map((result) => (
                    <div key={result} className="flex items-start gap-2 border-l border-border/70 pl-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <p className="text-xs leading-5 text-muted-foreground">{result}</p>
                    </div>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
