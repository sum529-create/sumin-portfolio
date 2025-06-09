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
        <TabsContent value='tech' className='space-y-8'>
          <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
            <CardHeader>
              <CardTitle className='text-2xl text-white'>
                사용 기술 스택
              </CardTitle>
              <CardDescription className='text-lg text-white/70'>
                프로젝트에서 사용된 주요 기술들과 선택 이유를 소개합니다.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-8'>
              {/* 프론트엔드 */}
              <div className='rounded-xl bg-white/5 p-6'>
                <h3 className='mb-4 text-xl font-semibold text-white'>
                  Frontend
                </h3>
                <div className='mb-4 flex flex-wrap gap-2'>
                  <Badge
                    variant='secondary'
                    className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'
                  >
                    React 18
                  </Badge>
                  <Badge
                    variant='secondary'
                    className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant='secondary'
                    className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'
                  >
                    Tailwind CSS
                  </Badge>
                  <Badge
                    variant='secondary'
                    className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'
                  >
                    React Query
                  </Badge>
                  <Badge
                    variant='secondary'
                    className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'
                  >
                    React Hook Form
                  </Badge>
                </div>
                <p className='text-sm leading-relaxed text-white/80'>
                  React 18의 최신 기능들을 활용하여 사용자 인터페이스를
                  구현했습니다. TypeScript로 타입 안정성을 확보하고, Tailwind
                  CSS로 일관된 디자인 시스템을 구축했습니다.
                </p>
              </div>

              {/* 도구 및 배포 */}
              <div className='rounded-xl bg-white/5 p-6'>
                <h3 className='mb-4 text-xl font-semibold text-white'>
                  Tools & Deployment
                </h3>
                <div className='mb-4 flex flex-wrap gap-2'>
                  <Badge className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'>
                    Git & GitHub
                  </Badge>
                  <Badge className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'>
                    Figma
                  </Badge>
                  <Badge className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'>
                    Vercel
                  </Badge>
                  <Badge className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'>
                    ESLint
                  </Badge>
                  <Badge className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'>
                    Prettier
                  </Badge>
                </div>
                <p className='text-sm leading-relaxed text-white/80'>
                  Git을 활용한 협업 워크플로우를 구축하고, Figma로 디자인
                  시스템을 설계했습니다. Vercel을 통해 지속적 배포(CD) 환경을
                  구축했습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 회고 탭 */}
        <TabsContent value='retrospective' className='space-y-8'>
          <div className='grid gap-8 lg:grid-cols-2'>
            <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-2xl text-green-600'>
                  <span className='text-3xl'>✨</span>
                  잘한 점 (Keep)
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    체계적인 프로젝트 관리
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    칸반 보드를 활용한 일정 관리와 정기적인 스프린트 회고를 통해
                    프로젝트를 체계적으로 진행할 수 있었습니다.
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    적극적인 의사소통
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    팀원들과의 원활한 소통으로 문제 상황을 빠르게 공유하고
                    해결책을 함께 모색할 수 있었습니다.
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    사용자 중심 개발
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    사용자 피드백을 적극 수집하고 반영하여 실제로 사용하기 편한
                    서비스를 만들 수 있었습니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-2xl text-red-600'>
                  <span className='text-3xl'>⚠️</span>
                  아쉬운 점 (Problem)
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    테스트 코드 부족
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    개발 일정에 쫓겨 테스트 코드 작성을 충분히 하지 못했습니다.
                    이로 인해 버그 발견이 늦어지는 경우가 있었습니다.
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    성능 최적화 미흡
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    초기 번들 사이즈가 커서 로딩 속도가 느린 문제가 있었습니다.
                    코드 스플리팅 적용이 늦어졌습니다.
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    문서화 부족
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    개발 과정에서 결정사항들을 충분히 문서화하지 못해 나중에
                    유지보수 시 어려움을 겪었습니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-2xl text-blue-600'>
                <span className='text-3xl'>🎯</span>
                개선 방안 (Try)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-2'>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>TDD 도입</h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    다음 프로젝트에서는 Jest, Testing Library를 활용한 테스트
                    주도 개발을 적용해보겠습니다.
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    성능 모니터링
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    웹 성능 측정 도구를 활용하여 지속적으로 성능을 모니터링하고
                    개선하겠습니다.
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    문서화 자동화
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    Storybook, JSDoc을 활용하여 자동화된 문서화 시스템을
                    구축하겠습니다.
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    CI/CD 파이프라인
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    GitHub Actions를 활용한 자동화된 빌드 및 배포 시스템을
                    구축하겠습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 블로그 탭 */}
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
