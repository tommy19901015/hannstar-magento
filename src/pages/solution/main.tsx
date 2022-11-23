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

const Solution: React.FC = () => {
  const pageName = "solution";

  const bannerData = [
    {
      src: "https://solution.hannstar.com/Content/images/banner/home1.jpg",
      title: "方案整合及系統服務",
      content:
        "物聯網快速發展下，智慧產品也更加多元，透過豐富顯示資源與經驗，提供客戶整合性方案服務。",
    },
    {
      src: "https://solution.hannstar.com/Content/images/banner/home2.jpg",
      title: "方案產品",
      content:
        "以瀚宇彩晶創新顯示產品優化客戶體驗、創意行銷、提高運營及管理效率",
    },
    {
      src: "https://solution.hannstar.com/Content/images/banner/home3.jpg",
      title: "方案應用",
      content:
        "瀚宇彩晶顯示方案可廣范應用於各領域中，滿足全方位的智慧生活需求。",
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

  const allData = {
    bannerData,
    messageCenterData,
    platformEntryData,
    graphics2Data,
  };

  const SolutionIntegrationTextBlock = () => {
    return (
      <div className={`${pageName}SolutionIntegrationTextBlock`}>
        <div className="title">方案整合及系統服務</div>
        <div className="content">
          在數位時待下物聯網應用蓬勃發展，應用在不同層面，如家電，汽車，智慧家庭裝置等，觸控顯示器與嵌入式系統成為密不可分的整合式設計。因此瀚宇彩晶結合顯示面板資源與豐富的產業經驗推出嵌入系統整合方案服務，提供客戶不同領域多元需求的顯示器與嵌入硬件主板產品，另外附加GUI開發平台滿足各產業簡單快速的使用需求。
        </div>
      </div>
    );
  };

  const ServiceBlock = () => {
    return (
      <div className={`${pageName}ServiceBlock`}>
        <div className="title">
          完整的開發流程，幫助您的產品可靠且完美解決痛點
        </div>
        <div className={`${pageName}ImgBlock`}>
          <div className={`${pageName}TopBlock`}>
            <img
              src="https://solution.hannstar.com/Content/images/home/development-process1.png"
              alt="產品發想階段"
            />
          </div>
          <div className={`${pageName}BottomBlock`}>
            <img
              src="https://solution.hannstar.com/Content/images/home/development-process2.png"
              alt="開發實作階段"
            />
            <img
              src="https://solution.hannstar.com/Content/images/home/development-process3.png"
              alt="量產維護階段"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneColFullPage}
        content={<BannerSlider data={allData.bannerData} />}
      />
      <Columns
        type={ColType.TwoColFullPage}
        widthL={60}
        widthR={40}
        contentL={<MessageCenter />}
        contentR={<PlatformEntry data={allData.platformEntryData} />}
      />
      <Columns
        type={ColType.OneColFullPage}
        content={<SolutionIntegrationTextBlock />}
      />
      <Columns type={ColType.OneColFullPage} content={<ServiceBlock />} />
      <Columns
        type={ColType.OneCol}
        content={<Graphics2 data={allData.graphics2Data} />}
      />
    </Layout>
  );
};

export default Solution;
