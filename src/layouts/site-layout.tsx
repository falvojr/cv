'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useCallback, useEffect, useState, type ReactNode } from 'react';

import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/components/language-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { SITE_CONFIG } from '@/constants/site';
import { cn } from '@/lib/utils';

export type ScreenId = 'work' | 'expertise' | 'trajetoria' | 'projetos';

const screenIds: ScreenId[] = ['work', 'expertise', 'trajetoria', 'projetos'];

export interface SiteScreen {
  id: ScreenId;
  content: ReactNode;
}

interface SiteLayoutProps {
  screens: SiteScreen[];
  className?: string;
}

const screenVariants = {
  enter: (direction: number) => ({
    x: direction * 48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction * -48,
    opacity: 0,
  }),
};

export function SiteLayout({ screens, className }: SiteLayoutProps) {
  const { t } = useLanguage();
  const [activeScreen, setActiveScreen] = useState<ScreenId>('work');
  const [direction, setDirection] = useState(1);

  const navigation = [
    { id: 'work' as const, label: t.nav.work },
    { id: 'expertise' as const, label: t.nav.expertise },
    { id: 'trajetoria' as const, label: t.nav.trajectory },
    { id: 'projetos' as const, label: t.nav.projects },
  ];
  const activeIndex = Math.max(screenIds.indexOf(activeScreen), 0);
  const activeScreenData = screens.find((screen) => screen.id === activeScreen) ?? screens[0];
  const previousScreen = navigation[activeIndex - 1];
  const nextScreen = navigation[activeIndex + 1];

  const goToScreen = useCallback(
    (nextId: ScreenId) => {
      const nextIndex = screenIds.indexOf(nextId);

      setDirection(nextIndex >= activeIndex ? 1 : -1);
      setActiveScreen(nextId);

      if (window.location.hash !== `#${nextId}`) {
        window.history.pushState(null, '', `#${nextId}`);
      }
    },
    [activeIndex]
  );

  useEffect(() => {
    function updateActiveScreen() {
      const hash = window.location.hash.slice(1) as ScreenId;
      const nextId = screenIds.includes(hash) ? hash : 'work';

      setDirection(screenIds.indexOf(nextId) >= activeIndex ? 1 : -1);
      setActiveScreen(nextId);
    }

    updateActiveScreen();
    window.addEventListener('hashchange', updateActiveScreen);
    window.addEventListener('popstate', updateActiveScreen);

    return () => {
      window.removeEventListener('hashchange', updateActiveScreen);
      window.removeEventListener('popstate', updateActiveScreen);
    };
  }, [activeIndex]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;

      if (target.isContentEditable || ['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)) {
        return;
      }

      if (event.key === 'ArrowRight' && activeIndex < screenIds.length - 1) {
        event.preventDefault();
        goToScreen(screenIds[activeIndex + 1]);
      }

      if (event.key === 'ArrowLeft' && activeIndex > 0) {
        event.preventDefault();
        goToScreen(screenIds[activeIndex - 1]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, goToScreen]);

  return (
    <div className={cn('relative flex h-svh flex-col overflow-hidden bg-background text-foreground', className)}>
      <header className="relative z-50 shrink-0 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
        <div className="relative mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-4 sm:px-6 md:flex-nowrap">
          <a
            href="#work"
            className="min-w-0"
            onClick={(event) => {
              event.preventDefault();
              goToScreen('work');
            }}
          >
            <p className="truncate text-xs font-semibold tracking-[0.18em] text-foreground uppercase sm:text-sm">
              {SITE_CONFIG.name}
            </p>
            <p className="text-[11px] font-medium text-muted-foreground sm:text-xs">{t.site.title}</p>
          </a>

          <nav
            aria-label={t.nav.ariaLabel}
            className="order-3 flex w-full justify-center md:order-none md:absolute md:left-1/2 md:top-1/2 md:w-auto md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <div className="flex max-w-[calc(100vw-2.5rem)] items-center overflow-x-auto rounded-full border border-border/70 bg-card/60 p-1 shadow-soft backdrop-blur">
              {navigation.map((item) => {
                const isActive = activeScreen === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4',
                      isActive
                        ? 'bg-foreground text-background shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    onClick={(event) => {
                      event.preventDefault();
                      goToScreen(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-5 text-xs font-medium text-muted-foreground sm:flex">
              <a
                href={t.footer.linkedinHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                {t.footer.linkedin}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <span
                className="inline-flex cursor-not-allowed items-center gap-1"
                title={t.footer.resumeSoon}
                aria-label={`${t.footer.resume} — ${t.footer.resumeSoon}`}
              >
                {t.footer.resume}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative min-h-0 flex-1 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,hsl(var(--primary)/0.06),transparent_27%),linear-gradient(to_bottom,hsl(var(--background)/0.2),hsl(var(--muted)/0.18))]"
          aria-hidden="true"
        />

        <AnimatePresence initial={false} mode="wait" custom={direction}>
          {activeScreenData && (
            <motion.div
              key={activeScreenData.id}
              custom={direction}
              variants={screenVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="horizontal-screen absolute inset-0 h-full w-full overflow-x-hidden overflow-y-auto"
              aria-live="polite"
            >
              <div className="min-h-full pb-16">{activeScreenData.content}</div>
            </motion.div>
          )}
        </AnimatePresence>

        {previousScreen && (
          <button
            type="button"
            className="group absolute left-3 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-6 lg:left-10"
            aria-label={`${t.nav.previous}: ${previousScreen.label}`}
            title={`${t.nav.previous}: ${previousScreen.label}`}
            onClick={() => goToScreen(previousScreen.id)}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-background/70 shadow-soft backdrop-blur transition-all duration-300 group-hover:border-foreground/60 group-hover:bg-foreground group-hover:text-background group-hover:shadow-none">
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
            </span>
            <span className="max-w-20 text-center text-[9px] font-semibold tracking-[0.16em] uppercase">{previousScreen.label}</span>
          </button>
        )}

        {nextScreen && (
          <button
            type="button"
            className="group absolute right-3 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6 lg:right-10"
            aria-label={`${t.nav.next}: ${nextScreen.label}`}
            title={`${t.nav.next}: ${nextScreen.label}`}
            onClick={() => goToScreen(nextScreen.id)}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-background/70 shadow-soft backdrop-blur transition-all duration-300 group-hover:border-foreground/60 group-hover:bg-foreground group-hover:text-background group-hover:shadow-none">
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
            <span className="max-w-20 text-center text-[9px] font-semibold tracking-[0.16em] uppercase">{nextScreen.label}</span>
          </button>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex items-center justify-between px-5 text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:px-7">
          <span>
            {String(activeIndex + 1).padStart(2, '0')} / {String(screenIds.length).padStart(2, '0')}
          </span>
          <span className="hidden sm:block">{navigation[activeIndex]?.label}</span>
        </div>
      </main>

      <footer className="hidden" aria-hidden="true">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">{t.footer.portfolio}</p>
            <p className="mt-2 text-sm text-foreground">{SITE_CONFIG.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">© {new Date().getFullYear()}</p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
            <a
              href={t.footer.linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-muted-foreground"
            >
              {t.footer.linkedin}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <span
              className="inline-flex cursor-not-allowed items-center gap-1.5 text-muted-foreground"
              title={t.footer.resumeSoon}
              aria-label={`${t.footer.resume} — ${t.footer.resumeSoon}`}
            >
              {t.footer.resume}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
