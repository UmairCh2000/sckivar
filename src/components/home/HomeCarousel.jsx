import { animation } from "@/helper/helper";
import Link from "next/link";
import { GrNext } from "react-icons/gr";
import { TfiAngleRight } from "react-icons/tfi";
import { Fade } from "react-reveal";
import Slider from "react-slick";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`h-10 w-10 md:h-16 md:w-16 rounded-full border-[0.5px] border-gray-400 flex items-center justify-center -rotate-180 absolute top-1/2 left-14 translate -translate-y-1/2 z-10`}
      onClick={onClick}
    >
      <TfiAngleRight size={25} className="text-white" />
    </div>
  );
};
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`h-10 w-10 md:h-16 md:w-16 rounded-full border-[0.5px] border-gray-400 flex items-center justify-center absolute top-1/2 right-14 translate -translate-y-1/2 z-10`}
      onClick={onClick}
    >
      <TfiAngleRight size={25} className="text-white" />
    </div>
  );
};

const HomeCarousel = () => {
  const settings = {
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    
  };

  return (
    <div className="homeSlider w-full block">
      <Link href="/form" className="cursor-pointer">
        <img src="/assets/images/arrowgif.gif" alt="GIF" className="homeGif" />
      </Link>
      <div className="block w-full relative">
        <Slider centerPadding="150px" {...settings} className="relative">
          <div className="scHomeSliderDiv block w-full">
            <img
              src="/assets/images/homeBannerImg1.png"
              alt="Home Banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="scHomeSliderDiv block w-full">
            <img
              src="/assets/images/homeBannerImg2.png"
              alt="Home Banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="scHomeSliderDiv block w-full">
            <img
              src="/assets/images/homeBannerImg3.png"
              alt="Home Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
        <div className="absolute w-full flex justify-center items-center scHomeSliderDivStatic top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* */}

          <div className="px-5 md:px-0 md:text-center overlayText flex flex-col md:items-center justify-center">
            <div className="max-w-7xl mx-auto">
              <Fade delay={animation?.delay} duration={animation?.duration} top>
                <h1 className="relative text-white text-2xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack">
                  Turn Up the Heat on Your
                  <img
                    src="/assets/svgs/circleLineHome.svg"
                    alt="SVg"
                    className="circleSvg absolute"
                  />
                </h1>
                <h2 className="relative textStroke mb-5 md:mb-10 text-2xl md:text-4xl lg:text-scH1 lineHeightH1  uppercase fontBlack">
                  Online Sales with SCKIVAR 
                  <img
                    src="/assets/svgs/lineAndCircle.svg"
                    alt="SVg"
                    className="lineAndCircleSvg absolute"
                  />
                  <span className="inline-block bg-scPurple w-3 aspect-square rounded-full lg:ms-1"></span>
                </h2>
              </Fade>
              <Fade
                delay={animation?.delay}
                duration={animation?.duration}
                bottom
              >
                <p className="lineHeightNormal text-sm md:text-base lg:text-scH4  fontLight text-white md:w-10/12 mx-auto">
                  {`Unleash the Beast Mode: We deliver the real deal for Amazon & Shopify brands with sky-high sales, killer customer connections, sick brand designs, and loyal customers that stick around. We're the agency your brand needs to dominate the competition.`}
                </p>
              </Fade>
            </div>
          </div>
          {/* <div
                className="h-10 w-10 md:h-16 md:w-16 rounded-full border-[0.7px] border-white flex items-center justify-center"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              >
                <GrNext />
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
