'use client';

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import React, { useEffect, useState, useCallback, useMemo } from 'react';

interface HeroSectionProps {
  contentVisible?: boolean;
}

// 애니메이션 variants를 컴포넌트 외부로 이동하여 재렌더링 방지
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, y: 20 },
  visible: {
    scale: 1,
    y: 0,
  },
};

// 상수 값들을 컴포넌트 외부로 이동
const LINES = [
  '안녕하세요,',
  '프론트엔드 개발자',
  ['노수민', ' 입니다'],
] as const;

const HeroSection = ({ contentVisible = false }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const scale = useTransform(scrollY, [0, 100], [1, 0.8]);
  const blurFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  const y = useTransform(scrollY, [0, 100], [0, 50]);

  // 페이지 로드 시 맨 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // contentVisible 변경 감지
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (contentVisible) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 50); // 지연 시간 단축
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [contentVisible]);

  // 접근성을 위한 키보드 이벤트 핸들러
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsVisible(true);
    }
  }, []);

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-center justify-center'
      style={{ contentVisibility: 'auto' }}
      aria-labelledby='hero-heading'
    >
      <div
        className='container relative z-20 mx-auto max-w-full px-4'
        role='main'
      >
        <motion.div
          className='mx-auto max-w-4xl text-left md:text-center'
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.95,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            scale: prefersReducedMotion ? 1 : scale,
            filter: prefersReducedMotion ? 'none' : blurFilter,
            y: prefersReducedMotion ? 0 : y,
          }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <motion.div
            className='space-y-6'
            variants={prefersReducedMotion ? {} : containerVariants}
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <div
              role='heading'
              aria-level={1}
              id='hero-heading'
              className='space-y-4'
            >
              {LINES.map((line, index) => {
                const isLCPLine = index === 0;
                let textColorClass;
                let content;

                if (Array.isArray(line)) {
                  content = (
                    <>
                      <span className='text-5xl text-accent md:text-7xl'>
                        {line[0]}
                      </span>
                      <span className='text-white'>{line[1]}</span>
                    </>
                  );
                  textColorClass = '';
                } else {
                  // 일반 텍스트인 경우
                  content = line;
                  textColorClass = (line as string).includes('프론트엔드')
                    ? 'text-secondary'
                    : 'text-white';
                }

                const baseClasses = `text-4xl font-bold md:text-6xl ${textColorClass}`;

                return isLCPLine ? (
                  <div key={`hero-line-${index}`} className={baseClasses}>
                    {content}
                  </div>
                ) : (
                  <motion.div
                    key={`hero-line-${index}`}
                    variants={prefersReducedMotion ? {} : itemVariants}
                    className={baseClasses}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              variants={prefersReducedMotion ? {} : itemVariants}
              className='text-xl text-gray-300'
            >
              창의적인 웹 경험을 디자인하고 개발합니다
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
