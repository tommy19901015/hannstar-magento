import { TextAlign } from "../../component/banner/interface";

export const pageData = () => {
    return {
        banner: {
            src: "https://partner-test.hannstar.com/images/supplier/banner/manufacturing.jpg",
            title: "協同製造夥伴平台",
            text: "該平台提供線上報價、生產管控，達到資訊即時化、溝通無國界的協同合作",
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
                    text: "協同製造夥伴",
                    href: "",
                },
                {
                    text: "協同製造夥伴平台",
                    href: "",
                },
            ],
        },
        module3: {
            titleContent: {
                title: "協同製造夥伴平台",
                content: "Hannstar以客戶服務為核心理念，強化與供應商之間合作模式，提供線上報價、生產品質與管控等服務，即時查詢以利服務共同服務顧客。"
            },
            graphicsCard: {
                rowCount: 4,
                data: [
                    {
                        src: "https://partner-test.hannstar.com/images/supplier/manufacturing1.jpg",
                        title: "RFQ產品報價",
                        text: "該入口提供給製造夥伴更多的商業機會，若有客戶的RFQ需求資訊，製造夥伴們可透過平台進入系統進行報價動作，獲取您更大商機可能性。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://partner-test.hannstar.com/images/supplier/manufacturing2.jpg",
                        title: "模組生產資訊",
                        text: "雲端管理可即時掌握，包含進度、良率、生產狀況、物料等，藉由所提供的訊息來了解產品入庫時間，物料是否充足無虞，進而確保客戶交期。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://partner-test.hannstar.com/images/supplier/manufacturing3.jpg",
                        title: "製造夥伴資料",
                        text: "製造商可上傳標準品的規格尺寸資料，從0.96~12.3皆有符合的規格，皆可列為瀚宇彩晶聯合銷售範圍。",
                        href: "/",
                        btnText: "了解更多",
                    },
                    {
                        src: "https://partner-test.hannstar.com/images/supplier/manufacturing4.jpg",
                        title: "協同採購",
                        text: "製造夥伴們，若在生產過程愈原料短缺，可透過該入口一起與瀚宇彩晶協同統一採購，以滿足客戶第一需求。",
                        href: "/",
                        btnText: "了解更多",
                    },
                ]
            }
        },
    }
}