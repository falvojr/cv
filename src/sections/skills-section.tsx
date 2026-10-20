'use client';

import { AnimatedSection } from '@/components/animated-section';
import { useLanguage } from '@/components/language-provider';
import { Badge } from '@/components/ui/badge';
import { SectionHeading } from '@/components/section-heading';

export function SkillsSection() {
  const { t } = useLanguage();
  const { skills } = t;

  return (
    <AnimatedSection
      id="expertise"
      className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl scroll-mt-24 flex-col justify-center px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mb-12 flex items-end justify-between gap-6">
        <SectionHeading eyebrow={skills.eyebrow} title={skills.title} description={skills.description} className="max-w-2xl" />
        <span className="hidden text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase sm:block">02 / {t.nav.expertise}</span>
      </div>

      <div className="grid border-t border-border/70 md:grid-cols-2 lg:grid-cols-3">
        {t.home.skillGroups.map((group, index) => (
          <article key={group.category} className="border-b border-border/70 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">{group.category}</p>
              <span className="text-[10px] text-muted-foreground">0{index + 1}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} className="border-border/80 bg-transparent px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-foreground hover:text-background">
                  {item}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
