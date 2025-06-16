'use client';

import { useViewportHeight } from '@/hooks/useViewportHeight';
import { ReactNode } from 'react';

export const ViewportHeightProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  useViewportHeight();
  return <>{children}</>;
};
