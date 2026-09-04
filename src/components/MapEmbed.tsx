import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config';

export default function MapEmbed() {
  const t = useTranslations('map');
  const authority = siteConfig.authorities[0];

  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: 'var(--accent)' }} />
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {t('subtitle')}
          </p>
        </div>

        <div
          className="map-container relative rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--map-border)' }}
        >
          <iframe
            src={siteConfig.mapsEmbedSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title={t('title')}
          />
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm">
          <div className="rounded-xl p-4" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <dt style={{ color: 'var(--text-muted)' }}>{t('addressLabel')}</dt>
            <dd style={{ color: 'var(--text-primary)' }}>
              {siteConfig.streetAddress}, {siteConfig.cityLocal}, {siteConfig.country}
            </dd>
          </div>
          <div className="rounded-xl p-4" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <dt style={{ color: 'var(--text-muted)' }}>{t('plusCodeLabel')}</dt>
            <dd style={{ color: 'var(--text-primary)' }}>
              {siteConfig.plusCode} {siteConfig.cityLocal}, {siteConfig.country}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-medium">{t('openMaps')}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          <a
            href={authority.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            {t('authorityText')}
          </a>
        </div>
      </div>
    </section>
  );
}
