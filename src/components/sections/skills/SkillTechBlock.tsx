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
    <div className='space-y-3'>
      <div className='mb-4 text-center'>
        <h3
          className={`text-base font-semibold ${colorTextVariants[color]} md:text-lg`}
        >
          {text}
        </h3>
        <div
          className={`mx-auto mt-2 h-0.5 w-12 rounded-full ${colorBgVariants[color]}`}
        ></div>
      </div>
      {children}
    </div>
  );
};

export default SkillTechBlock;
