import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_PageType } from "./interface";


function usePageData() {
    const { t } = useTranslation();
    const PageType: I_PageType =  {
        banner: {
            src: "https://e-service-test.hannstar.com/Content/images/img/banner/green-service.jpg",
            title: "綠色環保申請",
            text: "「可回收、低污染、省資源」致力推動綠色產品發展，並取得環保標章，符合永續發展",
            textAlign: TextAlign.BottomLeft,
        },
        breadcrumbs: {
            title: "",
            breadcrumbsLink: [
                {
                    text: "首頁",
                    href: "",
                },
                {
                    text: "綠色環保申請",
                    href: "",
                },
            ],
        },
        module3: {
            titleContent: {
                title: "綠色環保申請",
                content: "對於人類健康與環境安全保護彩晶一直致力於降低產品對環境及人類的影響。為實踐對環境改善、污染防治等環安政策之承諾，以降低產品對環境衝擊與減少危害物質擴散，符合法規規定與客戶要求並提升產品環保性能。液晶顯示器是高科技的產品，體積小、重量輕、可節約能源、低電磁波幅射、無鉛、無有害物質，完全合乎全球綠色環保的潮流。"
            },
            graphicsCard: {
                rowCount: 3,
                data: [
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service1.jpg",
                        title: "RoHS 2.0+HF",
                        text: "RoHS是由歐盟立法制定的一項強制性標準。於2006年7月1日正式實施，用於規範電子電氣產品的材料及技術標準，更加有利於人體健康及環境保護。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service2.jpg",
                        title: " REACH SVHC",
                        text: "SVHC是指對環境、人體毒性較大且風險高的化學物質，根據歐盟REACH法規的規定SVHC的生產、進口和在市場上銷售必須先獲得歐盟化學品管理局的授權。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service3.jpg",
                        title: "環保規範盤查",
                        text: "透過供應商的環保規範資料調查，進行審核及承認，並符合國際法規要求與客戶規範。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service4.jpg",
                        title: "衝突礦產(3TG+鈷)",
                        text: "衝突礦產 (Conflict Minerals) ，稱 3T1G：鎢 、錫 、鉭  與金 ，後來又增加了鈷 及雲母。對電子業製造過程中很重要的原物料，經常使用在 3C 電器產品零組件當中，因此廠商在生產製造過程中就需要注意，是否使用到來自衝突礦區的礦產。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service5.jpg",
                        title: "IMDS / CAMDS",
                        text: "全球汽車廠商以生產件符合程序 (PPAP) / 產品承認書 (PSW) 中要求車廠供應商利用 International Material Data System (IMDS) 提交物質資料讓車廠監控管理整個全球車廠供應鏈全物質狀態。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service6.jpg",
                        title: "chem SHERPA",
                        text: "chemSHERPA提供了可應用與整條供應鏈的資訊傳遞機制，正確管理產品中含有的化學物質，持續應對日益嚴格的法規。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service7.jpg",
                        title: "不使用宣告書/承諾書",
                        text: "依各客戶要求環境管理物質不使用宣告書/承諾書，包括產品附件、包裝材料、其他與產品交付相關之附件。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service8.jpg",
                        title: "品質系統認證",
                        text: "提供各項品質系統證書申請，包含ISO9001、IATF16949、QC080000、AS9100、IEC-61340-5-1、ANSI ESD S20.20、ISO/IEC 17025、ISO 28000、ISO 27001、ISO 14001、ISO 45001、AEO、RBA ...等。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://e-service-test.hannstar.com/Content/images/img/green-service9.jpg",
                        title: "環安系統認證",
                        text: "具有完整的教育訓練系統，在工安衛及環保方面，每年皆會排定各種訓練課程，目的是要提升員工對安全、衛生及環保之意識，進而降低職業災害。亦有定期/不定期會對現場實施稽核工作，確保政策落實。",
                        href: "/",
                        btnText: "了解更多",
                    },
                ]
            }
        },
    }
  
    return PageType;
}
  
export default usePageData;
