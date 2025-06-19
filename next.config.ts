import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos'] // <-- Allow external image host
  }
};

export default nextConfig;
