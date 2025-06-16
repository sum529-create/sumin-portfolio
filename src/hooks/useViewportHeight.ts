'use client';

import { useEffect, useCallback } from 'react';

export const useViewportHeight = () => {
  const setVh = useCallback(() => {
    if (typeof window === 'undefined') return;

    // 실제 뷰포트 높이를 가져옵니다
    const vh =
      Math.max(
        window.innerHeight,
        window.visualViewport?.height || window.innerHeight
      ) * 0.01;

    // CSS 변수로 설정합니다
    document.documentElement.style.setProperty('--vh', `${vh}px`);
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

    // visualViewport API 사용 (모바일 브라우저 주소창 대응)
    if ('visualViewport' in window) {
      window.visualViewport?.addEventListener('resize', setVh);
      window.visualViewport?.addEventListener('scroll', setVh);
    }

    // 페이지 로드 완료 후 한 번 더 실행
    window.addEventListener('load', setVh);

    // 클린업
    return () => {
      clearTimeout(resizeTimeout);
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
