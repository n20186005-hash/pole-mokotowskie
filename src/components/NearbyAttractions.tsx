import { useTranslations, useMessages } from 'next-intl';

type NearbyItem = { name: string; kind: string; dist: string; desc: string };

export default function NearbyAttractions() {
  const t = useTranslations('nearby');
  const messages = useMessages() as any;
  const items = (messages?.nearby?.items ?? []) as NearbyItem[];

  return (
    <section id="nearby" className="section-padding">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <article
              key={i}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span
                className="inline-block self-start text-xs font-medium px-3 py-1 rounded-full mb-3 uppercase tracking-wide"
                style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
              >
                {item.kind}
              </span>
              <h3 className="font-display text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </h3>
              <p
                className="flex items-center gap-1.5 text-xs mb-3"
                style={{ color: 'var(--accent)' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {item.dist}
              </p>
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
