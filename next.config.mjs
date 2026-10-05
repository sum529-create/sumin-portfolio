import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages
  ? process.env.NEXT_PUBLIC_BASE_PATH || '/sumin-portfolio'
  : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages ? { output: 'export' } : {}),
  reactStrictMode: false,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: isGithubPages,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: '**.githubusercontent.com' },
      { protocol: 'https', hostname: 'assets.vercel.com' },
    ],
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
};

export default nextConfig;
