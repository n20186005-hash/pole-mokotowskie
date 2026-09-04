/**
 * Single source of truth for the Pole Mokotowskie entity.
 * Every NAP / geo / map / rating value used across the site comes from here.
 */
export const siteConfig = {
  domain: 'mokotowskiepark.com',
  baseUrl: 'https://mokotowskiepark.com',

  /** Entity naming */
  name: 'Pole Mokotowskie',
  fullName: 'Pole Mokotowskie Park, Warsaw',
  localName: 'Pole Mokotowskie',
  alternateNames: ['Pole Mokotowskie', 'Park Pole Mokotowskie', 'Mokotów Field'],

  /** Location */
  streetAddress: 'al. Niepodległości',
  postalCode: '00-650',
  city: 'Warsaw',
  cityLocal: 'Warszawa',
  region: 'Masovian Voivodeship',
  country: 'Poland',
  countryCode: 'PL',
  plusCode: '6273+39',
  geo: {
    latitude: 52.2106048,
    longitude: 21.0030168,
  },

  /** Maps */
  mapsUrl: 'https://maps.app.goo.gl/dDi2bNjauNVknJP87',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4348.242683581132!2d21.00084857787295!3d52.21262967198232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccc72d1c0555%3A0x61bd52afa3c5fbcd!2sPole%20Mokotowskie!5e1!3m2!1szh-CN!2s!4v1788501142132!5m2!1szh-CN!2s',

  /** Facts */
  rating: 4.7,
  reviewCount: 26875,
  bestRating: 5,
  openingHours: 'Mo-Su 00:00-24:00',
  isAccessibleForFree: true,
  touristType: ['Park', 'Urban green space', 'Recreation area'],

  /** Media */
  heroImage: '/gallery/pole-mokotowskie-1.jpg',
  galleryPrefix: '/gallery/pole-mokotowskie-',
  /** Actual files on disk (4 / 14 / 16 were never supplied) */
  galleryNumbers: [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17, 18, 19, 20, 21,
  ],

  /** Site meta */
  lastUpdated: '2026-09-04',
  datePublished: '2026-05-01',
  gaId: 'G-HXM22WWPKP',
  themeColor: '#3a7a8d',

  /** Publisher (independent, non-official) */
  publisher: {
    name: 'Pole Mokotowskie Independent Travel Research Association',
    type: 'Organization',
    url: 'https://mokotowskiepark.com',
    logo: 'https://mokotowskiepark.com/icons/icon.svg',
  },

  /** Entity sameAs: authoritative pages about this park */
  sameAs: [
    'https://maps.app.goo.gl/dDi2bNjauNVknJP87',
    'https://en.wikipedia.org/wiki/Pole_Mokotowskie',
    'https://pl.wikipedia.org/wiki/Pole_Mokotowskie',
  ],

  /** Authoritative outbound sources (no commercial operators) */
  authorities: [
    {
      name: 'City of Warsaw – Green Warsaw',
      url: 'https://zielona.um.warszawa.pl/',
    },
    {
      name: 'Warsaw Public Transport Authority (WTP)',
      url: 'https://www.wtp.waw.pl/',
    },
    {
      name: 'Polish Tourism Organisation',
      url: 'https://www.poland.travel/en/',
    },
    {
      name: 'National Library of Poland',
      url: 'https://www.bn.org.pl/',
    },
    {
      name: 'National Institute of Cultural Heritage (NID)',
      url: 'https://nid.pl/',
    },
    {
      name: 'Mazovia Province Government',
      url: 'https://www.mazovia.pl/',
    },
    {
      name: 'Open-Meteo (weather data, CC-BY)',
      url: 'https://open-meteo.com/',
    },
  ],
} as const;

export const locales = ['pl', 'en', 'zh', 'ru', 'de'] as const;
export type AppLocale = (typeof locales)[number];

/** BCP-47 tags used for hreflang / html lang / JSON-LD inLanguage */
export const localeTags: Record<AppLocale, string> = {
  zh: 'zh-CN',
  en: 'en',
  pl: 'pl-PL',
  ru: 'ru-RU',
  de: 'de-DE',
};

export const gallerySrc = (n: number) =>
  `${siteConfig.galleryPrefix}${n}.jpg`;

/** Intrinsic dimensions (px) of each gallery file — reserves layout space to prevent CLS */
export const gallerySizes: Record<number, { width: number; height: number }> = {
  1: { width: 1600, height: 1215 },
  2: { width: 1600, height: 1200 },
  3: { width: 1600, height: 1200 },
  5: { width: 1200, height: 1600 },
  6: { width: 1200, height: 1600 },
  7: { width: 1600, height: 900 },
  8: { width: 1600, height: 1600 },
  9: { width: 1600, height: 900 },
  10: { width: 1200, height: 1600 },
  11: { width: 1600, height: 1200 },
  12: { width: 1600, height: 1200 },
  13: { width: 1200, height: 1600 },
  15: { width: 900, height: 1600 },
  17: { width: 1600, height: 1438 },
  18: { width: 1600, height: 1200 },
  19: { width: 1200, height: 1600 },
  20: { width: 1600, height: 899 },
  21: { width: 1200, height: 1600 },
};

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
}

export const galleryFiles: GalleryImage[] = siteConfig.galleryNumbers.map((n) => {
  const size = gallerySizes[n];
  return { src: gallerySrc(n), width: size.width, height: size.height };
});
