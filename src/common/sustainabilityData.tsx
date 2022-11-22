import urlConfig from "../config/urlSetting.json";
import { I_GrapModel } from "../component/graphics3/interface";
import { useTranslation } from "react-i18next";

export type SustainabilityData = {
  type: string;
  tab: {
    text: string;
    href: string;
    type: string;
  }[];
  graphics3: I_GrapModel;
}[];

const { hannstar, partner, service, footerlinks } = urlConfig;

function useSustainabilityData() {
  const { t } = useTranslation();
  const PageType: SustainabilityData = [
    {
      type: "csr", //永續管理
      tab: [
        { text: "董事長的話", href: "", type: "Chairman" },
        { text: "永續治理", href: "", type: "Governance" },
        { text: "利害關係人議合", href: "", type: "Negotiate" },
        { text: "利害關係人溝通管道", href: "", type: "Communicate" },
      ],
      graphics3: {
        src: "https://fakeimg.pl/1000x700/?text=Image",
        title: "請參閱瀚宇彩晶2021年度永續報告書",
        content: "第1章  永續管理",
        btnText: "閱讀全文",
        btnHref: "/",
        bgColor: "#F6F6F6",
      },
    },
    {
      type: "governance", //公司治理
      tab: [
        { text: "董事會名單", href: "", type: "" },
        { text: "審計委員會", href: "", type: "" },
        { text: "薪酬委員會", href: "", type: "" },
        { text: "內部稽核", href: "", type: "" },
        { text: "誠信經營", href: "", type: "" },
        { text: "風險管理", href: "", type: "" },
        { text: "資訊安全管理", href: "", type: "" },
        { text: "內部重大資訊處理暨防範內線交易管理", href: "", type: "" },
        { text: "公司治理章程與程序", href: "", type: "" },
      ],
      graphics3: {
        src: "https://fakeimg.pl/1000x700/?text=Image",
        title: "請參閱瀚宇彩晶2021年度永續報告書",
        content: "第2章  誠信治理",
        btnText: "閱讀全文",
        btnHref: "/",
        bgColor: "#F6F6F6",
      },
    },
    {
      type: "environment", //綠色創新
      tab: [
        { text: "永續生產", href: "", type: "" },
        { text: "綠色產品", href: "", type: "" },
        { text: "氣候變遷風險管理", href: "", type: "" },
        { text: "永續供應鏈", href: "", type: "" },
      ],
      graphics3: {
        src: "https://fakeimg.pl/1000x700/?text=Image",
        title: "請參閱瀚宇彩晶2021年度永續報告書",
        content: "第3章  綠色創新",
        btnText: "閱讀全文",
        btnHref: "/",
        bgColor: "#F6F6F6",
      },
    },
    {
      type: "communion", //社會共融
      tab: [
        { text: "多元平等", href: "", type: "" },
        { text: "人才發展", href: "", type: "" },
        { text: "職業安全衛生", href: "", type: "" },
        { text: "社會參與", href: "", type: "" },
        { text: "彩晶基金會", href: "", type: "" },
        { text: "RBA年度績效目標", href: "", type: "" },
        { text: "勞工與道德政策", href: "", type: "" },
      ],
      graphics3: {
        src: "https://fakeimg.pl/1000x700/?text=Image",
        title: "請參閱瀚宇彩晶2021年度永續報告書",
        content: "第4章  從人文關懷出發的社會參與",
        btnText: "閱讀全文",
        btnHref: "/",
        bgColor: "#F6F6F6",
      },
    },
  ];
  return PageType;
}

export default useSustainabilityData;
