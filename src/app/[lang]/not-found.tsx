import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale, defaultLocale } from '@/lib/i18n/config';

export default async function NotFound({
  params = { lang: defaultLocale },
}: {
  params?: { lang: string };
}) {
  // Use default locale if the language is not valid or params is undefined
  const locale = (params?.lang || defaultLocale) as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-bold text-brand-blue mb-8">404</h1>
        <h2 className="text-3xl font-bold mb-4">
          {dictionary.notFound?.title || "Page Not Found"}
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          {dictionary.notFound?.message || 
           "The page you are looking for doesn't exist or has been moved."}
        </p>
        <Link 
          href={`/${locale || defaultLocale}`}
          className="primary-button inline-block"
        >
          {dictionary.common?.backToHome || "Back to Home"}
        </Link>
      </div>
    </div>
  );
}
