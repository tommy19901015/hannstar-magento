import { useTranslation } from "react-i18next";
import { TextAlign } from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
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
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Group6341.png`,
            title: "工作在彩晶為彩晶人提供舒適的工作環境與便利設施",
            text: "",
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
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Rectangle1903.png`,
            title: "生態綠化環境",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Rectangle1902.png`,
            title: "員工餐廳與便利商店",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Rectangle1901.png`,
            title: "優質團膳",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Rectangle1904.png`,
            title: "員工宿舍",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Rectangle1905.png`,
            title: "社團活動",
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Rectangle1906.png`,
            title: "交通路網",
          }
        ]
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Rectangle1888.png`,
            title: "人才吸引與留任",
            text: "運用多元招募管道吸引關鍵人才與留任核心人才，提供具競爭力的薪酬、福利與公司營運績效利潤共享分紅盈餘，重視人才、重視未來。人才輪調發展計劃培養未來人才，推動學習型組織，提供多元學習資源與管道，提升組織、個人績效及潛能。",
            textAlign: TextAlign.BottomLeft,
          },
          {
            src: `${urlConfig.s3Url}/Image/hannstar/careers/work/Rectangle1889.png`,
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
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 3,
            theme: GraphicsTheme.Theme1,
            data: [
              {
                src:`${urlConfig.s3Url}/Image/hannstar/careers/work/image514.png`,
                title:"具產業競爭力之薪酬",
                text:"優渥薪酬與營運利潤成果共享創新貢獻獎勵制度員工認股計劃",
                href:"",
                btnText:"",
              },
              {
                src:`${urlConfig.s3Url}/Image/hannstar/careers/work/image515.png`,
                title:"全方位員工照顧",
                text:"免費員工及眷屬團體保險專業醫療駐廠諮詢優於勞基法的預給特休假制度",
                href:"",
                btnText:"",
              },
              {
                src:`${urlConfig.s3Url}/Image/hannstar/careers/work/image516.png`,
                title:"退休安定",
                text:"依法提撥6% 個人退休金舊制退休準備金超額提存，確保退休生活邀請退休員工擔任顧問，豐富經驗傳承",
                href:"",
                btnText:"",
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
