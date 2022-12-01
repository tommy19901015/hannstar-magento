import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_PageType } from "./interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {

    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: "首頁",
          href: "",
        },
        {
          text: "關於瀚宇彩晶",
          href: "",
        },
        {
          text: "瀚宇彩晶簡介",
          href: "",
        }
      ]
    },

    bannerTextData: {
      src: `${urlConfig().s3Url}/Image/hannstar/about/Profile/HannStarVision.jpg`,
      title: "瀚宇彩晶願景",
      text: "讓我們的下一代都能享受新彩麗世界的新希望透過不斷創新的顯示技術，讓視覺可以穿越綠野、越過高山，到達世界的彼端，打開一扇使人類生命更豐富，讓生活更精采的視窗",
      textAlign: TextAlign.BottomLeft
    },
    milestoneData: [
      {
        date: "2021年12月",
        title: "穿戴式運用產品出貨數量超過2億片",
        imgSrc: ""
      },
      {
        date: "2021年11月",
        title: "榮獲TCSA電子製造業類別之「永續報告」金獎",
        imgSrc: `${urlConfig().s3Url}/Image/hannstar/about/Profile/November2021.jpg`,
      },
      {
        date: "2021年9月",
        title: "本公司新開發低功耗反射式全彩LPRD護眼面板",
        imgSrc:
          "",
      },
      {
        date: "2020年1月",
        title: "取得ISO 45001:2018職業安全衛生管理系統",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/45001.jpg`
      },
      {
        date: "2019年12月",
        title: "取得ISO 50001 能源管理系統",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/50001.jpg`
      },
      {
        date: "2019年12月",
        title: "取得ISO 17025：2017實驗室管理",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/17025.jpg`
      },
      {
        date: "2019年10月",
        title: "取得ISO 28000:2007供應鏈安全管理系統認證",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/28000.jpg`
      },
      {
        date: "2019年9月",
        title: "取得台灣第一家AS 9100D:2016航太品質管理系統",
        imgSrc:
          "",
      },
      {
        date: "2019年5月",
        title: "取得RBA責任商業聯盟行為準則",
        imgSrc:
          "",
      },
      {
        date: "2018年12月",
        title: "取得ISO 27001:2013資訊安全管理系統",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/27001.jpg`
      },
      {
        date: "2018年11月",
        title: "取得ANSI/ESD S20.20 & IEC-61340-5-1靜電防護認證",
        imgSrc:
          "",
      },
      {
        date: "2018年7月",
        title: "取得AEO安全認證優質企業",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/TWAEO.jpg`
      },
      {
        date: "2017年12月",
        title: "取得IATF 16949:2016 車載供應鏈品質管理系統認證",
        imgSrc:
          "",
      },
      {
        date: "2014年6月",
        title: "中小尺寸 On-Cell 整合型觸控 TFT-LCD 開始出貨",
        imgSrc:
          "",
      },
      {
        date: "2013年12月",
        title: "整併和鑫光電觸控感應器一廠，投入 OGS、On-Cell產品開發",
        imgSrc:
          "",
      },
      {
        date: "2013年8月",
        title: "購入台北市內湖營業辦公大樓",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/office.jpg`
      },
      {
        date: "2011年12月",
        title: "跨入HS-IPS中小尺寸面板、整合觸控面板一條龍業務領域",
        imgSrc:
          "",
      },
      {
        date: "2010年10月",
        title: "整併南科CF廠與和鑫光電，改造成G5.5 AMOLED觸控廠",
        imgSrc:
          "",
      },
      {
        date: "2010年3月",
        title: "取得QC 080000無害物質管理系統",
        imgSrc:
          "",
      },
      {
        date: "2009年12月",
        title: "10.1吋Netbook panel年出貨達千萬片",
        imgSrc:
          "",
      },
      {
        date: "2008年1月",
        title: "日本SHARP公司簽署專利交互授權合約",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/Sharp.jpg`
      },
      {
        date: "2007年12月",
        title: "取得華俐投資100%股權，成為和鑫光電最大股東",
        imgSrc:
          "",
      },
      {
        date: "2005年3月",
        title: "取得ISO 9001品質管理系統",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/9001.jpg`
      },
      {
        date: "2005年1月",
        title: "南科LCD三廠(5.3代廠)正式量產",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/TainanLCD.jpg`
      },
      {
        date: "2004年9月",
        title: "普通股轉上市掛牌",
        imgSrc:
          "",
      },
      {
        date: "2003年10月",
        title: "本公司液晶電視產品通過日本IPS協會認證",
        imgSrc:
          "",
      },
      {
        date: "2003年4月",
        title: "創立瀚斯寶麗(Hannspree)，發展自有品牌業務",
        imgSrc:
          "",
      },
      {
        date: "2002年11月",
        title: "與日本Hitachi Displays簽署AS-IPS等多項技術合作暨授權協議",
        imgSrc:
          "",
      },
      {
        date: "2001年12月",
        title: "成立南京瀚宇彩晶LCM模組廠",
        imgSrc:
          "",
      },
      {
        date: "2001年12月",
        title: "15吋面板出貨量世界第一",
        imgSrc:
          "",
      },
      {
        date: "2001年8月",
        title: "普通股掛牌上櫃",
        imgSrc:
          "",
      },
      {
        date: "2000年11月",
        title: "取得ISO14001環境管理系統",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/14001.jpg`
      },
      {
        date: "1999年7月",
        title: "高雄LCM模組廠量產",
        imgSrc:
          "",
      },
      {
        date: "1998年8月",
        title: "與日本Toshiba簽定技術轉移合約",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/Toshiba.jpg`
      },
      {
        date: "1998年6月",
        title: "瀚宇彩晶公司成立",
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/HannStarDisplay.png`
      }
    ],
    graphics3Data: [
      {
        src: `${urlConfig().s3Url}/Image/hannstar/about/Profile/Managementphilosophy.jpg`,
        title: "經營理念",
        content:
          "為提供人類最健康的視覺環境，致力於低輻射、低耗電、輕薄便利的顯示產品之研發、製造與應用",
      },
      {
        src: `${urlConfig().s3Url}/Image/hannstar/about/Profile/HannStarMission.jpg`,
        title: "瀚宇彩晶使命",
        content:
          "以卓越的製程技術，穩定的良率，創新的產品研發與服務，協助客戶持續探索新世代應用",
      },
    ]
  }

  return PageType;
}

export default usePageData;
