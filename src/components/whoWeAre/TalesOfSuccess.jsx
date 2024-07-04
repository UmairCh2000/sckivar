'use client';
import { animation, ourTeam } from '@/helper/helper';
import Link from 'next/link';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { Fade } from 'react-reveal';
import Slider from 'react-slick';

const TalesOfSuccess = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '30px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full block py-20 bg-scBlack'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-sm whiteLine lineBefore mb-8'>
              TALES OF SUCCESS{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-3xl md:text-4xl lg:text-[3.5rem] uppercase lineHeightH1 text-white fontBlack mb-5 md:mb-8 w-5/5'>
              Every tale of hardship is <br /> complemented by an end of success
            </h3>
          </Fade>
          <Fade  delay={animation.delay} duration={animation.duration} bottom>
            <span className='space-y-3'>
            <p className='tracking-wider text-sm md:text-md lg:leading-[28px] leading-[25px] text-white'>
              For years, we have worked on perfecting our philosophy and
              business model to the last alphabet. Our success stories consist
              of our clients from Amazon and e-commerce stores who have now
              established their brand in the competitive market.
            </p>
            <p className='tracking-wider text-sm md:text-md lg:leading-[28px] leading-[25px] text-white'>
            We make use of
              multiple methods and tailored strategies for each and every client
              to ensure that their brand becomes recognized and attains trust
              and loyalty from customers. Our findings and documents of success
              are shared further for you to understand how we deliver what we
              promise.
            </p>
            </span>
          </Fade>
        </div>
      </div>
      <div className='scSuccess block w-full scSLiderDiv py-20'>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <Slider {...settings}>
            <div className='scWorkCard block relative px-8 h-auto'>
              <div className='block relative w-full h-full'>
                <img
                  src='/assets/images/pastWorkImg1.jpeg'
                  alt=''
                  className='w-full h-full object-cover'
                />
                <div className='hidden absolute bottom-0 left-0 w-full h-auto py-3 bg-black bg-opacity-40  overlatText flex-col justify-center items-center'>
                  <h6 className='text-white text-2xl fontBlack uppercase'>
                    Manteiro
                  </h6>
                </div>
              </div>
            </div>
            <div className='scWorkCard block relative px-8 h-auto'>
              <div className='block relative w-full h-full'>
                <img
                  src='/assets/images/pastWorkImg2.jpeg'
                  alt=''
                  className='w-full h-full object-cover'
                />
                <div className='hidden absolute bottom-0 left-0 w-full h-auto py-3 bg-black bg-opacity-40  overlatText flex-col justify-center items-center'>
                  <h6 className='text-white text-2xl fontBlack uppercase'>
                  The Watch Care Co
                  </h6>
                </div>
              </div>
            </div>
            <div className='scWorkCard block relative px-8 h-auto'>
              <div className='block relative w-full h-full'>
                <img
                  src='/assets/images/pastWorkImg3.jpeg'
                  alt=''
                  className='w-full h-full object-cover'
                />
                <div className='hidden absolute bottom-0 left-0 w-full h-auto py-3 bg-black bg-opacity-40  overlatText flex-col justify-center items-center'>
                  <h6 className='text-white text-2xl fontBlack uppercase'>
                  Z-Netics
                  </h6>
                </div>
              </div>
            </div>
            <div className='scWorkCard block relative px-8 h-auto'>
              <div className='block relative w-full h-full'>
                <img
                  src='/assets/images/pastWorkImg1.jpeg'
                  alt=''
                  className='w-full h-full object-cover'
                />
                <div className='hidden absolute bottom-0 left-0 w-full h-auto py-3 bg-black bg-opacity-40  overlatText flex-col justify-center items-center'>
                  <h6 className='text-white text-2xl fontBlack uppercase'>
                    Manteiro
                  </h6>
                </div>
              </div>
            </div>
            <div className='scWorkCard block relative px-8 h-auto'>
              <div className='block relative w-full h-full'>
                <img
                  src='/assets/images/pastWorkImg2.jpeg'
                  alt=''
                  className='w-full h-full object-cover'
                />
                <div className='hidden absolute bottom-0 left-0 w-full h-auto py-3 bg-black bg-opacity-40  overlatText flex-col justify-center items-center'>
                  <h6 className='text-white text-2xl fontBlack uppercase'>
                  The Watch Care Co
                  </h6>
                </div>
              </div>
            </div>
            <div className='scWorkCard block relative px-8 h-auto'>
              <div className='block relative w-full h-full'>
                <img
                  src='/assets/images/pastWorkImg3.jpeg'
                  alt=''
                  className='w-full h-full object-cover'
                />
                <div className='hidden absolute bottom-0 left-0 w-full h-auto py-3 bg-black bg-opacity-40  overlatText flex-col justify-center items-center'>
                  <h6 className='text-white text-2xl fontBlack uppercase'>
                    Z-Netics
                  </h6>
                </div>
              </div>
            </div>
          </Slider>
        </Fade>
      </div>
    </div>
  );
};

export default TalesOfSuccess;
