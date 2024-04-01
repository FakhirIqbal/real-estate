"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import BuySlider from "@/components/buySlider";
import Button from "@/components/Button";
import Modal from "@/components/modal/formModal";
function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* mainbg */}
      <div className="resourceimage h-[550px] md:h-96 relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <span className="font-cardo font-light text-center text-6xl px-5  sm:text-6xl">
            BUYING <br />
            <span className="italic">with Jessica</span>
          </span>
        </div>
      </div>
      {/* section1 smscreen */}
      <div className="md:hidden px-5 py-32 flex flex-col gap-20">
        <div className="flex flex-col  text-center gap-14 ">
          <p className="uppercase text-xl">on your side</p>
          <h1 className="text-7xl font-cardo">
            Let&apos;s Find Your <span className="italic">Dream Home</span>
          </h1>
        </div>
        <div>
          <p className="text-center text-xl tracking-wide">
            Whether you’re a first-time home Buyer with a million questions, or
            a real estate veteran who knows exactly what you want, I’ve got your
            back.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-8  ">
          <Image
            className=""
            src="/buy.jpg"
            alt="buy"
            width={1920}
            height={1080}
          />
          <Image src="/buy.jpg" alt="buy" width={1920} height={1080} />
        </div>
        <div>
          <p className="text-center text-xl tracking-wide">
            I’m there for you every step of the way, helping you narrow and
            refine your search, saving you time and money. I’m committed to
            making sure you’re always well informed and prepared when the
            perfect home comes along.
          </p>
        </div>
      </div>
      {/* section2 desktop screen */}
      <div className="grid grid-cols-3 px-24 gap-32  h-screen bg-pink-200  ">
        <div className="flex flex-col space-y-12 h-[80%] ">
          <div className="flex flex-col space-y-4">
            <span className="text-xs">ON YOUR SIDE</span>
            <h1 className="font-cardo text-3xl">
              Let&apos;s Find Your <span className="italic">Dream Home</span>
            </h1>
          </div>
          <div>
            <Image
              src="/buy.jpg"
              alt="buy"
              width={1920}
              height={1080}
              className="object-cover h-auto"
            />
          </div>
        </div>
        <div className="my-auto">
          <Image
            src="/buy.jpg"
            alt="buy"
            width={1920}
            height={1080}
            className="object-cover  h-auto"
          />
        </div>
        <div className="flex flex-col space-y-10 text-sm justify-center">
          <p>
            Whether you’re a first-time home Buyer with a million questions, or
            a real estate veteran who knows exactly what you want, I’ve got your
            back.
          </p>
          <p>
            I’m there for you every step of the way, helping you narrow and
            refine your search, saving you time and money. I’m committed to
            making sure you’re always well informed and prepared when the
            perfect home comes along.
          </p>
        </div>
      </div>

      {/* section3 */}
      <div className="px-10 flex flex-col md:flex-row md:justify-center md:items-center gap-20 pb-20 md:py-20">
        <div className="md:order-2 md:p-10">
          <video
            className="px-5 object-cover w-full h-[500px] "
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="buyvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col gap-10">
          <span className="hidden md:block text-xs">
            MORE THAN JUST A HOUSE
          </span>
          <h1 className="text-5xl md:text-3xl tracking-wide  font-cardo">
            Your Home is: <br /> The Heart of Your Family, Your Cherished
            Gathering Place, Your Own Personal Haven.
          </h1>
          <p className=" text-xl md:text-sm tracking-wide">
            Buying your home with me means you benefit not only from expert
            knowledge and the latest technology, but the kind of customer
            service and personal attention that has earned me an outstanding
            reputation and loyal client base.
          </p>
        </div>
      </div>
      {/* section4 */}
      <div className="resourceimage h-auto py-32 sm:h-[600px] relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10 space-y-4 sm:space-y-10">
          <span className="font-cardo font-medium text-center leading-normal text-4xl px-5  sm:text-5xl md:w-2/3 ">
            &quot;Jessica helped us secure an offer below asking price and we
            were moving in before we knew it.&ldquo;
          </span>
          <p className="font-cardo sm:font-sans  text-xl font-semibold sm:text-xl leading-6 text-center text-black text-opacity-85 px-6 md:font-cardo ">
            As first time home buyers we consider ourselves extremely lucky to
            have been able to work with Amit. He was able to quickly educate us,
            and help us determine our needs in a home. The same day we met with
            Amit we ended up falling in love with a home that he recommended we
            see. His communication was on point and he responded efficiently
            when we made our offer. We’re so grateful for Amit&apos;s dedicated
            services.
          </p>
          <span className="text-xl font-semibold tracking-widest sm:text-lg sm:tracking-widest">
            PETER, COQUITLAM
          </span>
        </div>
      </div>
      {/* section5 */}
      <BuySlider />
      {/* section6 */}
      <div className="px-10 py-20 flex flex-col md:grid grid-cols-2 gap-20">
        <Image
          className="h-[500px] md:h-72 object-cover md:w-[80%] mx-auto"
          src="/buy.jpg"
          alt="buy"
          width={1920}
          height={1080}
        />
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl md:text-3xl text-center md:text-start font-cardo">
            Get The Complete Guide
          </h1>
          <div className="flex flex-col">
            <p className="text-xl tracking-wide md:text-sm">
              Choosing to buy a home is one of the biggest decisions you’ll make
              in your life. It’s a complex ordeal that requires a lot of
              planning, and instating the help of a knowledgeable Real Estate
              Agent to make the process run smoothly. Download my full guide to
              prepare you for what to expect.
            </p>
          </div>
          <button
            onClick={handleOpenModal}
            className="uppercase border-b w-fit border-black tracking-wider pb-3 text-xl md:text-sm"
          >
            Download
          </button>
        </div>
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          href="/pdf/Buyers Guide.pdf"
        />
      </div>
      {/* section7 */}
      <div className="resourceimage h-[500px] sm:h-[600px] relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10 space-y-4 sm:space-y-10">
          <span className="text-xl sm:text-lg sm:tracking-widest">
            HOME FINDER
          </span>
          <span className="font-cardo font-medium text-center text-3xl px-5  sm:text-5xl md:w-1/2">
            Get a Custom MLS Feed Sent Straight to Your Inbox
          </span>
          <p className=" sm:font-sans  text-xl sm:text-xl leading-6 text-center text-black text-opacity-85 px-6  ">
            Tell me what you’re looking for, and I’ll make sure you know about
            listings that match your criteria as soon as they hit the market.
          </p>
          <Button
            className={
              "uppercase bg-transparent border border-black !text-lg sm:!text-lg !py-4 !px-12 !text-black"
            }
          >
            get notified
          </Button>
        </div>
      </div>
    </main>
  );
}
export default Page;
