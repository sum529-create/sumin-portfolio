import React, {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { experienceData } from '@/constants/experience';
import SectionTitle from '@/components/sections/common/SectionTitle';
import SectionContainer from '@/components/sections/common/SectionContainer';

const ExperienceSection = () => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    transformToCard();
  }, []);
  const transformToCard = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      opacity: 1,
      rotationY: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    });
  };

  const handleCardClick = (event: MouseEvent | KeyboardEvent) => {
    if (event.type === 'keydown') {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key !== 'Enter' && keyboardEvent.key !== ' ') {
        return;
      }
      // 버튼 역할에 맞춰 스페이스/엔터의 기본 동작(스크롤, 클릭 중복)을 막음
      keyboardEvent.preventDefault();
    }
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotationY: isFlipped ? 0 : 180,
      duration: 0.3,
      ease: 'power2.inOut',
    });

    setIsFlipped(!isFlipped);
  };

  return (
    <SectionContainer
      sectionId='experience'
      sectionCln='overflow-hidden'
      divCln='relative z-10'
    >
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
            onKeyDown={handleCardClick}
            tabIndex={0}
            role='button'
            aria-label={
              isFlipped ? '경력 카드 앞면 보기' : '경력 상세 정보 보기'
            }
            aria-expanded={isFlipped}
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
              <div className='relative flex h-full flex-col justify-center overflow-hidden p-8'>
                <div
                  className='pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent will-change-transform'
                  style={{
                    filter: 'blur(4px)',
                    transformOrigin: '0 0',
                  }}
                />
                <div className='relative space-y-6 text-center'>
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
                      {experienceData.company.includes(' (')
                        ? experienceData.company.split(' (')[0]
                        : experienceData.company}
                    </h3>
                    {experienceData.company.includes(' (') && (
                      <p className='text-lg text-cyan-400'>
                        (
                        {experienceData.company
                          .split(' (')[1]
                          ?.replace(')', '') || ''}
                        )
                      </p>
                    )}
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
              className='absolute inset-0 h-full w-full rounded-2xl border border-[#3a3a5f] bg-[#0a0a1a] shadow-2xl [transform:rotateY(180deg)]'
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className='h-full overflow-y-auto p-6 lg:overflow-y-visible'>
                <div className='space-y-4'>
                  <h3 className='border-b border-[#3a3a5f] pb-2 text-2xl font-bold text-white'>
                    주요 업무 & 성과
                  </h3>

                  <div className='space-y-3'>
                    {experienceData.responsibilities.map(
                      (responsibility, index) => (
                        <div key={index} className='flex gap-3'>
                          <div className='mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4b4ba0] text-xs font-bold text-white'>
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
                    <h4 className='mb-3 text-lg font-semibold text-[#a78bfa]'>
                      기술 스택
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {experienceData.techStack.map((tech) => (
                        <span
                          key={tech}
                          className='rounded-full border border-[#555] bg-[#1a1a2e] px-3 py-1 text-sm text-white'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='mt-6 rounded-lg border border-[#3a3a5f] bg-[#1a1a2e] p-4'>
                    <h4 className='mb-2 font-semibold text-[#a78bfa]'>
                      역할 요약
                    </h4>
                    <p className='text-sm text-white'>
                      {experienceData.roleSummary}
                    </p>
                  </div>

                  <p className='mt-4 animate-pulse text-center text-sm text-[#7dd3fc]'>
                    ← 다시 클릭해서 돌아가기
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
