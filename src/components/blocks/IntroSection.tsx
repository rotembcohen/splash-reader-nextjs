"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dictionary } from '@/lib/utils';
import { Locale } from '@/lib/i18n/config';

type IntroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function IntroSection({ locale, dictionary }: IntroSectionProps) {
  const intro = dictionary.home.intro;
  
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-blue">{intro.title}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              {intro.description}
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/images/two-windows-side-by-side-radiant-black-screenshot.png"
                alt="Read multiple comics simultaneously"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 tech-text text-blue-deep">
              {dictionary.features.multiComics.title}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {dictionary.features.multiComics.description}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                CBZ
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                CBR
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue">
                PDF
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-electric-purple/10 text-electric-purple">
                VisionOS
              </span>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mt-20">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 tech-text text-blue-deep">
              {dictionary.features.panoramic.title}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {dictionary.features.panoramic.description}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-electric-purple/10 text-electric-purple">
                {dictionary.features.exclusive || "Exclusive Feature"}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-comic-red/10 text-comic-red">
                {dictionary.features.immersive || "Immersive"}
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/images/radiant-black-two-page-screenshot.png"
                alt="Panoramic view of comics"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
