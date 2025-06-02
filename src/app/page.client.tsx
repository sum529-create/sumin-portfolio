'use client';

import ScrollAnimations from '@/components/animations/ScrollAnimations';
import HeroSection from '@/components/sections/HeroSection';
import { experienceData } from '@/constants/experience';
import { Button } from '@/components/ui/button';
import IntroSection from '@/components/sections/IntroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectSection from '@/components/sections/ProjectSection';
import { useLoadingStore } from '@/store/loadingStore';

export default function HomePage() {
  const contentVisible = useLoadingStore((state) => state.contentVisible);
  return (
    <>
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

            {/* blog Section */}
            <section id='blog' className='relative min-h-screen py-20'>
              <div className='container mx-auto max-w-full px-4'>
                <h2 className='split-text mb-12 text-center text-3xl font-bold md:text-4xl'>
                  Blog
                </h2>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                  {[
                    {
                      category: '제목01',
                      content: '이것은 프론트엔드 기술 블로그입니다.',
                      icon: '🎨',
                    },
                    {
                      category: '제목02',
                      content: '테스트입니다.',
                      icon: '🛠️',
                    },
                    {
                      category: '제목03',
                      content: '테스트입니다.',
                      icon: '💻',
                    },
                  ].map((category, i) => (
                    <div
                      key={category.category}
                      className='scroll-animate rounded-lg bg-card/50 p-6 shadow-sm backdrop-blur-sm'
                      data-direction={
                        i === 0 ? 'left' : i === 1 ? 'up' : 'right'
                      }
                    >
                      <div className='mb-4 text-4xl'>{category.icon}</div>
                      <h3 className='mb-4 break-words text-xl font-semibold'>
                        {category.category}
                      </h3>
                      <p className='break-words text-muted-foreground'>
                        {category.content}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='mt-8 flex justify-center'>
                  <Button>더 보러가기</Button>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <ProjectSection />

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
    </>
  );
}
