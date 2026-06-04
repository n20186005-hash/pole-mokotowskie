import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="py-12 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--text-primary)]">{t('official')}</h3>
            <div className="flex flex-col gap-2">
              <a href="https://www.gov.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('officialLinks.link1')}
              </a>
              <a href="https://www.poland.travel/en/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('officialLinks.link2')}
              </a>
              <a href="https://nid.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('officialLinks.link3')}
              </a>
              <a href="https://zielona.um.warszawa.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('officialLinks.link4')}
              </a>
              <a href="https://www.bn.org.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('officialLinks.link5')}
              </a>
              <a href="https://www.mazovia.pl/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                {t('officialLinks.link6')}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-[var(--text-primary)]">{t('legal')}</h3>
            <div className="flex flex-col gap-2">
              <Link href={`/${locale}/privacy`} className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms`} className="hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
              <button className="text-left hover:underline text-sm opacity-60 hover:opacity-100 transition-opacity">
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm opacity-60 space-y-2">
          <p>{t('rights')}</p>
          <p className="max-w-2xl mx-auto mt-4 text-xs opacity-80">
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
