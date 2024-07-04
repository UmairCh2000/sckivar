import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const PPCPowerPlay = () => {
  return (
    <div className='w-full block py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-sm lineBefore md:mb-10 uppercase'>
              Marketing Strategy{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center py-10'>
            <div className='content w-full'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h3 className='text-3xl md:text-4xl lg:text-scH1 lineHeightH1 text-scBlack fontBlack mb-5 md:mb-10 uppercase'>
                  PPC power play
                </h3>
              </Fade>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-scBlack'>
                  {`When it comes to PPC advertising, we're the masterminds. We may
                have faced some challenges with the brand registry, but that
                didn't stop us from crushing our targets. Our team of PPC
                strategists carefully planned and targeted our audience,
                focusing on our unique selling points and differentiators to
                drive sales and get a deep understanding of consumer psychology
                and search terms. Despite initial setbacks, we were able to hit
                our ROAS target and deliver 1.75x more than our breakeven point.
                With a £13,000 spend and £37,207 in sales.`}
                </p>
              </Fade>
            </div>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <img
                src='/assets/images/PPCPowerPlay.png'
                className='w-full h-auto'
                alt='Phase 1'
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCPowerPlay;
