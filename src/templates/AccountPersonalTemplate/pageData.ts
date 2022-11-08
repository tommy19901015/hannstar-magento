import { DataType }from "./interface"
import urlConfig from "../../config/urlSetting.json";

export const pageData = () :DataType[] => [
    {
        categoryId: 0,
        categoryTitle: "個人專區",
        items: [
            {
                title: "帳戶資訊",
                href: urlConfig.account.MyAccount.href,
            },
            {
                title: "權限管理",
                href: urlConfig.account.AccountApplication.href,
            }
        ]
    },
    {
        categoryId: 0,
        categoryTitle: "企業專區",
        items: [
            {
                title: "成員資訊",
                href: urlConfig.account.MemberInfo.href,
            },
            {
                title: "看板",
                href: urlConfig.account.AccountDashboard.href,
            },
        ]
    },
]