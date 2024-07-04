import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Consception = () => {
  return (
    <div className='w-full block py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-sm lineBefore mb-10 uppercase lg:w-2/3'>
              Conception{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-[56px] text-scBlack fontBlack mb-10 uppercase'>
              The Formation
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-lg md:leading-[34px] tracking-wide text-scBlack mb-5'>
              {`Manteiro, the luxury phone accessories brand, was in search of a partner to elevate their brand and enter the competitive e-commerce niche. They wanted to offer unique, high-quality leather phone cases for the iPhone series to provide customers with both style and protection. With a focus on B2C and a prior presence on the UK's Amazon market, they also had plans to expand and build their own audience through a website. That's where WE came in. We were able to help Manteiro create their brand from scratch and take on the responsibility of 360-degree brand management. The results speak for themselves: over $110,000 in sales and hundreds of new customers acquired daily across all platforms.`}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Consception;
