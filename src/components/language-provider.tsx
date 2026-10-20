'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { translations, type Translation } from '@/constants/translations';
import type { Language } from '@/types/home';

const LANGUAGE_STORAGE_KEY = 'portfolio-language';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function isLanguage(value: string | null): value is Language {
  return value === 'pt-BR' || value === 'en';
}

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [language, setLanguageState] = useState<Language>('pt-BR');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const initialLanguage = isLanguage(storedLanguage) ? storedLanguage : 'pt-BR';

    setLanguageState(initialLanguage);
    document.documentElement.lang = initialLanguage;
  }, []);

  useEffect(() => {
    const currentTranslation = translations[language];

    document.documentElement.lang = language;
    document.title = currentTranslation.site.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', currentTranslation.site.description);
  }, [language]);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
