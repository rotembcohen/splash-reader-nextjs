import { Metadata } from 'next';
import { Inter, Montserrat, Orbitron, Bangers } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { i18n, Locale } from '@/lib/i18n/config';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

// Font configurations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const bangers = Bangers({
  weight: "400", 
  subsets: ['latin'],
  variable: '--font-bangers',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  // Validate the language parameter
  if (!i18n.locales.includes(params.lang as Locale)) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);
  
  return {
    title: {
      template: '%s | Splash Reader',
      default: dictionary.meta.home.title || 'Splash Reader - VR Comic Book Reader for Apple Vision Pro',
    },
    description: dictionary.meta.home.description || 'Experience comics like never before with Splash Reader, the first VR comic reader built from the ground up for Apple Vision Pro.',
    metadataBase: new URL('https://splashreader.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        fr: '/fr',
        ja: '/ja',
        ko: '/ko',
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Validate the language parameter
  const isValidLocale = i18n.locales.includes(params.lang as Locale);
  if (!isValidLocale) notFound();

  const locale = params.lang as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${montserrat.variable} ${orbitron.variable} ${bangers.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} dictionary={dictionary} />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
