import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import { ProjectTagCard } from '@/constants/projects';
import Link from 'next/link';

interface ProjectBlogProps {
  blogPosts: Array<ProjectTagCard & { url: string }>;
}

const ProjectBlog = ({ blogPosts }: ProjectBlogProps) => {
  return (
    <TabsContent value='blog' className='space-y-8'>
      <Card className='border border-white/10 bg-black/20 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl'>
        <CardHeader>
          <CardTitle className='text-2xl text-white'>
            관련 트러블 슈팅 포스트
          </CardTitle>
          <CardDescription className='text-lg text-white/70'>
            이 프로젝트와 관련된 트러블 슈팅 블로그 포스트들을 모아보았습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col space-y-6'>
            {blogPosts.map((post) => (
              <Link
                href={post.url}
                target='_blank'
                rel='noopener noreferrer'
                key={post.title}
              >
                <div className='cursor-pointer rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all duration-200 hover:bg-white/5 hover:shadow-lg'>
                  <h4 className='mb-3 text-xl font-medium text-white'>
                    {post.title}
                  </h4>
                  <p className='mb-4 text-sm leading-relaxed text-white/80'>
                    {post.description}
                  </p>
                  {post.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      variant='outline'
                      className='border border-white/20 px-3 py-1 text-sm text-white/70 transition-colors duration-200 hover:bg-white/10'
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default ProjectBlog;
