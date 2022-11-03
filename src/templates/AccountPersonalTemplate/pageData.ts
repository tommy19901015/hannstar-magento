import { DataType }from "./interface"

export const pageData = () :DataType[] => [
    {
        categoryId: 0,
        categoryTitle: "個人專區",
        items: [
            {
                title: "我的帳號/修改密碼",
                href: "",
            },
            {
                title: "申請權限",
                href: "/Cognito/account/custom/",
            },
        ]
    },
    {
        categoryId: 0,
        categoryTitle: "企業專區",
        items: [
            {
                title: "成員資訊",
                href: "",
            },
        ]
    },
]