import Image from "next/image";
// import thankYou from "/assets/images/blog/thank-you.png";

const ThankYou = () => {
  return (
    <div className="flex flex-col w-screen text-center items-center justify-center gap-6 overflow-x-hidden bg-black text-white py-20 lg:py-36">
      <p className="uppercase font-black text-[56px] max-md:text-[32px] w-10/12 max-sm:w-11/12">
        Success is One Step Closer!
      </p>
      <div className=" h-56 relative max-md:h-40 w-[700px] md:w-full">
        <div className="absolute w-full h-full z-50 thankyou-gradient md:hidden"></div>
        <Image
          src={'/assets/images/blog/thank-you.png'}
          fill
          className="object-cover w-full"
        />
      </div>
      <div className="w-10/12 flex flex-col gap-2 max-sm:w-11/12">
        <p className="uppercase font-black text-[32px] max-md:text-[22px]">
          Thank You for Trusting Sckivar!
        </p>
        <p className="font-normal text-2xl max-md:text-[14px]">
          You&apos;ve made a choice that could reshape your Amazon journey. In the
          next few moments, check your inbox for a calendar invite and vital
          details about our forthcoming interaction. And a quick tip: glance
          through your &quot;Promotions&quot; tab or spam, just in case our mail took a
          detour.
        </p>
      </div>
      <div className="w-10/12 flex flex-col gap-2 max-sm:w-11/12">
        <p className="uppercase font-black text-[32px] max-md:text-[22px]">
          In the Meantime...
        </p>
        <p className="font-normal text-2xl max-md:text-[14px]">
          Stay connected with the pulse of Amazon strategies. &apos;Like&apos; and
          &apos;Follow&apos; our Facebook Page to dive deep into the latest in Amazon PPC,
          growth tactics, and e-commerce insights. Because every tip could be
          the one that skyrockets your sales.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
