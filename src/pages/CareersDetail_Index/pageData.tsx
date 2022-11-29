import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import urlConfig from "../../config/urlSetting.json";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/recruit/Group6338.png`,
            title: "擁抱改變 開創未來與我們一起發揮科技無所不在的影響力",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/recruit/Group6339.png`,
            title: "透過不斷創新，我們透過綠色顯示器的應用 開啟讓世界更美好、生活更精采的視窗",
            text: "",
            textAlign: TextAlign.BottomLeft,
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/recruit/image503.png`,
            title: "在彩晶你可以和夥伴一起創造無限可能了解我們的工作文化、環境、以及你可善用的資源",
            text: "",
            textAlign: TextAlign.BottomLeft,
            btnText: "工作在彩晶",
            btnHref: "#",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/recruit/Group6340.png`,
            title: "正在尋找成長與發展職涯的機會嗎？在彩晶，你有機會參與最先進應用，與時俱進，成為更好的自己",
            text: "",
            textAlign: TextAlign.BottomLeft,
            btnText: "成長在彩晶",
            btnHref: "#",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/recruit/image501.png`,
            title: "加入我們的團隊，形塑彩晶的DNA成就自己，一起創造未來",
            text: "",
            textAlign: TextAlign.BottomLeft,
            btnText: "加入彩晶",
            btnHref: "#",
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
