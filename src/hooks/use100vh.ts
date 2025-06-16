import { useEffect } from 'react';

export const use100vh = () => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh(); // 초기 실행
    window.addEventListener('resize', setVh); // 리사이즈에도 실행

    return () => window.removeEventListener('resize', setVh);
  }, []);
};
