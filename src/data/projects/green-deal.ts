import { ProjectDetail } from '@/types/project';

export const greenDealDetail: ProjectDetail = {
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
  projectImages: [
    'green-deal-main.png',
    'green-deal-signup.png',
    'green-deal-signin.png',
    'green-deal-product-list.png',
    'green-deal-product-detail.png',
    'green-deal-product-registration.png',
    'green-deal-mypage.png',
  ],
};
