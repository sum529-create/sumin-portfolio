'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/constants/projects';
import ProjectOutline from './tabs/ProjectOutline';
import ProjectTabList from './tabs/ProjectTabList';
import ProjectTopSection from './ProjectTopSection';
import ProjectSkillStack from './tabs/ProjectSkillStack';
import ProjectRetrospection from './tabs/ProjectRetrospection';

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
    <div className='min-h-screen px-4 py-12 md:px-6 lg:px-8'>
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
        <TabsContent value='blog' className='space-y-8'>
          <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
            <CardHeader>
              <CardTitle className='text-2xl text-white'>
                관련 블로그 포스트
              </CardTitle>
              <CardDescription className='text-lg text-white/70'>
                이 프로젝트와 관련된 기술 블로그 포스트들을 모아보았습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-6'>
                <div className='cursor-pointer rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all duration-200 hover:bg-white/5 hover:shadow-lg'>
                  <h4 className='mb-3 text-xl font-medium text-white'>
                    React Query로 서버 상태 관리하기
                  </h4>
                  <p className='mb-4 text-sm leading-relaxed text-white/80'>
                    프로젝트에서 React Query를 도입하여 서버 상태 관리를 개선한
                    경험을 공유합니다.
                  </p>
                  <Badge
                    variant='outline'
                    className='border border-white/20 px-3 py-1 text-sm text-white/70 transition-colors duration-200 hover:bg-white/10'
                  >
                    React Query
                  </Badge>
                </div>

                <div className='cursor-pointer rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all duration-200 hover:bg-white/5 hover:shadow-lg'>
                  <h4 className='mb-3 text-xl font-medium text-white'>
                    CORS 에러 완벽 해결 가이드
                  </h4>
                  <p className='mb-4 text-sm leading-relaxed text-white/80'>
                    개발 중 마주친 CORS 문제를 해결하는 과정과 다양한 해결
                    방법을 정리했습니다.
                  </p>
                  <Badge
                    variant='outline'
                    className='border border-white/20 px-3 py-1 text-sm text-white/70 transition-colors duration-200 hover:bg-white/10'
                  >
                    CORS
                  </Badge>
                </div>

                <div className='cursor-pointer rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all duration-200 hover:bg-white/5 hover:shadow-lg'>
                  <h4 className='mb-3 text-xl font-medium text-white'>
                    TypeScript + React 프로젝트 세팅
                  </h4>
                  <p className='mb-4 text-sm leading-relaxed text-white/80'>
                    타입 안정성을 위한 TypeScript 프로젝트 초기 설정과 유용한
                    타입 활용법을 소개합니다.
                  </p>
                  <Badge
                    variant='outline'
                    className='border border-white/20 px-3 py-1 text-sm text-white/70 transition-colors duration-200 hover:bg-white/10'
                  >
                    TypeScript
                  </Badge>
                </div>

                <div className='cursor-pointer rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all duration-200 hover:bg-white/5 hover:shadow-lg'>
                  <h4 className='mb-3 text-xl font-medium text-white'>
                    팀 프로젝트에서의 Git 전략
                  </h4>
                  <p className='mb-4 text-sm leading-relaxed text-white/80'>
                    4명의 팀원과 함께 진행한 프로젝트에서 사용한 Git 브랜치
                    전략과 협업 노하우를 공유합니다.
                  </p>
                  <Badge
                    variant='outline'
                    className='border border-white/20 px-3 py-1 text-sm text-white/70 transition-colors duration-200 hover:bg-white/10'
                  >
                    Git
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
