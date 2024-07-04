import { animation } from '@/helper/helper';
import Link from 'next/link';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { FaAnglesRight } from 'react-icons/fa6';
import { Fade } from 'react-reveal';

const LuxuryMeets = () => {
  return (
    <div className='w-full block scCaseStudies'>
      <div className='max-w-7xl mx-auto px-4 py-20 relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-20'>
          <div className='block scText w-full order-1 md:order-none '>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/caseStudiesLogo1.png'
                alt='Case Study'
                className='w-32 h-auto block mb-8'
              />
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h3 className='text-scBlack text-3xl md:text-4xl lg:text-6xl lineHeightH1 uppercase fontBlack'>
                Luxury Meets Function:
              </h3>
              <h3 className='text-scBlack text-3xl md:text-4xl lg:text-6xl lineHeightH1 uppercase w-full fontBlack absolute z-50'>
              The Rise of Manteiro
              </h3>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-scBlack fontRegular text-sm md:text-sm lg:text-md tracking-widest !leading-[1.5rem] mt-24'>
                {`At Manteiro, luxury meets function, Manteiro, the luxury phone accessories brand based in UK, partnered with Sckivar to take their brand to new heights. With our industry’s top pros, we generated over $110,000 in sales and acquire hundreds of new customers daily. Don't just take our word for it, see the results for yourself.`}
              </p>
            </Fade>
          </div>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} right>
              <img
                src='/assets/images/caseStudyImg1.png'
                alt='Case Study'
                className='w-full h-auto'
              />
            </Fade>
          </div>
          <div className='md:col-span-2 hidden md:flex justify-end mr-3'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <Link
                href='/case-studies/manteiro'
                className='text-scBlack hover:text-scBlack flex items-center text-sm lg:text-lg fontBold'
              >
               <span className='border-b-2 border-black flex items-center'>
               View case study <FaAnglesRight className='ml-1' /></span>
              </Link>
            </Fade>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16'>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h6 className='text-scBlack text-sm lineBefore headerLine mb-5 uppercase'>
                Results{' '}
                <span className='dotsLine'>
                  <span className='dot bg-scPurple rounded-full' />
                </span>
              </h6>
              <h6 className='text-scBlack fontBlack text-sm sm:text-lg uppercase'>
                Over $110,000 in<br />Sales
              </h6>
            </Fade>
          </div>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h6 className='text-scBlack text-sm lineBefore headerLine mb-5 uppercase'>
                Platform{' '}
                <span className='dotsLine'>
                  <span className='dot bg-scPurple rounded-full' />
                </span>
              </h6>
              <h6 className='text-scBlack fontBlack text-sm sm:text-lg uppercase'>
                Amazon &<br />shopify
              </h6>
            </Fade>
          </div>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h6 className='text-scBlack text-sm lineBefore headerLine mb-5 uppercase'>
                Niche{' '}
                <span className='dotsLine'>
                  <span className='dot bg-scPurple rounded-full' />
                </span>
              </h6>
              <h6 className='text-scBlack fontBlack text-sm sm:text-lg uppercase'>
                Fashion<br />Accessories/<br />Phone Protection
              </h6>
            </Fade>
          </div>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h6 className='text-scBlack text-sm lineBefore headerLine mb-5 uppercase'>
                Services{' '}
                <span className='dotsLine'>
                  <span className='dot bg-scPurple rounded-full' />
                </span>
              </h6>
              <h6 className='text-scBlack fontBlack text-sm sm:text-lg uppercase'>
                Brand Management,<br /> Brand Design, PPC,<br /> Social Media
              </h6>
            </Fade>
          </div>
          <div className='md:col-span-2 flex md:hidden justify-start mr-3'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <Link
                href='/case-studies/manteiro'
                className='text-scBlack hover:text-scBlack flex items-center text-sm lg:text-lg fontBold'
              >
                View case study <FaAnglesRight className='ml-1' />
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryMeets;
