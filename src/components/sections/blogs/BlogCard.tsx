import { BlogDataProps } from '@/constants/blogs';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface BlogCardProps {
  i: number;
  blog: BlogDataProps;
}

const BlogCard = ({ blog, i }: BlogCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardCurrent = cardRef.current;
  useEffect(() => {
    if (!cardCurrent) return;
    gsap.set(cardCurrent, {
      rotateX: 5,
      rotateY: 15,
      transformPerspective: 800,
      transformStyle: 'preserve-3d',
    });
  }, []);
  const handleMouseEnter = () => {
    if (!cardCurrent) return;
    gsap.to(cardCurrent, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const handleMouseLeave = () => {
    if (!cardCurrent) return;
    gsap.to(cardCurrent, {
      rotateX: 5,
      rotateY: 15,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const labelStyles = (text: string) => {
    switch (text) {
      case 'Trouble Shooting':
        return 'bg-red-100/50 text-red-800';
      case 'TIL':
        return 'bg-yellow-100/50 text-yellow-800';
      case 'Project':
        return 'bg-blue-100/50 text-blue-800';
      default:
        return 'bg-primary/10 text-primary';
    }
  };
  return (
    <Link key={blog.title} href={blog.homepageUrl} target='_blank'>
      <div
        key={blog.title}
        className='scroll-animate group relative overflow-hidden rounded-lg bg-[#2e3c50] shadow-sm backdrop-blur-sm md:hover:shadow-[0px_0px_70px_#6366F1]'
        data-direction={i === 0 ? 'left' : i === 1 ? 'up' : 'right'}
        ref={cardRef}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div
          className='pointer-events-none absolute -left-1/2 -top-1/2 z-10 hidden h-[200%] w-[500%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent will-change-transform group-hover:block'
          style={{
            filter: 'blur(8px)',
            transformOrigin: '0 0',
          }}
        />
        <div className='relative aspect-[1/1] w-full max-w-md'>
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            aria-label={blog.title}
            fill={true}
            className='object-cover'
          />
        </div>
        <div className='p-6'>
          <span
            className={`mb-2 inline-block rounded-full px-3 py-1 text-sm font-medium ${labelStyles(blog.label)}`}
          >
            {blog.label}
          </span>
          <h3 className='mb-4 break-words text-lg font-semibold text-white'>
            {blog.title}
          </h3>
          <p className='line-clamp-4 break-words text-muted'>{blog.content}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
