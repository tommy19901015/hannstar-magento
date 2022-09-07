import React from "react";
import "./css.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface I_bannerData {
  data: {
    src: string;
    title: string;
    content?: string;
  }[];
}

const BannerSlider: React.FC<I_bannerData> = ({ data }) => {
  const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bannerSlider">
      <Slider {...settings}>
        {data.map((item, idx) => (
          <>
            <img src={item.src} alt={item.title} />
            <div className="textBlock">
              <h2 className="title">{item.title}</h2>
              <p className="text">{item.content}</p>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
