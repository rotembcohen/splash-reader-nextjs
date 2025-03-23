import { Locale, i18n } from './config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),
  ko: () => import('./dictionaries/ko.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  // Default to English if the locale isn't supported
  if (!i18n.locales.includes(locale)) {
    return dictionaries.en();
  }
  
  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    return dictionaries.en();
  }
};
