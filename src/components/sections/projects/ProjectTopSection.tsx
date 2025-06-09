import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ProjectData } from '@/constants/projects';
import {
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  Github,
  Target,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectTopSectionProps {
  project: ProjectData;
}

const ProjectTopSection = ({ project }: ProjectTopSectionProps) => {
  return (
    <div className='mb-16 grid gap-10 lg:grid-cols-2'>
      {/* 프로젝트 이미지 캐로셀 */}
      <div className='relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl'>
        <Carousel className='w-full'>
          <CarouselContent>
            {project.projectImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className='relative aspect-[16/10] bg-black/20 backdrop-blur-sm'>
                  <Image
                    src={`/images/${project.id}/${image}`}
                    alt={`${project.title} 스크린샷 ${index + 1}`}
                    fill
                    className='object-cover transition-transform duration-300 hover:scale-105'
                    onError={(e) => {
                      e.currentTarget.src = '/images/project-placeholder.png';
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
          <div className='flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-black/20 shadow-lg backdrop-blur-md'>
            <Image
              src={project.favicon || '/images/default-favicon.png'}
              fill
              alt='Project Favicon'
            />
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
          <Button
            className='flex items-center gap-2 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:shadow-xl'
            asChild
          >
            <Link
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='h-4 w-4' />
              GitHub
            </Link>
          </Button>
          <Button
            variant='secondary'
            className='flex items-center gap-2 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:shadow-xl'
            asChild
          >
            <Link
              href={project.demoUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ExternalLink className='h-4 w-4' />
              Live Demo
            </Link>
          </Button>
          {project.id === 'uuno' && (
            <Button
              variant='outline'
              className='flex items-center gap-2 border border-white/20 bg-black/20 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/10'
              asChild
            >
              <Link
                href='https://chalk-cerise-6ec.notion.site/Uuno-You-Uno-1c9d8e847058809e8837df39a6c23989?source=copy_link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BookOpen className='h-4 w-4' />
                Blog
              </Link>
            </Button>
          )}
        </div>

        {/* 프로젝트 요약 정보 */}
        <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md'>
          <CardContent className='p-8'>
            <div className='grid grid-cols-1 gap-6 text-sm md:grid-cols-2'>
              <div className='flex items-center gap-3 rounded-lg bg-white/5 p-3'>
                <Calendar className='h-5 w-5 text-primary' />
                <div>
                  <span className='text-white/60'>개발기간</span>
                  <p className='font-medium text-white'>
                    {project.overview.period}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3 rounded-lg bg-white/5 p-3'>
                <Users className='h-5 w-5 text-primary' />
                <div>
                  <span className='text-white/60'>팀구성</span>
                  <p className='font-medium text-white'>
                    {project.overview.teamComposition}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3 rounded-lg bg-white/5 p-3'>
                <Target className='h-5 w-5 text-primary' />
                <div>
                  <span className='text-white/60'>담당</span>
                  <p className='font-medium text-white'>
                    {project.overview.role}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3 rounded-lg bg-white/5 p-3'>
                <Award className='h-5 w-5 text-primary' />
                <div>
                  <span className='text-white/60'>성과</span>
                  <p className='break-keep font-medium text-white'>
                    {project.overview.performance}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectTopSection;
