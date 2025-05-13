'use client';

import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            안녕하세요,<br />
            프론트엔드 개발자 <span className="text-primary">Sumin</span>입니다
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            사용자 경험을 중요시하는 프론트엔드 개발자입니다.<br />
            새로운 기술을 배우고 적용하는 것을 좋아합니다.
          </p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/projects"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              프로젝트 보기
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              연락하기
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">About Me</h3>
            <p className="text-muted-foreground">
              프론트엔드 개발에 대한 열정과 사용자 중심의 개발 철학을 가지고 있습니다.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">Skills</h3>
            <p className="text-muted-foreground">
              React, Next.js, TypeScript 등 최신 웹 기술 스택을 활용한 개발 경험이 있습니다.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">Projects</h3>
            <p className="text-muted-foreground">
              다양한 프로젝트를 통해 실무 경험을 쌓았으며, 지속적으로 성장하고 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
