import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    id: 1,
    name: "Pavel Smirnov",
    designation: "Co-Founder at Cooper Cases",
    imageUrl: "/assets/images/testimonial-client-image.png",
    description:
      "Our collaboration with Shahrukh and his team on our Amazon product launches was exceptional. Their lead designer and team brilliantly enhanced our 3D renders, demonstrating professionalism, creativity, and attention to detail. They understood our vision, delivering high-quality PDP & A+ images that significantly elevated our product's appeal. We highly recommend their services for their outstanding ability to bring concepts to life and look forward to future projects.",
    ref_images: [
      "/assets/images/client-testimonial-img-1.png",
      "/assets/images/client-testimonial-img-2.png",
      "/assets/images/client-testimonial-img-3.png",
    ],
  },
  {
    id: 2,
    name: "Jessie Sims",
    designation: "Founder at Sawyer Auto",
    imageUrl: "/assets/images/jessie-sims-avatar.png",
    description:
      "Sckivar transformed our brand with thousands of EBC designs and lightning-fast automation. They're the epitome of cost-effectiveness and professionalism.",
    ref_images: ["/assets/images/jessie-sims-testimonial-image-01.png"],
  },
  {
    id: 3,
    name: "Pard Bharaj",
    designation: "Founder at Health is Wealth",
    imageUrl: "/assets/images/pard-bharaj-avatar.png",
    description:
      "I just wanted to say thanks to you and your teams ongoing support, I look forward to continue working with you guys....it's a real partnership that is helping my brand and knowledge grow",
    ref_images: ["/assets/images/pard-bharaj-testimonial-image-01.png"],
  },
];

const Testimonial_images_animation = ({ images_arr }) => {
  "use client";
  const [active_index, setActive_index] = useState(0);

  useEffect(() => {
    if (images_arr.length > 1) {
      const intervalId = setInterval(() => {
        setActive_index((prevIndex) => {
          if (prevIndex === images_arr.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 15000);

      return () => clearInterval(intervalId);
    } else {
      setActive_index(0);
    }
  }, [images_arr]);

  return (
    <div className="relative">
      <img className="w-full" src="/assets/svgs/chat_bubble.svg" />
      <div className="absolute top-7 left-7 right-7 grid place-items-center rounded-3xl overflow-hidden ">
        <img
          className="w-full object-cover h-full overflow-hidden"
          src={images_arr[active_index]}
        />
      </div>
    </div>
  );
};

export const Section_05_Testimonials = () => {
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
    duration: 1000, // 1 second for transition duration
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      instanceRef.current?.next();
    }, 15000); // 15 seconds interval

    return () => clearInterval(intervalId);
  }, [instanceRef]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full bg-black flex text-white justify-center py-20">
        <div className="w-[95%] max-w-[1500px] flex flex-col gap-8 items-center">
          <p className="font-light hidden lg:block lg:text-[20px] mb-2 border-b-white text-white border-b pb-2 self-start pr-9  relative uppercase">
            what our clients say
            <span className=" h-2 w-2 bg-[#C317FF] absolute right-0 -bottom-1 rounded-full border border-black outline outline-1 outline-offset-1 outline-[#C317FF]" />
          </p>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="w-full h-full flex flex-col flex-1 relative">
                <img
                  src="/assets/images/quotes.png"
                  className="w-20 z-40 lg:w-[110px] absolute -top-4 lg:-top-2 -left-5 lg:-left-10"
                  alt=""
                />
                <div
                  ref={sliderRef}
                  id="keen-slider"
                  className="keen-slider w-full flex-1 h-[100%]"
                >
                  {testimonials.map((elem, index) => (
                    <div
                      className="keen-slider__slide flex items-center"
                      key={index}
                    >
                      <p className="text-white text-lg md:text-2xl fontLight leading-7 tracking-wide">
                        {elem.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-10">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-20"
                      src={testimonials[currentSlide].imageUrl}
                    />
                    <div className="space-y-2 text-lg">
                      <h1 className="font-bold">
                        {testimonials[currentSlide].name}
                      </h1>
                      <p>{testimonials[currentSlide].designation}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div
                      className="pointer-events-auto cursor-pointer h-10 w-10 rounded-full border-[0.7px] border-white flex items-center justify-center -rotate-180"
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                    >
                      <GrNext />
                    </div>
                    <div
                      className="pointer-events-auto cursor-pointer h-10 w-10 rounded-full border-[0.7px] border-white flex items-center justify-center"
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                    >
                      <GrNext />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Testimonial_images_animation
                  images_arr={testimonials[currentSlide].ref_images}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
