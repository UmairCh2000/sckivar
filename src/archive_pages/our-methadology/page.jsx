"use client";
import Administration from "@/components/ourMethadology/Administration";
import Objective from "@/components/ourMethadology/Objective";
import Research from "@/components/ourMethadology/Research";
import { animation } from "@/helper/helper";
import Link from "next/link";
import { Fade } from "react-reveal";

const OurMethadology = () => {
  return (
    <div className="scOurMethadologyPage scWhoWePage block w-full">
      <div
        className="scOurMethadologyBannerDiv block w-full pt-60 pb-20"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/aboutBanner.gif) no-repeat center/cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="block w-full">
            <div className="grid grid-cols-1 items-start md:grid-cols-4 gap-8">
              <div className="md:col-span-3">
                <Fade
                  delay={animation.delay}
                  duration={animation.duration}
                  left
                >
                  <h2 className="relative textStroke mb-3 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack">
                    Calculated steps for
                    <img
                      src="/assets/svgs/aboveLine.svg"
                      alt="Line"
                      className="aboveLine absolute"
                    />
                  </h2>
                  <h3 className="relative text-white mb-12 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack">
                    unmatched success
                    <span className="h-2 w-2 md:h-3 md:w-3 bg-[#C317FF] rounded-full absolute bottom-3 ml-4"></span>
                    <img
                      src="/assets/svgs/circleLine.svg"
                      alt="Line"
                      className="circleLine absolute"
                    />
                  </h3>
                </Fade>
                <div className="grid grid-cols-3 gap-10 border-white border-b md:w-4/5">
                  <div className="block w-full text-left">
                    <Fade
                      delay={animation.delay}
                      duration={animation.duration}
                      left
                    >
                      <p className="flex items-end justify-center text-center w-full text-white h-14 md:h-auto text-xs xl:text-sm dotRelative pb-4 relative">
                        Research. Analysis. Data
                      </p>
                    </Fade>
                  </div>
                  <div className="block w-full text-center">
                    <Fade
                      delay={animation.delay}
                      duration={animation.duration}
                      left
                    >
                      <p className="flex items-end justify-center text-center w-full text-white h-14 md:h-auto text-xs xl:text-sm dotRelative second pb-4 relative">
                        Objective. Plan. Strategy
                      </p>
                    </Fade>
                  </div>
                  <div className="block w-full text-right">
                    <Fade
                      delay={animation.delay}
                      duration={animation.duration}
                      left
                    >
                      <p className="flex items-end justify-center text-center w-full text-white h-14 md:h-auto text-xs xl:text-sm dotRelative last pb-4 relative">
                        Administration & Execution
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
              <Fade delay={animation.delay} duration={animation.duration} right>
                <Link href="/form" className="block w-full">
                  <img
                    src="/assets/images/arrowgif.gif"
                    alt="Gif"
                    className="w-full h-auto block mt-10"
                  />
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Research />
      <Objective />
      <Administration />
    </div>
  );
};

export default OurMethadology;
