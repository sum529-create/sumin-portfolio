'use client';
import { projectsData } from '@/constants/projects';
import SectionTitle from './SectionTitle';
import ProjectCard from './projects/ProjectCard';

export default function ProjectSection() {
  return (
    <section id='projects' className='relative min-h-screen py-20'>
      <div className='px-4pb-[100px] container mx-auto max-w-full'>
        <SectionTitle
          title='Projects'
          subTitle='나의 프로젝트들'
          ariaLabel='프로젝트 섹션'
        />
        {projectsData.map((data, i) => (
          <ProjectCard i={i} data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
}
