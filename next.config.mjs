/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
    unoptimized: true, // For static export
  },
  output: 'export', // For static generation
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // Add trailing slashes for better static site support
  basePath: isProd ? '/splash-reader-nextjs' : '',
  assetPrefix: isProd ? '/splash-reader-nextjs' : '', // Fixed for next/font compatibility
};

export default nextConfig;
