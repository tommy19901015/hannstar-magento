import { useTranslation } from "react-i18next";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";

function usePageData() {
    const { t } = useTranslation();
    const PageType: I_TemplateLayout = {
        props: [
            {
                type: "BreadcrumbsBlock",
                data: [
                    {
                        title: "",
                        breadcrumbsLink: [
                            {
                                text: "客戶服務",
                                href: "",
                            },
                            {
                                text: "技術諮詢",
                                href: "",
                            },
                        ],
                    },
                ],
            },
        ],
    };

    return PageType;
}

export default usePageData;
