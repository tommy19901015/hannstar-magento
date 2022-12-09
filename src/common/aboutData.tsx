import { useTranslation } from "react-i18next";

export type AboutData = {
  type: string;
  tab: {
    text: string;
    type: string;
  }[];
}[];

function useAboutData() {
  const { t } = useTranslation();
  const PageType: AboutData = [
    {
      type: "about", //品質管理與策略
      tab: [
        { text: "品質管理與策略", type: "Manage" },//360
        { text: "綠色產品政策", type: "Policy" },
        { text: "綠色環保", type: "Environmental" },//360
        { text: "綠色管理與認證", type: "Certified" },
        { text: "綠色產品大事記", type: "Event" },//360
      ]
    }
  ];
  return PageType;
}

export default useAboutData;
