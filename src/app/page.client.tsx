'use client';

import { useLoadingStore } from '@/store/loadingStore';
import ScrollAnimations from '@/components/animations/ScrollAnimations';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectSection from '@/components/sections/ProjectSection';
import BlogSection from '@/components/sections/BlogSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import { useScrollStore } from '@/store/scrollStore';
import { useEffect } from 'react';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function HomePage() {
  const contentVisible = useLoadingStore((state) => state.contentVisible);
  const targetSection = useScrollStore((state) => state.targetSection);
  const { setActiveSection, scrollToSection } = useScrollToSection();

  useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
    }
  }, [targetSection, scrollToSection]);

  return (
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

          {/* Blog Section */}
          <BlogSection />

          {/* Projects Section */}
          <ProjectSection />

          {/* Contact Section */}
          <ContactSection />
        </div>
      </ScrollAnimations>
    </div>
  );
}
