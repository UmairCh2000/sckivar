import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Phase1 = () => {
  return (
    <div className='w-full block py-20 bg-scBlack'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-sm whiteLine lineBefore-md mb-5 md:mb-10 uppercase lg:w-2/3'>
              Phase 1{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-b border-scGray py-10'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h3 className='text-3xl lg:text-scH1 lineHeightH1 text-white fontBlack mb-10 uppercase'>
                {`reaching new heights: twcc’s amazon launch`}
              </h3>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-white'>
                {`The Watch Care Company's launch on Amazon was a huge success. Our
              strategy was to target the UK and Australia first, with a focus on
              a product line of 8 ASINs. We optimized our listings with
              top-class SEO and high-quality visuals to make sure our brand
              stood out among the competition. We also trained the algorithm to
              prioritize intent and specific search terms to increase brand
              visibility.`}
              </p>
            </Fade>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-full border-b border-scGray py-10 items-center'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-white'>
                {`We don't play around when it comes to targeting the right
              audience. We utilized a combination of broad match, phrase match,
              and exact match campaigns to reach the most relevant audience
              possible. And with our Automatic Campaigns, we identified the
              keywords with the highest conversion rates and crafted manual
              campaigns to target those keywords. But the real kicker? Our PPC
              campaign spend was a mere £18,105 but generated an
              earth-shattering £76,064 sales with an ACOS of 23.80 and ROAS of
              4.20. That's the kind of return on investment that makes the
              competition tremble.`}
              </p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/casestudymanteiroImg1.png'
                className='w-full h-auto'
                alt='Phase 1'
              />
            </Fade>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-full  py-10 items-center'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/casestudymanteiroImg2.png'
                className='w-full h-auto'
                alt='Phase 1'
              />
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-white'>
                {`But wait, there's more! We also utilized manychat chat flow to
              engage with customers in real-time and address their queries,
              divert the traffic from social media to make sure we avail our
              honeymoon period there, ensuring a top-class customer experience
              that keeps them coming back for more.`}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase1;
