import { animation } from '@/helper/helper';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { Fade } from 'react-reveal';

const AmazonPPC = () => {
  return (
    <div id='amazon-ppc-advertising' className='bg-black w-full block py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block md:hidden mb- w-full'>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src='/assets/images/servicesAmazonppc.gif'
              alt='Services'
              className='w-full h-auto'
            />
          </Fade>
        </div>
        <div className='title mb-6'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-sm lineBefore whiteLine lg:w-1/6'>
              02{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
        </div>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h3 className='text-white fontBlack uppercase text-2xl md:text-5xl lg:text-scH1 lineHeightH1'>
            Amazon PPC Advertising
          </h3>
        </Fade>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          <div className='md:col-span-1 w-full '>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm lg:text-[1rem]  leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`Feelin' the Amazon PPC pain? You're not alone. We've seen too many sellers fall victim to bad agencies, leavin' 'em with a drained budget and no results to show for it. But hey, it's not your fault. You just didn't have the right team in your corner... until now.`}</p>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm lg:text-[1rem]  leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`We're the real deal when it comes to Amazon PPC advertising. With years of experience and proven success, we know how to make your advertising dollars fly. And when we say fly, we mean it. You can expect:`}</p>
              <ul className='text-white text-sm lg:text-[1rem]  leading-[20px] lg:leading-[34px] font-[400] mb-5 pl-5 list-disc'>
                <li>Gradual & steady increase in ROI</li>
                <li>Constant reduction in ACOS</li>
                <li>Significant rise in organic orders</li>
                <li>Stable and consistent growth</li>
              </ul>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white text-sm lg:text-[1rem]  leading-[20px] lg:leading-[34px] font-[400] mb-5'>{`We don't just make promises, we deliver. Our techniques are custom-fit to your brand and product, so you get the biggest bang for your buck. If you're ready to stop bleedin' and start seein' real results, hit us up!`}</p>
            </Fade>
            <div className='flex flex-wrap items-center scBrudcrumb md:space-x-2 mb-5 text-scGray hover:text-scGray'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <p className='text-sm  underline'>SEO</p>
                <span>/</span>
                <p className='text-sm  underline'>
                  Sponsored Products Management
                </p>
                <span>/</span>
                <p className='text-sm  underline'>Amazon PPC</p>
              </Fade>
            </div>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <Link
                href='/form'
                className='flex items-center text-white fontBold text-sm lg:text-lg hover:text-white'
              >
                <span className='underline'>Get Started</span>  <BsArrowRight className='ml-2' />
              </Link>
            </Fade>
          </div>
          <div className='hidden md:flex h-full items-center w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/servicesAmazonppc.gif'
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

export default AmazonPPC;
