import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionContainerProps {
  sectionCln?: string;
  divCln?: string;
  sectionId: string;
  beforeChildren?: ReactNode;
  children: ReactNode;
}
const SectionContainer = ({
  sectionCln = '',
  divCln = '',
  sectionId,
  beforeChildren,
  children,
}: SectionContainerProps) => {
  const sectionDefaultCln = 'relative min-h-screen py-20';
  const divDefaultCln = 'container mx-auto max-w-full px-4';
  return (
    <section id={sectionId} className={cn(sectionDefaultCln, sectionCln)}>
      {beforeChildren}
      <div className={cn(divDefaultCln, divCln)}>{children}</div>
    </section>
  );
};

export default SectionContainer;
