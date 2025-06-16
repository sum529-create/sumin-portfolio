'use client';
import { projectsSummary } from '@/constants/projects-summary';
import SectionTitle from '@/components/sections/common/SectionTitle';
import ProjectCard from '@/components/sections/projects/ProjectCard';
import SectionContainer from '@/components/sections/common/SectionContainer';

export default function ProjectSection() {
  return (
    <SectionContainer sectionId='projects' divCln='pb-40'>
      <SectionTitle
        title='Projects'
        subTitle='나의 프로젝트들'
        ariaLabel='프로젝트 섹션'
      />
      {projectsSummary.map((data, i) => (
        <ProjectCard i={i} data={data} key={data.id} />
      ))}
    </SectionContainer>
  );
}
