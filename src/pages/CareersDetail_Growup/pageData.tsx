import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "",
            text: "人才，是企業面對激烈競爭環境時，最能展現力量的優勢之一期待創新、熱情、勇於突破的你加入我們的團隊",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type:"SustainabilityGraphics3",
        data:[
            {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "歡迎光電面板製造人才",
                btnText: "查看104職缺列表",
                btnHref: "#",
                content:
                    "歡迎加入彩晶，前進光電製造最前線共創精彩價值，為你的職涯增添色彩"
            },
            {
                src: "https://fakeimg.pl/1000x700/?text=Image",
                title: "校園招募",
                btnText: "查看104職缺列表",
                btnHref: "#",
                content:"我們致力於招募來自各地大學的優秀人才。加入彩晶工作職涯是最棒的選擇 ，歡迎喜歡挑戰與熱忱學習的您。我們為來自不同背景的學生，提供各種合適的工作機會，打造友善職場，多元共融的組織文化是至關重要的。到職後你將由mentor引導參與工作與學習，實現自己的工作目標並成就未來。"
            },
        ]
      },
      {
        type: "TitleContentBlock",
        data: [
            {                     
              title: "應徵流程",
              content: "",   
            },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
            {                     
              title: "熱門職缺",
              content: "",   
            },
        ],
      },
      {
        type: "TabProductListBlock",
        data: [
            {                     
              tabName: "台北",
              tabData: [
                {
                  src: "https://fakeimg.pl/350x200/?text=Hello",
                  title: "全球車載業務",
                  isHot: true,
                  content:"您會需要負責與全球頂尖的車廠進行顯示產品的推廣與銷售，藉此您會了解國際車廠最新的需求與趨勢，讓自己走在車用電子領域的最前線。",
                  productId: "1",
                  btnTextL:"查看職缺內容",
                  btnTextR:"投遞履歷"
                },
                {
                  src: "https://fakeimg.pl/350x200/?text=Hello",
                  title: "全球工控業務",
                  isHot: true,
                  content:"需要與國內外系統大廠及方案整合公司合作，接觸智慧娛樂、智慧醫療、智慧交通等各項引領潮流的新科技產品，一起讓顯示器增進我們的生活樂趣，並帶來更多的便利。",
                  productId: "2",
                  btnTextL:"查看職缺內容",
                  btnTextR:"投遞履歷"
                },
                {
                  src: "https://fakeimg.pl/350x200/?text=Hello",
                  title: "工控/車載PM工程師",
                  isHot: true,
                  content:"您將運用負責工業和汽車產品領域海外品牌客戶的整體解決方案產品，共同創造出多元的科技新品，且跨部門與其他夥伴密切合作，以優化產品功能。",
                  productId: "3",
                  btnTextL:"查看職缺內容",
                  btnTextR:"投遞履歷"
                },
                {
                  src: "https://fakeimg.pl/350x200/?text=Hello",
                  title: "工控/系統軟體工程師",
                  isHot: true,
                  content:"系統程式開發與建置系統支持企業運營與各項業務推展，需收集各單位對於系統應用的需求，進行系統開發或維護的提供最佳解決方案。",
                  productId: "4",
                  btnTextL:"查看職缺內容",
                  btnTextR:"投遞履歷"
                },
              ]
            },
            {                     
              tabName: "台南",
              tabData: [
                {
                  src: "https://fakeimg.pl/350x200/?text=Hello",
                  title: "工控/車載PM工程師",
                  isHot: true,
                  content:"您將運用負責工業和汽車產品領域海外品牌客戶的整體解決方案產品，共同創造出多元的科技新品，且跨部門與其他夥伴密切合作，以優化產品功能。",
                  productId: "3",
                  btnTextL:"查看職缺內容",
                  btnTextR:"投遞履歷"
                },
                {
                  src: "https://fakeimg.pl/350x200/?text=Hello",
                  title: "工控/系統軟體工程師",
                  isHot: true,
                  content:"系統程式開發與建置系統支持企業運營與各項業務推展，需收集各單位對於系統應用的需求，進行系統開發或維護的提供最佳解決方案。",
                  productId: "4",
                  btnTextL:"查看職缺內容",
                  btnTextR:"投遞履歷"
                },
              ]
            },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
