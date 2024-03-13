"use client";
import Button from "@/components/Button";
import Explorecard from "@/components/cards/explorecard";
import Header from "@/components/header";
import SliderComponent from "@/components/slickslider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MOVE1 from "../out/img1.jpg";
import MOVE2 from "../out/img2.jpg";
import RECENT from "../out/recentsales.jpg";
export default function Home() {
  const texts = useMemo(
    () => [
      {
        name: "David -  New Westminster",
        title: "Data Analysis Report",
        description:
          "This report provides a comprehensive analysis of the data collected over the past quarter. It includes key insights, trends, and recommendations for future strategies. The detailed analysis covers various aspects, such as customer behavior, market trends, and performance metrics.",
      },
      {
        name: "Brittney -  Surrey",
        title: "Financial Forecast Presentation",
        description:
          "Explore the financial forecast for the upcoming fiscal year. This presentation covers revenue projections, expense analysis, and potential areas for cost optimization. Gain a deep understanding of the financial landscape, and discover strategic opportunities for sustainable growth.",
      },
      {
        name: "David -  New Westminster",
        title: "Strategic Business Plan Overview",
        description:
          "Gain insights into our strategic business plan, outlining goals, initiatives, and milestones. This overview highlights the key strategies driving our company's growth and success. The plan covers market positioning, competitive analysis, and a roadmap for executing our strategic initiatives.",
      },
    ],
    []
  );

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = (texts.indexOf(currentText) + 1) % texts.length;
      setCurrentText(texts[currentIndex]);
    }, 3000);

    // Uncomment the following line to stop the animation after a certain period (e.g., 15 seconds)
    // setTimeout(() => clearInterval(intervalId), 15000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentText, texts]);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1, // Default number of items to show
    slidesToScroll: 1,
    // cssEase: "linear",
    swipeToSlide: true,
    speed: 9000,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <main>
      <div className={"relative  "}>
        <div className={" w-full "}>
          <div
            className={
              " relative flex flex-col justify-center p-20 h-screen     items-center    w-full   "
            }
          >
            <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-10">
              <video
                ref={videoRef}
                className="object-cover w-full h-full"
                loop
                muted
                autoPlay
                playsInline
              >
                <source src="mainvideo.mp4" type="video/mp4" />
                {/* Add additional source elements for different video formats */}
              </video>
              {/* <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-4 left-4 bg-white text-black border-none p-2 cursor-pointer z-20"
              >
                {isPlaying ? "Pause" : "Play"}
              </button> */}
            </div>
            <div className="w-full flex flex-col justify-between h-[90%] z-10">
              <div
                className={
                  "flex justify-between   items-center text-xl text-white space-y-6 "
                }
              >
                <div className="flex  cursor-pointer gap-10 items-center">
                  <div
                    className={
                      "text-center text-black  flex h-full  justify-center flex-col items-center"
                    }
                  >
                    <h1
                      className={
                        "text-[24px] font-semibold uppercase font-cardo "
                      }
                    >
                      Jessica Bansal
                    </h1>
                    <p className="text-[16px] font-semibold !leading-none">
                      REAL ESTATE
                    </p>
                  </div>

                  <Link href={"/"} className={"cursor-pointer"}>
                    <Image
                      src={"/eXp Realty - Black-01.svg"}
                      className="w-[90px] "
                      width={0}
                      height={0}
                      sizes={"100vw"}
                      alt="rolodex Logo"
                    />
                  </Link>
                </div>
                <Button>Contact</Button>
              </div>
              <div className="flex items-center justify-between !text-white">
                <div className="rounded-full flex justify-center items-center w-12 h-12 text-white border-2 border-white">
                  <div>
                    <FaArrowDown />
                  </div>
                </div>
                <div className="text-end   font-cardo">
                  <p className="text-xl font-semibold">
                    TOP VANCOUVER REALTOR, JESSICA BANSAL
                  </p>
                  <h1 className="font-semibold my-3 text-5xl  font-cardo">
                    COMMITTED TO YOUR FUTURE
                  </h1>
                  <p className="text-xl  italic  font-cardo">
                    Buying and selling residential real estate in Burnaby <br />{" "}
                    and the Lower Mainland since 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div>
        <div className="mt-20 w-full text-center max-w-screen-xl mx-auto">
          <p className="text-sm">JESSICA BANSAL REAL ESTATE</p>
          <h1 className="text-4xl  py-4 font-cardo">
            Your Next Great Move Starts Here
          </h1>
          <div className=" gap-6 my-10 flex justify-center items-center ">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
            >
              <Image
                src={MOVE1}
                sizes={"100vw"}
                width={0}
                height={0}
                alt={"image"}
                style={{ width: "365px", height: "411px" }}
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="300"
            >
              <Image
                src={MOVE2}
                sizes={"100vw"}
                width={0}
                height={0}
                alt={"image"}
                style={{ width: "365px", height: "411px" }}
              />
            </div>
          </div>
          <p className="text-sm">
            Say Good bye to overwhelm, and hello to your new home. My goal is to
            simplify this complex <br /> process by replacing stress and anxiety
            with ease and excitement. It’s important to me that you are
            <br />
            confident and comfortable with every choice you make..
          </p>
        </div>
        {/* about us */}
        <div className="max-w-screen-lg items-center mx-auto lg:gap-20 xl:gap-40 my-20 grid grid-cols-2">
          <div className=" space-y-6 pt-10 flex justify-between flex-col w-[73%]">
            <p className="text-green text-sm font-medium">MEET YOUR AGENT</p>
            <div>
              <h1 className="text-3xl font-cardo">JESSICA BANSAL</h1>
            </div>
            <div className="space-y-6 text-sm">
              <p className="">
                I know that buying or selling a home is more than just a
                transaction: it’s a life changing experience. My
                relationship-first approach is what makes the journey to success
                more enjoyable.
              </p>
              <p className="">
                Whether you’re new to the area or a 604 native, I’ll guide you
                through each step of your real estate needs - before, during,
                and after the sale
              </p>

              <Button className={"!flex gap-2 "}>
                <p>ABOUT ME</p>
              </Button>
            </div>
          </div>
          {/* <div></div> */}
          <div className="relative ">
            <Image
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="400"
              className={"w-full"}
              src={"/Headshot1.png"}
              sizes={"100vw"}
              width={0}
              height={0}
              alt={"image"}
            />
          </div>
        </div>
        <div
          className={
            "h-[100px]  bg-green z-50 flex flex-col justify-center    "
          }
        >
          <Slider {...settings}>
            {[2, 4, 5].map((items, index) => (
              <div
                key={index}
                className="w-full  text-xl text-white font-semibold !flex flex-row items-center px-4  justify-between"
              >
                <p>$200M+ TOTAL SALES</p>
                <p>250+ KEYS EXCHANGED</p>
                <p>25 AVERAGE DAYS ON MARKET</p>
                <p>98% SALES TO LIST RATIO</p>
                <p>$200M+ TOTAL SALES</p>
                <p>250+ KEYS EXCHANGED</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Services Area */}
      <div className="s">
        <div className="max-w-screen-xl mx-auto gap-20 py-20 grid grid-cols-3">
          <div className="cols-span-1 flex flex-col items-end space-y-6">
            <h1 className="">WHAT’S YOUR GOAL?</h1>
            <hr className="border-t w-1/2 border-gray-500" />
            <h1 className="text-sm text-gray-600 text-[12px]">
              BUY MY NEXT HOME
            </h1>
            <hr className="border-t w-1/2 border-gray-500" />
            <h1 className="text-sm text-gray-600 text-[12px]">SELL MY HOME</h1>
            <hr className="border-t w-1/2 border-gray-500" />
          </div>
          <div className="col-span-2 space-y-6 pl-12 w-[77%]">
            <h1 className="text-2xl font-medium font-cardo">
              You’re serious about your real estate goals; Im serious about
              getting the job done! I ensure no details fall through the cracks
              so that you get the best deal.
            </h1>
            <p className="text-sm ]">
              Regardless of the market conditions one thing is for sure - it’s
              highly competitive. So it’s simply not enough to casually browse
              consumer-facing platforms like Zolo. It takes having an agent in
              your corner who’s well-networked, has a proven track record, is an
              expert negotiator, and can navigate the paperwork on your behalf
              for the best possible outcome.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mb-20">
          <h1
            // data-aos="fade-right"
            // data-aos-anchor-placement="top-bottom"
            // data-aos-delay="600"
            className=" text-center text-4xl font-cardo"
          >
            Browse Jessica’s Listings
          </h1>
          <div className="relative  my-20">
            <SliderComponent
              data={[1, 3, 4, 5, 6, 67, 7, 8, 9]}
              renderCard={Explorecard}
              className={"!mx-4"}
              fixedWidth={270}
            />
          </div>
          <h1 className="text-4xl my-4 font-">Start Your Home Search</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="New Westminster"
              className="text-sm border border-black w-[90%] py-2 px-4 rounded-[4px] "
            />
            <div className="bg-green cursor-pointer w-20 flex items-center justify-center rounded-[4px]">
              <IoMdSearch size={30} color="white" />
            </div>
          </div>
        </div>
      </div>

      {/* blog section */}
      <div className="bg-[#ebeced]">
        <div className="max-w-screen-xl flex justify-center gap-20  mx-auto py-40">
          {[400, 500, 600].map((items, index) => (
            <div
              // data-aos="fade-up"
              // data-aos-anchor-placement="top-bottom"
              // data-aos-delay={items}
              // data-aos-duration="500"
              key={index}
              className="space-y-6 max-w-[250px]"
            >
              <Image
                className={"w-full"}
                src={"/download.jpg"}
                sizes={"100vw"}
                width={0}
                height={0}
                alt={"image"}
              />
              <h1 className="text-2xl  font-medium font-cardo">
                Buyer Representation
              </h1>
              <p className="text-sm leading-6 text-gray-600">
                Finding the right house is first of many steps to home buying. I
                will support you through each stage of the planning process by
                providing timely advice and recommendations tailored to your
                needs. Youre in good hands.
              </p>
              <Button className={"!py-1 !px-2 text-[12px] "}>
                BUY WITH JESSICA
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          " relative flex flex-col justify-center p-20      items-center    w-full   z-10"
        }
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
          <video
            ref={videoRef}
            className="object-cover w-full h-full"
            loop
            muted
            autoPlay
            playsInline
            // playbackrate={0.4}
          >
            <source src="vidio2.mp4" type="video/mp4" />
            {/* Add additional source elements for different video formats */}
          </video>
          {/* <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-4 left-4 bg-white text-black border-none p-2 cursor-pointer z-20"
              >
                {isPlaying ? "Pause" : "Play"}
              </button> */}
        </div>
        <div className=" relative flex flex-col !text-center px-20  py-12 space-y-10 w-1/2 z-50 !text-black bg-white">
          <div className="ab absolute  bottom-6 right-8 cursor-pointer rounded-full flex justify-center items-center w-12 h-12 text-white border-2 border-black z-30">
            <div>
              <FaArrowRight color="black" />
            </div>
          </div>
          <h1 className="font-medium   text-4xl font-cardo">
            What Clients Are Saying
          </h1>
          <div className="flex items-center justify-center">
            <Image
              className={"w-[20%]"}
              src={"/download (2).jpg"}
              sizes={"100vw"}
              width={0}
              height={0}
              alt={"image"}
            />
          </div>

          <p className="text-2xl font-medium font-cardo">{currentText.title}</p>
          <p className="text-sm ">{currentText.description}</p>
          <p className="italic">{currentText.name}</p>
        </div>
      </div>
      <div className="bg-[#ebeced]">
        <div className="max-w-screen-xl  flex flex-col items-center gap-20 mx-auto pt-20 pb-40">
          <div className="text-center">
            <p className="text-[12px]">YOUR INFORMATION HUB</p>
            <h1 className="font-medium mt-10  text-4xl font-cardo">
              Real Estate Resources For <br /> Buyers and Sellers
            </h1>
          </div>
          <div className=" items-center relative">
            <div className="flex  justify-center relative gap-20 items-center">
              <div
                data-aos="fade-right"
                data-aos-duration="200"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="600"
              >
                <Image
                  className={"w-full"}
                  src={"/download (3).jpg"}
                  sizes={"100vw"}
                  width={0}
                  height={0}
                  alt={"image"}
                />
              </div>
              <div className="bg-white h-[fit-content]  absolute -right-[200px] flex text-center flex-col space-y-6 items-center p-16 w-[fit-content]">
                <p className="text-[12px]">NEIGHBOURHOODS</p>
                <h1 className="font-medium   text-4xl font-cardo">
                  Market Reports
                </h1>
                <p className="text-[12px]">
                  Browse listings and market stats <br />
                  specific to your neighbourhood.
                </p>
                <Button className={"!px-10 !py-1 text-[12px]"}>VIEW</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl  flex flex-col items-center gap-20 mx-auto pt-20 pb-40">
          <div className="flex  justify-center relative gap-20 items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
            >
              <Image
                className={"w-[551px] h-[473px]"}
                src={RECENT}
                sizes={"100vw"}
                width={0}
                height={0}
                alt={"image"}
              />
            </div>
            <div className="bg-white absolute -left-[200px]  h-[fit-content] flex text-center flex-col space-y-6 items-center p-20 w-2/3">
              <p className="text-[12px]">FEATURED HOMES</p>
              <h1 className="font-medium   text-4xl font-cardo">
                Recent Sales
              </h1>
              <p className="text-[12px]">
                Check out my most recent sales <br /> and featured listings
              </p>
              <Button className={"!px-10 !py-1 text-[12px]"}>VIEW</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl  grid grid-cols-2 items-center gap-20 mx-auto pt-20 pb-40">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <Image
            className={"w-1/2 ml-auto rounded-xl"}
            src={"/download (4).jpg"}
            sizes={"100vw"}
            width={0}
            height={0}
            alt={"image"}
          />
        </div>
        <div className="bg-white  h-[fit-content] flex  flex-col space-y-6  pr-16 w-[85%]">
          <p className="text-sm font-medium">GET MY MOST REQUESTED RESOURCE</p>
          <h1 className="font-medium   text-4xl font-cardo">
            Property Investment Guide
          </h1>
          <p className="text-sm ">
            Your complete guide to purchasing a profitable investment property
            in Vancouver. Im sharing all my secrets so you can build wealth and
            breakthrough the real estate market.
          </p>
          <p className="text-[12px] ">PLUS! ILL TELL YOU WHAT NOT TO DO</p>
          <input
            type="text"
            placeholder="Email"
            className="text-sm border w-2/3 border-black  py-3 px-4 rounded-sm "
          />
          <Button className={"!px-10 w-2/3 bg-black"}>DOWNLOAD NOW</Button>
        </div>
      </div>
    </main>
  );
}
