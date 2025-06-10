export interface ProjectOverview {
  period: string;
  role: string;
  teamComposition: string;
  performance: string;
}
export interface ProjectTextCard {
  cardTitle: string;
  cardContent: string;
}
export interface ProjectOutline {
  intro: {
    introText: string;
    features: string[];
  };
  achievements: {
    projects: string[];
    collaboration: string[];
  };
  rolesAndResponsibilities: ProjectTextCard[];
}
export interface ProjectTagCard {
  title: string;
  tags: string[];
  description: string;
}
export interface ProjectRetrospection {
  content: ProjectTextCard[];
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
  skillStack: ProjectTagCard[];
  retrospection: ProjectRetrospection[];
  blogPosts: (ProjectTagCard & { url: string })[];
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
          'UUNO는 "You + Uno(하나)"라는 의미로, 나를 하나의 카드로 담는 인터랙티브 디지털 명함 플랫폼입니다. 드래그 앤 드롭 방식으로 쉽게 명함을 제작하고, 실시간 통계 분석을 통해 사용자 반응을 시각화하여 제공합니다.',
        features: [
          'Konva 기반 캔버스 에디터로 드래그 앤 드롭 명함 제작',
          '조회수, 저장수, 인터랙션 추적을 통한 실시간 통계 분석',
          'QR 코드, 카카오톡, HTML 소스 등 다양한 공유 방식 제공',
          '양면 디자인 및 가로/세로 모드 지원',
        ],
      },
      achievements: {
        projects: [
          'Konva를 활용한 캔버스 기반 에디터 개발로 사용자 친화적인 UI/UX 구현',
          'Supabase PostgreSQL 트리거 활용으로 서버 측 자동화 및 프론트엔드 코드 간결화',
          '브라우저 호환성을 고려한 하이브리드 접근법(EyeDropper API + html2canvas) 적용',
        ],
        collaboration: [
          '6명 팀 프로젝트에서 서브리더 역할 수행 및 GitHub Discussion을 통한 효율적 의사소통',
          '체계적인 트러블슈팅 문서화를 통한 팀 내 기술 공유 및 학습 문화 조성',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '서브리더 & 프로젝트 관리',
          cardContent:
            '팀 내 의사소통 창구 역할을 담당하며, GitHub Discussion을 활용한 협업 프로세스를 구축했습니다. 개발 일정 관리와 코드 리뷰를 통해 프로젝트 품질 향상에 기여했습니다.',
        },
        {
          cardTitle: '공유 시스템 개발',
          cardContent:
            '고유 URL 생성, QR 코드, 카카오톡 공유, HTML 태그 복사 등 다양한 공유 방식을 구현했습니다. 오픈 그래프 메타태그 적용으로 SNS 공유 시 미리보기 최적화를 달성했습니다.',
        },
        {
          cardTitle: '통계 분석 시스템 구현',
          cardContent:
            '세션 관리 시스템을 통한 정확한 사용자 활동 데이터 수집과 Chart.js를 활용한 실시간 통계 대시보드를 개발했습니다. 조회수, 저장수, 인터랙션 데이터를 시각화하여 사용자 참여도 측정이 가능하도록 구현했습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: [
          'React',
          'Next.js',
          'TypeScript',
          'Konva',
          'Chart.js',
          'TailwindCSS',
          'Zustand',
          'TanStack Query',
        ],
        description:
          'Next.js와 TypeScript로 타입 안전성을 확보하며, Konva를 활용한 캔버스 기반 드래그&드롭 에디터를 구현했습니다. Chart.js로 통계 대시보드를 시각화하고, Zustand와 TanStack Query로 효율적인 상태 관리를 구현했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'pnpm', 'Sentry', 'Notion', 'Figma'],
        description:
          'Vercel을 통해 자동 배포 파이프라인을 구축하고, GitHub로 협업 및 버전 관리를 수행했습니다. Sentry로 에러 모니터링을 설정하고, Notion과 Figma를 활용하여 문서화 및 디자인 시스템을 관리했습니다.',
      },
      {
        title: 'Backend & Database',
        tags: ['Supabase', 'PostgreSQL'],
        description:
          'Supabase를 활용하여 실시간 데이터베이스, 사용자 인증, 파일 스토리지 기능을 구현했습니다. PostgreSQL 트리거를 활용한 서버 측 자동화로 프론트엔드 코드를 간결하게 유지했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '핵심 기능 구현 성공',
            cardContent:
              '디지털 명함 플랫폼의 공유 및 분석(인터렉션) 시스템을 성공적으로 구현했습니다. 조회 수, 저장 수 추적 로직과 세션 관리를 통한 정확한 사용자 활동 데이터 수집 기반을 마련했습니다.',
          },
          {
            cardTitle: '브라우저 호환성 고려한 기술 선택',
            cardContent:
              'EyeDropper API와 html2canvas를 조합한 하이브리드 접근법으로 다양한 브라우저 환경에서 안정적으로 작동하는 솔루션을 구현했습니다.',
          },
          {
            cardTitle: '효율적인 백엔드 자동화',
            cardContent:
              'Supabase PostgreSQL 트리거를 활용하여 서버 측 자동화를 구현하고, 프론트엔드 코드를 간결하게 유지할 수 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '프로젝트 초기 기획 부족',
            cardContent:
              '초반에 기획을 세세히 잡지 않아 개발 중 요구사항이 자주 변경되었습니다. 이로 인해 개발 일정이 지연되고 불필요한 작업이 발생했습니다.',
          },
          {
            cardTitle: '코드 컨벤션 미정립',
            cardContent:
              '코드 컨벤션을 처음부터 꼼꼼히 정하지 않아 리팩토링 과정에서 예상보다 많은 시간이 소요되었습니다. 일관성 있는 코드 작성에 어려움이 있었습니다.',
          },
          {
            cardTitle: '기능 완성도 및 예상치 못한 버그',
            cardContent:
              '체류시간 분석 기능을 완성하지 못했고, 모달 컴포넌트의 생명주기와 상태 관리 충돌로 예상치 못한 버그가 발생했습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '프로젝트 초기 설계 프로세스 강화',
            cardContent:
              '향후 프로젝트에서는 초기 단계에서 팀원들과 기획과 설계를 충분히 논의하고, GitHub Discussion을 적극 활용하여 의사소통을 개선할 예정입니다.',
          },
          {
            cardTitle: '체계적인 코드 품질 관리',
            cardContent:
              '명확한 코드 컨벤션을 정립하고, 검증된 라이브러리(day.js 등)를 적극 활용하여 개발 효율성을 향상시키고 오류 가능성을 감소시킬 계획입니다.',
          },
          {
            cardTitle: '사용자 경험 개선을 위한 기능 완성',
            cardContent:
              '체류시간 분석 기능 완성, 통계 대시보드 기간 선택 기능 추가, 온보딩 기능 구현을 통해 사용자가 더 나은 데이터 분석 경험을 할 수 있도록 개선할 예정입니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: '"이미지 어디갔어?!" 타이밍 이슈로 인한 로드 실패 완전정복',
        tags: ['React', '이미지 업로드', 'Blob URL', '메모리 누수'],
        description:
          '이미지 업로드 시 blob URL 에러로 이미지가 간헐적으로 로드되지 않는 문제를 해결한 과정. 임시 URL에서 영구 URL로의 명확한 전환과 메모리 누수 방지를 통해 안정성을 크게 개선했습니다.',
        url: 'https://velog.io/@sum529/Trouble-Shooting-이미지-업로드-시-이미지-로드-실패',
      },
      {
        title: '모달이 첫 클릭에 바로 닫혀버리는 미스터리 해결기',
        tags: ['React', '모달', '상태관리', 'useEffect'],
        description:
          '공유하기 모달이 첫 클릭 시 바로 닫히는 문제를 해결한 과정. 다중 상태 관리 시스템과 useEffect cleanup 함수의 잘못된 사용으로 인한 생명주기 충돌 문제를 상태 동기화와 조건부 로직 개선으로 해결했습니다.',
        url: 'https://velog.io/@sum529/공유하기-모달-문제-트러블슈팅',
      },
    ],
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
      'medi-click-main.png',
      'medi-click-login.png',
      'medi-click-detail.png',
      'medi-click-reservation.png',
      'medi-click-hospital-menu.png',
      'medi-click-user-menu.png',
      'medi-click-user-menu-detail.png',
    ],
    favicon: '/images/medi-click/medi-click-favicon.png',
    githubUrl: 'https://github.com/SuimKim/medi-click',
    demoUrl: 'https://medi-click-liart.vercel.app/',
    overview: {
      period: '2025.03.20 - 2025.03.27',
      role: '프론트엔드 개발',
      teamComposition: '5명(FE 5명)',
      performance: '병원 상세 정보, 병원 측 마이 페이지',
    },
    outline: {
      intro: {
        introText:
          'MEDICLICK는 병원 예약 시스템으로, 사용자가 지도 기반으로 병원을 찾고 간편하게 예약할 수 있는 서비스입니다. 병원 상세 정보와 사용자 맞춤형 기능을 제공합니다.',
        features: [
          '지도 기반 병원 검색',
          '병원 상세 정보 제공',
          '간편한 예약 시스템',
          '사용자 맞춤형 기능',
        ],
      },
      achievements: {
        projects: [
          'MEDICLICK 프로젝트를 통해 프론트엔드 개발 능력을 향상시켰습니다.',
          '병원 예약 시스템의 사용자 경험을 개선하기 위해 다양한 UI/UX 디자인 원칙을 적용했습니다.',
        ],
        collaboration: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '병원 상세 정보',
          cardContent:
            '병원 상세 정보를 제공하는 페이지를 개발했습니다. 사용자가 병원의 위치, 진료 과목, 의사 정보 등을 쉽게 확인할 수 있도록 UI를 설계했습니다.',
        },
        {
          cardTitle: '병원 측 마이 페이지',
          cardContent:
            '병원 측에서 예약 현황을 관리할 수 있는 마이 페이지를 구현했습니다. 병원 관리자가 예약 정보를 쉽게 확인하고 관리할 수 있도록 기능을 개발했습니다.',
        },
        {
          cardTitle: '피그마를 통한 디자인',
          cardContent:
            '프로젝트 초기 단계에서 피그마를 사용하여 UI/UX 디자인을 설계했습니다. 사용자 경험을 고려한 직관적인 인터페이스를 구현하기 위해 디자인 시스템을 구축했습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: ['React', 'Next.js', 'TypeScript', 'Konva', 'Chart.js'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하며, Konva와 Chart.js를 활용하여 실시간 차트 시각화를 구현했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'Prettier', 'ESLint'],
        description:
          'Vercel을 통해 배포하고, GitHub를 사용하여 버전 관리를 수행했습니다.',
      },
      {
        title: 'Backend',
        tags: ['Supabase'],
        description:
          'Supabase를 사용하여 실시간 데이터베이스와 인증 기능을 구현했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '체계적인 프로젝트 관리',
            cardContent:
              '프로젝트 초기 단계에서 명확한 목표 설정과 역할 분담을 통해 체계적으로 프로젝트를 관리할 수 있었습니다.',
          },
          {
            cardTitle: '적극적인 의사소통',
            cardContent:
              '팀원 간의 원활한 소통으로 문제 상황을 빠르게 공유하고 해결책을 함께 모색할 수 있었습니다.',
          },
          {
            cardTitle: '사용자 중심 개발',
            cardContent:
              '사용자 피드백을 적극 수집하고 반영하여 실제로 사용하기 편한 서비스를 만들 수 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 부족',
            cardContent:
              '개발 일정에 쫓겨 테스트 코드 작성을 충분히 하지 못했습니다. 이로 인해 버그 발견이 늦어지는 경우가 있었습니다.',
          },
          {
            cardTitle: '성능 최적화 미흡',
            cardContent:
              '초기 번들 사이즈가 커서 로딩 속도가 느린 문제가 있었습니다. 코드 스플리팅 적용이 늦어졌습니다.',
          },
          {
            cardTitle: '문서화 부족',
            cardContent:
              '프로젝트 문서화가 부족하여 신규 팀원이 프로젝트에 적응하는 데 어려움을 겪었습니다. 문서화를 체계적으로 진행할 필요가 있습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 작성',
            cardContent:
              '향후 프로젝트에서는 테스트 코드를 우선적으로 작성하여 코드 품질을 높이고, 버그 발생을 최소화할 계획입니다.',
          },
          {
            cardTitle: '성능 최적화',
            cardContent:
              '코드 스플리팅과 이미지 최적화를 통해 초기 로딩 속도를 개선하고, 사용자 경험을 향상시킬 예정입니다.',
          },
          {
            cardTitle: '문서화 강화',
            cardContent:
              '프로젝트 문서를 체계적으로 작성하여 신규 팀원이 쉽게 이해하고 참여할 수 있도록 할 것입니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: 'UUNO 프로젝트 소개',
        tags: ['프로젝트', '디지털 명함', 'React'],
        description:
          'UUNO 프로젝트의 개요와 주요 기능, 개발 과정에 대한 블로그 글입니다.',
        url: 'https://example.com/uuno-project-introduction',
      },
      {
        title: 'React와 Next.js를 활용한 인터랙티브 UI 개발',
        tags: ['React', 'Next.js', 'UI/UX'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하는 방법에 대한 글입니다.',
        url: 'https://example.com/react-nextjs-interactive-ui',
      },
    ],
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
        collaboration: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '서브리더',
          cardContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          cardTitle: '공유 시스템',
          cardContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          cardTitle: '통계 분석',
          cardContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: ['React', 'Next.js', 'TypeScript', 'Konva', 'Chart.js'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하며, Konva와 Chart.js를 활용하여 실시간 차트 시각화를 구현했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'Prettier', 'ESLint'],
        description:
          'Vercel을 통해 배포하고, GitHub를 사용하여 버전 관리를 수행했습니다.',
      },
      {
        title: 'Backend',
        tags: ['Supabase'],
        description:
          'Supabase를 사용하여 실시간 데이터베이스와 인증 기능을 구현했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '체계적인 프로젝트 관리',
            cardContent:
              '프로젝트 초기 단계에서 명확한 목표 설정과 역할 분담을 통해 체계적으로 프로젝트를 관리할 수 있었습니다.',
          },
          {
            cardTitle: '적극적인 의사소통',
            cardContent:
              '팀원 간의 원활한 소통으로 문제 상황을 빠르게 공유하고 해결책을 함께 모색할 수 있었습니다.',
          },
          {
            cardTitle: '사용자 중심 개발',
            cardContent:
              '사용자 피드백을 적극 수집하고 반영하여 실제로 사용하기 편한 서비스를 만들 수 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 부족',
            cardContent:
              '개발 일정에 쫓겨 테스트 코드 작성을 충분히 하지 못했습니다. 이로 인해 버그 발견이 늦어지는 경우가 있었습니다.',
          },
          {
            cardTitle: '성능 최적화 미흡',
            cardContent:
              '초기 번들 사이즈가 커서 로딩 속도가 느린 문제가 있었습니다. 코드 스플리팅 적용이 늦어졌습니다.',
          },
          {
            cardTitle: '문서화 부족',
            cardContent:
              '프로젝트 문서화가 부족하여 신규 팀원이 프로젝트에 적응하는 데 어려움을 겪었습니다. 문서화를 체계적으로 진행할 필요가 있습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 작성',
            cardContent:
              '향후 프로젝트에서는 테스트 코드를 우선적으로 작성하여 코드 품질을 높이고, 버그 발생을 최소화할 계획입니다.',
          },
          {
            cardTitle: '성능 최적화',
            cardContent:
              '코드 스플리팅과 이미지 최적화를 통해 초기 로딩 속도를 개선하고, 사용자 경험을 향상시킬 예정입니다.',
          },
          {
            cardTitle: '문서화 강화',
            cardContent:
              '프로젝트 문서를 체계적으로 작성하여 신규 팀원이 쉽게 이해하고 참여할 수 있도록 할 것입니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: 'UUNO 프로젝트 소개',
        tags: ['프로젝트', '디지털 명함', 'React'],
        description:
          'UUNO 프로젝트의 개요와 주요 기능, 개발 과정에 대한 블로그 글입니다.',
        url: 'https://example.com/uuno-project-introduction',
      },
      {
        title: 'React와 Next.js를 활용한 인터랙티브 UI 개발',
        tags: ['React', 'Next.js', 'UI/UX'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하는 방법에 대한 글입니다.',
        url: 'https://example.com/react-nextjs-interactive-ui',
      },
    ],
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
        collaboration: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '서브리더',
          cardContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          cardTitle: '공유 시스템',
          cardContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          cardTitle: '통계 분석',
          cardContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: ['React', 'Next.js', 'TypeScript', 'Konva', 'Chart.js'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하며, Konva와 Chart.js를 활용하여 실시간 차트 시각화를 구현했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'Prettier', 'ESLint'],
        description:
          'Vercel을 통해 배포하고, GitHub를 사용하여 버전 관리를 수행했습니다.',
      },
      {
        title: 'Backend',
        tags: ['Supabase'],
        description:
          'Supabase를 사용하여 실시간 데이터베이스와 인증 기능을 구현했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '체계적인 프로젝트 관리',
            cardContent:
              '프로젝트 초기 단계에서 명확한 목표 설정과 역할 분담을 통해 체계적으로 프로젝트를 관리할 수 있었습니다.',
          },
          {
            cardTitle: '적극적인 의사소통',
            cardContent:
              '팀원 간의 원활한 소통으로 문제 상황을 빠르게 공유하고 해결책을 함께 모색할 수 있었습니다.',
          },
          {
            cardTitle: '사용자 중심 개발',
            cardContent:
              '사용자 피드백을 적극 수집하고 반영하여 실제로 사용하기 편한 서비스를 만들 수 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 부족',
            cardContent:
              '개발 일정에 쫓겨 테스트 코드 작성을 충분히 하지 못했습니다. 이로 인해 버그 발견이 늦어지는 경우가 있었습니다.',
          },
          {
            cardTitle: '성능 최적화 미흡',
            cardContent:
              '초기 번들 사이즈가 커서 로딩 속도가 느린 문제가 있었습니다. 코드 스플리팅 적용이 늦어졌습니다.',
          },
          {
            cardTitle: '문서화 부족',
            cardContent:
              '프로젝트 문서화가 부족하여 신규 팀원이 프로젝트에 적응하는 데 어려움을 겪었습니다. 문서화를 체계적으로 진행할 필요가 있습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 작성',
            cardContent:
              '향후 프로젝트에서는 테스트 코드를 우선적으로 작성하여 코드 품질을 높이고, 버그 발생을 최소화할 계획입니다.',
          },
          {
            cardTitle: '성능 최적화',
            cardContent:
              '코드 스플리팅과 이미지 최적화를 통해 초기 로딩 속도를 개선하고, 사용자 경험을 향상시킬 예정입니다.',
          },
          {
            cardTitle: '문서화 강화',
            cardContent:
              '프로젝트 문서를 체계적으로 작성하여 신규 팀원이 쉽게 이해하고 참여할 수 있도록 할 것입니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: 'UUNO 프로젝트 소개',
        tags: ['프로젝트', '디지털 명함', 'React'],
        description:
          'UUNO 프로젝트의 개요와 주요 기능, 개발 과정에 대한 블로그 글입니다.',
        url: 'https://example.com/uuno-project-introduction',
      },
      {
        title: 'React와 Next.js를 활용한 인터랙티브 UI 개발',
        tags: ['React', 'Next.js', 'UI/UX'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하는 방법에 대한 글입니다.',
        url: 'https://example.com/react-nextjs-interactive-ui',
      },
    ],
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
        collaboration: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '서브리더',
          cardContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          cardTitle: '공유 시스템',
          cardContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          cardTitle: '통계 분석',
          cardContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: ['React', 'Next.js', 'TypeScript', 'Konva', 'Chart.js'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하며, Konva와 Chart.js를 활용하여 실시간 차트 시각화를 구현했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'Prettier', 'ESLint'],
        description:
          'Vercel을 통해 배포하고, GitHub를 사용하여 버전 관리를 수행했습니다.',
      },
      {
        title: 'Backend',
        tags: ['Supabase'],
        description:
          'Supabase를 사용하여 실시간 데이터베이스와 인증 기능을 구현했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '체계적인 프로젝트 관리',
            cardContent:
              '프로젝트 초기 단계에서 명확한 목표 설정과 역할 분담을 통해 체계적으로 프로젝트를 관리할 수 있었습니다.',
          },
          {
            cardTitle: '적극적인 의사소통',
            cardContent:
              '팀원 간의 원활한 소통으로 문제 상황을 빠르게 공유하고 해결책을 함께 모색할 수 있었습니다.',
          },
          {
            cardTitle: '사용자 중심 개발',
            cardContent:
              '사용자 피드백을 적극 수집하고 반영하여 실제로 사용하기 편한 서비스를 만들 수 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 부족',
            cardContent:
              '개발 일정에 쫓겨 테스트 코드 작성을 충분히 하지 못했습니다. 이로 인해 버그 발견이 늦어지는 경우가 있었습니다.',
          },
          {
            cardTitle: '성능 최적화 미흡',
            cardContent:
              '초기 번들 사이즈가 커서 로딩 속도가 느린 문제가 있었습니다. 코드 스플리팅 적용이 늦어졌습니다.',
          },
          {
            cardTitle: '문서화 부족',
            cardContent:
              '프로젝트 문서화가 부족하여 신규 팀원이 프로젝트에 적응하는 데 어려움을 겪었습니다. 문서화를 체계적으로 진행할 필요가 있습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 작성',
            cardContent:
              '향후 프로젝트에서는 테스트 코드를 우선적으로 작성하여 코드 품질을 높이고, 버그 발생을 최소화할 계획입니다.',
          },
          {
            cardTitle: '성능 최적화',
            cardContent:
              '코드 스플리팅과 이미지 최적화를 통해 초기 로딩 속도를 개선하고, 사용자 경험을 향상시킬 예정입니다.',
          },
          {
            cardTitle: '문서화 강화',
            cardContent:
              '프로젝트 문서를 체계적으로 작성하여 신규 팀원이 쉽게 이해하고 참여할 수 있도록 할 것입니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: 'UUNO 프로젝트 소개',
        tags: ['프로젝트', '디지털 명함', 'React'],
        description:
          'UUNO 프로젝트의 개요와 주요 기능, 개발 과정에 대한 블로그 글입니다.',
        url: 'https://example.com/uuno-project-introduction',
      },
      {
        title: 'React와 Next.js를 활용한 인터랙티브 UI 개발',
        tags: ['React', 'Next.js', 'UI/UX'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하는 방법에 대한 글입니다.',
        url: 'https://example.com/react-nextjs-interactive-ui',
      },
    ],
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
        collaboration: [
          '프론트엔드 개발에 대한 심화 강의를 수강하며 최신 기술 트렌드를 학습했습니다.',
          'UI/UX 디자인 원칙에 대한 강의를 통해 사용자 중심의 디자인 접근 방식을 익혔습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '서브리더',
          cardContent:
            '프로젝트 진행 상황을 관리하고, 팀원 간의 원활한 소통을 도모했습니다. 또한, 개발 일정 조율과 코드 리뷰를 통해 프로젝트 품질을 높였습니다.',
        },
        {
          cardTitle: '공유 시스템',
          cardContent:
            '사용자가 만든 명함을 다른 사용자와 쉽게 공유할 수 있는 시스템을 구현했습니다. 이를 통해 사용자 간의 네트워킹을 촉진하고, 서비스의 활용도를 높였습니다.',
        },
        {
          cardTitle: '통계 분석',
          cardContent:
            '사용자 반응 데이터를 수집하고 분석하여, 명함 디자인과 기능 개선에 활용했습니다. 이를 통해 사용자 경험을 지속적으로 향상시켰습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: ['React', 'Next.js', 'TypeScript', 'Konva', 'Chart.js'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하며, Konva와 Chart.js를 활용하여 실시간 차트 시각화를 구현했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'Prettier', 'ESLint'],
        description:
          'Vercel을 통해 배포하고, GitHub를 사용하여 버전 관리를 수행했습니다.',
      },
      {
        title: 'Backend',
        tags: ['Supabase'],
        description:
          'Supabase를 사용하여 실시간 데이터베이스와 인증 기능을 구현했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '체계적인 프로젝트 관리',
            cardContent:
              '프로젝트 초기 단계에서 명확한 목표 설정과 역할 분담을 통해 체계적으로 프로젝트를 관리할 수 있었습니다.',
          },
          {
            cardTitle: '적극적인 의사소통',
            cardContent:
              '팀원 간의 원활한 소통으로 문제 상황을 빠르게 공유하고 해결책을 함께 모색할 수 있었습니다.',
          },
          {
            cardTitle: '사용자 중심 개발',
            cardContent:
              '사용자 피드백을 적극 수집하고 반영하여 실제로 사용하기 편한 서비스를 만들 수 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 부족',
            cardContent:
              '개발 일정에 쫓겨 테스트 코드 작성을 충분히 하지 못했습니다. 이로 인해 버그 발견이 늦어지는 경우가 있었습니다.',
          },
          {
            cardTitle: '성능 최적화 미흡',
            cardContent:
              '초기 번들 사이즈가 커서 로딩 속도가 느린 문제가 있었습니다. 코드 스플리팅 적용이 늦어졌습니다.',
          },
          {
            cardTitle: '문서화 부족',
            cardContent:
              '프로젝트 문서화가 부족하여 신규 팀원이 프로젝트에 적응하는 데 어려움을 겪었습니다. 문서화를 체계적으로 진행할 필요가 있습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '테스트 코드 작성',
            cardContent:
              '향후 프로젝트에서는 테스트 코드를 우선적으로 작성하여 코드 품질을 높이고, 버그 발생을 최소화할 계획입니다.',
          },
          {
            cardTitle: '성능 최적화',
            cardContent:
              '코드 스플리팅과 이미지 최적화를 통해 초기 로딩 속도를 개선하고, 사용자 경험을 향상시킬 예정입니다.',
          },
          {
            cardTitle: '문서화 강화',
            cardContent:
              '프로젝트 문서를 체계적으로 작성하여 신규 팀원이 쉽게 이해하고 참여할 수 있도록 할 것입니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: 'UUNO 프로젝트 소개',
        tags: ['프로젝트', '디지털 명함', 'React'],
        description:
          'UUNO 프로젝트의 개요와 주요 기능, 개발 과정에 대한 블로그 글입니다.',
        url: 'https://example.com/uuno-project-introduction',
      },
      {
        title: 'React와 Next.js를 활용한 인터랙티브 UI 개발',
        tags: ['React', 'Next.js', 'UI/UX'],
        description:
          'React와 Next.js를 사용하여 인터랙티브한 사용자 경험을 제공하는 방법에 대한 글입니다.',
        url: 'https://example.com/react-nextjs-interactive-ui',
      },
    ],
  },
];
