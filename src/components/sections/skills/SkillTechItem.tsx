import { IconType } from 'react-icons';

interface SkillTechItemProps {
  icon?: IconType;
  name: string;
  description: string;
  iconClassName?: string;
  containerClassName?: string;
  iconBgClassName?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  textSize?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'highlight';
  experience?: string;
  experienceDetail?: string;
  textIcon?: string;
  textIconClassName?: string;
  /** 하이라이트 카드에서 기간 텍스트 색상 (기본: Vue 그린) */
  accentClassName?: string;
  /** 아이콘-텍스트 레이아웃 방향 (기본: row) */
  layout?: 'row' | 'column';
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

const textSizeClasses: Record<
  NonNullable<SkillTechItemProps['textSize']>,
  { name: string; description: string }
> = {
  xs: {
    name: 'text-[11px] md:text-xs',
    description: 'text-[10px] md:text-xs text-slate-400',
  },
  sm: {
    name: 'text-sm',
    description: 'text-xs text-slate-400',
  },
  md: {
    name: 'text-base',
    description: 'text-sm text-slate-400',
  },
  lg: {
    name: 'text-lg',
    description: 'text-base text-slate-400',
  },
};

const SkillTechItem = ({
  icon: Icon,
  name,
  description,
  iconClassName = '',
  containerClassName = '',
  iconBgClassName = 'bg-slate-700',
  iconSize = 'md',
  textSize = 'sm',
  variant = 'default',
  experience,
  experienceDetail,
  textIcon,
  textIconClassName = '',
  accentClassName = 'text-green-400',
  layout = 'row',
}: SkillTechItemProps) => {
  const sizeClass = textSizeClasses[textSize];

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
            <div
              className={`${textSizeClasses.md.name} font-medium text-white`}
            >
              {name}
            </div>
            {experience && (
              <div className={`text-xs font-semibold ${accentClassName}`}>
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
    const isColumn = layout === 'column';
    return (
      <div
        className={`rounded-lg border border-slate-600/50 bg-slate-800/80 p-2.5 transition-colors duration-200 ${containerClassName}`}
        role='listitem'
        aria-label={`${name} 기술 스택`}
      >
        <div
          className={
            isColumn
              ? 'flex flex-col items-center space-y-2'
              : 'flex items-center space-x-2'
          }
        >
          <div
            className={`flex ${containerSizes[iconSize]} items-center justify-center rounded-md ${iconBgClassName}`}
            aria-hidden='true'
          >
            <Icon className={`${iconSizes[iconSize]} ${iconClassName}`} />
          </div>
          <div className={isColumn ? 'mt-0.5 text-center' : 'min-w-0 flex-1'}>
            <div
              className={
                isColumn
                  ? 'max-w-[5.5rem] truncate whitespace-nowrap text-[10px] font-medium text-white md:text-[11px]'
                  : `${sizeClass.name} font-medium text-white`
              }
            >
              {name}
            </div>
            {description && (
              <div className={sizeClass.description}>{description}</div>
            )}
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
          <div className={`${sizeClass.name} font-medium text-white`}>
            {name}
          </div>
          {description && (
            <div className={sizeClass.description}>{description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillTechItem;
