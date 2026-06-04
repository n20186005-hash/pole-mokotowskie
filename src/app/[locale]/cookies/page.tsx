import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://mokotowskiepark.com';
  const zhUrl = `${baseUrl}/zh/cookies`;
  const enUrl = `${baseUrl}/en/cookies`;
  const plUrl = `${baseUrl}/pl/cookies`;
  const ruUrl = `${baseUrl}/ru/cookies`;
  const deUrl = `${baseUrl}/de/cookies`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'en' ? enUrl : locale === 'pl' ? plUrl : locale === 'ru' ? ruUrl : deUrl;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'pl': plUrl,
        'ru': ruUrl,
        'de': deUrl,
        'x-default': enUrl,
      },
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
