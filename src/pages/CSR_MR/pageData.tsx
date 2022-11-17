import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_Template1, TabEnum } from "../../types/Tmeplate1/interface";


function usePageData() {
    const { t } = useTranslation();
    const PageType: I_Template1 = {
        banner: {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "公司治理",
            text: "建立完善的公司治理制度，降低企業的經營風險，提升企業的競爭力，營造公司和股東的長遠利益。",
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
                    text: "風險管理",
                    href: "",
                },
            ],
        },
        tabId: TabEnum['CSRMR'],
        module1: {
            titleContent: {
                title: "風險管理",
                content: "",
            }
        },
        module4: {
            graphics3: [
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "風險鑑別與管理機制",
                    content:
                        "為進一步提升公司風險管理之能力，成立經營暨風險管理處並直屬於總經理室，透過定期召開高階管理主管會議，進行風險的鑑別，訂定管理對策，及公司內部相關管理追蹤指標，視情況將公司所面臨的重大風險回報給總經理室、董事長室及董事會。"
                },
            ]
        },
        module2: [
            {
                titleContent: {
                    title: "風險類別與管理情形",
                    content: "為進一步提升公司風險管理之能力，成立經營暨風險管理處並直屬於總經理室，透過定期召開高階管理主管會議，進行風險的鑑別，訂定管理對策，及公司內部相關管理追蹤指標，視情況將公司所面臨的重大風險回報給總經理室、董事長室及董事會。"
                },
                banner: {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "風險鑑別與管理機制",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                },
            }
        ],
    }

    return PageType;
}

export default usePageData;
