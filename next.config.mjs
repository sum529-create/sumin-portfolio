import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      'gsap',
    ],
    webpackBuildWorker: true,
    turbotrace: {
      logLevel: 'error',
      contextDirectory: __dirname,
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  webpack: (config, { dev, isServer }) => {
    // 프로덕션 빌드에서만 적용
    if (!dev && !isServer) {
      // 프로덕션 빌드 최적화
      config.optimization.minimize = true;
      config.optimization.moduleIds = 'deterministic';
    }
    return config;
  },
};

export default nextConfig;
