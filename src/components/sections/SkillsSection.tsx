import SectionTitle from './SectionTitle';
import SkillsDoor from './skills/SkillsDoor';
import SkillsTechStack from './skills/SkillsTechStack';

const SkillsSection = () => {
  return (
    <section id='skills' className='relative min-h-screen py-20'>
      <div className='container mx-auto max-w-full px-4'>
        <SectionTitle
          title='Tech Stack'
          subTitle='실무와 프로젝트로 쌓은 역량'
          ariaLabel='주 기술 스택 섹션'
        />

        {/* 문 컨테이너 */}
        <div className='relative h-auto overflow-y-auto rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl md:h-[600px]'>
          {/* 뒤에 숨겨진 Tech Stack 내용 */}
          <SkillsTechStack />

          {/* 데스크톱에서만 문짝 표시 */}
          <div className='hidden md:block'>
            <SkillsDoor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
