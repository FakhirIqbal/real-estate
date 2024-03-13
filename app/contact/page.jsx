import React from "react";
import Header from "@/components/header";
import Button from "@/components/Button";
function Page() {
  return (
    <main>
      <Header />
      <div className="grayimage w-full h-screen flex  justify-center items-center ">
        <div className="max-w-screen-lg flex justify-between flex-col p-20 bg-white w-full h-[70vh] bg-opacity-90">
          <div className="text-center">
            <p className="text-xl uppercase">Contact Jessica </p>
            <h1 className="f font-cardo text-6xl ">Leave a message</h1>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6 ">
              <div className="flex flex-col ">
                <h1 className="text-xl font-cardo text-black  italic">Name:</h1>
                <input type="text" className="border border-black p-2" />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-xl font-cardo text-black  italic">
                  Email:
                </h1>
                <input type="text" className="border border-black p-2" />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-xl font-cardo text-black  italic">
                  Phone:
                </h1>
                <input type="text" className="border border-black p-2" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-cardo text-black  italic">
                Your Message:
              </h1>
              <div>
                <textarea
                  type="text"
                  className="border resize-none w-full border-black p-2 h-[230px]"
                />
              </div>
              <div className="flex items-end justify-end">
                <Button
                  className={
                    "bg-transparent !text-black border border-black !px-10"
                  }
                >
                  SEND
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4d5864] !text-white">
        <div className="max-w-screen-xl mx-auto py-40">
          <h1 className="text-5xl text-center font-cardo">Stay Connected</h1>
          <div className="flex  justify-around mt-20">
            {[1, 2, 3].map((_, index) => (
              <div className="space-y-10 text-center max-w-[260px]" key={index}>
                <h1 className="text-2xl font-cardo italic">Explore the Blog</h1>
                <p>
                  The best resource in town for getting to know whats going on
                  in Vancouvers market.
                </p>
                <Button
                  className={
                    "bg-transparent  border border-white hover:bg-transparent !px-16"
                  }
                >
                  READ
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
