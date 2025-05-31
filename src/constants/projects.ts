export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  techStack: string;
  description: string[];
  gradientColor: string;
  image: string;
}
export const projectsData: ProjectData[] = [
  {
    id: 'uuno',
    title: 'UUNO',
    subtitle: '스마트 명함 서비스',
    techStack: 'Next.js • Konva • Chart.js',
    description: [
      '사용자 반응을 실시간 차트로 시각화',
      '드래그 앤 드롭으로 쉽게 명함 제작',
      '인터랙티브 디지털 명함 서비스',
    ],
    gradientColor: 'rgb(99, 102, 241)',
    image: '/images/uuno.png',
  },
  {
    id: 'medi-click',
    title: 'MEDICLICK',
    subtitle: '병원 예약 시스템',
    techStack: 'React • Next.js • TypeScript',
    description: ['지도 기반으로 병원을 찾고', '간편하게 예약하는 서비스'],
    gradientColor: 'rgb(59, 130, 246)',
    image: '/images/medi-click.png',
  },
  {
    id: 'green-deal',
    title: 'GREEN DEAL',
    subtitle: '친환경 중고거래',
    techStack: 'React • Zustand • Tailwind CSS',
    description: ['위치 기반 중고 물품', '거래 플랫폼'],
    gradientColor: 'rgb(34, 197, 94)',
    image: '/images/green-deal.png',
  },
  {
    id: 'buzz-chatly',
    title: 'BUZZ CHATLY',
    subtitle: '실시간 SNS 플랫폼',
    techStack: 'React • JavaScript • Firebase',
    description: ['실시간 소셜 미디어', '네트워킹 서비스'],
    gradientColor: 'rgb(72, 187, 120)',
    image: '/images/buzz-chatly.png',
  },
  {
    id: 'echo-wave',
    title: 'ECHO WAVE',
    subtitle: '실시간 단체 채팅 앱',
    techStack: 'Vue.js • TypeScript • Firebase',
    description: ['실시간 채팅과', '단체 커뮤니케이션 서비스'],
    gradientColor: 'rgb(236, 72, 153)',
    image: '/images/echo-wave.png',
  },
  {
    id: 'portfolio',
    title: 'PORTFOLIO',
    subtitle: '개인 포트폴리오',
    techStack: 'Next.js • GSAP • Tailwind',
    description: ['우주 테마의 인터랙티브', '포트폴리오 웹사이트'],
    gradientColor: 'rgb(139, 92, 246)',
    image: '/images/portfolio.png',
  },
];
