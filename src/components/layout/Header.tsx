'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  const navItems = [
    { href: '#home', label: '홈' },
    { href: '#about', label: '나에 대해' },
    { href: '#skills', label: '내 기술' },
    { href: '#experience', label: '내 경력' },
    { href: '#projects', label: '내 작업' },
    { href: '#contact', label: '연락하기' },
  ];

  // 스크롤 위치에 따른 헤더 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 현재 섹션 감지
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 모든 섹션 관찰 시작
    navItems.forEach(item => {
      const section = document.getElementById(item.href.substring(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // 헤더 높이만큼 오프셋
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-primary"
          >
            Sumin
          </button>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative hover:text-primary transition-colors cursor-pointer ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : isScrolled
                    ? 'text-foreground'
                    : 'text-gray-100'
                }`}
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </nav>

        <motion.button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-30 w-screen h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bg-background/95 backdrop-blur-md md:hidden w-[200px] h-screen z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="container mx-auto px-4 py-5 relative">
                <motion.button
                  className="text-foreground w-6 h-6 absolute right-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="4" x2="20" y2="20" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
                    <line x1="20" y1="4" x2="4" y2="20" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.button>
                <nav className="flex flex-col space-y-4 mt-16">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <button
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block text-xl font-semibold cursor-pointer transition-colors ${
                          activeSection === item.href.substring(1)
                            ? 'text-primary'
                            : 'text-foreground hover:text-primary'
                        }`}
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