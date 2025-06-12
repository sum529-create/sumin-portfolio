'use client';
import { projectsSummary } from '@/constants/projects-summary';
import SectionTitle from './SectionTitle';
import ProjectCard from './projects/ProjectCard';

export default function ProjectSection() {
  return (
    <section id='projects' className='relative min-h-screen py-20'>
      <div className='container mx-auto max-w-full px-4 pb-40'>
        <SectionTitle
          title='Projects'
          subTitle='나의 프로젝트들'
          ariaLabel='프로젝트 섹션'
        />
        {projectsSummary.map((data, i) => (
          <ProjectCard i={i} data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
}
