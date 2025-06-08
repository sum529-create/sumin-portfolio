import { blogData } from '@/constants/blogs';
import { Button } from '../ui/button';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import Link from 'next/link';
import BlogCard from './blogs/BlogCard';

const BlogSection = () => {
  return (
    <section id='blog' className='relative min-h-screen py-20'>
      <div className='container mx-auto max-w-full px-4'>
        <SectionTitle
          title='Blog'
          subTitle='개발관련 나의 경험치 기록'
          ariaLabel='블로그 섹션'
        />
        <div className='relative mb-20 grid grid-cols-1 gap-8 md:grid-cols-3'>
          {blogData.map((blog, i) => (
            <BlogCard key={i} blog={blog} i={i} />
          ))}
        </div>
        <div className='mt-8 flex justify-center'>
          <Button asChild>
            <Link
              href='https://velog.io/@sum529'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='블로그 더 보기'
              className='w-full px-4 text-lg md:w-auto'
            >
              더 보러가기
              <FaExternalLinkAlt />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
