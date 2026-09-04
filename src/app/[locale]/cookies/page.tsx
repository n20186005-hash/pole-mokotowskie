import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';
import { siteConfig, locales, localeTags } from '@/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const path = '/cookies';
  const selfUrl = `${siteConfig.baseUrl}/${locale}${path}`;
  const languages: Record<string, string> = {
    'x-default': `${siteConfig.baseUrl}/pl${path}`,
  };
  for (const loc of locales) {
    languages[localeTags[loc]] = `${siteConfig.baseUrl}/${loc}${path}`;
  }
  return {
    title: `${messages.cookieSettings.title} · ${siteConfig.fullName}`,
    description: messages.cookieSettings.description,
    alternates: {
      canonical: selfUrl,
      languages,
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
