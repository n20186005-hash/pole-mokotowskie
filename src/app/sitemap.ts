import type { MetadataRoute } from 'next';
import { siteConfig, locales, localeTags } from '@/config';

const paths = ['', '/privacy', '/terms', '/cookies'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteConfig.baseUrl}/${locale}${path}`,
      lastModified: new Date(siteConfig.lastUpdated),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.4,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((loc) => [localeTags[loc], `${siteConfig.baseUrl}/${loc}${path}`])
          ),
          'x-default': `${siteConfig.baseUrl}/pl${path}`,
        },
      },
    }))
  );
}
