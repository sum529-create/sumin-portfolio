import { HEADER_HEIGHT } from '@/constants/header';
import { useCallback, useState } from 'react';

export const useScrollToSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - HEADER_HEIGHT - 50;

    setActiveSection(sectionId);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);
  return { activeSection, setActiveSection, scrollToSection };
};
