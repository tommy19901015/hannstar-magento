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
                                text: "企業永續",
                                href: "",
                            },
                            {
                                text: "投資人關係",
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
