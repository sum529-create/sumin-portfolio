'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationsProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollAnimations({ children, className = '' }: ScrollAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 요소들이 화면에 들어올 때 페이드인 효과
    const elements = container.querySelectorAll('.scroll-animate');
    
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.2, // 순차적 애니메이션을 위한 딜레이
        }
      );
    });

    // 스크롤 진행도에 따른 패럴랙스 효과
    const parallaxElements = container.querySelectorAll('.parallax');
    
    parallaxElements.forEach((element) => {
      gsap.to(element, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      // 클린업: ScrollTrigger 인스턴스 제거
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
} 