'use client';

import { useEffect, useCallback, useRef } from 'react';

export const useViewportHeight = () => {
  const lastHeight = useRef(0);

  const setVh = useCallback(() => {
    if (typeof window === 'undefined') return;

    // visualViewport API가 있으면 사용, 없으면 window.innerHeight 사용
    const currentHeight = window.visualViewport?.height || window.innerHeight;

    // 높이가 실제로 변경되었을 때만 업데이트
    if (Math.abs(currentHeight - lastHeight.current) > 1) {
      const vh = currentHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      lastHeight.current = currentHeight;

      // 스크롤 위치 조정 (필요한 경우)
      const scrollContainer = document.getElementById('__next');
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;

        // 스크롤이 맨 아래에 있을 때만 위치 조정
        if (scrollHeight - (scrollTop + clientHeight) < 10) {
          scrollContainer.scrollTop = scrollHeight - clientHeight;
        }
      }
    }
  }, []);

  useEffect(() => {
    // 초기 설정
    setVh();

    // 리사이즈 이벤트 리스너 (디바운스 적용)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setVh, 100);
    };

    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', setVh);

    // visualViewport API 사용
    if ('visualViewport' in window) {
      window.visualViewport?.addEventListener('resize', setVh);
      window.visualViewport?.addEventListener('scroll', setVh);
    }

    // 페이지 로드 완료 후 한 번 더 실행
    window.addEventListener('load', setVh);

    // 주기적으로 높이 체크 (안전장치)
    const intervalId = setInterval(setVh, 1000);

    // 클린업
    return () => {
      clearTimeout(resizeTimeout);
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', setVh);
      window.removeEventListener('load', setVh);
      if ('visualViewport' in window) {
        window.visualViewport?.removeEventListener('resize', setVh);
        window.visualViewport?.removeEventListener('scroll', setVh);
      }
    };
  }, [setVh]);
};
