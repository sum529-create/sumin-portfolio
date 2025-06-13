'use client';

import ScrollAnimations from '@/components/animations/ScrollAnimations';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectSection from '@/components/sections/ProjectSection';
import { useLoadingStore } from '@/store/loadingStore';
import BlogSection from '@/components/sections/BlogSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  const contentVisible: boolean = useLoadingStore(
    (state: { contentVisible: boolean }) => state.contentVisible
  );
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
            <ExperienceSection />

            {/* blog Section */}
            <BlogSection />

            {/* Projects Section */}
            <ProjectSection />

            {/* Contact Section */}
            <ContactSection />
          </div>
        </ScrollAnimations>
      </div>
    </>
  );
}
