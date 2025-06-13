import ProjectDetail from '@/components/sections/projects/ProjectDetail';
import SectionTitle from '@/components/sections/SectionTitle';
import { projectsSummary } from '@/constants/projects-summary';

export async function generateStaticParams() {
  return projectsSummary.map(({ id }) => ({ id }));
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
    robots: 'index, follow',
  };
};

const page = ({ params }: PageParams) => {
  const projectId = params.id;
  const projectTitle = projectId.replace(/-/g, ' ').toUpperCase();

  const projectExists = projectsSummary.some(
    (project) => project.id === projectId
  );
  if (!projectExists) {
    return (
      <div className='text-center text-red-500'>
        프로젝트를 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className='container relative mx-auto min-h-screen max-w-full px-4 py-20 pb-[100px]'>
      <SectionTitle
        title={projectTitle}
        subTitle={`${projectTitle} 프로젝트에 대한 상세 정보입니다.`}
        ariaLabel={`${projectTitle} 프로젝트 섹션`}
      />
      <ProjectDetail projectId={projectId} />
    </div>
  );
};

export default page;
