import { useState } from 'react';

const HeaderSocialLink = ({ title, link }) => {
  const [isIcon, setIsIcon] = useState(false);
  return (
    <a
      href={link}
      onMouseEnter={() => setIsIcon(true)}
      onMouseLeave={() => setIsIcon(false)}
      rel='noreferrer'
      target='_blank'
      className='w-full flex items-center justify-between text-white fontBlack mb-2 uppercase text-xl xl:text-3xl hover:text-white'
    >
      {title}{' '}
      {isIcon && (
        <svg
          className='w-7 h-7'
          viewBox='0 0 48 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.48187 2.46168L2.48224 2.46132C5.13378 -0.144865 9.48709 -0.138583 12.0593 2.38967L45.5178 35.2759L45.5181 35.2762C46.147 35.893 46.6454 36.6252 46.9853 37.4306C47.3252 38.236 47.5 39.099 47.5 39.9704C47.5 40.8418 47.3252 41.7049 46.9853 42.5102C46.6454 43.3156 46.147 44.0478 45.5181 44.6646L45.5178 44.665L12.0593 77.5512C10.7908 78.798 9.06845 79.5 7.27079 79.5C5.47312 79.5 3.75079 78.798 2.48224 77.5512C1.21398 76.3046 0.503087 74.6157 0.503087 72.8566C0.503087 71.0975 1.21398 69.4086 2.48224 68.162L30.7652 40.3628L31.128 40.0062L30.7652 39.6497L2.48224 11.8504L2.48187 11.8501C1.85305 11.2333 1.35464 10.5011 1.01474 9.69571C0.67484 8.89033 0.5 8.02728 0.5 7.15588C0.5 6.28448 0.67484 5.42143 1.01474 4.61605C1.35464 3.81065 1.85305 3.07848 2.48187 2.46168Z'
            stroke='#C317FF'
          />
        </svg>
      )}
    </a>
  );
};

export default HeaderSocialLink;
