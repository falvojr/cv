import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/cv' : '',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
