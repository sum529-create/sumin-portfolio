import { title } from 'process';

export async function generateStaticParams() {
  return [
    { id: 'medi-click' },
    { id: 'echo-wave' },
    { id: 'green-deal' },
    { id: 'buzz-chatly' },
    { id: 'uuno' },
    { id: 'portfolio' },
  ];
}

interface PageParams {
  params: { id: string };
}

export const generateMetadata = async ({ params }: PageParams) => {
  const projectId = params.id;
  return {
    title: `프로젝트 | ${projectId}`,
    description: `노수민의 프로젝트 ${projectId}에 대한 상세 설명 페이지입니다.`,
    keywords: [
      '프로젝트',
      projectId,
      '프론트엔드 개발자',
      '노수민',
      '포트폴리오',
      '웹 개발',
      'UI/UX',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      '프론트엔드',
    ],
    openGraph: {
      url: `https://sumin-portfolio-sigma.vercel.app/projects/${projectId}`,
      title: `노수민의 프로젝트 | ${projectId}`,
      description: `노수민의 프로젝트 ${projectId}에 대한 상세 설명 페이지입니다.`,
      images: [
        {
          url: `https://sumin-portfolio-sigma.vercel.app/og-images/${projectId}.png`,
          width: 1200,
          height: 630,
          alt: `노수민의 프로젝트 ${projectId} OG 이미지`,
        },
      ],
    },
    themeColor: '#6366F1',
    robots: 'index, follow',
  };
};

const page = () => {
  return <div>page</div>;
};

export default page;
