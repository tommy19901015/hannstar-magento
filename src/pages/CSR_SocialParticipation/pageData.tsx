import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";


function usePageData() {
    const { t } = useTranslation();
    const PageType: I_TemplateLayout =  {
        props:[
            {
                type: "FullBanner",
                data: [
                  {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "社會共融",
                    text: "只有永續的人才，才有永續的企業。盼望攜手共創永續共榮的社會。",
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
                          text: "社會共融",
                          href: "",
                        },
                    ],
                  },
                ],
            },
            {
              type: "TitleContentBlock",
              data: [
                  {                     
                    title: "社會參與",
                    content: "瀚宇彩晶以具體行動感恩所在土地上的人事物，也以永續經營的態度，看待我們與在地人文、土地、產業的關係，希望一起共榮共好。",   
                  },
              ],
            },
            {
                type:"SustainabilityGraphics3",
                data:[
                  {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "在地數位培育計畫",
                    content: 
                    "我們從2015年開始陸續捐贈電腦、筆電及液晶螢幕等電腦硬體設備，近五年共總捐贈2,717件。經由華碩文教基金會再生電腦計畫整修處理後，再轉贈弱勢團體進行數位培育計畫，一方面可消弭城鄉差距，另一方面也減少對地球的破壞，善盡企業社會責任。"
                   },
                  {
                  src: "https://fakeimg.pl/1000x700/?text=Image",
                  title: "支持臺灣農產品與社會關懷",
                  content: 
                  "為照顧台灣在地農民，響應支持臺灣農產品，2021年認購200箱鳳梨，提供同仁享用。我們也與國立中山大學(USR大學社會責任實踐計畫）合作，購買台南在地小農柚子，並贈送給門諾基金會「老人送餐」對象：花蓮偏鄉獨居老人及身障弱勢家庭，使其在中秋佳節感受來自社會的關懷。同時，我們也支持門諾基金會輔具銀行，讓行動不便的長輩得以透過輔具改善生活品質。"
                  }
                ]
            },
        ]
    }

    return PageType;
}

export default usePageData;
