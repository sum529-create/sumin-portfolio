const SkillsTechStack = () => {
  return (
    <div className='relative inset-0 p-4 md:p-6'>
      <div
        className='scroll-door-animate grid h-full grid-cols-1 gap-4 overflow-y-auto md:grid-cols-3 md:gap-6 md:overflow-hidden'
        data-direction='doorContent'
      >
        {/* 현재 주력기술 */}
        <div className='space-y-3'>
          <div className='mb-4 text-center'>
            <h3 className='text-base font-semibold text-cyan-400 md:text-lg'>
              현재 주력기술
            </h3>
            <div className='mx-auto mt-2 h-0.5 w-12 rounded-full bg-cyan-400'></div>
          </div>

          {/* React */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 transition-colors duration-200 hover:border-cyan-400/50'>
            <div className='flex items-center space-x-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-sm text-white md:h-10 md:w-10'>
                ⚛️
              </div>
              <div>
                <div className='text-sm font-medium text-white md:text-base'>
                  React
                </div>
                <div className='text-xs text-slate-400'>UI 라이브러리</div>
              </div>
            </div>
          </div>

          {/* Next.js */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 transition-colors duration-200 hover:border-slate-400/50'>
            <div className='flex items-center space-x-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-white/30 bg-black text-xs font-bold text-white md:h-10 md:w-10'>
                ▲
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
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white md:h-10 md:w-10'>
                TS
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
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500 text-xs font-bold text-black md:h-10 md:w-10'>
                JS
              </div>
              <div>
                <div className='text-sm font-medium text-white md:text-base'>
                  JavaScript
                </div>
                <div className='text-xs text-slate-400'>기본 언어</div>
              </div>
            </div>
          </div>
        </div>

        {/* 실무 경험 */}
        <div className='space-y-3'>
          <div className='mb-4 text-center'>
            <h3 className='text-base font-semibold text-green-400 md:text-lg'>
              실무 경험
            </h3>
            <div className='mx-auto mt-2 h-0.5 w-12 rounded-full bg-green-400'></div>
          </div>

          {/* Vue.js & Nuxt.js */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-4 transition-colors duration-200 hover:border-green-400/50'>
            <div className='space-y-2 text-center'>
              <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-500 font-bold text-white'>
                🔺
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
        </div>

        {/* 프로젝트 경험 */}
        <div className='space-y-2'>
          <div className='mb-3 text-center'>
            <h3 className='text-base font-semibold text-purple-400 md:text-lg'>
              프로젝트 경험
            </h3>
            <div className='mx-auto mt-2 h-0.5 w-12 rounded-full bg-purple-400'></div>
          </div>

          {/* TanStack Query */}
          <div className='rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 hover:border-red-400/50'>
            <div className='flex items-center space-x-2'>
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-red-500 text-xs text-white'>
                🔄
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
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-teal-500 text-xs font-bold text-white'>
                TW
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
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-orange-500 text-xs text-white'>
                📊
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
              <div className='flex h-7 w-7 items-center justify-center rounded-md bg-emerald-600 text-xs font-bold text-white'>
                S
              </div>
              <div className='min-w-0 flex-1'>
                <div className='text-sm font-medium text-white'>Supabase</div>
                <div className='text-xs text-slate-400'>백엔드 서비스</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTechStack;
