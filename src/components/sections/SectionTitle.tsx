interface SectionTitleProps {
  title: string;
  subTitle?: string;
  ariaLabel?: string;
}
const SectionTitle = ({ title, subTitle, ariaLabel }: SectionTitleProps) => {
  return (
    <div className='mb-12 text-center'>
      <h2
        className='split-text mb-4 text-3xl font-bold text-white md:text-5xl'
        aria-label={ariaLabel || `${title} 섹션`}
      >
        {title}
      </h2>
      <h3 className='text-lg text-white'>{subTitle}</h3>
    </div>
  );
};

export default SectionTitle;
