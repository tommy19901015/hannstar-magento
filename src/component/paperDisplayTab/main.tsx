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
                  src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/banner_smart_parking_meter.jpg`,
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "5.46吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5.46 inch" },
                      { text: "• 解析度 ：720(RGB)x1280" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "7.8吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 7.8 inch" },
                      { text: "• 解析度 ：768 x1024" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]

                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "10吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 10 inch" },
                      { text: "• 解析度 ：1536(RGB)x2048" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]

                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "10.3吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 10.3 inch" },
                      { text: "• 解析度 ：1440x1920" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：65K   " },
                    ]

                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/finished_product_parking_meter.png`,
                    title: "智慧停車收費系統",
                    content: [
                      { text: "• 特大屏幕：130mm X 86mm " },
                      { text: "• 鋁合金外殼，聚碳酸酯顯示窗口" },
                      { text: "• 高度防水、防塵、防爆" },
                      { text: "• 省電設計、一組電池能支援3個月" },
                      { text: "• 記憶體備份和加密處理" },
                    ]
                  }
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/parking_meter/partnership_greenideas.png`,
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/parking_meter/partnership_greenideas.png`,
                      title: "",
                      text: "綠創新開發的智慧停車柱，讓路邊停車不再需要靠收費員記錄和收費，而是透過柱子裡裝載的雷達和車牌辨識系統，自動計算停車時間和繳費金額，並整合金流後台，讓車主直接透過信用卡或行動支付繳費。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "5.46吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5.46 inch" },
                      { text: "• 解析度 ：720(RGB)x1280" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "7.8吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 7.8 inch" },
                      { text: "• 解析度 ：768 x1024" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]

                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "10吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 10 inch" },
                      { text: "• 解析度 ：1536(RGB)x2048" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]

                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "10.3吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 10.3 inch" },
                      { text: "• 解析度 ：1440x1920" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：65K   " },
                    ]

                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/finished_product_parking_meter.png`,
                    title: "智慧停車收費系統",
                    content: [
                      { text: "• 特大屏幕：130mm X 86mm " },
                      { text: "• 鋁合金外殼，聚碳酸酯顯示窗口" },
                      { text: "• 高度防水、防塵、防爆" },
                      { text: "• 省電設計、一組電池能支援3個月" },
                      { text: "• 記憶體備份和加密處理" },
                    ]
                  }
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/parking_meter/partnership_greenideas.png`,
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/parking_meter/partnership_greenideas.png`,
                      title: "",
                      text: "綠創新開發的智慧停車柱，讓路邊停車不再需要靠收費員記錄和收費，而是透過柱子裡裝載的雷達和車牌辨識系統，自動計算停車時間和繳費金額，並整合金流後台，讓車主直接透過信用卡或行動支付繳費。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "5.46吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5.46 inch" },
                      { text: "• 解析度 ：720(RGB)x1280" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "7.8吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 7.8 inch" },
                      { text: "• 解析度 ：768 x1024" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]

                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "10吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 10 inch" },
                      { text: "• 解析度 ：1536(RGB)x2048" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]

                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "10.3吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 10.3 inch" },
                      { text: "• 解析度 ：1440x1920" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：65K   " },
                    ]

                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/finished_product_parking_meter.png`,
                    title: "智慧停車收費系統",
                    content: [
                      { text: "• 特大屏幕：130mm X 86mm " },
                      { text: "• 鋁合金外殼，聚碳酸酯顯示窗口" },
                      { text: "• 高度防水、防塵、防爆" },
                      { text: "• 省電設計、一組電池能支援3個月" },
                      { text: "• 記憶體備份和加密處理" },
                    ]
                  }
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/parking_meter/partnership_greenideas.png`,
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/parking_meter/partnership_greenideas.png`,
                      title: "",
                      text: "綠創新開發的智慧停車柱，讓路邊停車不再需要靠收費員記錄和收費，而是透過柱子裡裝載的雷達和車牌辨識系統，自動計算停車時間和繳費金額，並整合金流後台，讓車主直接透過信用卡或行動支付繳費。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "5.46吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5.46 inch" },
                      { text: "• 解析度 ：720(RGB)x1280" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "7.8吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 7.8 inch" },
                      { text: "• 解析度 ：768 x1024" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]

                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "10吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 10 inch" },
                      { text: "• 解析度 ：1536(RGB)x2048" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M   " },
                    ]

                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "10.3吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 10.3 inch" },
                      { text: "• 解析度 ：1440x1920" },
                      { text: "• 介面 ：MIPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：65K   " },
                    ]

                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/finished_product_parking_meter.png`,
                    title: "智慧停車收費系統",
                    content: [
                      { text: "• 特大屏幕：130mm X 86mm " },
                      { text: "• 鋁合金外殼，聚碳酸酯顯示窗口" },
                      { text: "• 高度防水、防塵、防爆" },
                      { text: "• 省電設計、一組電池能支援3個月" },
                      { text: "• 記憶體備份和加密處理" },
                    ]
                  }
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/parking_meter/partnership_greenideas.png`,
                      title: "",
                      text: "綠創新是智慧城市解決方案供應商，我們與香港電訊及法國FLOWBIRD公司合作，獲得香港運輸署智慧路邊停車系統的建置及維護，是目前全球最大智慧路邊停車計費系統。 ",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/parking_meter/partnership_greenideas.png`,
                      title: "",
                      text: "綠創新開發的智慧停車柱，讓路邊停車不再需要靠收費員記錄和收費，而是透過柱子裡裝載的雷達和車牌辨識系統，自動計算停車時間和繳費金額，並整合金流後台，讓車主直接透過信用卡或行動支付繳費。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
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
                  title: "行車記錄儀",
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/outdoor_digital_signage/bus_stop.jpg`,
            title: "戶外候車亭",
            content: [
              {
                titleContent: {
                  title: "戶外候車亭",
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
                  ]
                },
              }
            ]
          },
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/outdoor_digital_signage/self_checkin.jpg`,
            title: "自助登機系統",
            content: [
              {
                titleContent: {
                  title: "自助登機系統",
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
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "2.9吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 2.9 inch" },
                      { text: "• 解析度 ：168x384" },
                      { text: "• 介面 ：SPI" },
                      { text: "• 亮度 ：80" },
                      { text: "• 自然彩度 ：-" },
                      { text: "• 可顯示顏色數 ：4 color" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/2.9_G0207_029GPW2-90000A-SX/v-02fog-f.jpg`,
                    title: "3.5吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 3.5 inch" },
                      { text: "• 解析度 ：640(RGB)x480" },
                      { text: "• 介面 ：RGB / LVDS" },
                      { text: "• 亮度 ：100" },
                      { text: "• 自然彩度 ：27 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "4.1吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 4.1 inch" },
                      { text: "• 解析度 ：480(RGB)x360" },
                      { text: "• 介面 ：MIPI / RGB" },
                      { text: "• 亮度 ：120" },
                      { text: "• 自然彩度 ：190 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/4.1_G0405_041GPN1-90000A-SX/h-02fog-f.jpg`,
                    title: "5.0吋顯示模組",
                    titleSrc: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/eco-friendly.png`,
                    content: [
                      { text: "• 面板尺寸: 5 inch" },
                      { text: "• 解析度 ：800x480" },
                      { text: "• 介面 ：TTL" },
                      { text: "• 亮度 ：300" },
                      { text: "• 自然彩度 ：40 %" },
                      { text: "• 可顯示顏色數 ：16.7M" },
                    ]
                  },
                ],
                recommend2: [
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_OKGO.png`,
                    title: "OKGO SmartBar",
                    content: [
                      { text: "• 5 吋顯示紙" },
                      { text: "• 整合語音音控功能" },
                      { text: "• 指紋辨識功能" },
                      { text: "• 特殊防盜設計" },
                      { text: "• 支援多種訊號串接" },
                    ]
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/finished_product_microprogram.png`,
                    title: "電動自行車車錶",
                    content: [
                      { text: "• 1.6 吋顯示紙" },
                      { text: "• 電量、助力、速度、時間即時顯示" },
                      { text: "• CAN BUS / CANopen 通訊介面" },
                      { text: "• 內建Light sensor可自動控制車燈或點亮" },
                      { text: "• 內建G - senosr可客製開發相關應用" },
                    ]
                  },
                ],
                partner: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_OKGO.png`,
                      title: "",
                      text: "OKGO為專精於電動車和綠能產業的系統整合應用設備方案商，其中有涉及整車ID與結構設計、車輛系統整合，透過核心產品IOT Box 幫助客戶快速串接各種設備的通訊協議，實現遠端管理、設備資訊搜集和遠端更新與控制，讓商模的應用更加廣泛！",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/partnership_microprogram.png`,
                      title: "",
                      text: "微程式資訊提供產業IoT物聯網科技服務，專注於電子支付、無線感測與雲端數據三大領域，透過使用者研究、軟硬技術垂直整合、終端感應裝置、行動app、雲端服務平台到大數據分析的核心技術，協助產業進行創新升級。",
                    },
                  ]
                },
                customer: {
                  rowCount: 3,
                  data: [
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_OKGO.png`,
                      title: "",
                      text: "OKGO在車輛上採用瀚宇彩晶5吋顯示紙作為智慧車聯網螢幕標配，騎士更易判讀行車資訊，並具備自動感光調節。可透過Miracast方式與騎士的手機App進行連結，在手機上能獲取完整資訊，如停放狀況、電池用量等，讓騎士隨時掌握愛車狀況。",
                    },
                    {
                      src: `${urlConfig().s3Url}/Image/paperdisplay/applications/smart_transportation/bicycle_speed_meter/case_microprogram.png`,
                      title: "",
                      text: "微程式研發的YouBike 2.0E電力輔助公共自行車系統搭載瀚宇彩晶顯示紙，使螢幕上掃碼/驗證碼資訊於陽光下仍清晰可視，耐候性佳，即便長時間經豔陽曝曬或風吹雨淋皆禁得起考驗，車輛數據一目了然。",
                    },
                  ]
                },
              }
            ]
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
        <div className="productTitle">{data.title}</div>
        {data.titleSrc && <img alt={data.title} src={data.titleSrc} />}
      </div>
      <ul className="contentBlock">
        {data.content.map((item: any) => <li>{item.text}</li>)}
      </ul>
      <div className="btnBlock">
        <div className="btn">詳細規格</div>
        <div className="btn ask">詢價</div>
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
