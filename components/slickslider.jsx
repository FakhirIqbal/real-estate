import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Custom Previous Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="a absolute left-[45%] z-10 -top-10 transform  rounded-full py-2  px-4  font-semibold   text-green text-3xl -translate-y-1/2  "
    onClick={onClick}
  >
    &lt;
  </button>
);

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-[45%] -top-10 transform -translate-y-1/2  rounded-full py-2  px-4  font-semibold   text-green text-3xl "
    onClick={onClick}
  >
    &gt;
  </button>
);
const SliderComponent = ({ renderCard, className, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Default number of items to show
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="!space-x-4">
      <Slider {...settings}>
        {data?.map((items, index) => renderCard({ items, index, className }))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
