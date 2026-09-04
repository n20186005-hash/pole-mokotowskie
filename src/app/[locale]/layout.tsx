import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { locales, localeTags, siteConfig, type AppLocale } from '@/config';
import type { Metadata, Viewport } from 'next';

const { baseUrl, geo, rating, reviewCount, bestRating } = siteConfig;

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const localeUrl = (loc: string) => `${baseUrl}/${loc}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const selfUrl = localeUrl(locale);

  const languages: Record<string, string> = {
    'x-default': localeUrl('pl'),
  };
  for (const loc of locales) {
    languages[localeTags[loc]] = localeUrl(loc);
  }

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.title,
    description: messages.meta.description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: selfUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.fullName,
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      locale: localeTags[(locale as AppLocale) in localeTags ? (locale as AppLocale) : 'pl'],
      images: [
        {
          url: `${baseUrl}${siteConfig.heroImage}`,
          alt: messages.hero?.imgAlt ?? siteConfig.fullName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [`${baseUrl}${siteConfig.heroImage}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function buildGraph(locale: string, messages: any) {
  const selfUrl = localeUrl(locale);
  const inLanguage = localeTags[(locale as AppLocale) in localeTags ? (locale as AppLocale) : 'pl'];

  const park = {
    '@type': ['Park', 'TouristAttraction'],
    '@id': `${baseUrl}/#park`,
    name: siteConfig.name,
    alternateName: [...siteConfig.alternateNames],
    description: messages.meta.description,
    url: `${baseUrl}/#park`,
    image: [`${baseUrl}${siteConfig.heroImage}`, `${baseUrl}/gallery/pole-mokotowskie-2.jpg`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.streetAddress,
      postalCode: siteConfig.postalCode,
      addressLocality: siteConfig.cityLocal,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    isAccessibleForFree: siteConfig.isAccessibleForFree,
    touristType: [...siteConfig.touristType],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: bestRating,
    },
    sameAs: [...siteConfig.sameAs],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: siteConfig.publisher.name,
        url: siteConfig.publisher.url,
        logo: {
          '@type': 'ImageObject',
          url: siteConfig.publisher.logo,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: siteConfig.fullName,
        inLanguage: locales.map((l) => localeTags[l]),
        publisher: { '@id': `${baseUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${selfUrl}/#webpage`,
        url: selfUrl,
        name: messages.meta.title,
        description: messages.meta.description,
        isPartOf: { '@id': `${baseUrl}/#website` },
        about: { '@id': `${baseUrl}/#park` },
        inLanguage,
        datePublished: siteConfig.datePublished,
        dateModified: siteConfig.lastUpdated,
        breadcrumb: { '@id': `${selfUrl}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${selfUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: messages.breadcrumb?.home ?? 'Home', item: selfUrl },
          { '@type': 'ListItem', position: 2, name: siteConfig.country, item: `${selfUrl}/#park` },
          { '@type': 'ListItem', position: 3, name: siteConfig.region },
          { '@type': 'ListItem', position: 4, name: siteConfig.city },
          { '@type': 'ListItem', position: 5, name: siteConfig.name },
        ],
      },
      park,
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const jsonLd = buildGraph(locale, messages as any);

  return (
    <html
      lang={localeTags[(locale as AppLocale) in localeTags ? (locale as AppLocale) : 'pl']}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* GA4 — consent gated: loads only when cookiePrefs.analytics === true.
            ga-disable-<ID> is re-checked by Google Analytics on every send, so
            revoking consent stops tracking immediately even after the tag loaded. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var gid = '${siteConfig.gaId}';
                function isGranted() {
                  try {
                    var prefs = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
                    return prefs.analytics === true;
                  } catch(e) { return false; }
                }
                window['ga-disable-' + gid] = isGranted() ? false : true;
                if (!isGranted()) return;
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=' + gid;
                document.head.appendChild(s);
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', gid);
              })();
              window.addEventListener('consent-updated', function() {
                var gid = '${siteConfig.gaId}';
                try {
                  var prefs = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
                  window['ga-disable-' + gid] = prefs.analytics === true ? false : true;
                  if (!prefs.analytics || window.gtag) return;
                } catch(e) { return; }
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=' + gid;
                document.head.appendChild(s);
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', gid);
              });
            `,
          }}
        />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/icon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(){});
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
