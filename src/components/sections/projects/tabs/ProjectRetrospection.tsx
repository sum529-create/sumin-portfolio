import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import type { ProjectRetrospectionType } from '@/constants/projects';
import { Lightbulb, ThumbsDown, ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectRetrospectionProps {
  retrospection: ProjectRetrospectionType[];
}

const ProjectRetrospection = ({ retrospection }: ProjectRetrospectionProps) => {
  const titleData = [
    {
      cardTitle: '잘한 점 (Keep)',
      titleColor: 'text-green-600',
    },
    {
      cardTitle: '아쉬운 점 (Problem)',
      titleColor: 'text-red-600',
    },
    {
      cardTitle: '개선 방안 (Try)',
      titleColor: 'text-blue-600',
    },
  ];
  return (
    <TabsContent value='retrospective' className='space-y-8'>
      <div className='grid gap-8 lg:grid-cols-2'>
        {retrospection.map((item, index) => (
          <Card
            key={titleData[index].cardTitle}
            className={cn(
              index === 2 && 'col-span-1 md:col-span-2',
              'border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'
            )}
          >
            <CardHeader>
              <CardTitle
                className={`flex items-center gap-2 text-2xl ${titleData[index].titleColor}`}
              >
                <span className='text-3xl'>
                  {index === 0 ? (
                    <ThumbsUp />
                  ) : index === 1 ? (
                    <ThumbsDown />
                  ) : (
                    <Lightbulb />
                  )}
                </span>
                {titleData[index].cardTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              {item.content.map((content) => (
                <div
                  key={content.cardTitle}
                  className='space-y-3 rounded-lg bg-white/5 p-4'
                >
                  <h4 className='text-lg font-medium text-white'>
                    {content.cardTitle}
                  </h4>
                  <p className='text-sm leading-relaxed text-white/80'>
                    {content.cardContent}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
};

export default ProjectRetrospection;
