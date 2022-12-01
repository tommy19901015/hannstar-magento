import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { urlConfig } from "../../config/urlSetting";
const {
  hannstar,
  partner,
  service,
  tftdisplay,
  paperdisplay,
  solution,
  hannspree,
  s3Url
} = urlConfig();

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/banner1.jpg`,
            title: "創新技術、品質服務",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "MessageCenterPlatform",
        data: [
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_t4gtmsjux5.png",
            title: "TFT Display",
            href: tftdisplay.index.href,
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png",
            title: "Paper Display",
            href: paperdisplay.index.href,
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
            title: "客戶服務",
            href: service.index.href,
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_20F17_cfe6j6bk57.png",
            title: "方案整合及系統服務",
            href: solution.index.href,
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_784869e23g.png",
            title: "供應商協同合作",
            href: partner.index.href,
          },
          {
            src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_784869e23g.png",
            title: "瀚斯寶麗",
            href: hannspree.index.href,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_main.jpg`,
            title: "顯示紙",
            text: "低碳、環保永續顯示紙，協助實現永續未來",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 3,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_skill.jpg`,
                title: "顯示紙技術",
                text: "優運用先進技術打造的顯示紙，具備超長續航力、強光下可視、真實紙感體驗等特性，顛覆傳統顯示器視覺與書寫體驗，並且更省電節能、友善環境。",
                href: "",
                btnText: "",
              },
              {
                src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_buy.jpg`,
                title: "顯示紙產品選購",
                text: "提供多種規格之精選產品和客製化服務，滿足您各種顯示應用需求。",
                href: "",
                btnText: "",
              },
              {
                src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_ef.jpg`,
                title: "綠色永續設計",
                text: "從材料設備供應商、產品設計、製程到物流和包材，皆致力降低產品碳足跡，為永續未來而努力。",
                href: "",
                btnText: "",
              },
            ],
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_application.jpg`,
            title: "探索顯示紙多元應用",
            content:
              "顯示紙低功耗、戶外可視、寬溫顯示、支援動態播放、動態顯示、全彩顯示、貼近紙感體驗等特性，提供智慧零售、交通運輸、智慧育樂、智能製造、健康關懷、智能建築六大智慧應用更環保節能的顯示解決方案。",
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/career_banner.jpg`,
            title: "瀚宇彩晶人才招募",
            text: "歡迎加入彩晶，與我們共創精彩價值，為世界增添光彩",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/esg_banner.jpg`,
            title: "綠色創新 低碳轉型成就更美好的生活",
            text: "了解我們為永續所做的努力",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "資訊安全管理",
            content: "",
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            rowCount: 5,
            imgGrids: [
              {
                text: "瀚宇彩晶",
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hss.png`,
              },
              {
                text: "和鑫光電",
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hst.png`,
              },
              {
                text: "瀚斯寶麗",
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hsp.png`,
              },
              {
                text: "瀚寓酒店",
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hsh.png`,
              },
              {
                text: "彩晶文教基金會",
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hsf.png`,
              },
            ],
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
