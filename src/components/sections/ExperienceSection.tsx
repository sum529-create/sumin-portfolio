import { experienceData } from '@/constants/experience';

const ExperienceSection = () => {
  return (
    <section id='experience' className='relative min-h-screen py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='split-text mb-12 text-center text-3xl font-bold md:text-4xl'>
          Experience
        </h2>
        <div className='scroll-animate rounded-lg bg-card/50 p-8 backdrop-blur-sm'>
          <div className='mb-4 flex flex-col md:flex-row md:items-center md:justify-between'>
            <div>
              <h3 className='mb-1 text-2xl font-semibold'>
                {experienceData.company}
              </h3>
              <p className='mb-1 text-lg'>{experienceData.department}</p>
              <p className='text-muted-foreground'>{experienceData.period}</p>
            </div>
          </div>

          <p className='mb-4'>{experienceData.roleSummary}</p>

          <ul className='mb-6 list-inside list-disc space-y-2 text-muted-foreground'>
            {experienceData.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className='flex flex-wrap gap-2'>
            {experienceData.techStack.map((tech) => (
              <span
                key={tech}
                className='rounded-full bg-primary/10 px-3 py-1 text-sm'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
