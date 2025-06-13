'use client';
import { motion } from 'framer-motion';

interface HeroAnimatedTextProps {
  isVisible: boolean;
}

const HeroAnimatedText = ({ isVisible }: HeroAnimatedTextProps) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      scale: 0.8,
      y: 20,
    },
    visible: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const text = `안녕하세요,\n프론트엔드 개발자\n'노수민' 입니다`;
  const lines = text.split('\n');

  return (
    <motion.div
      className='space-y-6'
      variants={containerVariants}
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`text-4xl font-bold md:text-6xl ${
            line.includes('프론트엔드')
              ? 'text-secondary'
              : line.includes("'노수민'")
                ? 'text-accent'
                : 'text-white'
          }`}
        >
          {line}
        </motion.div>
      ))}

      <motion.p variants={itemVariants} className='text-xl text-gray-300'>
        창의적인 웹 경험을 디자인하고 개발합니다
      </motion.p>
    </motion.div>
  );
};

export default HeroAnimatedText;
