'use client';

import { Sparkles } from 'lucide-react';

import { AnimatedSection } from '@/components/animated-section';
import { useLanguage } from '@/components/language-provider';
import { Badge } from '@/components/ui/badge';
import { SITE_CONFIG } from '@/constants/site';

export function HeroSection() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <AnimatedSection
      id="work"
      className="mx-auto flex w-full max-w-7xl scroll-mt-24 items-center px-5 py-8 sm:px-6 sm:py-12 lg:py-16"
    >
      <div className="w-full">
        <div className="mb-5 flex items-center justify-between gap-4">
          <Badge className="border-border/70 bg-card/60 text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
            01 / {hero.badge}
          </Badge>
          <span className="hidden text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase sm:block">{t.nav.work} / 01</span>
        </div>

        <div className="relative min-h-[min(560px,calc(100svh-13rem))] overflow-hidden rounded-[2rem] border border-border/70 bg-card/45 shadow-[0_35px_120px_-55px_hsl(var(--foreground)/0.7)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,hsl(var(--primary)/0.14),transparent_24%),radial-gradient(circle_at_18%_100%,hsl(var(--primary)/0.08),transparent_30%)]" />
          <div className="flex h-11 items-center border-b border-border/60 bg-background/30 px-4">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            <p className="absolute left-1/2 -translate-x-1/2 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {hero.windowTitle}
            </p>
            <span className="ml-auto text-lg leading-none text-muted-foreground" aria-hidden="true">
              +
            </span>
          </div>

          <div className="relative flex min-h-[min(500px,calc(100svh-14rem))] flex-col justify-between px-6 py-9 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
            <div className="max-w-5xl">
              <div className="mb-5 flex items-center gap-3 text-xs text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{hero.profileRole}</span>
              </div>
              <h1 className="max-w-4xl text-[clamp(2.4rem,5.5vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.06em] text-balance">
                {hero.heading}{' '}
                <em className="font-serif font-normal tracking-[-0.045em] text-muted-foreground">{hero.headingAccent}</em>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{hero.description}</p>
            </div>

            <div className="mt-10 border-t border-border/60 pt-5">
              <div className="max-w-xl">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">{hero.currentFocusLabel}</p>
                <p className="mt-3 text-sm leading-6 text-foreground/80">{hero.currentFocusDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1 px-1 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>{SITE_CONFIG.name}</span>
          <span className="text-left sm:text-right">{hero.careerHint}</span>
        </div>
      </div>
    </AnimatedSection>
  );
}
