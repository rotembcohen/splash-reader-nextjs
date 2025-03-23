import { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import { createMetadata } from '@/lib/utils';

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const { title, description, keywords } = dictionary.meta.features;
  
  return createMetadata({
    title,
    description,
    keywords,
    path: 'features',
    locale,
  });
}

export default async function FeaturesPage({ params }: { params: { lang: string } }) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  
  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-6 text-center">{dictionary.features.hero.title}</h1>
      <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
        {dictionary.features.hero.subtitle}
      </p>
      
      <div className="grid gap-12 my-12">
        {/* Panoramic View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-deep">{dictionary.features.panoramic.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{dictionary.features.panoramic.description}</p>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/tokyo-multipage-panorama-screenshot.png" 
              alt="Panoramic View"
              width={800}
              height={500}
              className="w-full h-auto" 
            />
          </div>
        </div>
        
        {/* Virtual Shelf */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Image 
              src="/images/store-multipage-two-page-screenshot.png" 
              alt="Virtual Shelf"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 text-blue-deep">{dictionary.features.virtualShelf.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{dictionary.features.virtualShelf.description}</p>
          </div>
        </div>
        
        {/* Multiple Comics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-deep">{dictionary.features.multiComics.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{dictionary.features.multiComics.description}</p>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/three-windows-side-by-side-2-page-screenshot.png" 
              alt="Multiple Comics"
              width={800}
              height={500}
              className="w-full h-auto" 
            />
          </div>
        </div>
        
        {/* Environments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Image 
              src="/images/environments-screen-screenshot.png" 
              alt="Reading Environments"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 text-blue-deep">{dictionary.features.environments.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{dictionary.features.environments.description}</p>
          </div>
        </div>
        
        {/* Reading Modes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-deep">{dictionary.features.readingModes.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{dictionary.features.readingModes.description}</p>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/radiant-black-two-page-screenshot.png" 
              alt="Reading Modes"
              width={800}
              height={500}
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
      
      <div className="text-center my-20">
        <a 
          href="https://apps.apple.com/us/app/splash-reader/id6477877791"
          target="_blank"
          rel="noopener noreferrer" 
          className="primary-button inline-block mx-auto"
        >
          {dictionary.common.download}
        </a>
      </div>
    </div>
  );
}
