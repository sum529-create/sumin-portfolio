const SkillsDoor = () => {
  return (
    <div
      className='absolute inset-0 flex'
      role='banner'
      aria-label='기술 스택 스크롤 효과 문 열림 섹션'
    >
      {/* 왼쪽 문짝 */}
      <div
        className='scroll-door-animate relative w-1/2 overflow-hidden border-r border-cyan-400/30 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 shadow-2xl'
        data-direction='doorLeft'
        style={{
          boxShadow:
            '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)',
        }}
        aria-label='왼쪽 문짝'
      >
        {/* 별들 효과 */}
        <div className='absolute inset-0' aria-label='별들 효과'>
          <div className='absolute left-10 top-10 h-1 w-1 animate-pulse rounded-full bg-white'></div>
          <div
            className='absolute right-16 top-20 h-0.5 w-0.5 animate-pulse rounded-full bg-cyan-300'
            style={{ animationDelay: '0.5s' }}
          ></div>
          <div
            className='absolute bottom-32 left-20 h-1 w-1 animate-pulse rounded-full bg-purple-300'
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className='absolute bottom-20 right-10 h-0.5 w-0.5 animate-pulse rounded-full bg-blue-300'
            style={{ animationDelay: '1.5s' }}
          ></div>
        </div>

        <div className='relative z-10 flex h-full flex-col items-center justify-center'>
          <div className='mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent'>
            TECH
          </div>
          <div className='font-mono text-xs tracking-wider text-cyan-300/60'>
            [SYSTEM]
          </div>
          {/* 문손잡이 */}
          <div className='relative mt-8' aria-label='문 손잡이'>
            <div
              className='h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg'
              style={{
                boxShadow:
                  '0 0 10px rgba(6, 182, 212, 0.6), 0 0 20px rgba(6, 182, 212, 0.3)',
              }}
            ></div>
            <div className='absolute -inset-1 rounded-full border border-cyan-400/30'></div>
          </div>
        </div>
      </div>

      {/* 오른쪽 문짝 */}
      <div
        className='scroll-door-animate relative w-1/2 overflow-hidden border-l border-purple-400/30 bg-gradient-to-bl from-slate-900 via-purple-900 to-indigo-900 shadow-2xl'
        data-direction='doorRight'
        style={{
          boxShadow:
            '0 0 20px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)',
        }}
        aria-label='오른쪽 문짝'
      >
        {/* 별들 효과 */}
        <div className='absolute inset-0' aria-label='별들 효과'>
          <div
            className='absolute right-12 top-16 h-1 w-1 animate-pulse rounded-full bg-white'
            style={{ animationDelay: '0.3s' }}
          ></div>
          <div
            className='absolute left-14 top-28 h-0.5 w-0.5 animate-pulse rounded-full bg-purple-300'
            style={{ animationDelay: '0.8s' }}
          ></div>
          <div
            className='absolute bottom-24 right-16 h-1 w-1 animate-pulse rounded-full bg-pink-300'
            style={{ animationDelay: '1.3s' }}
          ></div>
          <div
            className='absolute bottom-40 left-8 h-0.5 w-0.5 animate-pulse rounded-full bg-cyan-300'
            style={{ animationDelay: '1.8s' }}
          ></div>
        </div>

        <div className='relative z-10 flex h-full flex-col items-center justify-center'>
          <div className='mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent'>
            STACK
          </div>
          <div className='font-mono text-xs tracking-wider text-purple-300/60'>
            [ACCESS]
          </div>
          {/* 우주 스타일 문손잡이 */}
          <div className='relative mt-8' aria-label='문 손잡이'>
            <div
              className='h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg'
              style={{
                boxShadow:
                  '0 0 10px rgba(168, 85, 247, 0.6), 0 0 20px rgba(168, 85, 247, 0.3)',
              }}
            ></div>
            <div className='absolute -inset-1 rounded-full border border-purple-400/30'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsDoor;
