import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_Template1, TabEnum } from "../../types/Tmeplate1/interface";


function usePageData() {
    const { t } = useTranslation();
    const PageType: I_Template1 = {
        banner: {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "綠色創新 友善環境 共創永續價值",
            text: "",
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
                    text: "企業永續",
                    href: "",
                },
            ],
        },
        tabId:TabEnum['CSRSGI'],
        module4: {
            graphics3: [
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    content: 
                    "董事會為瀚宇彩晶永續治理最高單位，負責擬定瀚宇彩晶ESG策略與監督執行成果。董事長室轄下設有策略暨永續發展中心，由董事長帶領，分為企業永續發展處、企業策略投資處及企業永續ESG處協力推動，將永續藍圖展開為各部門目標，依單位執掌展開永續業務的規劃與實踐，並依重大性原則，針對不同利害關係人所關注之議題，進行相關業務之規劃、推動、執行和回應，定期向董事會報告執行之進度。"
                },
            ]
        },
        module2: [
            {
                titleContent: {
                    title: "永續藍圖",
                    content: 
                    "瀚宇彩晶結合六大資本資源及五項核心理念的投入，致力創造瀚宇彩晶的永續價值，以「共創價值、綠色創新、智慧生活、健康未來」四個ESG永續聚焦面向，推動並創造永續價值，以善盡企業社會責任，發揮瀚宇彩晶的影響力。"
                },
                banner: {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                },
            }
        ],
    }

    return PageType;
}

export default usePageData;
