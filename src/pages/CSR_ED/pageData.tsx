import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
// import { I_Template1, TabEnum } from "../../types/Tmeplate1/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";

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
                text: "首頁",
                href: "",
              },
              {
                text: "多元平等",
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
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "反歧視管理政策",
            content:
              "為符合責任商業聯盟(RBA)精神，制定《反歧視管理程序》，以避免公司員工在任用、工作與生活、薪獎、升遷、解聘或退休等發生歧視情事，公司不得要求員工進行任何具有歧視性之健檢項目作為招募任用條件，如懷孕等。",
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "風險鑑別與管理機制",
            content:
              "建立多元暢通的溝通管道，包含性騷擾申訴專線電話及電子信箱作為受理窗口，並加強宣導及防治工作，透過影片宣導性騷擾防治。2021年未接獲性騷擾舉報案件，遇有申訴案件，即彈性編組性騷擾申訴處理委員會審理，並要求委員會中半數以上須為女性，以求公正客觀。",
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "童工與青年勞工保護",
            content:
              "不聘用童工和強迫勞動，並抵制聘用童工的承包商，若發現有未滿16歲的少年、兒童被錯誤錄用時，將立即停止其工作並結算其薪資；若招募16以上未滿18歲青年勞工，在勞動條件、工作內容及工作環境安排上必符合法令規定；如青年勞工仍在學，其上課時間、工作時間及通勤時間之總時數一天不得超過10小時。",
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "外籍移工人權保障",
            content:
              "遵守責任商業聯盟(RBA)相關法規要求，保障外籍移工的勞動條件及人權， 依法簽定母語書寫的僱傭協議，且無限制行動自由，並由外籍移工自行保管護照及居留證。建立完善溝通申訴管道，每季召開溝通座談會，收集意見及回饋，透過雙向的溝通，讓外籍移工能感受公司的關懷及重視。",
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "外籍移工人權關懷",
            content:
              "我們持續關注外籍移工權益，除遵守國際人權政策標準要求外，更將此標準推展到瀚宇彩晶合作的供應商夥伴，發揮企業的社會影響力。2021年6月1日起，瀚宇彩晶進行外籍移工零付費政策，我們全額負擔外籍移工抵台後每月的國內仲介服務費，同時也包含新簽訂合約的外籍移工，將由瀚宇彩晶支付其在海外求職的仲介費、來台規費、抵台後每月國內仲介服務費等，我們相信，提供有保障的工作條件及環境，勞資雙方能夠互利互惠。",
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
          {
            titleContent: {
              title: "多元平等",
              content:
                "建立尊重人權、多元平等人才任用、文化包容、員工成長、健康安全的友善職場，我們期待透過優秀的人力資本，持續為台灣面板產業創造無限可能。",
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
          {
            titleContent: {
              title: "2021年非擔任主管職務之全時員工年度薪酬平均數及中位數",
              content: "",
            },
            banner: {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          },
          {
            titleContent: {
              title: "2021年度育嬰照護",
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
    ],
  };

  return PageType;
}

export default usePageData;
