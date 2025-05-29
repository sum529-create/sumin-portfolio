'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function ProjectSection() {
  return (
    <section id='projects' className='relative min-h-screen py-20'>
      <div className='px-4pb-[100px] container mx-auto max-w-full'>
        <SectionTitle
          title='Projects'
          subTitle='나의 프로젝트들'
          ariaLabel='프로젝트 섹션'
        />
        {food.map(([emoji, hueA, hueB], i) => (
          <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </div>
    </section>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i} item-center relative mb-[-120px] flex justify-center overflow-hidden pt-10`}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.8 }}
    >
      <div
        className='absolute inset-0 mt-12 w-full'
        style={{
          clipPath: `path("M 0 303.5 C 0 292.454 18.4 285.101 41 283.5 L 942 219.5 C 961.5 218.033 983 228.454 983 239.5 L 1024 430 C 1024 441.046 1004 450 983 450 L 41 450 C 18.4 450 0 441.046 0 430 Z")`,
          background,
        }}
      />
      <motion.div
        style={card}
        variants={cardVariants}
        className='flex h-[430px] w-[600px] items-center justify-center rounded-[20px] bg-[#f5f5f5]'
      >
        <img src={`/images/${emoji}.png`} alt={emoji} />
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

const hue = (h: number) => `hsl(${h}, 20%, 60%, 0.3)`;

/**
 * ==============   Styles   ================
 */

const card: React.CSSProperties = {
  boxShadow:
    '0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)',
  transformOrigin: '10% 60%',
};

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
  ['uuno', 220, 240],
  ['medi-click', 200, 220],
  ['green-deal', 160, 180],
  ['buzz-chatly', 170, 190],
  ['echo-wave', 340, 20],
  ['portfolio', 230, 270],
];
