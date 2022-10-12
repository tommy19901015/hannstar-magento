import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Banner from "../../component/banner/main";
import { TextAlign } from "../../component/banner/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import TitleContent from "../../component/titleContent/main";
import Graphics3 from "../../component/graphics3/main";
import "./css.scss";

const bannerProps = {
  src: "https://partner.hannstar.com/images/supplier/supplychain/banner.jpg",
  title: "綠色供應鏈",
  text: "瀚宇彩晶致力於提供永續、環境友善且高品質的產品給客戶，作為全球領導性面板供應商，我們期待與供應商夥伴共同創造永續經營價值",
  textAlign: TextAlign.BottomLeft,
}

const breadcrumbProps = {
  title: "",
  breadcrumbsLink: [
    {
      text: "首頁",
      href: "",
    },
    {
      text: "綠色供應鏈",
      href: "",
    },
  ],
}

const titleContentProps = {
  title: "綠色供應鏈",
  content: "瀚宇彩晶身為全球面板龍頭，承諾提供環保永續性產品給客戶我們將幫助合作夥伴達成永續經營及高效能產品，成為我們永續供應鏈成員"
}

const tab1_titleContentProps = {
  title: "勞工權益",
  content: "瀚宇彩晶位以責任商業聯盟(RBA)規範項目進行供應商風險評估與稽核，承諾維護勞工健康、職場安全並持續改善其權益，安排年度內部稽核及召開管理審查會議及時糾正，亦將此承諾要求認證供應商遵守並執行，落實彩晶善循環共創更好的職場環境。"
}

const graphics3Props = [{
  src: "https://partner.hannstar.com/images/supplier/supplychain/supplier.png",
  title: "成為瀚宇彩晶合格供應商",
  content: "瀚宇彩晶供應商協同合作平台探索無限商機可能，致力於提供高品質且符合國際綠色法規之產品給客戶，堅守永續經營價值，加入彩晶，我們的用心您看的見!",
  btnText: "聯絡我們",
  btnHref: "/",
}]

const PartnerGreenSupplyChain: React.FC = () => {
  const pageName = "PartnerGreenSupplyChain";

  const [tabData, setTabData] = useState<any>([]);
  const [tab, setTab] = useState<number>(0);
  const allTabData: any = []

  const AchievementBlock = () => {
    return (<div className="achievementBlock">
      <div className="title">瀚宇彩晶永續成就</div>
      <div className="content">
        <img src="https://partner.hannstar.com/images/supplier/supplychain/percentage01.png" alt="percentage01" />
        <img src="https://partner.hannstar.com/images/supplier/supplychain/percentage02.png" alt="percentage02" />
        <img src="https://partner.hannstar.com/images/supplier/supplychain/percentage03.png" alt="percentage03s" />
      </div>
      <a href="/" className="reportBtn">瀚宇彩晶ESG環境永續報告書</a>
    </div>)
  }

  const TabBlock = () => {
    const changeTab = (index: number) => {
      setTab(index);
      setTabData(allTabData[0]);
    };

    const tabImgArr = [
      "https://partner.hannstar.com/images/supplier/supplychain/01.png",
      "https://partner.hannstar.com/images/supplier/supplychain/02.png",
      "https://partner.hannstar.com/images/supplier/supplychain/03.png",
      "https://partner.hannstar.com/images/supplier/supplychain/04.png",
      "https://partner.hannstar.com/images/supplier/supplychain/05.png",
      "https://partner.hannstar.com/images/supplier/supplychain/06.png",
    ]

    return (
      <div className="tabContent">
        {tabImgArr.map((src, index) => (
          <div
            className={`tab ${tab === index ? "active" : ""}`}
            onClick={() => changeTab(index)}
          >
            <img src={src} alt={index.toString()} />
          </div>
        ))}
      </div>
    );
  };

  const TabContent1 = () => {
    return (<Columns type={ColType.OneCol}
      content={<div className={`${pageName}TabContent`}>
        <TitleContent {...tab1_titleContentProps} />
        <div className="RBA">
          <div className="title">RBA行為準則</div>
          <img alt="RBA行為準則" src="https://partner.hannstar.com/images/supplier/supplychain/chart01.png" />
          <div className="text">RBA行為準則專為電子行業或電子為主要組成部份的行業和其供應鏈訂定規範，確保工作環境的安全、工人受到尊重並富有尊嚴、商業營運合乎環保性質並遵守道德操守，準則由五個部分組成: 勞工、健康與安全、環境、管理體系及商業道德，參與者必須在整個供應鏈中倡議採用本準則，並完全遵守其經營所在國家的法律、法例及法規。</div>
        </div>
        <div className={`${pageName}DownloadBlock`}>
          <div className="title">文件下載專區</div>
          <table>
            <thead>
              <tr>
                <td>文件</td>
                <td>內文簡述</td>
                <td>下載</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RBA供應商承諾書</td>
                <td>簽訂合格供應商企業社會責任承諾書</td>
                <td><img alt="download" src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png" /></td>
              </tr>
              <tr>
                <td>供應商勞工與道德風險評估表</td>
                <td>評估表準則分為勞工、健康安全、環境、道德規範及管理系統</td>
                <td><img alt="download" src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Graphics3 data={graphics3Props} />
      </div>}
    />)
  }


  return (
    <Layout>
      <div className={`${pageName}ContentBlock`}>
        <Columns type={ColType.OneColFullPage}
          content={<Banner {...bannerProps} />}
        />
        <Columns type={ColType.OneCol}
          content={<>
            <Breadcrumbs {...breadcrumbProps} />
            <TitleContent {...titleContentProps} />
            <AchievementBlock />
            <TabBlock />
            <TabContent1 />
          </>}
        />
      </div>
    </Layout>
  );
};

export default PartnerGreenSupplyChain;
