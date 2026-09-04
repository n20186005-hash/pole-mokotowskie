import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const internal = [
    { href: `/${locale}`, label: t('internalGuide') },
    { href: `/${locale}/#map`, label: t('internalMap') },
    { href: `/${locale}/#highlights`, label: t('internalVisit') },
    { href: `/${locale}/#transport`, label: t('internalTransport') },
  ];

  const official = [
    { url: 'https://www.gov.pl/', label: t('officialLinks.link1') },
    { url: 'https://www.poland.travel/en/', label: t('officialLinks.link2') },
    { url: 'https://nid.pl/', label: t('officialLinks.link3') },
    { url: 'https://zielona.um.warszawa.pl/', label: t('officialLinks.link4') },
    { url: 'https://www.bn.org.pl/', label: t('officialLinks.link5') },
    { url: 'https://www.mazovia.pl/', label: t('officialLinks.link6') },
  ];

  return (
    <footer className="py-12 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--text-primary)]">{t('internal')}</h3>
            <div className="flex flex-col gap-2">
              {internal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--text-primary)]">{t('official')}</h3>
            <div className="flex flex-col gap-2">
              {official.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--text-primary)]">{t('legal')}</h3>
            <div className="flex flex-col gap-2">
              <Link href={`/${locale}/privacy`} className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('privacyLink') || 'Privacy Policy'}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('termsLink') || 'Terms of Service'}
              </Link>
              <Link href={`/${locale}/cookies`} className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('cookiesLink') || 'Cookie Settings'}
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm opacity-60 space-y-2">
          <p>{t('rights')}</p>
          <p className="max-w-2xl mx-auto mt-4 text-xs opacity-80">
            {t('disclaimer')}
          </p>
          <p className="max-w-3xl mx-auto text-xs opacity-80">
            {t('photoCredit')}
          </p>
        </div>
      </div>
    </footer>
  );
}
