'use client';

import { useState, useEffect, useCallback, useMemo, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import {
  HEADER_HEIGHT,
  MOBILE_MENU_WIDTH,
  SCROLL_THRESHOLD,
} from '@/constants/header';
import { useScrollToSection } from '@/hooks/useScrollToSection';

// 네비게이션 아이템 타입 정의
type NavItem = {
  href: string;
  label: string;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isNotHome, setIsNotHome] = useState<boolean>(false);
  const { activeSection, setActiveSection, scrollToSection } =
    useScrollToSection();

  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    setIsNotHome(Boolean(params?.id));
  }, [params]);

  // 네비게이션 아이템 메모이제이션
  const navItems = useMemo<NavItem[]>(
    () => [
      { href: '#home', label: '홈' },
      { href: '#about', label: '소개' },
      { href: '#skills', label: '기술 스택' },
      { href: '#experience', label: '경력' },
      { href: '#blog', label: '블로그' },
      { href: '#projects', label: '프로젝트' },
      { href: '#contact', label: '연락하기' },
    ],
    []
  );

  // 스크롤 이벤트 핸들러 메모이제이션
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  // 스크롤 위치에 따른 헤더 스타일 변경
  useEffect(() => {
    // 초기 스크롤 상태 설정
    handleScroll();

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // 현재 섹션 감지 로직 개선
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${HEADER_HEIGHT + 50}px 0px -${window.innerHeight - HEADER_HEIGHT - 50}px 0px`,
      threshold: SCROLL_THRESHOLD,
    };

    let currentSection = '';
    let scrollTimeout: NodeJS.Timeout | undefined = undefined;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length === 0) return;

      const visibleEntry = visibleEntries.reduce((max, entry) => {
        const maxRatio = max.intersectionRatio;
        const currentRatio = entry.intersectionRatio;

        if (Math.abs(maxRatio - currentRatio) < 0.2) {
          const maxRect = max.boundingClientRect;
          const currentRect = entry.boundingClientRect;
          const scrollingDown = window.scrollY > lastScrollY;

          return scrollingDown
            ? currentRect.top < maxRect.top
              ? entry
              : max
            : currentRect.top > maxRect.top
              ? entry
              : max;
        }

        return currentRatio > maxRatio ? entry : max;
      }, visibleEntries[0]);

      if (visibleEntry && visibleEntry.isIntersecting) {
        const sectionId = visibleEntry.target.id;
        if (currentSection !== sectionId) {
          currentSection = sectionId;
          setActiveSection(sectionId);
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = navItems
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter(Boolean);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + HEADER_HEIGHT + 50;
          let closestSection = sections[0];
          let minDistance = Infinity;

          sections.forEach((section) => {
            if (!section) return;

            const sectionTop = section.offsetTop;
            const distance = Math.abs(sectionTop - scrollPosition);

            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section;
            }
          });

          if (closestSection && closestSection.id !== currentSection) {
            currentSection = closestSection.id;
            setActiveSection(closestSection.id);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  // 네비게이션 클릭 핸들러 메모이제이션
  const handleNavClick = async (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    if (isNotHome) {
      await router.push('/');
    }
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // 모바일 메뉴 토글 핸들러 메모이제이션
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // 모바일 메뉴 닫기 핸들러 메모이제이션
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // 애니메이션 variants 메모이제이션
  const menuVariants = useMemo(
    () => ({
      closed: {
        opacity: 0,
        x: '100%',
      },
      open: {
        opacity: 1,
        x: '0%',
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      closed: { opacity: 0, x: 20 },
      open: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.3,
        },
      }),
    }),
    []
  );

  // 헤더 스타일 클래스 메모이제이션
  const headerClassName = useMemo(
    () =>
      `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`,
    [isScrolled]
  );

  // 로고 클릭 핸들러
  const handleNavClickWrapper = (sectionName: string) => {
    if (isNotHome) {
      router.push('/');
    } else {
      scrollToSection(sectionName);
    }
  };

  return (
    <motion.header
      className={headerClassName}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto flex h-16 max-w-5xl items-center justify-between px-4'>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            onClick={() => handleNavClickWrapper('home')}
            className='text-xl font-bold text-primary'
            aria-label='홈으로 이동'
          >
            Sumin
          </button>
        </motion.div>

        <nav
          className='hidden items-center space-x-8 md:flex'
          role='navigation'
          aria-label='메인 네비게이션'
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative cursor-pointer transition-colors duration-150 hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? 'font-medium text-primary'
                    : isScrolled
                      ? 'text-foreground'
                      : 'text-gray-100'
                }`}
                aria-current={
                  activeSection === item.href.substring(1) ? 'page' : undefined
                }
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className='absolute -bottom-1 left-0 right-0 h-0.5 bg-primary'
                    layoutId='activeSection'
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                      duration: 0.2,
                    }}
                  />
                )}
              </button>
            </motion.div>
          ))}
        </nav>

        <motion.button
          className={`${isScrolled ? 'text-foreground' : 'text-gray-100'} md:hidden`}
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className='fixed inset-0 z-30 h-screen w-screen bg-black/50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              aria-hidden='true'
            />
            <motion.div
              className={`fixed right-0 top-0 z-40 h-screen bg-background/95 backdrop-blur-md md:hidden`}
              style={{ width: `${MOBILE_MENU_WIDTH}px` }}
              initial='closed'
              animate='open'
              exit='closed'
              variants={menuVariants}
              role='dialog'
              aria-modal='true'
              aria-label='모바일 메뉴'
            >
              <div className='container relative mx-auto px-4 py-5'>
                <motion.button
                  className='absolute right-4 h-6 w-6 text-foreground'
                  onClick={closeMobileMenu}
                  whileTap={{ scale: 0.95 }}
                  aria-label='메뉴 닫기'
                >
                  <svg
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <line
                      x1='4'
                      y1='4'
                      x2='20'
                      y2='20'
                      stroke='#333333'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                    <line
                      x1='20'
                      y1='4'
                      x2='4'
                      y2='20'
                      stroke='#333333'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </motion.button>
                <nav
                  className='mt-16 flex flex-col space-y-4'
                  role='navigation'
                  aria-label='모바일 메뉴'
                >
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={itemVariants}
                      initial='closed'
                      animate='open'
                      exit='closed'
                    >
                      <button
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block cursor-pointer text-xl font-semibold transition-colors ${
                          activeSection === item.href.substring(1)
                            ? 'text-primary'
                            : 'text-foreground hover:text-primary'
                        }`}
                        aria-current={
                          activeSection === item.href.substring(1)
                            ? 'page'
                            : undefined
                        }
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
