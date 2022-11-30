import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { I_Carousel } from "./interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css.scss";

const SlickComponent: React.FC<I_Carousel> = ({ imgs }) => {
  const componentName = "slickComponent";
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const settings = {
    customPaging: (i: number) => {
      return (
        <a>
          <img src={imgs[i].img} alt="productImg" />
        </a>
      );
    },
    arrows: true,
    dots: false,
    className: "paging-slider",
    dotsClass: "slick-dots slick-thumb",
    iswipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: 4,
  };

  useEffect(() => {
    slider1.current && setNav1(slider1.current);
    slider2.current && setNav2(slider2.current);
  }, []);
  return (
    <div className={`${componentName}Content`}>
      <Slider className="mainSlider" asNavFor={nav2} ref={slider1}>
        {imgs.map((img) => (
          <div>
            <img src={img.img} alt="productImg" />
          </div>
        ))}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {imgs.map((img) => (
          <div>
            <img src={img.img} alt="productImg" style={{ width: "100px" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickComponent;
