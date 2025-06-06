import { aboutText } from '@/constants/intro';
import SectionTitle from './SectionTitle';

const IntroSection = () => {
  return (
    <section id='about' className='relative min-h-screen py-20'>
      <div className='container mx-auto max-w-full px-4'>
        <SectionTitle
          title='Developer Interview'
          subTitle='자주 받는 질문과 나의 생각'
          ariaLabel='개발자 인터뷰 섹션'
        />
        <ul className='grid grid-cols-1 items-center gap-12'>
          {aboutText.map((item, i) => (
            <li className='break-keep' key={`question-${i}`}>
              <div className='scroll-animate' data-direction='left'>
                <p className='mb-4 rounded-lg bg-gradient-to-r from-primary/30 to-transparent px-4 py-5 text-lg font-bold text-gray-100 md:text-xl'>
                  <span className='mr-4 text-xl text-secondary md:text-2xl'>
                    Q{i + 1}.
                  </span>
                  {item.questionTxt}
                </p>
              </div>
              <div className='scroll-animate' data-direction='right'>
                <p className='ml-10 rounded-lg bg-gradient-to-r from-primary/10 to-transparent px-4 py-5 text-base text-gray-300 md:text-lg'>
                  <span className='mr-4 text-lg text-muted md:text-xl'>A.</span>
                  {item.answerTxt}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
