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
  SiPostgresql,
  SiNodedotjs,
  SiPuppeteer,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import SkillTechBlock from '@/components/sections/skills/SkillTechBlock';
import SkillTechItem from '@/components/sections/skills/SkillTechItem';

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
  return (
    <div className='md:skill-box relative inset-0 h-full p-4 md:p-6'>
      <div
        className='md:scroll-door-animate grid h-full grid-cols-1 gap-4 overflow-y-auto md:grid-cols-3 md:gap-6 md:overflow-hidden'
        role='region'
        aria-label='기술 스택 섹션'
        data-direction='doorContent'
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
              icon={SiVuedotjs}
              name='Vue.js'
              description='UI 라이브러리'
              iconClassName='fill-green-400'
              containerClassName='hover:border-green-400/50'
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
            <div className='grid gap-2 md:grid-cols-2'>
              <SkillTechItem
                icon={SiReactquery}
                name='TanStack Query'
                description=''
                iconClassName='fill-[#FF4154]'
                containerClassName='hover:border-red-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                name='Recharts'
                description=''
                textIcon='R'
                textIconClassName='bg-pink-500 text-[10px] font-bold text-white'
                containerClassName='hover:border-pink-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                name='GrapeJS'
                description=''
                textIcon='G'
                textIconClassName='bg-indigo-500 text-[10px] font-bold text-white'
                containerClassName='hover:border-indigo-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                icon={SiPuppeteer}
                name='Puppeteer'
                description=''
                iconClassName='fill-emerald-400'
                containerClassName='hover:border-emerald-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                icon={SiTailwindcss}
                name='Tailwind CSS'
                description=''
                iconClassName='fill-[#06B6D4]'
                containerClassName='hover:border-teal-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                name='Zustand'
                description=''
                textIcon='Z'
                textIconClassName='bg-violet-500 text-[10px] font-bold text-white'
                containerClassName='hover:border-violet-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                icon={SiChartdotjs}
                name='Chart.js'
                description=''
                iconClassName='fill-[#FF6384]'
                containerClassName='hover:border-orange-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                icon={SiSupabase}
                name='Supabase'
                description=''
                iconClassName='fill-[#3FCF8E]'
                containerClassName='hover:border-emerald-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                icon={SiPostgresql}
                name='PostgreSQL'
                description=''
                iconClassName='fill-sky-400'
                containerClassName='hover:border-sky-400/50'
                iconSize='sm'
              />

              <SkillTechItem
                icon={SiNodedotjs}
                name='Node.js + Express'
                description=''
                iconClassName='fill-lime-400'
                containerClassName='hover:border-lime-400/50'
                iconSize='sm'
              />
            </div>
          </SkillTechBlock>
        </div>
      </div>
    </div>
  );
};

export default SkillsTechStack;
