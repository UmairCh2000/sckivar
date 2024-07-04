import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Dominance = () => {
  return (
    <div className='w-full block py-20 bg-scBlack'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-sm whiteLine lineBefore mb-0 md:mb-10 uppercase'>
              Taking the UK by Storm{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h3 className='md:col-span-2 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 text-white fontBlack mb-5 md:mb-8 uppercase'>
                Amazon Dominance
              </h3>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-white'>
                {`Introducing Manteiro's premium phone cases to the UK market was no
              easy feat, but with our R&D expert’s guidance, we were able to
              make it a reality. Starting with a limited product line of 12
              variations in size and colour, we carefully selected the most
              striking and eye-catching options to make our phone cases truly
              stand out in the market with much cheaper than anyone else out
              there. But we didn't stop there. We crafted a landing page that
              was both SEO-optimised and visually appealing, making it easy for
              consumers to find and purchase our products. The result? A
              successful launch and a growing customer base that can't get
              enough of Manteiro's premium phone accessories.`}
              </p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/caseStudyManteiroPic1.png'
                className='w-full h-auto'
                alt='Phase 1'
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dominance;
