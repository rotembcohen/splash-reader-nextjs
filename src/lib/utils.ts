import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to get image URL with proper base path
export function getImageUrl(path: string): string {
  const isProd = process.env.NODE_ENV === 'production';

  // Clean input path
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // In production, images need a different path due to locale prefixing
  if (isProd) {
    // For images in /public/images, we need to use a relative path strategy
    if (cleanPath.startsWith('/images/')) {
      return `../images${cleanPath.substring(7)}`;
    }
  }
  
  return cleanPath;
}

// SEO Helper functions
export function createMetadata({
  title,
  description,
  keywords,
  path = '',
  locale = 'en',
}: {
  title: string;
  description: string;
  keywords: string;
  path?: string;
  locale?: string;
}) {
  const baseUrl = 'https://splashreader.com';
  const url = `${baseUrl}/${locale}${path ? `/${path}` : ''}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/en${path ? `/${path}` : ''}`,
        'fr': `${baseUrl}/fr${path ? `/${path}` : ''}`,
        'ja': `${baseUrl}/ja${path ? `/${path}` : ''}`,
        'ko': `${baseUrl}/ko${path ? `/${path}` : ''}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Splash Reader',
      locale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-splash-reader.jpg`,
          width: 1200,
          height: 630,
          alt: 'Splash Reader - VR Comic Book Reader for Apple Vision Pro',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-splash-reader.jpg`],
    },
  };
}

// This function helps with loading type-safe translations
export type Dictionary = Record<string, any>;

export function getTranslation(dictionary: Dictionary, key: string, fallback: string = ''): string {
  const keys = key.split('.');
  let value = dictionary;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) return fallback;
  }
  
  return typeof value === 'string' ? value : fallback;
}
