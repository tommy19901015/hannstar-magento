import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: "https://fakeimg.pl/300x100/?text=Image",
            title: "創新技術、品質服務",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "顯示紙",
            text: "低碳、環保永續顯示紙，協助實現永續未來",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 3,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src:"https://fakeimg.pl/100x100/?text=Image",
                title:"顯示紙技術",
                text:"優運用先進技術打造的顯示紙，具備超長續航力、強光下可視、真實紙感體驗等特性，顛覆傳統顯示器視覺與書寫體驗，並且更省電節能、友善環境。",
                href:"",
                btnText:"",
              },
              {
                src:"https://fakeimg.pl/100x100/?text=Image",
                title:"顯示紙產品選購",
                text:"提供多種規格之精選產品和客製化服務，滿足您各種顯示應用需求。",
                href:"",
                btnText:"",
              },
              {
                src:"https://fakeimg.pl/100x100/?text=Image",
                title:"綠色永續設計",
                text:"從材料設備供應商、產品設計、製程到物流和包材，皆致力降低產品碳足跡，為永續未來而努力。",
                href:"",
                btnText:"",
              }
            ],
          }
        ]
      },
      {
        type:"SustainabilityGraphics3",
        data:[
            {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "探索顯示紙多元應用",
                content:
                    "顯示紙低功耗、戶外可視、寬溫顯示、支援動態播放、動態顯示、全彩顯示、貼近紙感體驗等特性，提供智慧零售、交通運輸、智慧育樂、智能製造、健康關懷、智能建築六大智慧應用更環保節能的顯示解決方案。"
            },
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "瀚宇彩晶人才招募",
            text: "歡迎加入彩晶，與我們共創精彩價值，為世界增添光彩",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "綠色創新 低碳轉型成就更美好的生活",
            text: "了解我們為永續所做的努力",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
            {                     
              title: "資訊安全管理",
              content: ""
            },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount:5, 
            imgGrids:[
              { text:"瀚宇彩欣", src: "https://fakeimg.pl/100x50/?text=Image" },
              { text:"和鑫光電", src: "https://fakeimg.pl/100x50/?text=Image" },
              { text:"瀚斯寶麗", src: "https://fakeimg.pl/100x50/?text=Image" },
              { text:"瀚寓酒店", src: "https://fakeimg.pl/100x50/?text=Image" },
              { text:"彩晶文教基金會", src: "https://fakeimg.pl/100x50/?text=Image" },
            ]
          }
        ]
      },
    ],
  };

  return PageType;
}

export default usePageData;