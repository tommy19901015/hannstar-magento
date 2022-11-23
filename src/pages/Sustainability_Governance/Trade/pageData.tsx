import { useTranslation } from "react-i18next";
import { TextAlign } from "../../../component/banner/interface";
import { I_TemplateLayout } from "../../../templates/TemplateLayout/interface";

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
                text: "企業永續",
                href: "",
              },
              {
                text: "誠信經營",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "SustainabilityTab",
        data: [
          {
            type: "governance",
            activeId: 7,
            component: "tab",
          },
        ],
      },
    ],
  };
  return PageType;
}

export default usePageData;
