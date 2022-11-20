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
            text: "彩晶讓你與時俱進成為更好的自己",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "員工體驗",
            text: "我們相信以人為本，提供你所渴望的發展體驗，展開美好的職涯旅程。在入職的前80天，透過導師制度與部門專業訓練打造即戰力，完整的學習藍圖與訓練體系，系統化職能培養，包容、和諧的環境，讓你能夠盡情揮灑創意與才能。",
            textAlign: TextAlign.BottomLeft,
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "職涯發展",
            text: "我們致力於人才的職涯發展，360度全方位的成長空間，暢通的晉升機會與輪調安排，在彩晶，你可以培養多種能力，開闊眼界與視野。專業職的升遷制度，提供技術人才可專注於突破技術發展的歷練管道。",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
            {                     
              title: "豐富學習資源",
              content: "建立完整的人才計劃，透過正式與非正式的學習路徑，協助你成長並實現自我價值。",   
            },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
