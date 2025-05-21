'use client';

import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import { AnimatedBackground } from '@/components/background/AnimatedBackground';
import HeroSection from '@/components/sections/HeroSection';
import { experienceData } from '@/constants/experience';
import { projectData } from '@/constants/projects';

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
          className='relative z-10 transition-opacity duration-1000 overflow-x-hidden overflow-y-hidden'
          style={{
            opacity: contentVisible ? 1 : 0,
          }}
        >
          <ScrollAnimations>
            <div className="w-full max-w-5xl mx-auto">
              {/* Hero Section */}
              <section
                id='home'
                className='relative flex min-h-screen items-center justify-center'
              >
                <HeroSection contentVisible={contentVisible} />
              </section>

              {/* About Section */}
              <section id='about' className='relative min-h-screen py-20'>
                <div className='container mx-auto px-4 max-w-full'>
                  <h2 className='split-text mb-12 text-center text-3xl font-bold md:text-4xl'>
                    About Me
                  </h2>
                  <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
                    <div className='scroll-animate' data-direction='left'>
                      <ul className='space-y-2 text-lg text-gray-100'>
                        <li className="break-words">
                          사용자가 '편하다'고 느끼는 순간을 만드는 걸
                          좋아합니다.
                        </li>
                        <li className="break-words">
                          깔끔한 UI, 직관적인 UX를 고민하는 프론트엔드
                          개발자입니다.
                        </li>
                        <li className="break-words">
                          눈에 보이는 것부터 보이지 않는 흐름까지, 세심하게 신경
                          씁니다.
                        </li>
                        <li className="break-words">
                          요즘은 React, Next.js, TypeScript 기반으로 이것저것
                          시도해보고 있어요.
                        </li>
                        <li className="break-words">
                          새로운 기술을 배우는 걸 좋아하고, 기록하고 정리하는 걸
                          즐깁니다.
                        </li>
                      </ul>
                    </div>
                    <div className='scroll-animate' data-direction='right'>
                      <div className='flex aspect-square items-center justify-center rounded-lg bg-primary/10'>
                        <span className='text-6xl'>👨‍💻</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section id='skills' className='relative min-h-screen py-20'>
                <div className='container mx-auto px-4 max-w-full'>
                  <h2 className='split-text mb-12 text-center text-3xl font-bold md:text-4xl'>
                    Skills
                  </h2>
                  <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {[
                      {
                        category: 'Frontend',
                        skills: [
                          'React',
                          'Next.js',
                          'TypeScript',
                          'Tailwind CSS',
                        ],
                        icon: '🎨',
                      },
                      {
                        category: 'Tools & Others',
                        skills: ['Git', 'Figma'],
                        icon: '🛠️',
                      },
                    ].map((category, i) => (
                      <div
                        key={category.category}
                        className='scroll-animate rounded-lg bg-card/50 p-6 shadow-sm backdrop-blur-sm'
                        data-direction={i % 2 === 0 ? 'left' : 'right'}
                      >
                        <div className='mb-4 text-4xl'>{category.icon}</div>
                        <h3 className='mb-4 text-xl font-semibold break-words'>
                          {category.category}
                        </h3>
                        <ul className='space-y-2'>
                          {category.skills.map((skill) => (
                            <li key={skill} className='text-muted-foreground break-words'>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section id='experience' className='relative min-h-screen py-20'>
                <div className='container mx-auto px-4'>
                  <h2 className='split-text mb-12 text-center text-3xl font-bold md:text-4xl'>
                    Experience
                  </h2>
                  <div className='scroll-animate rounded-lg bg-card/50 p-8 backdrop-blur-sm'>
                    <div className='mb-4 flex flex-col md:flex-row md:items-center md:justify-between'>
                      <div>
                        <h3 className='mb-1 text-2xl font-semibold'>
                          {experienceData.company}
                        </h3>
                        <p className='mb-1 text-lg'>
                          {experienceData.department}
                        </p>
                        <p className='text-muted-foreground'>
                          {experienceData.period}
                        </p>
                      </div>
                    </div>

                    <p className='mb-4'>{experienceData.roleSummary}</p>

                    <ul className='mb-6 list-inside list-disc space-y-2 text-muted-foreground'>
                      {experienceData.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <div className='flex flex-wrap gap-2'>
                      {experienceData.techStack.map((tech) => (
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
              </section>

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
              <section id='contact' className='relative min-h-screen py-20'>
                <div className='container mx-auto px-4'>
                  <h2 className='split-text mb-12 text-center text-3xl font-bold md:text-4xl'>
                    Contact
                  </h2>
                  <div className='mx-auto max-w-2xl'>
                    <div className='scroll-animate rounded-lg bg-card/50 p-8 backdrop-blur-sm'>
                      <p className='mb-8 text-center text-lg text-muted-foreground'>
                        앞으로 더 나아가는 개발자가 되고 싶습니다.
                        <br />
                        함께할 기회가 있다면 언제든지 환영입니다.
                      </p>
                      <div className='flex justify-center space-x-6'>
                        <a
                          href='mailto:nosumin29@gmail.com'
                          aria-label='이메일 보내기'
                          className='text-primary transition-colors hover:text-primary/80'
                        >
                          ✉️ Email
                        </a>
                        <a
                          href='https://github.com/sum529-create'
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label='깃허브 이동하기'
                          className='text-primary transition-colors hover:text-primary/80'
                        >
                          📦 GitHub
                        </a>
                        <a
                          href='https://www.linkedin.com/in/%EC%88%98%EB%AF%BC-%EB%85%B8-077244364/'
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label='링크드인 이동하기'
                          className='text-primary transition-colors hover:text-primary/80'
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
