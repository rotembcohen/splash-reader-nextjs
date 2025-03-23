export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'ja', 'ko'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const localeNames: { [key in Locale]: string } = {
  en: 'English',
  fr: 'Français',
  ja: '日本語',
  ko: '한국어',
};

export const defaultLocale = i18n.defaultLocale;

// Define route translation structure for type safety
export type Routes = {
  home: string;
  features: string;
  environments: string;
  reviews: string;
  contact: string;
};

// Route translations for all supported languages
export const routes: Record<Locale, Routes> = {
  en: {
    home: '',
    features: 'features',
    environments: 'environments',
    reviews: 'reviews',
    contact: 'contact',
  },
  fr: {
    home: '',
    features: 'fonctionnalites',
    environments: 'environnements',
    reviews: 'avis',
    contact: 'contact',
  },
  ja: {
    home: '',
    features: '機能',
    environments: '環境',
    reviews: 'レビュー',
    contact: 'お問い合わせ',
  },
  ko: {
    home: '',
    features: '기능',
    environments: '환경',
    reviews: '리뷰',
    contact: '연락처',
  },
};
