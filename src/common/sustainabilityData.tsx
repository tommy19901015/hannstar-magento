import urlConfig from "../config/urlSetting.json";
import { I_GrapModel } from "../component/graphics3/interface";
import { useTranslation } from "react-i18next";

export type SustainabilityData = {
  type: string;
  tab: {
    text: string;
    href: string;
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
        { text: "董事長的話", href: "" },
        { text: "永續治理", href: "" },
        { text: "利害關係人議合", href: "" },
        { text: "利害關係人溝通管道", href: "" },
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
        { text: "董事會名單", href: "" },
        { text: "審計委員會", href: "" },
        { text: "薪酬委員會", href: "" },
        { text: "內部稽核", href: "" },
        { text: "誠信經營", href: "" },
        { text: "風險管理", href: "" },
        { text: "資訊安全管理", href: "" },
        { text: "內部重大資訊處理暨防範內線交易管理", href: "" },
        { text: "公司治理章程與程序", href: "" },
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
        { text: "永續生產", href: "" },
        { text: "綠色產品", href: "" },
        { text: "氣候變遷風險管理", href: "" },
        { text: "永續供應鏈", href: "" },
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
        { text: "多元平等", href: "" },
        { text: "人才發展", href: "" },
        { text: "職業安全衛生", href: "" },
        { text: "社會參與", href: "" },
        { text: "彩晶基金會", href: "" },
        { text: "RBA年度績效目標", href: "" },
        { text: "勞工與道德政策", href: "" },
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
