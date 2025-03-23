// Define supported locales
export const i18n = {
    defaultLocale: 'en' as const,
    locales: ['en', 'fr', 'ja', 'ko'] as const,
  };
  
  // Type for locale
  export type Locale = (typeof i18n)['locales'][number];
  
  // Locale display names
  export const localeNames: Record<Locale, string> = {
    en: 'English',
    fr: 'Français',
    ja: '日本語',
    ko: '한국어',
  };
  
  // Export default locale as a convenience
  export const defaultLocale = i18n.defaultLocale;
  
  // Define route structure type
  export type Routes = {
    home: string;
    features: string;
    environments: string;
    reviews: string;
    contact: string;
  };
  
  // Define the English routes - these will be used for all languages
  const englishRoutes: Routes = {
    home: '',
    features: 'features',
    environments: 'environments',
    reviews: 'reviews',
    contact: 'contact',
  };
  
  // Generate routes for all locales by reusing the English routes
  export const routes: Record<Locale, Routes> = i18n.locales.reduce(
    (acc, locale) => ({
      ...acc,
      [locale]: englishRoutes,
    }),
    {} as Record<Locale, Routes>
  );