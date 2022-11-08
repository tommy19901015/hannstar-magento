import { useTranslation } from "react-i18next";
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
          text: "申請權限",
          href: "",
        },
      ],
    },
    content: {
      title: "看板",
      table:['日期','單號','項目','產品型號','進度','詳情'],
      member:[
        {
          date:"2018/06/30 10:10:42 AM",
          singleNumber:"A220920101633",
          item:"RAM",
          model:"040B8W8-A20",
          superstition:"覆判完成",
          details:""
        },
        {
          date:"2018/06/30 10:10:42 AM",
          singleNumber:"A220920101633",
          item:"RAM",
          model:"040B8W8-A20",
          superstition:"覆判完成",
          details:""
        },
      ]
    },
  };

  return PageType;
}

export default usePageData;