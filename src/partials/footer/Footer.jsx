"use client";
import {
  headerServicesLinks,
  headerSocialLinks,
  importantStuffLinks,
} from "@/helper/helper";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { MdOutlineChevronRight } from "react-icons/md";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <div className="w-full bg-[#0E0E0E] flex flex-col items-center">
      <div className="partnerImg py-4 w-full flex items-center">
        <div className="w-full md:w-[90%] max-w-[1320px] mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between">
            <Fade bottom>
              <img
                src="/assets/images/partnerImg1.png"
                alt="Partner"
                className="aspect-auto mb-3 md:mb-0 h-10 md:h-16 w-auto"
              />
            </Fade>
            <Fade bottom>
              <img
                src="/assets/images/partnerImg2.png"
                alt="Partner"
                className="aspect-auto mb-3 md:mb-0 h-10 md:h-14 w-auto"
              />
            </Fade>
            <Fade bottom>
              <img
                src="/assets/images/partnerImg3.png"
                alt="Partner"
                className="aspect-auto h-10 md:h-14 w-auto"
              />
            </Fade>
            <Fade bottom>
              <img
                src="/assets/images/partnerImg4.png"
                alt="Partner"
                className="aspect-auto h-10 md:h-14 w-auto"
              />
            </Fade>
          </div>
        </div>
      </div>
      <footer className="w-full block py-10 md:py-20 pb-6 bg-[#0E0E0E]">
        <div className="w-full md:w-[90%] max-w-7xl mx-auto px-4">
          <div className="w-full flex justify-between gap-10 pb-5 md:pb-10 md:border-b border-white">
            <div className="grid grid-cols-1 items-center w-full md:w-[35%]">
              <img
                src="/assets/svgs/logo.svg"
                alt=""
                className="w-32 md:w-40 h-auto block md:mb-8"
              />
              <h6 className="col-span-2 text-white lg:text-xl mb-4 order-1 md:order-none">
                <span className="font-semibold">Thrive or Dive?</span> The
                choice is yours.
                <br />
                Sckivar stands by you.
              </h6>
              <Link
                href="/form"
                className="text-white text-sm lg:text-xl border-b border-b-white hover:border-b-0 w-max flex items-center justify-end md:justify-start hover:text-scPurple font-medium"
              >
                Get Started {">>"}
                {/* <FaAnglesRight className="w-4 h-4 ml-1" /> */}
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 justify-between lg:w-[65%]">
              <div className="hidden md:block w-max">
                <h5 className="text-white fontBlack text-xl uppercase mb-6">
                  Services
                </h5>
                <div className="linksDiv w-full">
                  {headerServicesLinks?.map((link) => (
                    <Link
                      key={`FooterInternnalLinkKey${link?.id}`}
                      href={link?.link}
                      className="text-scGray mb-2 text-sm lg:text-xl hover:text-white block capitalize"
                    >
                      {link?.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:block w-max">
                <h5 className="text-white fontBlack text-xl uppercase mb-6">
                  important stuff
                </h5>
                <div className="linksDiv w-full">
                  {importantStuffLinks?.map((link) => (
                    <Link
                      key={`FooterStuffKey${link?.id}`}
                      href={link?.link}
                      className="text-scGray mb-2 text-sm lg:text-xl hover:text-white block"
                    >
                      {link?.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:block w-max">
                <h5 className="text-white fontBlack text-xl uppercase mb-6">
                  Follow
                </h5>
                <div className="linksDiv w-full">
                  {headerSocialLinks?.map((link) => (
                    <a
                      key={`FooterSocialKey${link?.id}`}
                      href={link?.link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-scGray mb-2 text-sm lg:text-xl hover:text-white block capitalize"
                    >
                      {link?.title}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:hidden">
                <dl className="space-y-5 divide-y divide-white/70 md:hidden">
                  <Disclosure as="div" className="pt-5">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-center justify-between text-left text-white">
                            <span className="text-sm fontBlack text-white uppercase">
                              Services
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <FaMinus
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              ) : (
                                <FaPlus
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className={`flex flex-col mt-2 pr-12 overflow-hidden transition-all duration-500 ease-in-out transform ${
                            open
                              ? "max-h-96 opacity-100 translate-y-0"
                              : "max-h-0 opacity-0 -translate-y-5"
                          }`}
                        >
                          {headerServicesLinks?.map((link) => (
                            <Link
                              key={`InternalMobileLink${link?.id}`}
                              href={link?.link}
                              className="w-max block text-sm text-scGray hover:text-scGray mb-2 capitalize"
                            >
                              {link?.title}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="pt-5">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-center justify-between text-left text-white">
                            <span className="text-sm fontBlack text-white uppercase">
                              Important Stuff
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <FaMinus
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              ) : (
                                <FaPlus
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className={`flex flex-col mt-2 pr-12 overflow-hidden transition-all duration-500 ease-in-out transform ${
                            open
                              ? "max-h-96 opacity-100 translate-y-0"
                              : "max-h-0 opacity-0 -translate-y-5"
                          }`}
                        >
                          {importantStuffLinks?.map((link) => (
                            <Link
                              key={`InternalMobileLink${link?.id}`}
                              href={link?.link}
                              className="w-max block text-sm text-scGray hover:text-scGray mb-2"
                            >
                              {link?.title}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="pt-5">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-center justify-between text-left text-white">
                            <span className="text-sm fontBlack text-white uppercase">
                              Follow
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <FaMinus
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              ) : (
                                <FaPlus
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel
                          as="dd"
                          className={`flex flex-col mt-2 pr-12 overflow-hidden transition-all duration-500 ease-in-out transform ${
                            open
                              ? "max-h-96 opacity-100 translate-y-0"
                              : "max-h-0 opacity-0 -translate-y-5"
                          }`}
                        >
                          {headerSocialLinks?.map((link) => (
                            <a
                              key={`FooterSocialKey${link?.id}`}
                              href={link?.link}
                              rel="noreferrer"
                              target="_blank"
                              className="text-scGray text-sm hover:text-scGray capitalize block mb-2"
                            >
                              {link?.title}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </dl>
              </div>
            </div>
          </div>
          <div className="belowFooter w-full block py-5">
            <Link
              href="/form"
              className="mb-10 mx-auto uppercase text-white hover:text-white  flex items-center fontBlack text-base md:text-xl pl-12 pr-3 py-3 bg-black w-max gap-5 rounded-xl EnterYourEmail"
            >
              Enter your email and sign up{" "}
              <span className="bg-[#0E0E0E] w-16 h-16 rounded-full flex items-center justify-center ml-6">
                <Image
                  width={20}
                  height={20}
                  src="/assets/svgs/rightArrowOutline.svg"
                />
              </span>
            </Link>
            <div className="w-full grid md:grid-cols-5 items-end gap-6 md:gap-10">
              <p className="text-center text-sm md:text-[17px] md:text-left text-scGray md:col-span-2">{`©2022 – Sckivar All rights reserved.`}</p>
              <p className="text-center text-sm md:text-[17px] md:text-end text-scGray md:col-span-3">
                {`We put a lot of love and hard work into our creations, so please
                don't be a copycat. It's not cool and we'll have to send our
                team of ninja lawyers after you. Kidding... or are we?`}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
