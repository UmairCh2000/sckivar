'use client';
import EliteCrew from '@/components/whoWeAre/EliteCrew';
import Philosophy from '@/components/whoWeAre/Philosophy';
import TalesOfSuccess from '@/components/whoWeAre/TalesOfSuccess';
import { animation } from '@/helper/helper';
import Link from 'next/link';
import { Fade } from 'react-reveal';
import { GoDotFill } from "react-icons/go";

const WhoWeAre = () => {
  return (
    <div className='scWhoWePage block w-full'>
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
                  <h2 className='relative textStroke mb-3 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack'>
                    Every block crafted
                    <img
                      src='/assets/svgs/singleLIne.svg'
                      alt='Line'
                      className='lineSvg absolute'
                    />
                  </h2>
                  <h3 className='relative text-white mb-20 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack flex items-baseline'>
                    for your castle <span className=' scPurple font-bold font-sans bg-scPurple w-3 aspect-square rounded-full ms-1'></span>
                    <img
                      src='/assets/svgs/circleLine.svg'
                      alt='Line'
                      className='circleLine absolute'
                    />
                  </h3>
                </Fade>
                <div className='grid grid-cols-4 gap-10 border-white border-b md:w-[60%]'>
                  <div className='block w-full text-left'>
                    <Fade
                      delay={animation.delay}
                      duration={animation.duration}
                      left
                    >
                      <p className='flex items-end justify-center text-center w-full text-white h-14 md:h-auto text-xs xl:text-sm dotRelative pb-4 relative'>
                        Philosophy
                      </p>
                    </Fade>
                  </div>
                  <div className='block w-full text-center'>
                    <Fade
                      delay={animation.delay}
                      duration={animation.duration}
                      left
                    >
                      <p className='flex items-end justify-center text-center w-full text-white h-14 md:h-auto text-xs xl:text-sm dotRelative second pb-4 relative'>
                        Our Team
                      </p>
                    </Fade>
                  </div>
                  <div className='block w-full text-center'>
                    <Fade
                      delay={animation.delay}
                      duration={animation.duration}
                      left
                    >
                      <p className='flex items-end justify-center text-center w-full text-white h-14 md:h-auto text-xs xl:text-sm dotRelative second pb-4 relative'>
                        Our values
                      </p>
                    </Fade>
                  </div>
                  <div className='block w-full text-right'>
                    <Fade
                      delay={animation.delay}
                      duration={animation.duration}
                      left
                    >
                      <p className='flex items-end justify-center text-center w-full text-white h-14 md:h-auto text-xs xl:text-sm dotRelative last pb-4 relative'>
                        Success Stories
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Philosophy />
      <EliteCrew />
      <TalesOfSuccess />
    </div>
  );
};

export default WhoWeAre;
