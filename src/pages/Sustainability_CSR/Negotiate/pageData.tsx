import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../../component/banner/interface";
import { GraphicsTheme } from "../../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";
import { urlConfig } from "../../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/topbanner_1.png`,
            title: "永續管理",
            text: "追求成長與創新，深耕企業文化與核心價值，攜手利害關係人，透過價值鏈的延伸，實現永續經營的目標。",
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "BreadcrumbsBlock",
        data: [
          {
            title: "",
            breadcrumbsLink: [
              {
                text: "企業永續",
                href: "",
              },
              {
                text: "永續管理",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "SustainabilityTab",
        data: [
          {
            type: "csr",
            activeId: 2,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "重大永續議題辨識流程",
            content:
              "透過傾聽和蒐集利害關係人之想法和回饋，可以了解利害關係人對瀚宇彩晶的經營方向需要優先關注的重大議題，確保我們在實踐企業永續發展的道路方向上，可以納入利害關係人的聲音，使未來的營運與推動更加完善。",
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 3,
            imgGrids: [
              {
                text: "1. 盤點永續相關議題",
                content: "依據 GRI 準則以及美國永續會計準則(SASB)，並同步考量所屬產業營運方向及關注議題之趨勢，確認永續議題接軌國際報導準則與同業趨勢，彙整出12個永續議題。",
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/demopic.png`,
              },
              {
                text: "2. 辨識利害關係人及其關注議題",
                content: "透過內部討論鑑別出：員工、客戶、供應商、資金提供者、政府機關、社區、媒體及非政府組織8大族群的利害關係人，並發放關注度問卷以了解其關注議題。",
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/demopic_1.png`,
              },
              {
                text: "3. 排序與鑑別重大議題",
                content: "針對問卷的回收結果以了解每個永續議題的受關注程度。另一方面進行內部討論以評估各永續議題對於環境、經濟與社會的衝擊程度。",
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/demopic_2.png`,
              },
            ],
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Rectangle68(3).png`,
            title: "",
            text: "",
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
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/MaskGroup.png`,
                title: "環境(E)",
                text: [
                  "廢棄物管理★",
                  "低碳產品★",
                  "氣候變遷與能源管理",
                  "水資源管理",
                ],
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/MaskGroup_1.png`,
                title: "社會(S)",
                text: [
                  "產品無毒化★",
                  "人才吸引與留任★",
                  "職業健康與安全★",
                  "責任採購",
                  "人才培育與發展",
                  "社會關懷與參與",
                ],
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/MaskGroup_2.png`,
                title: "經濟治理(G)",
                text: ["誠信經營★", "營運績效"],
                href: "",
                btnText: "",
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "4. 確認與討論",
              content:
                "透過重大性分析，我們鑑別出6項重大議題並呈報內部管理階層確認，由各ESG專案小組評估其完整性、影響範疇與邊界。",
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Rectangle69.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Group5945.png`,
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "利害關係人溝通",
              content: "",
            },
            banner: {
              src: `${urlConfig().s3Url}/Image/hannstar/sustainability/sustainablemanagement/Group5946.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ],
      },
    ],
  };

  // const PageType: any = {
  //   tab: [
  //     { text: "董事長的話", href: "" },
  //     { text: "永續治理", href: "" },
  //     { text: "利害關係人議合", href: "" },
  //     { text: "利害關係人溝通管道", href: "" },
  //   ],
  //   graphics3: {
  //     src: "https://fakeimg.pl/1000x700/?text=Image",
  //     title: "請參閱瀚宇彩晶2021年度永續報告書",
  //     content: "第1章  永續管理",
  //     btnText: "閱讀全文",
  //     btnHref: "/",
  //     bgColor: "#F6F6F6",
  //   },
  // };

  return PageType;
}

export default usePageData;
