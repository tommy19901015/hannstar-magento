import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import BannerText from "../../component/bannerText/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import GraphicsLine from "../../component/graphicsLine/main";
import "./css.scss";

const milestoneData = [
  {
    date: "2021年11月",
    title: "榮獲TCSA電子製造業類別之「永續報告」金獎",
    imgSrc:
      "https://webdev.hannstar.com/upload/about_history_list/twL_about_history_22A26_24ret9v6xj.jpg",
  },
  {
    date: "2021年11月",
    title: "榮獲TCSA電子製造業類別之「永續報告」金獎",
    imgSrc:
      "https://webdev.hannstar.com/upload/about_history_list/twL_about_history_22A26_24ret9v6xj.jpg",
  },
  {
    date: "2021年11月",
    title: "榮獲TCSA電子製造業類別之「永續報告」金獎",
    imgSrc:
      "https://webdev.hannstar.com/upload/about_history_list/twL_about_history_22A26_24ret9v6xj.jpg",
  },
  {
    date: "2021年11月",
    title: "榮獲TCSA電子製造業類別之「永續報告」金獎",
    imgSrc:
      "https://webdev.hannstar.com/upload/about_history_list/twL_about_history_22A26_24ret9v6xj.jpg",
  },
];

const About: React.FC = () => {
  const Milestone = () => {
    return (
      <div className="milestoneBlock">
        <div className="title">發展里程碑</div>
        <ul className="historyList">
          {milestoneData.map((item) => {
            return (
              <li>
                <div className="leftBlock">
                  <div className="historyDate">{item.date}</div>
                  <div className="imgBlock">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <div className="rightBlock"></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const colSetting1 = {
    type: ColType.FullPage,
    // content: <GraphicsLine />,
    content: <div></div>,
  };
  const colSetting2 = {
    type: ColType.FullPage,
    // content: <GraphicsLine {...{ type: "reverse" }} />,
    content: <div></div>,
  };

  const colSetting3 = {
    type: ColType.FullPage,
    content: <Milestone />,
  };

  return (
    <Layout>
      <Breadcrumbs />
      <BannerText />
      <Columns {...colSetting1} />
      <Columns {...colSetting2} />
      <Columns {...colSetting3} />
    </Layout>
  );
};

export default About;
