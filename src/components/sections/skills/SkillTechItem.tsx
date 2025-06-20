import { IconType } from 'react-icons';

interface SkillTechItemProps {
  icon?: IconType;
  name: string;
  description: string;
  iconClassName?: string;
  containerClassName?: string;
  iconBgClassName?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'highlight';
  experience?: string;
  experienceDetail?: string;
  textIcon?: string;
  textIconClassName?: string;
}

const iconSizes = {
  sm: 'h-4 w-4 md:h-5 md:w-5',
  md: 'h-6 w-6 md:h-7 md:w-7',
  lg: 'h-7 w-7 md:h-8 md:w-8',
};

const containerSizes = {
  sm: 'h-7 w-7',
  md: 'h-8 w-8 md:h-10 md:w-10',
  lg: 'h-12 w-12',
};

const SkillTechItem = ({
  icon: Icon,
  name,
  description,
  iconClassName = '',
  containerClassName = '',
  iconBgClassName = 'bg-slate-700',
  iconSize = 'md',
  variant = 'default',
  experience,
  experienceDetail,
  textIcon,
  textIconClassName = '',
}: SkillTechItemProps) => {
  if (variant === 'highlight' && Icon) {
    return (
      <div
        className={`rounded-lg border border-slate-600/50 bg-slate-800/80 p-4 transition-colors duration-200 ${containerClassName}`}
        role='listitem'
        aria-label={`${name} 기술 스택`}
      >
        <div className='space-y-2 text-center'>
          <div className='flex items-center justify-center gap-4'>
            <div
              className={`flex ${containerSizes.lg} items-center justify-center rounded-lg ${iconBgClassName}`}
              aria-hidden='true'
            >
              <Icon className={`${iconSizes.lg} ${iconClassName}`} />
            </div>
          </div>
          <div>
            <div className='text-sm font-medium text-white md:text-base'>
              {name}
            </div>
            {experience && (
              <div className='text-xs font-semibold text-green-400'>
                {experience}
              </div>
            )}
            {experienceDetail && (
              <div className='mt-1 text-xs text-slate-400'>
                {experienceDetail}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (Icon) {
    return (
      <div
        className={`rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 ${containerClassName}`}
        role='listitem'
        aria-label={`${name} 기술 스택`}
      >
        <div className='flex items-center space-x-2'>
          <div
            className={`flex ${containerSizes[iconSize]} items-center justify-center rounded-md ${iconBgClassName}`}
            aria-hidden='true'
          >
            <Icon className={`${iconSizes[iconSize]} ${iconClassName}`} />
          </div>
          <div className='min-w-0 flex-1'>
            <div className='text-sm font-medium text-white'>{name}</div>
            <div className='text-xs text-slate-400'>{description}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 ${containerClassName}`}
      role='listitem'
      aria-label={`${name} 기술 스택`}
    >
      <div className='flex items-center space-x-2'>
        <div
          className={`flex ${containerSizes[iconSize]} items-center justify-center rounded-md ${textIconClassName}`}
          aria-hidden='true'
        >
          {textIcon || name.charAt(0).toUpperCase()}
        </div>
        <div className='min-w-0 flex-1'>
          <div className='text-sm font-medium text-white'>{name}</div>
          <div className='text-xs text-slate-400'>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillTechItem;
