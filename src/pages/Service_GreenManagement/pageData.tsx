import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
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
                src: "https://e-service-test.hannstar.com/Content/images/img/banner/green-service.jpg",
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
                  text: " 品質管理與策略",
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
                title: "綠色管理與認證",
                content:
                  `
                  彩晶深知企業所提供的產品將可能對環境產生極大的影響，因此在產品設計方面除注重使用者需求、功能性、及附加價值外，自產品設計的階段，即以「減少環境負荷」的角度來思考規劃。

                  所有供應商都需符合，其規定內容包括省能源、易回收、低毒性、材質標示、包裝材等。各供應商須提供合格之產品檢驗報告，以證明該產品符合「瀚宇彩晶產品環保規格」的要求，並於部品或產品承認前提供給GP管理單位審查，經GP管理單位判定合格後方能使用。
              `},
              {
                title:"",
                content:`
                歐盟RoHS 2.0指令之因應        
                自歐盟RoHS 指令公告以來，彩晶成立專責GP管理單位，一方面蒐集掌握各國相關法規與相關資訊，針對各產品線與主要元件供應商進行溝通宣導、製程原物料盤查、轉換與確認。經過長期的努力以下下，所有彩晶產品皆已符合歐盟 RoHS 2.0指令。
                `
              },
              {
                title:"",
                content:`
                系統認證
彩晶除了立志於環境保護外，更積極導入各項綠色產品系統認證。南京廠於2010年3月取得IECQ QC080000有害物質管理系統認證。
台南廠於2019年5月取得SONY Green Partner認證，2019年12月取得IECQ QC080000:2017認證   
                `
              },
              {
                title:"",
                content:`
                綠色產品管理系統
                為有效管理合格供應商及材料，降低有害物質風險。瀚宇彩晶於 2012 年更新現有綠色產品管理系統 (GPM)，將供應商管理資訊建立其中，並建構規範資料庫及物質資料庫，除了可以更有效率管理所屬材料外，亦可以在最短時間內確認國際法規所規範之最新物質，及客戶所提出之產品環保規範。
                `
              },
            ],
          },
          {
            type: "BannerBlock",
            data: [
              {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "",
                text: "",
                textAlign: TextAlign.BottomLeft,
              },
            ]
          },
          {
            type: "TitleContentBlock",
            data: [
              {
                title: "合格供應商",
                content:
                  `
                  新產品材料供應商，須完成均質拆解檢測報告及SDS資料上傳，並審核通過。始能成為合格材料，並於每年進行報告更新，以維持其有效狀態。
                  `,
              },
            ],
          },
          {
            type: "BannerBlock",
            data: [
              {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "",
                text: " ",
                textAlign: TextAlign.BottomLeft,
              },
            ]
          },

      ],
    };
  
    return PageType;
}
  
export default usePageData;
