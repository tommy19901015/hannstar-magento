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
    ],
  };

  return PageType;
}

export default usePageData;
