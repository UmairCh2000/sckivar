import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Phase2 = () => {
  return (
    <div className='w-full block py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-sm lineBefore-md mb-5 md:mb-10 uppercase lg:w-2/3'>
              Phase 2{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full border-b border-scGray py-10'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h3 className='md:col-span-2 text-3xl lg:text-scH1 lineHeightH1 text-scBlack fontBlack mb-10 uppercase'>
                {`Shopify domination: twcc’s next level e-commerce strategy`}
              </h3>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-scBlack'>
                Expanding to Shopify was a game-changer for The Watch Care
                Company. Our creative team at Sckivar, the top-class creative
                savages, took charge and shot and edited highly converting ad
                creatives for meta at our in-house studio.
              </p>
            </Fade>
            <div className='md:col-span-3 w-full flex justify-center py-5'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <img
                  src='/assets/images/caseStudiesTWCCGif.gif'
                  alt=''
                  className='h-auto w-full md:w-2/3 block'
                />
              </Fade>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-16 w-full border-b border-scGray py-10 items-center'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-scBlack md:col-span-2'>
                {`But we didn't stop there, Sckivar took it to the next level by not only expanding to Shopify, but also creating a seamless and captivating website experience for The Watch Care Company. Our team of creative savages designed a landing page that was not only visually stunning but also strategically optimized to drive conversions through the roof.`}
              </p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/caseStudyPhase2Img1.png'
                className='w-full h-auto'
                alt='Phase 1'
              />
            </Fade>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-full border-b border-scGray  py-10 items-center'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/caseStudyPhase2Img2.png'
                className='w-full h-auto'
                alt='Phase 1'
              />
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg text-scBlack'>
                {`While our competitors were stuck md:leading-[34px] tracking-wide in their old ways, we outsmarted them by constantly offering irresistible deals and targeted campaigns. This helped us not only hit our numbers but also consistently see an increase in growth month after month.`}
              </p>
            </Fade>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-full py-10 items-center'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-scBlack'>
                {`And let's not forget about our killer marketing strategy, we took full advantage of google and meta ads to showcase our entire catalog and the result was a revenue increase of $33,000. Sckivar is the only choice for brands looking to expand and dominate on new platforms.`}
              </p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/caseStudyPhase2Img3.png'
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

export default Phase2;
