import { I_PageData } from "./interface"


export const pageData = (t?: any): I_PageData => {
    return {
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
                {
                    text: "RMA列表",
                    href: "",
                }
            ],
        },
        pageTitle: "RMA列表",
        filterStateTitle: "進度說明:",
        filterState: {
            all: "所有狀態",
            register: "立案",
            overturnReview: "覆判審核",
            overturnFinish: "覆判完成",
            refundProcessing: "退補處理",
            closed: "已退補/結案"
        },
        filterYearTitle: "年度",
        RMAListThead: {
            action: "Action",
            requisitionNo: "申請單號",
            RMANo: "RMA單號",
            agent: "代理商",
            modelNo: "機種料號",
            requisitionCount: "申請數量",
            overturn: "快束覆判",
            signOffResult: "簽核結果",
            applicationProgress: "申請進度",
            shipDate: "出貨日期",
            shipDNNO: "出貨DNNo",
            returnNo: "已還貨數量",
            sellOffNo: "銷退數量",
            caseResult: "結案方式",
        }
    }
}