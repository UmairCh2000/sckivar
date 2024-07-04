"use client";

import { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import { GrNext } from "react-icons/gr";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    id: 1,
    name: "- Jevgenjis Timoshenko",
    designation: "Co-Founder at Manteiro",
    imageUrl: "/assets/images/testimonialImg1.png",
    description:
      "Upon partnering with them, not only did they over-deliver on their promises, but the results were beyond our expectations. From an ACOS of 29.21% to a commendable 25.79%, coupled with the impressive increase in sales. Plus, the landing pages they've crafted for us are simply stunning, maximizing our conversions",
  },
  {
    id: 2,
    name: "- Stefan SonofYvan",
    designation: "Founder at TWCC",
    imageUrl: "/assets/images/testimonialImg2.png",
    description:
      "WE COULD NOT BE MORE PLEASED WITH OUR DECISION TO WORK WITH SCKIVAR. THEY HAVE REALLY HELPED TURN MY BUSINESS AROUND. OUR ADVERTISING COSTS HAVE BEEN CUT IN HALF WHILE WATCHING OUR SALES INCREASE! WORKING WITH SCKIVAR IS LIKE HIRING A PARTNER.",
  },
  {
    id: 3,
    name: "- Abhay Bhatnagar",
    designation: "Founder at Bandhan Co.",
    imageUrl: "/assets/images/testimonialImg3.png",
    description:
      "AS A SMALL BRAND OWNER, I WAS UNSURE IF WE'D GET THE ATTENTION WE NEEDED. HOWEVER, THESE RESULTS SPEAK VOLUMES! OUR ACOS WENT FROM 58.65% DOWN TO 27.98% IN JUST OVER A MONTH.",
  },
  {
    id: 4,
    name: "- Juan Filipe",
    designation: "Founder at Z-Netics LLC.",
    imageUrl: "/assets/images/testimonialImg4.png",
    description:
      "I was skeptical about using an agency for my Amazon business, but working with Sckivar has been a game changer. Their expertise in data analysis and optimization has led to a significant increase in sales and visibility for my products.",
  },
];

const HomeTestimonials = () => {
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
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000); // 3000 ms = 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [instanceRef]);

  return (
    <div className="scWorkImage block w-full py-20 bg-scBlack md:px-10 xl:px-0">
      <div className="w-full bg-black flex text-white justify-center py-20">
        <div className="w-[95%] max-w-[1500px] flex flex-col gap-8 items-center">
          <p className="font-light hidden lg:block lg:text-[20px] mb-2 border-b-white text-white border-b pb-2 self-start pr-9 uppercase relative">
            What our clients say
            <span className=" h-2 w-2 bg-[#C317FF] absolute right-0 -bottom-1 rounded-full border border-black outline outline-1 outline-offset-1 outline-[#C317FF]" />
          </p>
          <h3 className="text-white text-4xl lg:text-5xl !uppercase fontBlack w-full">
            TESTIMONIALS
          </h3>
          <section className="w-[96%]">
            <div className="w-full mt-6 ms-3">
              <div className="flex flex-col lg:flex-row lg:items-center gap-16 relative">
                <img
                  src="/assets/images/quotes.png"
                  className="w-20 lg:w-[110px] absolute -top-4 lg:-top-2 -left-5 lg:-left-10"
                  alt=""
                />
                <div className="lg:w-2/3 w-full">
                  <div
                    ref={sliderRef}
                    id="keen-slider"
                    className="keen-slider w-full"
                  >
                    {testimonials?.map((testimonial, index) => (
                      <div className="keen-slider__slide" key={index}>
                        <p className="text-white text-2xl lg:text-3xl fontBlack leading-[45px] lg:leading-[50px] uppercase tracking-wide">
                          {testimonial.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-1/3 flex lg:flex-col flex-row-reverse items-center justify-between lg:justify-start lg:gap-16">
                  <div className="flex flex-row-reverse lg:flex-col gap-4 lg:gap-6 items-center">
                    <img
                      src={testimonials[currentSlide].imageUrl}
                      className="w-20 h-20 lg:w-[8rem] lg:h-[8rem] rounded-full"
                      alt="profile"
                    />
                    <div className="">
                      <p className="text-md lg:text-lg mb-2 lg:mb-0 text-white font-semibold">
                        {testimonials[currentSlide].name}
                      </p>
                      <p className="text-md lg:text-lg text-white">
                        {testimonials[currentSlide].designation}
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
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
