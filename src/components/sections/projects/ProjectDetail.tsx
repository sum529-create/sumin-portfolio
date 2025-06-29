'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { notFound, useRouter } from 'next/navigation';
import ProjectOutline from '@/components/sections/projects/tabs/ProjectOutline';
import ProjectTabList from '@/components/sections/projects/tabs/ProjectTabList';
import ProjectTopSection from '@/components/sections/projects/ProjectTopSection';
import ProjectSkillStack from '@/components/sections/projects/tabs/ProjectSkillStack';
import ProjectRetrospection from '@/components/sections/projects/tabs/ProjectRetrospection';
import ProjectBlog from '@/components/sections/projects/tabs/ProjectBlog';
import { useProjectDetail } from '@/hooks/useProjectData';
import { projectsSummary } from '@/constants/projects-summary';

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const { projectDetail, loading, error } = useProjectDetail(projectId);
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  const summary = projectsSummary.find((p) => p.id === projectId);
  if (!summary) {
    return notFound();
  }
  if (!projectDetail) return null;

  const { projectType, outline, skillStack, retrospection, blogPosts } =
    projectDetail;

  return (
    <div className='min-h-screen'>
      {/* 뒤로가기 버튼 */}
      <div className='mb-10'>
        <Button
          variant='ghost'
          onClick={() => router.back()}
          className='flex items-center gap-2 text-white/80 backdrop-blur-sm transition-colors duration-200 hover:text-white'
        >
          <ArrowLeft className='h-4 w-4' />
          프로젝트 목록으로 돌아가기
        </Button>
      </div>

      {/* 상위 섹션 */}
      <ProjectTopSection summary={summary} projectDetail={projectDetail} />

      {/* 탭 섹션 */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        {/* 탭 리스트 */}
        <ProjectTabList />
        {/* 개요 탭 */}
        <ProjectOutline outline={outline} projectType={projectType} />
        {/* 기술스택 탭 */}
        <ProjectSkillStack skillStack={skillStack} />
        {/* 회고 탭 */}
        <ProjectRetrospection retrospection={retrospection} />
        {/* 트러블슈팅 탭 */}
        <ProjectBlog blogPosts={blogPosts} />
      </Tabs>
    </div>
  );
}
