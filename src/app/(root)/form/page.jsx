"use client";
import { animation } from "@/helper/helper";
import { useRouter } from "next/navigation";
import { Fade } from "react-reveal";
import { useState } from "react";
import Head from "next/head";
import CalendlyEmbed from "@/components/form/CalendlyEmbed";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  websiteUrl: "",
  service: "",
};
const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const handle_change_handle = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, firstName, lastName, phoneNumber, websiteUrl, service } =
      formData;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !websiteUrl ||
      !service
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setErrorMessage("");
    window.location.href = "https://calendly.com/sckivarllc/discoverycall";

    try {
      const res = await fetch("api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (res.ok) {
        router.push("/thank-you");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formPage block w-full">
      <div
        className="scOurteamBannerDiv block w-full pt-72 pb-36"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/aboutBanner.gif) no-repeat center/cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex md:items-center justify-center flex-col w-full">
            <Fade delay={animation.delay} duration={animation.duration} top>
              <h2 className="textStroke mb-3 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack">
                your free 60 minutes Call
                <img
                  src="/assets/svgs/formlineSvg.svg"
                  alt="Line"
                  className="lineSvg absolute"
                />
              </h2>
              <h3 className="text-white mb-12 text-3xl md:text-4xl lg:text-scH1 lineHeightH1 uppercase fontBlack">
                to make a
                <span className="relative">
                  <span className="z-10 relative"> positive </span>
                  <img
                    src="/assets/svgs/circleLine.svg"
                    alt="Line"
                    className="absolute circleLine"
                  />
                </span>
                change
                <div className="h-2 w-2 md:h-3 md:w-3 ml-1 inline-block rounded-full bg-[#C317FF]" />
              </h3>
            </Fade>
          </div>
        </div>
      </div>

      <div className="block w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <form className="block w-full">
            <Fade delay={animation.delay} duration={animation.duration} left>
              <h4 className="uppercase text-scBlack fontBlack mb-10 text-xl md:text-3xl">
                Tell us about yourself
              </h4>
            </Fade>
            <div className="block w-full mb-5">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <label
                  htmlFor="firstName"
                  className="text-scBlack text-sm md:text-[20px] md:leading-[28px] mb-2 block"
                >
                  {`What's Your First Name?`}{" "}
                  <span className="text-red-700 ml-1 inline-block">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="text-sm md:text-base w-full block border border-scBlack p-2"
                  required
                  value={formData.firstName}
                  onChange={handle_change_handle}
                />
              </Fade>
            </div>
            <div className="block w-full mb-5">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <label
                  htmlFor="lastName"
                  className="text-scBlack text-sm md:text-[20px] md:leading-[28px] mb-2 block"
                >
                  {`What's Your Last Name?`}
                  <span className="text-red-700 ml-1 inline-block">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="text-sm md:text-base w-full block border border-scBlack p-2"
                  required
                  value={formData.lastName}
                  onChange={handle_change_handle}
                />
              </Fade>
            </div>
            <div className="block w-full mb-5">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <label
                  htmlFor="email"
                  className="text-scBlack text-sm md:text-[20px] md:leading-[28px] mb-2 block"
                >
                  {`What's Your Email Address?`}
                  <span className="text-red-700 ml-1 inline-block">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="text-sm md:text-base w-full block border border-scBlack p-2"
                  required
                  value={formData.email}
                  onChange={handle_change_handle}
                />
              </Fade>
            </div>
            <div className="block w-full mb-5">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <label
                  htmlFor="phone"
                  className="text-scBlack text-sm md:text-[20px] md:leading-[28px] mb-2 block"
                >
                  {`What's Your Phone Number?`}
                  <span className="text-red-700 ml-1 inline-block">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phone"
                  placeholder="Please add Country Code eg. +1 US, +61 AU, +44 UK"
                  className="text-sm md:text-base w-full block border border-scBlack p-2"
                  required
                  value={formData.phoneNumber}
                  onChange={handle_change_handle}
                />
              </Fade>
            </div>
            <div className="block w-full mb-5">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <label
                  htmlFor="url"
                  className="text-scBlack text-sm md:text-[20px] md:leading-[28px] mb-2 block"
                >
                  {`What's Your Amazon Store / ASIN URL / Website URL?`}
                  <span className="text-red-700 ml-1 inline-block">*</span>
                </label>
                <input
                  type="text"
                  name="websiteUrl"
                  id="url"
                  className="text-sm md:text-base w-full block border border-scBlack p-2"
                  required
                  value={formData.websiteUrl}
                  onChange={handle_change_handle}
                />
              </Fade>
            </div>
            <div className="block w-full mb-5">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <label
                  htmlFor="inquiring"
                  className="text-scBlack text-sm md:text-[20px] md:leading-[28px] mb-2 block"
                >
                  Which services are you inquiring about?
                  <span className="text-red-700 ml-1 inline-block">*</span>
                </label>
                <select
                  name="service"
                  id="inquiring"
                  className="text-sm md:text-base w-full block border border-scBlack p-2"
                  required
                  value={formData.service}
                  onChange={handle_change_handle}
                >
                  <option disabled value="">
                    Please Select...
                  </option>
                  <option value="AMAZON-BRAND-MANAGEMENT">
                    Amazon Listing Images
                  </option>
                  <option value="Amazon-PPC-Advertising">
                    Amazon PPC Advertising
                  </option>
                  <option value="Amazon A+ Design">Amazon A+ Design</option>
                  <option value="Amazon Storefront Design">
                    Amazon Storefront Design
                  </option>
                  <option value="Complete Design Package">
                    Complete Design Package
                  </option>
                </select>
              </Fade>
            </div>
            {errorMessage && (
              <div className="text-red-700 mb-5">{errorMessage}</div>
            )}
            <div className="w-full flex items-center justify-center mt-10">
              <Fade
                delay={animation.delay}
                duration={animation.duration}
                bottom
              >
                <button
                  onClick={handleSubmit}
                  className="bg-scPurple px-9 py-4 text-center text-white text-sm border border-scPurple hover:bg-transparent hover:text-scPurple"
                >
                  BOOK MY CALL
                </button>
              </Fade>
            </div>
          </form>
        </div>
      </div>

      <div
        className="scTalent block w-full py-20"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(/assets/images/aboutBanner.gif) no-repeat center/cover",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <Fade delay={animation.delay} duration={animation.duration} bottom>
            <h3 className="text-white uppercase fontBlack text-center text-4xl">
              get a free amazon listing audit by booking a call with our
              specialist
            </h3>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Form;
