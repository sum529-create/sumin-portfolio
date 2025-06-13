'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useLoadingStore } from '@/store/loadingStore';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import HeroSection from '@/components/sections/HeroSection';

// 동적 임포트로 변경
const IntroSection = dynamic(
  () => import('@/components/sections/IntroSection'),
  {
    loading: () => (
      <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
    ),
    ssr: false,
  }
);

const SkillsSection = dynamic(
  () => import('@/components/sections/SkillsSection'),
  {
    loading: () => (
      <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
    ),
    ssr: false,
  }
);

const ExperienceSection = dynamic(
  () => import('@/components/sections/ExperienceSection'),
  {
    loading: () => (
      <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
    ),
    ssr: false,
  }
);

const BlogSection = dynamic(() => import('@/components/sections/BlogSection'), {
  loading: () => <div className='h-96 animate-pulse rounded-lg bg-gray-200' />,
  ssr: false,
});

const ProjectSection = dynamic(
  () => import('@/components/sections/ProjectSection'),
  {
    loading: () => (
      <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
    ),
    ssr: false,
  }
);

const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection'),
  {
    loading: () => (
      <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
    ),
    ssr: false,
  }
);

export default function HomePage() {
  const contentVisible = useLoadingStore((state) => state.contentVisible);

  return (
    <div
      className='relative z-10 overflow-x-hidden overflow-y-hidden transition-opacity duration-1000'
      style={{
        opacity: contentVisible ? 1 : 0,
      }}
    >
      <ScrollAnimations>
        <div className='mx-auto w-full max-w-5xl'>
          <HeroSection contentVisible={contentVisible} />

          <Suspense
            fallback={
              <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
            }
          >
            <IntroSection />
          </Suspense>

          <Suspense
            fallback={
              <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
            }
          >
            <SkillsSection />
          </Suspense>

          <Suspense
            fallback={
              <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
            }
          >
            <ExperienceSection />
          </Suspense>

          <Suspense
            fallback={
              <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
            }
          >
            <BlogSection />
          </Suspense>

          <Suspense
            fallback={
              <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
            }
          >
            <ProjectSection />
          </Suspense>

          <Suspense
            fallback={
              <div className='h-96 animate-pulse rounded-lg bg-gray-200' />
            }
          >
            <ContactSection />
          </Suspense>
        </div>
      </ScrollAnimations>
    </div>
  );
}
