import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceData } from '@/constants/experience';
import SectionTitle from './SectionTitle';

// GSAP 플러그인 등록
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ExperienceSection = () => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    transformToCard();
  }, []);
  const transformToCard = () => {
    const card = cardRef.current;

    gsap.to(card, {
      opacity: 1,
      rotationY: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    });
  };

  const handleCardClick = () => {
    const card = cardRef.current;

    gsap.to(card, {
      rotationY: isFlipped ? 0 : 180,
      duration: 0.8,
      ease: 'power2.inOut',
    });

    setIsFlipped(!isFlipped);
  };

  return (
    <section
      id='experience'
      className='relative min-h-screen overflow-hidden py-20'
    >
      <div className='container relative z-10 mx-auto px-4'>
        <SectionTitle
          title='Work Experience'
          subTitle='나의 경력'
          ariaLabel='경력 섹션'
        />
        <div className='flex min-h-[500px] items-center justify-center'>
          {/* 3D 카드 */}
          <div
            className={`relative w-full max-w-4xl`}
            style={{ perspective: '1000px' }}
          >
            <div
              ref={cardRef}
              onClick={handleCardClick}
              className='relative h-[500px] w-full transform-gpu cursor-pointer transition-transform duration-500'
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* 카드 앞면 */}
              <div
                className='absolute inset-0 h-full w-full rounded-2xl border border-white/20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 shadow-2xl backdrop-blur-lg'
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className='flex h-full flex-col justify-center p-8'>
                  <div className='space-y-6 text-center'>
                    <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full'>
                      <Image
                        src='/uilab.ico'
                        alt='UI Lab Logo'
                        width={80}
                        height={80}
                      />
                    </div>

                    <div>
                      <h3 className='mb-2 text-3xl font-bold text-white'>
                        {experienceData.company.split(' (')[0]}
                      </h3>
                      <p className='text-lg text-cyan-400'>
                        (
                        {experienceData.company
                          .split(' (')[1]
                          ?.replace(')', '') || ''}
                        )
                      </p>
                    </div>

                    <div className='space-y-2'>
                      <p className='text-xl text-white'>
                        {experienceData.department}
                      </p>
                      <p className='font-semibold text-purple-400'>
                        {experienceData.period}
                      </p>
                    </div>

                    <div className='flex flex-wrap justify-center gap-2'>
                      {experienceData.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className='animate-pulse text-sm text-cyan-300'>
                      클릭해서 상세 정보 보기 →
                    </p>
                  </div>
                </div>
              </div>

              {/* 카드 뒷면 */}
              <div
                className='absolute inset-0 h-full w-full rounded-2xl border border-white/20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl backdrop-blur-lg [transform:rotateY(180deg)]'
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className='h-full overflow-y-auto p-6'>
                  <div className='space-y-4'>
                    <h3 className='border-b border-white/20 pb-2 text-2xl font-bold text-white'>
                      주요 업무 & 성과
                    </h3>

                    <div className='space-y-3'>
                      {experienceData.responsibilities.map(
                        (responsibility, index) => (
                          <div key={index} className='flex gap-3'>
                            <div className='mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-xs font-bold text-white'>
                              {index + 1}
                            </div>
                            <p className='text-sm leading-relaxed text-white'>
                              {responsibility}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    <div className='mt-6'>
                      <h4 className='mb-3 text-lg font-semibold text-purple-400'>
                        기술 스택
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {experienceData.techStack.map((tech) => (
                          <span
                            key={tech}
                            className='rounded-full border border-white/20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 py-1 text-sm text-white'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='mt-6 rounded-lg border border-white/10 bg-white/5 p-4'>
                      <h4 className='mb-2 font-semibold text-cyan-400'>
                        역할 요약
                      </h4>
                      <p className='text-sm text-white'>
                        {experienceData.roleSummary}
                      </p>
                    </div>

                    <p className='mt-4 animate-pulse text-center text-sm text-cyan-300'>
                      ← 다시 클릭해서 돌아가기
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
