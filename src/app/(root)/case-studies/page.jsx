'use client';
import BriefJourney from '@/components/caseStudies/BriefJourney';
import LuxuryMeets from '@/components/caseStudies/LuxuryMeets';
import { animation } from '@/helper/helper';
import Link from 'next/link';
import { Fade } from 'react-reveal';

const CaseStudies = () => {
  return (
    <div className='scCasePage block w-full'>
      <div
        className='scOurteamBannerDiv block w-full pt-60 pb-20'
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/aboutBanner.gif) no-repeat center/cover',
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
                  <h2 className='relative textStroke text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack'>
                    results are everything,
                    <img
                      src='/assets/svgs/circleLine.svg'
                      alt='Line'
                      className='circleLine absolute'
                    />
                  </h2>
                  <h3 className='relative text-white mb-12 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack'>
                    {`it’s that simple!`}
                    <img
                      src='/assets/svgs/lineSvg.svg'
                      alt='Line'
                      className='lineSvg absolute'
                    />
                  </h3>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LuxuryMeets />
      <BriefJourney />
    </div>
  );
};

export default CaseStudies;
