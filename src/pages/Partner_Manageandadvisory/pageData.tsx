import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";

function usePageData() {
    const { t } = useTranslation();
    const PageType: I_TemplateLayout = {
      props: [
        {
          type: "FullBanner",
          data: [
            {
                src: "https://partner-test.hannstar.com/images/supplier/banner/management-and-advisory.jpg",
                title: "管理與諮詢",
                text: "透過持續不定期評鑑來提升供應鏈管理，以及多年技術經驗透過雲端共享，與供應商共同迎向永續未來。",
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
                    text: "管理與諮詢",
                    href: "",
                },
              ],
            },
          ],
        },
        {
            type: "TitleContentBlock",
            data: [
              {
                title: "管理與諮詢",
                content:
                  "瀚宇彩晶持續不定期評鑑與稽核來提升全球供應鏈管理，累積多年技術經驗透過該平台雲端共享，讓您即使無法面對面也能從知識庫裡充分獲取相關資訊。",
              },
            ],
          },
        {
          type: "TitleContentGraphicsCard",
          data: [
            {
              rowCount: 2,
              theme: GraphicsTheme.Theme1,
              data: [
                {
                    src: "https://partner-test.hannstar.com/images/supplier/greensupplychain1.jpg",
                    title: "綠色供應鏈",
                    text: "瀚宇彩晶致力於提供永續、環境友善且高品質的產品給客戶，作為全球領導性面板供應商，我們期待與供應商夥伴共同創造永續經營價值",
                    href: "/",
                    btnText: "了解更多",
                },
                {
                    src: "https://partner-test.hannstar.com/images/supplier/technical2.jpg",
                    title: "技術文件",
                    text: "輔導提升生產良率等疑問以及產品解析知識的探詢。",
                    href: "/",
                    btnText: "了解更多",
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