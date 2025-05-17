import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroSectionProps {
  contentVisible: boolean;
}

const HeroSection = ({contentVisible} : HeroSectionProps) => {
    const { scrollY } = useScroll();
    // 스크롤에 따른 투명도 변화
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: contentVisible ? 1 : 0,
            y: contentVisible ? 0 : 20
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          style={{ opacity }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            안녕하세요, 프론트엔드 개발자 노수민 입니다
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            사용자 경험을 중요시하는 프론트엔드 개발자입니다.<br />
            새로운 기술을 배우고 적용하는 것을 좋아합니다.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection