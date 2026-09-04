import { useTranslations, useLocale } from 'next-intl';
import { siteConfig, localeTags, type AppLocale } from '@/config';

export default function SourcesSection() {
  const t = useTranslations('sources');
  const locale = useLocale();
  const dateLocale = localeTags[(locale as AppLocale) in localeTags ? (locale as AppLocale) : 'pl'];

  const updated = new Date(siteConfig.lastUpdated).toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section id="sources" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="mb-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        <ul className="space-y-3 mb-8">
          {siteConfig.authorities.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm hover:underline"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span
                  className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--accent)' }}
                />
                <span>
                  <span style={{ color: 'var(--text-primary)' }}>{source.name}</span>
                  <span className="block text-xs" style={{ color: 'var(--text-muted)' }}>
                    {source.url}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className="rounded-xl p-5 text-xs leading-relaxed"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
        >
          <p className="mb-2">
            {t('lastUpdated')}: <strong style={{ color: 'var(--text-primary)' }}>{updated}</strong>
          </p>
          <p>{t('photoCredit')}</p>
        </div>
      </div>
    </section>
  );
}
