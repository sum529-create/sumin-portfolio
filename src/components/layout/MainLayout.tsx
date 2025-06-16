'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex min-h-screen flex-col overflow-x-hidden'>
      <Header />
      <motion.main
        className='w-full max-w-[100vw] flex-grow'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;
