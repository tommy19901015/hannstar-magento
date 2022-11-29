import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Banner from "../../component/banner/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import GraphicsLine from "../../component/graphicsLine/main";
import { GraphicsLineType } from "../../component/graphicsLine/interface";
import "./css.scss";
import urlConfig from "../../config/urlSetting.json";

const breadcrumbsData = {
  title: "",
  breadcrumbsLink: [
    {
      text: "首頁",
      href: "",
    },
    {
      text: "關於瀚宇彩晶",
      href: "",
    },
    {
      text: "全球據點",
      href: "",
    },
  ],
};

const strongholdData = [
  {
    title: "瀚宇彩晶股份有限公司 台北總公司",
    address: "台北市信義區松智路1號26樓",
    phone: "(886)2-27297777 / 股東權利義務事項請撥 (886)2-2790-5885",
  },
  {
    title: "瀚宇彩晶股份有限公司 內湖營業所",
    address: "台北市內湖區行善路168巷15號4樓",
    phone: "(886)2-55550077",
  },
  {
    title: "瀚宇彩晶股份有限公司 台南科學園區分公司",
    address: "台南科學工業園區台南市新市區南科二路35號",
    phone: "(886)6-5052880",
  },
  {
    title: "南京瀚宇彩晶科技有限責任公司",
    address: "南京經濟技術開發區恆飛路18號",
    phone: "(86)25-85803888",
  },
  {
    title: "彩晶商貿技術服務 (深圳) 有限公司",
    address:
      "深圳市福田區 梅林街道梅都社區梅林路48號 卓越梅林中心廣場(南區) A2201",
    phone: "(86)0755-82543396",
  },
];

const allData = {
  breadcrumbsData,
  strongholdData,
};

const AboutStronghold: React.FC = () => {
  const pageName = "AboutStronghold";

  const TextBlock = () => {
    return (
      <div className={`${pageName}Content`}>
        <div className="mainTitle">全球據點</div>
        <div className={`${pageName}Block`}>
          <div className="leftBlock">
            <img
              alt="全球據點"
              src={`${urlConfig.s3Url}/Image/hannstar/about/GlobalLocation/map.jpg`}
            />
          </div>
          <div className="rightBlock">
            {allData.strongholdData.map((item) => {
              return (
                <div className="contentBlock">
                  <div className="titleBlock">
                    <span className="icon"></span>
                    <span className="title">{item.title}</span>
                  </div>
                  <div className="addressBlock">
                    <span className="title">公司地址</span>
                    <span className="content">{item.address}</span>
                  </div>
                  <div className="phoneBlock">
                    <span className="title">連絡電話</span>
                    <span className="contrnt">{item.phone}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={
          <>
            <Breadcrumbs {...allData.breadcrumbsData} />
            <TextBlock />
          </>
        }
      />
    </Layout>
  );
};

export default AboutStronghold;
