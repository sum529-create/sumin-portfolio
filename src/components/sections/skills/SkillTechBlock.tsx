import { ReactNode } from 'react';

interface SkillTechBlockProps {
  children: ReactNode;
  color: 'cyan' | 'green' | 'purple';
  text: string;
}
const SkillTechBlock = ({ children, color, text }: SkillTechBlockProps) => {
  const colorTextVariants = {
    cyan: 'text-cyan-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
  };
  const colorBgVariants = {
    cyan: 'bg-cyan-400',
    green: 'bg-green-400',
    purple: 'bg-purple-400',
  };

  return (
    <div
      className='space-y-3'
      role='group'
      aria-labelledby={`tech-block-${text.replace(/[^a-zA-Z0-9_-]/g, '')}`}
    >
      <div className='mb-4 text-center'>
        <h3
          id={`tech-block-${text.replace(/[^a-zA-Z0-9_-]/g, '')}`}
          className={`text-base font-semibold ${colorTextVariants[color]} md:text-lg`}
          role='heading'
          aria-level={3}
        >
          {text}
        </h3>
        <div
          className={`mx-auto mt-2 h-0.5 w-12 rounded-full ${colorBgVariants[color]}`}
        ></div>
      </div>
      <div
        className='flex flex-col gap-3'
        role='list'
        aria-label={`${text} 기술 목록`}
      >
        {children}
      </div>
    </div>
  );
};

export default SkillTechBlock;
