import SectionContainer from '@/components/sections/common/SectionContainer';
import SectionTitle from '@/components/sections/common/SectionTitle';
import SkillsDoor from '@/components/sections/skills/SkillsDoor';
import SkillsTechStack from '@/components/sections/skills/SkillsTechStack';

const SkillsSection = () => {
  return (
    <SectionContainer sectionId='skills'>
      <SectionTitle
        title='Skills Stack'
        subTitle='실무와 프로젝트로 쌓은 역량'
        ariaLabel='주 기술 스택 섹션'
      />

      {/* 문 컨테이너 */}
      <div className='relative h-auto overflow-y-auto rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl md:h-[500px]'>
        {/* 뒤에 숨겨진 Tech Stack 내용 */}
        <SkillsTechStack />

        {/* 데스크톱에서만 문짝 표시 */}
        <div className='hidden md:block'>
          <SkillsDoor />
        </div>
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
