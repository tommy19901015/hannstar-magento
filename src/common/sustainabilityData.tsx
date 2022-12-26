import { urlConfig } from "../config/urlSetting";
import { I_GrapModel } from "../component/graphics3/interface";
import { useTranslation } from "react-i18next";

export type SustainabilityData = {
  type: string;
  tab: {
    text: string;
    type: string;
  }[];
  graphics3: I_GrapModel;
}[];

const { hannstar, partner, service, footerlinks, s3Url } = urlConfig();

function useSustainabilityData() {
  const { t } = useTranslation();
  const PageType: SustainabilityData = [
    {
      type: "csr", //永續管理
      tab: [
        { text: `${t('SustainabilityCommon.Chairman')}`, type: "Chairman" },
        { text: `${t('SustainabilityCommon.Governance')}`, type: "Governance" },
        { text: `${t('SustainabilityCommon.Negotiate')}`, type: "Negotiate" },
        { text: `${t('SustainabilityCommon.Communicate')}`, type: "Communicate" },
      ],
      graphics3: {
        src: `${s3Url}/Image/hannstar/sustainability/sustainablemanagement/Supplier2.png`,
        title: `${t('SustainabilityCommon.footerGraphicsTitle')}`,
        content: `${t('SustainabilityCommon.Chapter1')}`,
        btnText: `${t('SustainabilityCommon.moreBtn')}`,
        btnHref: "/",
        bgColor: "#F6F6F6",
      },
    },
    {
      type: "governance", //公司治理
      tab: [
        { text: `${t('SustainabilityCommon.Director')}`, type: "Director" },
        { text: `${t('SustainabilityCommon.Audit')}`, type: "Audit" },
        { text: `${t('SustainabilityCommon.Salary')}`, type: "Salary" },
        { text: `${t('SustainabilityCommon.Check')}`, type: "Check" },
        { text: `${t('SustainabilityCommon.Operate')}`, type: "Operate" },
        { text: `${t('SustainabilityCommon.Risk')}`, type: "Risk" },
        { text: `${t('SustainabilityCommon.InfoSecurity')}`, type: "InfoSecurity" },
        { text: `${t('SustainabilityCommon.Trade')}`, type: "Trade" },
        { text: `${t('SustainabilityCommon.Charter')}`, type: "Charter" },
      ],
      graphics3: {
        src: `${s3Url}/Image/hannstar/sustainability/sustainablemanagement/Supplier2.png`,
        title: `${t('SustainabilityCommon.footerGraphicsTitle')}`,
        content: `${t('SustainabilityCommon.Chapter2')}`,
        btnText: `${t('SustainabilityCommon.moreBtn')}`,
        btnHref: "/",
        bgColor: "#F6F6F6",
      },
    },
    {
      type: "environment", //綠色創新
      tab: [
        { text: `${t('SustainabilityCommon.Production')}`, type: "Production" },
        { text: `${t('SustainabilityCommon.GreenProduct')}`, type: "GreenProduct" },
        { text: `${t('SustainabilityCommon.Weather')}`, type: "Weather" },
        { text: `${t('SustainabilityCommon.SupplyChain')}`, type: "SupplyChain" },
      ],
      graphics3: {
        src: `${s3Url}/Image/hannstar/sustainability/environment/Supplier2.png`,
        title: `${t('SustainabilityCommon.footerGraphicsTitle')}`,
        content: `${t('SustainabilityCommon.Chapter3')}`,
        btnText: `${t('SustainabilityCommon.moreBtn')}`,
        btnHref: "/",
        bgColor: "#F6F6F6",
      },
    },
    {
      type: "social", //社會共融
      tab: [
        { text: `${t('SustainabilityCommon.Equality')}`, type: "Equality" },
        { text:`${t('SustainabilityCommon.Talents')}`, type: "Talents" },
        { text:`${t('SustainabilityCommon.Profession')}`, type: "Profession" },
        { text: `${t('SustainabilityCommon.Society')}`, type: "Society" },
        { text: `${t('SustainabilityCommon.Foundation')}`, type: "Foundation" },
        { text:`${t('SustainabilityCommon.RBA')}`, type: "RBA" },
        { text: `${t('SustainabilityCommon.Labor')}`, type: "Labor" },
      ],
      graphics3: {
        src: `${s3Url}/Image/hannstar/sustainability/social/Supplier2.png`,
        title: `${t('SustainabilityCommon.footerGraphicsTitle')}`,
        content: `${t('SustainabilityCommon.Chapter4')}`,
        btnText: `${t('SustainabilityCommon.moreBtn')}`,
        btnHref: "/",
        bgColor: "#F6F6F6",
      },
    },
  ];
  return PageType;
}

export default useSustainabilityData;
