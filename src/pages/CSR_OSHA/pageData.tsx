import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_Template1, TabEnum } from "../../types/Tmeplate1/interface";


function usePageData() {
    const { t } = useTranslation();
    const PageType: I_Template1 = {
        banner: {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "社會共融",
            text: "只有永續的人才，才有永續的企業。盼望攜手共創永續共榮的社會。",
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
                    text: "職業安全衛生",
                    href: "",
                },
            ],
        },
        tabId:TabEnum['CSROSHA'],
        module4: {
            graphics3: [
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "職業安全衛生管理系統ISO 45001驗證",
                    content: 
                    "瀚宇彩晶針對台灣南部科學園區LCD廠與觸控感應器廠等兩廠，以及南京TFT LCD液晶顯示器模組、觸控面板的製造訂有職業安全衛生管理計畫、實施安全衛生管理及自動檢查，並完成職業安全衛生管理系統ISO 45001的驗證，涵蓋瀚宇彩晶員工、以及承攬商、自營作業者等的安全衛生管理事項。"},
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "管理審查暨職安衛委員會",
                    content: 
                    "為落實瀚宇彩晶的環安政策，改善公司作業危害風險與職安衛績效，我們設有「管理審查暨職安衛委員會」，並由廠區最高主管副總經理擔任管理代表兼主任委員。"
                },
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "安全保命條款",
                    content: 
                    "瀚宇彩晶重視所有工作者的健康安全，所有新進員工在第一天訓練時便告知作業過程的安全保命項目，並要求簽署不得違反《安全保命條款》之規定，若新進人員認知在其作業過程，如有可能導致傷害或疾病的工作狀態時，得依據《安全保命條款》規定退避工作；又如作業人員違反作業《安全保命條款》之規定而導致事故時，其主管會依獎懲管理程序連坐處分。"
                },

            ]
        },
        module2: [
            {
                titleContent: {
                    title: "職業安全績效",
                    content: "瀚宇彩晶致力降低職業傷害的風險，並教育訓練、人力配置、設備改善、制度改善四個面向進行改善和優化，我們投入超過千萬的資源與系統，盤查和管理一萬六千多個安全開關，增設七位工安專職人員、調訓近900名同仁、建置安全採購規範、改善近百台的設備，同時劃分101個巡檢區域、改善作業流程，以強化和完善工作的場域和環境。"
                },
                banner: {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "",
                    text: "",
                    textAlign: TextAlign.BottomLeft,
                },
            },
        ],
    }

    return PageType;
}

export default usePageData;
