import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface"

export const pageData = () => {
    return {
        banner: {
            src: "https://e-service.hannstar.com/Content/images/img/banner/customer-support.jpg",
            title: "客戶通",
            text: "透過客戶服務平台簡易、便利的服務，讓客戶享受更快速的專業諮詢交流。不論是產品需要解析、排除異常、或是後續的RMA更換，都能由全方位的售後服務團隊為您效勞。",
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
                    text: "客戶通",
                    href: "",
                },
            ],
        },
        module4: {
            titleContent: {
                title: "客群服務",
                content: "透過該平台簡易、便利的服務，享受更快速的各項技術與專業諮詢。不論是產品需要解析、排除異常，都能全方位的售後服務團隊為您效勞。"
            },
            graphicsCard: {
                rowCount: 3,
                theme: GraphicsTheme.Theme2,
                data: [
                    {
                        src: "https://e-service.hannstar.com/Content/images/img/customer-support1.jpg",
                        title: "直接服務",
                        text: "瀚宇彩晶長期合作及正式授權所取得之關係策略夥伴",
                    },
                    {
                        src: "https://e-service.hannstar.com/Content/images/img/customer-support2.jpg",
                        title: "間接服務",
                        text: "由第三方或市場交易所取得瀚宇彩晶產品之客戶群",
                    },
                    {
                        src: "https://e-service.hannstar.com/Content/images/img/customer-support3.jpg",
                        title: "其他服務",
                        text: "尚未購買瀚宇彩晶產品但使用其他相關產品之客戶群",
                    },
                ]
            }
        },
        module5: {
            titleContent: {
                title: "服務內容",
                content: "依各類客戶群提供不同的服務，滿足更多樣化的需求。"
            },
            graphicsCard: {
                rowCount: 4,
                data: [
                    {
                        src: "https://e-service.hannstar.com/Content/images/img/customer-support4.jpg",
                        title: "RMA申請",
                        text: "您有換貨需求?卻找不到客服人員幫您處理?加入成為客戶平台會員.客戶服務平台提供 24小時on Line 申請,簡易填寫介面，獨享快速退換貨機制.",
                    },
                    {
                        src: "https://e-service.hannstar.com/Content/images/img/customer-support5.jpg",
                        title: "RMA列表",
                        text: "您的RMA申請進度如何?遲遲得不到客服人員的處理與回報?放心!客戶服務平台線上的即時進度回饋,讓您知道最新的RMA流程處理進度.",
                    },
                    {
                        src: "https://e-service.hannstar.com/Content/images/img/customer-support6.jpg",
                        title: "解析申請",
                        text: "若您有產品找不到問題?不知道請誰協助幫忙確認產品問題真因?有 24小時 on Line 申請,請將您的問題填寫說明，得到我們專業人員解析服務.",
                    },
                    {
                        src: "https://e-service.hannstar.com/Content/images/img/customer-support7.jpg",
                        title: "解析列表",
                        text: "您有想知道目前的產品解析狀況或進度?客戶服務平台線上的即時進度回饋, 讓您知道最新的產品解析處理進度.",
                    },
                ]
            }
        },
    }
}