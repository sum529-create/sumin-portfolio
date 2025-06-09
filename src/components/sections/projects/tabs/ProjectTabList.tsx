import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProjectTabList = () => {
  return (
    <TabsList className='mb-8 grid w-full grid-cols-4 rounded-xl bg-black/20 p-1 shadow-lg backdrop-blur-md lg:w-fit lg:grid-cols-4'>
      <TabsTrigger
        value='overview'
        className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
      >
        <span className='hidden sm:inline'>개요</span>
        <span className='sm:hidden'>📋</span>
      </TabsTrigger>
      <TabsTrigger
        value='tech'
        className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
      >
        <span className='hidden sm:inline'>기술스택</span>
        <span className='sm:hidden'>🔧</span>
      </TabsTrigger>
      <TabsTrigger
        value='retrospective'
        className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
      >
        <span className='hidden sm:inline'>회고</span>
        <span className='sm:hidden'>💭</span>
      </TabsTrigger>
      <TabsTrigger
        value='blog'
        className='flex items-center gap-2 rounded-lg text-white/70 transition-all duration-200 data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-md'
      >
        <span className='hidden sm:inline'>트러블슈팅</span>
        <span className='sm:hidden'>🚨</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default ProjectTabList;
