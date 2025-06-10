import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { ProjectSkillStack } from '@/constants/projects';
import { TabsContent } from '@radix-ui/react-tabs';

interface ProjectSkillStackProps {
  skillStack: ProjectSkillStack[];
}

const ProjectSkillStack = ({ skillStack }: ProjectSkillStackProps) => {
  return (
    <TabsContent value='tech' className='space-y-8'>
      <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
        <CardHeader>
          <CardTitle className='text-2xl text-white'>사용 기술 스택</CardTitle>
          <CardDescription className='text-lg text-white/70'>
            프로젝트에서 사용된 주요 기술들과 선택 이유를 소개합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-8'>
          {skillStack.map((stack) => (
            <div key={stack.title} className='rounded-xl bg-white/5 p-6'>
              <h3 className='mb-4 text-xl font-semibold text-white'>
                {stack.title}
              </h3>
              <div className='mb-4 flex flex-wrap gap-2'>
                {stack.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    className='bg-white/10 px-3 py-1 text-sm text-white transition-colors duration-200 hover:bg-white/20'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className='text-sm leading-relaxed text-white/80'>
                {stack.description}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default ProjectSkillStack;
