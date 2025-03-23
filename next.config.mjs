/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
