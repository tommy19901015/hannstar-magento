import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
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
                    title: "Sustainable Supply Chain",
                    text: "HannStar is committed to provide a better environment for our next generation. We obey the green regulations to achieve the goal.",
                    textAlign: TextAlign.BottomLeft,
                    type: BannerType.Main,
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
                            text: "首頁",
                            href: "",
                        },
                        {
                          text: "訊息中心",
                          href: "",
                        },
                        {
                          text: "投資人關係",
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
                    title: "Products And Applications",
                    content: "As the leader of LCD Panel Industry, HannStar is committed to provide Eco-Friendly Products.We assist our partners to run sustainanly since our partners are the critical parts for providing great quality products.",   
                  },
              ],
            },
            {
              type: "TitleContentBlock",
              data: [
                  {                     
                    title: "Products",
                    content: ""
                  },
              ],
            },
            {
                type:"SustainabilityGraphics3",
                data:[
                  {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "Display Board",
                    content:[
                      "HMI Control Board can meet the demand of all kinds of human machine interfaces. ",
                      "Besides using built-in fundamental firmware and UI interface to drive panel display, developers are able to control the device through simple settings. ",
                      "It is also equipped with additional memory slots for memory expansion to fulfill versatile application needs."
                    ]},
                  {
                  src: "https://fakeimg.pl/1000x700/?text=Image",
                  title: "Converter Board",
                  content:[
                    "To meet different product attributes,Hannstar provides a variety of adapter boards,Meet the diverse connection requirements of the customer interface display panel.",
                    "Related Specifications RGB, MIPI, SPI, LVDS..."
                  ]},
                  {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "Customization",
                    content:[
                      "HannStar has abundant display solutions and supply chain resources to provide customized services and assist clients in quickly responding to market demand."
                    ]}
                ]
            },
            {
              type: "TitleContentBlock",
              data: [
                  {                     
                    title: "Application",
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
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"",
                      btnText:"",
                    },
                    {
                      src:"https://fakeimg.pl/100x100/?text=Image",
                      title:"副標1",
                      text:"透過平台簡易、便利的服務，讓客戶享受更快速的各項，由全方位的售後服務團隊為項勞。",
                      href:"",
                      btnText:"",
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
