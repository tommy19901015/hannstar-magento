import { urlConfig } from "../config/urlSetting";
import { useTranslation } from "react-i18next";

export type I_MenuItemType = {
  title?: string;
  type?: string;
  href?: string;
  isBlank?: boolean;
  icon?: string;
  content?: { title: string; href: string; isBlank?: boolean }[];
};

export interface I_MenuType {
  [key: string]: I_MenuItemType[];
}

const {
  hannstar,
  partner,
  service,
  footerlinks,
  paperdisplay,
  tftdisplay,
  solution,
  hannspree,
} = urlConfig();

function useMenu() {
  const { t } = useTranslation();
  const PageType: I_MenuType = {
    hannstar: [
      {
        title: t("Menu.about"),
        type: "about",
        href: hannstar.about_index.href,
        content: [
          {
            title: t("Menu.about_index"),
            href: hannstar.about_index.href,
          },
          { title: t("Menu.about_team"), href: hannstar.about_team.href },
          { title: t("Menu.about_family"), href: hannstar.about_family.href },
          {
            title: t("Menu.about_strategy"),
            href: hannstar.about_strategy.href,
          },
          {
            title: t("Menu.about_certification"),
            href: hannstar.about_certification.href,
          },
          {
            title: t("Menu.about_stronghold"),
            href: hannstar.about_stronghold.href,
          },
        ],
      },
      {
        title: t("Menu.product"),
        type: "product",
        href: "",
        content: [
          { title: "TFT Display", href: tftdisplay.index.href },
          { title: "Paper Display", href: paperdisplay.index.href },
        ],
      },
      {
        title: t("Menu.company"),
        type: "company",
        href: hannstar.sustainability_index.href,
        content: [
          {
            title: t("Menu.sustainability_csr"),
            href: hannstar.sustainability_csr.href,
          },
          {
            title: t("Menu.sustainability_governance"),
            href: hannstar.sustainability_governance.href,
          },
          {
            title: t("Menu.sustainability_environment"),
            href: hannstar.sustainability_environment.href,
          },
          {
            title: t("Menu.sustainability_social"),
            href: hannstar.sustainability_social.href,
          },
          {
            title: t("Menu.sustainability_report"),
            href: hannstar.sustainability_report.href,
          },
          {
            title: t("Menu.sustainability_esg"),
            href: hannstar.sustainability_esg.href,
          },
        ],
      },
      {
        title: t("Menu.invest"),
        type: "invest",
        href: "",
        content: [
          {
            title: t("Menu.investors_Summary"),
            href: hannstar.investors_Summary.href,
          },
          {
            title: t("Menu.investors_Revenue"),
            href: hannstar.investors_Revenue.href,
          },
          {
            title: t("Menu.investors_Report"),
            href: hannstar.investors_Report.href,
          },
          {
            title: t("Menu.investors_Conference"),
            href: hannstar.investors_Conference.href,
          },
          {
            title: t("Menu.investors_Shareholdermeeting"),
            href: hannstar.investors_Shareholdermeeting.href,
          },
          {
            title: t("Menu.investors_Dividend"),
            href: hannstar.investors_Dividend.href,
          },
          {
            title: t("Menu.investors_Quote"),
            href: hannstar.investors_Quote.href,
          },
          {
            title: t("Menu.investors_Contacts"),
            href: hannstar.investors_Contacts.href,
          },
        ],
      },
      {
        title: t("Menu.resources"),
        type: "resources",
        href: hannstar.careersDetail_Index.href,
        content: [
          {
            title: t("Menu.careersDetail_Work"),
            href: hannstar.careersDetail_Work.href,
          },
          {
            title: t("Menu.careersDetail_Growup"),
            href: hannstar.careersDetail_Growup.href,
          },
          {
            title: t("Menu.careersDetail_Join"),
            href: hannstar.careersDetail_Join.href,
          },
        ],
      },
      {
        title: t("Menu.message"),
        type: "message",
        href: "",
        content: [
          {
            title: t("Menu.news_financial"),
            href: hannstar.news_financial.href,
          },
          {
            title: t("Menu.sustainability_esg"),
            href: hannstar.sustainability_esg.href,
          },
        ],
      },
      {
        title: t("Menu.support"),
        type: "support",
        href: hannstar.support.href,
        isBlank: true,
        content: [],
      },
    ],
    partner: [
      {
        title: partner.technical.title,
        href: partner.technical.href,
        content: [],
      },
      // {
      //   title: "協同製造夥伴",
      //   href: "",
      //   content: [
      //     {
      //       title: partner.manageandadvisory.title,
      //       href: partner.manageandadvisory.href,
      //     },
      //     {
      //       title: partner.manufacturing.title,
      //       href: partner.manufacturing.href,
      //     },
      //   ],
      // },
      {
        title: "供應商服務",
        href: "",
        content: [
          { title: partner.productList.title, href: partner.productList.href },
          {
            title: partner.solutionList.title,
            href: partner.solutionList.href,
          },
          { title: partner.quotation.title, href: partner.quotation.href },
          { title: partner.application.title, href: partner.application.href },
        ],
      },
      {
        title: partner.manageandadvisory.title,
        href: partner.manageandadvisory.href,
        content: [
          {
            title: partner.greensupplychain.title,
            href: partner.greensupplychain.href,
          },
          { title: "技術文件", href: "" },
        ],
      },
      {
        title: "訊息中心",
        href: "",
        content: [],
      },
      {
        title: "常見問題",
        type: "support",
        href: hannstar.support.href,
        content: [],
      },
    ],
    service: [
      {
        title: service.customer.title,
        href: service.customer.href,
        content: [
          { title: service.RMAApply.title, href: service.RMAApply.href },
          // { title: service.RMAList.title, href: service.RMAList.href },
          { title: service.parseApply.title, href: service.parseApply.href },
          // { title: service.parseList.title, href: service.parseList.href },
        ],
      },
      {
        title: service.greenLawApply.title,
        href: service.greenLawApply.href,
        content: [
          { title: service.lawApply.title, href: service.lawApply.href },
        ],
      },
      {
        title: "技術諮詢",
        href: service.technicalSupport.href,
        content: [],
      },
      {
        title: "訊息中心",
        href: "",
        content: [],
      },
      {
        title: "常見問題",
        type: "support",
        href: hannstar.support.href,
        content: [],
      },
    ],
    tftdisplay: [
      {
        title: "產品應用",
        href: "",
        content: [
          { title: "智慧零售", href: "" },
          { title: "智能建築", href: "" },
          { title: "交通運輸", href: "" },
          { title: "智慧育樂", href: "" },
          { title: "健康關懷", href: "" },
          { title: "智能製造", href: "" },
        ],
      },
      {
        title: "產品與詢價",
        href: "",
        content: [
          { title: "優選產品", href: tftdisplay.preferredProduct.href },
          { title: "客製化服務", href: "" },
        ],
      },
      {
        title: "訊息中心",
        href: "",
      },
    ],
    paperdisplay: [
      {
        title: "顯示紙技術",
        href: paperdisplay.applications.href,
        content: [],
      },
      {
        title: "顯示紙應用",
        href: "",
        content: [{ title: "交通運輸", href: paperdisplay.traffic.href }],
      },
      {
        title: "綠色供應鏈",
        href: "",
        // content: [
        //   { title: "交通運輸", href: "" },

        // ],
      },
      {
        title: "產品與詢價",
        href: "",
        // content: [
        //   { title: "交通運輸", href: "" },

        // ],
      },
      {
        title: "訊息中心",
        href: "",
        // content: [
        //   { title: "交通運輸", href: "" },

        // ],
      },
      {
        title: "常見問題",
        type: "support",
        href: hannstar.support.href,
        content: [],
      },
    ],
    solution: [
      {
        title: "方案系統及整合服務",
        href: "",
        content: [{ title: "方案系統及整合服務", href: solution.label.href }],
      },
      {
        title: "常見問題",
        type: "support",
        href: hannstar.support.href,
        content: [],
      },
    ],
    hannspree: [
      {
        title: "關於我們",
        href: "",
      },
      {
        title: "整機產品",
        href: "",
      },
      {
        title: "解決方案",
        href: hannspree.solve.href,
      },
      {
        title: "最新消息",
        href: "",
      },
      {
        title: "常見問題",
        type: "support",
        href: hannstar.support.href,
        content: [],
      },
    ],
    footerlinks: [
      {
        title: footerlinks.contactus.title,
        href: footerlinks.contactus.href,
      },
      {
        title: footerlinks.privacy.title,
        href: footerlinks.privacy.href,
      },
      {
        title: footerlinks.notices.title,
        href: footerlinks.notices.href,
      },
      {
        title: footerlinks.webmap.title,
        href: footerlinks.webmap.href,
      },
    ],
  };

  return PageType;
}

export default useMenu;
