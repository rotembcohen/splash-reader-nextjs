import Image from 'next/image';
import Link from 'next/link';
import { routes, Locale } from '@/lib/i18n/config';
import { Dictionary } from '@/lib/utils';

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Footer({ locale, dictionary }: FooterProps) {
  const common = dictionary.common;
  const nav = dictionary.navigation;
  const contactInfo = {
    email: 'support@splashreader.com',
    discord: 'https://discord.gg/wkKUTd6vbP',
    facebook: 'https://www.facebook.com/splashreader',
  };

  const navigation = [
    { name: nav.home, href: `/${locale}` },
    { name: nav.features, href: `/${locale}/${routes[locale].features}` },
    { name: nav.environments, href: `/${locale}/${routes[locale].environments}` },
    { name: nav.reviews, href: `/${locale}/${routes[locale].reviews}` },
    { name: nav.contact, href: `/${locale}/${routes[locale].contact}` },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-5">
              <Image
                src="/images/logo-splash-reader.png"
                alt="Splash Reader Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              {dictionary.common.appDescription || "Experience comics like never before with Splash Reader, the first VR comic reader built from the ground up for Apple Vision Pro."}
            </p>
            <div className="mt-6">
              <Link 
                href="https://apps.apple.com/us/app/splash-reader/id6477877791"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/download-on-the-app-store-button.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-auto w-32"
                />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">{nav.navigation || "Navigation"}</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-brand-blue transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{common.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-brand-blue transition">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.33.33 0 0 0-.35.15c-.154.27-.298.55-.424.839-.128.29-.245.577-.35.862 1.54.3 3.01.736 4.4 1.3.231.09.3.36.136.536a13.98 13.98 0 0 0-4.887 2.39 15.52 15.52 0 0 0-8.961 0 13.98 13.98 0 0 0-4.887-2.39c-.163-.176-.095-.446.136-.535 1.39-.564 2.86-1 4.4-1.3-.105-.286-.222-.572-.35-.863a18.58 18.58 0 0 0-.424-.839.33.33 0 0 0-.35-.15c-1.716.29-3.355.8-4.885 1.49C3.81 4.555 2.33 8.277 1.5 11.913c0 0-.624 1.095-.202 4.04.34 2.373 1.293 4.588 2.879 6.4.316.359.682.073 1.02-.223 1.225-.89 2.316-1.935 3.256-3.112.148-.186.048-.462-.153-.595-1.02-.674-1.893-1.505-2.6-2.46-.19-.257-.057-.607.237-.738.078-.035.162-.06.248-.07 2.244.415 4.575.629 6.915.629s4.671-.214 6.915-.63c.086.01.17.036.248.071.294.13.428.481.237.738-.707.955-1.58 1.786-2.6 2.46-.201.133-.301.409-.153.595.94 1.177 2.03 2.223 3.256 3.112.338.296.704.582 1.02.223 1.586-1.812 2.539-4.027 2.879-6.4.422-2.945-.202-4.04-.202-4.04-.786-3.595-2.254-7.277-4.04-10.293zm-7.564 8.627c0 1.212-.76 2.22-1.759 2.22-.999 0-1.814-1.008-1.814-2.22s.76-2.219 1.759-2.219c.999 0 1.814 1.007 1.814 2.22zm6.619 0c0 1.212-.76 2.22-1.759 2.22-.999 0-1.814-1.008-1.814-2.22s.76-2.219 1.759-2.219c.999 0 1.814 1.007 1.814 2.22z" />
                </svg>
                <a 
                  href={contactInfo.discord} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-blue transition"
                >
                  Discord
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a 
                  href={contactInfo.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-blue transition"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Device Compatibility */}
          <div>
            <h3 className="text-lg font-bold mb-4">{dictionary.common.compatibility || "Compatibility"}</h3>
            <div className="text-gray-400 space-y-1">
              <p>
                <span className="font-semibold text-white">Devices:</span> Apple Vision Pro
              </p>
              <p>
                <span className="font-semibold text-white">OS:</span> VisionOS
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            {common.copyright}
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-gray-500 hover:text-brand-blue text-sm transition">
              {dictionary.common.privacyPolicy || "Privacy Policy"}
            </a>
            <a href="#terms" className="text-gray-500 hover:text-brand-blue text-sm transition">
              {dictionary.common.termsOfService || "Terms of Service"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
