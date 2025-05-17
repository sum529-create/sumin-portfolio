'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

interface ScrollAnimationsProps {
  children: React.ReactNode;
  className?: string;
}

interface AnimationVars {
  opacity: number;
  x?: number;
  y?: number;
  rotateX?: number;
  scale?: number;
}

export default function ScrollAnimations({ children, className = '' }: ScrollAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 스크롤 스무딩 초기화
    smootherRef.current = ScrollSmoother.create({
      wrapper: container,
      content: container.firstElementChild as HTMLElement,
      smooth: 1.5,
      effects: true,
    });

    // 섹션별 애니메이션 설정
    const sections = container.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      // 섹션 진입 애니메이션
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=10%',
            end: 'top center',
            toggleActions: 'play none none reverse',
            scrub: 1,
          },
        }
      );

      // 섹션 내부 요소들의 애니메이션
      const elements = section.querySelectorAll('.scroll-animate');
      
      elements.forEach((element, i) => {
        const direction = element.getAttribute('data-direction') || 'up';
        const delay = i * 0.2;
        
        let fromVars: AnimationVars = { opacity: 0 };
        let toVars: AnimationVars = { opacity: 1 };
        
        // 방향에 따른 초기 위치 설정
        switch(direction) {
          case 'left':
            fromVars = { ...fromVars, x: -100 };
            toVars = { ...toVars, x: 0 };
            break;
          case 'right':
            fromVars = { ...fromVars, x: 100 };
            toVars = { ...toVars, x: 0 };
            break;
          case 'up':
            fromVars = { ...fromVars, y: 50 };
            toVars = { ...toVars, y: 0 };
            break;
          case 'down':
            fromVars = { ...fromVars, y: -50 };
            toVars = { ...toVars, y: 0 };
            break;
        }

        gsap.fromTo(
          element,
          fromVars,
          {
            ...toVars,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom-=10%',
              end: 'top center',
              toggleActions: 'play none none reverse',
              scrub: 1,
            },
            delay,
          }
        );
      });

      // 텍스트 스플릿 애니메이션
      const textElements = section.querySelectorAll('.split-text');
      textElements.forEach((element) => {
        const split = new SplitText(element as HTMLElement, { type: 'chars,words' });
        
        gsap.from(split.chars, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: 0.02,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=10%',
            end: 'top center',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });

    // 패럴랙스 효과
    const parallaxElements = container.querySelectorAll('.parallax');
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute('data-speed') || 1;
      
      gsap.to(element, {
        yPercent: 30 * Number(speed),
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
      // 클린업
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      smootherRef.current?.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={`scroll-container ${className}`}>
      <div className="scroll-content">
        {children}
      </div>
    </div>
  );
} 