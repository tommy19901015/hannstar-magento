import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/paperdisplay/index/topbanner.jpg`,
            title: "綠色產品設計",
            text: "為綠色節能而設計",
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
                text:"首頁",
                href: "",
              },
              {
                text: "綠色供應鏈",
                href: "",
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
              title: "綠色供應鏈",
              content: "為打造永續供應鏈，瀚宇彩晶遵循RBA責任商業聯盟行為準則（Responsible Business Alliance, RBA），以IECQ QC 080000危害物質流程管理為基礎，透過綠色產品管理系統（GPM）與供應商管理暨評鑑辦法，從供應鏈原料採購、產品設計到內部生產製造與品質檢測，均有效落實綠色產品政策、國際法規和客戶產品規範等要求，秉持企業成長與生態環境共榮的信念，厚植綠色管理於日常營運，攜手供應鏈實踐綠色永續未來。"
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ]
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "供應商合作管理",
              content: "瀚宇彩晶整合產品生命週期管理系統（PLM）、綠色產品管理系統（GPM）與ERP系統，落實有毒危害物質管理，供應商配合瀚宇彩晶企業社會責任政策，簽署「瀚宇彩晶勞工與道德供應商承諾書」及「瀚宇彩晶勞工和道德風險評估表」，建立永續供應鏈管理機制，規範和協助原料、設備供應商合作夥伴持續符合國際綠色法規，並以ISO14064盤查驗證供應商的減碳營運，一同打造綠色永續產品。2021年瀚宇彩晶所有產品線皆100% 符合產品無有害物質相關法規及客戶規範、100%符合第三方綠色檢測，且持續維持客戶要求造成危害物質（HSF）客訴件數0件。"
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ]
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "為綠色永續而設計",
            content:
              `與客戶、供應商攜手設計與提供回應世界低碳轉型的產品，是瀚宇彩晶研發與技術應用的重要議題，顯示紙產品以護眼、節能、健康、少污染、低資源耗用等主軸進行永續性設計，以創新技術策略連結至供應商全面開發新材料，發展友善環境之顯示紙產品，採用反射式面板技術，運用環境光反射來呈現畫面，其無背光模組的設計，能達到低功耗顯示，較傳統 TFT Display 更省電節能; 不僅提升應用裝置的續航力，更可大幅減少二氧化碳排放量，打造更環保節能的綠色產品。`,
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
                src: "https://e-service.hannstar.com/Content/images/img/customer-support1.jpg",
                title: `全反射`,
                text: `以全新反射式面板設計，極大化環境光源反射率，屏除散射背光源的能源浪費以及環境干擾。`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support2.jpg",
                title: `低功耗`,
                text: `以準靜態低頻率更新技術，搭配特定應用積體電路(ASIC)的低功耗IC及特殊材料的設計，使能耗大幅低於一般驅動的顯示器。`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support3.jpg",
                title: `保護眼睛`,
                text: `結合抗眩型散射薄膜技術、Cover Lens抗眩抗反射表面處理射技術、低反射光學鍍膜技術、護眼自動色溫調整技術等設計，減少對靈魂之窗的傷害。`,
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "綠色產品研發與製程精進",
            content:
              `顯示紙產品研發導入氣候相關財務揭露建議（TCFD）架構鑑別氣候風險與機會，從節能、減廢、低碳、減排、再生循環等理念出發，藉由反射式的光學架構、反射層結構技術及超低功耗的驅動IC研發，達到具備環保節能低功耗的綠色產品，提供客戶更健康安全的產品與服務，展現對環境永續的承諾。2021年度綠色產品研發費用達1.10億元新台幣，同時以再生能源以及儲能系統降低生產過程中的溫室氣體排放，2022年100% 使用FCs機導入NF3及SF6燃燒減量設備，降低製程中產生的高溫室效應潛勢氣體，降低顯示紙產品碳足跡。`,
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
                src: "https://e-service.hannstar.com/Content/images/img/customer-support1.jpg",
                title: `低溫材料`,
                text: `開發次世代、高效率之顯示材料，採用低溫製程、低UV曝光量之色彩光阻原料，有效減少生產時間、材料耗損與電力耗費。`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support2.jpg",
                title: `製程精進`,
                text: `導入ISO 14064溫室氣體排放驗證，以最新製程來降低電路元件所需的驅動電壓與電流減少電力消耗，提升熱交換效率與降低能耗。`,
              },
              {
                src: "https://e-service.hannstar.com/Content/images/img/customer-support3.jpg",
                title: `低碳製造`,
                text: `針對製程產生之高溫室效應潛勢氣體，三氟化氮（NF3）與六氟化硫（SF6），透過符合IPCC公告的尾氣燃燒設備進行處理，降低範疇一溫室氣體排放，減少產品碳足跡。`,
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "打造綠色經濟，資源循環再利用",
            content:
              `顯示紙從採購、製程、包材、運輸實踐綠色永續經濟，透過資源循環再利用降低環境衝擊。藉由ISO 14001、ISO 45001 系統的導入與應用，除了協助提升工廠資源使用效率、減少廢棄物產生外，也在整個產品生命週期中，從環境面向及作業安全分析進行風險鑑別衡量並加以量化，以廢液、廢水循環再利用方式，降低碳排與廢棄物汙染，落實瀚宇彩晶對環境保育的承諾。`,
          },
        ],
      },
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 2,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src: `${urlConfig().s3Url}/Image/paperdisplay/index/productinquiry.jpg`,
                title: "廢液循環",
                text: `製程導入色阻回收系統，使色阻在滴入玻璃基板後，將多餘的色阻脫離玻璃並落入回收系統中，2021年度回收再利用38,421公升色阻液。`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/paperdisplay/index/solutionintegration.jpg`,
                title: "廢水回收",
                text: `強化水資源管理的韌性與調適能力，透過廠內製程用水節流與管末廢水回收，2021年度循環水量達9,906百萬公升，全廠區排水量較去年下降8.43%。`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/paperdisplay/index/customizationservice.jpg`,
                title: "在地採購",
                text: `落實在地化採購，減少運輸碳排與環境衝擊，2021年度在地採購比率達86%，連結在地，共榮共好。`,
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/paperdisplay/index/customizationservice.jpg`,
                title: "低碳運輸",
                text: `回收運輸過程中產品圍套與TRAY盤，減少產品運輸中物料的非必要浪費，2021年共回收3,000個圍套與47,490個TRAY盤，回收再利用比率達100%。`,
                href: "",
                btnText: "",
              },
            ],
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
