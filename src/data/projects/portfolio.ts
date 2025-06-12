import { ProjectDetail } from '@/types/project';

export const portfolioDetail: ProjectDetail = {
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
  projectImages: [
    'portfolio-home.png',
    'portfolio-intro.png',
    'portfolio-skills.png',
    'portfolio-experience.png',
    'portfolio-blog.png',
    'portfolio-project.png',
    'portfolio-contact.png',
  ],
};
