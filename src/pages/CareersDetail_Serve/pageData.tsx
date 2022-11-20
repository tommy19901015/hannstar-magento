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
            text: "工作在彩晶為彩晶人提供舒適的工作環境與便利設施",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
            {                     
              title: "彩晶精彩生活",
              content: "舒適溫馨工作環境與人性化服務管理",   
            },
        ],
      },
      {
        type: "ArticleContent",
        data:[
          {
            src: "https://fakeimg.pl/100x70/?text=Image",
            title: "生態綠化環境",
          },
          {
            src: "https://fakeimg.pl/100x70/?text=Image",
            title: "員工餐廳與便利商店",
          },
          {
            src: "https://fakeimg.pl/100x70/?text=Image",
            title: "優質團膳",
          },
          {
            src: "https://fakeimg.pl/100x70/?text=Image",
            title: "員工宿舍",
          },
          {
            src: "https://fakeimg.pl/100x70/?text=Image",
            title: "社團活動",
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "交通路網",
          }
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "人才吸引與留任",
            text: "運用多元招募管道吸引關鍵人才與留任核心人才，提供具競爭力的薪酬、福利與公司營運績效利潤共享分紅盈餘，重視人才、重視未來。人才輪調發展計劃培養未來人才，推動學習型組織，提供多元學習資源與管道，提升組織、個人績效及潛能。",
            textAlign: TextAlign.BottomLeft,
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "多元包容與共融",
            text: "勞動力多元化，保障員工的人權，遵循RBA規範，保障勞工權益，打造包容共融的職場。支持性別平權，女性員工佔41%，女性員工育嬰留任率達100%，平均留任率達93%。",
            textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
            {                     
              title: "薪酬福利",
              content: "",   
            },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
