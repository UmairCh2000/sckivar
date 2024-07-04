import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Administration = () => {
  return (
    <div className='w-full block py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 lg:px-0'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-lg lineBefore-sm mb-10'>
              A&E{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-scH1 lineHeightH1 text-scBlack fontBlack mb-10'>
              ADMINISTRATION & EXECUTION
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-lg leading-[34px] tracking-wide text-scBlack'>
              The first two steps of the process are meant to prepare the team
              regarding every predictable aspect, ensuring we have a hook on the
              success. The administrative team of Sckivar ensures that the
              findings of research and analysis are administered and kept in
              sight to obtain time-line goals. The administration team manages
              the day to day tasks of the client, ensuring smooth operation
              throughout. The execution is reserved in implementing the devised
              strategies in the prior phase of the process. This works
              simultaneously with the administration without hindering any
              process. This creates a synergy of process, making success
              inevitable.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Administration;
