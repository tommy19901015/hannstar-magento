import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import BannerText from "../../component/bannerText/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import GraphicsLine from "../../component/graphicsLine/main";
import { GraphicsLineType } from "../../component/graphicsLine/interface";
import "./css.scss";

const breadcrumbsData = {
  title: "全球據點",
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
    }
  ]
}

const strongholdData = [
  {
    title: "瀚宇彩晶股份有限公司 台北總公司",
    address: "台北市信義區松智路1號26樓",
    phone: "(886)2-27297777 / 股東權利義務事項請撥 (886)2-2790-5885"
  },
  {
    title: "瀚宇彩晶股份有限公司 內湖營業所",
    address: "台北市內湖區行善路168巷15號4樓",
    phone: "(886)2-55550077"
  },
  {
    title: "瀚宇彩晶股份有限公司 台南科學園區分公司",
    address: "台南科學工業園區台南市新市區南科二路35號",
    phone: "(886)6-5052880"
  },
  {
    title: "南京瀚宇彩欣科技有限責任公司",
    address: "南京經濟技術開發區恆飛路18號",
    phone: "(86)25-85803888"
  },
  {
    title: "彩晶商貿技術服務 (深圳) 有限公司",
    address: "深圳市福田區 梅林街道梅都社區梅林路48號 卓越梅林中心廣場(南區) A2201",
    phone: "(86)0755-82543396"
  },
]

const allData = {
  breadcrumbsData,
  strongholdData
}

const Stronghold: React.FC = () => {

  const TextBlock = () => {
    return (
      <div>
        <div className="leftBlock">
          <img alt="全球據點" src="https://webdev.hannstar.com/upload/stronghold_map_list/twL_stronghold_map_22A26_6dxvf6rzgt.jpg" />
        </div>
        <div className="rightBlock">
          {allData.strongholdData.map(item => {
            return (<div>
              <div>
                <span>{item.title}</span>
                <span></span>
              </div>
              <div>
                <span>公司地址</span>
                <span>{item.address}</span></div>
              <div>
                <span>連絡電話</span>
                <span>{item.phone}</span>
              </div>
            </div>)
          })}
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Breadcrumbs data={allData.breadcrumbsData} />
      <Columns
        type={ColType.OneCol}
        content={<TextBlock />} />
    </Layout>
  );
};

export default Stronghold;
