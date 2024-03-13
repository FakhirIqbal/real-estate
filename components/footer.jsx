import React from "react";
import Button from "./Button";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
function Footer() {
  return (
    <>
      <div className=" grid grid-cols-6 relative">
        {[2, 3, 4, 4, 5, 6].map((items, index) => (
          <div key={index}>
            <Image
              className={"w-full"}
              src={index % 2 === 0 ? "/download (5).jpg" : "/download (6).jpg"}
              sizes={"100vw"}
              width={0}
              height={0}
              alt={"image"}
            />
          </div>
        ))}
        <div className="bg-white px-14 py-12 absolute right-0 -bottom-[110px] text-center text-sm">
          <p className="text-xl leading-8">
            Follow me on Instagram for the latest <br /> listings, market
            trends, and tips for buying <br /> and selling your home.
          </p>
          <h1 className="text-3xl mt-2 text-semibold uppercase">
            @Jess.Realty
          </h1>
        </div>
      </div>
      <div className="!text-white  pt-20 px-4 xl:px-0 bg-green ">
        <div className="max-w-screen-lg grid grid-cols-3 gap-4 items-center  mx-auto w-full py-[120px]">
          <div className=" flex flex-col justify-between">
            <div className={"!mb-6 ml-8 text-whtie font-semibold"}>
              <h1 className={"text-2xl uppercase font-cardo "}>
                Jessica Bansal
              </h1>
              <p className="text-sm pl-12">REAL ESTATE</p>
            </div>

            <div className="space-y-1">
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
              <div className="flex gap-6 items-center !mt-6 cursor-pointer">
                <BsInstagram size={20} />
                <CiLinkedin size={24} />
                <TfiEmail size={20} />
              </div>
            </div>
          </div>
          <div className="flex  gap-20 items-center">
            <div className=" flex flex-col justify-between">
              <div className="space-y-3">
                {["Home", "About", "Resources", "the Blog", "Contact"].map(
                  (items, index) => (
                    <p
                      className=" hover:opacity-50  font-medium uppercase cursor-pointer transition-all duration-300"
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
                      className=" hover:opacity-50 uppercase  cursor-pointer"
                      key={index}
                    >
                      {items}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-between space-y-4 w-[80%]">
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

        <div className=" mt-20">
          <div className="text-sm pr-4 py-3  text-white flex justify-end items-center">
            <p>© 2024 JESSICA BANSAL | All Rights Reserved | Terms of Use </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
