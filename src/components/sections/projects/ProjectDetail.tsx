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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Palette,
  BookOpen,
  Calendar,
  Users,
  Target,
  Award,
  Lightbulb,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/constants/projects';

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

  // 임시 이미지 데이터 (실제로는 project.images 배열 사용)
  const projectImages = [
    `/images/${projectId}.png`,
    `/images/${projectId}.png`,
    `/images/${projectId}.png`,
    `/images/${projectId}.png`,
  ];

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

      {/* 메인 헤더 섹션 */}
      <div className='mb-16 grid gap-10 lg:grid-cols-2'>
        {/* 프로젝트 이미지 캐로셀 */}
        <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
          <Carousel className='w-full'>
            <CarouselContent>
              {projectImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className='relative aspect-video overflow-hidden bg-black/20 backdrop-blur-sm'>
                    <img
                      src={image}
                      alt={`${project.title} 스크린샷 ${index + 1}`}
                      className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/800x450/6366f1/ffffff?text=${project.title}+Screenshot+${index + 1}`;
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-4 bg-black/20 backdrop-blur-md hover:bg-black/30' />
            <CarouselNext className='right-4 bg-black/20 backdrop-blur-md hover:bg-black/30' />
          </Carousel>
        </div>

        {/* 프로젝트 기본 정보 */}
        <div className='space-y-8'>
          {/* 프로젝트 파비콘 & 제목 */}
          <div className='flex items-start gap-6'>
            <div className='flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-black/20 text-3xl shadow-lg backdrop-blur-md'>
              {project.id === 'medi-click' && '🏥'}
              {project.id === 'echo-wave' && '🎵'}
              {project.id === 'green-deal' && '🌱'}
              {project.id === 'buzz-chatly' && '💬'}
              {project.id === 'uuno' && '🎮'}
              {project.id === 'portfolio' && '💼'}
            </div>
            <div className='flex-1'>
              <h1 className='mb-3 bg-gradient-to-r from-white to-white/90 bg-clip-text text-4xl font-bold text-transparent'>
                {project.title}
              </h1>
              <p className='mb-4 text-xl font-medium text-white/90'>
                {project.subtitle}
              </p>
              <p className='text-sm text-white/70'>{project.techStack}</p>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className='flex flex-wrap gap-3'>
            <Button className='flex items-center gap-2 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:shadow-xl'>
              <Github className='h-4 w-4' />
              GitHub
            </Button>
            <Button
              variant='secondary'
              className='flex items-center gap-2 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:shadow-xl'
            >
              <ExternalLink className='h-4 w-4' />
              Live Demo
            </Button>
            <Button
              variant='outline'
              className='flex items-center gap-2 border border-white/20 bg-black/20 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/10'
            >
              <Palette className='h-4 w-4' />
              Design
            </Button>
            <Button
              variant='outline'
              className='flex items-center gap-2 border border-white/20 bg-black/20 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/10'
            >
              <BookOpen className='h-4 w-4' />
              Blog
            </Button>
          </div>

          {/* 프로젝트 요약 정보 */}
          <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md'>
            <CardContent className='p-8'>
              <div className='grid grid-cols-1 gap-6 text-sm md:grid-cols-2'>
                <div className='flex items-center gap-3 rounded-lg bg-white/5 p-3'>
                  <Calendar className='h-5 w-5 text-primary' />
                  <div>
                    <span className='text-white/60'>개발기간</span>
                    <p className='font-medium text-white'>2024.03 - 2024.05</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 rounded-lg bg-white/5 p-3'>
                  <Users className='h-5 w-5 text-primary' />
                  <div>
                    <span className='text-white/60'>팀구성</span>
                    <p className='font-medium text-white'>4명 (FE 2, BE 2)</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 rounded-lg bg-white/5 p-3'>
                  <Target className='h-5 w-5 text-primary' />
                  <div>
                    <span className='text-white/60'>담당</span>
                    <p className='font-medium text-white'>프론트엔드 개발</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 rounded-lg bg-white/5 p-3'>
                  <Award className='h-5 w-5 text-primary' />
                  <div>
                    <span className='text-white/60'>성과</span>
                    <p className='font-medium text-white'>처리시간 70% 단축</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 탭 섹션 */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='mb-8 grid w-full grid-cols-5 rounded-xl bg-black/20 p-1 shadow-lg backdrop-blur-md lg:w-fit lg:grid-cols-5'>
          <TabsTrigger
            value='overview'
            className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
          >
            <span className='hidden sm:inline'>개요</span>
            <span className='sm:hidden'>📋</span>
          </TabsTrigger>
          <TabsTrigger
            value='tech'
            className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
          >
            <span className='hidden sm:inline'>기술스택</span>
            <span className='sm:hidden'>🔧</span>
          </TabsTrigger>
          <TabsTrigger
            value='troubleshooting'
            className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
          >
            <span className='hidden sm:inline'>트러블슈팅</span>
            <span className='sm:hidden'>🚨</span>
          </TabsTrigger>
          <TabsTrigger
            value='retrospective'
            className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
          >
            <span className='hidden sm:inline'>회고</span>
            <span className='sm:hidden'>💭</span>
          </TabsTrigger>
          <TabsTrigger
            value='blog'
            className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
          >
            <span className='hidden sm:inline'>블로그</span>
            <span className='sm:hidden'>📖</span>
          </TabsTrigger>
        </TabsList>

        {/* 개요 탭 */}
        <TabsContent value='overview' className='space-y-8'>
          <div className='grid gap-8 lg:grid-cols-2'>
            {/* 프로젝트 소개 */}
            <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-xl text-white'>
                  <Target className='h-6 w-6 text-primary' />
                  프로젝트 소개
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <p className='leading-relaxed text-white/80'>
                  실시간 예약 시스템과 사용자 친화적인 UI/UX로 설계된 의료진
                  예약 플랫폼입니다. React와 Node.js를 활용하여 효율적인 예약
                  관리가 가능하도록 구현했습니다.
                </p>

                <div className='space-y-4'>
                  <h4 className='text-lg font-medium text-white'>주요 기능</h4>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-primary'>•</span>
                      실시간 예약 시스템 및 알림 기능
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-primary'>•</span>
                      의료진별 스케줄 관리 및 환자 이력 조회
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-primary'>•</span>
                      반응형 웹 디자인으로 모바일 최적화
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-primary'>•</span>
                      JWT 인증 및 보안 처리 구현
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-primary'>•</span>
                      예약 현황 대시보드 및 통계 기능
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 성과 및 학습 */}
            <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-xl text-white'>
                  <Award className='h-6 w-6 text-primary' />
                  주요 성과 & 학습
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-4'>
                  <h4 className='text-lg font-medium text-white'>
                    프로젝트 성과
                  </h4>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-green-500'>✓</span>
                      예약 처리 시간 70% 단축 달성
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-green-500'>✓</span>
                      사용자 만족도 95% 이상 달성
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-green-500'>✓</span>월 평균
                      예약 건수 500+ 처리
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <span className='text-lg text-green-500'>✓</span>
                      서버 응답 시간 200ms 이하 최적화
                    </li>
                  </ul>
                </div>

                <div className='space-y-4'>
                  <h4 className='text-lg font-medium text-white'>학습 성과</h4>
                  <ul className='space-y-3 text-sm'>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <Lightbulb className='mt-1 h-4 w-4 flex-shrink-0 text-yellow-500' />
                      React Hooks를 활용한 상태 관리 최적화
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <Lightbulb className='mt-1 h-4 w-4 flex-shrink-0 text-yellow-500' />
                      RESTful API 설계 및 비동기 처리 경험
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <Lightbulb className='mt-1 h-4 w-4 flex-shrink-0 text-yellow-500' />
                      사용자 중심 UI/UX 설계 방법론 습득
                    </li>
                    <li className='flex items-start gap-3 rounded-lg bg-white/5 p-3 text-white/80'>
                      <Lightbulb className='mt-1 h-4 w-4 flex-shrink-0 text-yellow-500' />
                      팀 협업 및 Git 브랜치 전략 수립 경험
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 담당 역할 */}
          <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-xl text-white'>
                <Users className='h-6 w-6 text-primary' />
                담당 역할 & 기여도
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-3'>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    프론트엔드 개발
                  </h4>
                  <p className='text-sm text-white/80'>
                    React 컴포넌트 설계 및 상태 관리, API 연동 및 실시간 데이터
                    처리 로직 구현
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>UI/UX 설계</h4>
                  <p className='text-sm text-white/80'>
                    사용자 친화적인 인터페이스 설계, 반응형 디자인 구현 및
                    접근성 개선
                  </p>
                </div>
                <div className='space-y-3 rounded-lg bg-white/5 p-4'>
                  <h4 className='text-lg font-medium text-white'>
                    성능 최적화
                  </h4>
                  <p className='text-sm text-white/80'>
                    번들 사이즈 최적화, 지연 로딩 구현 및 렌더링 성능 개선
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

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

              {/* 백엔드 */}
              <div className='rounded-xl bg-white/5 p-6'>
                <h3 className='mb-4 text-xl font-semibold text-white'>
                  Backend
                </h3>
                <div className='mb-4 flex flex-wrap gap-2'>
                  <Badge
                    variant='outline'
                    className='border-2 px-3 py-1 text-sm transition-colors duration-200 hover:bg-white/5'
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-2 px-3 py-1 text-sm transition-colors duration-200 hover:bg-white/5'
                  >
                    Express.js
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-2 px-3 py-1 text-sm transition-colors duration-200 hover:bg-white/5'
                  >
                    MongoDB
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-2 px-3 py-1 text-sm transition-colors duration-200 hover:bg-white/5'
                  >
                    JWT
                  </Badge>
                  <Badge
                    variant='outline'
                    className='border-2 px-3 py-1 text-sm transition-colors duration-200 hover:bg-white/5'
                  >
                    Socket.io
                  </Badge>
                </div>
                <p className='text-sm leading-relaxed text-white/80'>
                  Node.js와 Express.js로 RESTful API를 구현하고, MongoDB를
                  사용하여 유연한 데이터 모델링을 적용했습니다. Socket.io로
                  실시간 알림 기능을 구현했습니다.
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

        {/* 트러블슈팅 탭 */}
        <TabsContent value='troubleshooting' className='space-y-8'>
          <div className='space-y-8'>
            <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-2xl text-red-400'>
                  <span className='text-3xl'>🚨</span>
                  문제 1: CORS 에러 해결
                </CardTitle>
                <CardDescription className='text-lg text-white/70'>
                  프론트엔드와 백엔드 간 통신 시 발생한 CORS 문제
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='rounded-lg bg-white/5 p-4'>
                  <h4 className='mb-3 flex items-center gap-2 text-lg font-medium text-white'>
                    <span className='text-red-400'>🚨</span>
                    문제 상황
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    로컬 개발 환경에서 프론트엔드(3000 포트)와 백엔드(8000 포트)
                    간 API 통신 시 CORS 에러가 지속적으로 발생했습니다.
                  </p>
                </div>
                <div className='rounded-lg bg-white/5 p-4'>
                  <h4 className='mb-3 flex items-center gap-2 text-lg font-medium text-white'>
                    <span className='text-blue-500'>🔍</span>
                    원인 분석
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    브라우저의 동일 출처 정책(Same-Origin Policy)으로 인해 다른
                    포트 간 통신이 차단되었습니다. 또한 서버 측에서 적절한 CORS
                    헤더 설정이 누락되어 있었습니다.
                  </p>
                </div>
                <div className='rounded-lg bg-white/5 p-4'>
                  <h4 className='mb-3 flex items-center gap-2 text-lg font-medium text-white'>
                    <span className='text-green-500'>✅</span>
                    해결 방법
                  </h4>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-green-500'>•</span>
                      Express.js에 cors 미들웨어 추가 및 설정
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-green-500'>•</span>
                      개발/프로덕션 환경별 허용 도메인 분리
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-green-500'>•</span>
                      Preflight 요청 처리를 위한 OPTIONS 메서드 허용
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-green-500'>•</span>
                      인증 헤더 전송을 위한 credentials 설정
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-2xl text-red-400'>
                  <span className='text-3xl'>🚨</span>
                  문제 2: 상태 관리 복잡성
                </CardTitle>
                <CardDescription className='text-lg text-white/70'>
                  컴포넌트 간 상태 공유 및 업데이트 문제
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='rounded-lg bg-white/5 p-4'>
                  <h4 className='mb-3 flex items-center gap-2 text-lg font-medium text-white'>
                    <span className='text-red-400'>🚨</span>
                    문제 상황
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    예약 상태 변경 시 여러 컴포넌트에서 동시에 업데이트가
                    필요했지만, prop drilling으로 인해 코드가 복잡해지고 성능
                    이슈가 발생했습니다.
                  </p>
                </div>
                <div className='rounded-lg bg-white/5 p-4'>
                  <h4 className='mb-3 flex items-center gap-2 text-lg font-medium text-white'>
                    <span className='text-green-500'>✅</span>
                    해결 방법
                  </h4>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-green-500'>•</span>
                      React Query를 도입하여 서버 상태 관리 개선
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-green-500'>•</span>
                      Context API + useReducer로 전역 상태 관리
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-green-500'>•</span>
                      컴포넌트 단위 상태 분리로 불필요한 리렌더링 방지
                    </li>
                    <li className='flex items-start gap-2'>
                      <span className='mt-1 text-green-500'>•</span>
                      useMemo, useCallback을 활용한 성능 최적화
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
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
