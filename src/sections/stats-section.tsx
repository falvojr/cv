'use client';

import { useLanguage } from '@/components/language-provider';

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-6 lg:pb-32" aria-label={t.stats.ariaLabel}>
      <div className="grid border-y border-border/70 sm:grid-cols-2 lg:grid-cols-4">
        {t.home.metrics.map((metric, index) => (
          <article
            key={metric.label}
            className="group border-b border-border/70 px-5 py-6 last:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0 lg:border-b-0"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">0{index + 1}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-transform group-hover:scale-150" />
            </div>
            <p className="mt-7 text-3xl font-medium tracking-[-0.05em] text-foreground">{metric.value}</p>
            <p className="mt-2 text-sm font-medium text-foreground">{metric.label}</p>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">{metric.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
