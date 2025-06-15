'use client';
import { ProjectSummary } from '@/types/project';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import type { Variants } from 'framer-motion';

// framer-motion을 동적 임포트로 변경
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

interface CardProps {
  data: ProjectSummary;
  i: number;
}

const getTextColor = (projectId: string) => {
  switch (projectId) {
    case 'uuno':
      return 'text-[#6366f1]';
    case 'medi-click':
      return 'text-[#3b82f6]';
    case 'green-deal':
      return 'text-[#34d399]';
    case 'lol-stats-tracker':
      return 'text-[#b33a3a]';
    case 'portfolio':
      return 'text-[#8b5cf6]';
    default:
      return 'text-white';
  }
};

function ProjectCard({ data, i }: CardProps) {
  const { id, title, subtitle, techStack, description, gradientColor, image } =
    data;

  const bottomGradientColor = gradientColor
    .replace('rgb(', 'rgba(')
    .replace(')', ', 0.3)');
  const leftGradientColor = gradientColor
    .replace('rgb(', 'rgba(')
    .replace(')', ', 0.4)');
  const hoverGradientColor = gradientColor
    .replace('rgb(', 'rgba(')
    .replace(')', ', 0.8)');

  return (
    <Link
      href={`/projects/${id}`}
      aria-label={`${id} 프로젝트 상세 페이지로 이동`}
      className='group relative z-10 block'
      prefetch={false}
    >
      <Suspense
        fallback={
          <div className='h-[360px] w-[600px] animate-pulse rounded-[20px] bg-gray-200' />
        }
      >
        <MotionDiv
          className={`card-container-${i} relative mb-[-120px] flex justify-center overflow-hidden pt-28`}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ amount: 0.8 }}
        >
          {/* 배경 그라데이션 */}
          <MotionDiv
            className='absolute inset-0 mt-28 w-full'
            style={{
              clipPath: `path("M 0 303.5 C 0 292.454 18.4 285.101 41 283.5 L 942 219.5 C 961.5 218.033 983 228.454 983 239.5 L 1024 430 C 1024 441.046 1004 450 983 450 L 41 450 C 18.4 450 0 441.046 0 430 Z")`,
              background: `linear-gradient(306deg, ${bottomGradientColor}, transparent)`,
            }}
          />

          {/* 프로젝트 카드 */}
          <MotionDiv
            variants={cardVariants}
            className='relative z-10 flex h-[360px] w-[600px] overflow-hidden rounded-[20px] bg-[#f5f5f5]'
            style={{
              boxShadow: `0 0 0 1px ${leftGradientColor}, 0 8px 32px rgba(0,0,0,0.3)`,
            }}
            whileHover={{
              scale: 1.03,
              y: -40,
              boxShadow: `0 0 50px ${hoverGradientColor}, 0 15px 50px rgba(0,0,0,0.4)`,
              transition: {
                duration: 0.2,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 200,
              },
              rotate: 0,
            }}
          >
            {/* 메인 이미지 */}
            <Image
              className='h-full w-full object-cover'
              src={image}
              alt={`${title} 프로젝트 스크린샷`}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority={i < 2}
              loading={i < 2 ? 'eager' : 'lazy'}
              quality={75}
              placeholder='blur'
              blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
            />

            {/* 좌측 그라데이션 오버레이 */}
            <div
              className='absolute inset-0 w-full'
              style={{
                background: `linear-gradient(to right, rgba(0,0,0, 0.85) 40%, transparent)`,
              }}
            />

            {/* 텍스트 콘텐츠 */}
            <div className='absolute left-6 top-1/2 -translate-y-1/2 text-white'>
              <h3 className={`mb-2 text-2xl font-bold ${getTextColor(id)}`}>
                {title}
              </h3>
              <p className='mb-2 text-sm text-white/85'>{subtitle}</p>
              <p className='mb-2 text-xs text-white/70'>{techStack}</p>
              <div className='text-xs text-white/60'>
                {description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </Suspense>
    </Link>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default dynamic(() => Promise.resolve(ProjectCard), {
  ssr: false,
  loading: () => (
    <div className='h-[360px] w-[600px] animate-pulse rounded-[20px] bg-gray-200' />
  ),
});
