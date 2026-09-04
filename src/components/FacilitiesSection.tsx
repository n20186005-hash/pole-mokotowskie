import { useTranslations, useMessages } from 'next-intl';

/** Facility type icons, matched by index (type-level info only — no business names). */
const ICONS = [
  '🚻', // Public toilets
  '🛝', // Playgrounds
  '🐕', // Dog areas
  '🏃', // Sports & fitness
  '🚲', // Cycling
  '🧺', // Picnic & seating
  '♻️', // Waste & recycling
  '🅿️', // Parking
  '🍽️', // Dining & cafés
  '🏨', // Accommodation
  '🛒', // Grocery & convenience
  '⛽', // Fuel & EV charging
];

export default function FacilitiesSection() {
  const t = useTranslations('facilities');
  const messages = useMessages() as any;
  const items = (messages?.facilities?.items || []) as Array<{
    type: string;
    desc: string;
    hint: string;
  }>;

  return (
    <section id="facilities" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="mb-10 text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="text-2xl mb-3" aria-hidden="true">{ICONS[i] ?? '•'}</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.type}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
              <span
                className="inline-block text-xs px-2 py-0.5 rounded-full"
                style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
              >
                {item.hint}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
