import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Research = () => {
  return (
    <div className='w-full block py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 lg:px-0'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-lg lineBefore-sm mb-10'>
              R.A.D{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-scH1 lineHeightH1 text-scBlack fontBlack mb-10'>
              RESEARCH. ANALYSIS. DATA
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-lg leading-[34px] tracking-wide text-scBlack'>
              The first process after you sign-up with us to begin research on
              various aspects related to you and your business. We research your
              product, target market, present competitor, past and present
              statistics, and future predictors. Following the conclusion of the
              research, the compiled research is analyzed in an in-depth manner.
              This process allows us to sort the research into relevant groups
              based on their importance, effect, and requirement of further
              research. The Analysis report is then created into readable data
              that is then shared with the you and the relevant departments to
              formulate strategies and plans based on R.A.D.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Research;
