import { useTranslations, useMessages } from 'next-intl';

/**
 * Native <details> keeps every answer in the DOM (indexable + accessible)
 * while staying collapsed by default.
 */
export default function FAQSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const items = (messages?.faq?.items || []) as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="divide-y rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
          {items.map((item, i) => (
            <details key={i} className="group" style={{ background: 'var(--card-bg)' }}>
              <summary
                className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-4 font-medium"
                style={{ color: 'var(--text-primary)' }}
              >
                <span>{item.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 mt-0.5 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </summary>
              <div className="px-5 pb-5 -mt-1">
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
