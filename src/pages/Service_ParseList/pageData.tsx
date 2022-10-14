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
                    text: "解析列表",
                    href: "",
                }
            ],
        },
        pageTitle: "解析列表",
        filterStateTitle: "解析進度說明:",
        filterState: {
            all: "所有狀態",
            applying: "申請中",
            send: "寄送",
            parsing: "解析中",
            closed: "結案"
        },
        filterYearTitle: "年度",
        parseListThead: {
            action: "Action",
            requisitionNo: "申請單號",
            paresNo: "解析單號",
            modelNo: "機種料號",
            badType: "不良現象",
            badRate: "不良率",
            applicationProgress: "申請進度",
            reportDownload: "報告下載",
        }
    }
}