'use client';
import { animation, ourTeam } from '@/helper/helper';
import Link from 'next/link';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { FaAnglesRight } from 'react-icons/fa6';
import { Fade } from 'react-reveal';
import Slider from 'react-slick';

const EliteCrew = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <button className='prevtBtn'>
        <svg viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='18'
            cy='18'
            r='17.5'
            stroke='white'
            stroke-opacity='0.6'
          />
          <path
            d='M23 10L14 18.5L23 27'
            stroke='white'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className='nextBtn'>
        <svg viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='18'
            cy='18'
            r='17.5'
            transform='matrix(-1 0 0 1 36 0)'
            stroke='white'
            stroke-opacity='0.6'
          />
          <path
            d='M14 10L23 18.5L14 27'
            stroke='white'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </button>
    ),
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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='w-full block py-20 bg-scBlack'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-sm whiteLine lineBefore mb-10 lg:w-2/3 uppercase'>
              Elite Crew{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-3xl md:text-4xl lg:text-scH1 up lineHeightH1 text-transform: uppercase text-white fontBlack mb-5 md:mb-10 w-5/5'>
              Making the Impossible Possible, Meet Our Team of Champions
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-sm md:text-[20px] lg:leading-[34px] leading-[25px] tracking-wide text-white'>
              The one thing we , at Sckivar, prides itself in is our team
              members. Each member of our team has been with us from the point
              of inception, making them embody the philosophy of Sckivar and
              emit our morals to every new member entering this vicinity.<br /> Our
              team consists of Amazon FBA experts, exceptional marketers and
              world class designers, business analysts, Online store owners, and
              a team of dedicated individuals who work tirelessly to achieve
              success and progress for our clients throughout.
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <Link
              href='/our-team'
              className='text-white text-sm md:text-lg underline decoration-white underline-offset-[6px] lg:leading-[34px] leading-[25px] tracking-wide fontBold mt-5 flex items-center hover:text-white'
            >
              Meet the Team <FaAnglesRight className='pl-1 w-5 h-5' />
            </Link>
          </Fade>
        </div>
        <div className='block w-full scSLiderDiv md:px-8 py-20'>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <Slider {...settings}>
              {ourTeam?.map((team) => (
                <div
                  key={`OurTeamKey${team?.id}`}
                  className='scTeamCard block relative px-2 md:px-4'
                >
                  <div className='block relative w-full h-full'>
                    <img
                      src={team?.imageUrl}
                      alt=''
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute top-0 left-0 w-full h-full  overlatText flex flex-col justify-end'>
                      <h6 className='text-white text-base md:text-xl fontBold uppercase md:mb-1'>
                        {team?.name}
                      </h6>
                      <p className='text-white text-xs md:text-sm'>
                        {team?.desgination}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default EliteCrew;
