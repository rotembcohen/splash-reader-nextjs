"use client";

import Image, { ImageProps } from 'next/image';
import { getImagePath } from '@/lib/hooks/useImagePath';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

/**
 * A wrapper around Next.js Image component that ensures correct path resolution
 * for all environments, especially GitHub Pages + internationalization
 */
export default function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
  // Get the properly formatted image path
  const optimizedSrc = getImagePath(src);

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      {...props}
    />
  );
}
