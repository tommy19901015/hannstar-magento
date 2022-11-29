import { useTranslation } from "react-i18next";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { GrapTheme } from "../../component/graphics3/interface";
import urlConfig from "../../config/urlSetting.json";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "瀚宇關係企業",
            content: ""
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
                text: "首頁",
                href: "",
              },
              {
                text: "關於瀚宇彩晶",
                href: "",
              },
              {
                text: "瀚宇關係企業",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/about/family/hannstar.jpg`,
            title: "瀚宇彩晶",
            image: "https://fakeimg.pl/80x50/?text=Image",
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:
              "南京瀚宇彩晶的主要經營業務為液晶面板之後段模組工程 (LCM) 及觸控產品。透過不斷的製程精進與設備更新，並配合瀚宇彩晶的 LCD 製程，垂直整合資源，提供客戶卓越的顯示產品",
            comment: {
              commentTitle: "聯絡資訊",
              comments: [
                "電話：(86)25-85803888",
                "傳真：(86)25-85801711",
                "地址：南京經濟技術開發區恆飛路18號",
              ]
            },
            moreHref: "/",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/about/family/hannstouch.jpg`,
            title: "和鑫光電",
            image: "https://fakeimg.pl/80x50/?text=Image",
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:
              "以「人類智慧生活最佳夥伴」為願景，聚焦觸控應用與TFT背板解決方案之發展，致力以策略創新與資源整合建立優勢。和鑫的觸控解決方案可分別應用於AMOLED與LCD 顯示器等不同終端領域，產品應用涵蓋穿戴裝置、手機、平板電腦、筆記型電腦、一體成型電腦與工業用顯示器產品；TFT背板解決方案可應用於電子標籤、電子書、電子看板等產品。",
            comment: {
              commentTitle: "聯絡資訊",
              comments: [
                "電話：(886)6-5053959",
                "傳真：(886)6-5053960",
                "地址：台南科學工業園區台南市善化區北園一路7號",
              ]
            },
            moreHref: "/",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/about/family/hannspree.jpg`,
            title: "瀚斯寶麗",
            image: "https://fakeimg.pl/80x50/?text=Image",
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:
              "以建立最卓越的全球化“生活時尚設計品牌”為使命，創新為核心價值融合個性化設計、精緻工藝與領先科技，提供生活中之各項設計精品並開設自營體驗店與互聯購物網，給顧客最美好的生活經驗與感動聯結!",
            comment: {
              commentTitle: "聯絡資訊",
              comments: [
                "電話：(886)2-55550077",
                "地址：台北市內湖區行善路168巷15號6樓",
              ]
            },
            moreHref: "/",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/about/family/hannshouse.jpg`,
            title: "瀚寓酒店",
            image: "https://fakeimg.pl/80x50/?text=Image",
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:
              "「瀚寓酒店」由白石集團董事長馬維欣親手打造，從金融界到科技業，再跨足文創、圖書出版到精品旅宿，以祖父馬繼良先生一代的歷史記憶與經典風華為設計靈感，歷時四年籌畫，在信義區華麗亮相。每一處細節，皆為了滿足您所有差旅所需，大坪數起居空間，放鬆疲憊身心靈，柔軟被褥與舒適沙發，為您的旅程增添家的滋味。部分房型提供簡易烹飪設備，更能滿足您心之所屬。",
            comment: {
              commentTitle: "聯絡資訊",
              comments: [
                "電話：(886)2-87583777",
                "地址：台北市信義區基隆路一段206號",
                "服務信箱：info-tpe@hannshouse.com",
              ]
            },
            moreHref: "/",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/about/family/foundation.jpg`,
            title: "彩晶文教基金會",
            image: "https://fakeimg.pl/80x50/?text=Image",
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:
              "彩晶文教基金會於2014年由瀚宇彩晶股份有限公司設立。以提倡文化教育活動，協助文化創意的發展，並致力於推廣優秀教育兒童刊物以及培養藝術人才。",
            comment: {
              commentTitle: "聯絡資訊",
              comments: [
                "電話：(02)5555-0077 #2717",
                "地址：台北市內湖區行善路168巷17號6樓",
                "服務信箱：foundation@hannstar.com",
              ]
            },
            moreHref: "/",
          },
        ]
      },
    ],
  };

  return PageType;
}

export default usePageData;
