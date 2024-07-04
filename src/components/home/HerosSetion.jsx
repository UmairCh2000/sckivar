import { animation } from "@/helper/helper";
import Link from "next/link";
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { Fade } from "react-reveal";

const HerosSetion = () => {
  return (
    <div
      style={{ backgroundImage: "url('/assets/svgs/shadow_background.svg')" }}
      className="scHowCanHelp block bg-cover bg-right-top relative w-full py-20  md:px-10 xl:px-0 "
    >
      {/* <div class="absolute inset-0 bg-gradient-radial-black"></div>
      <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white via-transparent to-transparent"></div> */}
      <div className="max-w-7xl mx-auto px-4 ">
        {/* <div className="-right-16 absolute -top-10 z-40 w-20 aspect-square">
      <img
        src='/assets/svgs/shadow_ellipse.svg'
        // alt='Line'
        className='w-72'
      />
      </div> */}

        <div className="grid grid-cols-5 items-start justify-between">
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className="col-span-3 md:col-span-4 lineBefore whiteLine relative uppercase text-white text-sm mb-20">
              The Real Heros
              <span className="dotsLine">
                <span className="dot bg-scPurple rounded-full" />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} right>
            <Link
              href="/form"
              className="col-span-2 md:col-span-1 w-full text-white text-sm md:text-lg underline fontBold flex items-center justify-end hover:text-scPurple"
            >
              Get Started <FaAnglesRight className="w-5 h-5 ml-1" />
            </Link>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6 lg:gap-8 mb-20">
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h5 className="text-white fontBlack leading-tight uppercase text-5xl">
              Success is built on TR<strong className="textStroke">US</strong>T
            </h5>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <p className="text-white text-md col-span-2 tracking-wide space-y-1">
              <p className="leading-[30px] font-thin">
                {`Our clients were once in your shoes, but with their ambition and our
            expertise, we not only helped them build a strong brand on Amazon,
            but a rock-solid relationship too.`}
              </p>
              <p className="leading-[30px] font-thin">
                {`We don't just build brands, we build bonds. That's why our heroes, who partnered with us from day one, are still killin' it and rakin' in the dough. If you're ready for a winning team, let's link up and make magic happen.`}
              </p>
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src="/assets/images/heroImg4.png"
              alt="Patnner Logo"
              className="h-auto w-full"
            />
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src="/assets/images/heroImg1.png"
              alt="Patnner Logo"
              className="h-auto w-full"
            />
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src="/assets/images/heroImg2.png"
              alt="Patnner Logo"
              className="h-auto w-full"
            />
          </Fade>

          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src="/assets/images/heroImg3.png"
              alt="Patnner Logo"
              className="h-auto w-full"
            />
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src="/assets/images/heroImg5.png"
              alt="Patnner Logo"
              className="h-auto w-full"
            />
          </Fade>

          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src="/assets/images/heroImg6.png"
              alt="Patnner Logo"
              className="h-auto w-full"
            />
          </Fade>

          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src="/assets/images/heroImg7.png"
              alt="Patnner Logo"
              className="h-auto w-full"
            />
          </Fade>

          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <img
              src="/assets/images/heroImg8.png"
              alt="Patnner Logo"
              className="h-auto w-full"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HerosSetion;
