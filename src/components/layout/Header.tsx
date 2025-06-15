'use client';

import { useState, useEffect, useCallback, useMemo, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';

// 상수 정의
const HEADER_HEIGHT = 80;
const SCROLL_THRESHOLD = 0.5;
const MOBILE_MENU_WIDTH = 200;

// 네비게이션 아이템 타입 정의
type NavItem = {
  href: string;
  label: string;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isNotHome, setIsNotHome] = useState<boolean>(false);

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

  // 현재 섹션 감지
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: SCROLL_THRESHOLD,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // 모든 섹션 관찰 시작
    const sections = navItems
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter(Boolean);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  // 스크롤 이동 함수 메모이제이션
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  // 네비게이션 클릭 핸들러 메모이제이션
  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
      setIsMobileMenuOpen(false);
    },
    [scrollToSection]
  );

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
  const handleNavClickWrapper = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (isNotHome) {
      router.push('/');
    } else {
      scrollToSection('home');
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
            onClick={(e) => handleNavClickWrapper(e)}
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
                className={`relative cursor-pointer transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : isScrolled
                      ? 'text-foreground'
                      : 'text-gray-100'
                }`}
                aria-current={
                  activeSection === item.href.substring(1) ? 'page' : undefined
                }
              >
                {item.label}
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
