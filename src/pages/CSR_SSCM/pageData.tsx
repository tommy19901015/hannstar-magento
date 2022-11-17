import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_Template1, TabEnum } from "../../types/Tmeplate1/interface";


function usePageData() {
    const { t } = useTranslation();
    const PageType: I_Template1 = {
        banner: {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "綠色創新",
            text: "從綠色產品之設計、供應鏈到生產，秉持企業成長與生態環境共榮的信念，厚植綠色管理於日常營運。",
            textAlign: TextAlign.BottomLeft,
        },
        breadcrumbs: {
            title: "",
            breadcrumbsLink: [
                {
                    text: "首頁",
                    href: "",
                },
                {
                    text: "永續供應鏈",
                    href: "",
                },
            ],
        },
        tabId:TabEnum['CSRSSCM'],
    }

    return PageType;
}

export default usePageData;
