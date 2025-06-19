import { aboutText } from '@/constants/intro';
import SectionTitle from '@/components/sections/common/SectionTitle';
import SectionContainer from '@/components/sections/common/SectionContainer';

const IntroSection = () => {
  return (
    <SectionContainer sectionId='about'>
      <SectionTitle
        title='Developer Interview'
        subTitle='저는 이런 생각을 가지고 있어요'
        ariaLabel='개발자 인터뷰 섹션'
      />
      <ul className='grid grid-cols-1 items-center gap-12'>
        {aboutText.map((item, i) => (
          <li className='break-keep' key={`question-${i}`}>
            <div className='scroll-animate' data-direction='left'>
              <p className='mb-4 rounded-lg bg-gradient-to-r from-primary/30 to-transparent px-4 py-5 text-lg font-bold text-white md:text-xl'>
                <span className='mr-4 text-xl text-secondary md:text-2xl'>
                  Q{i + 1}.
                </span>
                {item.questionTxt}
              </p>
            </div>
            <div className='scroll-animate' data-direction='right'>
              <p className='rounded-lg bg-gradient-to-r from-primary/10 to-transparent px-4 py-5 text-base text-gray-100 md:ml-10 md:text-lg'>
                <span className='mr-4 text-lg text-white md:text-xl'>A.</span>
                {item.answerTxt}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default IntroSection;
