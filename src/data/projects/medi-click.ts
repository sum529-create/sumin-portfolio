import { ProjectDetail } from '@/types/project';

export const mediClickDetail: ProjectDetail = {
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
      tags: ['React', '조건부 렌더링', '초기 렌더링', 'useState', 'useEffect'],
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
  projectImages: [
    'medi-click-main.png',
    'medi-click-login.png',
    'medi-click-detail.png',
    'medi-click-reservation.png',
    'medi-click-hospital-menu.png',
    'medi-click-user-menu.png',
    'medi-click-user-menu-detail.png',
  ],
};
