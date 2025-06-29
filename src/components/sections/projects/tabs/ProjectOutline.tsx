import {
  Card,
  CardBlock,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { ProjectOutlineType, ProjectType } from '@/types/project';
import { Award, Lightbulb, Target, Users } from 'lucide-react';

interface ProjectOutlineProps {
  outline: ProjectOutlineType;
  projectType: ProjectType;
}

const ProjectOutline = ({ outline, projectType }: ProjectOutlineProps) => {
  return (
    <TabsContent value='overview' className='space-y-8'>
      <div className='grid gap-8 lg:grid-cols-2'>
        {/* 프로젝트 소개 */}
        <Card className='border border-white/20 bg-black/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2 text-xl text-white'>
              <Target className='h-6 w-6 text-primary' />
              프로젝트 소개
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <p className='leading-relaxed text-white/90'>
              {outline.intro.introText}
            </p>

            <CardBlock title='주요 기능'>
              <ul className='space-y-3 text-sm'>
                {outline.intro.features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-3 rounded-lg bg-white/10 p-3 text-white/90'
                  >
                    <span className='text-lg text-primary'>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardBlock>
          </CardContent>
        </Card>

        {/* 성과 및 학습 */}
        <Card className='border border-white/20 bg-black/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2 text-xl text-white'>
              <Award className='h-6 w-6 text-primary' />
              주요 성과 & 학습
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <CardBlock title='프로젝트 성과'>
              <ul className='space-y-3 text-sm'>
                {outline.achievements.projects.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-3 rounded-lg bg-white/10 p-3 text-white/90'
                  >
                    <span className='text-lg text-green-400'>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardBlock>

            <CardBlock
              title={projectType === 'individual' ? '개인 성과' : '협업 성과'}
            >
              <ul className='space-y-3 text-sm'>
                {outline.achievements.collaboration.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-3 rounded-lg bg-white/10 p-3 text-white/90'
                  >
                    <Lightbulb className='mt-1 h-4 w-4 flex-shrink-0 text-yellow-400' />
                    {item}
                  </li>
                ))}
              </ul>
            </CardBlock>
          </CardContent>
        </Card>
      </div>

      {/* 담당 역할 */}
      <Card className='border border-white/20 bg-black/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-xl text-white'>
            <Users className='h-6 w-6 text-primary' />
            담당 역할 & 기여도
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-6 md:grid-cols-3'>
            {outline.rolesAndResponsibilities.map((e) => (
              <div
                key={e.cardTitle}
                className='space-y-3 rounded-lg bg-white/10 p-4'
              >
                <h4 className='text-lg font-medium text-white'>
                  {e.cardTitle}
                </h4>
                <p className='text-sm text-white/90'>{e.cardContent}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default ProjectOutline;
