'use client';

import Loader from '@/components/ui/loader';
import MainLayout from '@/components/layout/MainLayout';
import { AnimatedBackground } from '@/components/background/AnimatedBackground';
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
        <div className='fixed inset-0 h-screen overflow-hidden'>
          <AnimatedBackground />
        </div>
        {children}
      </MainLayout>
    </>
  );
};

export default ClientLayoutWrapper;
