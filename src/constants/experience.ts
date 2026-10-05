export type ExperienceTheme = 'amber' | 'sky' | 'violet';

interface ExperienceItem {
  company: string;
  department: string;
  period: string;
  roleSummary: string;
  responsibilities: string[];
  techStack: string[];
  theme: ExperienceTheme;
  logoSrc?: string;
}

const experienceItem0: ExperienceItem = {
  company: '디리아 (CruzEIMS)',
  department: '프론트엔드',
  period: '재직 중',
  roleSummary: '인터페이스·전문 통합 관리 솔루션의 프론트엔드 개발',
  responsibilities: [
    'CruzEIMS에서 인터페이스, 전문, 연계 시스템, 업무분류를 등록하고 조회하는 관리 화면 개발',
    '업무분류·업무할당·담당자 설정과 소속 업무 기준 조회 범위 구현',
    '인터페이스 간편등록의 송수신 업무 선택과 전문ID·업무코드 정합성 검증',
    '영향도 분석에서 인터페이스 상세로 이어지는 흐름과 내정보의 소속 업무 표시',
  ],
  techStack: [
    'React',
    'TypeScript',
    'Vite',
    'TanStack Query',
    'TanStack Form',
    'Zod',
    'Tailwind CSS',
  ],
  theme: 'amber',
};

const experienceItem1: ExperienceItem = {
  company: '화이트정보통신 (SaaS HR 솔루션)',
  department: 'R&D / 사원',
  period: '2025.08 - 2025.12 (5개월)',
  roleSummary: 'React/Next.js 기반 프론트엔드 개발 및 기술 도입 주도',
  responsibilities: [
    'TanStack Query 도입 주도로 API 호출 60% 감소, 서버 CPU 43% 절감 달성',
    'Chart.js → Recharts 마이그레이션으로 로딩 속도 35% 개선, 번들 사이즈 50% 감소',
    '법정문서 자동생성 시스템 구축으로 A4 인쇄 100% 정밀도 달성 및 프로세스 자동화',
    'GrapeJS 기반 템플릿 빌더 개발로 비개발자도 문서 제작 가능, 생산성 3배 향상',
    'Puppeteer 기반 PDF 생성 서버 구축 및 Envoy Proxy로 마이크로서비스 아키텍처 구성',
  ],
  techStack: [
    'React',
    'Next.js',
    'TypeScript',
    'TanStack Query',
    'Recharts',
    'GrapeJS',
    'Puppeteer',
    'PostgreSQL',
    'Node.js',
    'Express',
    'Envoy Proxy',
    'Git',
  ],
  theme: 'sky',
  logoSrc: '/whiteinfocm.ico',
};

const experienceItem2: ExperienceItem = {
  company: '유아이랩 (EBS 온라인 클래스 파견)',
  department: 'UI개발그룹 / 사원',
  period: '2021.10 - 2024.08 (2년 10개월)',
  roleSummary: 'Vue.js/Nuxt.js 기반 프론트엔드 개발 및 유지보수',
  responsibilities: [
    '공통 컴포넌트 라이브러리 구축으로 일관된 UI/UX 제공 및 개발 생산성 향상',
    '화상 수업/모둠 수업 시스템 개발 및 대규모 동시 접속 환경 대응',
    '퀴즈/설문 학습 콘텐츠 관리 시스템 개발로 교사 콘텐츠 제작 효율성 개선',
    'ISMS-P 인증 대응을 위한 보안 취약점 분석 및 개선 작업 주도',
    '교사용 매뉴얼 시스템 개발로 사용자 문의 감소 및 자가 해결률 증가',
  ],
  techStack: [
    'Vue.js',
    'Nuxt.js',
    'JavaScript',
    'SCSS',
    'CSS3',
    'Visual Studio Code',
    'GitLab',
    'Notion',
    'Slack',
    'Trello',
  ],
  theme: 'violet',
  logoSrc: '/uilab.ico',
};

export const experienceData: ExperienceItem[] = [
  experienceItem0,
  experienceItem1,
  experienceItem2,
];
