import SectionTitle from './SectionTitle';
import { contacts } from '@/constants/contact';
import ContactBackground from './contact/ContactBackground';
import ContactBlock from './contact/ContactBlock';
import { IoMailOpenOutline } from 'react-icons/io5';
import { FaLink } from 'react-icons/fa6';

const ContactSection = () => {
  return (
    <section
      id='contact'
      className='relative min-h-screen overflow-hidden py-20'
    >
      {/* 배경 효과 */}
      <ContactBackground />

      <div className='container relative z-10 mx-auto px-4'>
        <SectionTitle
          title='Contact Me'
          subTitle='저에게 연락해 주세요'
          ariaLabel='연락 섹션'
        />

        <div className='mx-auto max-w-2xl'>
          <div className='scroll-animate rounded-lg border border-purple-500/20 p-8 backdrop-blur-sm'>
            <p className='mb-8 break-keep text-center text-lg text-gray-300'>
              앞으로 더 나아가는 개발자가 되고 싶습니다.
              <br />
              함께할 기회가 있다면 언제든지 환영입니다.
            </p>

            {/* 연락처들 */}
            <div className='flex flex-col justify-center gap-8 md:flex-row md:gap-12'>
              {contacts.map((contact, index) => (
                <ContactBlock
                  key={contact.label}
                  contact={contact}
                  index={index}
                />
              ))}
            </div>

            {/* 연락처 정보 */}
            <div className='mt-8 border-t border-purple-500/20 pt-6 text-center'>
              <div className='flex flex-col items-center justify-center gap-4 text-sm text-muted sm:flex-row'>
                <span className='flex items-center gap-2'>
                  <IoMailOpenOutline />
                  <span>nosumin29@gmail.com</span>
                </span>
                <span className='hidden text-purple-500/50 sm:inline'>•</span>
                <span className='flex items-center gap-2'>
                  <FaLink />
                  <span>github.com/sum529-create</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
