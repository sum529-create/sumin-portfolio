'use client';

import MainLayout from '@/components/layout/MainLayout';
import AnimatedBackground from '@/components/background/AnimatedBackground';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import { motion } from 'framer-motion';

export default function Home() {
  const title = "안녕하세요, 프론트엔드 개발자 Sumin입니다";

  return (
    <MainLayout>
      <AnimatedBackground />
      <ScrollAnimations>
        <div className="relative min-h-screen">
          {/* Hero Section */}
          <section className="h-screen flex items-center justify-center relative">
            <div className="container mx-auto px-4 relative z-20">
              <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="scroll-animate text-4xl md:text-6xl font-bold text-foreground mb-6">
                  {title}
                </h1>
                <p className="scroll-animate text-xl text-muted-foreground mb-8">
                  사용자 경험을 중요시하는 프론트엔드 개발자입니다.<br />
                  새로운 기술을 배우고 적용하는 것을 좋아합니다.
                </p>
                <div className="scroll-animate flex justify-center gap-4">
                  <motion.a
                    href="/projects"
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    프로젝트 보기
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    연락하기
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "About Me",
                  description: "프론트엔드 개발에 대한 열정과 사용자 중심의 개발 철학을 가지고 있습니다.",
                  icon: "👨‍💻"
                },
                {
                  title: "Skills",
                  description: "React, Next.js, TypeScript 등 최신 웹 기술 스택을 활용한 개발 경험이 있습니다.",
                  icon: "🛠️"
                },
                {
                  title: "Projects",
                  description: "다양한 프로젝트를 통해 실무 경험을 쌓았으며, 지속적으로 성장하고 있습니다.",
                  icon: "🚀"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="scroll-animate p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Preview Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="scroll-animate text-3xl font-bold text-center mb-12">주요 프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((_, i) => (
                <motion.div
                  key={i}
                  className="scroll-animate parallax relative group overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-video bg-card/50 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">프로젝트 {i + 1}</h3>
                    <p className="text-muted-foreground">
                      프로젝트 설명이 들어갈 자리입니다.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </ScrollAnimations>
    </MainLayout>
  );
}
