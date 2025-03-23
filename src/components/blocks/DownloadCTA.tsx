"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dictionary } from '@/lib/utils';
import { Locale } from '@/lib/i18n/config';

type DownloadCTAProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function DownloadCTA({ locale, dictionary }: DownloadCTAProps) {
  const download = dictionary.home.download;
  
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-deep text-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 -left-32 w-64 h-64 rounded-full bg-brand-yellow opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-electric-purple opacity-20 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="bg-black/30 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12">
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {download.title}
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                {download.subtitle}
              </p>
              
              <div className="mb-6">
                <Link 
                  href="https://apps.apple.com/us/app/splash-reader/id6477877791"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/download-on-the-app-store-button.png"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="h-auto w-48"
                  />
                </Link>
              </div>
              
              <p className="text-sm text-gray-300">
                {download.compatibility}
              </p>
            </motion.div>
            
            {/* Image */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Device Frame */}
                <div className="relative rounded-xl overflow-hidden border-8 border-white/10 bg-black/40 shadow-2xl">
                  <Image
                    src="/images/work-and-read-comics-same-time-screenshot.png"
                    alt="Splash Reader on Apple Vision Pro"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Apple Vision Pro Logo */}
                <div className="absolute -bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                  <p className="text-xs font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Apple Vision Pro
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
