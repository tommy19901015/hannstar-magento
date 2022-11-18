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
          { title: hannstar.about.title, href: hannstar.about.href },
          { title: hannstar.team.title, href: hannstar.team.href },
          { title: hannstar.family.title, href: hannstar.family.href },
          {
            title: hannstar.certification.title,
            href: hannstar.certification.href,
          },
          { title: hannstar.stronghold.title, href: hannstar.stronghold.href },
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
        href: "/csr/index",
        content: [
          { title: "永續焦點", href: "" },
          { title: "公司治理", href: "/news/csrsgi" },
          { title: "永續營運", href: "" },
          { title: "綠色產品", href: "/news/gp" },
          { title: "社會參與", href: "" },
          { title: "報告書", href: "" },
          { title: "ESG訊息", href: "" },
          // { title: "企業永續", href: "/csr/index" },
          // { title: "永續治理", href: "/news/csrsgi" },
          // { title: "多元平等", href: "/news/ed" },
          // { title: "綠色產品", href: "/news/gp" },
          // { title: "資訊安全管理", href: "/news/isms" },
          // { title: "風險管理", href: "/news/mr" },
          // { title: "職業安全衛生", href: "/news/osha" },
          // { title: "永續生產", href: "/news/sp" },
          // { title: "永續供應鏈", href: "/news/sscm" },
          // { title: "人才發展", href: "/news/td" },
        ],
      },
      {
        title: "投資人關係",
        type: "invest",
        href: "",
        content: [
          { title: "公司概況", href: "/investors/summary" },
          { title: "每月營收", href: "/investors/revenue/" },
          { title: "財務季報及公司年報", href: "/investors/report" },
          { title: "法人說明會", href: "/investors/conference" },
          { title: "股東會資訊", href: "/investors/shareholdermeeting" },
          { title: "股利分派", href: "/investors/dividend" },
          { title: "股價查詢", href: "https://tw.stock.yahoo.com/quote/6116" },
          { title: "投資人相關洽詢", href: "/investors/contacts" },
        ],
      },
      {
        title: "人力資源",
        type: "resources",
        href: "",
        content: [
          { title: "工作在彩晶", href: "" },
          { title: "成長在彩晶", href: "" },
          { title: "加入彩晶", href: "" },
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
