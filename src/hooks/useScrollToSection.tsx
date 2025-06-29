import { HEADER } from '@/constants/header';
import { useCallback, useState } from 'react';

export const useScrollToSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isProjectsPage, setIsProjectsPage] = useState<boolean>(false);
  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (isProjectsPage) return;

      const section = document.getElementById(sectionId);
      if (!section) return;

      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition +
        window.pageYOffset -
        HEADER.HEIGHT -
        HEADER.SECTION_OFFSET;

      setActiveSection(sectionId);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    },
    [isProjectsPage]
  );
  return {
    activeSection,
    setActiveSection,
    isProjectsPage,
    setIsProjectsPage,
    scrollToSection,
  };
};
