import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
  props: [
    {
      type: "FullBanner",
      data: [
        {
          src: "https://fakeimg.pl/1000x700/?text=Image",
          title: "",
          text: "",
          textAlign: TextAlign.BottomLeft,
        },
      ],
    },
    {
      type: "FullBanner",
      data: [
        {
          src: "https://fakeimg.pl/1000x700/?text=Image",
          title: "關於產品行銷服務平台",
          text: "透過產品智慧優選系統，結合平台大數據運運行，客戶能快速找到相對應合適的顯示面板及產品資訊。顯示應用領域包括：智能製造、智能建築、交通運輸、智慧零售、健康關懷、智慧育樂。",
          textAlign: TextAlign.Center,
        },
      ],
    },
    {
      type: "TitleContentBlock",
      data: [
        {
          title: "產品應用",
          content:
            "",
        },
      ],
    },
    {
      type: "TitleContentImgGrid",
      data: [
        {
          rowCount:3, 
          imgGrids:[
            { src: "https://fakeimg.pl/100x60/?text=Image", href:"" },
            { src: "https://fakeimg.pl/100x60/?text=Image", href:"" },
            { src: "https://fakeimg.pl/100x60/?text=Image", href:"" },
            { src: "https://fakeimg.pl/100x60/?text=Image", href:"" },
            { src: "https://fakeimg.pl/100x60/?text=Image", href:"" },
            { src: "https://fakeimg.pl/100x60/?text=Image", href:"" },
          ]
        }
      ]
    },
    {
      type: "TitleContentBlock",
      data: [
        {
          title: "提出需求",
          content:
            "",
        },
      ],
    },
    {
      type: "TitleContentGraphicsCard",
      data: [
        {
          rowCount: 4,
          theme: GraphicsTheme.Theme1,
          data: [
            {
              src:"https://fakeimg.pl/100x100/?text=Image",
              title:"產品查詢",
              text:"結合平台大數據運行，提供多元化產品，以符合客戶需求",
              href:"",
              btnText:"",
            },
            {
              src:"https://fakeimg.pl/100x100/?text=Image",
              title:"特殊材料",
              text:"提供客戶線上專案報價服務",
              href:"",
              btnText:"",
            },
            {
              src:"https://fakeimg.pl/100x100/?text=Image",
              title:"智慧方案整合",
              text:"一站式方案整合服務，提供嵌入式主板、顯示器與UI設計服務",
              href:"",
              btnText:"",
            },
            {
              src:"https://fakeimg.pl/100x100/?text=Image",
              title:"報價",
              text:"提供客戶線上專案報價服務",
              href:"/",
              btnText:"優選產品",
              hrefSec:"/",
              btnTextSec:"客製化服務",
            }
          ],
        }
      ]
    },

  ],
}

  return PageType;
}

export default usePageData;
