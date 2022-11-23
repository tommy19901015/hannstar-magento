import urlConfig from "../config/urlSetting.json";
import { useTranslation } from "react-i18next";

export type I_MenuItemType = {
  title?: string;
  type?: string;
  href?: string;
  icon?: string;
  content?: { title: string; href: string }[];
};

export interface I_MenuType {
  [key: string]: I_MenuItemType[];
}

const { hannstar, partner, service, footerlinks } = urlConfig;

function useMenu() {
  const { t } = useTranslation();
  const PageType: I_MenuType = {
    hannstar: [
      {
        title: "關於瀚宇彩晶",
        type: "about",
        href: "",
        content: [
          {
            title: "瀚宇彩晶簡介",
            href: hannstar.about_index.href,
          },
          { title: "瀚宇彩晶團隊", href: hannstar.about_team.href },
          { title: "瀚宇關係企業", href: hannstar.about_family.href },
          {
            title: "認證與獎項",
            href: hannstar.about_certification.href,
          },
          { title: "全球據點", href: hannstar.about_stronghold.href },
        ],
      },
      {
        title: "產品應用",
        type: "product",
        href: "",
        content: [
          { title: "智能車載", href: "" },
          { title: "工控應用", href: "" },
          { title: "手機應用", href: "" },
          { title: "穿戴應用", href: "" },
          { title: "平板應用", href: "" },
          { title: "觸控應用", href: "" },
          { title: "資訊科技顯示器", href: "" },
          { title: "綠色顯示器", href: "" },
        ],
      },
      {
        title: "企業永續",
        type: "company",
        href: hannstar.sustainability_index.href,
        content: [
          { title: "永續管理", href: hannstar.sustainability_csr.href },
          { title: "公司治理", href: hannstar.sustainability_governance.href },
          { title: "綠色創新", href: hannstar.sustainability_environment.href },
          { title: "社會共融", href: hannstar.sustainability_social.href },
          { title: "報告書下載", href: hannstar.sustainability_report.href },
          { title: "永續訊息", href: hannstar.sustainability_esg.href },
        ],
      },
      {
        title: "投資人關係",
        type: "invest",
        href: "",
        content: [
          { title: "公司概況", href: hannstar.investors_Summary.href },
          { title: "每月營收", href: hannstar.investors_Revenue.href },
          { title: "財務季報及公司年報", href: hannstar.investors_Report.href },
          { title: "法人說明會", href: hannstar.investors_Conference.href },
          {
            title: "股東會資訊",
            href: hannstar.investors_Shareholdermeeting.href,
          },
          { title: "股利分派", href: hannstar.investors_Dividend.href },
          { title: "股價查詢", href: hannstar.investors_Quote.href },
          { title: "投資人相關洽詢", href: hannstar.investors_Contacts.href },
        ],
      },
      {
        title: "人才招募",
        type: "resources",
        href: hannstar.careersDetail_Index.href,
        content: [
          { title: "工作在彩晶", href: hannstar.careersDetail_Work.href },
          { title: "成長在彩晶", href: hannstar.careersDetail_Growup.href },
          { title: "加入彩晶", href: hannstar.careersDetail_Join.href },
        ],
      },
      {
        title: "訊息中心",
        type: "message",
        href: "",
        content: [
          { title: "投資人關係", href: "" },
          { title: "企業永續", href: "" },
        ],
      },
    ],
    partner: [
      {
        title: partner.technical.title,
        href: partner.technical.href,
        content: [],
      },
      {
        title: "協同製造夥伴",
        href: "",
        content: [
          {
            title: partner.manageandadvisory.title,
            href: partner.manageandadvisory.href,
          },
          {
            title: partner.manufacturing.title,
            href: partner.manufacturing.href,
          },
        ],
      },
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
        href: "",
        content: [],
      },
    ],
    service: [
      {
        title: service.customer.title,
        href: service.customer.href,
        content: [
          { title: service.RMAApply.title, href: service.RMAApply.href },
          { title: service.RMAList.title, href: service.RMAList.href },
          { title: service.parseApply.title, href: service.parseApply.href },
          { title: service.parseList.title, href: service.parseList.href },
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
        href: "",
        content: [
          { title: "技術文件", href: "" },
          { title: "教育訓練", href: "" },
        ],
      },
      {
        title: "訊息中心",
        href: "",
        content: [],
      },
      {
        title: "Q&A",
        href: "",
        content: [],
      },
    ],
    member: [
      {
        content: [
          {
            title: "產品行銷服務",
            href: "",
          },
          {
            title: "方案整合及系統服務",
            href: "",
          },
          {
            title: "客戶服務",
            href: "",
          },
          {
            title: "供應商協同合作",
            href: "",
          },
          {
            title: "Hannspree",
            href: "",
          },
        ],
      },
      {
        content: [
          {
            title: "會員中心",
            href: "",
          },
          {
            title: "其他",
            href: "",
          },
        ],
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
