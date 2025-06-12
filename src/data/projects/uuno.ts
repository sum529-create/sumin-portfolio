import { ProjectDetail } from '@/types/project';

export const uunoDetail: ProjectDetail = {
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
  projectImages: [
    'uuno-main.png',
    'uuno-template-list.png',
    'uuno-editor.png',
    'uuno-card-list.png',
    'uuno-card-detail.png',
    'uuno-shared.png',
  ],
};
