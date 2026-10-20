'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';

const THEME_STORAGE_KEY = 'portfolio-theme';

type Theme = 'light' | 'dark';

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) === 'light' ? 'light' : 'dark';
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const isDark = theme === 'dark';
  const nextThemeLabel = isDark ? t.theme.light : t.theme.dark;

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark';

    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={nextThemeLabel}
      aria-pressed={isDark}
      title={nextThemeLabel}
      onClick={toggleTheme}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">{nextThemeLabel}</span>
    </Button>
  );
}
