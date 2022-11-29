import { useTranslation } from "react-i18next";
import { TextAlign } from "../../../component/banner/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";

function usePageData() {
  const { t } = useTranslation();

  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
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
            type: "csr",
            activeId: 1,
            component: "tab",
          },
        ],
      },
      {
        type: "TitleContent",
        data: [
          {
            title: "職業安全績效",
            content:
              "瀚宇彩晶落實在地採購，減少環境衝擊外亦期待增加當地就業機會，促進經濟發展。所有供應商均需配合瀚宇彩晶企業社會責任政策，簽署「瀚宇彩晶勞工與道德供應商承諾書」及「瀚宇彩晶勞工和道德風險評估表」，方可成為合格供應商。對於供應商之績效，瀚宇彩晶定期於每月及每季進行評核，當有發生重大情況時，則啟動不定期評鑑審核。勞工與道德供應商承諾書及風險評估表等RBA文件簽署率100%，環安與道德社會責任表現考核通過率100%",
          },
        ],
      },
      {
        type: "TitleContent",
        data: [
          {
            title: "供應鏈風險鑑別與管理",
            content:
              "供應鏈的ESG風險除了會帶來營運中斷風險外，亦會帶來聲譽風險。如何建構具ESG韌性的供應鏈，與供應商共創價值瀚宇彩晶的重要使命之一。",
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "重要原物料",
            content: [
              "玻璃基板",
              "驅動IC",
              "偏光板",
              "背光板",
              "液晶材料",
              "彩色濾光片",
            ],
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "風險類型",
            content: [
              "可取得性和管道的實體限制",
              "價格變化風險",
              "法規風險",
              "聲譽風險",
            ],
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "供應鏈管理策略",
            content: [
              "供應商的多元化",
              "材料的儲備",
              "替代材料和替代材料的",
              "開發或採購",
              "對關鍵原物料回收技術的投資",
            ],
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
                "瀚宇彩晶致力降低職業傷害的風險，並教育訓練、人力配置、設備改善、制度改善四個面向進行改善和優化，我們投入超過千萬的資源與系統，盤查和管理一萬六千多個安全開關，增設七位工安專職人員、調訓近900名同仁、建置安全採購規範、改善近百台的設備，同時劃分101個巡檢區域、改善作業流程，以強化和完善工作的場域和環境。",
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
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
            titleContent: {
              title: "環安政策",
              content: "",
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "職業安全衛生管理系統ISO 45001驗證",
            content:
              "瀚宇彩晶針對台灣南部科學園區LCD廠與觸控感應器廠等兩廠，以及南京TFT LCD液晶顯示器模組、觸控面板的製造訂有職業安全衛生管理計畫、實施安全衛生管理及自動檢查，並完成職業安全衛生管理系統ISO 45001的驗證，涵蓋瀚宇彩晶員工、以及承攬商、自營作業者等的安全衛生管理事項。",
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "管理審查暨職安衛委員會",
            content:
              "為落實瀚宇彩晶的環安政策，改善公司作業危害風險與職安衛績效，我們設有「管理審查暨職安衛委員會」，並由廠區最高主管副總經理擔任管理代表兼主任委員。",
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "安全保命條款",
            content:
              "瀚宇彩晶重視所有工作者的健康安全，所有新進員工在第一天訓練時便告知作業過程的安全保命項目，並要求簽署不得違反《安全保命條款》之規定，若新進人員認知在其作業過程，如有可能導致傷害或疾病的工作狀態時，得依據《安全保命條款》規定退避工作；又如作業人員違反作業《安全保命條款》之規定而導致事故時，其主管會依獎懲管理程序連坐處分。",
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            titleContent: {
              title: "健康促進",
              content:
                "瀚宇彩晶重視員工的安全健康，定期辦理健康促進宣導與活動，並定期提供健康相關檢測或諮詢服務，2021年度健康檢查總人數為2,689人次，健康促進宣導活動參與總人數為703人次",
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "職安與環安相關課程",
            subTitle: "2021年度上課人數共計1,997人次，課程包含：",
            content: [
              "新進人員訓練：工安衛及環保基礎訓練",
              "危害通識課程：介紹公司危害物質之特性及使用原則",
              "特殊作業人員訓練：特殊／一般作業人員、危險性機械設備操作人員、作業主管等訓練",
              "專責人員培訓：環保相關專責人員培訓",
              "緊急應變訓練：包括訓練及演練",
            ],
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "緊急應變規劃",
            content: [
              "定期實施ERT人員訓練 6次／年",
              "定期實施ERT複訓 2次／月",
              "定期實施火警、化學品、氣體洩漏等狀況演練 12次／年",
              "定期實施進階消防訓練 2次／年",
              "不定期無預警演練、疏散演練",
              "定期實施廠內警報訓練及現場稽查 2次／年",
            ],
          },
        ],
      },
      {
        type: "TitleContent",
        data: [
          {
            title: "預防和減輕職業危害",
            content:
              "除定期委托外部機構執行作業環境採樣檢測外，公司也推動專業職能治療師一對一指導及調理服務，以降低及預防肌肉骨骼傷害，確保同仁健康；另避免ITO靶材研磨作業同仁可能造成肺部病變，改善銦靶材研磨作業的曝露，除規劃出一個獨立空間作業外，並要求作業同仁配戴正壓式呼吸防護具，每年執行作業同仁血中銦的特殊健檢，以掌握同仁的曝露情況，落實分級健康管理，目前作業同仁血中銦檢測值（≦3.0μg/L）皆符合法規要求。此外，為保護交付承攬工程的外部工作者，確實做好各項安全管理，訂有「承攬商安全衛生及環保管理辦法」管制，並對特殊作業（包含動火、吊掛、局限空間等作業），要求由瀚宇彩晶承辦人偕同工安室與承攬單位人員實施作業前查核，確認相關安全防護後，始可動工作業。",
          },
        ],
      },
    ],
  };
  return PageType;
}

export default usePageData;
