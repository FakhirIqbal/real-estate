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
      <div className="overflow-x-hidden">
        <div className="h-screen bg-white op recentimage">
          <div className="flex flex-col justify-center items-center h-full ">
            <p className="font-phoppin text-md py-5">FEATURED HOMES</p>
            <span className="font-cardo font-medium text-center text-6xl px-5 sm:px-0 sm:text-7xl">
              Recent Home Sales
            </span>
          </div>
        </div>

        <div className="bg-[#EBECED] py-16 mx-0 flex flex-col space-y-8 sm:space-y-0 sm:grid  grid-cols-3 sm:gap-7 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6].map(
            (product, index) => (
              <div key={index} className="flex flex-col items-center space-y-7">
                <Link href="/recent_product">
                  <Image
                    src="/recentsales.jpg"
                    className="w-[296px] h-[325px]"
                    width={296}
                    height={325}
                    alt=""
                  />
                </Link>
                <Link href="/recent_product">
                  <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                    602-618 Carnarvon St, New Westminster
                  </span>
                </Link>
              </div>
            )
          )}
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
