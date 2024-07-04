'use client';
import Consception from '@/components/caseStudies/manteiro/Consception';
import Dominance from '@/components/caseStudies/manteiro/Dominance';
import MustGoOn from '@/components/caseStudies/manteiro/MustGoOn';
import Obstacles from '@/components/caseStudies/manteiro/Obstacles';
import PPCPowerPlay from '@/components/caseStudies/manteiro/PPCPowerPlay';
import ShopifyTakeover from '@/components/caseStudies/manteiro/ShopifyTakeover';
import { animation } from '@/helper/helper';
import Link from 'next/link';
import { Fade } from 'react-reveal';

const CaseStudies = () => {
  return (
    <div className='scManteiroPage block w-full'>
      <div
        className='scOurteamBannerDiv block w-full pt-60 pb-20'
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(/assets/images/caseStudyManteiroBanner.png) no-repeat center/cover',
        }}
      >
        <div className='max-w-7xl mx-auto px-4'>
          <div className='block w-full'>
            <div className='grid grid-cols-1 items-start md:grid-cols-4 gap-8'>
              <div className='md:col-span-3'>
                <Fade
                  delay={animation.delay}
                  duration={animation.duration}
                  left
                >
                  <h2 className='textStroke mb-3 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack'>
                    Luxury Meets Function:
                    <img
                      src='/assets/svgs/circleLine.svg'
                      alt='SVg'
                      className='circleSvg absolute'
                    />
                  </h2>
                  <h3 className='text-white md:mb-12 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack'>
                    The Rise of Manteiro <span className='inline-block bg-scPurple aspect-square w-3 rounded-full -ms-3'>
                      
                    </span>
                    <img
                      src='/assets/svgs/lineAndCircle.svg'
                      alt='SVg'
                      className='lineAndCircleSvg absolute'
                    />
                  </h3>
                </Fade>
              </div>
              <Fade delay={animation.delay} duration={animation.duration} right>
                <Link href='/form' className='block w-full'>
                  <img
                    src='/assets/images/arrowgif.gif'
                    alt='Gif'
                    className='w-40 md:w-full h-auto block md:mt-10 ml-auto md:ml-0'
                  />
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div
        className='scTalent block w-full py-20'
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/assets/images/noiseGif.gif)',
        }}
      >
        <div className='max-w-6xl mx-auto px-4'>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-white fontBlack text-center text-base sm:text-2xl lg:text-[32px] lg:leading-[47px]'>
              {`At Manteiro, luxury meets function, Manteiro, the luxury phone
            accessories brand based in UK, partnered with Sckivar to take their
            brand to new heights. With our industry’s top pros, we generated
            over $110,000 in sales and acquire hundreds of new customers daily.
            Don't just take our word for it, see the results for yourself.`}
            </h3>
          </Fade>
        </div>
      </div>
      <div className='w-full block scCaseStudies bg-scBlack'>
        <div className='max-w-7xl mx-auto px-4 py-20'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-16'>
            <div className='block w-full'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h6 className='text-white text-sm lineBefore whiteLine headerLine mb-5 uppercase'>
                  Results{' '}
                  <span className='dotsLine'>
                    <span className='dot bg-scPurple rounded-full' />
                  </span>
                </h6>
                <h6 className='text-white fontBlack text-base md:text-lg uppercase'>
                  Over $100k in<br />sales
                </h6>
              </Fade>
            </div>
            <div className='block w-full'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h6 className='text-white text-sm lineBefore whiteLine headerLine mb-5 uppercase'>
                  Platform{' '}
                  <span className='dotsLine'>
                    <span className='dot bg-scPurple rounded-full' />
                  </span>
                </h6>
                <h6 className='text-white fontBlack text-base md:text-lg uppercase'>
                  Amazon &<br />shopify
                </h6>
              </Fade>
            </div>
            <div className='block w-full'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h6 className='text-white text-sm lineBefore whiteLine headerLine mb-5 uppercase'>
                  Niche{' '}
                  <span className='dotsLine'>
                    <span className='dot bg-scPurple rounded-full' />
                  </span>
                </h6>
                <h6 className='text-white fontBlack text-base md:text-lg uppercase'>
                  Fashion<br />Accessories/<br />Phone Protection
                </h6>
              </Fade>
            </div>
            <div className='block w-full'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h6 className='text-white text-sm lineBefore whiteLine headerLine mb-5 uppercase'>
                  Services{' '}
                  <span className='dotsLine'>
                    <span className='dot bg-scPurple rounded-full' />
                  </span>
                </h6>
                <h6 className='text-white fontBlack text-base md:text-lg uppercase'>
                  Brand Management,<br />Brand Design, PPC,<br />Social Media
                </h6>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Consception />
      <Dominance />
      <Obstacles />
      <MustGoOn />
      <PPCPowerPlay />
      <ShopifyTakeover />
      <div
        className='scTalent block w-full py-20'
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/assets/images/noiseGif.gif)',
        }}
      >
        <div className='max-w-6xl mx-auto px-4'>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-white uppercase fontBlack text-center text-xl md:text-3xl mb-5'>
              {`Unlock your brand's full potential with US!`}
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-white text-sm md:text-lg md:leading-[34px] tracking-wide mb-10 text-center'>
              {`We don't play around with just any numbers, we're in it for the
            right clients. The ones with the potential to reach the top. We know
            you have what it takes, and we're here to guide you every step of
            the way to make sure you reach it. Because that's when we truly win.
            Don't settle for mediocrity, choose growth with Sckivar`}
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
          <a href='/form'>
            <button
              type='button'
              className='relative mx-auto flex items-center rounded-full border border-transparent bg-scPurple px-8 py-2 fontBold text-xs sm:text-sm md:text-lg text-white focus:outline-none'
            >
              ACT NOW - Schedule your free Discovery Call.
            </button>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
