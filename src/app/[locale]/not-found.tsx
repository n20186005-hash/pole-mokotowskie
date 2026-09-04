import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('notFound');
  const locale = useLocale();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <p
          className="font-display text-7xl sm:text-8xl font-bold mb-6"
          style={{ color: 'var(--accent)' }}
        >
          404
        </p>
        <h1
          className="font-display text-2xl sm:text-3xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h1>
        <p className="mb-10 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t('description')}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-colors"
          style={{ background: 'var(--accent)' }}
        >
          {t('homeLink')}
        </Link>
      </div>
    </main>
  );
}
