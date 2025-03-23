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
  const { title, description, keywords } = dictionary.meta.reviews;
  
  return createMetadata({
    title,
    description,
    keywords,
    path: 'reviews',
    locale,
  });
}

export default async function ReviewsPage({ params }: { params: { lang: string } }) {
  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  const reviews = dictionary.reviews;
  
  const reviewsList = [
    {
      quote: reviews.review1.quote,
      author: reviews.review1.author,
      image: "/images/radiant-black-two-page-screenshot-2.png",
      rating: 5,
    },
    {
      quote: reviews.review2.quote,
      author: reviews.review2.author,
      image: "/images/sands-map-two-page-screenshot.png",
      rating: 5,
    },
    {
      quote: reviews.review3.quote,
      author: reviews.review3.author,
      image: "/images/moon-pheonix-two-page-screenshot.png",
      rating: 5,
    },
    {
      quote: "The panoramic view feature is absolutely game-changing for comic reading!",
      author: "Comic Enthusiast",
      image: "/images/tokyo-multipage-panorama-screenshot.png",
      rating: 5,
    },
    {
      quote: "Being able to read multiple comics side by side is perfect for comparing storylines.",
      author: "Marvel Fan",
      image: "/images/three-windows-side-by-side-2-page-screenshot.png",
      rating: 5,
    },
    {
      quote: "The virtual shelf organization makes finding my favorite comics so easy.",
      author: "Digital Collector",
      image: "/images/store-multipage-two-page-screenshot.png",
      rating: 5,
    }
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "text-brand-yellow" : "text-gray-300"}>★</span>
    ));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-deep to-brand-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{reviews.hero.title}</h1>
            <p className="text-xl text-gray-200 mb-8">{reviews.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-deep">{reviews.featured.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsList.map((review, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={review.image} 
                    alt={`Review by ${review.author}`}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex text-lg mb-2">
                    {renderStars(review.rating)}
                  </div>
                  <blockquote className="text-lg font-medium italic mb-4">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <p className="text-gray-600 font-semibold">- {review.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-deep">{reviews.community.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{reviews.community.description}</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://discord.gg/wkKUTd6vbP"
                target="_blank"
                rel="noopener noreferrer" 
                className="secondary-button flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3846-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
                {reviews.community.discord}
              </a>
              <a 
                href="https://www.facebook.com/splashreader"
                target="_blank"
                rel="noopener noreferrer" 
                className="secondary-button flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
                {reviews.community.facebook}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-deep">{reviews.submit.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{reviews.submit.description}</p>
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
