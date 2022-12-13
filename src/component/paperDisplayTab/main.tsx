import React, { useState, useEffect, useRef } from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import TitleContent from "../../component/titleContent/main";
import Banner from "../../component/banner/main";
import "./css.scss";
import { urlConfig } from "../../config/urlSetting";

const PaperDisplayTab: React.FC = () => {
  const [tab, setTab] = useState<number>(0);
  const [secTab, setSecTab] = useState<number>(0);
  const componentName = "paperDisplayTab";
  const demoData = {
    tabData: [
      {
        title: "智慧停車",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/smart_parking/smart_parking_meter.jpg`,
            title: "停車收費樁",
            content: [
              {
                titleContent: {
                  title: "停車收費樁",
                  content: "停車收費樁可以自動辨識車牌與停放時間，節省了大量的開單人力，是政府機構或停車業者們的福音。由於裝置建置於戶外的特性，須面對陽光曝曬直射與風吹雨淋之使用情境，配合戶外可視、耐用強固的顯示紙螢幕，提供車主便捷操作，靈敏觸控，多元支付等功能，提升設備友善度，服務即時性、資訊透明化、繳費多元化到整體服務的滿意度，有效提升建置普及率，促進環境永續。"
                },
                bannerBlock: {
                  src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/smart_parking/banner_smart_parking_meter.jpg`,
                  title: "",
                  text: "",
                },
                blueBlock: [
                  {
                    title: "戶外固定使用",
                    content: "運用ABT技術(Argentum Birefringent Technology)，透過反射環境光呈現畫面顯示，於強光下畫面與圖片仍鮮明、清晰可視。",
                  },
                  {
                    title: "動態顯示",
                    content: "顯示紙響應時間短(<7ms)，可支持流暢、無延遲影片播放。",
                  },
                  {
                    title: "多色顯示",
                    content: "可呈現黑白紅、黑白黃、8 色、16 色、64色、65K等多種顯示色彩，滿足廣告圖片、資訊顯示等應用多彩顯示需求。",
                  },
                  {
                    title: "炎熱環境",
                    content: "運用寬溫顯示技術，顯示紙可克服極端溫度挑戰(高達85℃)，使於戶外炎熱環境下，仍可維持畫面正常顯示。",
                  },
                  {
                    title: "寒冷環境",
                    content: "顯示紙採用寬溫顯示技術，即使於寒冷環境下，仍可維持正常顯示，滿足戶外裝置低溫環境顯示需求。",
                  },
                  {
                    title: "手指觸控",
                    content: "面對人手一機無隔離物觸控的趨勢，不論是打字傳訊、手寫輸入、瀏覽網頁、遊戲操作均離不開觸控面板，彩晶以獨家的觸控面板技術，提供使用者高靈敏的觸控體驗。",
                  }
                ],
                recommend1: [
                  {
                    src: "https://fakeimg.pl/350x200/?text=Product",
                    title: "7.8吋顯示模組",
                    titleSrc: "https://fakeimg.pl/350x200/?text=Green",
                    content: [
                      { text: "‧面板尺寸:7.8inch" },
                      { text: "‧尺寸：123.8×168.3×0.8mm" },
                      { text: "‧解析度 ：768x1024" },
                      { text: "‧對比 ：15: 1" },
                      { text: "‧視角 ：130 / 90" },
                      { text: "‧介面 ：MIPI" },
                    ]

                  },
                  {
                    src: "https://fakeimg.pl/350x200/?text=Product",
                    title: "7.8吋顯示模組",
                    titleSrc: "https://fakeimg.pl/350x200/?text=Green",
                    content: [
                      { text: "‧面板尺寸:7.8inch" },
                      { text: "‧尺寸：123.8×168.3×0.8mm" },
                      { text: "‧解析度 ：768x1024" },
                      { text: "‧對比 ：15: 1" },
                      { text: "‧視角 ：130 / 90" },
                      { text: "‧介面 ：MIPI" },
                    ]
                  },
                  {
                    src: "https://fakeimg.pl/350x200/?text=Product",
                    title: "7.8吋顯示模組",
                    titleSrc: "https://fakeimg.pl/350x200/?text=Green",
                    content: [
                      { text: "‧面板尺寸:7.8inch" },
                      { text: "‧尺寸：123.8×168.3×0.8mm" },
                      { text: "‧解析度 ：768x1024" },
                      { text: "‧對比 ：15: 1" },
                      { text: "‧視角 ：130 / 90" },
                      { text: "‧介面 ：MIPI" },
                    ]
                  },
                  {
                    src: "https://fakeimg.pl/350x200/?text=Product",
                    title: "7.8吋顯示模組",
                    titleSrc: "https://fakeimg.pl/350x200/?text=Green",
                    content: [
                      { text: "‧面板尺寸:7.8inch" },
                      { text: "‧尺寸：123.8×168.3×0.8mm" },
                      { text: "‧解析度 ：768x1024" },
                      { text: "‧對比 ：15: 1" },
                      { text: "‧視角 ：130 / 90" },
                      { text: "‧介面 ：MIPI" },
                    ]
                  }
                ],
                recommend2: [
                  {
                    src: "https://fakeimg.pl/350x200/?text=Product",
                    title: "7.8吋顯示模組",
                    titleSrc: "https://fakeimg.pl/350x200/?text=Green",
                    content: [
                      { text: "‧面板尺寸:7.8inch" },
                      { text: "‧尺寸：123.8×168.3×0.8mm" },
                      { text: "‧解析度 ：768x1024" },
                      { text: "‧對比 ：15: 1" },
                      { text: "‧視角 ：130 / 90" },
                      { text: "‧介面 ：MIPI" },
                    ]

                  },
                  {
                    src: "https://fakeimg.pl/350x200/?text=Product",
                    title: "7.8吋顯示模組",
                    titleSrc: "https://fakeimg.pl/350x200/?text=Green",
                    content: [
                      { text: "‧面板尺寸:7.8inch" },
                      { text: "‧尺寸：123.8×168.3×0.8mm" },
                      { text: "‧解析度 ：768x1024" },
                      { text: "‧對比 ：15: 1" },
                      { text: "‧視角 ：130 / 90" },
                      { text: "‧介面 ：MIPI" },
                    ]
                  },
                  {
                    src: "https://fakeimg.pl/350x200/?text=Product",
                    title: "7.8吋顯示模組",
                    titleSrc: "https://fakeimg.pl/350x200/?text=Green",
                    content: [
                      { text: "‧面板尺寸:7.8inch" },
                      { text: "‧尺寸：123.8×168.3×0.8mm" },
                      { text: "‧解析度 ：768x1024" },
                      { text: "‧對比 ：15: 1" },
                      { text: "‧視角 ：130 / 90" },
                      { text: "‧介面 ：MIPI" },
                    ]
                  },
                  {
                    src: "https://fakeimg.pl/350x200/?text=Product",
                    title: "7.8吋顯示模組",
                    titleSrc: "https://fakeimg.pl/350x200/?text=Green",
                    content: [
                      { text: "‧面板尺寸:7.8inch" },
                      { text: "‧尺寸：123.8×168.3×0.8mm" },
                      { text: "‧解析度 ：768x1024" },
                      { text: "‧對比 ：15: 1" },
                      { text: "‧視角 ：130 / 90" },
                      { text: "‧介面 ：MIPI" },
                    ]
                  }
                ],
                partner: [],
                customer: []
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/smart_parking/charging_station.jpg`,
            title: "電動充電樁",
            content: {
              titleContent: {},
              bannerBlock: {},
              blueBlock: [],
              recommend1: [],
              recommend2: [],
              partner: [],
              customer: []
            }
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/smart_parking/parkinglot_management.jpg`,
            title: "停車場管理",
            content: {
              titleContent: {},
              bannerBlock: {},
              blueBlock: [],
              recommend1: [],
              recommend2: [],
              partner: [],
              customer: []
            }
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/smart_parking/parking_guidance.jpg`,
            title: "停車場導引",
            content: {
              titleContent: {},
              bannerBlock: {},
              blueBlock: [],
              recommend1: [],
              recommend2: [],
              partner: [],
              customer: []
            }
          }
        ],
      },
      {
        title: "智慧車聯",
        data: [
          {
            src: "",
            title: "自行車碼表",
            content: {
              titleContent: {},
              bannerBlock: {},
              blueBlock: [],
              recommend1: [],
              recommend2: [],
              partner: [],
              customer: []
            }
          },
          {
            src: "",
            title: "機車儀表",
            content: {
              titleContent: {},
              bannerBlock: {},
              blueBlock: [],
              recommend1: [],
              recommend2: [],
              partner: [],
              customer: []
            }
          }
        ],
      },
      {
        title: "資訊看板",
        data: [],
      }
    ]
  }

  const changeTab = (index: number) => {
    setTab(index)
  }

  const changeSecTab = (index: number) => {
    setSecTab(index)
  }

  const ProductBlock = (data: any) => {
    return (<div className="productBlock">
      <div className="imgBlock">
        <img alt={data.title} src={data.src} />
      </div>
      <div className="titleBlock">
        <div className="title">{data.title}</div>
        <img alt={data.title} src={data.titleSrc} />
      </div>
      <ul className="contentBlock">
        {data.content.map((item: any) => <li>{item.text}</li>)}
      </ul>
      <div className="btnBlock">
        <div className="btn">詳細規格</div>
        <div className="btn">詢價</div>
      </div>
    </div>)
  }

  const handleTabContentObj = (data: any) => {
    return (<div className="tabContent">
      {data[tab].data.map((item: any, index: number) =>
        <div className="imgBlock" onClick={() => changeSecTab(index)}>
          <img alt={item.title} src={item.src} />
          <div className="title">{item.title}</div>
        </div>)}
    </div>)
  }

  const handleSecTabContentObj = (data: any) => {
    return (<div className="secTabContent">
      {data[secTab].content.map((item: any) => <div className="">
        <TitleContent
          title={item.titleContent.title}
          content={item.titleContent.content} />
        <Banner {...item.bannerBlock} />
        <div className="blueBlock">
          {item.blueBlock.map((blueContent: any) =>
            <div className="blueTextBlock">
              <div className="blueTitle">{blueContent.title}</div>
              <div className="blueContent">{blueContent.content}</div>
            </div>)}
        </div>
        <div className="recommend1Block">
          <div className="title">推薦模組</div>
          <div className="productContent">
            {item.recommend1.map((productBlock: any) => <ProductBlock {...productBlock} />)}
          </div>
        </div>
        <div className="recommend2Block">
          <div className="title">推薦產品</div>
          <div className="productContent">
            {item.recommend2.map((productBlock: any) => <ProductBlock {...productBlock} />)}
          </div>
        </div>
      </div>)}
    </div>)
  }

  return (
    <Columns
      type={ColType.OneCol}
      content={<div className={`${componentName}ContentBlock`}>
        <div className={`${componentName}TabBlock`}>
          {demoData.tabData.map((item, index) => (
            <div
              className={`tab ${tab === index ? "active" : ""}`}
              onClick={() => changeTab(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
        {handleTabContentObj(demoData.tabData)}
        {handleSecTabContentObj(demoData.tabData[tab].data)}
      </div>}
    />
  );
};

export default PaperDisplayTab;
