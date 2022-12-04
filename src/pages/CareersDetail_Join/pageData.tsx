import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/Group6342.png`,
            title: "彩晶讓你與時俱進成為更好的自己",
            text: "",
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/Group6343.png`,
            title: "員工體驗",
            text: "我們相信以人為本，提供你所渴望的發展體驗，展開美好的職涯旅程。在入職的前80天，透過導師制度與部門專業訓練打造即戰力，完整的學習藍圖與訓練體系，系統化職能培養，包容、和諧的環境，讓你能夠盡情揮灑創意與才能。",
            textAlign: TextAlign.BottomLeft,
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/Rectangle1889.png`,
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
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 3,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/image514.png`,
                title: "數位創新培訓",
                text: "超過400堂優質課程的線上學習平台直播、平台、APP等多元的學習模式線上加線下混成學習，提升學習效果",
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/image515.png`,
                title: "完整教育訓練管道",
                text: "新人訓及導師制，讓員工成為即戰力必修課程與部門訓練，提升工作技能外訓、參訪與考察，強化專業的深度",
                href: "",
                btnText: "",
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/grow/image516.png`,
                title: "趨勢新知導入",
                text: "豐富的資料與電子報章雜誌資源每日/每週/每月 專業與充電新知不定期、系列式的專家趨勢講座",
                href: "",
                btnText: "",
              }
            ],
          }
        ]
      },
    ],
  };

  return PageType;
}

export default usePageData;
