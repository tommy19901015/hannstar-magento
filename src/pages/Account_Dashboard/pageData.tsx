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
    content: {
      title: "成員資訊",
      label:"邀請成員",
      btn:"+邀請",
      table:['姓名','郵箱','職稱'],
      member:[
        {
          name:"Amy Lai",
          email:"amy@gmail.com",
          position:"業務"
        },
        {
          name:"Amy Lai",
          email:"amy@gmail.com",
          position:"業務"
        },
        {
          name:"Amy Lai",
          email:"amy@gmail.com",
          position:"業務"
        }
      ]
    },
  };

  return PageType;
}

export default usePageData;