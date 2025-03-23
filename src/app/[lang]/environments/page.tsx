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
  const { title, description, keywords } = dictionary.meta.environments;
  
  return createMetadata({
    title,
    description,
    keywords,
    path: 'environments',
    locale,
  });
}

export default async function EnvironmentsPage({ params }: { params: { lang: string } }) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const env = dictionary.environments;
  
  const environments = [
    {
      name: "Tokyo Cityscape",
      description: "Experience Tokyo's vibrant cityscape while reading your comics.",
      image: "/images/tokyo-multipage-panorama-screenshot.png",
    },
    {
      name: "Desert Landscape",
      description: "Immerse yourself in a serene desert setting with beautiful sand dunes.",
      image: "/images/sands-map-two-page-screenshot.png",
    },
    {
      name: "Cosmic Space",
      description: "Read among the stars with this cosmic-themed environment.",
      image: "/images/moon-pheonix-two-page-screenshot.png",
    },
    {
      name: "Virtual Library",
      description: "A classic library setting that feels like home for comic enthusiasts.",
      image: "/images/store-multipage-two-page-screenshot.png",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-deep to-brand-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{env.hero.title}</h1>
            <p className="text-xl text-gray-200 mb-8">{env.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-deep">{env.overview.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{env.overview.description}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-deep">{env.gallery.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environments.map((environment, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <Image 
                    src={environment.image} 
                    alt={environment.name}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{environment.name}</h3>
                  <p className="text-gray-600">{environment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-deep">{env.experience.title}</h2>
              <p className="text-lg text-gray-700 mb-6">{env.experience.description}</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>Immersive 360° environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>Adjustable lighting and ambiance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>Perfect for marathon reading sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>Matching environments to comic themes</span>
                </li>
              </ul>
            </div>
            <div>
              <Image 
                src="/images/environments-screen-screenshot.png" 
                alt="Environment Selection Screen"
                width={800}
                height={500}
                className="rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-deep">{env.upcoming.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{env.upcoming.description}</p>
            <a 
              href="https://apps.apple.com/us/app/splash-reader/id6477877791"
              target="_blank"
              rel="noopener noreferrer" 
              className="primary-button inline-block"
            >
              {dictionary.common.download}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
