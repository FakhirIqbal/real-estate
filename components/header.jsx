"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/custom_dropdown";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import AnimatedButton from "./ui/animatedButton";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    // fixed top-0 left-0 right-0
    <div className={`fixed top-0 left-0 right-0 sm:static  z-40 py-4 w-full px-4 !font-phoppin bg-white`}>
      <div className="px-3  flex flex-wrap items-center justify-between">
        <div className={" ml-8 text-center text-whtie font-semibold"}>
          <Link href={"/"} className={"cursor-pointer"} aria-label="homepage">
            <h1 className={" uppercase font-cardo "}>Jessica Bansal</h1>
            <p className="text-[10px] font-semibold tracking-wider">PREC*</p>
          </Link>
        </div>
        <div>
          <GiHamburgerMenu
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
        <div className={` md:flex items-center gap-6  z-30  hidden`} id="">
          <div className="flex gap-6 !uppercase items-center space-x-8 text-gray-600 font-medium text-[12px]">
            <Link href={"/"} aria-label="homepage">
              <p className=" pr-4  hover:opacity-50 transition-all duration-300   ">
                Home
              </p>
            </Link>
            <Link href={"/about"} aria-label="aboutpage">
              <p className="   hover:opacity-50 transition-all duration-300   ">
                ABOUT
              </p>
            </Link>
            <Link href={"/buy"} aria-label="buypage">
              <p className="   hover:opacity-50 transition-all duration-300   ">
                BUY
              </p>
            </Link>

            <Link href={"/sell"} aria-label="sellpage">
              <p className=" py-2   hover:opacity-50 transition-all duration-300   ">
                SELL
              </p>
            </Link>
            <Link href={"/recent"} aria-label="recentpage">
              <p className=" py-2   hover:opacity-50 transition-all duration-300   ">
                Recent <br /> sales
              </p>
            </Link>
            <Link href={"/"} aria-label="cities">
              <p className=" py-2   hover:opacity-50 transition-all duration-300   ">
                cities
              </p>
            </Link>
            <Link href={"/"} aria-label="homesearch">
              <p className=" py-2   hover:opacity-50 transition-all duration-300   ">
                home <br /> search
              </p>
            </Link>
            <Link href={"/resource"} aria-label="resources" >  
              <p className=" py-2   hover:opacity-50 transition-all duration-300   ">
                Resources
              </p>
            </Link>
          </div>
          <Link href={"/contact"} aria-label="contact page">
            <Button>Contact</Button>
          </Link>
        </div>
        <div
          className={`sm:hidden items-center gap-6  z-30 w-full text-center ${
            isNavOpen ? "block" : "hidden"
          }`}
          id=""
        >
          <div className="flex flex-col font-bold opacity-80 mt-4 items-center rounded-lg !uppercase bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <Link href={"/"} aria-label="homepage">
              <p className=" block font-bold cool-link navlink py-2  md:p-0  text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary ">
                Home
              </p>
            </Link>
            <Link href={"/about"} aria-label="about page">
              <p className=" block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                About
              </p>
            </Link>
            <Link href={"/buy"} aria-label="buy page">
              <p className=" block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                Buy
              </p>
            </Link>

            <Link href={"/sell"} aria-label="sell page">
              <p className="  block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                Sell
              </p>
            </Link>
            <Link href={"/recent"} aria-label="recent page">
              <p className="block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                Recent sales
              </p>
            </Link>
            <Link href={"/"} aria-label="cities page">
              <p className=" block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                Cities
              </p>
            </Link>
            <Link href={"/"} aria-label="homesearch page">
              <p className="   block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary ">
                Home search
              </p>
            </Link>
            <Link href={"/resources"} aria-label="resource page">
              <p className=" block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary ">
                Resources
              </p>
            </Link>
          </div>
          <Link href={"/contact"} aria-label="contact page">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* <div
          className={`w-full md:hidden ${isNavOpen ? "block" : "hidden"}`}
          id="navbar-solid-bg"
        >
          <div className="flex flex-col font-bold opacity-80 mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <Link href={"/"}>
              <p
                className="gap-2 font-bold opacity-80 py-2  md:p-0 flex flex-row  text-primary rounded md:bg-transparent md:text-blue-700 "
                aria-current="page"
              >
                <Image
                  src={"/icons/usericon.svg"}
                  className=""
                  width={10}
                  height={10}
                  sizes={"100vw"}
                  alt="User Icon"
                />
                Sign in
              </p>
            </Link>
            <Link href={"/"}>
              <p className="block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary">
                Post Business Card
              </p>
            </Link>
            <Link href={"/"}>
              <p className="block font-bold opacity-80 py-2 cool-link navlink  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary">
                For employers
              </p>
            </Link>
            <Link href={"/"}>
              <p className=" py-2  md:p-0 cool-link navlink font-bold opacity-80 text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-primary ">
                Find Company
              </p>
            </Link>

            <Link href={"/"}>
              <p className=" py-2   md:p-0 cool-link navlink font-bold opacity-80 text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-primary">
                News
              </p>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
