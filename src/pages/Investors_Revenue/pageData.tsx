import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface";

function usePageData() {
    const { t } = useTranslation();
    const PageType: I_PageType = {
        breadcrumbs: {
            title: "",
            breadcrumbsLink: [
                {
                    text: t('Investors_Revenue.breadcrumbsIndex'),
                    href: "/",
                },
                {
                    text: t('Investors_Revenue.breadcrumbsNowPage'),
                    href: "",
                },
            ],
        }
    };

    return PageType;
}

export default usePageData;
