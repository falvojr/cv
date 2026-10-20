'use client';

import { Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className="flex shrink-0 items-center gap-0.5 rounded-xl border border-input p-1"
      role="group"
      aria-label={t.language.selectorLabel}
    >
      <Languages className="mx-1 hidden h-4 w-4 text-muted-foreground sm:block" aria-hidden="true" />
      <Button
        type="button"
        variant={language === 'pt-BR' ? 'default' : 'ghost'}
        size="sm"
        className="h-8 px-2.5 text-xs"
        aria-label={t.language.portuguese}
        aria-pressed={language === 'pt-BR'}
        title={t.language.portuguese}
        onClick={() => setLanguage('pt-BR')}
      >
        PT-BR
      </Button>
      <Button
        type="button"
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        className="h-8 px-2.5 text-xs"
        aria-label={t.language.english}
        aria-pressed={language === 'en'}
        title={t.language.english}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
}
