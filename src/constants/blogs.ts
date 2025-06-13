export interface BlogLabelsProps {
  TROUBLE_SHOOTING: string;
  TIL: string;
  PROJECT: string;
}
export const BLOG_LABELS: BlogLabelsProps = {
  TROUBLE_SHOOTING: 'Trouble Shooting',
  TIL: 'TIL',
  PROJECT: 'Project',
};

export interface BlogDataProps {
  title: string;
  content: string;
  imageUrl: string;
  label: string;
  homepageUrl: string;
}
export const blogData: BlogDataProps[] = [
  {
    title: 'Tanstack Query와 useEffect의 무한 루프 함정',
    content:
      '상품 등록/수정 페이지에서 기존 상품 정보를 불러올 때, 아무런 로직을 하지않아도  alert 경고 문구가 계속 뜨고 무한 루프가 발생했다...',
    imageUrl: '/images/blog/blog-1.png',
    label: BLOG_LABELS.TROUBLE_SHOOTING,
    homepageUrl:
      'https://velog.io/@sum529/Trouble-Shooting-Tanstack-Query와-useEffect의-무한-루프-함정',
  },
  {
    title:
      '나의 첫 Custom Hook 너로 정했다.. 로컬 스토리지 : 상태 관리의 정석과 그 과정',
    content:
      '첫 커스텀 훅으로 선택한 브라우저 저장소 Hook. 근데 이게 Hook으로 빼는게 맞을까? 아니면 이미 작성해둔 리듀서 안에서 구현하는것이 맞을까? 과연?',
    imageUrl: '/images/blog/blog-2.png',
    label: BLOG_LABELS.TIL,
    homepageUrl:
      'https://velog.io/@sum529/TIL-나의-첫-Custom-Hook-너로-정했다..-로컬-스토리지-상태-관리의-정석과-그-과정',
  },
  {
    title:
      '크로스 브라우저 호환성을 위한 스포이드 기능 구현: EyeDropper API와 html2canvas',
    content:
      '웹 개발에서 브라우저 호환성 문제는 늘 도전적인 과제입니다. 최신 웹 API를 사용하고 싶지만 모든 브라우저에서 동작하지 않는 경우, 개발자는 대안을 모색해야 합니다. 이번에는 색상 스포이드 기능을 구현하면서 겪었던 기술적 고민과 해결 과정을 공유하고자 합니다.',
    imageUrl: '/images/blog/blog-3.png',
    label: BLOG_LABELS.PROJECT,
    homepageUrl:
      'https://chalk-cerise-6ec.notion.site/EyeDropper-API-html2canvas-1dbd8e847058800bb702fddf24a37fca?source=copy_link',
  },
];
