import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import BannerSlider from "../../component/bannerSlider/main";
import MessageCenter from "../../component/messageCenter/main";
import PlatformEntry from "../../component/platformEntry/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import GraphicsCard from "../../component/graphicsCard/main";
import Graphics2 from "../../component/graphics2/main";
import "./css.scss";

const EBiz: React.FC = () => {
  const pageName = "e-biz";

  const bannerData = [
    {
      src: "https://e-biz.hannstar.com/img/banner/00.jpg",
      title: "產品行銷服務平台",
      content: "透過平台大數據，客戶能快速找到各應用領域的產品資訊和方案、提出需求並得到回覆"
    },
    {
      src: "https://e-biz.hannstar.com/img/banner/01.jpg",
      title: "智慧零售",
      content: "以瀚宇彩晶創新顯示產品優化客戶體驗、創意行銷、提高運營及管理效率"
    },
    {
      src: "https://e-biz.hannstar.com/img/banner/02.jpg",
      title: "智能建築",
      content: "運用新興技術，創造安全、高效及舒適的智慧化環境"
    },
    {
      src: "https://e-biz.hannstar.com/img/banner/03.jpg",
      title: "交通運輸",
      content: "面對資訊變化快速的移動世代，提供駕馭海、陸、空全方位的資訊顯示產品"
    },
    {
      src: "https://e-biz.hannstar.com/img/banner/04.jpg",
      title: "智能製造",
      content: "通過瀚宇彩晶物聯網應用產品，打造高效能的產品生產流程"
    },
    {
      src: "https://e-biz.hannstar.com/img/banner/05.jpg",
      title: "智慧育樂",
      content: "智能醫療打破傳統模式，守護個人健康，先進的產品及服務讓您更易於創造健康生活、關心生態環境"
    },
    {
      src: "https://e-biz.hannstar.com/img/banner/06.jpg",
      title: "健康關懷",
      content: "智能醫療打破傳統模式，守護個人健康先進的產品及服務讓您更易於創造健康生活、關心生態環境"
    },
  ];
  const messageCenterData = [
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
    {
      tag: "投資人關係",
      date: "2022.02.24",
      title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
    },
    {
      tag: "投資人關係",
      date: "2022.02.03",
      title: '沒有人該成為孤島 為防疫英雄加油">沒有人該成為孤島 為防疫英雄加油',
    },
    {
      tag: "投資人關係",
      date: "2022.02.24",
      title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
    },
    {
      tag: "投資人關係",
      date: "2022.02.24",
      title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
    },
    {
      tag: "投資人關係",
      date: "2022.02.03",
      title: '沒有人該成為孤島 為防疫英雄加油">沒有人該成為孤島 為防疫英雄加油',
    },
  ];
  const platformEntryData = [
    {
      src: "https://e-biz.hannstar.com/icon/001.png",
      title: "智慧零售",
      href: "/",
    },
    {
      src: "https://e-biz.hannstar.com/icon/007.png",
      title: "智能建築",
      href: "/",
    },
    {
      src: "https://e-biz.hannstar.com/icon/006.png",
      title: "交通運輸",
      href: "/",
    },
    {
      src: "https://e-biz.hannstar.com/icon/004.png",
      title: "智慧育樂",
      href: "/",
    },
    {
      src: "https://e-biz.hannstar.com/icon/002.png",
      title: "健康關懷",
      href: "/",
    },
    {
      src: "https://e-biz.hannstar.com/icon/003.png",
      title: "智能製造",
      href: "/",
    },
    {
      src: "https://e-biz.hannstar.com/icon/011.png",
      title: "綠色與健康",
      href: "/",
    },
  ];
  const graphics2Data = [
    {
      src: "https://e-biz.hannstar.com/img/index_link_button1.jpg",
      title: "智慧零售",
      href: "",
    },
    {
      src: "https://e-biz.hannstar.com/img/index_link_button2.jpg",
      title: "智能建築",
      href: "",
    },
    {
      src: "https://e-biz.hannstar.com/img/index_link_button3.jpg",
      title: "交通運輸",
      href: "",
    },
    {
      src: "https://e-biz.hannstar.com/img/index_link_button4.jpg",
      title: "智慧育樂",
      href: "",
    },
    {
      src: "https://e-biz.hannstar.com/img/index_link_button5.jpg",
      title: "健康關懷",
      href: "",
    },
    {
      src: "https://e-biz.hannstar.com/img/index_link_button6.jpg",
      title: "智能製造",
      href: "",
    },
  ];
  const graphicsCardData = [
    {
      src: "https://e-biz.hannstar.com/slider_img/smart_sport_mobile3.jpg",
      title: "產品查詢",
      content:
        "結合平台大數據運行，提供多元化產品，以符合客戶需求",
      href: "",
      btnText: "了解更多",
    },
    {
      src: "https://e-biz.hannstar.com/slider_img/special-material-s.jpg",
      title: "特殊材料",
      content: "提供客戶線上專案報價服務",
      href: "",
      btnText: "了解更多",
    },
    {
      src: "https://e-biz.hannstar.com/slider_img/smart_retail_mobile4.jpg",
      title: "智慧方案整合",
      content:
        "一站式方案整合服務，提供嵌入式主板、顯示器與UI設計服務",
      href: "",
      btnText: "了解更多",
    },
    {
      src: "https://e-biz.hannstar.com/slider_img/Quotation-s.jpg",
      title: "報價",
      content:
        "提供客戶線上專案報價服務",
      href: "",
      btnText: "了解更多",
    },
  ];
  const allData = {
    bannerData,
    messageCenterData,
    platformEntryData,
    graphics2Data,
    graphicsCardData,
  };

  const AboutTextBlock = () => {
    return (
      <div className={`${pageName}AboutTextBlock`}>
        <div className="title">關於產品行銷服務平台</div>
        <div className="content">
          透過產品智慧優選系統，結合平台大數據運行，客戶能快速找到相對應合適的顯示面板及產品資訊。顯示應用領域包括：智能製造、智能建築、交通運輸、智慧零售、健康關懷、智慧育樂。
        </div>
      </div>
    );
  };

  const ServiceBlock = () => {
    return (
      <div className={`${pageName}ServiceBlock`}>
        <div className="title">產品應用</div>
        <Graphics2 data={allData.graphics2Data} />
      </div>
    );
  };

  const RequestTextBlock = () => {
    return (
      <div className={`${pageName}RequestTexBlock`}>
        <div className="title">提出需求</div>
        <GraphicsCard data={allData.graphicsCardData} />
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneColFullPage}
        content={<BannerSlider data={allData.bannerData} />} />
      <Columns
        type={ColType.TwoColFullPage}
        widthL={60}
        widthR={40}
        contentL={<MessageCenter data={allData.messageCenterData} />}
        contentR={<PlatformEntry data={allData.platformEntryData} />} />
      <Columns
        type={ColType.OneColFullPage}
        content={<AboutTextBlock />} />
      <Columns
        type={ColType.OneCol}
        content={<ServiceBlock />} />
      <Columns
        type={ColType.OneCol}
        content={<RequestTextBlock />} />
    </Layout>
  );
};

export default EBiz;
