import { animation } from "@/helper/helper";
import { Fade } from "react-reveal";

const Vaccination = () => {
  return (
    <div className="w-full block">
      <div
        className="scVaccination bg-black px-5"
        style={{
          background:
            "url(/assets/images/noiseGif.gif)",
        }}
      >
        <div className="max-w-7xl mx-auto ">
          <Fade delay={animation.delay} duration={animation.duration} top>
            <h3 className="text-white text-3xl lg:text-[50px] lineHeightH1 uppercase py-20 fontBlack text-center">
              A vaccination shot against failure.
            </h3>
          </Fade>
        </div>
      </div>
      <div
        className="scVaccinationText block w-full py-20 md:py-32"
        style={{
          background:
            "url(/assets/images/vaccinationBanner.jpeg) no-repeat center/cover",
        }}
      >
        <div className="w-full grid md:grid-cols-2 gap-16">
          <Fade delay={animation.delay} duration={animation.duration} left>
            <div className="block w-full mt-24">
              <div className="firstText pl-10 relative">
                <h3 className="text-scPurple fontBlack text-4xl uppercase mb-1">
                  $10M
                </h3>
                <p className="text-white text-md tracking-wider lg:leading-[29px] uppercase mb-3">
                  Revenue generated for clients
                </p>
              </div>
              <span className="dotLine"></span>
            </div>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} right>
            <div className="secondText text-right mb-24">
              <div className="block w-full pr-14">
                <h3 className="text-scPurple fontBlack text-4xl uppercase mb-1">
                  100+
                </h3>
                <p className="text-white text-md tracking-wider lg:leading-[29px] uppercase mb-3">
                  Amazon & Shopify Brands managed
                </p>
              </div>
              <span className="dotLine"></span>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Vaccination;
