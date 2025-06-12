import { ProjectDetail } from '@/types/project';

export const lolStatsTrackerDetail: ProjectDetail = {
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
  projectImages: [
    'lol-stats-tracker-main.png',
    'lol-stats-tracker-main-dark.png',
    'lol-stats-tracker-champion-list.png',
    'lol-stats-tracker-detail.png',
    'lol-stats-tracker-item-list.png',
    'lol-stats-tracker-champion-rotation.png',
  ],
};
