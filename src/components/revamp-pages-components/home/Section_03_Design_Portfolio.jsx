import { Schedule_Discover_Call_Button } from "@/components/common/Schedule_Discover_Call_Button";
import { animation } from "@/helper/helper";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Fade } from "react-reveal";
import { useSwipeable } from "react-swipeable";
// import ArrowIcon from "/assets/images/Icon/right-arrow.png";

const images_arr = [
  {
    group: "A",
    images: [
      {
        url: "/assets/images/Banner-Images/Group24/img1.png",
        label: "Listing Images & EBC Design ",
      },
      {
        url: "/assets/images/Banner-Images/Group24/img2.png",
        label: "A+ Content Design",
      },
    ],
  },
  {
    group: "B",
    images: [
      {
        url: "/assets/images/Banner-Images/Group22/img1.png",
        label: "Listing Images & EBC Design ",
      },
      {
        url: "/assets/images/Banner-Images/Group22/img2.png",
        label: "A+ Content Design",
      },
      {
        url: "/assets/images/Banner-Images/Group22/img3.png",
        label: "Listing Images & EBC Design ",
      },
      {
        url: "/assets/images/Banner-Images/Group22/img4.png",
        label: "Listing Images & EBC Design ",
      },
    ],
  },
  {
    group: "C",
    images: [
      {
        url: "/assets/images/Banner-Images/Group20/img1.png",
        label: "Listing Images & EBC Design ",
      },
      {
        url: "/assets/images/Banner-Images/Group20/img2.png",
        label: "A+ Content Design",
      },
    ],
  },
  {
    group: "D",
    images: [
      {
        url: "/assets/images/Banner-Images/Group21/img1.png",
        label: "Listing Images & EBC Design ",
      },
      {
        url: "/assets/images/Banner-Images/Group21/img2.png",
        label: "A+ Content Design",
      },
    ],
  },
  {
    group: "E",
    images: [
      {
        url: "/assets/images/Banner-Images/Group19/img1.png",
        label: "Listing Images & EBC Design ",
      },
      {
        url: "/assets/images/Banner-Images/Group19/img2.png",
        label: "A+ Content Design",
      },

      {
        url: "/assets/images/Banner-Images/Group19/img3.png",
        label: "Listing Images & EBC Design ",
      },
    ],
  },

  {
    group: "F",
    images: [
      {
        url: "/assets/images/Banner-Images/Group23/img1.png",
        label: "Listing Images & EBC Design ",
      },
      {
        url: "/assets/images/Banner-Images/Group23/img2.png",
        label: "A+ Content Design",
      },
    ],
  },
];

export const Section_03_Design_Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (group) => {
    setSelectedGroup(group);
    setIsOpen(true);
    setCurrentIndex(1); // Start with the second image since the first is already displayed
    document.body.style.overflow = "hidden"; // Disable scrolling on modal open
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedGroup(null);
    document.body.style.overflow = ""; // Enable scrolling on modal close
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedGroup.images.length - 1 ? 1 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 1 ? selectedGroup.images.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="bg-white" id="portfolio-image-listing">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <Fade delay={animation.delay} duration={animation.duration} bottom>
          <div className="text-center space-y-10">
            <div className="space-y-5">
              <h1 className="text-5xl uppercase fontBlack">
                Our Design Portfolio Raises the Bar
              </h1>
              <p className="tracking-wider">
                From product listings that demand attention to A+ content that
                leaves jaws on the floor, each creation in our portfolio is a
                masterpiece in its own right.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
              {images_arr.map((group, ind) => (
                <div
                  key={ind}
                  className="relative group cursor-pointer flex justify-center"
                  onClick={() => openModal(group)}
                >
                  <div>
                    <img
                      src={group.images[0].url}
                      alt={group.images[0].label}
                    />
                  </div>
                  <div className="absolute transform-gpu transition-transform ease-in-out duration-300 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-80 top-0 bottom-0 left-0 right-0 hidden group-hover:block py-6 px-5">
                    <div className="h-full grid items-end">
                      <div className="flex items-center justify-between space-x-9">
                        <h1 className="text-white fontBlack text-xl text-left">
                          {group.images[0].label}
                        </h1>
                        <div className="text-scPurple bg-white p-2 rounded-full">
                          <MdNavigateNext size={30} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Schedule_Discover_Call_Button />
            </div>
          </div>
        </Fade>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="fixed">
              <div className="relative">
                <button
                  className="absolute top-2 right-5 text-white text-3xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <img
                  src={selectedGroup.images[currentIndex].url}
                  alt={selectedGroup.images[currentIndex].label}
                  className="image-style"
                />
                <div>
                  <button
                    className="absolute left-5 bottom-5 text-white text-3xl"
                    onClick={prevImage}
                  >
                    <img
                      src={"/assets/images/Icon/right-arrow.png"}
                      alt=""
                      style={{
                        height: "20px",
                        width: "20px",
                        transform: "rotate(180deg)",
                      }}
                    />
                  </button>
                  <button
                    className="absolute right-5 bottom-5 text-white text-3xl"
                    onClick={nextImage}
                  >
                    <img
                      src="/assets/images/Icon/right-arrow.png"
                      alt=""
                      style={{
                        height: "20px",
                        width: "20px",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
