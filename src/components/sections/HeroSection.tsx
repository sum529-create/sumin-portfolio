'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface HeroSectionProps {
  contentVisible: boolean;
}

const HeroSection = ({ contentVisible }: HeroSectionProps) => {
  const { scrollY } = useScroll();
  // 스크롤에 따른 투명도 변화
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const typingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typingRef.current) {
      const text = '프론트엔드 개발자';
      typingRef.current.textContent = '';

      const splitText = text.split('');
      splitText.forEach((char, i) => {
        gsap.to(typingRef.current, {
          delay: 0.5 + i * 0.1,
          duration: 0.5,
          onComplete: () => {
            if (typingRef.current) {
              typingRef.current.textContent += char;
            }
          },
        });
      });
    }
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 relative z-20 max-w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center break-words"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: contentVisible ? 1 : 0,
            y: contentVisible ? 0 : 20,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          style={{ opacity }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            안녕하세요,
            <br />
            저는 <span ref={typingRef} className='text-secondary' />
            <motion.span
              className='text-4xl font-bold text-secondary md:text-6xl'
              animate={{ opacity: [0, 1, 0] }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
              }}
            >
              |
            </motion.span>
            <br />
            <span className='text-accent'>노수민</span>입니다
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 mb-8 break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            창의적인 웹 경험을 디자인하고 개발합니다
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
