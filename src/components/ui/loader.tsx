'use client';

import { useLoadingStore } from '@/store/loadingStore';
import { useEffect } from 'react';

const Loader = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);
  const setContentVisible = useLoadingStore((state) => state.setContentVisible);

  useEffect(() => {
    // 초기 로딩 상태 설정
    setIsLoading(true);

    // 배경 준비를 위한 약간의 지연
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);

      // 로딩이 끝난 후 콘텐츠를 표시하기 위한 약간의 추가 지연
      const revealTimer = setTimeout(() => {
        setContentVisible(true);
      }, 50);
      return () => clearTimeout(revealTimer);
    }, 500);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [setIsLoading, setContentVisible]);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-white ease-in-out'
      role='progressbar'
      aria-busy={isLoading}
      aria-label='페이지 로딩 중'
      style={{
        opacity: isLoading ? 1 : 0,
        visibility: isLoading ? 'visible' : 'hidden',
        transitionProperty: 'opacity, visibility',
        transitionDuration: '0.7s, 0s',
        transitionDelay: '0s, 0.7s',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
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
