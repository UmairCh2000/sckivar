import { animation } from '@/helper/helper';
import { Fade } from 'react-reveal';

const Obstacles = () => {
  return (
    <div className='w-full block py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='block w-full'>
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className='text-scBlack text-sm lineBefore mb-5 md:mb-10 uppercase'>
              Rising from the Ashes{' '}
              <span className='dotsLine'>
                <span className='dot bg-scPurple rounded-full' />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className='text-3xl md:text-4xl lg:text-scH1 text-scBlack fontBlack mb-5 md:mb-10 uppercase'>
              Overcoming obstacles
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className='text-sm md:text-lg md:leading-[34px] tracking-wide text-scBlack mb-5'>
              {`When Manteiro first approached us, they had hit a roadblock with their brand registry and mark name issues. This not only prevented them from utilizing certain brand Registry features son amazon, but it also resulted in a significant loss of ad spend. But the people here don't back down from a challenge. Bringing the brains and the brawn, we were able to navigate the complex legal landscape and find a solution for this brand. This not only allowed them to fully utilize all brand features available, but also helped them recoup their lost ad spend and ultimately drive even more sales for their brand. With our team in your corner, you can kiss those roadblocks goodbye!`}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Obstacles;
