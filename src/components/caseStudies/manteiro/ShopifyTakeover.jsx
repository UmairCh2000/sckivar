import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const ShopifyTakeover = () => {
  return (
    <div className='w-full block py-20 bg-scBlack'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-sm whiteLine lineBefore md:mb-10 uppercase lg:w-2/3'>
              Next Phase{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-b border-scGray py-10'>
            <div className='block'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-white mb-5'>
                  {`When it comes to expanding a brand, most folks would say "hold my beer" and call it a day. But not us. We don't just dip our toes in the water, we dive headfirst and make a damn splash. So when our client came to us with the goal of expanding their brand onto Shopify, we knew it was time to put our money where our mouth is.`}
                </p>
                <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-white'>
                  {`We got to work crafting a landing page that was not just visually stunning but also highly converting. And let me tell you, it was a game-changer. We also made sure that our SEO was on point, creating blogs and content that could suck sales from Google Ads like a vacuum.`}
                </p>
              </Fade>
            </div>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/shopifyTakeOver.png'
                className='w-full h-auto'
                alt='Phase 1'
              />
            </Fade>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-full py-10 items-center'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/shopifyTakeOver1.png'
                className='w-full h-auto'
                alt='Phase 1'
              />
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-white'>
                {`But we didn't stop there, we also designed an email funnel that was not only cost-effective but also delivered results that were x2 higher than industry rates.The objective of emails was to get clicks, and land visitors on the website so they can be converted into high-paying and loyal customers. For that, different sequences of emails were scheduled for every week, so shoppers may get to know about the product.`}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifyTakeover;
