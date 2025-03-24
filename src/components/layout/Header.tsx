"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { routes, Locale, localeNames } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';
import { Dictionary } from '@/lib/utils';

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Header({ locale, dictionary }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();

  // Get current route without locale prefix
  const currentRoute = pathname.split('/').slice(2).join('/');
  const nav = dictionary.navigation;

  const navigation = [
    { name: nav.home, href: `/${locale}` },
    { name: nav.features, href: `/${locale}/${routes[locale].features}` },
    { name: nav.environments, href: `/${locale}/${routes[locale].environments}` },
    { name: nav.reviews, href: `/${locale}/${routes[locale].reviews}` },
    { name: nav.contact, href: `/${locale}/${routes[locale].contact}` },
  ];

  const isActive = (path: string) => {
    if (path === `/${locale}` && pathname === `/${locale}`) return true;
    if (path !== `/${locale}` && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLangMenu = () => setLangMenuOpen(!langMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
      <nav className="container-custom flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5">
            <span className="sr-only">Splash Reader</span>
            <Image
              src="/images/logo-splash-reader.png"
              alt="Splash Reader Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">
              {mobileMenuOpen ? dictionary.common.close : dictionary.common.open}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6",
                isActive(item.href)
                  ? "text-brand-blue"
                  : "text-gray-900 dark:text-gray-100 hover:text-brand-blue dark:hover:text-brand-blue"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Language selector (desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
              onClick={toggleLangMenu}
            >
              {localeNames[locale]}
              <span className="sr-only">Toggle language menu</span>
              <svg
                className={cn("h-5 w-5 flex-none text-gray-400 transition", 
                  langMenuOpen ? "rotate-180" : "")}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {Object.entries(localeNames).map(([localeKey, localeName]) => {
                  // Construct the same path but with different locale
                  let href = `/${localeKey}`;
                  if (currentRoute) {
                    const routeKey = Object.entries(routes[locale]).find(
                      ([_, value]) => value === currentRoute
                    )?.[0] as keyof typeof routes[Locale];
                    
                    if (routeKey && routes[localeKey as Locale][routeKey]) {
                      href = `/${localeKey}/${routes[localeKey as Locale][routeKey]}`;
                    }
                  }

                  return (
                    <Link
                      key={localeKey}
                      href={href}
                      className={cn(
                        "block px-4 py-2 text-sm",
                        locale === localeKey
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      {localeName}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href={`/${locale}`} className="-m-1.5 p-1.5">
                <span className="sr-only">Splash Reader</span>
                <Image
                  src="/images/logo-splash-reader.png"
                  alt="Splash Reader Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">{dictionary.common.close}</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                        isActive(item.href)
                          ? "text-brand-blue"
                          : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                      )}
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {dictionary.common.selectLanguage || "Select Language"}:
                    </div>
                    {Object.entries(localeNames).map(([localeKey, localeName]) => {
                      // Construct the same path but with different locale
                      let href = `/${localeKey}`;
                      if (currentRoute) {
                        const routeKey = Object.entries(routes[locale]).find(
                          ([_, value]) => value === currentRoute
                        )?.[0] as keyof typeof routes[Locale];
                        
                        if (routeKey && routes[localeKey as Locale][routeKey]) {
                          href = `/${localeKey}/${routes[localeKey as Locale][routeKey]}`;
                        }
                      }

                      return (
                        <Link
                          key={localeKey}
                          href={href}
                          className={cn(
                            "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                            locale === localeKey
                              ? "bg-gray-50 dark:bg-gray-800 text-brand-blue"
                              : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                          )}
                          onClick={toggleMobileMenu}
                        >
                          {localeName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
