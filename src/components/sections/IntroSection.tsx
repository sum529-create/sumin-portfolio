import { aboutText } from "@/constants/intro";

const IntroSection = () => {
  return (
    <section id='about' className='relative min-h-screen py-20'>
      <div className='container mx-auto px-4 max-w-full'>
        <h2 className='split-text mb-4 text-center text-3xl font-bold md:text-5xl text-gray-300'>
          Developer Interview
        </h2>
        <h4 className="text-gray-300 mb-12 text-center text-lg">
          자주 받는 질문과 나의 생각
        </h4>
        <ul className='grid grid-cols-1 items-center gap-12'>
          {
            aboutText.map((item, i) => (
              <li className="break-keep" key={`question-${i}`}>
                <div className='scroll-animate' data-direction='left'>
                  <p className='rounded-lg bg-gradient-to-r from-primary/30 to-transparent px-4 py-5 text-lg md:text-xl text-gray-100 mb-4 font-bold'>
                    <span className='text-secondary mr-4 text-xl md:text-2xl'>Q{i+1}.</span>{item.questionTxt} 
                  </p>
                </div>
                <div className='scroll-animate' data-direction='right'>
                  <p className='rounded-lg ml-10 bg-gradient-to-r from-primary/10 to-transparent text-base md:text-lg px-4 py-5 text-gray-300'>
                    <span className="text-muted mr-4 text-lg md:text-xl">A.</span>
                    {item.answerTxt}
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default IntroSection;