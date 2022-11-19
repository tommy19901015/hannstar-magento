import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: "https://fakeimg.pl/300x100/?text=Image",
            title: "公司治理",
            text: "建立完善的公司治理制度，降低企業的經營風險，提升企業的競爭力，營造公司和股東的長遠利益。",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BreadcrumbsBlock",
        data: [
          {
            title: "",
            breadcrumbsLink: [
                {
                    text: "首頁",
                    href: "",
                },
                {
                    text: "資訊安全管理",
                    href: "",
                },
            ],
          },
        ],
      },
      {
        type: "TitleContentBanner",
        data: [
            {
                
                titleContent: {
                    title: "資訊安全管理",
                    content: ""
                },
                banner: {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                },
                
            },
        ],
      },
      {
        type:"SustainabilityGraphics3",
        data:[
            {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "資訊安全政策",
                content:
                    "瀚宇彩晶為維護公司資訊資產的機密性、可用性及完整性，訂定資訊安全政策，於2018年12月21日首次取得ISO 27001 ISMS國際資訊安全管理系統認證，在公司持續推動數位轉型，強化資訊安全管理機制下，2021年更新增營運科技與電腦繪圖單位，將驗證範圍延伸至製造單位，並於2021年12月28日通過換證稽核審查。"
            },
            {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "資訊安全管理委員會",
                content:
                    `2018年底，為有效推動與辦理公司資訊安全管理制度之各項工作，ISMS管理系統成立資訊安全組織，以擬訂公司各項資訊安全發展之方向及策略，並使資訊安全管理制度持續穩健運作。資訊安全管理委員會設置主委數人，由相關主管擔任，並設執行祕書一人、委員若干人。委員會下並設「資訊安全管理小組」、「緊急處理小組」、「查核小組」及「資安官」負責日常的資訊安全相關工作。
                
                2022年底，為強化資安管理機制，增設資訊安全長角色及成立資安專責單位，並以「CSIRT電腦資安事件應變小組」取代原ISMS「緊急處理小組」，以杜絕資安危機，防禦資安威脅。`
            },
        ]
      },
      {
        type:"SustainabilityGraphics3",
        data:[]
      }
    ],
  };

  return PageType;
}

export default usePageData;
