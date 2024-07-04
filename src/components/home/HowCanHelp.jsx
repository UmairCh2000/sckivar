import { animation } from "@/helper/helper";
import Link from "next/link";
import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Fade } from "react-reveal";
import CanHelpCard from "./CanHelpCard";
import { FaAnglesRight } from "react-icons/fa6";

const HowCanHelp = () => {
  return (
    <div
      className="relative scHowCanHelp block w-full pt-20 md:px-10 xl:px-0"
      style={{
        background:
          "url(/assets/images/noiseGif.gif)",
      }}
    >
      <div className="overlay absolute w-full h-full top-0 lef-0 "></div>
      <div className="image-container">
        <img
          src="/assets/images/globeBg.png"
          alt="Your Image"
          className="fading-image"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-5 items-start justify-between">
          <Fade delay={animation.delay} duration={animation.duration} left>
            <h6 className="col-span-3 md:col-span-4 lineBefore whiteLine relative uppercase text-white text-sm mb-20 lineBefore">
              How we help
              <span className="dotsLine">
                <span className="dot bg-scPurple rounded-full" />
              </span>
            </h6>
          </Fade>
          <Fade delay={animation.delay} duration={animation.duration} right>
            <Link
              href="/our-services"
              className="col-span-2 md:col-span-1 w-full text-white text-sm md:text-lg fontBold underline flex items-center justify-end hover:text-scPurple"
            >
              View all services{" "}
              <FaAnglesRight className="w-5 h-5 ml-1" />
            </Link>
          </Fade>
        </div>
      </div>
      <CanHelpCard
        title="Amazon Brand Management"
        description="Listings Optimization / Brand Registry / Seller Central
                Management"
        imageUrl="/assets/images/amazon.png"
        linkHash="amazon-brand-management"
      />
      <CanHelpCard
        title="Amazon PPC Advertising"
        description="SEO / Sponsored Products Management"
        imageUrl="/assets/images/amazonPPC.png"
        linkHash="amazon-ppc-advertising"
      />
      <CanHelpCard
        title="Brand Design"
        description="Amazon Product Page Creation / Amazon EBC / Amazon Storefront"
        imageUrl="/assets/images/designBrand.png"
        linkHash="brand-design"
      />
      <CanHelpCard
        title="Social Media Advertising"
        description="Facebook / Pinterest / Instagram / TikTok"
        imageUrl="/assets/images/socialMedia.png"
        linkHash="social-media-advertising"
      />
    </div>
  );
};

export default HowCanHelp;
