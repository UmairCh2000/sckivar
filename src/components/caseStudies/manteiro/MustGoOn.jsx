import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const MustGoOn = () => {
  return (
    <div className='w-full block py-20 bg-scBlack'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-white text-sm whiteLine lineBefore mb-5 md:mb-10 uppercase'>
              The Show Must Go On
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-10'>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <h3 className='text-3xl md:text-4xl lg:text-scH1 lineHeightH1 text-white fontBlack md:mb-10 uppercase'>
                Killing it in the creative game
              </h3>
            </Fade>
            <Fade delay={animation.delay} duration={animation.duration} bottom>
              <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-white'>
                {`We're not just a one-trick pony, we can do it all. When brand came
              to us with a need for some killer product shots and videography to
              run on Amazon, we hit it out of the park. Our in-house creative
              beasts got to work, crafting visually stunning ads that truly
              showcased the beauty and quality of the Manteiro cases. We didn't
              just stop there, we continued to push the limits and deliver
              results that exceeded expectations and left our client beyond
              impressed. Trust us, when it comes to visual content, we're the
              real deal.`}
              </p>
            </Fade>
            <div className='md:col-span-2 w-full flex justify-center py-5'>
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <img
                  src='/assets/images/caseStudyManteiroGif2.gif'
                  alt=''
                  className='h-96 w-auto block'
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustGoOn;
