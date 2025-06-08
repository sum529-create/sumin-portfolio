import { BLOG_LABELS, BlogDataProps } from '@/constants/blogs';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { FaFire, FaBookOpen } from 'react-icons/fa6';
import { GrPersonalComputer } from 'react-icons/gr';
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface BlogCardProps {
  i: number;
  blog: BlogDataProps;
}

const BlogCard = ({ blog, i }: BlogCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!cardRef.current || isMobile) return;
    gsap.set(cardRef.current, {
      rotateX: 5,
      rotateY: 15,
      transformPerspective: 800,
      transformStyle: 'preserve-3d',
    });
    return () => {
      if (cardRef.current) {
        gsap.killTweensOf(cardRef.current);
      }
    };
  }, [isMobile]);
  const handleMouseEnter = () => {
    if (!cardRef.current || isMobile) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const handleMouseLeave = () => {
    if (!cardRef.current || isMobile) return;
    gsap.to(cardRef.current, {
      rotateX: 5,
      rotateY: 15,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const labelStyles = (text: string) => {
    switch (text) {
      case BLOG_LABELS.TROUBLE_SHOOTING:
        return 'bg-red-100/50 text-red-800';
      case BLOG_LABELS.TIL:
        return 'bg-yellow-100/50 text-yellow-800';
      case BLOG_LABELS.PROJECT:
        return 'bg-blue-100/50 text-blue-800';
      default:
        return 'bg-primary/10 text-primary';
    }
  };
  return (
    <Link key={blog.title} href={blog.homepageUrl} target='_blank'>
      <div
        className='scroll-animate group relative overflow-hidden rounded-lg bg-[#2e3c50] shadow-sm backdrop-blur-sm md:hover:shadow-[0px_0px_50px_#6366F1]'
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
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
            onError={(e) => {
              e.currentTarget.src = '/blog/blog-placeholder.jpg';
            }}
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
          />
        </div>
        <div className='p-6'>
          <span
            className={`mb-2 inline-block rounded-full px-3 py-1 text-sm font-medium ${labelStyles(blog.label)}`}
          >
            {blog.label === BLOG_LABELS.TROUBLE_SHOOTING ? (
              <FaFire className='mr-1 inline text-red-500' />
            ) : blog.label === BLOG_LABELS.TIL ? (
              <FaBookOpen className='mr-1 inline text-yellow-800' />
            ) : blog.label === BLOG_LABELS.PROJECT ? (
              <GrPersonalComputer className='mr-1 inline text-blue-800' />
            ) : null}
            {blog.label}
          </span>
          {/* <h3 className='mb-4 break-words text-lg font-semibold text-white'>
            {blog.title}
          </h3> */}
          <p className='line-clamp-4 break-words text-slate-300'>
            {blog.content}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
