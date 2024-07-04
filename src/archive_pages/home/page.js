"use client";
import HerosSetion from "@/components/home/HerosSetion";
import HomeWork from "@/components/home/HomeWork";
import HomeAgency from "@/components/home/HomeAgency";
import HomeCarousel from "@/components/home/HomeCarousel";
import HowCanHelp from "@/components/home/HowCanHelp";
import Vaccination from "@/components/home/Vaccination";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import { Fade } from "react-reveal";
import { animation } from "@/helper/helper";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])
  

  if (!isMounted) return null;
  return (
    <div className="scHomePage block w-full">
      <div className="homeSec relative">
        <HomeCarousel />
      </div>
      <div
        className="block w-full"
        style={{ background: "url(/assets/images/noiseGif.gif)" }}
      >
        <div className="max-w-7xl mx-auto px-5 flex justify-center">
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h4 className="uppercase fontBlack lineHeightH2 lg:leading-[47.04px] text-white w-[90%] lg:w-full text-lg md:text-[32px]  text-center py-10">
              Exceptional performance, Increased sales, better customer
              interaction, better brand design, heightened customer loyalty, and
              lasting results is what We deliver to Amazon brands. The agency
              you were looking for a long time.
            </h4>
          </Fade>
        </div>
      </div>
      <HomeAgency />
      <Vaccination />
      <HowCanHelp />
      <HerosSetion />
      <HomeWork />
      <HomeTestimonials />
    </div>
  );
}
