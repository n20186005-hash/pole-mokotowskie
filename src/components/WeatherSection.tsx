import { use } from 'react';
import { useTranslations, useLocale, useMessages } from 'next-intl';
import { siteConfig, localeTags, type AppLocale } from '@/config';

/** Open-Meteo (no API key, CC-BY) — fetched on the server and cached for 30 minutes. */
const OPEN_METEO_URL =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${siteConfig.geo.latitude}` +
  `&longitude=${siteConfig.geo.longitude}` +
  `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
  `&timezone=Europe%2FWarsaw&forecast_days=7`;

type WeatherResponse = {
  current?: {
    time?: string;
    temperature_2m?: number;
    apparent_temperature?: number;
    relative_humidity_2m?: number;
    wind_speed_10m?: number;
    precipitation?: number;
    weather_code?: number;
  };
  daily?: {
    time?: string[];
    weather_code?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
  };
};

async function getWeather(): Promise<WeatherResponse | null> {
  try {
    const response = await fetch(OPEN_METEO_URL, {
      next: { revalidate: 1800 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    return (await response.json()) as WeatherResponse;
  } catch {
    return null;
  }
}

type IconGroup = 'sun' | 'partly' | 'cloud' | 'fog' | 'drizzle' | 'rain' | 'snow' | 'storm';

function iconGroup(code: number): IconGroup {
  if (code === 0) return 'sun';
  if (code <= 2) return 'partly';
  if (code === 3) return 'cloud';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if (code >= 61 && code <= 67) return 'rain';
  if (code >= 71 && code <= 77) return 'snow';
  if (code >= 80 && code <= 82) return 'rain';
  if (code >= 85 && code <= 86) return 'snow';
  if (code >= 95) return 'storm';
  return 'cloud';
}

function WeatherGlyph({ group, size = 36 }: { group: IconGroup; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (group) {
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="6" />
          <path d="M16 3v3M16 26v3M3 16h3M26 16h3M6.8 6.8l2.1 2.1M23.1 23.1l2.1 2.1M25.2 6.8l-2.1 2.1M8.9 23.1l-2.1 2.1" />
        </svg>
      );
    case 'partly':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="5" />
          <path d="M11 2v2M2 11h2M4.6 4.6l1.4 1.4M17.4 4.6L16 6" />
          <path d="M11 28h11a5 5 0 0 0 .6-9.96A6 6 0 0 0 11.6 19H11z" />
        </svg>
      );
    case 'fog':
      return (
        <svg {...common}>
          <path d="M9 20h14a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 12 11.4A4.3 4.3 0 0 0 9 20z" />
          <path d="M6 24h20M9 28h14" />
        </svg>
      );
    case 'drizzle':
      return (
        <svg {...common}>
          <path d="M9 19h14a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 12 10.4A4.3 4.3 0 0 0 9 19z" />
          <path d="M12 24v2M20 24v2" />
        </svg>
      );
    case 'rain':
      return (
        <svg {...common}>
          <path d="M9 18h14a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 12 9.4A4.3 4.3 0 0 0 9 18z" />
          <path d="M11 22l-1 5M17 22l-1 5M23 22l-1 5" />
        </svg>
      );
    case 'snow':
      return (
        <svg {...common}>
          <path d="M9 18h14a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 12 9.4A4.3 4.3 0 0 0 9 18z" />
          <path d="M11 25h.01M16 27h.01M21 25h.01" />
        </svg>
      );
    case 'storm':
      return (
        <svg {...common}>
          <path d="M9 18h14a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 12 9.4A4.3 4.3 0 0 0 9 18z" />
          <path d="M17 21l-4 5h3l-1 5 4-5h-3z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M9 20h14a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 12 11.4A4.3 4.3 0 0 0 9 20z" />
        </svg>
      );
  }
}

export default function WeatherSection() {
  const t = useTranslations('weather');
  const messages = useMessages() as any;
  const codes = (messages?.weather?.codes ?? {}) as Record<string, string>;
  const locale = useLocale();
  const tag = localeTags[locale as AppLocale];
  // Synchronous `use()` suspension (server component) — safe under static
  // prerender, unlike mixing hooks with `await` inside an async component.
  const data = use(getWeather());

  const current = data?.current;
  const daily = data?.daily;

  if (!current || !daily?.time?.length) {
    return (
      <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('title')}
          </h2>
          <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('fallback')}</p>
        </div>
      </section>
    );
  }

  const code = current.weather_code ?? 0;
  const description = codes[String(code)] ?? codes['3'] ?? '—';

  const days = daily.time.slice(0, 7).map((iso, i) => ({
    iso,
    weekday: new Date(`${iso}T12:00:00`).toLocaleDateString(tag, { weekday: 'short' }),
    code: daily.weather_code?.[i] ?? 3,
    max: daily.temperature_2m_max?.[i],
    min: daily.temperature_2m_min?.[i],
  }));

  return (
    <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <p className="mb-8 text-sm" style={{ color: 'var(--text-secondary)' }}>{t('subtitle')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current conditions */}
          <div
            className="rounded-2xl p-6 lg:col-span-1"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
          >
            <p className="text-xs uppercase tracking-wide mb-3" style={{ color: 'var(--text-muted)' }}>
              {t('now')}
            </p>
            <div className="flex items-center gap-4">
              <span style={{ color: 'var(--accent)' }}>
                <WeatherGlyph group={iconGroup(code)} size={48} />
              </span>
              <div>
                <p className="text-4xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {Math.round(current.temperature_2m ?? 0)}°C
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{description}</p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt style={{ color: 'var(--text-muted)' }}>{t('feelsLike')}</dt>
                <dd className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {Math.round(current.apparent_temperature ?? 0)}°C
                </dd>
              </div>
              <div>
                <dt style={{ color: 'var(--text-muted)' }}>{t('humidity')}</dt>
                <dd className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {Math.round(current.relative_humidity_2m ?? 0)}%
                </dd>
              </div>
              <div>
                <dt style={{ color: 'var(--text-muted)' }}>{t('wind')}</dt>
                <dd className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {Math.round(current.wind_speed_10m ?? 0)} km/h
                </dd>
              </div>
              <div>
                <dt style={{ color: 'var(--text-muted)' }}>{t('precipitation')}</dt>
                <dd className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {(current.precipitation ?? 0).toFixed(1)} mm
                </dd>
              </div>
            </dl>
          </div>

          {/* Multi-day forecast */}
          <div
            className="rounded-2xl p-6 lg:col-span-2"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
          >
            <p className="text-xs uppercase tracking-wide mb-4" style={{ color: 'var(--text-muted)' }}>
              {t('forecastTitle')}
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {days.map((day, i) => (
                <li
                  key={day.iso}
                  className="rounded-xl p-3 text-center"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                    {i === 0 ? t('today') : day.weekday}
                  </p>
                  <span className="inline-block my-1" style={{ color: 'var(--accent)' }}>
                    <WeatherGlyph group={iconGroup(day.code)} size={28} />
                  </span>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {Math.round(day.max ?? 0)}°
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {Math.round(day.min ?? 0)}°
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs" style={{ color: 'var(--text-muted)' }}>
              {t('source')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
