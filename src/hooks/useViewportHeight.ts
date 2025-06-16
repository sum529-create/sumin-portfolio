import { useEffect } from 'react';

export const useViewportHeight = () => {
  useEffect(() => {
    const setVh = () => {
      // 실제 뷰포트 높이를 가져옵니다
      const vh = window.innerHeight * 0.01;
      // CSS 변수로 설정합니다
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // 초기 설정
    setVh();

    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', setVh);
    // orientationchange 이벤트 리스너 (화면 회전 시)
    window.addEventListener('orientationchange', setVh);
    // visibilitychange 이벤트 리스너 (브라우저 탭 전환 시)
    document.addEventListener('visibilitychange', setVh);

    // 클린업
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
      document.removeEventListener('visibilitychange', setVh);
    };
  }, []);
};
