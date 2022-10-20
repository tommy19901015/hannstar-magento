import { I_PageData } from "./interface"
import { FormType } from "../../component/form/interface";

export const pageData = (): I_PageData => {
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
                    text: "解析申請",
                    href: "",
                },
            ],
        },
        pageTitle: "解析申請",
        formTitle: "基本資料",
        formData: [
            {
                title: "客戶",
                value: "",
                columnKey: "1",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: "代理商",
                value: "",
                columnKey: "fff",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: "單號",
                value: "",
                columnKey: "3",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: "CQS窗口",
                value: "",
                columnKey: "4",
                type: FormType.Intput,
                placeholder: "",
                disabled: true,
            },
            {
                title: "領域分類",
                value: "",
                columnKey: "5",
                type: FormType.Select,
                placeholder: "",
                option: [
                    { text: "量產階段", value: "量產階段" }
                ],
            },
            {
                title: "模組料號",
                value: "",
                columnKey: "6",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: "投入量(片)",
                value: "",
                columnKey: "7",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: "不良數(片)",
                value: "",
                columnKey: "8",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: "不良率(%)",
                value: "",
                columnKey: "9",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: "發生站別",
                value: "",
                columnKey: "10",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
            {
                title: "Issue類別",
                value: "",
                columnKey: "11",
                type: FormType.Select,
                placeholder: "",
                required: true,
                option: [
                    { text: "外觀異常類", value: "外觀異常類" },
                    { text: "凹凸點類", value: "凹凸點類" },
                ],
            },
            {
                title: "Issue代碼",
                value: "",
                columnKey: "12",
                type: FormType.Select,
                placeholder: "",
                required: true,
                option: [
                    { text: "外觀異常類", value: "外觀異常類" },
                    { text: "凹凸點類", value: "凹凸點類" },
                ],
            },
            {
                title: "Invoice",
                value: "",
                columnKey: "13",
                type: FormType.Intput,
                placeholder: "",
            },
            {
                title: "備註(須提供不良品序號或箱號)",
                value: "",
                columnKey: "14",
                type: FormType.Intput,
                placeholder: "",
                required: true,
            },
        ],
        uploadTitle: "檔案附件",
        saveBtn: "儲存",
        resetBtn: "重置",
        sendBtn: "送件"
    }
}