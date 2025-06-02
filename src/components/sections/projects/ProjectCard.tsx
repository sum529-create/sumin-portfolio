'use client';
import { ProjectData } from '@/constants/projects';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface CardProps {
  data: ProjectData;
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
    case 'buzz-chatly':
      return 'text-[#48bb78]';
    case 'echo-wave':
      return 'text-[#ec4899]';
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
    <motion.div
      className={`card-container-${i} relative mb-[-120px] flex justify-center overflow-hidden pt-28`}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.8 }}
    >
      {/* 배경 그라데이션 */}
      <motion.div
        className='absolute inset-0 mt-28 w-full'
        style={{
          clipPath: `path("M 0 303.5 C 0 292.454 18.4 285.101 41 283.5 L 942 219.5 C 961.5 218.033 983 228.454 983 239.5 L 1024 430 C 1024 441.046 1004 450 983 450 L 41 450 C 18.4 450 0 441.046 0 430 Z")`,
          background: `linear-gradient(306deg, ${bottomGradientColor}, transparent)`,
        }}
      />

      {/* 프로젝트 카드 */}
      <motion.div
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
        <img className='h-full w-full object-cover' src={image} alt={title} />

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
      </motion.div>
    </motion.div>
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

export default ProjectCard;
