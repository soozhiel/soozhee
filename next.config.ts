import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/transformative-design',
        destination: 'https://transformative-design.vercel.app',
        permanent: true,
      },
      {
        source: '/transformative-design/:path*',
        destination: 'https://transformative-design.vercel.app',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
