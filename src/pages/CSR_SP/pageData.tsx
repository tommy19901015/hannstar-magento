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
                    text: "永續生產",
                    href: "",
                },
            ],
        },
        tabId:TabEnum['CSRSP'],
        module2: [
            {
                titleContent: {
                    title: "永續生產",
                    content: ""
                },
                banner: {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                },
            },
            {
                titleContent: {
                    title: "2021年瀚宇彩晶環境足跡",
                    content: "彩晶推動高效能、低汙染的綠色生產，達到企業獲利與環境永續的雙贏目標。面對全球暖化及極端氣候帶來可能的營運衝擊進行廠區的節能減碳，並揭露2021年瀚宇彩晶環境足跡。"
                },
                banner: {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                },
            }
        ],
        module6:{
            titleContent: {
                title: "永續案例",
                content: ""
            },
            graphicsCard:{
                rowCount: 3,
                theme:GraphicsTheme.Theme1,
                data:[
                    {
                        src: "https://fakeimg.pl/1000x700/?text=Image",
                        title: "100%使用FCs機導入NF3及SF6燃燒減量設備",
                        text: "溫室氣體排放自2005年累積至2021年已減少1,928,165公噸CO2e",
                    },
                    {
                        src: "https://fakeimg.pl/1000x700/?text=Image",
                        title: "Array光阻液回收",
                        text: "將製程中塗佈後多餘的光阻液收集，2021年回收再利用65.07公噸光阻液。"},
                    {
                        src: "https://fakeimg.pl/1000x700/?text=Image",
                        title: "再生水工程改善",
                        text: "降低製造再生水後清洗管路的耗水量，預估每年可節省36,500百萬公升用水"},
                ]
            } 
        }
    }

    return PageType;
}

export default usePageData;
