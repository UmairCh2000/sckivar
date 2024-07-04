'use client';
import AmazonBrand from '@/components/ourServices/AmazonBrand';
import AmazonPPC from '@/components/ourServices/AmazonPPC';
import BrandDesign from '@/components/ourServices/BrandDesign';
import SocialMediaAdvertisment from '@/components/ourServices/SocialMediaAdvertisment';
import { animation } from '@/helper/helper';
import Link from 'next/link';
import { useEffect } from 'react';
import { Fade } from 'react-reveal';

const OurServices = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hashId = window.location.hash;

      if (hashId) {
        const element = document.querySelector(hashId);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }
    }
  }, []);

  return (
    <div className='scAboutPage block w-full'>
      <div
        className='aboutBannerDiv block w-full py-32'
        style={{
          background:
            'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/aboutBanner.gif) no-repeat center/cover',
        }}
      >
        <div className='max-w-7xl mx-auto px-4'>
          <div className='block w-full'>
            <div className='grid grid-cols-1 items-center md:grid-cols-3 gap-8 mb-5'>
              <div className='md:col-span-2'>
                <Fade
                  delay={animation.delay}
                  duration={animation.duration}
                  left
                >
                  <h2 className='relarive textStroke text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack'>
                    explore the art of
                    <img
                      src='/assets/svgs/lineSvg.svg'
                      alt='Line'
                      className='lineSvg absolute'
                    />
                  </h2>
                  <h3 className='relarive text-white mb-12 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack'>
                    brand building!
                    <img
                      src='/assets/svgs/lineAndCircle.svg'
                      alt='Line'
                      className='lineAndCircle absolute'
                    />
                  </h3>
                </Fade>
              </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10 items-end'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <div className='block w-full headCard border-b border-white border-opacity-50 p-5 pb-5 pl-10'>
                  <p className='text-white text-sm'>Amazon Brand Management</p>
                </div>
              </Fade>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <div className='block w-full headCard second border-b border-white border-opacity-50 p-5 pb-5 pl-10'>
                  <p className='text-white text-sm'>Amazon PPC Advertising</p>
                </div>
              </Fade>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <div className='block w-full headCard third border-b border-white border-opacity-50 p-5 pb-5 pl-10'>
                  <p className='text-white text-sm'>Brand Design</p>
                </div>
              </Fade>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <div className='block w-full headCard fourth border-b border-white border-opacity-50 p-5 pb-5 pl-10'>
                  <p className='text-white text-sm'>Social Media Advertising</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <AmazonBrand />
      <AmazonPPC />
      <BrandDesign />
      <SocialMediaAdvertisment />
    </div>
  );
};

export default OurServices;
