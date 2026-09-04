import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.fullName,
    short_name: siteConfig.name,
    description:
      'Independent visitor guide to Pole Mokotowskie in Warsaw: map, opening hours, lakes, bike paths, National Library and transport.',
    start_url: '/pl',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: siteConfig.themeColor,
    lang: 'pl-PL',
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
