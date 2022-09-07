import React, { useRef } from "react";
import "./css.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface I_GroupArray {
  tag: string;
  date: string;
  title: string;
}

interface I_Porps {
  data: I_GroupArray[];
}

const MessageCenter: React.FC<I_Porps> = ({ data }) => {
  const sliderRef = useRef<any>(null);

  const groupArrByValue = (array: I_GroupArray[], subGroupLength: number) => {
    let index = 0;
    const newArray = [];
    while (index < array.length) {
      newArray.push({ data: array.slice(index, (index += subGroupLength)) });
    }
    return newArray;
  };

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="messageCenter">
      <div className="leftBlock">
        <div className="title">訊息中心</div>
        <div className="btnBlock">
          <div className="sliderBtn next" onClick={next}></div>
          <div className="sliderBtn previous" onClick={previous}></div>
        </div>
      </div>
      <div className="rightBlock">
        <Slider ref={sliderRef} {...settings}>
          {groupArrByValue(data, 3).map((item, idx) => (
            <div className="messageBlock" key={idx}>
              {item.data.map((obj, idx) => {
                return (
                  <li key={idx}>
                    <div className="tag">{obj.tag}</div>
                    <div className="date">{obj.date}</div>
                    <div className="title">{obj.title}</div>
                  </li>
                );
              })}
            </div>
          ))}
        </Slider>
        <a className="moreBtn" href="/">
          MORE
        </a>
      </div>
    </div>
  );
};

export default MessageCenter;
