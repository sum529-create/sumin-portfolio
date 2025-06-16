'use client';

import { Suspense, useEffect } from 'react';
import { useIntroProgressStore } from '@/store/introProgressStore';
import MainScene from '@/components/background/components/MainScene';
import dynamic from 'next/dynamic';

const DynamicCanvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  {
    ssr: false,
    loading: () => <div className='fixed inset-0 bg-black' />,
  }
);

// 메인 컴포넌트
export function AnimatedBackground(): JSX.Element {
  const setIntroAnimationProgress = useIntroProgressStore(
    (state) => state.setIntroAnimationProgress
  );

  // 인트로 애니메이션 설정
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 2초

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setIntroAnimationProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <div className='fixed inset-0 -z-10'>
      <Suspense fallback={<div className='fixed inset-0 bg-black' />}>
        <DynamicCanvas>
          <MainScene />
        </DynamicCanvas>
      </Suspense>
    </div>
  );
}
