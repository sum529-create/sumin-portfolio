import { ScrollData } from '@/components/background/types';
import { useEffect } from 'react';

export const scrollDataRef: { current: ScrollData } = {
  current: {
    scrollY: 0,
    scrollVelocity: 0,
    scrollProgress: 0,
  },
};

export const useScrollPosition = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollData = () => {
      const currentScrollY = window.scrollY;
      const scrollVelocity = currentScrollY - lastScrollY;
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        totalScrollable > 0 ? currentScrollY / totalScrollable : 0;
      scrollDataRef.current = {
        scrollY: currentScrollY,
        scrollVelocity,
        scrollProgress,
      };

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollData);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
};
