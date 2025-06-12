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
export interface ProjectOutlineType {
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
export interface ProjectRetrospectionType {
  content: ProjectTextCard[];
}
export interface BlogPost extends ProjectTagCard {
  url: string;
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
  outline: ProjectOutlineType;
  skillStack: ProjectTagCard[];
  retrospection: ProjectRetrospectionType[];
  blogPosts: BlogPost[];
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
    description: ['카카오맵으로 병원을 찾고', '클릭 한 번으로 예약 완료'],
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
      performance: '병원 상세 정보 • 병원 측 마이페이지',
    },
    outline: {
      intro: {
        introText:
          'MEDICLICK은 "한 번의 클릭으로 병원을 쉽게 예약"할 수 있는 웹 애플리케이션입니다. 카카오맵 API를 활용한 지도 기반 병원 검색과 공공 API를 통한 상세 정보 제공으로 사용자가 편리하게 병원을 비교하고 예약할 수 있는 서비스입니다.',
        features: [
          '카카오맵 API 기반 지도 검색 및 병원 위치 확인',
          '공공 API를 활용한 SSG 방식의 병원 상세 정보 제공',
          '실시간 중복 방지 처리가 적용된 예약 시스템',
          '환자/병원 계정별 차별화된 마이페이지 제공',
        ],
      },
      achievements: {
        projects: [
          '공공 API와 SSG 방식을 활용하여 성능 최적화된 병원 상세 페이지 구현',
          '카카오맵 정적 지도 API를 통한 직관적인 위치 정보 시각화',
          '계정 타입별 차별화된 UI/UX 제공으로 사용자 경험 개선',
        ],
        collaboration: [
          '5명 팀 프로젝트에서 백엔드 연동 및 API 통합 담당',
          '피그마를 활용한 체계적인 UI/UX 디자인 설계 및 구현',
          '트러블슈팅 문서화를 통한 팀 내 기술 공유',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '병원 상세 정보 페이지 개발',
          cardContent:
            '공공 API를 활용한 SSG 방식으로 병원 상세 페이지를 구현했습니다. 카카오맵 정적 지도 API를 통해 병원 위치를 시각화하고, 영업시간, 진료과, 리뷰 등 종합적인 정보를 제공하는 사용자 친화적인 인터페이스를 개발했습니다.',
        },
        {
          cardTitle: '병원 측 마이페이지 시스템',
          cardContent:
            '병원 관리자를 위한 전용 마이페이지를 구현하여 예약 현황 조회, 예약 상태 관리, 날짜별 필터링 기능을 개발했습니다. 환자용 마이페이지와 차별화된 UI/UX를 제공하여 병원 운영 효율성을 높였습니다.',
        },
        {
          cardTitle: 'API 통합 및 메타데이터 최적화',
          cardContent:
            'Next.js 서버/클라이언트 컴포넌트에서의 API 호출 문제를 해결하고, generateMetadata를 활용한 SEO 최적화를 구현했습니다. 환경별 URL 처리 로직을 통해 안정적인 API 통신을 보장했습니다.',
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
          'TailwindCSS',
          'shadcn/ui',
          'Zustand',
        ],
        description:
          'Next.js의 SSG와 서버 컴포넌트를 활용하여 성능 최적화된 사용자 인터페이스를 구현했습니다. TypeScript로 타입 안전성을 보장하고, Zustand로 효율적인 상태 관리를 구현했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'Figma', 'ESLint', 'Prettier'],
        description:
          'Vercel을 통한 자동 배포 파이프라인 구축과 GitHub 협업 워크플로우를 관리했습니다. Figma를 활용한 디자인 시스템 구축으로 일관된 UI/UX를 구현했습니다.',
      },
      {
        title: 'Backend & API',
        tags: ['Supabase', '공공API', '카카오맵API'],
        description:
          'Supabase를 활용한 인증 및 데이터베이스 관리와 공공 API 연동을 통한 실시간 병원 정보 제공을 구현했습니다. 카카오맵 API로 지리적 정보 서비스를 통합했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: 'SSG 방식 성능 최적화',
            cardContent:
              '공공 API를 활용한 SSG 방식으로 병원 상세 페이지를 구현하여 초기 로딩 속도를 크게 개선할 수 있었습니다. 정적 생성을 통해 사용자 경험을 향상시켰습니다.',
          },
          {
            cardTitle: '계정별 차별화된 UX 설계',
            cardContent:
              '환자용과 병원용 마이페이지를 각각의 사용 목적에 맞게 설계하여 사용자별 최적화된 경험을 제공할 수 있었습니다. 사용자 중심의 설계 접근법을 실제로 적용했습니다.',
          },
          {
            cardTitle: 'API 통합 및 문제 해결',
            cardContent:
              'Next.js 서버/클라이언트 컴포넌트 환경에서 발생한 API 호출 문제를 체계적으로 분석하고 해결하여 안정적인 서비스를 구축할 수 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '초기 기획 단계 소통 부족',
            cardContent:
              '프로젝트 초기에 병원측 요구사항에 대한 깊이 있는 분석이 부족했습니다. 사용자 페르소나를 더 구체적으로 설정했다면 더 나은 기능을 구현할 수 있었을 것입니다.',
          },
          {
            cardTitle: '예약 중복 처리 완성도',
            cardContent:
              '예약 시간 중복 방지 처리는 구현했지만, 동시 접속자가 많을 때의 경합 상태(Race Condition) 처리가 완전하지 않았습니다. 더 견고한 예약 시스템이 필요했습니다.',
          },
          {
            cardTitle: '모바일 최적화 미흡',
            cardContent:
              '데스크톱 중심으로 개발을 진행하여 모바일 환경에서의 사용성 테스트가 부족했습니다. 특히 카카오맵 모바일 인터랙션 최적화가 아쉬웠습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '사용자 피드백 기반 기능 개선',
            cardContent:
              '실제 병원 관계자와 환자의 피드백을 수집하여 예약 프로세스를 개선하고, 직관적인 사용자 여정을 설계할 예정입니다.',
          },
          {
            cardTitle: '예약 시스템 안정성 강화',
            cardContent:
              'Supabase의 트랜잭션 기능을 활용하여 예약 중복 문제를 완전히 해결하고, 예약 확정 알림 기능을 추가하여 사용자 편의성을 향상시킬 계획입니다.',
          },
          {
            cardTitle: '반응형 디자인 완성도 제고',
            cardContent:
              '모든 디바이스에서 최적화된 경험을 제공하기 위해 모바일 퍼스트 접근법을 적용하고, 카카오맵 모바일 터치 인터랙션을 개선할 예정입니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: 'Next.js 서버/클라이언트 컴포넌트 API 호출 오류',
        tags: [
          'Next.js',
          '서버 컴포넌트',
          'API 호출',
          'generateMetadata',
          'URL 파싱',
        ],
        description:
          'Next.js 서버 컴포넌트에서 API 호출 시 "Failed to parse URL" 오류가 발생하는 문제를 해결한 과정. 서버/클라이언트 실행 환경 차이로 인한 상대경로 해석 오류를 환경 감지 로직과 절대 URL 사용으로 해결했습니다.',
        url: 'https://velog.io/@sum529/Trouble-Shooting-Next.js-서버클라이언트-컴포넌트-API-호출-오류',
      },
      {
        title:
          '클라이언트 사이드에서 계정별 페이지 분기 처리 중 발생한 초기 렌더링 문제 해결',
        tags: [
          'React',
          '조건부 렌더링',
          '초기 렌더링',
          'useState',
          'useEffect',
        ],
        description:
          '클라이언트 사이드에서 계정별 페이지 분기 처리 시 초기 렌더링 깜빡임 문제를 해결한 과정. 비동기 상태 판단으로 인한 잘못된 UI 노출을 로딩 상태 관리로 해결하고, 서버 사이드 리다이렉트의 필요성을 깨달은 트러블슈팅입니다.',
        url: 'https://velog.io/@sum529/Trouble-Shooting-클라이언트-사이드에서-계정별-페이지-분기-처리-중-발생한-초기-렌더링-문제-해결',
      },
      {
        title: '개발 마감 2일 전, 사용자 권한 구분이 없다는 걸 깨달았을 때',
        tags: [
          'DB 설계',
          '사용자 권한',
          '개발 일지',
          '기술적 타협',
          '프로젝트 관리',
        ],
        description:
          '병원 예약 시스템 개발 막판에 발견한 치명적 문제: 병원과 일반 사용자를 구분할 방법이 전혀 없었다. 남은 개발 기간 2일, DB 구조 대대적 수정은 불가능한 상황에서 이메일 패턴을 활용한 응급처치로 위기를 넘긴 이야기. 완벽하지 않은 해결책이지만 주어진 조건에서 최선의 선택을 했던 기술적 타협의 기록.',
        url: 'https://velog.io/@sum529/프로젝트-의사결정-마이페이지-만들다가-멘붕-온-순간-Medi-Click',
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
      'green-deal-main.png',
      'green-deal-signup.png',
      'green-deal-signin.png',
      'green-deal-product-list.png',
      'green-deal-product-detail.png',
      'green-deal-product-registration.png',
      'green-deal-mypage.png',
    ],
    favicon: '/images/green-deal/green-deal-favicon.png',
    githubUrl: 'https://github.com/ImJaeOne/green-deal',
    demoUrl: 'https://green-deal.vercel.app/',
    overview: {
      period: '2025.02.26 - 2025.03.04',
      role: '프론트엔드 개발',
      teamComposition: '6명(FE 6명)',
      performance: '물품 등록 및 수정 구현',
    },
    outline: {
      intro: {
        introText:
          'Green Deal은 지도 기반 중고 마켓 플랫폼으로, 사용자가 원하는 지역에서 직접 상품을 검색하고 거래할 수 있는 스마트한 중고 거래 서비스입니다. 카카오맵 API를 활용하여 위치 기반 상품 검색과 직관적인 거래 환경을 제공합니다.',
        features: [
          '지도 기반 상품 검색 및 거래',
          '카카오맵 API 연동을 통한 위치 서비스',
          '직관적인 상품 등록 및 수정 시스템',
          'PC와 모바일 최적화된 반응형 디자인',
        ],
      },
      achievements: {
        projects: [
          'Green Deal 프로젝트를 통해 팀 단위 협업과 Git 브랜치 전략을 체득했습니다.',
          'TanStack Query와 Zustand를 활용한 상태 관리 최적화를 경험했습니다.',
          '카카오맵 API 연동을 통해 외부 API 활용 능력을 향상시켰습니다.',
        ],
        collaboration: [
          'React 기반 프론트엔드 개발 심화 과정을 수강하며 최신 개발 트렌드를 학습했습니다.',
          'UI/UX 디자인과 사용자 경험 개선에 대한 실무적 접근 방식을 익혔습니다.',
          'Pull Request 템플릿을 활용한 체계적인 코드 리뷰 프로세스를 경험했습니다.',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '상품 등록/수정 시스템',
          cardContent:
            '사용자가 쉽게 상품을 등록하고 수정할 수 있는 직관적인 인터페이스를 구현했습니다. 이미지 업로드, 카테고리 선택, 상품 상태 관리 등 전체적인 상품 관리 플로우를 설계하고 개발했습니다.',
        },
        {
          cardTitle: '카카오맵 위치 연동',
          cardContent:
            '카카오맵 API를 활용하여 지도에서 위치를 클릭하면 자동으로 주소가 변환되는 기능을 구현했습니다. 또한 도로명 주소 검색을 통해 정확한 위치 정보를 입력할 수 있도록 지원하여 사용자 편의성을 크게 향상시켰습니다.',
        },
        {
          cardTitle: '데이터 최적화',
          cardContent:
            'TanStack Query를 활용하여 상품 데이터의 효율적인 캐싱과 동기화를 구현했습니다. 이를 통해 사용자 경험을 개선하고, 서버 부하를 줄이며 앱의 성능을 최적화했습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: [
          'React',
          'JavaScript',
          'TanStack Query',
          'Zustand',
          'Tailwind CSS',
        ],
        description:
          'React와 JavaScript를 기반으로 사용자 친화적인 인터페이스를 구현했습니다. TanStack Query로 서버 상태 관리를 최적화하고, Zustand를 활용하여 전역 상태를 효율적으로 관리했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'Git', 'Visual Studio Code'],
        description:
          'Vercel을 통해 안정적인 배포 환경을 구축하고, GitHub와 Git을 사용하여 체계적인 버전 관리와 협업을 진행했습니다.',
      },
      {
        title: 'Backend & API',
        tags: ['Supabase', '카카오맵 API', 'react-router-dom'],
        description:
          'Supabase를 활용하여 실시간 데이터베이스와 인증 시스템을 구현했습니다. 카카오맵 API를 연동하여 위치 기반 서비스를 제공하고, react-router-dom으로 SPA 라우팅을 관리했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '정확한 디자인 구현과 컨벤션 준수',
            cardContent:
              '피그마 디자인 시안을 px 단위까지 정확히 구현하고, 팀 내에서 정한 Git 컨벤션을 철저히 준수했습니다. 이를 통해 일관성 있는 코드베이스를 유지할 수 있었습니다.',
          },
          {
            cardTitle: '재사용 가능한 코드 작성',
            cardContent:
              '커스텀 훅을 활용하여 재사용성을 확보하고 코드 가독성을 향상시켰습니다. 공통 컴포넌트화와 로직 분리를 통해 유지보수하기 쉬운 구조를 만들었습니다.',
          },
          {
            cardTitle: '심화 기술 스택 활용',
            cardContent:
              'Zustand, Supabase, TanStack Query 등 React 심화 기술을 적절히 활용하여 프로젝트를 완성했습니다. API 문서를 기반으로 한 체계적인 기능 구현이 특히 성과가 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '코드 설계와 협업 방식 개선 필요',
            cardContent:
              '함수명과 기능 흐름의 불일치, 팀 폴더 구조 파악 없이 진행한 개인적 리팩토링 등으로 인해 협업에 어려움이 있었습니다. 비즈니스 로직과 서버 로직 분리에 대한 이해가 부족했습니다.',
          },
          {
            cardTitle: '사용자 경험 최적화 부족',
            cardContent:
              '반응형 웹 구현이 미흡하고, 브라우저 기본 알럿 사용, 데이터 정렬 처리 부족 등 사용자 경험을 고려한 세부적인 처리가 아쉬웠습니다.',
          },
          {
            cardTitle: '코드 품질 관리 미흡',
            cardContent:
              'RLS 정책 설정, 코드 분리, 중복 훅 발생 등 코드 품질 관리 측면에서 개선이 필요했습니다. 피그마와 실제 UI 간의 불일치도 발생했습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '체계적인 협업 방식 구축',
            cardContent:
              '향후 프로젝트에서는 코드를 꼼꼼히 읽고 팀의 협업 스타일에 맞추는 것을 우선하겠습니다. 사전에 공통 API 서비스 로직과 훅을 구축하여 중복을 방지할 계획입니다.',
          },
          {
            cardTitle: '사용자 중심 개발 강화',
            cardContent:
              'UX를 고려한 데이터 정렬 처리와 반응형 웹 구현을 개선하고, 지도 위치 자동완성 기능 등 새로운 기능을 추가하여 사용자 경험을 향상시킬 예정입니다.',
          },
          {
            cardTitle: '문제 해결 능력 향상',
            cardContent:
              '문제 발생 시 단순히 로그만 찍는 것이 아니라 시스템 전체 흐름을 고민하는 습관을 기를 것입니다. 다양한 외부 API 활용을 통해 기술적 도전을 이어가겠습니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: '나를 괴롭히는 SupaBase의 RLS 및 blob url 설정',
        tags: ['BaaS', 'RLS', 'Blob URL', 'Supabase'],
        description:
          'Supabase에서 이미지 미리보기를 구현할 때 storage에 먼저 이미지를 올려야 하는 점이 마음에 들지 않았다. 서버에 올리지 않고 이미지 미리보기를 해줄수 있는 방법이 없을까?',
        url: 'https://velog.io/@sum529/TIL-코드-닌자의-무기창고-리액트-개발-현장의-숨겨진-해결책들',
      },
      {
        title: 'React에서 카카오맵 API로 지오코딩 구현하기',
        tags: ['React', '카카오맵API', '지오코딩', 'useRef', 'API연동'],
        description:
          '오늘 React 프로젝트에서 카카오맵 API를 사용해 지도 기능을 구현해야 했다. 특히 좌표와 주소를 서로 변환하는 지오코딩 기능이 필요했는데, 처음 써보는 거라 이것저것 삽질을 많이 했다.',
        url: 'https://velog.io/@sum529/TIL-React에서-카카오맵-API로-지오코딩-구현하기',
      },
      {
        title: 'Tanstack Query와 useEffect의 무한 루프 함정',
        tags: ['React', 'useCallback', 'useEffect'],
        description:
          '상품 등록/수정 페이지에서 기존 상품 정보를 불러올 때, 아무런 로직을 하지않아도  alert 경고 문구가 계속 뜨고 무한 루프가 발생했다...',
        url: 'https://velog.io/@sum529/Trouble-Shooting-Tanstack-Query와-useEffect의-무한-루프-함정',
      },
      {
        title: 'Tanstack Query에서 data.data 중첩 문제',
        tags: ['React', 'DoubleWrapping', 'Tanstack Query'],
        description:
          'Tanstack Query의 useQuery를 사용하는데 반환된 데이터가 data.data와 같이 중첩되어 있었다. return { data, error }; 코드가 문제가 되는 이유는 이중 래핑(double wrapping) 때문이다',
        url: 'https://velog.io/@sum529/Trouble-Shooting-Tanstack-Query에서-data.data-중첩-문제',
      },
    ],
  },
  {
    id: 'lol-stats-tracker',
    title: 'LOL Stats Tracker',
    subtitle: '리그 오브 레전드 정보 앱',
    techStack: 'React • Next.js • API',
    description: ['리그 오브 레전드 챔피언 정보', '챔피언 스킬 정보'],
    gradientColor: 'rgb(179, 58, 58)',
    image: '/images/lol-stats-tracker.png',
    projectImages: [
      'lol-stats-tracker-main.png',
      'lol-stats-tracker-main-dark.png',
      'lol-stats-tracker-champion-list.png',
      'lol-stats-tracker-detail.png',
      'lol-stats-tracker-item-list.png',
      'lol-stats-tracker-champion-rotation.png',
    ],
    favicon: '/images/lol-stats-tracker/lol-stats-tracker-favicon.png',
    githubUrl: 'https://github.com/sum529-create/lol-stats-tracker',
    demoUrl: 'https://lol-stats-tracker.vercel.app/',
    overview: {
      period: '2025.03.10 - 2025.03.18',
      role: '프론트엔드 개발',
      teamComposition: '1명(FE 1명)',
      performance: '리그 오브 레전드 챔피언 정보 제공',
    },
    outline: {
      intro: {
        introText:
          'LOL Stats Tracker는 리그 오브 레전드(LoL) 게임의 챔피언 정보를 제공하는 웹 애플리케이션입니다. Riot Games의 공식 API를 활용하여 실시간으로 챔피언 정보, 스킬, 로테이션 데이터 등을 조회할 수 있습니다. 다양한 Next.js 렌더링 전략을 활용하여 최적의 성능과 사용자 경험을 제공하는 반응형 웹 애플리케이션입니다.',
        features: [
          '리그 오브 레전드 챔피언 정보 및 실시간 로테이션 데이터 제공',
          '챔피언 검색 및 상세 정보 조회 기능',
          '다크 모드 지원 및 반응형 디자인 적용',
          'Next.js 다양한 렌더링 전략(SSG, SSR, ISR, CSR) 활용',
          'Riot Games API를 활용한 실시간 데이터 제공',
        ],
      },
      achievements: {
        projects: [
          'Next.js의 다양한 렌더링 전략(SSG, SSR, ISR, CSR)을 적재적소에 활용하여 성능 최적화',
          'TanStack Query를 활용한 효율적인 서버 상태 관리 및 캐싱 구현',
          'Tailwind CSS를 활용한 반응형 디자인으로 모든 디바이스에서 최적화된 사용자 경험 제공',
          'TypeScript 적용으로 타입 안전성 확보 및 개발 생산성 향상',
        ],
        collaboration: [
          'GitHub를 통한 체계적인 버전 관리 및 프로젝트 문서화',
          'Riot Games API 연동 및 에러 처리 로직 구현',
          'Next.js 배포 최적화 및 성능 모니터링',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '프론트엔드 개발',
          cardContent:
            'Next.js와 TypeScript를 사용하여 타입 안전성이 보장된 컴포넌트를 구현했습니다. TanStack Query를 활용한 서버 상태 관리와 Tailwind CSS를 통한 반응형 디자인을 구현하여 사용자 경험을 최적화했습니다.',
        },
        {
          cardTitle: '성능 최적화',
          cardContent:
            'Next.js의 다양한 렌더링 전략을 활용하여 페이지별로 최적의 성능을 구현했습니다. ISR로 챔피언 목록, SSR로 상세 페이지, SSG로 아이템 정보, CSR로 실시간 로테이션을 구현하여 전반적인 성능을 향상시켰습니다.',
        },
        {
          cardTitle: 'API 연동 및 상태 관리',
          cardContent:
            'Riot Games API와의 안정적인 연동을 구현하고, TanStack Query를 활용하여 효율적인 데이터 캐싱과 에러 처리를 구현했습니다. 사용자가 끊임없이 최신 데이터를 조회할 수 있도록 실시간 데이터 업데이트 시스템을 구축했습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'TanStack Query',
        ],
        description:
          'Next.js와 TypeScript를 기반으로 타입 안전성이 보장된 컴포넌트를 구현했습니다. TanStack Query를 활용한 효율적인 서버 상태 관리와 Tailwind CSS를 통한 반응형 디자인을 구현했습니다.',
      },
      {
        title: 'API & Data Management',
        tags: ['Riot Games API', 'REST API', 'Data Fetching', 'Error Handling'],
        description:
          'Riot Games의 공식 API를 활용하여 챔피언 데이터와 로테이션 정보를 실시간으로 제공합니다. 안정적인 API 연동과 에러 처리 로직을 구현했습니다.',
      },
      {
        title: 'Performance & Deployment',
        tags: ['SSG', 'SSR', 'ISR', 'CSR', 'Vercel', 'GitHub'],
        description:
          'Next.js의 다양한 렌더링 전략을 활용하여 페이지별 최적화를 구현했습니다. Vercel을 통해 자동 배포 파이프라인을 구축하고 GitHub로 버전 관리를 수행했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '렌더링 전략 최적화 성공',
            cardContent:
              'Next.js의 다양한 렌더링 전략을 페이지 특성에 맞게 적용하여 최적의 성능을 달성했습니다. 정적인 데이터는 SSG, 동적인 데이터는 SSR/ISR, 실시간 데이터는 CSR로 구분하여 구현했습니다.',
          },
          {
            cardTitle: 'TanStack Query 도입 성과',
            cardContent:
              'TanStack Query를 활용하여 서버 상태 관리를 효율적으로 처리했습니다. 자동 캐싱, 백그라운드 업데이트, 에러 처리 등을 통해 사용자 경험을 크게 향상시켰습니다.',
          },
          {
            cardTitle: '반응형 디자인 구현',
            cardContent:
              'Tailwind CSS를 활용하여 모바일부터 데스크톱까지 모든 디바이스에서 최적화된 사용자 경험을 제공했습니다. 다크 모드 지원으로 사용자 선호도에 맞는 인터페이스를 제공했습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: 'API 호출 최적화 부족',
            cardContent:
              '초기에는 API 호출 횟수와 타이밍을 충분히 고려하지 않아 불필요한 네트워크 요청이 발생했습니다. 이후 TanStack Query의 캐싱 전략을 개선하여 API 호출을 최적화했습니다.',
          },
          {
            cardTitle: '초기 로딩 성능 이슈',
            cardContent:
              '많은 챔피언 데이터를 한 번에 로드하다 보니 초기 로딩 시간이 길었습니다. 이후 페이지네이션과 무한 스크롤을 적용하여 점진적 로딩으로 개선했습니다.',
          },
          {
            cardTitle: '에러 처리 미흡',
            cardContent:
              'API 에러나 네트워크 오류에 대한 사용자 피드백이 부족했습니다. 이후 에러 바운더리와 로딩 상태, 에러 메시지를 개선하여 사용자 경험을 향상시켰습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '성능 모니터링 강화',
            cardContent:
              '향후 프로젝트에서는 Web Vitals와 성능 모니터링 도구를 활용하여 실시간 성능 지표를 추적하고, 지속적인 성능 개선을 진행할 계획입니다.',
          },
          {
            cardTitle: '접근성 개선',
            cardContent:
              '웹 접근성 가이드라인을 준수하여 키보드 네비게이션, 스크린 리더 지원 등을 개선하고, 모든 사용자가 편리하게 이용할 수 있는 웹사이트를 구축할 예정입니다.',
          },
          {
            cardTitle: '추가 기능 확장',
            cardContent:
              '챔피언 비교 기능, 개인 즐겨찾기, 빌드 추천 시스템 등의 고급 기능을 추가하여 더욱 유용한 서비스로 발전시킬 계획입니다. 또한 실시간 게임 데이터 연동도 고려하고 있습니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: 'Next.js 환경변수와 이미지 설정 트러블슈팅',
        tags: ['Next.js', 'next/image', '환경변수', '외부 이미지'],
        description:
          'Next.js에서 환경변수 사용법과 next/image 컴포넌트로 외부 이미지 불러올 때 발생하는 "구성되지 않은 호스트" 오류 해결 방법을 정리했습니다. LOL API 연동 과정에서 겪은 실제 문제와 해결 과정을 공유합니다.',
        url: 'https://velog.io/@sum529/Trouble-Shooting-Next.js-환경변수와-이미지-설정-트러블슈팅',
      },
      {
        title: 'async/await 말고 use()를 사용해보자',
        tags: ['Next.js', 'generateMetadata', '서버 컴포넌트', 'metadata'],
        description:
          'Next.js에서 use() 쓰다가 generateMetadata()에서 터진 경험담. 왜 안 되는지, 언제 use() 쓰고 언제 await 써야 하는지 여러차레 시도해보면서 알아낸 것들 정리해봤어요',
        url: 'https://velog.io/@sum529/프로젝트-의사결정-모바일-대응..-훅으로-아니면-전역상태-관리로',
      },
      {
        title: 'Next.js 다크모드 구현 중 발생한 하이드레이션 오류..',
        tags: [
          'Next.js',
          'next-themes',
          '하이드레이션 오류',
          'suppressHydrationWarning',
          '다크모드',
          'SSR',
          'CSR',
        ],
        description:
          'Next.js에서 next-themes로 다크모드 구현 중 발생한 하이드레이션 불일치 오류 해결기. SSR과 CSR 차이로 인한 문제 원인을 분석하고 suppressHydrationWarning을 활용한 해결 과정을 정리했습니다.',
        url: 'https://velog.io/@sum529/Trouble-Shooting-모바일에서-애니메이션이-안-꺼지는-이유',
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
      'portfolio-home.png',
      'portfolio-intro.png',
      'portfolio-skills.png',
      'portfolio-experience.png',
      'portfolio-blog.png',
      'portfolio-project.png',
      'portfolio-contact.png',
    ],
    favicon: '/images/portfolio/portfolio-favicon.png',
    githubUrl: 'https://github.com/sum529-create/sumin-portfolio',
    demoUrl: 'https://sumin-portfolio-sigma.vercel.app/',
    overview: {
      period: '2025.05.15 - 2025.06.11',
      role: '프론트엔드 개발',
      teamComposition: '1명(FE 1명)',
      performance: '개인 프로젝트 및 기술 스택 학습',
    },
    outline: {
      intro: {
        introText:
          '우주를 테마로 한 인터랙티브 포트폴리오 웹사이트로, GSAP를 활용한 부드러운 애니메이션과 반응형 디자인을 통해 사용자에게 몰입감 있는 경험을 제공합니다. Next.js와 TypeScript를 기반으로 구현되어 있으며, Tailwind CSS를 통해 일관된 디자인 시스템을 구축했습니다.',
        features: [
          'GSAP 기반의 부드러운 스크롤 애니메이션',
          '모바일 최적화된 반응형 디자인',
          '다크 모드 지원 및 우주 테마 디자인',
          '블로그 연동을 통한 기술 문서 공유',
        ],
      },
      achievements: {
        projects: [
          'GSAP와 Intersection Observer를 활용한 고성능 애니메이션 구현으로 사용자 경험 향상',
          'Tailwind CSS의 JIT 컴파일러를 활용한 동적 스타일링 최적화',
          'Next.js의 서버 컴포넌트와 클라이언트 컴포넌트를 적절히 분리하여 성능 최적화',
        ],
        collaboration: [
          '개발 과정에서 마주친 문제점들을 블로그에 정리하여 기술 공유',
          'GitHub를 통한 체계적인 버전 관리와 프로젝트 문서화',
          'Vercel을 활용한 지속적인 배포와 성능 모니터링',
        ],
      },
      rolesAndResponsibilities: [
        {
          cardTitle: '프론트엔드 개발',
          cardContent:
            'Next.js와 TypeScript를 사용하여 타입 안전성이 보장된 컴포넌트를 구현했습니다. GSAP를 활용한 애니메이션과 Tailwind CSS를 통한 반응형 디자인을 구현하여 사용자 경험을 최적화했습니다.',
        },
        {
          cardTitle: '성능 최적화',
          cardContent:
            'Next.js의 서버 컴포넌트를 활용하여 초기 로딩 성능을 개선하고, 이미지 최적화와 코드 스플리팅을 통해 전반적인 웹사이트 성능을 향상시켰습니다.',
        },
        {
          cardTitle: '기술 문서화',
          cardContent:
            '개발 과정에서 마주친 문제점들과 해결 방법을 블로그에 정리하여 기술 공유를 진행했습니다. 이를 통해 다른 개발자들과의 지식 공유와 네트워킹을 촉진했습니다.',
        },
      ],
    },
    skillStack: [
      {
        title: 'Frontend',
        tags: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind CSS', 'React'],
        description:
          'Next.js와 TypeScript를 기반으로 타입 안전성이 보장된 컴포넌트를 구현했습니다. GSAP를 활용한 부드러운 애니메이션과 Tailwind CSS를 통한 반응형 디자인을 구현했습니다.',
      },
      {
        title: 'Tools & Deployment',
        tags: ['Vercel', 'GitHub', 'ESLint', 'Prettier', 'pnpm'],
        description:
          'Vercel을 통해 자동 배포 파이프라인을 구축하고, GitHub를 사용하여 버전 관리를 수행했습니다. ESLint와 Prettier로 코드 품질을 유지했습니다.',
      },
      {
        title: 'Documentation',
        tags: ['Velog', 'Notion', 'GitHub Wiki'],
        description:
          '개발 과정에서의 문제 해결과 기술적 결정 사항을 블로그와 문서로 정리하여 공유했습니다.',
      },
    ],
    retrospection: [
      {
        content: [
          {
            cardTitle: '성능 최적화 성공',
            cardContent:
              'Next.js의 서버 컴포넌트와 이미지 최적화를 통해 초기 로딩 속도를 크게 개선했습니다. 또한 GSAP 애니메이션의 성능 최적화로 부드러운 사용자 경험을 제공할 수 있었습니다.',
          },
          {
            cardTitle: '반응형 디자인 구현',
            cardContent:
              'Tailwind CSS를 활용하여 모바일부터 데스크톱까지 모든 디바이스에서 최적화된 사용자 경험을 제공했습니다. 특히 모바일 환경에서의 애니메이션 최적화를 통해 성능을 개선했습니다.',
          },
          {
            cardTitle: '기술 문서화',
            cardContent:
              '개발 과정에서 마주친 문제점들과 해결 방법을 블로그에 체계적으로 정리하여 다른 개발자들과 지식을 공유했습니다. 이를 통해 기술적 성장과 네트워킹 기회를 얻을 수 있었습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '초기 설계 부족',
            cardContent:
              '프로젝트 초기에 컴포넌트 구조와 상태 관리 전략을 충분히 설계하지 않아 중간에 리팩토링이 필요했습니다. 이로 인해 개발 일정이 지연되는 경우가 있었습니다.',
          },
          {
            cardTitle: '애니메이션 최적화',
            cardContent:
              'GSAP 애니메이션의 초기 구현이 모바일 환경에서 성능 이슈를 일으켰습니다. 이후 useMediaQuery 훅을 통해 모바일 환경을 고려한 최적화가 필요했습니다.',
          },
          {
            cardTitle: '접근성 고려 부족',
            cardContent:
              '초기에는 시각적 효과에 집중하다 보니 웹 접근성 측면이 부족했습니다. 이후 ARIA 레이블과 키보드 네비게이션 지원을 추가하여 개선했습니다.',
          },
        ],
      },
      {
        content: [
          {
            cardTitle: '아키텍처 설계 강화',
            cardContent:
              '향후 프로젝트에서는 초기 단계에서 컴포넌트 구조와 상태 관리 전략을 철저히 설계하고, 확장성을 고려한 아키텍처를 구축할 계획입니다.',
          },
          {
            cardTitle: '접근성 개선',
            cardContent:
              '웹 접근성 가이드라인을 준수하여 모든 사용자가 이용하기 편한 웹사이트를 만들기 위해 지속적인 개선을 진행할 예정입니다.',
          },
          {
            cardTitle: '인터랙티브 요소 강화',
            cardContent:
              'Three.js나 WebGL을 활용하여 더욱 몰입감 있는 3D 인터랙션을 추가하고, 마우스 움직임에 반응하는 인터랙티브 요소를 구현하여 사용자 경험을 한층 더 향상시킬 계획입니다.',
          },
        ],
      },
    ],
    blogPosts: [
      {
        title: '포트폴리오를 만들다 만난 JIT',
        tags: ['TailwindCSS', 'React', 'TypeScript', 'JIT', '동적 스타일링'],
        description:
          'Tailwind CSS에서 props로 받은 값을 템플릿 리터럴로 동적 클래스명에 적용했는데 스타일이 안 되는 문제를 해결한 이야기. JIT 컴파일 방식의 이해와 공식문서가 권장하는 정적 매핑 방식으로 타입 안전성까지 확보한 과정.',
        url: 'https://velog.io/@sum529/Trouble-Shooting-포트폴리오를-만들다-만난-JIT',
      },
      {
        title: '모바일 대응.. 훅으로? 아니면 전역상태 관리로?',
        tags: ['반응형 디자인', 'UX설계', '커스텀 훅', '모바일 최적화'],
        description:
          '포트폴리오의 문 열림 효과를 모바일에서도 보여줄지 고민하다가 사용자 경험을 우선시하여 모바일에서는 효과를 제거하기로 결정. useMediaQuery 커스텀 훅을 구현하여 반응형 대응하고, 기술적 욕심보다 UX를 우선하는 개발 철학을 정립한 과정.',
        url: 'https://velog.io/@sum529/프로젝트-의사결정-모바일-대응..-훅으로-아니면-전역상태-관리로',
      },
      {
        title: '모바일에서 애니메이션이 안 꺼지는 이유',
        tags: ['useState', 'LazyInitialization', '미디어 쿼리', 'GSAP'],
        description:
          '모바일에서 애니메이션을 제거하려 했는데 계속 적용되는 문제를 useState lazy initialization으로 해결한 이야기. useMediaQuery 훅의 초기값 문제와 React 렌더링 타이밍 이슈를 분석하고, window 객체를 안전하게 사용하는 방법까지 정리한 깊이 있는 트러블슈팅.',
        url: 'https://velog.io/@sum529/Trouble-Shooting-모바일에서-애니메이션이-안-꺼지는-이유',
      },
    ],
  },
];
