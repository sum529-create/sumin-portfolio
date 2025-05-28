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
import SkillTechBlock from './SkillTechBlock';
import SkillTechItem from './SkillTechItem';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useEffect, useState } from 'react';

const exeItems = [
  'Nuxt 기반 SSR 페이지 구성',
  '파일 기반 라우팅 + 동적 페이지 자동 생성',
  'Vuex와 asyncData를 활용한 상태 관리',
];
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
        className='md:scroll-door-animate grid h-full grid-cols-1 gap-4 overflow-y-auto md:grid-cols-3 md:gap-6 md:overflow-hidden'
        {...(showContent && { 'data-direction': 'doorContent' })}
      >
        {/* 현재 주력기술 */}
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

        {/* 실무 경험 */}
        <SkillTechBlock color='green' text='실무 경험'>
          <SkillTechItem
            icon={SiVuedotjs}
            name='Vue.js & Nuxt.js'
            description=''
            iconClassName='fill-green-400'
            containerClassName='hover:border-green-400/50'
            variant='highlight'
            experience='2년 11개월'
            experienceDetail='EBS 교육 플랫폼 프론트엔드 개발'
          />

          {/* 경험 하이라이트 */}
          <div className='rounded-lg border border-slate-600/30 bg-slate-900/50 p-3'>
            <div className='space-y-1 text-xs text-slate-300'>
              {exeItems.map((item) => (
                <div key={item}>• {item}</div>
              ))}
            </div>
          </div>
        </SkillTechBlock>

        {/* 프로젝트 경험 */}
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
  );
};

export default SkillsTechStack;
