'use client';

import Loader from '../ui/loader';
import MainLayout from './MainLayout';
import { AnimatedBackground } from '../background/AnimatedBackground';
import { ReactNode } from 'react';

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

const ClientLayoutWrapper = ({ children }: ClientLayoutWrapperProps) => {
  return (
    <>
      {/* 페이지 프리로더 */}
      <Loader />

      <MainLayout>
        {/* AnimatedBackground를 절대 위치로 전체 화면에 배치 */}
        <div
          className='fixed inset-0 w-full overflow-hidden'
          style={{
            height: '100%',
            minHeight: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            WebkitTransform: 'translateZ(0)',
            WebkitPerspective: 1000,
            perspective: 1000,
          }}
        >
          <AnimatedBackground />
        </div>
        {children}
      </MainLayout>
    </>
  );
};

export default ClientLayoutWrapper;
