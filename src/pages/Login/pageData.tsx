import { serviceType } from "./interface"

export const initialServiceData = (): serviceType[] => [
    {
        categoryId:0,
        categoryTitle:"客戶會員",
        serviceItems:[
            {
                id:0,
                icon:"https://picsum.photos/seed/picsum/20/20",
                title:"產品與解決方案",
                directions:"查詢顯示器，方案與整合多解決方案"
            },{
                id:1,
                icon:"https://picsum.photos/seed/picsum/20/20",
                title:"快速報價",
                directions:"快速獲取報，隨時查看紀錄"
            },{
                id:2,
                icon:"https://picsum.photos/seed/picsum/20/20",
                title:"技術支援",
                directions:"線上RMA與解析服務"
            }
        ]
    },
    {
        categoryId:1,
        categoryTitle:"供應商會員",
        serviceItems:[
            {
                id:0,
                icon:"https://picsum.photos/seed/picsum/20/20",
                title:"產品與解決方案",
                directions:"查詢顯示器，賽"
            }
        ]
    }   
]