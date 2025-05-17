'use client';

import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '@/components/background/AnimatedBackground';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // 초기 로딩 상태 설정
    document.body.style.overflow = 'hidden'; // 스크롤 방지

    // 배경 준비를 위한 약간의 지연
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      
      // 로딩이 끝난 후 콘텐츠를 표시하기 위한 약간의 추가 지연
      setTimeout(() => {
        setContentVisible(true);
        document.body.style.overflow = ''; // 스크롤 다시 활성화
      }, 100);
    }, 800); // 배경 애니메이션이 준비될 충분한 시간
    
    return () => {
      clearTimeout(loadingTimer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* 페이지 프리로더 */}
      <div 
        className="fixed inset-0 bg-[#050510] z-50 flex items-center justify-center transition-opacity duration-1000"
        style={{ 
          opacity: isLoading ? 1 : 0,
          visibility: isLoading ? 'visible' : 'hidden',
          transitionProperty: 'opacity, visibility',
          transitionDuration: '1s, 0s',
          transitionDelay: '0s, 1s'
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-6"></div>
          <p className="text-primary/80 animate-pulse">Loading...</p>
        </div>
      </div>
      
      <MainLayout>
        {/* AnimatedBackground를 절대 위치로 전체 화면  에 배치 */}
        <div className="fixed inset-0 w-screen h-screen overflow-hidden">
          <AnimatedBackground />
        </div>
        
        {/* 콘텐츠는 상대적 위치로 배경 위에 표시되며, 내용물은 container 클래스로 제한됨 */}
        <div 
          className="relative z-10 transition-opacity duration-1000"
          style={{ 
            opacity: contentVisible ? 1 : 0
          }}
        >
          <ScrollAnimations>
           <div className="relative">
              {/* Hero Section */}
              <section className="min-h-screen flex items-center justify-center relative">
                <div className="container mx-auto px-4 relative z-20">
                  <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: contentVisible ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <h1 className="split-text text-4xl md:text-6xl font-bold text-foreground mb-6">
                      안녕하세요, 프론트엔드 개발자 Sumin입니다
                    </h1>
                    <p className="split-text text-xl text-muted-foreground mb-8">
                      사용자 경험을 중요시하는 프론트엔드 개발자입니다.<br />
                      새로운 기술을 배우고 적용하는 것을 좋아합니다.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* About Section */}
              <section className="min-h-screen py-20 relative">
                <div className="container mx-auto px-4">
                  <h2 className="split-text text-3xl md:text-4xl font-bold text-center mb-12">
                    About Me
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="scroll-animate" data-direction="left">
                      <p className="text-lg text-muted-foreground">
                        프론트엔드 개발에 대한 열정과 사용자 중심의 개발 철학을 가지고 있습니다.
                        React, Next.js, TypeScript 등 최신 웹 기술 스택을 활용한 개발 경험이 있으며,
                        지속적으로 새로운 기술을 학습하고 적용하는 것을 즐깁니다.
                      </p>
                    </div>
                    <div className="scroll-animate" data-direction="right">
                      <div className="aspect-square bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-6xl">👨‍💻</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section className="min-h-screen py-20 relative">
                <div className="container mx-auto px-4">
                  <h2 className="split-text text-3xl md:text-4xl font-bold text-center mb-12">
                    Skills
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        category: "Frontend",
                        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                        icon: "🎨"
                      },
                      {
                        category: "Backend",
                        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
                        icon: "⚙️"
                      },
                      {
                        category: "Tools & Others",
                        skills: ["Git", "Docker", "AWS", "Figma"],
                        icon: "🛠️"
                      }
                    ].map((category, i) => (
                      <div
                        key={category.category}
                        className="scroll-animate bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-sm"
                        data-direction={i % 2 === 0 ? "left" : "right"}
                      >
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                        <ul className="space-y-2">
                          {category.skills.map((skill) => (
                            <li key={skill} className="text-muted-foreground">
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section className="min-h-screen py-20 relative">
                <div className="container mx-auto px-4">
                  <h2 className="split-text text-3xl md:text-4xl font-bold text-center mb-12">
                    Projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "포트폴리오 웹사이트",
                        description: "Next.js와 Three.js를 활용한 인터랙티브한 포트폴리오 웹사이트",
                        tech: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
                        image: "🎨"
                      },
                      {
                        title: "프로젝트 2",
                        description: "프로젝트 설명이 들어갈 자리입니다.",
                        tech: ["React", "Node.js", "MongoDB"],
                        image: "🚀"
                      }
                    ].map((project, i) => (
                      <div
                        key={project.title}
                        className="scroll-animate bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden"
                        data-direction={i % 2 === 0 ? "up" : "down"}
                      >
                        <div className="aspect-video bg-primary/10 flex items-center justify-center text-6xl">
                          {project.image}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className="min-h-screen py-20 relative">
                <div className="container mx-auto px-4">
                  <h2 className="split-text text-3xl md:text-4xl font-bold text-center mb-12">
                    Contact
                  </h2>
                  <div className="max-w-2xl mx-auto">
                    <div className="scroll-animate bg-card/50 backdrop-blur-sm rounded-lg p-8">
                      <p className="text-center text-lg text-muted-foreground mb-8">
                        새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면,
                        언제든지 연락주세요!
                      </p>
                      <div className="flex justify-center space-x-6">
                        <a
                          href="mailto:your.email@example.com"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          ✉️ Email
                        </a>
                        <a
                          href="https://github.com/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          📦 GitHub
                        </a>
                        <a
                          href="https://linkedin.com/in/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          💼 LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </ScrollAnimations>
        </div>
      </MainLayout>
    </>
  );
}