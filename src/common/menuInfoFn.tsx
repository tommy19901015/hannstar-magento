import urlConfig from "../config/urlSetting.json"

export const menuInfoData = () => {
    const { hannstar, partner } = urlConfig
    return {
        "hannstar": [
            {
                "title": "關於瀚宇彩晶",
                "href": "",
                "content": [
                    { "title": hannstar.about.title, "href": hannstar.about.href },
                    { "title": hannstar.team.title, "href": hannstar.team.href },
                    { "title": hannstar.family.title, "href": hannstar.family.href },
                    { "title": hannstar.certification.title, "href": hannstar.certification.href },
                    { "title": hannstar.stronghold.title, "href": hannstar.stronghold.href }
                ]
            },
            {
                "title": "產品應用",
                "href": "",
                "content": [
                    { "title": "智能車載", "href": "" },
                    { "title": "工控應用", "href": "" },
                    { "title": "手機應用", "href": "" },
                    { "title": "穿戴應用", "href": "" },
                    { "title": "平板應用", "href": "" },
                    { "title": "觸控應用", "href": "" },
                    { "title": "資訊科技顯示器", "href": "" },
                    { "title": "綠色顯示器", "href": "" }
                ]
            },
            {
                "title": "企業永續",
                "href": "",
                "content": [
                    { "title": "永續焦點", "href": "" },
                    { "title": "公司治理", "href": "" },
                    { "title": "永續營運", "href": "" },
                    { "title": "綠色產品", "href": "" },
                    { "title": "社會參與", "href": "" },
                    { "title": "報告書", "href": "" },
                    { "title": "ESG訊息", "href": "" }
                ]
            },
            {
                "title": "投資人關係",
                "href": "",
                "content": [
                    { "title": "公司概況", "href": "" },
                    { "title": "每月營收", "href": "" },
                    { "title": "財務季報及公司年報", "href": "" },
                    { "title": "法人說明會", "href": "" },
                    { "title": "股東會資訊", "href": "" },
                    { "title": "股利分派", "href": "" },
                    { "title": "股價查詢", "href": "" },
                    { "title": "投資人相關洽詢", "href": "" }
                ]
            },
            {
                "title": "人力資源",
                "href": "",
                "content": [
                    { "title": "工作在彩晶", "href": "" },
                    { "title": "成長在彩晶", "href": "" },
                    { "title": "加入彩晶", "href": "" }
                ]
            },
            {
                "title": "訊息中心",
                "href": "",
                "content": [
                    { "title": "投資人關係", "href": "" },
                    { "title": "企業永續", "href": "" }
                ]
            }
        ],
        "partner": [
            {
                "title": partner.technical.title,
                "href": partner.technical.href,
                "content": []
            },
            {
                "title": "供應商服務",
                "href": "",
                "content": [
                    { "title": partner.productList.title, "href": partner.productList.href },
                    { "title": partner.solutionList.title, "href": partner.solutionList.href },
                    { "title": partner.quotation.title, "href": partner.quotation.href },
                    { "title": partner.application.title, "href": partner.application.href }
                ]
            },
            {
                "title": "管理與諮詢",
                "href": "",
                "content": [
                    { "title": "綠色供應鏈", "href": "" },
                    { "title": "技術文件", "href": "" }
                ]
            },
            {
                "title": "訊息中心",
                "href": "",
                "content": []
            },
            {
                "title": "常見問題",
                "href": "",
                "content": []
            }
        ]
    }
}