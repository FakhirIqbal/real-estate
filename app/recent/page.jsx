'use client'
import React from "react";
import Image from "next/image";
import BG from "../../out/bgrecent.jpg";
import RECENT from "../../out/recentsales.jpg";
import Header from "@/components/header";
import Link from "next/link";
import ReactPaginate from "react-paginate";

function Page() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const pageCount = 3;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <main>
      <Header />
      <div>
        <div className="relative h-screen">
          <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
            <Image
              src={BG}
              className="w-full "
              width={0}
              height={0}
              sizes={"100vw"}
              alt="rolodex Logo"
            ></Image>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <p className="font-phoppin text-md py-5">FEATURED HOMES</p>
            <span className="font-cardo font-medium text-8xl">
              Recent Home Sales
            </span>
          </div>
        </div>
        <div className="flex py-20 space-y-12 flex-wrap bg-[#EBECED]">
          <div className=" flex items-center  flex-col c space-y-7 w-1/3 ">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px] mt-[49px] cursor-pointer "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950">
              7835 10th Avenue, Burnaby
            </span>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px]  "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px]">
              411 E Eighth Avenue, New Westminster
            </span>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px]  "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px]">
              602-618 Carnarvon St, New Westminster
            </span>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px]  "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px]">
              411 E Eighth Avenue, New Westminster
            </span>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px]  "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px]">
              602-618 Carnarvon St, New Westminster
            </span>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px]  "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px]">
              411 E Eighth Avenue, New Westminster
            </span>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px]  "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px]">
              602-618 Carnarvon St, New Westminster
            </span>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px]  "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px]">
              411 E Eighth Avenue, New Westminster
            </span>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Image
              src={RECENT}
              className="w-[296px] h-[325px]  "
              width={0}
              height={0}
              sizes={"100vw"}
              alt=""
            />
            <span className="text-3xl font-cardo w-[296px]">
              602-618 Carnarvon St, New Westminster
            </span>
          </div>
        </div>

        <ReactPaginate
      className="flex justify-around py-20 italic font-cardo bg-[#EBECED]"
      pageCount={pageCount}
      onPageChange={handlePageChange}
      previousLabel={
        currentPage === 0
          ? null
          : (
            <span className="cursor-pointer hover:underline">
            &lt; Older Sales
          </span>
            )
      }
      // nextLabel={<span className="text-gray-700 font-light bg-gray-300 py-2 px-4 tracking-wider">Next</span>}
      nextLabel={
        currentPage === pageCount - 1 ? null 
         : (
          <span className="cursor-pointer hover:underline">
            Newer Sales &gt;
          </span>
        )
      }
      containerClassName={"pagination"}
      previousLinkClassName={"pagination__link"}
      nextLinkClassName={"pagination__link"}
      disabledClassName={"pagination__link--disabled"}
      activeClassName={"pagination__link--active"}
      pageClassName={"hidden"}
    />

        {/* <div className="flex justify-around py-20 italic font-cardo bg-[#EBECED]">
          <span className="cursor-pointer hover:underline">
            &lt; Older Sales
          </span>
          <span className="cursor-pointer hover:underline">
            Newer Sales &gt;
          </span>
        </div> */}
      </div>
    </main>
  );
}

export default Page;
