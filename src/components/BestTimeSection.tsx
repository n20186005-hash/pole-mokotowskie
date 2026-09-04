import { useTranslations, useMessages } from 'next-intl';

type Season = { name: string; period: string; desc: string };

export default function BestTimeSection() {
  const t = useTranslations('besttime');
  const messages = useMessages() as any;
  const items = (messages?.besttime?.items ?? []) as Season[];

  return (
    <section id="besttime" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="mb-10 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((season, i) => (
            <article
              key={i}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span
                className="inline-block self-start text-xs font-medium px-3 py-1 rounded-full mb-4 uppercase tracking-wide"
                style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
              >
                {season.period}
              </span>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {season.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {season.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
