import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../../component/banner/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";
import { urlConfig } from "../../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/about/strategy/img_strategy_top_banner.jpg`,
            title: "品質管理與策略",
            text: "",
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
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
                text: " 綠色產品政策",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "AboutTab",
        data: [
          {
            type: "about",
            activeId: 1,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "綠色產品政策",
            content: `
                  為善盡綠色產品管理責任，瀚宇彩晶制定了綠色產品政策。除了設計更符合使用者需求產品外，更期望在產品生命週期中能做到無毒性、省資源，且對環境無害的產品。秉持著取之社會、用之社會，為地球環境盡一分心力。
              `,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/about/strategy/img_strategy_content_banner01.jpg`,
            title: "",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: "綠色產品目標",
            content: `
                  客戶抱怨件數 0件
滿足客戶需求為最大宗旨及目標，偕同客戶一起努力愛護地球。新產品材料供應商，須完成均質拆解檢測報告及SDS資料上傳，並審核通過。始能成為合格材料，並於每年進行報告更新，以維持其有效狀態。
                  `,
          },
          {
            title: "",
            content: `
                新產品符合綠色要求檢測比例 100%
新產品開發，除設計開始選用合格供應商及材料外，並在驗證最終階段將產品送具ISO 17025合格實驗室，以均質方式進行拆解並進行有害物質分析。以確保產品符合性。`,
          },
          {
            title: "",
            content: `
                國際環保法規符合要求 100%
為了全體人類健康及環境著想，有關有害物質的國際法規限制也日趨嚴謹，瀚宇彩晶將持續對材料把關、並要求供應商提供相關合格檢測報告，以期符合重要國際法規要求。`,
          },
          {
            title: "",
            content: `
                無鹵要求 800ppm
為落實 RoHS 2.0 要求，對於無鹵物質規範重視也不遺餘力，對於氯、溴含量標準要求<800ppm 以內，超前領先業界，更突`,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/about/strategy/chart_strategy_target_tc.png`,
            title: "",
            text: " ",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/about/strategy/chart_strategy_controllist_tc.png`,
            title: "有害物質管控清單",
            content:
              "依據國際法規及客戶規範訂【瀚宇彩晶環保規範】，除定期依需求更新外，並要求所屬供應商符合，達到上、下游一致性整合。目前禁用管制物質合計約近177項(2021年166項)",
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
