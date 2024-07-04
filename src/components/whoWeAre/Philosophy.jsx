import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Philosophy = () => {
  return (
    <div className='w-full block py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-sm lineBefore mb-10 uppercase lg:w-2/3'>
              philosophy{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-3xl md:text-4xl lg:text-scH1 lineHeightH1 text-scBlack fontBlack mb-5 md:mb-10 uppercase'>
              A vision as solid as a rock, the foundation of all great building
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-sm md:text-lg lg:leading-[34px] leading-[25px] tracking-wide text-scBlack mb-5'>
              {`The philosophy of Sckivar is driven from the realization that quality and honesty supersedes all. This realization led our founders to reshape the entire business model to ensure quality service completed with honesty and determination. Our primary goal for every client is to take their Amazon & Shopify brands to heights even they didn’t imagine. This is our blueprint of success.`}
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-sm md:text-lg lg:leading-[34px] leading-[25px] tracking-wide text-scBlack'>{`This has become the guiding principle for each and every member at
          Sckivar from the top to the bottom, allowing us to drastically improve
          the sales and stats of our clients’ Amazon & Shopify Businesses. Over
          the years, this philosophy has cultivated into norm and practice,
          making it into a successful business model.`}</p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
