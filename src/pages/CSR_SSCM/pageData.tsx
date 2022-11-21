import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { TabEnum } from "../../types/Tmeplate1/interface";


function usePageData() {
    const { t } = useTranslation();
    const PageType: I_TemplateLayout =  {
        props: [
            {
              type: "FullBanner",
              data: [
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "綠色創新",
                    text: "從綠色產品之設計、供應鏈到生產，秉持企業成長與生態環境共榮的信念，厚植綠色管理於日常營運。",
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
                        text: "永續供應鏈",
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
                    title: "永續供應鏈",
                    content: "瀚宇彩晶落實在地採購，減少環境衝擊外亦期待增加當地就業機會，促進經濟發展。所有供應商均需配合瀚宇彩晶企業社會責任政策，簽署「瀚宇彩晶勞工與道德供應商承諾書」及「瀚宇彩晶勞工和道德風險評估表」，方可成為合格供應商。對於供應商之績效，瀚宇彩晶定期於每月及每季進行評核，當有發生重大情況時，則啟動不定期評鑑審核。勞工與道德供應商承諾書及風險評估表等RBA文件簽署率100%，環安與道德社會責任表現考核通過率100%",   
                  },
              ],
            },
            {
              type: "TitleContentImgGrid",
              data: [
                {
                  rowCount:4, 
                  imgGrids:[
                    { src: "https://fakeimg.pl/100x100/?text=Image" },
                    { src: "https://fakeimg.pl/100x100/?text=Image" },
                    { src: "https://fakeimg.pl/100x100/?text=Image" },
                    { src: "https://fakeimg.pl/100x100/?text=Image" },
                  ]
                }
              ]
            },
            {
                type: "TitleContentBlock",
                data: [
                    {                     
                      title: "供應鏈風險鑑別與管理",
                      content: "供應鏈的ESG風險除了會帶來營運中斷風險外，亦會帶來聲譽風險。如何建構具ESG韌性的供應鏈，與供應商共創價值瀚宇彩晶的重要使命之一。",   
                    },
                ],
            },
            {
              type:"SustainabilityGraphics3",
              data:[
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "重要原物料",
                    content:["玻璃基板","驅動IC","偏光板","背光板","液晶材料","彩色濾光片"]
                },
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "風險類型",
                    content:["可取得性和管道的實體限制","價格變化風險","法規風險","聲譽風險"]
                },
                {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "供應鏈管理策略",
                    content:["供應商的多元化","材料的儲備","替代材料和替代材料的","開發或採購","對關鍵原物料回收技術的投資"]
                },
              ]
            },
            {
                type: "TitleContentBanner",
                data:[
                    {
                        titleContent: {
                          title: "衝突礦產管理",
                          content:
                            "瀚宇彩晶遵循RBA責任商業聯盟行為準則（Responsible Business Alliance, RBA）中關於衝突礦產相關規定，要求一階供應商出具書面承諾及完成衝突礦產調查表，透過內部綠色產品管理系統對供應商採用礦產情形進行調查合格率達100%。",
                        },
                        banner: {
                          src: "https://fakeimg.pl/1000x700/?text=Image",
                          title: "",
                          text: "",
                          textAlign: TextAlign.BottomLeft,
                        },
                      },
                ]
            },
            {
                type:"SustainabilityGraphics3",
                data:[
                  {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "Hannstar的衝突礦產政策",
                    comment:"衝突礦產調查模板不僅有效利於管理使用衝突礦產的供應商，更讓我們容易獲得供應商的衝突礦產信息。因此我們提出了一份被認可的冶煉廠/精煉廠清單，並通過供應鏈所提出的衝突礦物調查報告比對後列出我們確定的鉭，錫，鎢，金和鈷的冶煉廠/精煉廠的名稱和位置，並且公佈此清單。它屬於Hannstar的衝突礦產盡職調查的一部分。",
                    content:[
                        "Hannstar承諾不使用直接或間接為剛果民主共和國及鄰國（安哥拉、布隆迪、中非共和國、剛果共和國、盧旺達、南蘇丹、坦桑尼亞、烏干達和讚比亞）嚴重侵犯人權行為的武裝團體所提供鉭、錫、鎢、金、鈷的衝突礦產",
                    "Hannstar希望所屬供應商遵守這一政策，並不使用衝突礦產區礦產。",
                    ]
                  },
                  {
                    src: "https://fakeimg.pl/1000x700/?text=Image",
                    title: "供應商要求",
                    subTitle:"Hannstar就其負責任的礦產採購向供應商傳達以下期望",
                    content:[
                        "Hannstar供應商必須以對社會和環境負責的方式開展業務",
                        "Hannstar供應商應確保他們向Hannstar供應的產品是不含有直接或間接為剛果民主共和國或毗鄰國家的武裝團體提供資金或受益的礦物衍生的金屬。這些礦產物包括鉭，錫，鎢，金和鈷。",
                        "Hannstar供應商應根據國家或國際公認的標準或對這些礦產的來源和監管鏈的指導進行盡職調查（例如經濟合作與發展組織關於受衝突影響和高風險地區礦產負責任供應鏈的盡職調查指南），並根據要求向Hannstar提供盡職調查措施。這些措施應包括完成RMI CMRT衝突礦產報告模板(3TGs/Cobalt)以及RMI RMAP負責任礦產保證過程支持。"
                    ]
                  },
                ]
            },
        ],
    }

    return PageType;
}

export default usePageData;
