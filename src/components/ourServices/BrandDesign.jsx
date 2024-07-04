import { animation } from '@/helper/helper';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { Fade } from 'react-reveal';

const BrandDesign = () => {
  return (
    <div id='brand-design' className='bg-scLightWhite w-full block py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block md:hidden w-full mb-5'>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src='/assets/images/servicesBrandDesign.gif'
              alt='Services'
              className='w-full h-auto'
            />
          </Fade>
        </div>
        <div className='title mb-6'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-sm lineBefore lg:w-1/6'>
              03{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
        </div>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h3 className='text-scBlack fontBlack uppercase text-2xl md:text-5xl lg:text-scH1 lineHeightH1'>
            brand design
          </h3>
        </Fade>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          <div className='md:col-span-1 w-full '>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-scBlack text-sm lg:text-[1rem]  leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`Listen up, eCommerce peeps! You know how it goes - you're hustlin' and bustlin' on Amazon & Shopify, but your sales ain't what they should be. You've tried tweaking your PPC  and pouring money into marketing, but the ROI just ain't there. What gives?`}</p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-scBlack text-sm lg:text-[1rem]  leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`Well, that's where we come in, the experts in designing your brand. See, marketing will bring customers to your door, but a solid brand design will make 'em whip out their wallets and hand over their cash. And that, my friends, is what generates the real dough.`}</p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-scBlack text-sm lg:text-[1rem]  leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`We're talking about A+ Content, Store Design that'll blow your mind, and killer listing images so good, they'll convert visitors into buyers. With a team of top-notch photographers, videographers, and designers, we've got the skills to make your brand stand out from the crowd. And with a track record of success, you know we're the real deal. Get ready to start rakin' in the sales!`}</p>
            </Fade>
            <div className='flex flex-wrap items-center scBrudcrumb md:space-x-1 mb-5 text-scGray hover:text-scGray'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <p className='text-sm  underline'>
                  Amazon Product Page Creation
                </p>
                <span>/</span>
                <p className='text-sm  underline'>Amazon EBC</p>
                <span>/</span>
                <p className='text-sm  underline'>Amazon Storefront</p>
              </Fade>
            </div>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <Link
                href='/form'
                className='flex items-center text-scBlack fontBold text-sm lg:text-[18px] leading-[20px] lg:leading-[34px] font-[400]'
              >
                <span className='underline'>Get Started</span><BsArrowRight className='ml-2' />
              </Link>
            </Fade>
          </div>
          <div className='hidden h-full md:flex items-center w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/servicesBrandDesign.gif'
                alt='Services'
                className='w-full h-auto'
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDesign;
