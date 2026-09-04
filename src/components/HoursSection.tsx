'use client';

import { useTranslations } from 'next-intl';

export default function HoursSection() {
  const t = useTranslations('hours');

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-medium mb-2 text-[var(--text-primary)]">{t('outdoor')}</h3>
            <p className="text-[var(--text-secondary)]">{t('outdoorTime')}</p>
          </div>
          <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-medium mb-2 text-[var(--text-primary)]">{t('restrooms')}</h3>
            <p className="text-[var(--text-secondary)]">{t('restroomsTime')}</p>
          </div>
          <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-medium mb-2 text-[var(--text-primary)]">{t('trails')}</h3>
            <p className="text-[var(--text-secondary)]">{t('trailsTime')}</p>
          </div>
        </div>
        <div className="mt-6 rounded-xl p-5 flex items-start gap-4" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('tip')}</p>
        </div>
      </div>
    </section>
  );
}

