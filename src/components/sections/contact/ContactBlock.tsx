import { ContactItem, iconMap } from '@/constants/contact';
import Link from 'next/link';
import { ElementType } from 'react';
import { MdEmail } from 'react-icons/md';

interface ContactBlockProps {
  contact: ContactItem;
  index: number;
}

const ContactBlock = ({ contact, index }: ContactBlockProps) => {
  const IconComponent =
    (iconMap[contact.label as keyof typeof iconMap] as ElementType) || MdEmail;
  return (
    <Link
      href={contact.href}
      target={contact.target}
      rel={contact.rel}
      aria-label={contact.ariaLabel}
      className='group relative flex min-w-28 animate-portal-float flex-col items-center rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-6 transition-all duration-1000 hover:scale-110 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]'
      style={{ animationDelay: `${index}s` }}
    >
      <div className='mb-3 text-3xl transition-transform duration-300 group-hover:scale-110'>
        <IconComponent className='text-purple-500 group-hover:text-purple-400' />
      </div>
      <span className='text-center text-sm font-medium text-slate-50'>
        {contact.label}
      </span>

      {/* 포털 글로우 효과 */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
    </Link>
  );
};

export default ContactBlock;
