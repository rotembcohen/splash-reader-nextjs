"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dictionary } from '@/lib/utils';
import { Locale, routes } from '@/lib/i18n/config';
import OptimizedImage from '@/components/ui/OptimizedImage';

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const hero = dictionary.home.hero;
  
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32 bg-gradient-to-r from-blue-deep to-brand-blue text-white">
      {/* Background circular gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-electric-purple/20 via-transparent to-transparent opacity-40"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="title-accent block mb-3">{hero.title}</span>
            <span className="tech-text">{hero.subtitle}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {dictionary.home.intro.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              href="https://apps.apple.com/us/app/splash-reader/id6477877791"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <OptimizedImage
                src="/images/download-on-the-app-store-button.png"
                alt="Download on the App Store"
                width={180}
                height={54}
                className="h-auto w-44"
              />
            </Link>
            
            <Link 
              href={`/${locale}/${routes[locale].features}`}
              className="secondary-button"
            >
              {dictionary.common.learnMore}
            </Link>
          </div>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          className="w-full lg:w-1/2 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/10 backdrop-blur-sm">
            <OptimizedImage
              src="/images/tokyo-multipage-panorama-screenshot.png"
              alt="Splash Reader Panoramic View"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,69.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}
