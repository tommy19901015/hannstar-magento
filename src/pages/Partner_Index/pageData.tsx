import { useTranslation } from "react-i18next";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TextAlign , BannerType} from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";

function useServiceIndex() {
    const { t } = useTranslation();
    const PageType: I_TemplateLayout = {
      props: [
        {
          type: "FullBanner",
          data: [
            {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "創新技術、品質服務",
              text: "",
              textAlign: TextAlign.BottomLeft,
              type: BannerType.Main,
            },
          ],
        },
        {
          type: "MessageCenterPlatform",
          data: [
            {
              src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_t4gtmsjux5.png",
              title: "材料供應商",
              href: "/",
            },
            {
              src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png",
              title: "設備供應商",
              href: "/",
            },
            {
              src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
              title: "協同製造夥伴",
              href: "/",
            },
            {
              src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
              title: "管理與諮詢",
              href: "/",
            },
          ],
        },
        {
          type: "TitleContentBlock",
          data: [
            {
              title: "關於供應商協同合作平台",
              content:
                "提供該平台給全球材料及設備供應商、製造商，於平台上協同合作資訊交流與專案商務等開創新的商業機會。",
            },
          ],
        },
        {
          type: "TitleContentGraphicsCard",
          data: [
            {
              rowCount: 4,
              theme: GraphicsTheme.Theme1,
              data: [
                {
                  src: "https://partner.hannstar.com/images/supplier/home2.jpg",
                  title: "材料供應商",
                  text: "運用材料創新，創造面板無限可能性，攜手合作，推動顯示科技新世界。。",
                  href: "",
                  btnText: "了解更多",
                },
                {
                  src: "https://partner.hannstar.com/images/supplier/home3.jpg",
                  title: "設備供應商",
                  text: "運用技術創新，攜手合作，共創綠色顯示科技新世界。",
                  href: "",
                  btnText: "了解更多",
                },
                {
                  src: "https://partner.hannstar.com/images/supplier/home1.jpg",
                  title: "協同製造夥伴",
                  text: "以客戶服務為核心，提供線上報價、生產流程、標準品資料上傳及協同採購等即時服務。",
                  href: "",
                  btnText: "了解更多",
                },
                {
                  src: "https://partner.hannstar.com/images/supplier/home4.jpg",
                  title: "管理諮詢",
                  text: "不定期評鑑與稽核來提升供應鏈管理，提供產品解析指南，協助綠色供應商服務。",
                  href: "",
                  btnText: "了解更多",
                },
              ],
            },
          ],
        },
        {
          type: "TitleContentBlock",
          data: [
            {
              title: "綠色供應鏈管理",
              content:
                "瀚宇彩晶以智能及大數據為平台基礎，以企業資源(Enterprise Resource Planning, ERP)、客戶關係(Customer Relationship Management, CRM)、供應商關係(Supplier Relationship Management, SRM)三大管理系統，將供應商、製造商、服務商、客戶等所有合作夥伴整合到其中，串起客戶、供應商、生產、庫存的資料流與更大功能規模的自動化生產供貨模組體系，系統化完整的建構瀚宇彩晶的永續供應鏈管理體系(Supply Chain Management, SCM)。並在此基礎上協同合作，在品質、成本、交期、環保、安全與衛生等不同面向，讓雙方或多方獲得更有價值的信息和數據，跨域合作，提供更精准的商業决策分析與更高效的資源利用，打造串連世界的綠色供應鏈。",
            },
          ],
        },
        {
          type: "BannerBlock",
          data: [
            {
              src: "https://partner.hannstar.com/images/supplier/strategy.png",
              title: "",
              text: "",
              textAlign: TextAlign.BottomLeft,
            },
          ],
        },
      ],
    };
  
    return PageType;
  }
  
export default useServiceIndex;

