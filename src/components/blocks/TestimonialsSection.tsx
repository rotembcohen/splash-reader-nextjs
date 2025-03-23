"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dictionary } from '@/lib/utils';
import { Locale, routes } from '@/lib/i18n/config';

type TestimonialsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function TestimonialsSection({ locale, dictionary }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = dictionary.reviews;
  
  const testimonials = [
    {
      quote: reviews.review1.quote,
      author: reviews.review1.author,
      image: "/images/radiant-black-two-page-screenshot-2.png"
    },
    {
      quote: reviews.review2.quote,
      author: reviews.review2.author,
      image: "/images/sands-map-two-page-screenshot.png"
    },
    {
      quote: reviews.review3.quote,
      author: reviews.review3.author,
      image: "/images/moon-pheonix-two-page-screenshot.png"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-gray-900 to-blue-deep text-white relative overflow-hidden">
      {/* Background circular gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-electric-purple/10 via-transparent to-transparent opacity-40"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="title-accent">{reviews.hero.title}</span>
            </h2>
            <p className="text-lg text-gray-300">
              {reviews.hero.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index === activeIndex ? "block" : "hidden"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="overflow-hidden rounded-xl shadow-2xl border border-white/20">
                      <Image
                        src={testimonial.image}
                        alt={`Comic screenshot for ${testimonial.author}`}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <svg 
                      className="h-12 w-12 text-brand-yellow opacity-30 mb-4 mx-auto lg:mx-0" 
                      fill="currentColor" 
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.848 0 3-1.166 3-3 0-1.5-1.657-2.973-1.657-4.743 0-1.575 1.246-2.257 3.657-2.257v-6h-5zm12 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.848 0 3-1.166 3-3 0-1.5-1.657-2.973-1.657-4.743 0-1.575 1.246-2.257 3.657-2.257v-6h-5z"></path>
                    </svg>
                    
                  <blockquote className="text-xl md:text-2xl font-medium mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                    
                    <p className="font-semibold text-brand-yellow">
                      - {testimonial.author}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center mt-10 space-x-6">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous review"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? "bg-brand-yellow" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next review"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href={`/${locale}/${routes[locale].reviews}`}
            className="secondary-button inline-block"
          >
            {reviews.featured.title}
          </Link>
        </div>
      </div>
    </section>
  );
}
