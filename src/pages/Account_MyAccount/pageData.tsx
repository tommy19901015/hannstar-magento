import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_PageType } from "./interface";

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
          text: "帳戶資訊",
          href: "",
        },
      ],
    },
    personal:"個人專區",
    account:"帳戶資訊",
    personalInfo:"個人資訊",
    edit:"編輯",
    name:"姓名",
    email:"email",
    subscription:"信件訂閱",
    companyInfo:"公司資訊",
    companyName:"公司名稱",
    business:"商業類型",
    applicable:"適用區域",
  };

  return PageType;
}

export default usePageData;
