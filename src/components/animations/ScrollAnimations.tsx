'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { useIsMobile } from '@/hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

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
  const doorTimelinesRef = useRef<gsap.core.Timeline[]>([]);

  const isMobile = useIsMobile();

  // 기본 애니메이션 설정 (한 번만 실행)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Lenis 초기화
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

    const skillBox = document.querySelector('.skill-box');
    if (skillBox) {
      ScrollTrigger.create({
        trigger: '.skill-box',
        start: 'top center',
        onEnter: () => {
          gsap.to('.skill-box', { zIndex: 10, delay: 1, duration: 0 });
        },
        onLeaveBack: () => {
          gsap.set('.skill-box', { zIndex: 0 });
        },
      });
    }

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
      if (lenisRef.current) {
        lenisRef.current.destroy();
        gsap.ticker.remove(handleRef);
      }
    };
  }, []); // 한 번만 실행

  // 문 애니메이션 별도 관리
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 기존 문 애니메이션 정리
    doorTimelinesRef.current.forEach((timeline) => {
      if (timeline && timeline.scrollTrigger) {
        timeline.scrollTrigger.kill();
      }
      if (timeline) {
        timeline.kill();
      }
    });
    doorTimelinesRef.current = [];

    // 모바일이 아닐 때만 문 애니메이션 생성
    if (!isMobile) {
      const sections = container.querySelectorAll('section');

      sections.forEach((section) => {
        const doors = section.querySelectorAll('.scroll-door-animate');

        if (doors?.length > 0) {
          const doorTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'center center+=20%',
              end: 'top top',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                // 애니메이션 시작 시에만 스크롤 일시 중지
                if (lenisRef.current) {
                  lenisRef.current.stop();
                  // 애니메이션 완료 후 스크롤 재개
                  setTimeout(() => {
                    if (lenisRef.current) {
                      lenisRef.current.start();
                    }
                  }, 1500);
                }
              },
            },
          });

          // 문짝 동시 사라지기
          const doorLeft = section.querySelector('[data-direction="doorLeft"]');
          const doorRight = section.querySelector(
            '[data-direction="doorRight"]'
          );

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
          if (doorContent) {
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

          // 타임라인을 배열에 저장
          doorTimelinesRef.current.push(doorTimeline);
        }
      });
    }

    return () => {
      // 문 애니메이션만 정리
      doorTimelinesRef.current.forEach((timeline) => {
        if (timeline && timeline.scrollTrigger) {
          timeline.scrollTrigger.kill();
        }
        if (timeline) {
          timeline.kill();
        }
      });
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}
