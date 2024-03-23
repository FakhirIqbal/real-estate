import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Explorecard from "./cards/explorecard";
// Custom Previous Arrow Component

const SliderComponent = ({ renderCard, className, data }) => {
  const listing = [
    {
      images:"/list1 (2).jpg",
      title: "362 Christina Place Skidegate/Sandspit",
      price: "$709,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images:"/list2 (2).jpg",

      title: "7835 10th Avenue, Burnaby ",
      price: "$780,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images:"/list3 (2).jpg",

      title: "411 E Eighth Avenue, New Westminster",
      price: "$89,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images:"/list4 (2).jpg",

      title: "602-618  Carnarvon St, New Westminster ",
      price: "$859,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images:"/list5 (2).jpg",

      title: "362 Christina Place Skidegate/Sandspit",
      price: "$710,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images:"/list6 (2).jpg",

      title: "411 E Eighth Avenue, New Westminster",
      price: "$910,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images:"/list3.jpg",

      title: "602-618  Carnarvon St, New Westminster",
      price: "$289,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of items to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 2,
        },
      },
    ],
  };
  const settingsCard = {
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 2,
        },
      },
    ],
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="!space-x-4">
      {/* <Slider {...settings}>
        {listing?.map((items, index) => renderCard({ items, index, className }))}
      </Slider> */}
      <Slider {...settingsCard}>
      {listing.map((item, index) => (
        <div key={index} className="relative font-noto border-[1px] border-gray-200 rounded-xl">
          <div className="flex items-center">
           <Explorecard/>

            {/* <Image
              src={item.images}
              className="w-full rounded-t-xl h-[289px] object-cover"
              height={300}
              width={400}
              alt={item.title}
            /> */}
          </div>
          <div className="p-4 flex flex-col justify-between leading-normal ">
            <div className="mb-4 font-noto">
              <p className="text-xl line-clamp-2">{item.title}</p>
              <p className="text-[#9691A4] text-xl line-clamp-2">{item.price}</p>
            </div>
            <div className="flex items-center gap-2 text-[#9691A4]">
              <p>{item.id}</p>
              <p>{item.type}</p>
            </div>
            <p className="text-lg">{item.address}</p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default SliderComponent;
