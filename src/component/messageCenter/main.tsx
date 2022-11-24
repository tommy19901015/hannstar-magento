import React, { useState, useEffect, useRef } from "react";
import "./css.scss";
import { I_GroupArray } from "./interface";
import { postGetD360Art } from "../../services/api.service";
import DD360Test from "../../D360fakeData/D360ArticleList.json";
import mappingD360I18n from "../../common/mappingD360I18n";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MessageCenter: React.FC = () => {
  const [d360Data, setD360Data] = useState<any>();

  useEffect(() => {
    const postData = {
      "functionName": "Magento",
      "method": "GetAllArticles",
      "language": mappingD360I18n(window.hannstar?.language),
      "site": "/news/esg"
    }

    postGetD360Art(postData).then((response: any) => {
      console.log("response", response);
      if (response.result === "success") {
        setD360Data(response.data)
      }
    });

    // const D360Test: any = DD360Test;
    // setD360Data(D360Test.data);
    // console.log("D360Test", D360Test);
  }, []);

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
          {d360Data &&
            groupArrByValue(d360Data, 3).map((item, idx) => (
              <div className="messageBlock" key={idx}>
                {item.data.map((obj, idx) => {
                  return (
                    <li key={idx}>
                      <div className="tag">{obj.tag}</div>
                      <div className="date">{obj["published-date"]}</div>
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
