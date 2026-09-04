import { useTranslations, useMessages } from 'next-intl';

export default function HighlightsSection() {
  const t = useTranslations('highlights');
  const messages = useMessages() as any;
  const items = (messages?.highlights?.items || []) as Array<{ name: string; desc: string }>;

  return (
    <section id="highlights" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="mb-10 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <article
              key={i}
              className="rounded-xl p-6 transition-shadow hover:shadow-md"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-white mb-4"
                style={{ background: 'var(--accent)' }}
              >
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
