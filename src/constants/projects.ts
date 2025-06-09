export interface ProjectOverview {
  period: string;
  role: string;
  teamComposition: string;
  performance: string;
}
export interface ProjectRole {
  roleTitle: string;
  roleContent: string;
}
export interface ProjectOutline {
  intro: {
    introText: string;
    features: string[];
  };
  achievements: {
    projects: string[];
    lectures: string[];
  };
  rolesAndResponsibilities: ProjectRole[];
}
export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  techStack: string;
  description: string[];
  gradientColor: string;
  image: string;
  projectImages: string[];
  favicon: string;
  githubUrl: string;
  demoUrl: string;
  overview: ProjectOverview;
  outline: ProjectOutline;
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
    projectImages: [
      'uuno-main.png',
      'uuno-template-list.png',
      'uuno-editor.png',
      'uuno-card-list.png',
      'uuno-card-detail.png',
      'uuno-shared.png',
    ],
    favicon: '/images/uuno/uuno-favicon.png',
    githubUrl: 'https://github.com/lyra-j/uuno',
    demoUrl: 'https://www.uuno.kr/',
    overview: {
      period: '2025.04.09 - 2025.04.30',
      role: '서브리더 & 프론트엔드 개발',
      teamComposition: '6명(FE 4명, DE 2명)',
      performance: '통계 분석 및 사용자 경험 개선',
    },
    outline: {
      intro: {
        introText:
          'UUNO는 스마트 명함 서비스로, 사용자가 드래그 앤 드롭 방식으로 쉽게 명함을 제작하고, 실시간으로 사용자 반응을 차트로 시각화하여 제공하는 인터랙티브 디지털 명함 플랫폼입니다.',
        features: [
          '드래그 앤 드롭 방식의 명함 제작',
          '실시간 사용자 반응 차트',
          '다양한 템플릿 제공',
          '모바일 및 데스크톱 최적화',
        ],
      },
      achievements: {
        projects: [
          'UUNO 프로젝트를 통해 팀워크와 협업 능력을 향상시켰습니다.',
          '사용자 경험을 개선하기 위해 통계 분석 도구를 활용하여 데이터 기반 의사 결정을 내렸습니다.',
        ],
        lectures: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          roleTitle: '서브리더',
          roleContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          roleTitle: '공유 시스템',
          roleContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          roleTitle: '통계 분석',
          roleContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
  },
  {
    id: 'medi-click',
    title: 'MEDICLICK',
    subtitle: '병원 예약 시스템',
    techStack: 'React • Next.js • TypeScript',
    description: ['지도 기반으로 병원을 찾고', '간편하게 예약하는 서비스'],
    gradientColor: 'rgb(59, 130, 246)',
    image: '/images/medi-click.png',
    projectImages: [
      'unno-card-detail.png',
      'unno-card-list.png',
      'unno-editor.png',
      'uuno-main.png',
      'uuno-shared.png',
      'uuno-template-list.png',
    ],
    favicon: '/images/uuno/uuno-favicon.png',
    githubUrl: 'https://github.com/lyra-j/uuno',
    demoUrl: 'https://www.uuno.kr/',
    overview: {
      period: '2025.04.09 - 2025.04.30',
      role: '프론트엔드 개발자',
      teamComposition: '6명(FE 4명, DE 2명)',
      performance: '통계 분석 및 사용자 경험 개선',
    },
    outline: {
      intro: {
        introText:
          'UUNO는 스마트 명함 서비스로, 사용자가 드래그 앤 드롭 방식으로 쉽게 명함을 제작하고, 실시간으로 사용자 반응을 차트로 시각화하여 제공하는 인터랙티브 디지털 명함 플랫폼입니다.',
        features: [
          '드래그 앤 드롭 방식의 명함 제작',
          '실시간 사용자 반응 차트',
          '다양한 템플릿 제공',
          '모바일 및 데스크톱 최적화',
        ],
      },
      achievements: {
        projects: [
          'UUNO 프로젝트를 통해 팀워크와 협업 능력을 향상시켰습니다.',
          '사용자 경험을 개선하기 위해 통계 분석 도구를 활용하여 데이터 기반 의사 결정을 내렸습니다.',
        ],
        lectures: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          roleTitle: '서브리더',
          roleContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          roleTitle: '공유 시스템',
          roleContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          roleTitle: '통계 분석',
          roleContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
  },
  {
    id: 'green-deal',
    title: 'GREEN DEAL',
    subtitle: '친환경 중고거래',
    techStack: 'React • Zustand • Tailwind CSS',
    description: ['위치 기반 중고 물품', '거래 플랫폼'],
    gradientColor: 'rgb(34, 197, 94)',
    image: '/images/green-deal.png',
    projectImages: [
      'unno-card-detail.png',
      'unno-card-list.png',
      'unno-editor.png',
      'uuno-main.png',
      'uuno-shared.png',
      'uuno-template-list.png',
    ],
    favicon: '/images/uuno/uuno-favicon.png',
    githubUrl: 'https://github.com/lyra-j/uuno',
    demoUrl: 'https://www.uuno.kr/',
    overview: {
      period: '2025.04.09 - 2025.04.30',
      role: '프론트엔드 개발자',
      teamComposition: '6명(FE 4명, DE 2명)',
      performance: '통계 분석 및 사용자 경험 개선',
    },
    outline: {
      intro: {
        introText:
          'UUNO는 스마트 명함 서비스로, 사용자가 드래그 앤 드롭 방식으로 쉽게 명함을 제작하고, 실시간으로 사용자 반응을 차트로 시각화하여 제공하는 인터랙티브 디지털 명함 플랫폼입니다.',
        features: [
          '드래그 앤 드롭 방식의 명함 제작',
          '실시간 사용자 반응 차트',
          '다양한 템플릿 제공',
          '모바일 및 데스크톱 최적화',
        ],
      },
      achievements: {
        projects: [
          'UUNO 프로젝트를 통해 팀워크와 협업 능력을 향상시켰습니다.',
          '사용자 경험을 개선하기 위해 통계 분석 도구를 활용하여 데이터 기반 의사 결정을 내렸습니다.',
        ],
        lectures: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          roleTitle: '서브리더',
          roleContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          roleTitle: '공유 시스템',
          roleContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          roleTitle: '통계 분석',
          roleContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
  },
  {
    id: 'buzz-chatly',
    title: 'BUZZ CHATLY',
    subtitle: '실시간 SNS 플랫폼',
    techStack: 'React • JavaScript • Firebase',
    description: ['실시간 소셜 미디어', '네트워킹 서비스'],
    gradientColor: 'rgb(72, 187, 120)',
    image: '/images/buzz-chatly.png',
    projectImages: [
      'unno-card-detail.png',
      'unno-card-list.png',
      'unno-editor.png',
      'uuno-main.png',
      'uuno-shared.png',
      'uuno-template-list.png',
    ],
    favicon: '/images/uuno/uuno-favicon.png',
    githubUrl: 'https://github.com/lyra-j/uuno',
    demoUrl: 'https://www.uuno.kr/',
    overview: {
      period: '2025.04.09 - 2025.04.30',
      role: '프론트엔드 개발자',
      teamComposition: '6명(FE 4명, DE 2명)',
      performance: '통계 분석 및 사용자 경험 개선',
    },
    outline: {
      intro: {
        introText:
          'UUNO는 스마트 명함 서비스로, 사용자가 드래그 앤 드롭 방식으로 쉽게 명함을 제작하고, 실시간으로 사용자 반응을 차트로 시각화하여 제공하는 인터랙티브 디지털 명함 플랫폼입니다.',
        features: [
          '드래그 앤 드롭 방식의 명함 제작',
          '실시간 사용자 반응 차트',
          '다양한 템플릿 제공',
          '모바일 및 데스크톱 최적화',
        ],
      },
      achievements: {
        projects: [
          'UUNO 프로젝트를 통해 팀워크와 협업 능력을 향상시켰습니다.',
          '사용자 경험을 개선하기 위해 통계 분석 도구를 활용하여 데이터 기반 의사 결정을 내렸습니다.',
        ],
        lectures: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          roleTitle: '서브리더',
          roleContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          roleTitle: '공유 시스템',
          roleContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          roleTitle: '통계 분석',
          roleContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
  },
  {
    id: 'echo-wave',
    title: 'ECHO WAVE',
    subtitle: '실시간 단체 채팅 앱',
    techStack: 'Vue.js • TypeScript • Firebase',
    description: ['실시간 채팅과', '단체 커뮤니케이션 서비스'],
    gradientColor: 'rgb(236, 72, 153)',
    image: '/images/echo-wave.png',
    projectImages: [
      'unno-card-detail.png',
      'unno-card-list.png',
      'unno-editor.png',
      'uuno-main.png',
      'uuno-shared.png',
      'uuno-template-list.png',
    ],
    favicon: '/images/uuno/uuno-favicon.png',
    githubUrl: 'https://github.com/lyra-j/uuno',
    demoUrl: 'https://www.uuno.kr/',
    overview: {
      period: '2025.04.09 - 2025.04.30',
      role: '프론트엔드 개발자',
      teamComposition: '6명(FE 4명, DE 2명)',
      performance: '통계 분석 및 사용자 경험 개선',
    },
    outline: {
      intro: {
        introText:
          'UUNO는 스마트 명함 서비스로, 사용자가 드래그 앤 드롭 방식으로 쉽게 명함을 제작하고, 실시간으로 사용자 반응을 차트로 시각화하여 제공하는 인터랙티브 디지털 명함 플랫폼입니다.',
        features: [
          '드래그 앤 드롭 방식의 명함 제작',
          '실시간 사용자 반응 차트',
          '다양한 템플릿 제공',
          '모바일 및 데스크톱 최적화',
        ],
      },
      achievements: {
        projects: [
          'UUNO 프로젝트를 통해 팀워크와 협업 능력을 향상시켰습니다.',
          '사용자 경험을 개선하기 위해 통계 분석 도구를 활용하여 데이터 기반 의사 결정을 내렸습니다.',
        ],
        lectures: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          roleTitle: '서브리더',
          roleContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          roleTitle: '공유 시스템',
          roleContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          roleTitle: '통계 분석',
          roleContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
  },
  {
    id: 'portfolio',
    title: 'PORTFOLIO',
    subtitle: '개인 포트폴리오',
    techStack: 'Next.js • GSAP • Tailwind',
    description: ['우주 테마의 인터랙티브', '포트폴리오 웹사이트'],
    gradientColor: 'rgb(139, 92, 246)',
    image: '/images/portfolio.png',
    projectImages: [
      'unno-card-detail.png',
      'unno-card-list.png',
      'unno-editor.png',
      'uuno-main.png',
      'uuno-shared.png',
      'uuno-template-list.png',
    ],
    favicon: '/images/uuno/uuno-favicon.png',
    githubUrl: 'https://github.com/lyra-j/uuno',
    demoUrl: 'https://www.uuno.kr/',
    overview: {
      period: '2025.04.09 - 2025.04.30',
      role: '프론트엔드 개발자',
      teamComposition: '6명(FE 4명, DE 2명)',
      performance: '통계 분석 및 사용자 경험 개선',
    },
    outline: {
      intro: {
        introText:
          'UUNO는 스마트 명함 서비스로, 사용자가 드래그 앤 드롭 방식으로 쉽게 명함을 제작하고, 실시간으로 사용자 반응을 차트로 시각화하여 제공하는 인터랙티브 디지털 명함 플랫폼입니다.',
        features: [
          '드래그 앤 드롭 방식의 명함 제작',
          '실시간 사용자 반응 차트',
          '다양한 템플릿 제공',
          '모바일 및 데스크톱 최적화',
        ],
      },
      achievements: {
        projects: [
          'UUNO 프로젝트를 통해 팀워크와 협업 능력을 향상시켰습니다.',
          '사용자 경험을 개선하기 위해 통계 분석 도구를 활용하여 데이터 기반 의사 결정을 내렸습니다.',
        ],
        lectures: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          roleTitle: '서브리더',
          roleContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          roleTitle: '공유 시스템',
          roleContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          roleTitle: '통계 분석',
          roleContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
  },
];
