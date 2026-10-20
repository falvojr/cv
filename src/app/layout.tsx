import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import '@/styles/globals.css';

import { LanguageProvider } from '@/components/language-provider';
import { SITE_CONFIG } from '@/constants/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const languageScript = `
  (() => {
    const savedLanguage = localStorage.getItem('portfolio-language');

    if (savedLanguage === 'pt-BR' || savedLanguage === 'en') {
      document.documentElement.lang = savedLanguage;
    }
  })();
`;
const themeScript = `
  (() => {
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme !== 'light') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }
  })();
`;

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body>
        <Script id="language-script" strategy="beforeInteractive">
          {languageScript}
        </Script>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
