import { animation } from '@/helper/helper';
import Link from 'next/link';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { FaAnglesRight } from 'react-icons/fa6';
import { Fade } from 'react-reveal';

const BriefJourney = () => {
  return (
    <div className='w-full block scCaseStudies bg-scBlack'>
      <div className='max-w-7xl mx-auto px-4 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-20'>
          <div className='block scText w-full order-1 md:order-none'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/caseStudiesLogo2.png'
                alt='Case Study'
                className='w-36 h-auto block mb-10'
              />
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h3 className='text-white text-3xl md:text-4xl lg:text-6xl lineHeightH1 uppercase mb-5 fontBlack'>
                A brief Journey, from on-land to online
              </h3>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-white fontLight text-sm md:text-sm lg:text-md tracking-widest !leading-[1.8rem]'>
                {`The Watch Care Company (TWWC), a watch accessory brand based in Sydney, Australia, partnered with Sckivar to launch a global e-commerce brand on both Shopify and Amazon. By utilizing account management, marketing strategies and funnel optimization, Sckivar was able to generate over $100,000 in revenue within the first 3 months of launch, despite initial challenges.`}
              </p>
            </Fade>
          </div>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} right>
              <img
                src='/assets/images/caseStudyImg2.png'
                alt='Case Study'
                className='w-full h-auto'
              />
            </Fade>
          </div>
          <div className='md:col-span-2 md:flex justify-end mr-3 hidden'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <Link
                href='/case-studies/twcc'
                className='text-white border-b-2 border-white hover:text-white flex items-center text-sm lg:text-lg fontBold'
              >
                View case study <FaAnglesRight className='ml-1' />
              </Link>
            </Fade>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16'>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h6 className='text-white text-sm lineBefore whiteLine headerLine mb-5 uppercase'>
                Results{' '}
                <span className='dotsLine'>
                  <span className='dot bg-scPurple rounded-full' />
                </span>
              </h6>
              <h6 className='text-white fontBlack text-sm sm:text-lg uppercase'>
                Over $100k in<br />revenue
              </h6>
            </Fade>
          </div>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h6 className='text-white text-sm lineBefore whiteLine headerLine mb-5 uppercase'>
                Platform{' '}
                <span className='dotsLine'>
                  <span className='dot bg-scPurple rounded-full' />
                </span>
              </h6>
              <h6 className='text-white fontBlack text-sm sm:text-lg uppercase'>
                Amazon &<br />shopify
              </h6>
            </Fade>
          </div>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h6 className='text-white text-sm lineBefore whiteLine headerLine mb-5 uppercase'>
                Niche{' '}
                <span className='dotsLine'>
                  <span className='dot bg-scPurple rounded-full' />
                </span>
              </h6>
              <h6 className='text-white fontBlack text-sm sm:text-lg uppercase'>
                Men&rsquo;s Fashion/<br />Accessories
              </h6>
            </Fade>
          </div>
          <div className='block w-full'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h6 className='text-white text-sm lineBefore whiteLine headerLine mb-5 uppercase'>
                Services{' '}
                <span className='dotsLine'>
                  <span className='dot bg-scPurple rounded-full' />
                </span>
              </h6>
              <h6 className='text-white fontBlack text-sm sm:text-lg uppercase'>
                Brand Management,<br />Brand Design, PPC,<br />Social Media
              </h6>
            </Fade>
          </div>
          <div className='col-span-2 flex justify-start mr-3 md:hidden'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <Link
                href='/case-studies/twcc'
                className='text-white hover:text-white flex items-center text-sm lg:text-lg fontBold'
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

export default BriefJourney;
