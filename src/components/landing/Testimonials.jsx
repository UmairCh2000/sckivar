"use client";

import React, { useState } from "react";
import TestimonialSlider from "./TestimonialSlider.jsx";
import { Schedule_Discover_Call_Button } from "../common/Schedule_Discover_Call_Button.jsx";

const Testimonials = ({hide_testimonial}) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const accordionData = [
    {
      question: "How long does it take to complete a design?",
      answer:
        "We know you're eager to unveil your amazing designs faster than you can say 'add to cart'! While we aim for a speedy delivery within 2-3 days, there are times when the design elves are working overtime, and it might take a smidge longer.  With our agency juggling approximately 50 Amazon A+ projects a week, you can bet your bottom dollar we're pros at this game. Your project is our top priority, and we'll make sure it's worth the (slightly extended) wait!",
    },
    {
      question: "Do you offer rush services for urgent?",
      answer:
        "We get it - sometimes you need designs faster than Amazon Prime delivers! We offer rush services for those 'drop-everything-and-design-now' moments. Just remember, while we'll move faster than a cheetah on caffeine, there's a small 'speedy service' fee involved.",
    },
    {
      question: "Do you offer consultations or strategy sessions before starting a design project?",
      answer:
        "Absolutely! Before we kick off any design project, we like to sit down and chat strategy. Think of it as our secret sauce for burying the competition and turning your customers into loyal fans. Best part? It's on the house! We're offering a free consultation call where we'll brainstorm ideas, share insights, and chart a course to Amazon success together.",
    },
    
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {!hide_testimonial && <div className="w-full bg-black flex text-white justify-center py-20">
        <div className="w-[95%] max-w-[1500px] flex flex-col gap-8 items-center">
          <p className="font-light hidden lg:block lg:text-[20px] mb-2 border-b-white text-white border-b pb-2 self-start pr-9 uppercase relative">
            What our clients say
            <span className=" h-2 w-2 bg-[#C317FF] absolute right-0 -bottom-1 rounded-full border border-black outline outline-1 outline-offset-1 outline-[#C317FF]" />
          </p>
          <h3 className="text-white text-4xl lg:text-6xl !uppercase fontBlack w-full">
            TESTIMONIALS
          </h3>
          <TestimonialSlider />
        </div>
      </div>}

      <div className="w-full bg-white text-black flex items-center py-10 lg:py-16 flex-col gap-10 lg:gap-16">
        <div className="w-full">
          {accordionData.map((data, index) => (
            <div
              key={index}
              id={`accordion-collapse-${index}`}
              className={`w-full flex justify-between lg:justify-center border-b border-b-[#636363] ${activeAccordion === index ? 'bg-[#F4F4F4]' : 'bg-white'}`}
            >
              <div className="w-[95%] max-w-[1300px]">
                <h2 id={`accordion-heading-${index}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-7 rtl:text-right text-black gap-3 text-2xl lg:text-[32px] fontBlack"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeAccordion === index ? "true" : "false"}
                    aria-controls={`accordion-body-${index}`}
                  >
                    <span className="uppercase text-left">{data.question}</span>
                    <span className="text-[#C317FF] text-[56px]">{activeAccordion === index ? '-' : '+'}</span>
                  </button>
                </h2>
                <div
                  id={`accordion-body-${index}`}
                  className={`${
                    activeAccordion === index ? "block" : "hidden"
                  } px-7 py-3 pb-10 transition-all ease-in-out duration-500 delay-200`}
                  aria-labelledby={`accordion-heading-${index}`}
                >
                  <p className="mb-2 text-black text-lg lg:text-xl lg:tracking-wider lg:leading-[34px] leading-[25px] md:w-[80%]">
                    {data.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="w-full flex justify-center my-5 mb-7">
          <button className="bg-[#C317FF] rounded-full px-8 py-3 lg:px-12 lg:py-4 text-[14px] lg:text-lg font-light text-white">
             <span className="fontLight">Schedule your</span>{" "}
              <span className="fontBold">Free Discovery Call</span> Now
            </button>
        </div> */}

        <Schedule_Discover_Call_Button />
      </div>
    </div>
  );
};

export default Testimonials;
