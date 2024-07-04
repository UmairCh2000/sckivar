import { animation } from '@/helper/helper';
import Link from 'next/link';
import { useState } from 'react';
import { Fade } from 'react-reveal';

const CanHelpCard = ({ title, description, imageUrl, linkHash }) => {
  const [isIcon, setIsIcon] = useState(false);
  return (
    <div
      className='listBox  border-t  border-coolGray-400'
      onMouseEnter={() => setIsIcon(true)}
      onMouseLeave={() => setIsIcon(false)}
    >
      <div className='max-w-7xl mx-auto'>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <a
            href={`/our-services#${linkHash}`}
            className=' grid items-center grid-cols-7'
          >
            <img
              src={imageUrl}
              alt='List Image'
              className='col-span-2 md:col-span-1 w-full h-auto'
            />
            <div className='col-span-4 md:col-span-5 block'>
              <h4 className='text-white fontBlack text-xl md:text-3xl lg:text-5xl lineHeightH1 uppercase mb-1'>
                {title}
              </h4>
              <p className='text-white text-lg md:text-lg lg:leading-[29px]'>{description}</p>
            </div>
            {/* <Link
              href={`/our-services#${linkHash}`}
              className='flex justify-end w-full'
            > */}
              {isIcon && (
                <svg
                  className='w-3/5 h-auto'
                  viewBox='0 0 95 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.44122 2.44915L2.44158 2.44879C5.02981 -0.149595 9.28019 -0.149595 11.8684 2.44879L44.5584 35.267L44.5588 35.2674C45.174 35.8838 45.6622 36.616 45.9954 37.4223C46.3285 38.2285 46.5 39.0929 46.5 39.9659C46.5 40.8389 46.3285 41.7032 45.9954 42.5095C45.6622 43.3158 45.174 44.048 44.5588 44.6644L44.5584 44.6647L11.797 77.5547C11.1826 78.1715 10.4532 78.6608 9.65062 78.9945C8.84803 79.3282 7.9879 79.5 7.11931 79.5C6.25072 79.5 5.39059 79.3282 4.58801 78.9945C3.78542 78.6608 3.05604 78.1715 2.44158 77.5547C1.82711 76.9378 1.33958 76.2053 1.00692 75.3991C0.674262 74.5928 0.503022 73.7286 0.503022 72.8558C0.503022 71.983 0.674262 71.1188 1.00692 70.3125C1.33958 69.5063 1.82711 68.7738 2.44158 68.1569L30.1353 40.3546L30.4868 40.0017L30.1353 39.6489L2.44158 11.8465L2.44122 11.8461C1.82598 11.2298 1.33778 10.4975 1.00464 9.69125C0.671501 8.885 0.5 8.02063 0.5 7.14764C0.5 6.27466 0.671501 5.41029 1.00464 4.60403C1.33778 3.79778 1.82598 3.06553 2.44122 2.44915Z'
                    stroke='#C317FF'
                  />
                  <path
                    d='M49.4819 2.46168L49.4822 2.46132C52.1338 -0.144865 56.4871 -0.138583 59.0593 2.38967L92.5178 35.2759L92.5181 35.2762C93.147 35.893 93.6454 36.6252 93.9853 37.4306C94.3252 38.236 94.5 39.099 94.5 39.9704C94.5 40.8418 94.3252 41.7049 93.9853 42.5102C93.6454 43.3156 93.147 44.0478 92.5181 44.6646L92.5178 44.665L59.0593 77.5512C57.7908 78.798 56.0685 79.5 54.2708 79.5C52.4731 79.5 50.7508 78.798 49.4822 77.5512C48.214 76.3046 47.5031 74.6157 47.5031 72.8566C47.5031 71.0975 48.214 69.4086 49.4822 68.162L77.7652 40.3628L78.128 40.0062L77.7652 39.6497L49.4822 11.8504L49.4819 11.8501C48.8531 11.2333 48.3546 10.5011 48.0147 9.69571C47.6748 8.89033 47.5 8.02728 47.5 7.15588C47.5 6.28448 47.6748 5.42143 48.0147 4.61605C48.3546 3.81065 48.8531 3.07848 49.4819 2.46168Z'
                    stroke='#C317FF'
                  />
                </svg>
              )}
            {/* </Link> */}
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default CanHelpCard;
