import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="bg-green text-white   absolute left-4  z-50 bottom-[40%]
   font-bold transform    rounded-full h-8 w-8  flex items-center justify-center  shadow-lg  text-2xl      "
    onClick={onClick}
  >
    &lt;
  </button>
);

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute bg-green   text-white right-4 bottom-[40%] transform    rounded-full text-2xl   h-8 w-8 flex items-center justify-center shadow-lg font-bold    "
    onClick={onClick}
  >
    &gt;
  </button>
);
const Explorecard = ({ items, className, latest, image, index }) => {
  const settingsCard = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div
      key={index}
      className="xsm:min-w-[130px] sm:min-w-[200px] relative font-noto "
    >
      <div
        target="_blank"
        className={` w-full   flex flex-col rounded-xl overflow-hidden  border-[1px] border-gray-200  ${className}`}
      >
        {/* <div className="flex items-center col-span-2">
          <Image
            src={"/Link.png"}
            className="w-full max-h-[300px] h-auto"
            sizes="100vw"
            height={0}
            width={0}
            alt={"image"}
          />
        </div> */}
        <div className="w-full  ">
          <Slider {...settingsCard}>
            {[2, 3, 4].map((image, index) => (
              <div className="w-full" key={index}>
                <Image
                  src={"/Link.png"}
                  alt={"Image"}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className="w-full"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="col-span-6   p-4 flex flex-col justify-between leading-normal">
          <div className="mb-4 font-noto">
            {/* <p>{newsDetail?.title}</p> */}
            <h1 className="text-gray-900 font-bold !line-clamp-1 text-sm md:text-lg mb-2 break-all">
              $709,000
            </h1>
            <p className="text-[#9691A4] text-xl line-clamp-2">
              City Plaza, 123 Main Street, Metropolis, Superstate, United
              States, 54321
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start  sm:items-center sm:justify-around gap-4">
            <div className="text-sm flex items-center w-full  gap-2 font-noto">
              <div className="flex flex-col gap-2   ">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <p className="text-[#9691A4]">{"#g4353tywe456"}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-[#9691A4]">Condo</p>
                  </div>
                </div>
                <p className=" text-lg  ">Metropolis, Superstate,</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorecard;
