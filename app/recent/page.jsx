"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = React.useState(0);
  const pageCount = 3;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    // const newUrl = `/your-route?page=${selectedPage.selected + 1}`;

    // Update the URL without a full page reload
    // router.push(newUrl, undefined, { shallow: true });
  };

  const handleReloadClick = () => {
    // Use the router.push method with the current route to trigger a page reload
    router.push(router.pathname, undefined, { shallow: true }); // window.loacation.reload();
  };

  return (
    <main>
      <Header />
      <div>
      <div className="h-screen bg-white op recentimage">
      <div className="flex flex-col justify-center items-center h-full ">
      <p className="font-phoppin text-md py-5">FEATURED HOMES</p>
            <span className="font-cardo font-medium text-7xl">
              Recent Home Sales
            </span>
      </div>

      </div>
        {/* <div className="relative h-screen">
        
            <div className="sticky  top-0 left-0 w-full h-screen overflow-hidden">
              <Image
                src={BG}
                className="w-full "
                width={0}
                height={0}
                sizes={"100vw"}
                alt="rolodex Logo"
              />
            </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <p className="font-phoppin text-md py-5">FEATURED HOMES</p>
            <span className="font-cardo font-medium text-8xl">
              Recent Home Sales
            </span>
          </div>
        </div> */}
        <div className="flex py-20 space-y-12 flex-wrap bg-[#EBECED]">
          <div></div>
          <div className=" flex items-center  flex-col c space-y-7 w-1/3 ">
            <Link href="./recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  cursor-pointer "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                7835 10th Avenue, Burnaby
              </span>
            </Link>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                411 E Eighth Avenue, New Westminster
              </span>
            </Link>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                602-618 Carnarvon St, New Westminster
              </span>
            </Link>
          </div>
          <div className=" flex items-center  flex-col c space-y-7 w-1/3 ">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  cursor-pointer "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                7835 10th Avenue, Burnaby
              </span>
            </Link>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                411 E Eighth Avenue, New Westminster
              </span>
            </Link>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                602-618 Carnarvon St, New Westminster
              </span>
            </Link>
          </div>
          <div className=" flex items-center  flex-col c space-y-7 w-1/3 ">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  cursor-pointer "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                7835 10th Avenue, Burnaby
              </span>
            </Link>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                411 E Eighth Avenue, New Westminster
              </span>
            </Link>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                602-618 Carnarvon St, New Westminster
              </span>
            </Link>
          </div>
          <div className=" flex items-center  flex-col c space-y-7 w-1/3 ">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  cursor-pointer "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                7835 10th Avenue, Burnaby
              </span>
            </Link>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                411 E Eighth Avenue, New Westminster
              </span>
            </Link>
          </div>
          <div className=" flex items-center flex-col space-y-7 w-1/3">
            <Link href="/recent_product">
              <Image
                src={"/recentsales.jpg"}
                className="w-[296px] h-[325px]  "
                width={0}
                height={0}
                sizes={"100vw"}
                alt=""
              />
            </Link>
            <Link href="/recent_product">
              <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                602-618 Carnarvon St, New Westminster
              </span>
            </Link>
          </div>
        </div>

        <ReactPaginate
          className="flex justify-around py-20 italic font-cardo bg-[#EBECED]"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          previousLabel={
            currentPage === 0 ? null : (
              <span
                className="cursor-pointer hover:underline"
                onclick={handleReloadClick}
                //   onClick={(e) => {
                //   e.preventDefault();
                //   handlePageChange({ selected: currentPage - 1 });
                // }}
              >
                &lt; Older Sales
              </span>
            )
          }
          nextLabel={
            currentPage === pageCount - 1 ? null : (
              <span
                className="cursor-pointer hover:underline"
                onclick={handleReloadClick}
                //   onClick={(e) => {
                //   e.preventDefault();
                //   handlePageChange({ selected: currentPage + 1 });
                // }}
              >
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
      </div>
    </main>
  );
}

export default Page;
