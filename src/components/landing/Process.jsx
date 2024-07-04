import React from "react";
import ReviewCarousel from "./ReviewCarousel.jsx";
import { GrNext } from "react-icons/gr";
import { Process_Slider_Animation } from "./Process_Slider_Animation.jsx";
import { Schedule_Discover_Call_Button } from "../common/Schedule_Discover_Call_Button.jsx";



const Process = () => {
  const outlineStyle = {
    color: "black",
    backgroundColor: "black",
    textShadow:
      "-1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF",
  };

  const images = [
    "cooper 1",
    "znetics-logo",
    "sucrey-logo",
    "ManteiroLogoWhite 5",
    "twcc-logo",
    "sprintade-logo",
    "dekar-logo",
    "bonus-logo",
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full bg-black flex text-white justify-center py-20">
        <div className="w-full items-center flex flex-col gap-16 lg:gap-25">
          <div className="w-[90%]  max-w-[1500px]">
            <h3 className="text-white text-4xl lg:text-[56px] !lg:leading-[82px] !uppercase fontBlack">
              OUR RECENT RESULTS FOR OUR CLIENTS
            </h3>
          </div>



          <Process_Slider_Animation />





          <div className="w-[90%] max-w-[1400px] flex flex-col gap-24">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between">
              <h4 className="text-white lg:w-[30%] text-3xl space-y-2  lg:text-5xl !uppercase fontBlack leading-relaxed">


                {/* <span><br /> </span> */}

                <div>
                  SUCCESS IS
                </div>
                <div>
                  BUILT ON TR<span style={outlineStyle}>US</span>T
                </div>

              </h4>
              <p className="fontLight  lg:w-[60%] text-white text-lg md:text-lg tracking-wide !leading-[25px] lg:tracking-wide lg:!leading-[25px] space-y-3">
                <span className="block">
                  Our clients were once in your shoes, but with their ambition and
                  our expertise, we not only helped them build a strong brand on
                  Amazon, but a rock-solid relationship too.
                </span>

                <span className="block">
                  We don&apos;t just build brands, we build bonds.
                  That&apos;s why our heroes, who partnered with us from day one,
                  are still killin&apos; it and rakin&apos; in the dough. If
                  you&apos;re ready for a winning team, let&apos;s link up and
                  make magic happen.
                </span>
              </p>
            </div>
            <div className="container w-full lg:mb-28">
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
                {images.map((imageUrl, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={`/assets/images/${imageUrl}.png`}
                      alt={`Image ${index + 1}`}
                      className="w-[12rem] lg:w-[15rem] h-auto mb-4 mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-black flex justify-center">
        <div className="w-[95%] max-w-[1400px] flex flex-col gap-5 lg:gap-8 pt-20 pb-16">
          <h3 className="text-black text-4xl lg:text-6xl !uppercase fontBlack">
            OUR CUSTOMIZED & RESULTS-DRIVEN PROCESS
          </h3>
          <p className="font-[100] text-black text-lg md:text-base mb-12 tracking-wide !leading-[25px] lg:tracking-wider lg:!leading-[34px]">
            While Amazon offers a vast marketplace, success depends on a
            systematic and tailored approach for each client.
          </p>
          <div className="w-full mb-4">
            <img
              src="/assets/images/process1.png"
              className="w-full hidden lg:block"
              alt=""
            />
            <img
              src="/assets/images/process2.png"
              className="w-[70%] mx-auto lg:hidden block"
              alt=""
            />
          </div>


          {/* <div className="w-full flex justify-center mt-8 lg:mt-8">
            <button className="bg-[#C317FF] rounded-full px-8 py-3 lg:px-12 lg:py-4 text-[14px] lg:text-lg font-light text-white">
              <span className="fontLight">Schedule your</span>{" "}
              <span className="fontBold">Free Discovery Call</span> Now
            </button>
          </div> */}
          <Schedule_Discover_Call_Button />
        </div>
      </div>
    </div>
  );
};

export default Process;
