"use client";
import { animation, ourTeam } from "@/helper/helper";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-reveal";

const OurTeam = () => {
  return (
    <div className="scOurteamPage block w-full">
      <div
        className="scOurteamBannerDiv block w-full pt-60 pb-20"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(/assets/images/ourTeamBanner.png) no-repeat center/cover",
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
                  <h2 className="textStroke text-3xl md:text-4xl lg:text-[3.4rem] lineHeightH1 uppercase fontBlack">
                    Dreamers, Thinkers, & Doers!
                  </h2>
                  <h3 className="relative text-white mb-12 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack">
                    All here{" "}
                    <span className="inline-block bg-scPurple w-2 h-2 rounded-full"></span>
                    <img
                      src="/assets/svgs/singleLine.svg"
                      alt="Line"
                      className="lineSvg absolute"
                    />
                  </h3>
                </Fade>
              </div>
              <Fade delay={animation.delay} duration={animation.duration} right>
                <Link href="/form" className="block w-full">
                  <img
                    src="/assets/images/arrowgif.gif"
                    alt="Gif"
                    className="hidden md:block w-full h-auto mt-10"
                  />
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div
        className="scTalent block w-full p-10 md:py-20"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/aboutBanner.gif) no-repeat center/cover",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className="text-white uppercase fontBlack text-center text-[1.7rem] tracking-wider lg:leading-[43px]">
              Every talent in our team compliments the next,<br /> making our triumph evitable.
            </h3>
          </Fade>
        </div>
      </div>
      <div className="scOurTeamSec block w-full py-32">
        <div className="md:w-[85%] max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-12 items-center">
            {ourTeam?.map((team) => (
              <div
                key={`OurTeamKey${team?.id}`}
                className="scTeamCard w-full block relative"
              >
                <Fade
                  delay={animation.delay}
                  duration={animation.duration}
                  bottom
                >
                  <img
                    src={team?.imageUrl}
                    alt={team?.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full  overlatText flex flex-col justify-end">
                    <h6 className="text-white text-lg fontBlack uppercase sm:mb-1">
                      {team?.name}
                    </h6>
                    <p className="text-white text-xs sm:text-sm">
                      {team?.desgination}
                    </p>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
