'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/constants/projects';
import ProjectOutline from './tabs/ProjectOutline';
import ProjectTabList from './tabs/ProjectTabList';
import ProjectTopSection from './ProjectTopSection';
import ProjectSkillStack from './tabs/ProjectSkillStack';
import ProjectRetrospection from './tabs/ProjectRetrospection';
import ProjectBlog from './tabs/ProjectBlog';

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // 실제 프로젝트 데이터 가져오기
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className='min-h-screen py-12 md:px-6 lg:px-8'>
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
      <ProjectTopSection project={project} />

      {/* 탭 섹션 */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        {/* 탭 리스트 */}
        <ProjectTabList />
        {/* 개요 탭 */}
        <ProjectOutline outline={project.outline} />
        {/* 기술스택 탭 */}
        <ProjectSkillStack skillStack={project.skillStack} />
        {/* 회고 탭 */}
        <ProjectRetrospection retrospection={project.retrospection} />
        {/* 트러블슈팅 탭 */}
        <ProjectBlog blogPosts={project.blogPosts} />
      </Tabs>
    </div>
  );
}
