/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'splash-reader-nextjs';

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
    unoptimized: true, // Required for static export
    remotePatterns: [],
  },
  output: 'export', // For static generation
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // Add trailing slashes for better static site support
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '', // Must start with a slash for GitHub Pages
};

export default nextConfig;
