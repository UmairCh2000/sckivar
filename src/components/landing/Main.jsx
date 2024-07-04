"use client"
import React from "react";
import { Dynamic_Text_Transaction } from "./Dynamic_Text_Transaction";
import { Schedule_Discover_Call_Button } from "../common/Schedule_Discover_Call_Button";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full pb-5 text-white">
      <div className="w-full flex justify-center pt-36" style={{
        background:
          'url(/assets/images/noiseGif.gif)',
      }}>
        <div className="w-[90%] max-w-6xl lg:pt-6 pb-20 flex flex-col gap-2 lg:gap-12">
          <div className="text-white text-6xl lineHeightH1 !uppercase fontBlack text-center md:text-left hidden lg:flex lg:flex-col gap-5 mb-5 ">
            <h2>AMAZON ADS ARE MORE</h2>
            <div className="md:ms-[19.5%]">
              <h2 className="inline-block">THAN JUST<span className="inline-block">
                <Dynamic_Text_Transaction /></span></h2>
            </div>
          </div>
          <div className="text-white max-w-[70%] text-4xl text-center lineHeightH1 !uppercase fontBlack block lg:hidden mx-auto">
            AMAZON ADS ARE MORE THAN JUST NUMBERS.
          </div>

          <div className="font-[100] pt-6 text-lg md:text-md mb-8 lg:mb-2 text-center space-y-6">
            <p className="tracking-wide !leading-[25px] lg:tracking-wider lg:!leading-[30px]">
              {`Imagine being an Amazon seller who’s barely making ends meet, dealing with crappy sales, ad campaigns and a ton of headaches. You're frustrated and hopeless, and you feel like giving up.`}
            </p>
            <p className="tracking-wide !leading-[25px] lg:tracking-wider lg:!leading-[30px]">
              {`We've been there. We understand how it feels to watch your sales and revenue plummet on Amazon. The sleepless nights, the endless tweaking of your product listings, the frustration of not seeing any results. It's like your business is bleeding out, and no matter what you do, you can't stop it.`}
            </p>
            <p className="tracking-wide !leading-[25px] lg:tracking-wider lg:!leading-[30px]">
              {`But here's where we come into play. We delve into your brand's nuances: its voice, inventory, profit margins, and even the tiniest detail of your customer journey. Because at Sckivar, your growth isn't just a metric—it's a mission.`}
            </p>
          </div>

          {/* <div className="w-full flex justify-center">
            <button className="bg-[#C317FF] rounded-full px-8 py-3 lg:px-12 lg:py-4 text-[14px] lg:text-lg font-light text-white">
             <span className="fontLight">Schedule your</span>{" "}
              <span className="fontBold">Free Discovery Call</span> Now
            </button>
          </div> */}

          <Schedule_Discover_Call_Button />
        </div>
      </div>

      <div className="bg-black w-full flex justify-center py-16">
        <div className="w-[90%] max-w-[1400px] flex flex-col gap-5 lg:gap-0">
          <h3 className="text-white text-[32px] lg:text-6xl !uppercase fontBlack lg:w-[75%] lg:!leading-[82px] leading-normal z-10">
            A DEDICATED TEAM WITH ONE FOCUS: YOU!
          </h3>
          <div className="w-full flex  flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between items-start lg:mb-14">
            <p className="font-[100] h-max md:w-[45%] w-full lg:pt-16 text-lg md:text-xl tracking-wide !leading-[25px] lg:tracking-wide lg:!leading-[35px] lg:mt-5">
              We don&apos;t believe in spreading ourselves thin. We&apos;re not a factory
              churning out generic campaigns. Our select team of Amazon PPC
              experts gives your account the full attention it deserves. No
              overseas handoffs, no dilution of expertise—just pure, targeted
              strategy for your brand.
            </p>
            <div className="w-full md:w-1/2 lg:relative">
              <img
                src="/assets/images/ppc.gif"
                className="ml-auto w-full lg:w-[600px]"
                alt="ppc"
              />
            </div>
          </div>
          
          {/* <div className="w-full flex justify-center lg:relative z-20">
            <button className="bg-[#C317FF] rounded-full px-8 py-3 lg:px-12 lg:py-4 text-[14px] lg:text-lg font-light text-white">
             <span className="fontLight">Schedule your</span>{" "}
              <span className="fontBold">Free Discovery Call</span> Now
            </button>
          </div> */}

          <Schedule_Discover_Call_Button />
        </div>
      </div>

      <div className="bg-white w-full flex justify-center py-20">
        <div className="w-[90%] max-w-[1400px] flex flex-col gap-7 lg:gap-10">
          <h3 className="text-black text-4xl lg:text-6xl !uppercase fontBlack !lg:leading-[60px]">
            FULL-FUNNEL MASTERY AT ITS PEAK
          </h3>
          <p className="font-[100] text-black w-full text-lg tracking-wide !leading-[25px] lg:tracking-normal lg:!leading-[34px] ">
            The A10 algorithm is Amazon&apos;s labyrinth, always evolving, always
            challenging. Routine strategies lose their edge quickly. It goes
            beyond mere clicks or selected keywords; it&apos;s about delving deep
            into the A10&apos;s intricacies, Our approach isn&apos;t about just setting up
            ads. We sculpt a comprehensive PPC narrative that&apos;s attuned to the
            A10&apos;s rhythm. By bridging top-of-the-funnel awareness with
            conversion, we craft customer journeys that navigate and excel
            within Amazon&apos;s complex algorithmic world, ensuring optimal reach,
            cost efficiency, and robust sales.
          </p>
          <div className="lg:mt-4 w-full flex justify-center mb-4">
            <img
              src="/assets/images/pyramid.png"
              className="w-full max-w-[1000px] "
              alt="ads"
            />
          </div>
          <div className="w-full flex flex-col gap-4 mt-10 lg:mt-0">
            <h3 className="text-black text-2xl lg:text-[32px] !lg:leading-[60px] !uppercase fontBlack">
              Why Our Funnel Matters?
            </h3>
            <p className="font-[100] text-black w-full text-lg tracking-wide !leading-[25px] lg:tracking-wider lg:!leading-[34px]">
              While others stop at conversions, we believe in cultivating
              relationships. Our comprehensive approach ensures we&apos;re not just
              targeting sales, but building trust, loyalty, and brand love.
            </p>
          </div>
          {/* <div className="w-full flex justify-center">
            <button className="bg-[#C317FF] rounded-full px-8 py-3 lg:px-12 lg:py-4 text-[14px] lg:text-[22px] font-light text-white">
              Schedule your{" "}
              <span className="font-extrabold">Free Discovery Call</span> Now
            </button>
          </div> */}

          <Schedule_Discover_Call_Button />
        </div>
      </div>
    </div>
  );
};

export default Main;
