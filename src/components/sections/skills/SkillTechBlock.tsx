import { ReactNode } from 'react';

interface SkillTechBlockProps {
  children: ReactNode;
  color: string;
  text: string;
}
const SkillTechBlock = ({ children, color, text }: SkillTechBlockProps) => {
  return (
    <div className='space-y-3'>
      <div className='mb-4 text-center'>
        <h3 className={`text-base font-semibold text-${color}-400 md:text-lg`}>
          {text}
        </h3>
        <div
          className={`mx-auto mt-2 h-0.5 w-12 rounded-full bg-${color}-400`}
        ></div>
      </div>

      {children}
    </div>
  );
};

export default SkillTechBlock;
