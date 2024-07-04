import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Insception = () => {
  return (
    <div className='w-full block py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-lg lineBefore-md mb-10 uppercase'>
              inception{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-[56px] text-scBlack fontBlack mb-10 uppercase'>
              the Journey
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-lg md:leading-[34px] tracking-wide text-scBlack mb-5'>
              {`TWCC, a well-known watch care accessory brand with established distribution channels, sought to expand their reach globally through ecommerce. Partnering with Sckivar , the brand launched on Amazon UK and Australia, focusing on a product line of 8 ASINs. By utilizing deep research and development, the team was able to increase visibility and drive sales despite a higher price point for their customized designs. In addition to Amazon, Sckivar also helped TWCC expand to their own website and Shopify store, using Google and meta ads to generate an additional $33,000 in revenue. Through targeted marketing strategies and understanding the target audience, TWCC was able to increase growth and outclass competitors.`}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Insception;
