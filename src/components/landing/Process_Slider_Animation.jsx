'use client'
import React, { useEffect, useState } from 'react'
import { GrNext } from 'react-icons/gr'

const slide_data = [
    {
        before: {
            image_ref: '/group-01-before.png',
            text: 'Amid a competitive scenario with a direct competitor in the high-ticket product segment, we identified room for improvement. Our sales were decent, but the ACOS suggested that there was potential to achieve more efficiency in our campaign.'
        },
        after: {
            image_ref: '/group-01-after.png',
            text: 'A whopping increase in sales to $5,790, despite the high-ticket nature of the product. ACoS was slashed nearly in half to 6.66%, reflecting a more efficient and profitable campaign. While the impressions slightly dropped, the sales figures showed that we were reaching the right audience, ensuring quality over quantity.'
        },
    },
    {
        before: {
            image_ref: '/group-02-before.png',
            text: 'Despite a significant ad spend, the campaign performance was not optimal, with an ACOS nearing 60%. The impressions were substantial, but the return on ad spend ROAS was not at its potential peak.'
        },
        after: {
            image_ref: '/group-02-after.png',
            text: 'In just half the time of the previous month, we restructured and optimized the PPC campaign. The results were immediate and impressive:'
        },
    },
    {
        before: {
            image_ref: '/group-03-before.png',
            text: 'Despite a solid sales figure, the profitability was not reaching its potential. The spending was high, leading to an increased ACoS, indicating inefficiencies in the campaign.'
        },
        after: {
            image_ref: '/group-03-after.png',
            text: 'A reduction in spend by nearly £4,039, without drastically affecting the sales, increased in organic ranking. ACoS dropped by over 3% From negative £500 to a positive £2,000.'
        },
    },
    {
        before: {
            image_ref: '/group-04-before.png',
            text: 'This amazon aggregator was already performing well, garnering impressive sales figures. However, there was potential for improvement.'
        },
        after: {
            image_ref: '/group-04-after.png',
            text: 'By focusing on the backend system, enhancing the AOV for the top SKUs, and employing strategic advertising tactics, we achieved a remarkable reduction in ACoS by over 50%. This optimization not only improved the overall ROAS but also significantly decreased the TACOS. The numbers speak for themselves!'
        },
    },
]

export const Process_Slider_Animation = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slide_data.length);
        }, 10000); // Change slide every 10 seconds

        return () => clearInterval(interval);
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slide_data.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slide_data.length) % slide_data.length);
    };







    return (
        <div className="w-full justify-between hidden lg:flex gap-5 px-4 xl:px-8 2xl:px-13 relative items-center lg:mt-4">
        <div onClick={goToPrevSlide} className="w-10 h-10 rounded-full border-[0.7px] aspect-square border-white flex items-center justify-center rotate-180 ">
          <GrNext />
        </div>
  
        <div className="w-[100%] max-w-[1500px] flex flex-col gap-5 mb-28 transition-opacity duration-500 ease-in-out">
          <div className="w-full flex gap-5 mb-2">
            <h4 className="text-4xl !md:leading-[60px] fontBlack flex-1">BEFORE:</h4>
            <h4 className="text-4xl !md:leading-[60px] fontBlack flex-1">AFTER:</h4>
          </div>
          <div className="w-full flex gap-5">
            <p className="font-[100] flex-1 text-white text-lg fontLight md:text-base tracking-wide !leading-[13px] lg:tracking-wider lg:!leading-[26px]">
              {slide_data[currentSlide].before.text}
            </p>
            <p className="font-[100] flex-1 text-white text-lg fontLight md:text-base tracking-wide !leading-[13px] lg:tracking-wider lg:!leading-[26px]">
              {slide_data[currentSlide].after.text}
            </p>
          </div>
          <div className="w-full flex gap-5">
            <div className="w-[49%]">
              <img
                className="w-full"
                src={`/assets/images/recent_result_images${slide_data[currentSlide].before.image_ref}`}
                alt=""
              />
            </div>
            <div className="w-[49%]">
              <img
                className="w-full"
                src={`/assets/images/recent_result_images${slide_data[currentSlide].before.image_ref}`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div onClick={goToNextSlide} className="w-10 h-10 rounded-full border-[0.7px] border-white aspect-square flex items-center justify-center ">
          <GrNext />
        </div>
      </div>
    )
}
