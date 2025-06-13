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
      'three',
      'react-icons',
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
      // 번들 분석기 활성화
      const BundleAnalyzerPlugin = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      });
      config.plugins.push(BundleAnalyzerPlugin);

      // 코드 스플리팅 최적화
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          // 프레임워크 코드 분리
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // 애니메이션 관련 코드 분리
          animations: {
            name: 'animations',
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            priority: 30,
            enforce: true,
          },
          // 3D 관련 코드 분리
          three: {
            name: 'three',
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            priority: 20,
            enforce: true,
          },
          // 공통 컴포넌트
          components: {
            name: 'components',
            test: /[\\/]components[\\/]/,
            priority: 10,
            enforce: true,
          },
          // 나머지 node_modules
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace('@', '')}`;
            },
            priority: 5,
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
