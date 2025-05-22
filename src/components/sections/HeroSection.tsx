'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  contentVisible: boolean;
}

const HeroSection = ({ contentVisible }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  // 스크롤에 따른 스케일과 블러 효과
  const scale = useTransform(scrollY, [0, 100], [1, 0.8]);
  const blurFilter = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(10px)']);
  const y = useTransform(scrollY, [0, 100], [0, 50]);

  useEffect(() => {
    if (contentVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [contentVisible]);

  const containerVariants = {
    hidden: {
      opacity:0,
    },
    visible: {
      opacity:1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      scale: 0.8,
      y: 20
    },
    visible: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const text = `안녕하세요,\n프론트엔드 개발자\n'노수민' 입니다`;
  const lines = text.split("\n");

  return (
    <section id='home' className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 relative z-20 max-w-full">
        <motion.div
          className="max-w-4xl mx-auto text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={{
            scale,
            filter: blurFilter,
            y
          }}
        >
          <motion.div className="space-y-6">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`text-4xl md:text-6xl font-bold ${
                  line.includes("프론트엔드") ? "text-secondary" :
                  line.includes("'노수민'") ? "text-accent" :
                  "text-white"
                }`}
              >
                {line}
              </motion.div>
            ))}
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300"
            >
              창의적인 웹 경험을 디자인하고 개발합니다
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
