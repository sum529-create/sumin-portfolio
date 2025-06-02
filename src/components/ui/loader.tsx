'use client';

import { useLoadingStore } from '@/store/loadingStore';
import { useEffect } from 'react';

const Loader = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);
  const setContentVisible = useLoadingStore((state) => state.setContentVisible);

  useEffect(() => {
    // 초기 로딩 상태 설정
    document.body.style.overflow = 'hidden'; // 스크롤 방지

    // 배경 준비를 위한 약간의 지연
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);

      // 로딩이 끝난 후 콘텐츠를 표시하기 위한 약간의 추가 지연
      setTimeout(() => {
        setContentVisible(true);
        document.body.style.overflow = ''; // 스크롤 다시 활성화
      }, 100);
    }, 800); // 배경 애니메이션이 준비될 충분한 시간

    return () => {
      clearTimeout(loadingTimer);
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-[#050510] transition-opacity duration-1000'
      role='progressbar'
      aria-busy={isLoading}
      aria-label='페이지 로딩 중'
      style={{
        opacity: isLoading ? 1 : 0,
        visibility: isLoading ? 'visible' : 'hidden',
        transitionProperty: 'opacity, visibility',
        transitionDuration: '1s, 0s',
        transitionDelay: '0s, 1s',
      }}
    >
      <div className='flex flex-col items-center'>
        <div className='mb-6 h-16 w-16 animate-spin rounded-full border-4 border-b-transparent border-l-transparent border-r-transparent border-t-primary'></div>
        <p className='animate-pulse text-primary/80'>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
