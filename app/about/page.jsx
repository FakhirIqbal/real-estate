import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Button from "@/components/Button";
import Head from "next/head";

function Page() {

  return (
    <main className="overflow-x-hidden">
    <Head
        title="Jessica Bansal Real Estate"
        description="Jessica Bansal Real Estate"
        keywords="Jessica Bansal Real Estate"
    />
      <Header />
      <div className="bg-[#ebeced]">
        <div className="flex flex-col sm:grid grid-cols-2  items-center py-20">
          <div className=" sm:w-[45%] sm:ml-auto m-6 sm:mr-20 space-y-6 order-2 sm:order-1">
            <p className="text-center text-xs sm:text-start sm:text-base sm:font-medium">ABOUT JESSICA BANSAL</p>
            <h1 className="text-2xl sm:text-4xl font-cardo">
              Committed to your future so you can feel confident in your real
              estate decisions.
            </h1>
            <p className="font-cardo italic sm:text-2xl">
              I understand how personal buying and/or selling a home can feel.
              You have unique requirements, desires, and numbers you need to
              hit. You want someone who’s looking out for each and every one of
              your interests.
            </p>
          </div>
          <div
            // data-aos="fade-in"
            // data-aos-offset="200"
            // data-aos-delay="50"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out"
            // data-aos-once="true"
            className="relative grayimage h-[80vh]  flex sm:items-center sm:justify-center order-1 sm:order-2"
          >
            <Image
              src={"/Headshot1.png"}
              className="w-[80%] h-[70%] my-auto mx-auto sm:w-1/2 "
              width={0}
              height={0}
              sizes={"100vw"}
              alt="rolodex Logo"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4]">
        <div className="max-w-screen-xl animation mx-auto gap-[130px] flex flex-col sm:grid grid-cols-2 py-20">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className=""
          >
            <Image
              src={"/about.jpg"}
              className="w-[80%] mx-auto sm:ml-auto"
              width={0}
              height={0}
              sizes={"100vw"}
              alt="rolodex Logo"
            />
          </div>
          <div className="flex justify-between flex-col w-[97%] px-5 sm:px-0 h-full py-4">
            <div className="space-y-6 text-center sm:text-start">
              <p
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className=" font-medium text-[#424242]"
              >
                BEHIND THE SIGN
              </p>
              <h1
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className=" text-5xl  font-cardo "
              >
                Jessica Bansal
              </h1>
              <p
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className=" text-[17px] text-justify sm:text-start  leading-8  text-[#424242]"
              >
                Having moved to New Westminster (from Nanaimo) with my family at
                a young age I have always been an active member in the
                community. From the New Westminster Boys Softball League to the
                New Westminster Royals Hockey team, it’s these positive
                experiences that drive my commitment to give back to my
                community. Real estate allows me to do this, by helping my
                clients find their right homes in New Westminster, Burnaby,
                Coquitlam, Surrey, and Vancouver.
              </p>
            </div>

            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className="mt-auto"
            >
              <Image
                src={"/download (9)-removebg-preview.jpg"}
                className="w-full ml-auto"
                width={0}
                height={0}
                sizes={"100vw"}
                alt="rolodex Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" gap-20 flex flex-col sm:grid grid-cols-3 px-5 sm:px-0 items-center py-20 sm:pl-20">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className=" sm:h-[700px] "
          >
            <Image
              src={"/about1.jpg"}
              className="w-screen sm:w-full sm:h-full sm:ml-auto"
              width={0}
              height={0}
              sizes={"100vw"}
              alt="rolodex Logo"
            />
          </div>
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="space-y-10 sm:w-[90%]"
          >
            <p className="font-medium text-[#424242] text-[17px]">
              MY APPROACH
            </p>
            <h1 className="text-3xl sm:text-4xl font-cardo">
              Delivering an exceptional experience that exceeds your
              expectations and gets you results
            </h1>
            <p className="text-justify sm:text-start text-xl  leading-8  text-[#424242]">
              My relationship-first approach provides you with an individual and
              personal experience tailored to your specific real estate needs.
              You will feel right at home and well taken care of as I provide
              you with the representation you deserve.
            </p>
          </div>
          <div className="">
            <Image
              src={"/about2.jpg"}
              className="w-screen sm:w-2/3 sm:mt-auto"
              width={0}
              height={0}
              sizes={"100vw"}
              alt="rolodex Logo"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl sm:mx-auto gap-20 px-5 sm:px-0 sm:gap-40 flex flex-col sm:grid grid-cols-2 items-center py-20">
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className=""
        >
          <Image
            src={"/dog.jpg"}
            className="w-full sm:w-[90%] sm:ml-auto"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="rolodex Logo"
          />
        </div>
        <div
          // data-aos="fade-in"
          // data-aos-offset="200"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
          // data-aos-once="true"
          className="flex flex-col space-y-10 sm:space-y-20  h-[500px] py-4 text-[#424242] sm:font-medium"
        >
          <p className="text-4xl text-center sm:text-start sm:text-6xl font-cardo text-black">QUICK FACTS</p>
          <div className="sm:space-y-12 space-y-8 tracking-wider   sm:text-xl">
            <p>EXPLORING THE PARK WITH MY DOG, BO</p>
            <p>HAWAII IS ALWAYS A GOOD IDEA</p>
            <p>DRINKS THREE COFFEES DAILY</p>
            <p>PET PEEVE? DELAYED TIMELINES</p>
            <p>DIVING INTO MY READING LIST</p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-white op grayimage">
        <div className="flex flex-col justify-center items-center h-full space-y-16 ">
          <p className="text-2xl font-semibold sm:font-normal ">KIND WORDS</p>
          <h1 className="text-2xl italic font-extralight sm:font-normal sm:text-5xl text-center font-cardo">
            As first time home buyers, we couldn’t <br /> imagine a better
            buying experience than <br /> the one that we had with jessica. ts
          </h1>
          <p className="text-xl">DAVID, NEW WESTMINSTER.</p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 sm:px-0 py-20">
        <div className="flex flex-col justify-center items-center sm:items-start text-[#424242] h-full space-y-10 sm:w-[70%] text-[20px]">
          <p className="text-lg sm:text-xl">HOW I CAN HELP</p>
          <h1 className="text-3xl !font-thin italic  font-cardo !mt-12">
            Buying your first home
          </h1>
          <p>
            Everyone has a story, and each one fascinates me. As your Realtor I
            get to be part of one of your most life changing chapters. Over the
            last 12+ years I’ve helped numerous clients get on the property
            ladder with their first home and then go on to build their property
            portfolio.
          </p>
          <p>
            I’ll guide and support you through your real estate journey with the
            utmost precision while building your knowledge (and confidence) of
            the home buying and selling process.
          </p>
        </div>
      </div>
      {/* <div className="max-w-screen-xl gap-10 mt-40 relative mx-auto grid grid-cols-2">
        <div className=" relative w-full">
          <Image
            src={"/Section.png"}
            className="w-full h-[50vh] mt-auto"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="rolodex Logo"
          />
          <div className="flex flex-col justify-center px-10 py-10 text-center  space-y-3 right-0  absolute top-10 bg-[rgba(235,236,237,1)] ">
            <h1 className="text-4xl !font-thin   font-cardo">
              Explore Listings
            </h1>
            <p className="text-sm">
              Click to search all homes for sale on the MLS database
            </p>
          </div>
        </div>
        <div className=" relative w-full mt-[250px]">
          <Image
            src={"/Section.png"}
            className="w-full h-[50vh] mt-auto"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="rolodex Logo"
          />
          <div className="flex flex-col bg-[rgba(235,236,237,1)] justify-center px-10 py-10 text-center  space-y-3 left-0  absolute bottom-10 ">
            <h1 className="text-4xl !font-thin   font-cardo">
              See Recent Sales
            </h1>
            <p className="text-sm">
              Click to browse my latest sales and client results
            </p>
          </div>
        </div>
      </div> */}
      <div className="max-w-screen-xl sm:gap-10 sm:mt-40 sm:relative sm:mx-auto sm:grid grid-cols-2">
        <div className=" relative w-full">
          <Image
            src={"/Section.png"}
            className="w-fit sm:w-full sm:h-[50vh] sm:mt-auto"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="rolodex Logo"
          />
          <div className="flex flex-col justify-center px-10 py-10 text-center  space-y-3 right-0 sm:absolute top-10 bg-[rgba(235,236,237,1)] ">
            <h1 className="text-4xl !font-thin   font-cardo">
              Explore Listings
            </h1>
            <p className="text-sm">
              Click to search all homes for sale on the MLS database
            </p>
          </div>
        </div>
        <div className=" relative w-full mt-[250px]">
          <Image
            src={"/Section.png"}
            className="w-fit sm:w-full sm:h-[50vh] sm:mt-auto"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="rolodex Logo"
          />
          <div className="flex flex-col bg-[rgba(235,236,237,1)] justify-center px-10 py-10 text-center  space-y-3 left-0  sm:absolute bottom-10 ">
            <h1 className="text-4xl !font-thin   font-cardo">
              See Recent Sales
            </h1>
            <p className="text-sm">
              Click to browse my latest sales and client results
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg gap-10 relative mx-auto grid grid-cols-2  py-40">
        <div className="flex flex-col justify-center  h-full space-y-4 ml-auto ">
          <p className="text-sm">CONTACT</p>
          <h1 className="text-3xl   font-cardo">
            Ready to Fulfill Your <br /> Real Estate Dreams?
          </h1>
          <p className="text-sm">
            Whether you’re a homebuyer or seller, I can help you navigate <br />
            successfully through this robust, ever-changing market.
          </p>
        </div>
        <div className="flex items-end justify-center">
          <Button
            className={
              "bg-transparent hover:bg-white text-sm tracking-widest hover:!text-black !text-black border border-black !px-12 py-3"
            }
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Page;
