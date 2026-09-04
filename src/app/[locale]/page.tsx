import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import MapEmbed from '@/components/MapEmbed';
import NearbyAttractions from '@/components/NearbyAttractions';
import HighlightsSection from '@/components/HighlightsSection';
import BestTimeSection from '@/components/BestTimeSection';
import WeatherSection from '@/components/WeatherSection';
import InfoSection from '@/components/InfoSection';
import StoriesSection from '@/components/StoriesSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import HotelsSection from '@/components/HotelsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import SourcesSection from '@/components/SourcesSection';
import Footer from '@/components/Footer';

function FaqJsonLd({ items }: { items: Array<{ q: string; a: string }> }) {
  if (!items?.length) return null;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;
  const faqItems: Array<{ q: string; a: string }> = messages?.faq?.items ?? [];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <MapEmbed />
        <NearbyAttractions />
        <HighlightsSection />
        <BestTimeSection />
        <WeatherSection />
        <InfoSection />
        <StoriesSection />
        <RouteSection />
        <PhotoSpotsSection />
        <FacilitiesSection />
        <HotelsSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <SourcesSection />
      </main>
      <FaqJsonLd items={faqItems} />
      <Footer />
    </>
  );
}
