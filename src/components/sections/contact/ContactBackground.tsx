const ContactBackground = () => {
  return (
    <div className='pointer-events-none absolute inset-0'>
      {/* 별들 */}
      <div className='absolute left-10 top-10 h-1 w-1 animate-pulse rounded-full bg-white' />
      <div className='absolute right-20 top-20 h-1 w-1 animate-pulse rounded-full bg-white [animation-delay:0.5s]' />
      <div className='absolute bottom-20 left-20 h-1 w-1 animate-pulse rounded-full bg-white [animation-delay:1s]' />
      <div className='absolute bottom-10 right-10 h-1 w-1 animate-pulse rounded-full bg-white [animation-delay:1.5s]' />
      <div className='absolute left-1/4 top-1/3 h-1 w-1 animate-pulse rounded-full bg-white [animation-delay:2s]' />
      <div className='absolute right-1/4 top-2/3 h-1 w-1 animate-pulse rounded-full bg-white [animation-delay:2.5s]' />

      {/* 워프 링들 */}
      <div className='absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-purple-500/20' />
      <div className='absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-cyan-500/20 [animation-delay:1s] [animation-duration:3s]' />
      <div className='absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-purple-600/20 [animation-delay:2s] [animation-duration:4s]' />

      {/* 시공간 왜곡 그라데이션 */}
      <div
        className='absolute inset-0 animate-spacetime-warp opacity-20'
        style={{
          background: `
              radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)
            `,
        }}
      />
    </div>
  );
};

export default ContactBackground;
