import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Group6344.png`,
            title: "人才，是企業面對激烈競爭環境時，最能展現力量的優勢之一期待創新、熱情、勇於突破的你加入我們的團隊",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle1914.png`,
            title: "歡迎光電面板製造人才",
            btnText: "查看104職缺列表",
            btnHref: "#",
            bgColor: "#e9e9e9",
            content:
              "歡迎加入彩晶，前進光電製造最前線共創精彩價值，為你的職涯增添色彩"
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle1918.png`,
            title: "校園招募",
            btnText: "查看104職缺列表",
            btnHref: "/",
            bgColor: "#e9e9e9",
            content: "我們致力於招募來自各地大學的優秀人才。加入彩晶工作職涯是最棒的選擇 ，歡迎喜歡挑戰與熱忱學習的您。我們為來自不同背景的學生，提供各種合適的工作機會，打造友善職場，多元共融的組織文化是至關重要的。到職後你將由mentor引導參與工作與學習，實現自己的工作目標並成就未來。"
          },
        ]
      },
      {
        type: "ArticleListContent",
        data: [
          {
            title: "應徵流程",
            data: [
              {
                catalog: "",
                articleDatas: [
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image503.png`,
                    title: "步驟1-工作搜尋",
                    subTitle: "facebook  / 瀚宇彩晶104",
                    description: [
                      "依據個人的學歷、經歷及專業，搜尋有興趣的職缺"
                    ],
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image506.png`,
                    title: "步驟2-履歷投遞",
                    subTitle: "瀚宇彩晶104",
                    description: [
                      "履歷投遞後，主管將根據履歷合適程度進行審閱",
                      "同時也會評估你的履歷是否適合其他職務"
                    ],
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image509.png`,
                    title: "步驟3-電話訪談",
                    subTitle: "",
                    description: [
                      "合適者人資會進一步與你聯繫並邀請面談",
                      "初步訪談了解你的經歷，並說明後續面試流程",
                      "透過mail提供面試資訊與確認面試時間"
                    ],
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image512.png`,
                    title: "步驟4-填寫彩晶人事資料表",
                    subTitle: "",
                    description: "",
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image513.png`,
                    title: "步驟5-到場或視訊參加面談",
                    subTitle: "",
                    description: [
                      "依據與你約定的面試時間到場或視訊進行面談"],
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image514.png`,
                    title: "步驟6-接獲錄取通知與報到",
                    subTitle: "",
                    description: ["資歷查核後，人資單位將以電話通知並說明報到程序，最後寄發錄取通知書"],
                    href: "",
                  }
                ],
              }
            ]
          },
        ]
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "熱門職缺",
            content: "",
          },
        ],
      },
      {
        type: "TabProductListBlock",
        data: [
          {
            tabName: "台北",
            tabData: [
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle292.png`,
                title: "全球車載業務",
                isHot: true,
                content: "您會需要負責與全球頂尖的車廠進行顯示產品的推廣與銷售，藉此您會了解國際車廠最新的需求與趨勢，讓自己走在車用電子領域的最前線。",
                productId: "1",
                btnTextL: "查看職缺內容",
                btnTextR: "投遞履歷"
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle293.png`,
                title: "全球工控業務",
                isHot: true,
                content: "需要與國內外系統大廠及方案整合公司合作，接觸智慧娛樂、智慧醫療、智慧交通等各項引領潮流的新科技產品，一起讓顯示器增進我們的生活樂趣，並帶來更多的便利。",
                productId: "2",
                btnTextL: "查看職缺內容",
                btnTextR: "投遞履歷"
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle296.png`,
                title: "工控/車載PM工程師",
                isHot: true,
                content: "您將運用負責工業和汽車產品領域海外品牌客戶的整體解決方案產品，共同創造出多元的科技新品，且跨部門與其他夥伴密切合作，以優化產品功能。",
                productId: "3",
                btnTextL: "查看職缺內容",
                btnTextR: "投遞履歷"
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle295.png`,
                title: "系統軟體工程師",
                isHot: true,
                content: "系統程式開發與建置系統支持企業運營與各項業務推展，需收集各單位對於系統應用的需求，進行系統開發或維護的提供最佳解決方案。",
                productId: "4",
                btnTextL: "查看職缺內容",
                btnTextR: "投遞履歷"
              },
            ]
          },
          {
            tabName: "台南",
            tabData: [
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle296.png`,
                title: "工控/車載PM工程師",
                isHot: true,
                content: "您將運用負責工業和汽車產品領域海外品牌客戶的整體解決方案產品，共同創造出多元的科技新品，且跨部門與其他夥伴密切合作，以優化產品功能。",
                productId: "3",
                btnTextL: "查看職缺內容",
                btnTextR: "投遞履歷"
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle295.png`,
                title: "工控/系統軟體工程師",
                isHot: true,
                content: "系統程式開發與建置系統支持企業運營與各項業務推展，需收集各單位對於系統應用的需求，進行系統開發或維護的提供最佳解決方案。",
                productId: "4",
                btnTextL: "查看職缺內容",
                btnTextR: "投遞履歷"
              },
            ]
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
