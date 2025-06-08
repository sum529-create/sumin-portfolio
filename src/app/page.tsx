'use client';

import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import { AnimatedBackground } from '@/components/background/AnimatedBackground';
import HeroSection from '@/components/sections/HeroSection';
import { experienceData } from '@/constants/experience';
import { projectData } from '@/constants/projects';
import { Button } from '@/components/ui/button';
import IntroSection from '@/components/sections/IntroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

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
        className='fixed inset-0 z-50 flex items-center justify-center bg-[#050510] transition-opacity duration-1000'
        role='progressbar'
        aria-busy={isLoading}
        aria-label='페이지 로딩 중'
        style={{
          opacity: isLoading ? 1 : 0,
          visibility: isLoading ? 'visible' : 'hidden',
          transitionProperty: 'opacity, visibility',
          transitionDuration: '1s, 0s',
          transitionDelay: '0s, 1s',
        }}
      >
        <div className='flex flex-col items-center'>
          <div className='mb-6 h-16 w-16 animate-spin rounded-full border-4 border-b-transparent border-l-transparent border-r-transparent border-t-primary'></div>
          <p className='animate-pulse text-primary/80'>Loading...</p>
        </div>
      </div>

      <MainLayout>
        {/* AnimatedBackground를 절대 위치로 전체 화면에 배치 */}
        <div className='fixed inset-0 h-screen overflow-hidden'>
          <AnimatedBackground />
        </div>

        {/* 콘텐츠는 상대적 위치로 배경 위에 표시되며, 내용물은 container 클래스로 제한됨 */}
        <div
          className='relative z-10 overflow-x-hidden overflow-y-hidden transition-opacity duration-1000'
          style={{
            opacity: contentVisible ? 1 : 0,
          }}
        >
          <ScrollAnimations>
            <div className='mx-auto w-full max-w-5xl'>
              {/* Hero Section */}
              <HeroSection contentVisible={contentVisible} />

              {/* Intro Section */}
              <IntroSection />

              {/* Skills Section */}
              <SkillsSection />

              {/* Experience Section */}
              <ExperienceSection />

              {/* blog Section */}
              <BlogSection />

              {/* Projects Section */}
              <section id='projects' className='relative min-h-screen py-20'>
                <div className='container mx-auto px-4'>
                  <h2 className='split-text mb-12 text-center text-3xl font-bold md:text-4xl'>
                    Projects
                  </h2>
                  <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {projectData.map((project, i) => (
                      <div
                        key={project.title}
                        className='scroll-animate overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm'
                        data-direction={i % 2 === 0 ? 'up' : 'down'}
                      >
                        <div className='flex aspect-video items-center justify-center bg-primary/10 text-6xl'>
                          {project.image}
                        </div>
                        <div className='p-6'>
                          <h3 className='mb-2 text-xl font-semibold'>
                            {project.title}
                          </h3>
                          <p className='mb-4 text-muted-foreground'>
                            {project.description}
                          </p>
                          <div className='flex flex-wrap gap-2'>
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className='rounded-full bg-primary/10 px-3 py-1 text-sm'
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
              <ContactSection />
            </div>
          </ScrollAnimations>
        </div>
      </MainLayout>
    </>
  );
}
