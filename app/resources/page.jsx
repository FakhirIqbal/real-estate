import React from "react";
import Header from "@/components/header";
import Image from "next/image";

function Page() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* mainbg */}
      <div className="resourceimage h-[550px] relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <span className="font-cardo font-medium text-center text-4xl px-5  ">
            Real Estate Resources
          </span>
          <p className="font-cardo  text-xs leading-6 text-center text-gray-700 px-6 py-5 italic">
            Dedicating to helpiing you to make the very best real estate
            decision for your lives.
          </p>
        </div>
      </div>
      {/* guidesection */}
      <div className="p-5">
        <div>
          <div className="p-3 flex flex-col space-y-3">
            <Image
              src="/buyerbg.webp"
              alt="Real Estate Guide"
              width={800}
              height={500}
            />
            <p className="uppercase text-sm">in case you missed it</p>
            <h2 className="font-cardo text-xl">
              7 Benfits of Hiring a Top Realtor to Sell Your Home
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 text-center">
          <div>
            {" "}
            <div className="p-3 flex flex-col space-y-3">
              <div className="relative ">
                <Image
                  src="/buyerbg.webp"
                  alt="Real Estate Guide"
                  width={800}
                  height={500}
                  className="object-cover h-40 w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white m-3 bg-opacity-80">
                  <div className="w-4/5 text-center flex flex-col space-y-4">
                    <span className="text-[4px]">JESSICABANSAL</span>
                    <p className="text-lg font-cardo uppercase">Seller Guide</p>
                    <div className="flex flex-col font-cardo">
                      <span className="text-[6px]  ">JESSICA BANSAL</span>
                      <span className="text-[4px]">PREC*</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="uppercase text-xs text-gray-600 font-semibold">
                download
              </p>
            </div>
          </div>
          <div>
            {" "}
            <div className="p-3 flex flex-col space-y-3">
              <div className="relative ">
                <Image
                  src="/buyerbg.webp"
                  alt="Real Estate Guide"
                  width={800}
                  height={500}
                  className="object-cover h-40 w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white m-3 bg-opacity-80">
                  <div className="w-4/5 text-center flex flex-col space-y-4">
                    <span className="text-[4px]">JESSICABANSAL</span>
                    <p className="text-lg font-cardo uppercase">BUYER Guide</p>
                    <div className="flex flex-col font-cardo">
                      <span className="text-[6px]  ">JESSICA BANSAL</span>
                      <span className="text-[4px]">PREC*</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="uppercase text-xs text-gray-600 font-semibold">
                download
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Page;
