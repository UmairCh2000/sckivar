"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import { BsChevronDoubleRight } from "react-icons/bs";
import HeaderLink from "./HeaderLink";
import HeaderSocialLink from "./HeaderSocialLink";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  headerInternalLinks,
  headerInternalLinksWithBlogs,
  headerServicesLinks,
  headerSocialLinks,
} from "@/helper/helper";

export default function Header() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen2, setIsOpen2] = useState(false);

  const disclosureRef = useRef(null);

  const on_close_handle = (close_func) => {
    setIsOpen1(false);
    setIsOpen2(false);
    close_func();
  };

  return (
    <div
      ref={disclosureRef}
      className={`${
        isOpen1 || isOpen2
          ? "bg-gradient-to-b from-black to-transparent"
          : "bg-gradient-to-b from-black to-transparent"
      } shadow absolute top-0 left-0 z-[999] w-full block `}
    >
      <div
        className="absolute top-0 w-full h-10 bg-none "
        style={{ filter: "drop-shadow(0px 26px 28px #000000) " }}
      />
      <Disclosure
        autoFocus={true}
        as="nav"
        className={`navHeader bg-scBlack ${
          isOpen1 || isOpen2 ? "lg:bg-scBlack" : "md:bg-transparent"
        }`}
      >
        {({ open, close }) => (
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
              {isOpen1 || isOpen2 ? (
                <div
                  onClick={() => on_close_handle(close)}
                  className="bg-black h-[400dvh] overflow-hidden absolute w-[100%] right-0 left-0 bottom-0 top-0 opacity-10 -z-50"
                ></div>
              ) : null}

              <div className="w-full flex h-16 items-center justify-between">
                <div className="-ml-2 mr-2 flex items-center justify-between md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <Link href="/" className="block ">
                  <img
                    className="block h-5 md:h-8 w-auto"
                    src="/assets/svgs/logo.svg"
                    alt="Company Logo"
                  />
                </Link>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover>
                    {({ open }) => (
                      <>
                        <Popover.Button className="flex items-center fontBold text-white uppercase text-sm lg:text-lg hover:text-scPurple focus:outline-none">
                          <span
                            onClick={() => {
                              setIsOpen1(!isOpen1);
                              setIsOpen2(false);
                            }}
                          >
                            About
                          </span>
                          {open ? (
                            <ChevronUpIcon
                              className="ml-2 h-5 w-5"
                              onClick={() => {
                                setIsOpen1(false);
                                setIsOpen2(false);
                              }}
                            />
                          ) : (
                            <ChevronDownIcon
                              className="ml-2 h-5 w-5"
                              onClick={() => {
                                setIsOpen1(true);
                                setIsOpen2(false);
                              }}
                            />
                          )}
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-black shadow-lg md:block">
                            {({ close }) => (
                              <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-3 sm:gap-8 sm:px-6 sm:py-8 md:py-10">
                                <div className="block w-full">
                                  <h5 className="text-white uppercase lineBefore whiteLine headerLine mb-10 text-sm w-full">
                                    About us
                                    <span className="dotsLine">
                                      <span className="dot bg-scPurple rounded-full" />
                                    </span>
                                  </h5>
                                  <div className="flex flex-col w-full">
                                    {headerInternalLinks?.map((link) => (
                                      <HeaderLink
                                        onClick={() => on_close_handle(close)}
                                        key={`InternalLink${link?.id}`}
                                        title={link?.title}
                                        link={link?.link}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <div className="block w-full">
                                  <h5 className="text-white uppercase lineBefore whiteLine headerLine mb-10 text-sm w-full">
                                    Connect
                                    <span className="dotsLine">
                                      <span className="dot bg-scPurple rounded-full" />
                                    </span>
                                  </h5>
                                  <div className="flex flex-col w-full">
                                    {headerSocialLinks?.map((link) => (
                                      <HeaderSocialLink
                                        onClick={() => on_close_handle(close)}
                                        key={`HeaderSocialLink${link?.id}`}
                                        title={link?.title}
                                        link={link?.link}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <div className="block w-full">
                                  <h5 className="text-white uppercase lineBefore whiteLine headerLine mb-10 text-sm w-full">
                                    Resources
                                    <span className="dotsLine">
                                      <span className="dot bg-scPurple rounded-full" />
                                    </span>
                                  </h5>
                                  <div className="flex flex-col w-full">
                                    <HeaderLink
                                      title="Blogs"
                                      link="/blogs"
                                      onClick={() => on_close_handle(close)}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover>
                    {({ open }) => (
                      <>
                        <Popover.Button className="flex items-center fontBold text-white uppercase text-sm lg:text-lg hover:text-scPurple focus:outline-none">
                          <span
                            onClick={() => {
                              setIsOpen2(!isOpen2);
                              setIsOpen1(false);
                            }}
                          >
                            What we do
                          </span>
                          {open ? (
                            <ChevronUpIcon
                              className="ml-2 h-5 w-5"
                              onClick={() => {
                                setIsOpen2(false);
                                setIsOpen1(false);
                              }}
                            />
                          ) : (
                            <ChevronDownIcon
                              className="ml-2 h-5 w-5"
                              onClick={() => {
                                setIsOpen2(true);
                                setIsOpen1(false);
                              }}
                            />
                          )}
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-black shadow-lg md:block">
                            {({ close }) => (
                              <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-1 sm:gap-8 sm:px-6 sm:py-8 md:py-10">
                                <div className="block w-full">
                                  <h5 className="text-white uppercase lineBefore whiteLine mb-10 text-sm w-full">
                                    Services
                                    <span className="dotsLine">
                                      <span className="dot bg-scPurple rounded-full" />
                                    </span>
                                  </h5>
                                  <div className="grid grid-cols-2 gap-x-10 w-full">
                                    {headerServicesLinks?.map((link) => (
                                      <HeaderLink
                                        onClick={() => on_close_handle(close)}
                                        key={`HeaderServicesLink${link?.id}`}
                                        title={link?.title}
                                        link={link?.link}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Link
                    href="/case-studies"
                    className="fontBold text-white uppercase text-sm lg:text-lg hover:text-scPurple"
                    onClick={() => {
                      setIsOpen2(false);
                      setIsOpen1(false);
                    }}
                  >
                    Case studies
                  </Link>
                </Popover.Group>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/form">
                      <button
                        type="button"
                        className="hidden relative md:inline-flex items-center rounded-md border border-transparent bg-scPurple px-5 py-1 fontBold text-lg text-white focus:outline-none"
                      >
                        Get Started <FaAnglesRight className="ml-2" />
                      </button>
                    </a>
                    <Link href="/form">
                      <button
                        type="button"
                        className="relative flex md:hidden items-center justify-center border border-scPurple bg-transparent w-7 h-7 rounded-full fontBold text-white focus:outline-none"
                      >
                        <FaAnglesRight className="fontBold " />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-4 sm:px-6 pt-2 pb-10">
                <dl className="mt-10 space-y-5 divide-y divide-white/70">
                  <Disclosure as="div" className="pt-5">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-center justify-between text-left text-white">
                            <span className="text-sm fontBlack text-white uppercase">
                              About
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
                          className="flex flex-col mt-2 pr-12"
                        >
                          {headerInternalLinksWithBlogs?.map((link) => (
                            <Link
                              key={`InternalMobileLink${link?.id}`}
                              href={link?.link}
                              className="w-max block text-sm text-scGray hover:text-scGray mb-2"
                              onClick={() => on_close_handle(close)}
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
                              What we do
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
                          className="flex flex-col mt-2 pr-12"
                        >
                          {headerServicesLinks?.map((link) => (
                            <Link
                              key={`InternalMobileLink${link?.id}`}
                              href={link?.link}
                              className="w-max block text-sm text-scGray hover:text-scGray mb-2 capitalize"
                              onClick={() => on_close_handle(close)}
                            >
                              {link?.title}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <div className="pt-5">
                    <Link
                      href="/case-studies"
                      className="text-sm fontBlack text-white hover:text-white uppercase"
                      onClick={() => on_close_handle(close)}
                    >
                      case studies
                    </Link>
                  </div>
                  <div className="pt-5 flex items-center justify-center flex-wrap w-full">
                    {headerSocialLinks?.map((link, ind) => (
                      <span key={ind}>
                        {ind !== 0 && (
                          <span className="mx-2 text-scGray">|</span>
                        )}
                        <a
                          href={link?.link}
                          rel="noreferrer"
                          target="_blank"
                          className=" text-scGray text-sm hover:text-scGray capitalize"
                          onClick={() => on_close_handle(close)}
                        >
                          {link?.title}
                        </a>{" "}
                      </span>
                    ))}
                  </div>
                </dl>
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
