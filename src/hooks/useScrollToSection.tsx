import { HEADER_HEIGHT, SECTION_OFFSET } from '@/constants/header';
import { useCallback, useState } from 'react';

export const useScrollToSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - HEADER_HEIGHT - SECTION_OFFSET;

    setActiveSection(sectionId);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);
  return { activeSection, setActiveSection, scrollToSection };
};
