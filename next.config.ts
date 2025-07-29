import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distdir: 'dist',
  images: {
   
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
      },
    ],
  },
};

export default nextConfig;
