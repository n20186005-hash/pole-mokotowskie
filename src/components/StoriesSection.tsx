import { useTranslations, useMessages } from 'next-intl';

type Story = { kind: string; title: string; text: string };

export default function StoriesSection() {
  const t = useTranslations('stories');
  const messages = useMessages() as any;
  const items = (messages?.stories?.items ?? []) as Story[];

  return (
    <section id="stories" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6 mx-auto" style={{ background: 'var(--accent)' }} />
        <p className="mb-10 text-center text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((story, i) => (
            <article
              key={i}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span
                className="inline-block self-start text-xs font-medium px-3 py-1 rounded-full mb-4 uppercase tracking-wide"
                style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
              >
                {story.kind}
              </span>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {story.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {story.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
