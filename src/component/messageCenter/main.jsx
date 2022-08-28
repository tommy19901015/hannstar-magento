import React, { useState, useEffect } from "react";
import "./css.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const messageCenterData = [
  {
    data: [
      {
        tag: "企業永續",
        date: "2022.03.22",
        title:
          '瀚宇彩晶加入「TALENT, In Taiwan，台灣人才永續行動聯盟」">瀚宇彩晶加入「TALENT, In Taiwan，台灣人才永續行動聯盟」',
      },
      {
        tag: "企業永續",
        date: "2022.03.11",
        title: '38婦女節，多愛妳一點">38婦女節，多愛妳一點',
      },
      {
        tag: "投資人關係",
        date: "2022.03.09",
        title: '瀚宇彩晶2022年2月份營收報告">瀚宇彩晶2022年2月份營收報告',
      },
    ],
  },
  {
    data: [
      {
        tag: "投資人關係",
        date: "2022.02.24",
        title:
          '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
      },
      {
        tag: "投資人關係",
        date: "2022.02.03",
        title:
          '沒有人該成為孤島 為防疫英雄加油">沒有人該成為孤島 為防疫英雄加油',
      },
      {
        tag: "投資人關係",
        date: "2022.02.24",
        title:
          '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
      },
    ],
  },
  {
    data: [
      {
        tag: "投資人關係",
        date: "2022.02.24",
        title:
          '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
      },
      {
        tag: "投資人關係",
        date: "2022.02.03",
        title:
          '沒有人該成為孤島 為防疫英雄加油">沒有人該成為孤島 為防疫英雄加油',
      },
    ],
  },
];

const MessageCenter = (porps) => {
  const settings = {
    dots: false,
    arrows: true,
    fade: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // className: 'bannerSlider',
    // dotsClass: 'bannerDots',
  };

  return (
    <div className="messageCenter">
      <Slider {...settings}>
        {messageCenterData.map((item, idx) => (
          <div className="messageBlock">
            {item.data.map((data) => {
              return (
                <li>
                  <div className="tag">{data.tag}</div>
                  <div className="date">{data.date}</div>
                  <div className="title">{data.title}</div>
                </li>
              );
            })}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MessageCenter;
