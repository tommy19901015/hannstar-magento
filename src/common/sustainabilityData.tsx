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

function useSustainabilityData() {
  const { t } = useTranslation();
  const PageType: any = [
    {
      type: "csr",//永續管理
      tab: [
        { title: "董事長的話", href: "" },
        { title: "永續治理", href: "" },
        { title: "利害關係人議合", href: "" },
        { title: "利害關係人溝通管道", href: "" }
      ],
      graphics3: {
        src: "https://fakeimg.pl/1000x700/?text=Image",
        title: "請參閱瀚宇彩晶2021年度永續報告書",
        content: "第1章  永續管理",
        btnText: "閱讀全文",
        btnHref: "/",
        bgColor: "#F6F6F6"
      },
    },
    {
      type: "governance",//公司治理
      tab: [
        { title: "", href: "" }
      ],
      graphics3: {},
    },
    {
      type: "environment",//綠色創新
      tab: [
        { title: "", href: "" }
      ],
      graphics3: {},
    },
    {
      type: "communion",//社會共融
      tab: [
        { title: "", href: "" }
      ],
      graphics3: {},
    },
    {
      type: "report",//報告書下載
      tab: [
        { title: "", href: "" }
      ],
      graphics3: {},
    },
    {
      type: "esg",//永續訊息
      tab: [
        { title: "", href: "" }
      ],
      graphics3: {},
    },
  ]
  return PageType;
}

export default useSustainabilityData;
