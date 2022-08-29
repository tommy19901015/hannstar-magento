import React from "react";
import "./css.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface I_bannerData {
  src: string;
  title: string;
  content?: string;
}

const bannerData: I_bannerData[] = [
  {
    // src: 'https://webdev.hannstar.com/upload/banner_list/twL_banner_22A27_6erpvjpmxp.jpg',
    src: "https://fakeimg.pl/1519x400/?text=1",
    title: "創新技術、品質服務",
  },
  {
    // src: 'https://webdev.hannstar.com/upload/banner_list/twL_banner_22A28_zi638kdkyz.jpg',
    src: "https://fakeimg.pl/1519x400/?text=2",
    title: "綠色顯示、全新視界",
  },
  {
    // src: 'https://webdev.hannstar.com/upload/banner_list/twL_banner_22B08_8e38nb3hz6.jpg',
    src: "https://fakeimg.pl/1519x400/?text=3",
    title: "實踐 ESG、邁向永續經營",
  },
];

const BannerSlider: React.FC = () => {
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
        {bannerData.map((item, idx) => (
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
