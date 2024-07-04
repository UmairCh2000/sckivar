import Link from "next/link";
import Image from "next/image";

import { IoMdTime } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import { popBlogs } from "./dummyData.js";

const PopularBlogs = () => {
  return (
    <div className="bg-white text-black flex flex-col justify-center items-center py-10">
      <div className="w-[90%] max-w-[1530px] flex flex-col items-center justify-center gap-8">
        <p className="font-medium md:text-sm text-[10px] border-b-black border-b pb-2 self-start pr-6 uppercase relative">
          Most Popular Blogs
          <span className=" h-2 w-2 bg-[#C317FF] absolute right-0 -bottom-1 rounded-full border border-white outline outline-1 outline-offset-1 outline-[#C317FF]" />
        </p>
        <div className="grid place-items-center md:place-items-start  py-4 xl:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 w-full">
          {popBlogs?.map((i) => (
            <div className=" h-full flex flex-col gap-4 max-w-[400px]" key={i?.id}>
              <div className="w-full h-[265px] flex justify-center items-center relative">
                <Image src={i?.mainPic} fill className="object-cover" />
                <p className="absolute font-light text-[10px] bg-[#C317FF] px-2 py-[1px] uppercase text-white bottom-2 right-2">
                  {i?.tag}
                </p>
              </div>
              <p className="lg:text-[22px] text-lg font-bold lg:leading-7 flex-1">
                {i?.title}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-2 mt-1">
                  <span className="w-7 h-7  relative">
                    <Image
                      src={i?.authorPic}
                      fill="true"
                      className="rounded-full"
                    />
                  </span>
                  <p className="text-sm font-medium">{i?.authorName}</p>
                </div>
                <div className="text-[#636363] font-medium text-sm flex justify-center items-center gap-1">
                  <span className="">
                    <IoMdTime />
                  </span>
                  <p className="">{i?.datePublished}</p>
                </div>
              </div>
              <p className="md:text-lg text-sm font-medium">
                {i?.content?.slice(0, 80)}...
              </p>
              <div className="text-sm font-bold flex justify-start items-center gap-1">
                <Link
                  href={`/blogs/${i?.id}`}
                  className="border-b border-black"
                >
                  Read More
                </Link>
                <IoIosArrowRoundForward className="text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBlogs;
