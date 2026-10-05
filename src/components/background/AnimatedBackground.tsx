'use client';

import { Suspense, useEffect, useState } from 'react';
import { introProgressRef } from '@/store/introProgressStore';
import MainScene from '@/components/background/components/MainScene';
import dynamic from 'next/dynamic';

const DynamicCanvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  {
    ssr: false,
    loading: () => <div className='fixed inset-0 bg-[#0b1026]' />,
  }
);

export function AnimatedBackground(): JSX.Element {
  const [frameloop, setFrameloop] = useState<'always' | 'never'>('always');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReducedMotion(motionQuery.matches);
    syncMotion();
    motionQuery.addEventListener('change', syncMotion);

    const syncVisibility = () => {
      setFrameloop(document.hidden ? 'never' : 'always');
    };
    document.addEventListener('visibilitychange', syncVisibility);

    return () => {
      motionQuery.removeEventListener('change', syncMotion);
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const startTime = performance.now();
    const duration = 2000;
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      introProgressRef.current = progress;

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    introProgressRef.current = 0;
    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  if (reducedMotion) {
    return <div className='fixed inset-0 -z-10 bg-[#0b1026]' />;
  }

  return (
    <div className='fixed inset-0 -z-10'>
      <Suspense fallback={<div className='fixed inset-0 bg-[#0b1026]' />}>
        <DynamicCanvas
          dpr={[1, 1.5]}
          frameloop={frameloop}
          gl={{ antialias: false, powerPreference: 'high-performance' }}
        >
          <MainScene />
        </DynamicCanvas>
      </Suspense>
    </div>
  );
}
