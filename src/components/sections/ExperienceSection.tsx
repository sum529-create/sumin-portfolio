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

type ExperienceItem = (typeof experienceData)[number];

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      opacity: 1,
      rotationY: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    });
  }, []);

  const handleCardClick = (event: MouseEvent | KeyboardEvent) => {
    if (event.type === 'keydown') {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key !== 'Enter' && keyboardEvent.key !== ' ') {
        return;
      }
      keyboardEvent.preventDefault();
    }

    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotationY: isFlipped ? 0 : 180,
      duration: 0.3,
      ease: 'power2.inOut',
    });

    setIsFlipped((prev) => !prev);
  };

  const [companyName, companyDetail] = experience.company.includes(' (')
    ? [
        experience.company.split(' (')[0],
        experience.company.split(' (')[1]?.replace(')', '') || '',
      ]
    : [experience.company, ''];

  const isHrCompany = experience.company.includes('화이트정보통신');

  return (
    <div className='flex min-h-[520px] w-full items-center justify-center md:min-h-[560px]'>
      {/* 3D 카드 */}
      <div
        className='relative w-full max-w-4xl'
        style={{ perspective: '1000px' }}
      >
        <div
          ref={cardRef}
          onClick={handleCardClick}
          onKeyDown={handleCardClick}
          tabIndex={0}
          role='button'
          aria-label={isFlipped ? '경력 카드 앞면 보기' : '경력 상세 정보 보기'}
          aria-expanded={isFlipped}
          className='relative h-[520px] w-full transform-gpu cursor-pointer transition-transform duration-500 md:h-[560px]'
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 카드 앞면 */}
          <div
            className={`absolute inset-0 h-full w-full rounded-2xl border shadow-2xl backdrop-blur-lg ${
              isHrCompany
                ? // 화이트정보통신: 살짝 투명한 블루 톤
                  'border-sky-300/40 bg-gradient-to-br from-sky-500/15 via-sky-500/5 to-slate-900/70'
                : // 유아이랩: 기존 스타일 유지
                  'border-white/20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20'
            }`}
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
                    src={isHrCompany ? '/whiteinfocm.ico' : '/uilab.ico'}
                    alt='회사 로고'
                    width={80}
                    height={80}
                  />
                </div>

                <div>
                  <h3 className='mb-2 text-3xl font-bold text-white'>
                    {companyName}
                  </h3>
                  {companyDetail && (
                    <p
                      className={`text-lg ${
                        isHrCompany ? 'text-sky-300' : 'text-cyan-400'
                      }`}
                    >
                      ({companyDetail})
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <p
                    className={`text-xl ${
                      isHrCompany ? 'text-emerald-200' : 'text-white'
                    }`}
                  >
                    {experience.department}
                  </p>
                  <p
                    className={`font-semibold ${
                      isHrCompany ? 'text-sky-300' : 'text-purple-400'
                    }`}
                  >
                    {experience.period}
                  </p>
                </div>

                <div className='flex flex-wrap justify-center gap-2'>
                  {experience.techStack.slice(0, 5).map((tech) => (
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
            className={`absolute inset-0 h-full w-full rounded-2xl border shadow-2xl [transform:rotateY(180deg)] ${
              isHrCompany
                ? // 화이트정보통신: 텍스트 가독성을 위한 짙은 남색 계열
                  'border-sky-300/40 bg-[#020617]'
                : // 유아이랩: 기존 짙은 보라 계열 유지
                  'border-[#3a3a5f] bg-[#0a0a1a]'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className='h-full overflow-y-auto p-6 md:overflow-y-visible'>
              <div className='space-y-4'>
                <h3
                  className={`border-b pb-2 text-2xl font-bold text-white ${
                    isHrCompany ? 'border-sky-400/40' : 'border-[#3a3a5f]'
                  }`}
                >
                  주요 업무 & 성과
                </h3>

                <div className='space-y-3'>
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className='flex gap-3'>
                      <div
                        className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isHrCompany
                            ? 'bg-sky-300 text-slate-900 shadow-md shadow-sky-500/40'
                            : 'bg-[#4b4ba0] text-white'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <p className='text-sm leading-relaxed text-white'>
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>

                <div className='mt-6'>
                  <h4
                    className={`mb-3 text-lg font-semibold ${
                      isHrCompany ? 'text-sky-300' : 'text-[#a78bfa]'
                    }`}
                  >
                    기술 스택
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {experience.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3 py-1 text-sm text-white ${
                          isHrCompany
                            ? 'border-sky-400/40 bg-sky-900/40'
                            : 'border-[#555] bg-[#1a1a2e]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`mt-6 rounded-lg border p-4 ${
                    isHrCompany
                      ? 'border-sky-400/40 bg-sky-950/60'
                      : 'border-[#3a3a5f] bg-[#1a1a2e]'
                  }`}
                >
                  <h4
                    className={`mb-2 font-semibold ${
                      isHrCompany ? 'text-sky-300' : 'text-[#a78bfa]'
                    }`}
                  >
                    역할 요약
                  </h4>
                  <p className='text-sm text-white'>{experience.roleSummary}</p>
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
  );
};

const ExperienceSection = () => {
  return (
    <SectionContainer
      sectionId='experience'
      sectionCln='overflow-hidden'
      divCln='relative z-10'
    >
      <SectionTitle
        title='Work Experience'
        subTitle='실무에서 다진 프론트엔드 경험'
        ariaLabel='경력 섹션'
      />
      <div className='mt-6 flex flex-col items-center gap-8'>
        {experienceData.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            experience={experience}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
