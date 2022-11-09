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
          text: "成員資訊",
          href: "",
        },
      ],
    },
    content: {
      title: "成員資訊",
      label: "邀請成員",
      btn: "+邀請",
      table: ["姓名", "郵箱", "職稱"],
      // member:[
      //   {
      //     name:"Amy Lai",
      //     email:"amy@gmail.com",
      //     position:"業務"
      //   },
      //   {
      //     name:"Amy Lai",
      //     email:"amy@gmail.com",
      //     position:"業務"
      //   },
      //   {
      //     name:"Amy Lai",
      //     email:"amy@gmail.com",
      //     position:"業務"
      //   }
      // ]
    },
  };

  return PageType;
}

export default usePageData;
