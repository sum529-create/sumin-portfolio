import SectionTitle from './SectionTitle';

const ContactSection = () => {
  return (
    <section id='contact' className='relative min-h-screen py-20'>
      <div className='container mx-auto px-4'>
        <SectionTitle
          title='Contact Me'
          subTitle='저와 함께할 기회를 기다립니다.'
          ariaLabel='연락 섹션'
        />
        <div className='mx-auto max-w-2xl'>
          <div className='scroll-animate rounded-lg bg-card/50 p-8 backdrop-blur-sm'>
            <p className='mb-8 text-center text-lg text-muted-foreground'>
              앞으로 더 나아가는 개발자가 되고 싶습니다.
              <br />
              함께할 기회가 있다면 언제든지 환영입니다.
            </p>
            <div className='flex justify-center space-x-6'>
              <a
                href='mailto:nosumin29@gmail.com'
                aria-label='이메일 보내기'
                className='text-primary transition-colors hover:text-primary/80'
              >
                ✉️ Email
              </a>
              <a
                href='https://github.com/sum529-create'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='깃허브 이동하기'
                className='text-primary transition-colors hover:text-primary/80'
              >
                📦 GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/%EC%88%98%EB%AF%BC-%EB%85%B8-077244364/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='링크드인 이동하기'
                className='text-primary transition-colors hover:text-primary/80'
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
