import Link from 'next/link'
import React from 'react'
import { Fade } from "react-reveal";
import { animation } from "@/helper/helper";
import { Schedule_Discover_Call_Button } from '@/components/common/Schedule_Discover_Call_Button';

export const Section_01_Carousel = () => {
    return (
        <div
            className="block w-full "
            style={{ background: "url(/assets/images/noiseGif.gif)" }}
        >
            <div className="max-w-7xl mx-auto px-5 py-20 ">
                <Fade delay={animation.delay} duration={animation.duration} bottom>


                    <div className="space-y-10 pt-2">
                        <div className="space-y-4 text-center text-white">
                            <h6 className=" text-2xl">
                                Dear Amazon Sellers...
                            </h6>
                            <h4 className="uppercase fontBlack  text-white w-full md:w-[90%] lg:w-full text-3xl md:text-8xl   ">
                                we create amazon Designs That Turn Visitors into Devoted Customers
                            </h4>
                        </div>

                        <div className=" text-white text-center space-y-8 text-xl fontLight">
                            <p className=" leading-7 tracking-wider">
                                {`Design is not just about aesthetics; it's about strategy. We understand the Amazon landscape inside and out, and our designs are finely tuned to resonate with your target audience.`}
                            </p>
                            <p className=" leading-7 tracking-wider">
                                {`With every pixel we place, every image we craft, and every detail we refine, we're aiming to do one thing—open wallets. Our designs are engineered to whip cash out from your customers' wallets, driving your sales and revenue to new heights.`}
                            </p>
                            <p className=" leading-7 tracking-wider">
                                {`At Sckivar, we're in the business of turning ordinary Amazon brands into extraordinary success stories. Let us craft the designs that make the difference. Say goodbye to bleeding cash and sales; say hello to a brand that shines.`}
                            </p>
                        </div>

                        <div className="mx-auto w-full flex flex-col items-center">
                            {/* <Link
                                href="/#"
                                className=" w-max text-white fontMedium hover:text-white text-sm md:text-lg px-5 md:px-10 py-3 rounded-full bg-scPurple"
                            >
                                <span className="fontLight">Schedule your <strong> Free Discovery Call </strong> Now</span>
                                <FaAnglesRight className="w-3 h-3 ml-3" />
                            </Link> */}

                            <Schedule_Discover_Call_Button />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
