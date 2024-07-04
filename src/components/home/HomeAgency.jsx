import { animation } from "@/helper/helper";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Fade } from "react-reveal";

const HomeAgency = () => {
  return (
    <div className="w-full bg-white scAgency flex justify-center py-24">
      <div className="w-[95%] md:w-[90%] xl:w-full max-w-7xl mx-auto px-4">
        <Fade delay={animation.delay} duration={animation.duration} left>
          <h6 className="uppercase text-black text-sm mb-12 lineBefore">
            Why Sckivar
            <span className="dotsLine">
              <span className="dot bg-scPurple rounded-full" />
            </span>
          </h6>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h3 className="text-black text-xl md:text-3xl lg:text-[56px] lineHeightH1 lg:leading-[60px] fontBlack uppercase xl:w-2/3 mb-10 pl-1">
            Our Agency only<br /> grows, when you grow.
          </h3>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className="text-black text-sm md:text-lg mb-5 lg:leading-[34px]">
            {`Sick of lackluster results despite putting your all into your Amazon
          brand? It's time to bring in the big guns. We bring the heat and
          know-how to turbocharge your sales and skyrocket your brand to new
          heights.`}
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className="text-black text-sm md:text-lg mb-5 lg:leading-[34px]">
            {`Forget cookie-cutter approaches and tired tactics. We're not your
          average agency and don't play by the book. We deliver results that go
          above and beyond, every time.`}
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className="text-black text-sm md:text-lg mb-5 lg:leading-[34px]">
            {`We know you're tired of spinning your wheels and getting nowhere fast.
          You feel like you're just not getting the results you want, no matter
          how hard you try? We hear you loud and clear. And we're here to offer
          a solution.`}
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <p className="text-black text-sm md:text-lg mb-10">
            {`We are the Amazon brand growth experts that bring your vision to life.
          Our formula for greatness features a solid process, a passionate team,
          and results you can count on. Data, research, and analysis drive every
          strategy we create, ensuring your brand not only sells but also stands
          the test of time. At our core, we're a team of go-getters determined
          to make your brand shine brighter than the rest. Say goodbye to bland
          promises and hello to real results with our team.`}
          </p>
        </Fade>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <div className="flex items-center flex-wrap">
            <Link
              className="flex items-center text-black fontBold fontBlack underline mr-5 text-sm md:text-lg"
              href="/who-we-are"
            >
              About Us <BsArrowRight className="w-5 h-5 ml-3" />
            </Link>
            <Link
              className="flex items-center text-black fontBold fontBlack underline mr-5 text-sm md:text-lg"
              href="/our-team"
            >
              Meet the Team <BsArrowRight className="w-5 h-5 ml-3" />
            </Link>
            <Link
              className="flex items-center text-black fontBold fontBlack underline mr-5 text-sm md:text-lg"
              href="/form"
            >
              Get Started <BsArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HomeAgency;
