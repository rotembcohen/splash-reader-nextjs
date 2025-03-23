import { getImageUrl } from '../utils';

/**
 * Custom function to get the correct image path
 * This ensures consistent handling of images in both development and production (GitHub Pages)
 * 
 * Note: We don't need a hook for App Router, as it's a server component
 * We just export a function that wraps getImageUrl for consistency
 */
export function getImagePath(path: string): string {
  return getImageUrl(path);
}
