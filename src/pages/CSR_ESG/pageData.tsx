import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import urlConfig from "../../config/urlSetting.json";
import { I_PageType } from "./interface";
import { GraphicsLineType } from "../../component/graphicsLine/interface"


function usePageData() {
    const { t } = useTranslation();
    const PageType: any = {
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
        module2: [
            {
                titleContent: {
                    title: "永續重點績效",
                    content: ""
                },
                banner: {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                },
            }
        ],
        module4: {
            graphics3: [
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "Sustainalytics ESG 風險評級低",
                    content: "2021年歐洲專業永續評比機構《Sustainalytics》ESG（環境、社會、治理面）評級結果為低風險",
                },
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "EcoVadis 永續評比 銅獎",
                    content: "EcoVadis旨在透過控制供應鏈風險，來改善企業的可持續性和社會責任表現，評鑑項目包含環境、勞工與人權、商業道德、可持續採購。2021年瀚宇彩晶榮獲EcoVadis永讀評比之銅獎榮耀。",
                },
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "TCSA 永續報告書 銀獎",
                    content: "彩晶發行之2021永續報告書獲得台灣永續能源研究基金會舉辦的「永續報告獎項-銀獎」肯定，展現彩晶長期多元化的永續行動成果。",
                },
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "資誠永續影響力獎",
                    content: "彩晶基金會以「不安中的勇氣」紀錄片榮獲資誠永續影響力特別獎。秉持「善用故事力，創造影響力」的核心理念，以2分鐘的永續專案影片，以善創意啟發人心，並呼應聯合國永續發展目標（SDGs）。",
                }
            ]
        },
        module5: [
            {
                titleContent: {
                    title: "2021年永續報告書精華摘要",
                    content: "2021年永續報告書依循國際原則導入和揭露TCFD及SASB指標資訊，深化並聚焦永續資訊之揭露，回應利害關係人關心的議題，創造長期永續價值。"
                },
                video: {
                    src: `${urlConfig.s3Url}/Media/Hannstar%E4%B8%80%E5%88%86%E5%8D%8A%E5%BD%A2%E8%B1%A1%E5%BD%B1%E7%89%871106_final.mov`,
                }
            },
            {
                titleContent: {
                    title: "紀錄，不安中的勇氣",
                    content: "從全球到台灣，2020年充斥著動盪不安的危機。本紀錄片記錄著面對COVID－19疫情嚴峻考驗下，從一個您從未看過的角度，闡述在這場戰爭中，每一步決策都將是深刻印在心裡的一段歷史。"
                },
                video: {
                    src: `${urlConfig.s3Url}/Media/Hannstar%E4%B8%80%E5%88%86%E5%8D%8A%E5%BD%A2%E8%B1%A1%E5%BD%B1%E7%89%871106_final.mov`,
                }
            }
        ],
    }

    return PageType;
}

export default usePageData;
