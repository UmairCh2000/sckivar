import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Objective = () => {
  return (
    <div
      className='w-full block py-20 '
      style={{
        background:
          'url(/assets/images/noiseGif.gif)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 lg:px-0'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-lg whiteLine lineBefore-sm mb-10'>
              O.P.S{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-scH1 lineHeightH1 text-white fontBlack mb-10'>
              OBJECTIVE. PLAN. STRATEGY
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-lg leading-[34px] tracking-wide text-white'>
              Following R.A.D., we move to the second stage of our process that
              is tailored specifically for each client. To devise a relevant
              plan for any client, it is important to establish realistic
              objectives that can be obtained over a period of designated time.
              Following the establishment of objectives, our team devises a
              long-term & short-term plan for the attainment of the objectives.
              These plans are aligned with the objectives and ensure their
              attainment in a short and long-term plan. Following the
              formulation and approval of client specific plans, strategies are
              devised that will be used in each time period. This allows the
              client to have a clear idea of future expenses and revenue for
              his/her business.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Objective;
