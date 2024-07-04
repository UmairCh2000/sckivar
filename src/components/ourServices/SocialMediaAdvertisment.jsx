import { animation } from '@/helper/helper';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { Fade } from 'react-reveal';

const SocialMediaAdvertisment = () => {
  return (
    <div id='social-media-advertising' className='bg-black w-full block py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block md:hidden w-full'>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src='/assets/images/servicesSocialMediaAdvertisment.gif'
              alt='Services'
              className='w-full h-auto'
            />
          </Fade>
        </div>
        <div className='title mb-6'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-sm lineBefore whiteLine lg:w-1/6'>
              04{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
        </div>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h3 className='text-white fontBlack uppercase text-2xl md:text-5xl  lg:text-5xl lineHeightH1'>
            Social Media Advertisment
          </h3>
        </Fade>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='md:col-span-1 w-full mt-12'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm lg:text-[1rem] leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`Don't get stuck in the same old routine of throwing your hard earned cash at ineffective social media ads. It's time to level up and make the most of this powerful tool.`}</p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm lg:text-[1rem] leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`Gone are the days when social media advertising was just about posting pictures and hoping for the best. It's a map, and we'll guide you every step of the way to ensure your ads drive traffic straight to your Amazon and Shopify stores. No more wasted ad spend on likes and comments, we're in the business of generating serious ROI for every dollar you invest.`}</p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm lg:text-[1rem] leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`Our team of marketing wizards harness the power of Facebook, TikTok, Instagram,  & Pinterest, to drive traffic and build your brand like never before. You don't need to be an expert in social media advertising, because we've got you covered. From creating a winning ad strategy to executing campaigns with surgical precision, we'll make sure your brand stands out in a crowded ecommerce landscape. Are you ready to rule the digital world?`}</p>
            </Fade>
            <div className='flex flex-wrap items-center scBrudcrumb space-x-2 mb-5 text-scGray hover:text-scGray'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <p className='text-sm  underline'>Facebook</p>
                <span>/</span>
                <p className='text-sm  underline'>Instagram</p>
                <span>/</span>
                <p className='text-sm  underline'>Pinterest</p>
                <span>/</span>
                <p className='text-sm  underline'>TikTok</p>
              </Fade>
            </div>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <Link
                href='/form'
                className='flex items-center text-white fontBold text-sm lg:text-lg hover:text-white'
              >
                <span className='underline'>Get Started</span> <BsArrowRight className='ml-2' />
              </Link>
            </Fade>
          </div>
          <div className='hidden w-full md:flex h-full items-center'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/servicesSocialMediaAdvertisment.gif'
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

export default SocialMediaAdvertisment;
