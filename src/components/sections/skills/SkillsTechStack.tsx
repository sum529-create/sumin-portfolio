import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiNuxtdotjs,
  SiReactquery,
  SiTailwindcss,
  SiChartdotjs,
  SiSupabase,
} from 'react-icons/si';
import SkillTechBlock from './SkillTechBlock';

const SkillsTechStack = () => {
  return (
    <div className='relative inset-0 p-4 md:p-6'>
      <div
        className='scroll-door-animate grid h-full grid-cols-1 gap-4 overflow-y-auto md:grid-cols-3 md:gap-6 md:overflow-hidden'
        data-direction='doorContent'
      >
        {/* 현재 주력기술 */}
        <SkillTechBlock color='cyan' text='현재 주력기술'>
          {/* React */}
          <div className='rounded-lg border border-slate-600/40 bg-slate-800/90 p-4 transition-colors duration-300 hover:border-blue-400/70'>
            <div className='flex items-center space-x-4'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-xs font-bold text-white md:h-10 md:w-10'>
                <SiReact className='h-6 w-6 fill-[#61DAFB] md:h-7 md:w-7' />
              </div>
              <div>
                <div className='text-base font-semibold text-white md:text-lg'>
                  React
                </div>
                <div className='text-xs text-slate-400 md:text-sm'>
                  UI 라이브러리
                </div>
              </div>
            </div>
          </div>

          {/* Next.js */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 transition-colors duration-200 hover:border-slate-400/50'>
            <div className='flex items-center space-x-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-xs font-bold text-white md:h-10 md:w-10'>
                <SiNextdotjs className='h-6 w-6 fill-black md:h-7 md:w-7' />
              </div>
              <div>
                <div className='text-sm font-medium text-white md:text-base'>
                  Next.js
                </div>
                <div className='text-xs text-slate-400'>React 프레임워크</div>
              </div>
            </div>
          </div>

          {/* TypeScript */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 transition-colors duration-200 hover:border-blue-400/50'>
            <div className='flex items-center space-x-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-xs font-bold text-white md:h-10 md:w-10'>
                <SiTypescript className='h-6 w-6 fill-[#3178C6] md:h-7 md:w-7' />
              </div>
              <div>
                <div className='text-sm font-medium text-white md:text-base'>
                  TypeScript
                </div>
                <div className='text-xs text-slate-400'>타입 안정성</div>
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 transition-colors duration-200 hover:border-yellow-400/50'>
            <div className='flex items-center space-x-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-xs font-bold text-black md:h-10 md:w-10'>
                <SiJavascript className='h-6 w-6 fill-[#F7DF1E] md:h-7 md:w-7' />
              </div>
              <div>
                <div className='text-sm font-medium text-white md:text-base'>
                  JavaScript
                </div>
                <div className='text-xs text-slate-400'>기본 언어</div>
              </div>
            </div>
          </div>
        </SkillTechBlock>

        {/* 실무 경험 */}
        <SkillTechBlock color='green' text='실무 경험'>
          {/* Vue.js & Nuxt.js */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-4 transition-colors duration-200 hover:border-green-400/50'>
            <div className='space-y-2 text-center'>
              <div className='flex items-center justify-center gap-4'>
                {/* Vue.js */}
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700'>
                  <SiVuedotjs className='h-7 w-7 fill-green-400 md:h-8 md:w-8' />
                </div>
                {/* Nuxt.js */}
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700'>
                  <SiNuxtdotjs className='h-7 w-7 fill-[#00DC82] md:h-8 md:w-8' />
                </div>
              </div>
              <div>
                <div className='text-sm font-medium text-white md:text-base'>
                  Vue.js & Nuxt.js
                </div>
                <div className='text-xs font-semibold text-green-400'>
                  2년 11개월
                </div>
                <div className='mt-1 text-xs text-slate-400'>
                  EBS 교육 플랫폼 프론트엔드 개발
                </div>
              </div>
            </div>
          </div>

          {/* 경험 하이라이트 */}
          <div className='rounded-lg border border-slate-600/30 bg-slate-900/50 p-3'>
            <div className='space-y-1 text-xs text-slate-300'>
              <div>• Nuxt 기반 SSR 페이지 구성</div>
              <div>• 파일 기반 라우팅 + 동적 페이지 자동 생성</div>
              <div>• Vuex와 asyncData를 활용한 상태 관리</div>
            </div>
          </div>
        </SkillTechBlock>

        {/* 프로젝트 경험 */}
        <SkillTechBlock color='purple' text='프로젝트 경험'>
          {/* TanStack Query */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 hover:border-red-400/50'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-slate-700'>
                <SiReactquery className='h-4 w-4 fill-[#FF4154] md:h-5 md:w-5' />
              </div>
              <div className='min-w-0 flex-1'>
                <div className='text-sm font-medium text-white'>
                  TanStack Query
                </div>
                <div className='text-xs text-slate-400'>서버 상태 관리</div>
              </div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 hover:border-teal-400/50'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-slate-700'>
                <SiTailwindcss className='h-4 w-4 fill-[#06B6D4] md:h-5 md:w-5' />
              </div>
              <div className='min-w-0 flex-1'>
                <div className='text-sm font-medium text-white'>
                  Tailwind CSS
                </div>
                <div className='text-xs text-slate-400'>CSS 프레임워크</div>
              </div>
            </div>
          </div>

          {/* Chart.js */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 hover:border-orange-400/50'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-slate-700'>
                <SiChartdotjs className='h-4 w-4 fill-[#FF6384] md:h-5 md:w-5' />
              </div>
              <div className='min-w-0 flex-1'>
                <div className='text-sm font-medium text-white'>Chart.js</div>
                <div className='text-xs text-slate-400'>데이터 시각화</div>
              </div>
            </div>
          </div>

          {/* Zustand */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 hover:border-violet-400/50'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-violet-500 text-xs font-bold text-white'>
                Z
              </div>
              <div className='min-w-0 flex-1'>
                <div className='text-sm font-medium text-white'>Zustand</div>
                <div className='text-xs text-slate-400'>상태 관리</div>
              </div>
            </div>
          </div>

          {/* Supabase */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 hover:border-emerald-400/50'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-slate-700'>
                <SiSupabase className='h-4 w-4 fill-[#3FCF8E] md:h-5 md:w-5' />
              </div>
              <div className='min-w-0 flex-1'>
                <div className='text-sm font-medium text-white'>Supabase</div>
                <div className='text-xs text-slate-400'>백엔드 서비스</div>
              </div>
            </div>
          </div>
        </SkillTechBlock>
      </div>
    </div>
  );
};

export default SkillsTechStack;
