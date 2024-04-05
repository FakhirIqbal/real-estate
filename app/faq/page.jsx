"use client";
import React from "react";

// import "./index.css"
// max-w-screen-xl

function Page() {
  React.useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".aboutus-hero");
      let scrollPosition = window.pageYOffset;
      parallax.style.backgroundPositionY = scrollPosition * -0.4 + "px";
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" flex flex-col overflow-x-hidden  max-w-screen-full mx-auto font-nunito">
      <div className="overflow-x-hidden overflow-y-auto relative">
        <div
          className="aboutus-hero  bg-no-repeat bg-cover bg-fixed	relative w-[100%] h-[87vh] flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/3783096/pexels-photo-3783096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          }}
        >
          <h1 className="py-[45px] text-[40px] font-light font-cardo bg-white px-[30px] md:mx-0 mx-10">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
      </div>

      <div className="px-10 md:px-0">
        <div className="block md:hidden">
          <div
            className="w-full h-[28rem] pt-12"
            style={{
              backgroundImage:
                "https://static.showit.co/800/lkNp7LdcQVCAjT-V1KEQzQ/179862/kaboompics_modern_home_office.jpg",
              backgroundPosition: "center",
            }}
          >
            <img
              src="https://static.showit.co/800/lkNp7LdcQVCAjT-V1KEQzQ/179862/kaboompics_modern_home_office.jpg"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>

        <h1 className="text-[38px] ms-0 md:ms-[270px] font-cardo">
          SELLER <br />
          Frequently Asked Questions
        </h1>

        <div className=" md:flex gap-24 flex-wrap md:ms-[270px] max-w-screen-xl">
          <div className="pt-16 flex-1">
            <div className="">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                Should I sell before buying? Or vice versa?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                The homeowner’s dilemma. It all comes down to your own personal
                circumstances, much of which are financial. You should think
                about ‘worst case’ scenarios when choosing to buy or sell first,
                and figure out which decision is most livable for you and your
                family. You’ll find this blog post helpful in highlighting some
                of the most common situations.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                Should I sell before buying? Or vice versa?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                The homeowner’s dilemma. It all comes down to your own personal
                circumstances, much of which are financial. You should think
                about ‘worst case’ scenarios when choosing to buy or sell first,
                and figure out which decision is most livable for you and your
                family. You’ll find this blog post helpful in highlighting some
                of the most common situations.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                Should I sell before buying? Or vice versa?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                The homeowner’s dilemma. It all comes down to your own personal
                circumstances, much of which are financial. You should think
                about ‘worst case’ scenarios when choosing to buy or sell first,
                and figure out which decision is most livable for you and your
                family. You’ll find this blog post helpful in highlighting some
                of the most common situations.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                How do you market my home?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                I employ a combination of traditional and digital marketing
                methods to showcase your home in the best possible light and
                reach the most potential buyers. From staging to photography,
                newsletters to social media, we’ll distribute your home’s best
                features to get people to find and fall in love with your home.
              </p>
            </div>
          </div>
          <div className="md:pt-8 mt-8 flex-1">
            <div>
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                Should I sell before buying? Or vice versa?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                As a Seller, you want to make it easy for Buyers to see your
                home, and open houses are a great opportunity to get people in
                the door in the least intimidating way. This is particularly
                fruitful in a hot market whereby we get as many people viewing
                over the weekend and then have the offer presentations on
                Monday. The best case scenario is that this generates a
                multi-offer process when more than one buyer makes a written
                offer.
              </p>
              <br />
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7">
                It’s best to leave your house during an open, or private showing
                so that the Buyer is able to picture themselves living there
                (without being reminded that it currently belongs to you).
                Private showings typically only take 15-20 minutes. Take the
                time to go for a drive, or a walk and have some downtime.
              </p>
            </div>
            <div className="h-44 w-[160%] overflow-visible md:mt-16 hidden md:block">
              <img
                src="https://static.showit.co/800/fmfo_UGRRPa2CTFIX7SCYA/179862/davide-colonna-dzrzhvd_wr0-unsplash.jpg"
                className="h-[100%] w-[50em] object-cover object-bottom"
              />
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                How much will it cost to sell my home?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                When budgeting the cost of selling your home, you’ll need to
                consider real estate commission (sellers pay a gross commission,
                that of which is split between the listing agent and the Buyer’s
                agent), cleaning, staging, or prepping services, legal
                fees/disbursements, and potentially a mortgage penalty depending
                on how far along in your term you are.
              </p>
            </div>
          </div>
          <div
            className="h-96 w-52 justify-end bg-[red] hidden md:flex"
            style={{
              backgroundImage:
                "https://static.showit.co/800/lkNp7LdcQVCAjT-V1KEQzQ/179862/kaboompics_modern_home_office.jpg",
              backgroundPosition: "center",
            }}
          >
            <img
              src="https://static.showit.co/800/lkNp7LdcQVCAjT-V1KEQzQ/179862/kaboompics_modern_home_office.jpg"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-[80px] mt-10 bg-[#242829] w-full"></div>
      <div className="px-10 md:px-0 md:mt-20 max-w-screen-xl md:ms-36">
        <div className="block md:hidden">
          <div
            className="w-full h-[28rem] py-12"
            style={{
              backgroundImage:
                "	https://static.showit.co/800/B2cpNJE9THWks-DdLnKZBA/179862/amit_manhas_blog_12.jpg",
              backgroundPosition: "center",
            }}
          >
            <img
              src="	https://static.showit.co/800/B2cpNJE9THWks-DdLnKZBA/179862/amit_manhas_blog_12.jpg"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>

        <h1 className="text-[38px] ms-0 md:ms-28 font-cardo">
          BUYER <br />
          Frequently Asked Questions
        </h1>

        <div className="block md:flex gap-24 ms-0 md:ms-28">
          <div className="pt-20 flex-1">
            <div className="">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                Should I sell before buying? Or vice versa?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                The homeowner’s dilemma. It all comes down to your own personal
                circumstances, much of which are financial. You should think
                about ‘worst case’ scenarios when choosing to buy or sell first,
                and figure out which decision is most livable for you and your
                family. You’ll find this blog post helpful in highlighting some
                of the most common situations.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                Should I sell before buying? Or vice versa?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                The homeowner’s dilemma. It all comes down to your own personal
                circumstances, much of which are financial. You should think
                about ‘worst case’ scenarios when choosing to buy or sell first,
                and figure out which decision is most livable for you and your
                family. You’ll find this blog post helpful in highlighting some
                of the most common situations.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                Should I sell before buying? Or vice versa?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                The homeowner’s dilemma. It all comes down to your own personal
                circumstances, much of which are financial. You should think
                about ‘worst case’ scenarios when choosing to buy or sell first,
                and figure out which decision is most livable for you and your
                family. You’ll find this blog post helpful in highlighting some
                of the most common situations.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                How do you market my home?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                I employ a combination of traditional and digital marketing
                methods to showcase your home in the best possible light and
                reach the most potential buyers. From staging to photography,
                newsletters to social media, we’ll distribute your home’s best
                features to get people to find and fall in love with your home.
              </p>
            </div>
          </div>
          <div className="pt-20 flex-1">
            <div>
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                Should I sell before buying? Or vice versa?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                As a Seller, you want to make it easy for Buyers to see your
                home, and open houses are a great opportunity to get people in
                the door in the least intimidating way. This is particularly
                fruitful in a hot market whereby we get as many people viewing
                over the weekend and then have the offer presentations on
                Monday. The best case scenario is that this generates a
                multi-offer process when more than one buyer makes a written
                offer.
              </p>
              <br />
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7">
                It’s best to leave your house during an open, or private showing
                so that the Buyer is able to picture themselves living there
                (without being reminded that it currently belongs to you).
                Private showings typically only take 15-20 minutes. Take the
                time to go for a drive, or a walk and have some downtime.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                How much will it cost to sell my home?
              </h3>
              <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                When budgeting the cost of selling your home, you’ll need to
                consider real estate commission (sellers pay a gross commission,
                that of which is split between the listing agent and the Buyer’s
                agent), cleaning, staging, or prepping services, legal
                fees/disbursements, and potentially a mortgage penalty depending
                on how far along in your term you are.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div
              className="h-96 w-52 flex justify-end bg-[red]"
              style={{
                backgroundImage:
                  "	https://static.showit.co/800/B2cpNJE9THWks-DdLnKZBA/179862/amit_manhas_blog_12.jpg",
                backgroundPosition: "center",
              }}
            >
              <img
                src="	https://static.showit.co/800/B2cpNJE9THWks-DdLnKZBA/179862/amit_manhas_blog_12.jpg"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div
              className="h-96 w-52 mt-10 flex justify-end bg-[red]"
              style={{
                backgroundImage:
                  "	https://static.showit.co/1200/2hiWoNJ6T9e_niPPg3nvwQ/179862/amit_manhas_blog_5.jpg",
                backgroundPosition: "center",
              }}
            >
              <img
                src="	https://static.showit.co/1200/2hiWoNJ6T9e_niPPg3nvwQ/179862/amit_manhas_blog_5.jpg"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden overflow-y-auto relative">
        <div
          className="aboutus-hero  bg-no-repeat bg-cover bg-fixed	relative w-[100%] h-[45vh] flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/3783096/pexels-photo-3783096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          }}
        >
          <p>NEED SOMETHING ELSE?</p>
          <h1 className="py-[45px] text-[30px] italic font-light font-cardo bg-white px-[30px] md:mx-0 mx-10 w-1/2">
            Feel free to reach out should you have any questions before making
            those first steps in your real estate goals
          </h1>
          <button>EMAIL AMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
