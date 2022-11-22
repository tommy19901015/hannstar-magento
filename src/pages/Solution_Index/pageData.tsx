import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
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
                    title: "方案系統及整合服務",
                    text: "物聯網快速發展下，智慧產品也更加多元，透過豐富顯示資源與經驗，提供客戶整合性方案服務",
                    textAlign: TextAlign.BottomLeft,
                  },
                ],
            },
            {
              type: "TitleContentBlock",
              data: [
                {                     
                  title: "Solution and System Integration Service",
                  content: "Through the product intelligence optimization system, combined with platform big data operation, customers can quickly find the appropriate display panel and product information. Display application areas include: smart manufacturing, smart buildings, transportation, smart retail, health care, and smart education."
                },
              ],
          },
          {
            type:"SustainabilityGraphics3",
            data:[
              {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "Phase.1 Plan",
                content:[
                  "1.Demand Analysis",
                  "2.Plan",
                  "3.Confirm Content"
                ]
              },
              {
              src: "https://fakeimg.pl/1000x700/?text=Image",
              title: "Phase.2 Implement",
              content: 
              [
                "1.Kick off",
                "2.Test & Check",
                "3.Optimize"
              ]},
              {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "Phase.3 Maintain",
                content: 
                [
                  "1.Production",
                  "2.Maintain Contract"
                ]}
            ]
          },
            {
              type: "TitleContentBlock",
              data: [
                  {                     
                    title: "六大應用",
                    content: ""
                  },
              ],
            },
            {
              type: "TitleContentGraphicsCard",
              data: [
                {
                  rowCount: 3,
                  theme: GraphicsTheme.Theme1,
                  data: [
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"/",
                      btnText:"Normal",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"/",
                      btnText:"Normal",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"/",
                      btnText:"Normal",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"/",
                      btnText:"Normal",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"/",
                      btnText:"Normal",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"/",
                      btnText:"Normal",
                    },
                  ],
                }
              ]
            },
        ]
    }

    return PageType;
}

export default usePageData;
