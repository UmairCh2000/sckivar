import React from "react";

import { popBlogs, recentBlogs } from "@/components/blog/dummyData";
import Image from "next/image";
import { Schedule_Discover_Call_Button } from "@/components/common/Schedule_Discover_Call_Button";

const SingleBlogPage = ({ params = { id: "1" } }) => {
  const blog = [...popBlogs, ...recentBlogs]?.find(
    (blog) => `${blog?.id}` === params?.id
  );

  const backgrounStyles = {
    background: `url(${blog?.mainPic}) no-repeat center center / cover`,
  };

  const markup = { __html: `${blog?.content}` };

  return (
    <div className="w-full flex flex-col items-center md:text-lg md:leading-[34px]">
      <div
        className="justify-center items-center w-full pb-12 lg:pb-8 h-[530px] text-white flex"
        style={backgrounStyles}
      >
        <div className="flex flex-col justify-end h-full w-[95%] max-w-[1500px] gap-5 lg:pb-10">
          <h2 className="text-2xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack text-white md:w-[90%] lg:w-[80%]">
            {blog?.title}
          </h2>
          <div className="flex lg:w-1/2 justify-start gap-5 lg:gap-0 lg:justify-between items-center">
            <div className="flex gap-4 lg:gap-6 items-center">
              <Image
                src={blog?.authorPic}
                height={40}
                width={40}
                className="rounded-full"
              />
              <span className="text-xs md:text-[16px] text-white font-extralight">
                {blog?.authorName}
              </span>
            </div>

            <div className="flex gap-3 lg:gap-6 items-center">
              <div className="h-2 w-2 bg-[#C317FF] rounded-full" />
              <span className="text-xs md:text-[16px] text-white font-extralight">
                {blog?.datePublished}
              </span>
            </div>

            <div className="flex gap-3 lg:gap-6 items-center">
              <div className="h-2 w-2 bg-[#C317FF] rounded-full" />
              <span className="text-xs md:text-[16px] text-white font-extralight">
                {blog?.tag}
              </span>
            </div>
          </div>
        </div>
      </div>

      {params.id != "1" && (
        <div
          className="bg-white text-lg font-medium leading-8 tracking-normal lg:leading-10 lg:tracking-wide w-[95%] max-w-[1500px] py-10 lg:py-20"
          dangerouslySetInnerHTML={markup}
        />
      )}
      {params.id === "1" && (
        <div className="bg-white text-lg font-medium leading-8 tracking-normal lg:leading-10 lg:tracking-wide w-[95%] max-w-[1500px] py-10 lg:py-20">
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              width: "100%",
              paddingBottom: "150px",
            }}
          >
            <span style={{ marginBottom: "20px" }}>
              In the dynamic world of e-commerce, especially on platforms like
              Amazon, building a brand has evolved into a complex art. The
              competitive landscape, particularly in the United States and the
              United Kingdom, has grown increasingly fierce. While the potential
              for success is immense, many brands find themselves grappling with
              relentless price wars, often initiated by Chinese competitors.
              <br />
              In this fierce arena where every product vies for attention,
              standing out isn&lsquo;t just a choice; it&lsquo;s a necessity.
              This is where our guide comes into play. Our strategies transcend
              the ordinary and embrace the extraordinary. We recognize that
              thriving on Amazon demands a meticulous approach, a deep dive into
              data, and a commitment to staying ahead of the curve.
              <br />
              In this guide, we unveil our arsenal of strategies, meticulously
              curated to help Amazon sellers build brands that not only survive
              but thrive amidst the chaos. From in-depth research methodologies
              that reach beyond conventional tools like Helium 10 to crafting
              compelling A+ Content, listing images, and storefronts, we leave
              no stone unturned in our quest to whip cash out of your
              customers&lsquo; wallets and turn visitors into devoted buyers.
              <br />
              But before we delve into the details of our comprehensive
              strategies, let&lsquo;s journey through the three pillars of
              Amazon brand success: Research, Design, and Marketing. Buckle up;
              it&lsquo;s a ride towards e-commerce excellence like no other.
              <br />
            </span>
            <h2
              style={{
                background: "#C317FF",
                fontSize: "30px",
                color: "white",
                padding: "10px",
                width: "max-content",
                paddingRight: "25px",
                fontWeight: "800",
                marginTop: "30px",
              }}
            >
              RESEARCH STRATEGIES:
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Product Market Analysis:
              </h3>
              <span>
                Comprehensive product research is essential on Amazon, and
                Sckivar&lsquo;s unique manual research approach ensures that
                your product stands out from the competition.
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Market Segmentation:
              </h3>
              <span>
                By pinpointing specific market segments, you can effectively
                target the right audience, increasing your odds of success.
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/assets/blog/image 17.png" alt="" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Competitor Analysis:
              </h3>
              <span>
                Meticulous competitor analysis uncovers invaluable insights,
                empowering your brand to make informed decisions and gain a
                competitive edge.
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Patent Check:
              </h3>
              <span>
                Safeguard your product development process from legal
                complications by conducting thorough patent checks.
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Niche Analysis:
              </h3>
              <span>
                Identify lucrative markets, assisting your brand in carving a
                distinctive niche within the competitive landscape.
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/assets/blog/image 18.png" alt="" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Retail Readiness Check:
              </h3>
              <span>
                An assessment that optimizes your listings, elevating your
                product&lsquo;s appeal to potential customers.
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h2
                style={{
                  background: "#C317FF",
                  fontSize: "30px",
                  color: "white",
                  padding: "10px",
                  width: "max-content",
                  paddingRight: "25px",
                  fontWeight: "800",
                  marginTop: "30px",
                }}
              >
                DESIGN STRATEGIES:
              </h2>
              <span>
                In the bustling marketplace, where millions of products vie for
                attention, first impressions can make all the difference.
                Specialize in creating memorable first impressions that resonate
                with your target audience.
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                A+ Content: Transforming Product Listings into Sales Machines
              </h3>
              <span>
                A+ Content is the secret weapon in the battle for customer
                attention. It&lsquo;s where products transform into captivating
                stories and ordinary listings evolve into engaging experience
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Storefront Design: Your Brand&lsquo;s Home on Amazon
              </h3>
              <span>
                Think of your online storefront as your brand&lsquo;s personal
                showroom. It&lsquo;s where your brand essence takes shape and
                shines brilliantly. Storefront designs are more than just
                aesthetics; they&lsquo;re strategically engineered to draw
                customers.
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: "space-around",
              }}
            >
              <img src="/assets/blog/EBC 1.png" alt="" />
              <img src="/assets/blog/Seeds-EBC3 1.png" alt="" />
              <img src="/assets/blog/HikingStick-EBC 1.png" alt="" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h2
                style={{
                  background: "#C317FF",
                  fontSize: "30px",
                  color: "white",
                  padding: "10px",
                  width: "max-content",
                  paddingRight: "25px",
                  fontWeight: "800",
                  marginTop: "30px",
                }}
              >
                THE ART AND SCIENCE OF AMAZON MARKETING
              </h2>
              <span>
                In today&lsquo;s dynamic Amazon landscape, where algorithms
                evolve and competition intensifies, your brand&lsquo;s destiny
                is shaped by the strategies you employ.{" "}
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Adaptive Marketing Strategy: Navigating Amazon&lsquo;s Shifting
                Terrain
              </h3>
              <span>
                In a dynamic ecosystem, keeping up with trends is essential.
                Craft strategies that go beyond the ordinary, leveraging
                sponsored products, brands, and display ads to maximize your
                brand&lsquo;s exposure.
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Beyond Amazon: Tapping into External Traffic Sources
              </h3>
              <span>
                Diversifying traffic sources extends beyond the platform,
                exploring opportunities in social media, search engines, and
                more.
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/assets/blog/image 19.png" alt="" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Competitor Intelligence: Staying One Step Ahead
              </h3>
              <span>
                Understanding your competitors is paramount in the competitive
                e-commerce world. Keep a watchful eye on your rivals, dissecting
                their strategies to uncover their sources.
              </span>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h3
                style={{ color: "black", fontSize: "22px", fontWeight: "700" }}
              >
                Profitable Advertising Campaigns: A Formula for Sales Explosion
              </h3>
              <span>
                Craft profitable sponsored ads and campaigns that deliver
                tangible results. Focus on maximizing your return on ad spend
                (ROAS) while optimizing ad placements, keywords, and budgets.
                <br />
                In the realm of e-commerce marketing, strategic approaches can
                help you navigate the intricacies of the platform, adapt to
                changes, and outmaneuver competitors. These strategies position
                your brand for exponential growth and long-term sustainability.
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/assets/blog/image 20.png" alt="" />
            </div>
            
            <Schedule_Discover_Call_Button />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBlogPage;
