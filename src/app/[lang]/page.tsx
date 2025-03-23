import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { createMetadata } from '@/lib/utils';
import HeroSection from '@/components/blocks/HeroSection';
import IntroSection from '@/components/blocks/IntroSection';
import FeaturesGrid from '@/components/blocks/FeaturesGrid';
import TestimonialsSection from '@/components/blocks/TestimonialsSection';
import GallerySection from '@/components/blocks/GallerySection';
import DownloadCTA from '@/components/blocks/DownloadCTA';

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const { title, description, keywords } = dictionary.meta.home;
  
  return createMetadata({
    title,
    description,
    keywords,
    locale,
  });
}

export default async function HomePage({ params }: { params: { lang: string } }) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  
  return (
    <>
      <HeroSection locale={locale} dictionary={dictionary} />
      <IntroSection locale={locale} dictionary={dictionary} />
      <FeaturesGrid locale={locale} dictionary={dictionary} />
      <GallerySection locale={locale} dictionary={dictionary} />
      <TestimonialsSection locale={locale} dictionary={dictionary} />
      <DownloadCTA locale={locale} dictionary={dictionary} />
    </>
  );
}
