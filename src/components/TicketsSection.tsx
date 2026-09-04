'use client';

import { useTranslations } from 'next-intl';

export default function TicketsSection() {
  const t = useTranslations('tickets');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="rounded-2xl p-6 sm:p-8 col-span-1 md:col-span-2"
            style={{ background: 'var(--bg-tertiary)', border: '2px solid var(--accent)' }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'var(--accent)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12l2 2 4-4"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {t('outdoor')}
                </h3>
                <p className="text-xl font-bold" style={{ color: 'var(--accent)' }}>{t('outdoorPrice')}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-medium mb-2 text-[var(--text-primary)]">{t('lake')}</h3>
            <p className="text-[var(--text-secondary)]">{t('lakePrice')}</p>
          </div>
          <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-medium mb-2 text-[var(--text-primary)]">{t('plaza')}</h3>
            <p className="text-[var(--text-secondary)]">{t('plazaPrice')}</p>
          </div>
          <div className="p-6 rounded-2xl md:col-span-2" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h3 className="text-lg font-medium mb-2 text-[var(--text-primary)]">{t('activities')}</h3>
            <p className="text-[var(--text-secondary)]">{t('activitiesPrice')}</p>
          </div>
        </div>

        {/* Travel Pass */}
        <div
          className="mt-6 rounded-xl p-5 flex items-start gap-4"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <line x1="2" y1="10" x2="22" y2="10"/>
          </svg>
          <div>
            <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{t('card')}</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('cardPrice')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

