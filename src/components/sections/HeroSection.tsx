'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

const AnimatedText = dynamic(() => import('./HeroAnimatedText'), {
  ssr: true,
  loading: () => (
    <div className='space-y-6'>
      <div className='h-12 animate-pulse rounded bg-gray-800 md:h-16' />
      <div className='h-12 animate-pulse rounded bg-gray-800 md:h-16' />
      <div className='h-12 animate-pulse rounded bg-gray-800 md:h-16' />
    </div>
  ),
});

interface HeroSectionProps {
  contentVisible: boolean;
}

const HeroSection = ({ contentVisible }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // 스크롤에 따른 스케일과 블러 효과
  const scale = useTransform(scrollY, [0, 100], [1, 0.8]);
  const blurFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  const y = useTransform(scrollY, [0, 100], [0, 50]);

  // 페이지 로드 시 맨 상단으로 스크롤
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (contentVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [contentVisible]);

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-center justify-center'
      style={{ contentVisibility: 'auto' }}
    >
      <div className='container relative z-20 mx-auto max-w-full px-4'>
        <motion.div
          className='mx-auto max-w-4xl text-left'
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.95,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            scale,
            filter: blurFilter,
            y,
          }}
        >
          <Suspense
            fallback={
              <div className='space-y-6'>
                <div className='h-12 animate-pulse rounded bg-gray-800 md:h-16' />
                <div className='h-12 animate-pulse rounded bg-gray-800 md:h-16' />
                <div className='h-12 animate-pulse rounded bg-gray-800 md:h-16' />
              </div>
            }
          >
            <AnimatedText isVisible={isVisible} />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
