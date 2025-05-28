'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from '@studio-freight/lenis';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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
  scaleX?: number;
  transformOrigin?: string;
}

export default function ScrollAnimations({
  children,
  className = '',
}: ScrollAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const splitInstance: SplitText[] = [];

  const isMobile = () => useMediaQuery('(max-width: 768px)');

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
    const handleRef = (time: number) => {
      lenisRef.current?.raf(time * 1000);
    };
    gsap.ticker.add(handleRef);

    // ScrollTrigger와 Lenis 연결
    ScrollTrigger.refresh();

    ScrollTrigger.create({
      trigger: '.skill-box',
      start: 'top center',
      onEnter: () => {
        gsap.set('.skill-box', { zIndex: 10, delay: 1 });
      },
      onLeaveBack: () => {
        gsap.set('.skill-box', { zIndex: 0 });
      },
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

      // 섹션 내부 문 열림 애니메이션
      const doors = section.querySelectorAll('.scroll-door-animate');
      if (!isMobile && doors.length > 0) {
        const doorTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'center center+=20%',
            end: 'top top',
            toggleActions: 'play none none reverse',
          },
        });

        // 문짝 동시 사라지기
        const doorLeft = section.querySelector('[data-direction="doorLeft"]');
        const doorRight = section.querySelector('[data-direction="doorRight"]');

        if (doorLeft) {
          doorTimeline.fromTo(
            doorLeft,
            {
              opacity: 1,
              scaleX: 1,
              transformOrigin: 'left center',
            },
            {
              opacity: 1,
              scaleX: 0,
              transformOrigin: 'left center',
              duration: 0.8,
              ease: 'power2.inOut',
            },
            0
          );
        }

        if (doorRight) {
          doorTimeline.fromTo(
            doorRight,
            {
              opacity: 1,
              scaleX: 1,
              transformOrigin: 'right center',
            },
            {
              opacity: 1,
              scaleX: 0,
              transformOrigin: 'right center',
              duration: 0.8,
              ease: 'power2.inOut',
            },
            0
          );
        }

        // 콘텐츠 조회
        const doorContent = section.querySelector(
          '[data-direction="doorContent"]'
        );
        if (!isMobile && doorContent) {
          doorTimeline.fromTo(
            doorContent,
            { scale: 0.9, opacity: 0, y: 10 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'back.out(1.2)',
            },
            '>'
          );
        }
      }

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
      splitInstance.forEach((split) => split.revert());
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
