import {
  PINK_HIGHLIGHT,
  PURPLE_HIGHLIGHT,
  TEAL_HIGHLIGHT,
} from '@/constants/styles';
import { ReactNode } from 'react';

interface AboutTextProp {
  questionTxt: ReactNode;
  answerTxt: ReactNode;
}

export const aboutText: AboutTextProp[] = [
  {
    questionTxt: (
      <>
        간단한 <span className='text-amber-light'>자기소개</span> 부탁드립니다.
      </>
    ),
    answerTxt: (
      <>
        사용자가 <span className={TEAL_HIGHLIGHT}>'편하다'고 느끼는 순간</span>
        을 만드는 걸 좋아하는 프론트엔드 개발자에요. 깔끔한 UI, 직관적인 UX를
        고민하며, 눈에 보이는 것부터 보이지 않는 흐름까지 세심하게 신경 쓰는
        편이에요. 요즘은 React, Next.js, TypeScript로 이것저것 시도해보고 있고,
        새로운 것을 배우고 기록하는 걸 즐겨요.
      </>
    ),
  },
  {
    questionTxt: (
      <>
        사용자가{' '}
        <span className='text-amber-light'>'편하다'고 느끼는 순간</span>을
        만들기 위해 어떤 것들을 중요하게 생각하시나요?
      </>
    ),
    answerTxt: (
      <>
        보이지 않는 디테일까지 신경 쓰는 것이 핵심이라고 생각해요. Uuno에서
        자연스러운 애니메이션을 구현하고, Medi Click에서 빠른 로딩을 위해 SSG를
        적용하는 것처럼요. 사용자가{' '}
        <span className={PURPLE_HIGHLIGHT}>"어? 이거 되게 부드럽네"</span> 하고
        느끼는 순간, 그게 바로 제가 추구하는 경험이에요.
      </>
    ),
  },
  {
    questionTxt: (
      <>
        <span className='text-amber-light'>새로운 기술을 학습</span>할 때 어떤
        방식을 선호하시나요?
      </>
    ),
    answerTxt: (
      <>
        <span className={PINK_HIGHLIGHT}>직접 부딪혀보면서 배우는 편</span>
        이에요. Next.js를 배울 때도 Medi Click 프로젝트에서 실제 문제를 겪으면서
        서버와 클라이언트 환경의 차이를 체감했어요. 이런 시행착오 과정들을
        블로그에 '고민의 흔적'으로 기록해두는데, 나중에 비슷한 상황에서 도움이
        돼요. 실패도 좋은 학습이라고 생각해요.
      </>
    ),
  },
];
