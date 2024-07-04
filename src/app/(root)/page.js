"use client";
import HerosSetion from "@/components/home/HerosSetion";

import { Fade } from "react-reveal";
import { animation } from "@/helper/helper";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Testimonials from "@/components/landing/Testimonials";
import { Section_01_Carousel } from "@/components/revamp-pages-components/home/Section_01_Carousel";
import { Section_02_About_Picture } from "@/components/revamp-pages-components/home/Section_02_About_Picture";
import { Section_04_Heros_Setion } from "@/components/revamp-pages-components/home/Section_04_Heros_Setion";
import { Section_06_FAQs } from "@/components/revamp-pages-components/home/Section_06_FAQs";
import { Section_05_Testimonials } from "@/components/revamp-pages-components/home/Section_05_Testimonials";
import { Section_03_Design_Portfolio } from "@/components/revamp-pages-components/home/Section_03_Design_Portfolio";
// import HomeTestimonials from "@/components/home/HomeTestimonials";

export default function Home() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])


    if (!isMounted) return null;
    return (
        <div className="scHomePage block w-full">



            <Section_01_Carousel />
            <Section_02_About_Picture />

            <Section_03_Design_Portfolio />

            
            <Section_04_Heros_Setion />
            <Section_05_Testimonials />
            <Section_06_FAQs />


            {/* <HomeAgency />
            <Vaccination />
            <HowCanHelp />
            <HerosSetion />
            <HomeWork />*/}
            {/* <HomeTestimonials />  */}
        </div>
    );
}
