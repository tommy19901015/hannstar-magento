import React, { useState, useEffect, useRef } from "react";
import "./css.scss";

const graphics2Data = [
  {
    src: "https://fakeimg.pl/360x350/?text=1",
    title: "智能車載",
    href: "",
  },
  {
    src: "https://fakeimg.pl/360x350/?text=2",
    title: "工控",
    href: "",
  },
  {
    src: "https://fakeimg.pl/360x350/?text=3",
    title: "手機",
    href: "",
  },
  {
    src: "https://fakeimg.pl/360x350/?text=4",
    title: "穿戴",
    href: "",
  },
  {
    src: "https://fakeimg.pl/360x350/?text=5",
    title: "平板",
    href: "",
  },
  {
    src: "https://fakeimg.pl/360x350/?text=6",
    title: "觸控",
    href: "",
  },
  {
    src: "https://fakeimg.pl/360x350/?text=7",
    title: "科技資訊顯示器",
    href: "",
  },
  {
    src: "https://fakeimg.pl/360x350/?text=8",
    title: "綠色顯示器",
    href: "",
  },
];

const Graphics2 = (porps) => {
  return (
    <div className="graphics2Block">
      {graphics2Data.map((item) => {
        return (
          <a className="item" href={item.href}>
            <img src={item.src} alt={item.title} />
            <div className="titleBlock">
              <div className="line"></div>
              <div className="title">{item.title}</div>
              <div className="learnMore">Learn More</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Graphics2;
