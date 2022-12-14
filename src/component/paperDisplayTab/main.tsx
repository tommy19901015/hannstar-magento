import React, { useState, useEffect, useRef } from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import TitleContent from "../../component/titleContent/main";
import Banner from "../../component/banner/main";
import GraphicsCard from "../graphicsCard/main";
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/smart_parking/charging_station.jpg`,
            title: "電動充電樁",
            content: [
              {
                titleContent: {
                  title: "電動充電樁",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/smart_parking/parkinglot_management.jpg`,
            title: "停車場管理",
            content: [
              {
                titleContent: {
                  title: "停車場管理",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/smart_parking/parking_guidance.jpg`,
            title: "停車場導引",
            content: [
              {
                titleContent: {
                  title: "停車場導引",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          }
        ],
      },
      {
        title: "智慧車聯",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/vehicle_to_everything/bicycle_speed_meter.jpg`,
            title: "自行車碼表",
            content: [
              {
                titleContent: {
                  title: "自行車碼表",
                  content: "無論是騎自行車通勤、運動或是參加專業比賽，戶外騎乘因受風吹日曬、下雨、溫度等環境因素影響，自行車碼表會有強光下看不清顯示資訊、於炎熱或寒冷環境下顯示異常的問題。此外，由於戶外無法充電，電力不足也是騎乘時常面臨的困擾。顯示紙超低功耗、強光下可視與寬溫顯示特性，可延長自行車碼表使用時間、使螢幕於強光下依舊清晰鮮明、在極端溫度下仍維持正常顯示，解決環境影響及電池續航力問題; 另外，顯示紙亦具備多色與動態顯示，提供更視覺化分析指標與路線資訊，為自行車手帶來更優質的騎乘體驗。"
                },
                bannerBlock: {
                  src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/banner_bicycle_speed_meter.png`,
                  title: "",
                  text: "",
                },
                blueBlock: [
                  {
                    title: "超長續航使用",
                    content: "採用無背光模組設計搭配超低功耗IC，使裝置功耗可降低至0.05%，提升裝置電池續航力與使用壽命。",
                  },
                  {
                    title: "戶外移動使用",
                    content: "運用ABT技術(Argentum Birefringent Technology)，透過反射環境光呈現畫面顯示，於強光下畫面與圖片仍鮮明、清晰可視。",
                  },
                  {
                    title: "多色顯示",
                    content: "可呈現黑白紅、黑白黃、8 色、16 色、64色、65K等多種顯示色彩，滿足廣告圖片、資訊顯示等應用多彩顯示需求。",
                  },
                  {
                    title: "戶外極端溫度",
                    content: "運用寬溫顯示技術，顯示紙可克服極端溫度挑戰(-40℃~85℃)，使於戶外炎熱或寒冷環境下，仍可維持畫面正常顯示。",
                  },
                  {
                    title: "動態顯示",
                    content: "顯示紙響應時間短(<7ms)，可支持流暢、無延遲影片播放。",
                  },
                  {
                    title: "不刺眼(安全)",
                    content: "無背光、反射環境光呈現畫面顯示的顯示紙，可降低藍光對眼睛的傷害。",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/vehicle_to_everything/motorcycle_speed_meter.jpg`,
            title: "機車儀表",
            content: [
              {
                titleContent: {
                  title: "機車儀表",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/vehicle_to_everything/chartplotter.jpg`,
            title: "航圖機",
            content: [
              {
                titleContent: {
                  title: "航圖機",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/vehicle_to_everything/dashcam.jpg`,
            title: "行車記錄儀",
            content: [
              {
                titleContent: {
                  title: "停車場導引",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/vehicle_to_everything/instrument_cluster.jpg`,
            title: "舵輪控制系統",
            content: [
              {
                titleContent: {
                  title: "舵輪控制系統",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/vehicle_to_everything/back_seat_entertainment.jpg`,
            title: "後座娛樂系統",
            content: [
              {
                titleContent: {
                  title: "後座娛樂系統",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          }
        ],
      },
      {
        title: "資訊看板",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/outdoor_digital_signage/bus_stop.jpg`,
            title: "智慧公車站牌",
            content: [
              {
                titleContent: {
                  title: "智慧公車站牌",
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
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                    {
                      src: "https://fakeimg.pl/350x200/?text=Partner",
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作",
                    }
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/outdoor_digital_signage/roadsign_instantupdate.jpg`,
            title: "即時號誌更新",
            content: [
              {
                titleContent: {
                  title: "即時號誌更新",
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
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/outdoor_digital_signage/bus_stop.jpg`,
            title: "戶外候車亭",
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
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/outdoor_digital_signage/self_checkin.jpg`,
            title: "自助登機系統",
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
    ]
  }

  const changeTab = (index: number) => {
    setTab(index)
    setSecTab(0)
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
        <div className="partnerBlock">
          <div className="title">合作夥伴</div>
          <div className="partnerContent">
            <GraphicsCard {...item.partner} />
          </div>
        </div>
        <div className="customerBlock">
          <div className="title">客戶案例</div>
          <div className="customerContent">
            <GraphicsCard {...item.customer} />
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
