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
      customPaging: (i:number) => {
        return (
          <a>
            <img src={imgs[i].src} alt={imgs[i].alt} />
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
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    )
}


export default SlickComponent;
