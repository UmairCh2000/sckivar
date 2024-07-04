import { animation } from "@/helper/helper";
import Link from "next/link";
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { Fade } from "react-reveal";

const HomeWork = () => {
  return (
    <div className="scWorkImage flex items-center w-full py-20 bg-white">
      <div className="md:w-[90%] max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-5 items-start justify-between">
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className="col-span-3 md:col-span-4 lineBefore relative uppercase text-black text-sm mb-20 lineBefore">
              Our Chronicles
              <span className="dotsLine">
                <span className="dot bg-scPurple rounded-full" />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} right>
            <Link
              href="/case-studies"
              className="col-span-2 md:col-span-1 w-full text-black text-sm md:text-lg fontBold underline flex items-center justify-end hover:text-scPurple"
            >
              View all work {">>"}
              
              {/* <FaAnglesRight className="w-5 h-5 ml-1" /> */}
            </Link>
          </Fade>
        </div>
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <h3 className="text-black uppercase lg:w-2/3 text-2xl lg:text-[48px] lineHeightH1 fontBlack mb-20">
            Our past work stories of triumph.
          </h3>
        </Fade>
        <div className="block w-full">
          {workData?.map((work) => (
            <Fade
              delay={animation.delay}
              duration={animation.duration}
              key={`WorkImageKey${work?.id}`}
              bottom
            >
              <div className="scWorkBox mb-20 block w-full">
                <img
                  src={`/assets/images/workImg${work?.id}.jpeg`}
                  alt="Work"
                  className="w-full h-full object-cover"
                />
                <div className="overlayText flex items-center justify-center flex-col">
                  <h5 className="text-center text-white text-xl md:text-4xl mb-3 uppercase fontBlack">
                    {work?.title}
                  </h5>
                  <p className="text-white text-sm md:text-lg mb-3">
                    {work?.description}
                  </p>
                  <Link
                    href="/"
                    className="w-max text-white fontMedium hover:text-white text-sm md:text-lg px-5 md:px-10 py-2 flex items-center justify-end rounded-full bg-scPurple"
                  >
                    Read More {">>"}
                    {/* <FaAnglesRight className="w-3 h-3 ml-3" /> */}
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;

const workData = [
  { id: 1, title: `Manteiro's Growth Surge`, description: "Amazon / Shopify" },
  {
    id: 2,
    title: "powering the watch care co.",
    description: "Amazon / Shopify",
  },
  {
    id: 3,
    title: "achieving z-netics exceptional growth",
    description: "Amazon",
  },
];
