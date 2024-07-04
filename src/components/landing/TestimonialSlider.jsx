import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { GrNext } from "react-icons/gr";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 100,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      console.log("slide changed");
    },
  });

  const testimonials = [
    {
      quote:
        "Upon partnering with them, not only did they over-deliver on their promises, but the results were beyond our expectations. From an ACOS of 29.21% to a commendable 25.79%, coupled with the impressive increase in sales. Plus, the landing pages they've crafted for us are simply stunning, maximizing our conversions",
      author: "Jevgenjis Timoshenko",
      position: "Co-Founder at Manteiro",
      img: "/assets/images/image 2.png",
    },
    {
      quote:
        "Upon partnering with them, not only did they over-deliver on their promises, but the results were beyond our expectations. From an ACOS of 29.21% to a commendable 25.79%, coupled with the impressive increase in sales. Plus, the landing pages they've crafted for us are simply stunning, maximizing our conversions",
      author: "Jevgenjis Timoshenko",
      position: "Co-Founder at Manteiro",
      img: "/assets/images/image 2.png",
    },
    {
      quote:
        "Upon partnering with them, not only did they over-deliver on their promises, but the results were beyond our expectations. From an ACOS of 29.21% to a commendable 25.79%, coupled with the impressive increase in sales. Plus, the landing pages they've crafted for us are simply stunning, maximizing our conversions",
      author: "Jevgenjis Timoshenko",
      position: "Co-Founder at Manteiro",
      img: "/assets/images/image 2.png",
    },
  ];

  return (
    <section className="w-[96%]">
      <div className="w-full ">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 relative">
                <img src="/assets/images/quotes.png" className="w-20 lg:w-[110px] absolute -top-4 lg:-top-2 -left-5 lg:-left-10" alt="" />
          <div className="lg:w-2/3 w-full">
            <div
              ref={sliderRef}
              id="keen-slider"
              className="keen-slider w-full"
            >
              {testimonials?.map((testimonial, index) => (
                <div className="keen-slider__slide" key={index}>
                  <p className="text-white text-2xl lg:text-3xl fontBlack leading-[45px] lg:leading-[50px] uppercase tracking-wide">
                    {testimonial.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex lg:flex-col flex-row-reverse items-center justify-between lg:justify-start lg:gap-16">
            <div className="flex flex-row-reverse lg:flex-col gap-4 lg:gap-6 items-center">
              <img
                src={testimonials[currentSlide].img}
                className="w-20 h-20 lg:w-[8rem] lg:h-[8rem] rounded-full"
                alt="profile"
              />
              <div className="">
                <p className="text-md lg:text-lg mb-2 lg:mb-0 text-white font-semibold">
                  - {testimonials[currentSlide].author}
                </p>
                <p className="text-md lg:text-lg text-white">
                  {testimonials[currentSlide].position}
                </p>
              </div>
            </div>

            <div className="flex gap-5 justify-center">
              <div
                className="h-8 w-8 rounded-full border-[0.7px] border-white flex items-center justify-center -rotate-180"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <GrNext />
              </div>
              <div
                className="h-8 w-8 rounded-full border-[0.7px] border-white flex items-center justify-center"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              >
                <GrNext />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
