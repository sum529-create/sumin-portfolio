'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

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

export default function ScrollAnimations({
  children,
  className = '',
}: ScrollAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const splitInstance: SplitText[] = [];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Lenis 초기화 - 올바른 옵션 사용
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    // GSAP와 Lenis 연결
    const handleRef = (time:number) => {
      lenisRef.current?.raf(time * 1000);
    } 
    gsap.ticker.add(handleRef);

    // ScrollTrigger와 Lenis 연결
    ScrollTrigger.refresh();

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
        switch (direction) {
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

        gsap.fromTo(element, fromVars, {
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
        });
      });

      // 텍스트 스플릿 애니메이션
      const textElements = section.querySelectorAll('.split-text');
      textElements.forEach((element) => {
        const split = new SplitText(element as HTMLElement, {
          type: 'chars,words',
        });
        splitInstance.push(split);

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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitInstance.forEach((split) => split.revert())
      if (lenisRef.current) {
        lenisRef.current.destroy();
        gsap.ticker.remove(handleRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}
