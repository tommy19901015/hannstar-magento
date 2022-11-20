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
                          text: "人才發展",
                          href: "",
                        },
                    ],
                  },
                ],
            },
            {
                type:"SustainabilityGraphics3",
                data:[
                    {
                        src: "https://fakeimg.pl/1000x700/?text=Image",
                        title: "人才培力與發展",
                        content: 
                        "我們於2021年持續以新進人員訓練、領導管理體系、專業訓練體系、品質能力訓練體系、共通訓練體系等5大體系的專業課程，展開多元人才培力計畫。從新進員工至各職能指定派訓，乃至主管階層以上，依不同職位、專業職能的需求，開設不同類別的課程，讓員工可以學習到專業知識，提昇自我成長。"},
                  {
                  src: "https://fakeimg.pl/1000x700/?text=Image",
                  title: "輪調機制",
                  content: 
                  "為了活絡內部人才流動，促進員工多元發展，瀚宇彩晶落實輪調機制，並設有導師機制，讓員工在各職務的導師帶領下多元學習，建立全方位能力，有助於未來的職涯發展與規劃。"
              }
                ]
            },
        ]
    }

    return PageType;
}

export default usePageData;
