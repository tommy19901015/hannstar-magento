import { serviceType } from "./interface"
import urlConfig from "../../config/urlSetting.json";

export const initialServiceData = (): serviceType[] => [
    {
        categoryId: 0,
        categoryTitle: "客戶會員",
        serviceItems: [
            {
                id: 0,
                icon: `${urlConfig.s3Url}/Image/account/icon_signup_device.png`,
                title: "產品與解決方案",
                directions: "查詢顯示器、方案與整機多元解決方案。"
            }, {
                id: 1,
                icon: `${urlConfig.s3Url}/Image/account/icon_signup_inquire.png`,
                title: "快速報價",
                directions: "快速獲取報價，隨時查看記錄。"
            }, {
                id: 2,
                icon: `${urlConfig.s3Url}/Image/account/icon_signup_support.png`,
                title: "技術支援",
                directions: "線上RMA與解析服務。"
            }
        ]
    },
    {
        categoryId: 1,
        categoryTitle: "供應商會員",
        serviceItems: [
            {
                id: 0,
                icon: `${urlConfig.s3Url}/Image/account/icon_signup_green.png`,
                title: "綠色供應鏈",
                directions: "綠色製造是Hannstar永續經營的基石，引領上下游供應商在技術、品質、交期、環保、人權、安全與衛生等持續精進，攜手與Hannstar一起打造綠色永續供應鏈。"
            }
        ]
    }
]