import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
  props: [
    {
      type: "FullBanner",
      data: [
        {
          src: "https://fakeimg.pl/1000x700/?text=Image",
          title: "品質管理與策略",
          text: "",
          textAlign: TextAlign.BottomLeft,
        },
      ],
    },
    {
      type: "BreadcrumbsBlock",
      data: [
        {
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
                text: "品質管理與策略",
                href: "",
              },
          ],
        },
      ],
  },
    {
      type: "TitleContentBanner",
      data: [
        {
          titleContent: {
            title: "產品及服務品質管理",
            content: "瀚宇彩晶訂定品質政策誠意、創新、客戶第一，追求成長與創新的同時，以全球永續發展為目標，建立以顧客滿意為導向，品質改善為核心的公司文化，提供顧客滿意的產品和服務，並依此政策訂定各項規範與準則，並經第三認證單位驗證通過ISO 9001 及IATF 16949、AS9100、QC080000等品質管理系統，確保產品品質逹成既定目標，並且積極推廣品質文化，如FMEA、5-Why、品質七大手法、VDA6.3、TQM全面品質管理概念宣導及推廣品質相關政策、文化、活動及手法，使同仁能藉此瞭解更多品質範疇，深植同仁品質意識，優化產品品質，滿足客戶之需求。"
          },
          banner: {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        },
      ],
    },
    {
      type: "TitleContentBlock",
      data: [
        {
          title: "追求品質的企業文化",
          content:
            "瀚宇彩晶以提供客戶滿意的服務品質為導向，全球永續發展為目標，並以持續提升品質為目標，每年定期安排年度教育訓練計畫。公司內部持續推動品質改善活動，每年成立QCC; QIT及6 sigma品質改善小組，並舉辦內部競賽.在品質管理訓練方面，每年舉辦IATF 16949 五大核心工具、VDA 6.3、AS91000條文、QC080000、TQM全面品質管理課程、FMEA、5Why 及Green Product國際法規及客戶要求課程，也透過活動平台，對品質政策、文化、活動加以推廣及宣傳，全面提升公司全體同仁品質意識及品質工具手法應用，優化同仁作業品質，全面提升產品品質。",
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
              src:"https://fakeimg.pl/100x100/?text=Image",
              title:"品質管理循環",
              text:"xxxxxxxxxxx",
              href:"",
              btnText:"",
            },
            {
              src:"https://fakeimg.pl/100x100/?text=Image",
              title:"品質政策",
              text:"xxxxxxxxxxx",
              href:"",
              btnText:"",
            },
            {
              src:"https://fakeimg.pl/100x100/?text=Image",
              title:"綠色產品政策",
              text:"xxxxxxxxxxx",
              href:"",
              btnText:"",
            },
          ],
        }
      ]
    },

  ],
}

  return PageType;
}

export default usePageData;
