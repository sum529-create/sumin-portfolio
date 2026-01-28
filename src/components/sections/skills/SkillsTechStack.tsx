import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiReactquery,
  SiTailwindcss,
  SiChartdotjs,
  SiSupabase,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import SkillTechBlock from '@/components/sections/skills/SkillTechBlock';
import SkillTechItem from '@/components/sections/skills/SkillTechItem';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useEffect, useState } from 'react';

const exeItems = [
  '월 10만명 이상 사용하는 대규모 서비스 운영',
  'ISMS-P 보안 인증 대응',
  '반응형 웹 및 크로스브라우징 구현',
];
const exeItems2 = [
  'TanStack Query 도입으로 API 60% 감소',
  '법정문서 자동화 및 템플릿 빌더 구축',
  'Puppeteer 기반 PDF 생성 서버 구축',
];

interface ExperienceListItemProps {
  icon: IconType;
  name: string;
  months: string;
  detail: string;
  highlights: string[];
  iconClassName: string;
  monthsClassName?: string;
  containerHoverClassName?: string;
}

const ExperienceListItem = ({
  icon: Icon,
  name,
  months,
  detail,
  highlights,
  iconClassName,
  monthsClassName = 'text-green-400',
  containerHoverClassName = 'hover:border-green-400/50',
}: ExperienceListItemProps) => {
  return (
    <div
      className={`rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 transition-colors duration-200 md:p-3 ${containerHoverClassName}`}
    >
      <div className='flex items-center gap-3'>
        <div
          className='flex h-9 w-9 items-center justify-center rounded-md bg-slate-700 md:h-10 md:w-10'
          aria-hidden='true'
        >
          <Icon className={`h-5 w-5 md:h-6 md:w-6 ${iconClassName}`} />
        </div>
        <div className='min-w-0 flex-1'>
          <div className='text-xs font-semibold text-white md:text-sm'>
            {name}
          </div>
          <div className={`text-[11px] font-semibold ${monthsClassName}`}>
            {months}
          </div>
          <div className='mt-0.5 text-[11px] text-slate-400 md:text-xs'>
            {detail}
          </div>
        </div>
      </div>
      <div className='mt-2 rounded-lg border border-slate-600/30 bg-slate-900/50 p-2.5'>
        <div className='space-y-1 text-[11px] text-slate-300 md:text-xs'>
          {highlights.map((item) => (
            <div key={item}>• {item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
const SkillsTechStack = () => {
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const showContent = isMounted ? !isMobile : true;
  return (
    <div className='md:skill-box relative inset-0 p-4 md:p-6'>
      <div
        className='md:scroll-door-animate grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'
        role='region'
        aria-label='기술 스택 섹션'
        {...(showContent && { 'data-direction': 'doorContent' })}
      >
        {/* 현재 주력기술 */}
        <div>
          <SkillTechBlock color='cyan' text='현재 주력기술'>
            <SkillTechItem
              icon={SiReact}
              name='React'
              description='UI 라이브러리'
              iconClassName='fill-[#61DAFB]'
              containerClassName='hover:border-blue-400/70'
              iconSize='md'
            />

            <SkillTechItem
              icon={SiNextdotjs}
              name='Next.js'
              description='React 프레임워크'
              iconClassName='fill-black'
              containerClassName='hover:border-slate-400/50'
              iconSize='md'
            />

            <SkillTechItem
              icon={SiTypescript}
              name='TypeScript'
              description='타입 안정성'
              iconClassName='fill-[#3178C6]'
              containerClassName='hover:border-blue-400/50'
              iconSize='md'
            />

            <SkillTechItem
              icon={SiJavascript}
              name='JavaScript'
              description='기본 언어'
              iconClassName='fill-[#F7DF1E]'
              containerClassName='hover:border-yellow-400/50'
              iconSize='md'
            />
          </SkillTechBlock>
        </div>

        {/* 실무 경험 */}
        <div>
          <SkillTechBlock color='green' text='실무 경험'>
            <ExperienceListItem
              icon={SiReact}
              name='React & Next.js & TypeScript'
              months='5개월'
              detail='SaaS HR 솔루션 프론트엔드 개발'
              highlights={exeItems2}
              iconClassName='fill-[#61DAFB]'
              monthsClassName='text-sky-400'
              containerHoverClassName='hover:border-blue-400/60'
            />

            <ExperienceListItem
              icon={SiVuedotjs}
              name='Vue.js & Nuxt.js'
              months='2년 11개월'
              detail='EBS 교육 플랫폼 프론트엔드 개발'
              highlights={exeItems}
              iconClassName='fill-green-400'
              monthsClassName='text-green-400'
              containerHoverClassName='hover:border-green-400/50'
            />
          </SkillTechBlock>
        </div>

        {/* 프로젝트 경험 */}
        <div>
          <SkillTechBlock color='purple' text='프로젝트 경험'>
            <SkillTechItem
              icon={SiReactquery}
              name='TanStack Query'
              description='서버 상태 관리'
              iconClassName='fill-[#FF4154]'
              containerClassName='hover:border-red-400/50'
              iconSize='sm'
            />

            <SkillTechItem
              icon={SiTailwindcss}
              name='Tailwind CSS'
              description='CSS 프레임워크'
              iconClassName='fill-[#06B6D4]'
              containerClassName='hover:border-teal-400/50'
              iconSize='sm'
            />

            <SkillTechItem
              icon={SiChartdotjs}
              name='Chart.js'
              description='데이터 시각화'
              iconClassName='fill-[#FF6384]'
              containerClassName='hover:border-orange-400/50'
              iconSize='sm'
            />

            <SkillTechItem
              name='Zustand'
              description='상태 관리'
              textIcon='Z'
              textIconClassName='bg-violet-500 text-xs font-bold text-white'
              containerClassName='hover:border-violet-400/50'
              iconSize='sm'
            />

            <SkillTechItem
              icon={SiSupabase}
              name='Supabase'
              description='백엔드 서비스'
              iconClassName='fill-[#3FCF8E]'
              containerClassName='hover:border-emerald-400/50'
              iconSize='sm'
            />
          </SkillTechBlock>
        </div>
      </div>
    </div>
  );
};

export default SkillsTechStack;
