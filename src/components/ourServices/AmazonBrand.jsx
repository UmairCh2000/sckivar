import { animation } from '@/helper/helper';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { Fade } from 'react-reveal';

const AmazonBrand = () => {
  return (
    <div
      id='amazon-brand-management'
      className='bg-scLightWhite w-full block py-20'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block md:hidden mb-5 w-full'>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src='/assets/images/servicesAmazonBrandManagement.gif'
              alt='Services'
              className='w-full h-auto'
            />
          </Fade>
        </div>
        <div className='title mb-6'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-sm lineBefore lg:w-1/6'>
              01{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
        </div>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h3 className='text-scBlack fontBlack uppercase text-2xl md:text-5xl lg:text-scH1 lineHeightH1'>
            amazon brand management
          </h3>
        </Fade>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8  '>
          <div className='md:col-span-1 w-full mt-12'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-scBlack text-sm lg:text-[1rem] leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`Tired of wastin' time and cash on other agencies who didn't deliver? Get ready to make the smart move with us. Our industry’s top experts got you covered, from the daily grind of brand management to executing killer sales-boosting strategies. We handle everything, from research and development to marketing, inventory planning, supplier relations, and even legal issues with Amazon.`}</p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-scBlack text-sm lg:text-[1rem] leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`But we don't just get the job done, we bring our A-game and give you
            straight-up advice every step of the way. At Sckivar, we work with
            you, not just for you. So, if you're ready for a team that'll help
            you build the brand of your dreams, hit us up.`}</p>
            </Fade>
            <div className='flex flex-wrap items-center scBrudcrumb md:space-x-1 mb-5 text-scGray hover:text-scGray'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <p className='text-sm  underline'>Listings Optimization</p>
                <span>/</span>
                <p className='text-sm  underline'>Brand Registry</p>
                <span>/</span>
                <p className='text-sm  underline'>Seller Central Management</p>
              </Fade>
            </div>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <Link
                href='/form'
                className='flex items-center text-scBlack fontBold text-sm lg:text-lg'
              >
                <span className='underline'>Get Started</span> <BsArrowRight className='ml-2' />
              </Link>
            </Fade>
          </div>
          <div className='hidden md:flex items-center h-full w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/servicesAmazonBrandManagement.gif'
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

export default AmazonBrand;
