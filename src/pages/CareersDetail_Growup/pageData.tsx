import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
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
            src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Group6344.png`,
            title: `${t('CareersDetailGrowup.bannerTitle')}`,
            text: "",
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
                text: `${t('CareersDetailGrowup.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text: `${t('CareersDetailGrowup.breadcrumbsItem2')}`,
                href: "",
              },
              {
                text: `${t('CareersDetailGrowup.breadcrumbsItem3')}`,
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        data: [
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle1914.png`,
            title: `${t('CareersDetailGrowup.graphics1Title')}`,
            btnText: `${t('CareersDetailGrowup.viewjobList')}` ,
            btnHref: "#",
            bgColor: "#e9e9e9",
            content:`${t('CareersDetailGrowup.graphics1SubTitle')}`
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle1918.png`,
            title: "校園招募",
            btnText: `${t('CareersDetailGrowup.viewjobList')}` ,
            btnHref: "/",
            bgColor: "#e9e9e9",
            content:`${t('CareersDetailGrowup.graphics2SubTitle')}`
          },
        ]
      },
      {
        type: "ArticleListContent",
        data: [
          {
            title: `${t('CareersDetailGrowup.title1')}`,
            data: [
              {
                catalog: "",
                articleDatas: [
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image503.png`,
                    title: `${t('CareersDetailGrowup.cardTitle1')}`,
                    subTitle: `${t('CareersDetailGrowup.facebook')}/${t('CareersDetailGrowup.jobsite')}`,
                    description: [
                      "依據個人的學歷、經歷及專業，搜尋有興趣的職缺"
                    ],
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image506.png`,
                    title:`${t('CareersDetailGrowup.cardTitle2')}`,
                    subTitle: `${t('CareersDetailGrowup.jobsite')}`,
                    description: [
                      `${t('CareersDetailGrowup.cardContent2_1')}`,
                      `${t('CareersDetailGrowup.cardContent2_2')}`
                    ],
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image509.png`,
                    title: `${t('CareersDetailGrowup.cardTitle3')}`,
                    subTitle: "",
                    description: [
                      `${t('CareersDetailGrowup.cardContent3_1')}`,
                      `${t('CareersDetailGrowup.cardContent3_2')}`,
                      `${t('CareersDetailGrowup.cardContent3_3')}`,
                    ],
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image512.png`,
                    title: `${t('CareersDetailGrowup.cardTitle4')}`,
                    subTitle: "",
                    description: "",
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image513.png`,
                    title: `${t('CareersDetailGrowup.cardTitle5')}`,
                    subTitle: "",
                    description: [
                      `${t('CareersDetailGrowup.cardContent5')}`],
                    href: "",
                  },
                  {
                    src: `${urlConfig().s3Url}/Image/hannstar/careers/join/image514.png`,
                    title:`${t('CareersDetailGrowup.cardTitle6')}`,
                    subTitle: "",
                    description: [`${t('CareersDetailGrowup.cardContent6')}`],
                    href: "",
                  }
                ],
              }
            ]
          },
        ]
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
            tabName: `${t('CareersDetailGrowup.carouselTitle1')}`,
            tabData: [
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle292.png`,
                title: `${t('CareersDetailGrowup.carouselDataTitle1_1')}`,
                isHot: true,
                content:`${t('CareersDetailGrowup.carouselDataContent1_1')}`,
                productId: "1",
                btnTextL:  `${t('CareersDetailGrowup.viewjob')}` ,
                btnTextR:  `${t('CareersDetailGrowup.resume')}` 
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle293.png`,
                title: `${t('CareersDetailGrowup.carouselDataTitle1_2')}`,
                isHot: true,
                content: `${t('CareersDetailGrowup.carouselDataContent1_2')}`,
                productId: "2",
                btnTextL:  `${t('CareersDetailGrowup.viewjob')}` ,
                btnTextR:  `${t('CareersDetailGrowup.resume')}` 
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle296.png`,
                title:`${t('CareersDetailGrowup.carouselDataTitle1_3')}`,
                isHot: true,
                content: `${t('CareersDetailGrowup.carouselDataContent1_3')}`,
                productId: "3",
                btnTextL:  `${t('CareersDetailGrowup.viewjob')}` ,
                btnTextR:  `${t('CareersDetailGrowup.resume')}` 
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle295.png`,
                title:`${t('CareersDetailGrowup.carouselDataTitle1_4')}`,
                isHot: true,
                content: `${t('CareersDetailGrowup.carouselDataContent1_4')}`,
                productId: "4",
                btnTextL:  `${t('CareersDetailGrowup.viewjob')}` ,
                btnTextR:  `${t('CareersDetailGrowup.resume')}` 
              },
            ]
          },
          {
            tabName: `${t('CareersDetailGrowup.carouselTitle2')}`,
            tabData: [
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle296.png`,
                title:`${t('CareersDetailGrowup.carouselDataTitle2_1')}`,
                isHot: true,
                content:`${t('CareersDetailGrowup.carouselDataContent2_1')}`,
                productId: "1",
                btnTextL:  `${t('CareersDetailGrowup.viewjob')}` ,
                btnTextR:  `${t('CareersDetailGrowup.resume')}` 
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle295.png`,
                title:`${t('CareersDetailGrowup.carouselDataTitle2_2')}`,
                isHot: true,
                content: `${t('CareersDetailGrowup.carouselDataContent2_2')}`,
                productId: "2",
                btnTextL:  `${t('CareersDetailGrowup.viewjob')}` ,
                btnTextR:  `${t('CareersDetailGrowup.resume')}` 
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle296.png`,
                title:`${t('CareersDetailGrowup.carouselDataTitle2_3')}`,
                isHot: true,
                content:`${t('CareersDetailGrowup.carouselDataContent2_3')}`,
                productId: "3",
                btnTextL:  `${t('CareersDetailGrowup.viewjob')}` ,
                btnTextR:  `${t('CareersDetailGrowup.resume')}` 
              },
              {
                src: `${urlConfig().s3Url}/Image/hannstar/careers/join/Rectangle295.png`,
                title:`${t('CareersDetailGrowup.carouselDataTitle2_4')}`,
                isHot: true,
                content: `${t('CareersDetailGrowup.carouselDataContent2_4')}`,
                productId: "4",
                btnTextL:  `${t('CareersDetailGrowup.viewjob')}` ,
                btnTextR:  `${t('CareersDetailGrowup.resume')}` 
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
