import { useTranslation } from "react-i18next";
import { TextAlign } from "../../../component/banner/interface";
import { GraphicsTheme } from "../../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";
import urlConfig from "../../../config/urlSetting.json";

function usePageData() {
  const { t } = useTranslation();

  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/Group6339.png`,
            title: "社會共融",
            text: "只有永續的人才，才有永續的企業。盼望攜手共創永續共榮的社會。",
            textAlign: TextAlign.BottomLeft,
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
                text: "社會共融",
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
            type: "social",
            activeId: 2,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "職業安全績效",
              content:
                "瀚宇彩晶致力降低職業傷害的風險，並教育訓練、人力配置、設備改善、制度改善四個面向進行改善和優化，我們投入超過千萬的資源與系統，盤查和管理一萬六千多個安全開關，增設七位工安專職人員、調訓近900名同仁、建置安全採購規範、改善近百台的設備，同時劃分101個巡檢區域、改善作業流程，以強化和完善工作的場域和環境。"
            },
            banner: {
              src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/image360.png`,
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/image361.png`,
            title: "環安政策",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/Rectangle1914.png`,
            title: "職業安全衛生管理系統ISO 45001驗證",
            content: "瀚宇彩晶針對台灣南部科學園區LCD廠與觸控感應器廠等兩廠，以及南京TFT LCD液晶顯示器模組、觸控面板的製造訂有職業安全衛生管理計畫、實施安全衛生管理及自動檢查，並完成職業安全衛生管理系統ISO 45001的驗證，涵蓋瀚宇彩晶員工、以及承攬商、自營作業者等的安全衛生管理事項。"
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/Rectangle2500.png`,
            title: "管理審查暨職安衛委員會",
            content: "為落實瀚宇彩晶的環安政策，改善公司作業危害風險與職安衛績效，我們設有「管理審查暨職安衛委員會」，並由廠區最高主管副總經理擔任管理代表兼主任委員。"
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/Rectangle2503.png`,
            title: "安全保命條款",
            content: "瀚宇彩晶重視所有工作者的健康安全，所有新進員工在第一天訓練時便告知作業過程的安全保命項目，並要求簽署不得違反《安全保命條款》之規定，若新進人員認知在其作業過程，如有可能導致傷害或疾病的工作狀態時，得依據《安全保命條款》規定退避工作；又如作業人員違反作業《安全保命條款》之規定而導致事故時，其主管會依獎懲管理程序連坐處分。"
          },
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/image362.png`,
            title: "健康促進",
            text: "瀚宇彩晶重視員工的安全健康，定期辦理健康促進宣導與活動，並定期提供健康相關檢測或諮詢服務，2021年度健康檢查總人數為2,689人次，健康促進宣導活動參與總人數為703人次",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/Rectangle2508.png`,
            title: "職安與環安相關課程",
            subTitle: "2021年度上課人數共計1,997人次，課程包含：",
            content: [
              "新進人員訓練：工安衛及環保基礎訓練",
              "危害通識課程：介紹公司危害物質之特性及使用原則",
              "特殊作業人員訓練：特殊／一般作業人員、危險性機械設備操作人員、作業主管等訓練",
              "專責人員培訓：環保相關專責人員培訓",
              "緊急應變訓練：包括訓練及演練"
            ]
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/Rectangle2510.png`,
            title: "緊急應變規劃",
            content: [
              "定期實施ERT人員訓練 6次／年",
              "定期實施ERT複訓 2次／月",
              "定期實施火警、化學品、氣體洩漏等狀況演練 12次／年",
              "定期實施進階消防訓練 2次／年",
              "不定期無預警演練、疏散演練",
              "定期實施廠內警報訓練及現場稽查 2次／年"
            ]
          },]
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "預防和減輕職業危害",
            content: "除定期委托外部機構執行作業環境採樣檢測外，公司也推動專業職能治療師一對一指導及調理服務，以降低及預防肌肉骨骼傷害，確保同仁健康；另避免ITO靶材研磨作業同仁可能造成肺部病變，改善銦靶材研磨作業的曝露，除規劃出一個獨立空間作業外，並要求作業同仁配戴正壓式呼吸防護具，每年執行作業同仁血中銦的特殊健檢，以掌握同仁的曝露情況，落實分級健康管理，目前作業同仁血中銦檢測值（≦3.0μg/L）皆符合法規要求。此外，為保護交付承攬工程的外部工作者，確實做好各項安全管理，訂有「承攬商安全衛生及環保管理辦法」管制，並對特殊作業（包含動火、吊掛、局限空間等作業），要求由瀚宇彩晶承辦人偕同工安室與承攬單位人員實施作業前查核，確認相關安全防護後，始可動工作業。"
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
                src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/MaskGroup.png`,
                title: "人因性危害防治",
                text: "邀請專業職能治療師帶入職能治療概念，改善後續下背痛引發的影響。藉由教導自主訓練運動，改善身體活動障礙、改變肌肉狀況、保護脊椎、減低疼痛，進而提高生活品質之功效，減少日後罹患下背痛症候群所造成影響。",
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/MaskGroup_1.png`,
                title: "自動檢查機制",
                text: "為保障公司及全體員工的安全與健康，並確保所有機械設備、設施、警報、消防設施保有正常功能，瀚宇彩晶積極推動自動檢查，並藉由發現潛在之危害，而予以有效的預防職業災害發生。自動檢查項目包括升降機、鍋爐、堆高機、自動導引車、固定式起重機、高／低壓電器設備、壓力容器、高壓氣體特定設備、特化／化學設備、局部排氣設施及各項危險性作業之檢點等。",
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig.s3Url}/Image/hannstar/sustainability/social/safety/MaskGroup_2.png`,
                title: "作業環境測定",
                text: "為提供員工一個安全及衛生之作業環境，瀚宇彩晶每半年針對有機溶劑、特定化學物質、粉塵、二氧化碳、鉛、照明及噪音定期實施作業環境測定，目前測定結果報告皆為正常。每次測定結果皆公佈於公用公佈欄上。",
                href: "",
                btnText: "",
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
