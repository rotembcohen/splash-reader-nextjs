"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dictionary } from '@/lib/utils';
import { Locale } from '@/lib/i18n/config';

type GallerySectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function GallerySection({ locale, dictionary }: GallerySectionProps) {
  const [activeImage, setActiveImage] = useState(0);
  const environments = dictionary.environments;
  
  const galleryImages = [
    {
      src: "/images/environments-screen-screenshot.png",
      alt: "VR Environments",
      title: environments.overview.title,
      description: environments.overview.description,
    },
    {
      src: "/images/tokyo-multipage-panorama-screenshot.png",
      alt: "Panoramic View",
      title: dictionary.features.panoramic.title,
      description: dictionary.features.panoramic.description,
    },
    {
      src: "/images/store-multipage-two-page-screenshot.png",
      alt: "Virtual Library",
      title: dictionary.features.organization.title,
      description: dictionary.features.organization.description,
    },
    {
      src: "/images/three-windows-side-by-side-2-page-screenshot.png",
      alt: "Multiple Comics Side by Side",
      title: dictionary.features.multiComics.title,
      description: dictionary.features.multiComics.description,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-blue">
                {environments.gallery.title || "VR Environment Gallery"}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              {environments.gallery.description || "Browse our selection of reading environments"}
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Thumbnails */}
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  activeImage === index
                    ? "border-brand-blue shadow-lg transform scale-105"
                    : "border-gray-200 opacity-70"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={120}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="order-1 md:order-2 md:col-span-2">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 border border-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              key={activeImage} // Force re-animation when active image changes
            >
              <Image
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                width={900}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              className="text-center md:text-left mt-6 px-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              key={`text-${activeImage}`} // Force re-animation when active image changes
            >
              <h3 className="text-2xl font-bold mb-2 tech-text text-blue-deep">
                {galleryImages[activeImage].title}
              </h3>
              <p className="text-gray-700">
                {galleryImages[activeImage].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
