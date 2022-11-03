import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_PageType } from "./interface";

// {
//     "id": "1",
//     "rootid": "123",
//     "status": "N",
//     "username": "ronfu",
//     "email": "rfchen@hannstar.com",
//     "lang": "en",
//     "groupname": "customer",
//     "jobattributes": "",
//     "jobtitle": "",
//     "phonenumber0": "",
//     "phonenumber1": "",
//     "phonenumber2": "",
//     "cellphonenumber0": "",
//     "cellphonenumber1": "",
//     "interestedtype": [
//         "智慧零售",
//         "交通運輸"
//     ],
//     "companyname": "",
//     "companysname": "",
//     "taxno": "",
//     "option": "",
//     "optionarea": "",
//     "weblink": "",
//     "country": "",
//     "countrycode": "",
//     "areacity": "",
//     "areaaddress": "",
//     "technicalstaff": "",
//     "annualrevenue": "",
//     "companystockon": "",
//     "companyMA1": "",
//     "companyMA2": "",
//     "companyMA3": "",
//     "companyMA4": "",
//     "TOP1": "",
//     "TOP2": "",
//     "TOP3": "",
//     "HannstarYN": "Y",
//     "HannstarCode": "12345678",
//     "Buy1": "",
//     "Buy2": "",
//     "Buy3": "",
//     "BuyCompany1": "",
//     "BuyCompany2": "",
//     "BuyCompany3": "",
//     "CompanyRemark": ""
// }

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: "首頁",
          href: "",
        },
        {
          text: "會員中心",
          href: "",
        },
        {
          text: "申請權限",
          href: "",
        },
      ],
    },
    captionData: {
      customerNormal: [
        "行業應用文章",
        "產品查詢",
        "新技術合作",
        "線上客服聊天室",
      ],
      customerEnterprise: [
        "優選產品報價含零組件、方案與整機",
        "客製化服務專案報價含零組件、方案與整機",
        "RMA 申請",
        "解析申請",
        "綠色法規申請",
        "+ 以及所有HannStar 客戶一般會員的服務",
      ],
      partnerNormal: [
        "新技術合作",
        "行業應用文章",
        "產品查詢",
        "線上客服聊天室",
      ],
      partnerEnterprise: [
        "供應商資訊交流平台",
        "+ 以及所有HannStar 供應商一般會員的服務",
      ],
    },
    content: {
      title: "申請權限",
      subTitle: "權限類別",
      rank: "權限說明",
      text: "您現在是",
      member: "一般會員",
      become: "您可以進一步成為",
      companymember: "企業會員",
      customerpermission: "客戶權限說明",
      applymembership: "申請企業會員",
      supplierlimit: "供應商限說明",
    },
  };

  return PageType;
}

export default usePageData;
