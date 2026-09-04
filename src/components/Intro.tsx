import { useTranslations, useMessages, useLocale } from 'next-intl';
import Link from 'next/link';
import { siteConfig } from '@/config';

export default function Intro() {
  const t = useTranslations('intro');
  const tb = useTranslations('breadcrumb');
  const locale = useLocale();
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <nav aria-label={tb('label')} className="mb-6">
          <ol
            className="flex flex-wrap items-center gap-2 text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            <li>
              <Link href={`/${locale}`} className="hover:underline">
                {tb('home')}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>{tb('country')}</li>
            <li aria-hidden="true">/</li>
            <li>{tb('region')}</li>
            <li aria-hidden="true">/</li>
            <li>{tb('city')}</li>
            <li aria-hidden="true">/</li>
            <li style={{ color: 'var(--text-primary)' }}>{siteConfig.name}</li>
          </ol>
        </nav>

        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
