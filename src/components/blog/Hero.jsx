import Image from "next/image";

import "../../styles/_blog.scss";

const Hero = () => {
  return (
    <div className="blog-hero flex flex-col justify-center items-center w-full pb-12 h-[500px] xl:h-[750px] text-white">
      <div className="w-[90%] max-w-[1500px] pt-10 lg:pt-36 flex flex-col justify-center">
        <div className="text-white text-2xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack">
          <span className="relative mb-3">
            Explore the
            <span className="relative z-[10]">
              <span className="relative z-10"> Insights:</span>
              <Image
                src="/assets/images/blog/Vector.png"
                height={160}
                
                width={310}
                className="max-w-[200%] absolute hidden lg:block -bottom-3 left-1"
              />
            </span>
          </span>
          <br />
          <span className="relative">
            Dive into Our
            <span className="relative">
              {" "}
              Knowledge{" "}
              <Image
                src="/assets/images/blog/Vector1.png"
                height={150}
                width={370}
                className="absolute hidden lg:block left-4 z-[99]"
              />
            </span>
            Hub
          </span>
        </div>
        <p className="font-[200] pt-6 text-[14px] md:text-lg leading-5 xl:leading-[34px] tracking-wide xl:w-[95%]">
          2023 has been nothing short of a whirlwind in the world of Amazon. As
          we navigate the ever-changing landscape of e-commerce, Sckivar, the
          vanguard of Amazon Brand Management and Amazon PPC Advertising, has
          not only weathered the storm but thrived. Join us as we peel back the
          curtain on a remarkable journey through the last year, filled with
          insights, strategies, and triumphs. In these blog, we&apos;ll share
          our invaluable expertise in PPC advertising, Brand Strategy for Amazon
          sellers, unveil the tactics that drove unparalleled results, and
          outline the unique approach we bring to clients like you!
        </p>
      </div>
    </div>
  );
};

export default Hero;
