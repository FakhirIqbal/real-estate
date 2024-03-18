import React from "react";
import Button from "./Button";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

function Footer() {

  const images = [
    "footer1.jpg",
    "footer5.jpg",
    "footer6.jpg",
    "footer3.jpg",
    "footer2.jpg",
    "footer4.jpg",
  ];
  return (
    <>
      <div className="flex sm:grid grid-cols-6 relative">
        {images.map((item, index) => (
          <div key={index}>
            <Image
              className={"w-full h-[200px] object-cover"}
              src={item}
              sizes={"100vw"}
              width={0}
              height={0}
              alt={"image"}
            />
          </div>
        ))}
        <div className="">
          <div className="bg-white mx-10 sm:mx-0 px-14 py-8 sm:py-12 absolute right-0 top-32 sm:-bottom-[150px] text-center text-sm">
            <p className=" sm:text-xl sm:leading-8">
              Follow me on Instagram for the latest <br /> listings, market
              trends, and tips for buying <br /> and selling your home.
            </p>
            <h1 className="text-3xl mt-2 text-semibold uppercase">
              @Jess.Realty
            </h1>
          </div>
        </div>
      </div>
      <div className="!text-white  pt-20 px-4 xl:px-0 bg-green ">
        <div className="max-w-screen-lg flex flex-col sm:grid grid-cols-3 gap-4 items-center  mx-auto w-full py-[120px]">
          <div className=" flex flex-col justify-between">
            <div className={"!mb-6 ml-8 text-whtie font-semibold"}>
              <h1 className={"text-2xl uppercase font-cardo "}>
                Jessica Bansal
              </h1>
              <p className="text-sm pl-12">REAL ESTATE</p>
            </div>

            <div className="text-sm sm:text-base text-center sm:text-start font-light sm:font-normal space-y-1">
              {[
                "eXp  Realty",
                "#1500 - 701,",
                "West Georgia Street",
                "Vancouver, British Columbia",
                "V7Y1G5",
                ,
              ].map((items, index) => (
                <p className="  " key={index}>
                  {items}
                </p>
              ))}
              {/* <p className="font-medium !mt-6 hover:cursor-pointer">
                {"+778-297-3000"}
              </p> */}
              <p className="font-medium  hover:cursor-pointer">
                {"+604-314-2309"}
              </p>
              <div className="flex justify-center sm:justify-start gap-6 items-center !mt-6 cursor-pointer">
                <BsInstagram size={20} />
                <CiLinkedin size={24} />
                <TfiEmail size={20} />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 border-t sm:border-t-0 pt-10 sm:pt-0  flex  gap-20 items-center">
            <div className=" flex flex-col justify-between">
              <div className="space-y-3">
                {["Home", "About", "Resources", "the Blog", "Contact"].map(
                  (items, index) => (
                    <p
                      className=" hover:opacity-50 text-sm sm:text-base sm:font-medium uppercase cursor-pointer transition-all duration-300"
                      key={index}
                    >
                      {items}
                    </p>
                  )
                )}
              </div>
            </div>
            <div className=" flex flex-col justify-between">
              <div className="space-y-3">
                {["Buy", "sell", "listings", "cities", "faq"].map(
                  (items, index) => (
                    <p
                      className="text-sm sm:text-base hover:opacity-50 uppercase  cursor-pointer"
                      key={index}
                    >
                      {items}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col justify-between space-y-4 w-[80%]">
            <h1 className="text-white font-semibold text-2xl mb-8 font-cardo">
              Get a Custom MLS Feed Sent Straight to Your Inbox
            </h1>

            <p className="  cursor-pointer">
              Tell me what you’re looking for, and I’ll make sure you know about
              listings that match your criteria as soon as they hit the market.
            </p>
            <p className="pb-2 cursor-pointer border-b-2 border-white w-[fit-content] hover:opacity-50  uppercase">
              GEt notified
            </p>
          </div>
        </div>

        <div className="border-t sm:border-t-0 text-center text-xs sm:mt-20">
          <div className="text-sm pr-4 py-3  text-white flex justify-end items-center">
            <p>© 2024 JESSICA BANSAL | All Rights Reserved | Terms of Use </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
