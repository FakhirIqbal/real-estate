import React from "react";
import Image from "next/image";

import Header from "@/components/header";
import { data } from "@/data/data";
function Page() {
  return (
    <main>
      <Header />
      <div className=" pt-6 sm:pt-0 px-5 sm:px-0 sm:w-1/2 md:w-2/3 mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-5 my-20"
          >
            <p className="font-phoppin text-sm">
              {" RECENTLY SOLD BY JESSICA BANSAL"}
            </p>
            <span className="font-cardo font-medium text-center sm:text-start text-4xl">
              {item.title}
            </span>

            <p className="text-sm text-justify sm:text-start font-sans py-4 leading-6 text-gray-700">
              {item.description}
            </p>

            <div className="flex flex-wrap">
              {item.indoor?.map((item, index) => (
                <div key={index} className="sm:w-1/3 p-1">
                  <Image
                    src={item}
                    className="w-full h-auto sm:h-36 cursor-pointer"
                    width={170}
                    height={170}
                    alt=""
                  />
                </div>
              ))}
            </div>
            {item.mainPic && (
              <Image
                src={item.mainPic}
                className="w-full h-auto sm:h-[500px] p-1 cursor-pointer"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
              />
            )}
            <div className="font-light text-center sm:text-start  text-sm py-12 flex flex-col  space-y-4">
              
              <p>{`Sold ${item.soldYear}. ${item.price ? `List price ${item.price}` : ''}`}</p>
              {/* <p>Jessica Bansal buyer $763,500 sell price. April 2023.</p> */}
            </div>
          </div>
        ))}
      </div>
      {/* <div className=" pt-6 sm:pt-0 px-5 sm:px-0 sm:w-1/2 mx-auto">
        <div className="flex flex-col items-center space-y-5 my-20">
          <p className="font-phoppin text-sm">
            RECENTLY SOLD BY JESSICA BANSAL
          </p>
          <span className="font-cardo font-medium text-center sm:text-start text-4xl">
            7835 10th Avenue, Burnaby{" "}
          </span>
        </div>
        <p className="text-sm text-justify sm:text-start font-sans py-4 leading-6 text-gray-700">
          Welcome to 7835 10th Avenue! This is an Ultra Modern home which
          features 9 Bedrooms, 10 baths & 3 Kitchens. The top floor has 9 ft
          ceilings, 4 Beds (all with private baths) and a laundry room. Master
          Bed comes with his/her sinks, soaker tub, custom shower with body
          jets. Open concept main floor is an entertainer&#39;s paradise with a
          10&#39; ceiling, glass stairs, security surveillance, speaker system,
          engineered hardwood flooring, radiant heating, A/C, HRV & built-in
          vacuum. Fisher & Paykel appliances in the kitchen. Large sized WOK
          kitchen. Mudroom with extra storage for added convenience. Flex room
          on the main floor has a full bath. Fenced yard & large covered patio
          great for BBQs. 2 BDRM Legal suite, potential second 2 BDRM suite,
          media room with full bath and separate entry & 600 square ft detached
          garage with bath.
        </p>
        <div>
          <div className="flex flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div key={index} className="sm:w-1/3 p-1">
                <Image
                  src="/product.png"
                  className=" w-full h-auto cursor-pointer"
                  width={170}
                  height={170}
                  alt=""
                />
              </div>
            ))}
          </div>

          <Image
            src={"./product.png"}
            className="w-full h-auto sm:h-[500px] p-1  cursor-pointer "
            width={0}
            height={0}
            sizes={"100vw"}
            alt=""
          />
          <div className="font-light text-center sm:text-start text-sm py-12 flex flex-col space-y-4">
            <p>List price $799,800. MacDonald Realty Westmar</p>
            <p>Jessica Bansal buyer $763,500 sell price. April 2023.</p>
          </div>
        </div>
      </div> */}
    </main>
  );
}
export default Page;
