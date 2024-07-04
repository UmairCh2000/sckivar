"use client";
import Insception from "@/components/caseStudies/twcc/Insception";
import Phase1 from "@/components/caseStudies/twcc/Phase1";
import Phase2 from "@/components/caseStudies/twcc/Phase2";
import { animation } from "@/helper/helper";
import Link from "next/link";
import { Fade } from "react-reveal";

const CaseStudies = () => {
  return (
    <div className="scTWCCPage block w-full">
      <div
        className="scOurteamBannerDiv block w-full pt-60 pb-20"
        style={{
          background:
            "url(/assets/images/caseStudytwccBanner.png) no-repeat center/cover",
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
                    A brief Journey,
                    <img
                      src="/assets/svgs/aboveLine.svg"
                      alt="Line"
                      className="aboveLine absolute"
                    />
                  </h2>
                  <h3 className="relative text-white md:mb-12 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack">
                    {`from on-land to online`}
                    <span className="h-2 w-2 md:h-3 md:w-3 ml-1 absolute bottom-3 rounded-full bg-[#C317FF]" />
                    <img
                      src="/assets/svgs/circleLine.svg"
                      alt="Line"
                      className="circleLine absolute"
                    />
                  </h3>
                </Fade>
              </div>
              <Fade delay={animation.delay} duration={animation.duration} right>
                <Link href="/form" className="block w-full">
                  <img
                    src="/assets/images/arrowgif.gif"
                    alt="Gif"
                    className="w-40 md:w-full h-auto block md:mt-10 ml-auto md:ml-0"
                  />
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div
        className="scTalent block w-full py-20"
        style={{
          background: "url(/assets/images/noiseGif.gif)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-2">
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className="text-white fontBlack text-center text-base sm:text-2xl lg:text-[32px] lg:leading-[47px] tracking-wide">
              The Watch Care Company (TWWC), a watch accessory brand based in
              Sydney, Australia, partnered with Sckivar to launch a global
              e-commerce brand on both Shopify and Amazon. By utilizing account
              management, marketing strategies and funnel optimization, Sckivar
              was able to generate over $100,000 in revenue within the first 3
              months of launch, despite initial challenges.
            </h3>
          </Fade>
        </div>
      </div>
      <div className="w-full block scCaseStudies bg-scBlack">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            <div className="block w-full">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h6 className="text-white text-sm uppercase lineBefore whiteLine headerLine mb-5 upp">
                  Results{" "}
                  <span className="dotsLine">
                    <span className="dot bg-scPurple rounded-full" />
                  </span>
                </h6>
                <h6 className="text-white fontBlack uppercase text-base md:text-lg">
                  Over $100k in
                  <br />
                  revenue
                </h6>
              </Fade>
            </div>
            <div className="block w-full">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h6 className="text-white text-sm uppercase lineBefore whiteLine headerLine mb-5 upp">
                  Platform{" "}
                  <span className="dotsLine">
                    <span className="dot bg-scPurple rounded-full" />
                  </span>
                </h6>
                <h6 className="text-white fontBlack uppercase text-base md:text-lg">
                  Amazon &<br />
                  shopify
                </h6>
              </Fade>
            </div>
            <div className="block w-full">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h6 className="text-white text-sm uppercase lineBefore whiteLine headerLine mb-5 upp">
                  Niche{" "}
                  <span className="dotsLine">
                    <span className="dot bg-scPurple rounded-full" />
                  </span>
                </h6>
                <h6 className="text-white fontBlack uppercase text-base md:text-lg">
                  Men&rsquo;s Fashion/
                  <br />
                  Accessories
                </h6>
              </Fade>
            </div>
            <div className="block w-full">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <h6 className="text-white text-sm uppercase lineBefore whiteLine headerLine mb-5 upp">
                  Services{" "}
                  <span className="dotsLine">
                    <span className="dot bg-scPurple rounded-full" />
                  </span>
                </h6>
                <h6 className="text-white fontBlack uppercase text-base md:text-lg">
                  Brand Management,
                  <br />
                  Brand Design, PPC,
                  <br />
                  Social Media
                </h6>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Insception />
      <Phase1 />
      <Phase2 />
      <div
        className="scTalent block w-full py-20"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/assets/images/noiseGif.gif)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className="text-white uppercase fontBlack text-center text-xl md:text-3xl mb-5">
              {`Unlock your brand's full potential with US!`}
            </h3>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className="text-white text-sm md:text-lg md:leading-[34px] tracking-wide mb-10 text-center">
              {`We don't play around with just any numbers, we're in it for the
            right clients. The ones with the potential to reach the top. We know
            you have what it takes, and we're here to guide you every step of
            the way to make sure you reach it. Because that's when we truly win.
            Don't settle for mediocrity, choose growth with Sckivar`}
            </p>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <Link href="/form">
              <button
                type="button"
                className="relative mx-auto flex font-extrabold items-center rounded-full border border-transparent bg-scPurple px-8 py-2 fontBold text-xs sm:text-sm md:text-lg text-white focus:outline-none"
              >
                ACT NOW - Schedule your free Discovery Call.
              </button>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
