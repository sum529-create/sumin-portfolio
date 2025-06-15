import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
      'chart.js',
      'embla-carousel-react',
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
      // 번들 분석기 추가
      if (process.env.ANALYZE === 'true') {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: './bundle-analysis.html',
          })
        );
      }

      // 코드 스플리팅 최적화
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          common: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            priority: 10,
          },
          three: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: 'three',
            priority: 10,
          },
        },
      };

      // 프로덕션 빌드 최적화
      config.optimization.minimize = true;
      config.optimization.moduleIds = 'deterministic';
      config.optimization.runtimeChunk = 'single';
    }
    return config;
  },
};

export default nextConfig;
