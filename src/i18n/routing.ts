import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en', 'zh', 'ru', 'de'],
  defaultLocale: 'pl',
  // Always land on the default locale (pl); visitors switch manually.
  localeDetection: false,
  localePrefix: {
    mode: 'always',
  },
  pathnames: {
    '/': '/',
    '/privacy': '/privacy',
    '/terms': '/terms',
    '/cookies': '/cookies',
  },
});

export type Locale = (typeof routing.locales)[number];
