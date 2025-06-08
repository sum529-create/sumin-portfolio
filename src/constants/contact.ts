export interface ContactItem {
  href: string;
  label: string;
  ariaLabel: string;
  target?: '_blank';
  rel?: 'noopener noreferrer';
}
export const contacts: ContactItem[] = [
  {
    href: 'mailto:nosumin29@gmail.com',
    label: 'Email',
    ariaLabel: '이메일 보내기',
  },
  {
    href: 'https://github.com/sum529-create',
    label: 'GitHub',
    ariaLabel: '깃허브 이동하기',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://www.linkedin.com/in/%EC%88%98%EB%AF%BC-%EB%85%B8-077244364/',
    label: 'LinkedIn',
    ariaLabel: '링크드인 이동하기',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];
