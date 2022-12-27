import { useTranslation } from "react-i18next";
import { I_TemplateLayout } from "../../templates/TemplateLayout/interface";
import { GrapTheme } from "../../component/graphics3/interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "TitleContentBlock",
        data: [
          {
            title:`${t('About_Family.title')}`,
            content: ""
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
                text:`${t('About_Family.breadcrumbsItem1')}`,
                href: "",
              },
              {
                text:`${t('About_Family.breadcrumbsItem2')}`,
                href: "",
              },
              {
                text:`${t('About_Family.breadcrumbsItem3')}`,
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
            src: `${urlConfig().s3Url}/Image/hannstar/about/family/hannstar.jpg`,
            title: `${t('About_Family.company1')}`,
            image: `${urlConfig().s3Url}/Image/hannstar/index/hannstar_logo.jpg`,
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:`${t('About_Family.content1')}`,
            comment: {
              commentTitle: `${t('About_Family.info')}`,
              comments: [
                `${t('About_Family.telephone1')}`,
                `${t('About_Family.fax1')}`,
                `${t('About_Family.address1')}`,
              ]
            },
            moreHref: "/",
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/about/family/hannstouch.jpg`,
            title:`${t('About_Family.company2')}`,
            image: `${urlConfig().s3Url}/Image/hannstar/index/hannstouch_logo.jpg`,
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:`${t('About_Family.content2')}`,
            comment: {
              commentTitle: `${t('About_Family.info')}`,
              comments: [
                `${t('About_Family.telephone2')}`,
                `${t('About_Family.fax2')}`,
                `${t('About_Family.address2')}`,
              ]
            },
            moreHref: "/",
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/about/family/hannspree.jpg`,
            title:`${t('About_Family.company3')}`,
            image: `${urlConfig().s3Url}/Image/hannstar/index/hsnnspree_logo.jpg`,
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:`${t('About_Family.content3')}`,
            comment: {
              commentTitle: `${t('About_Family.info')}`,
              comments: [
                `${t('About_Family.telephone3')}`,
                `${t('About_Family.address3')}`,
              ]
            },
            moreHref: "/",
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/about/family/hannshouse.jpg`,
            title:`${t('About_Family.company4')}`,
            image: `${urlConfig().s3Url}/Image/hannstar/index/hannshouse_logo.png`,
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:`${t('About_Family.content4')}`,
            comment: {
              commentTitle: `${t('About_Family.info')}`,
              comments: [
                `${t('About_Family.telephone4')}`,
                `${t('About_Family.address4')}`,
                `${t('About_Family.email4')}`,
              ]
            },
            moreHref: "/",
          },
          {
            src: `${urlConfig().s3Url}/Image/hannstar/about/family/foundation.jpg`,
            title:`${t('About_Family.company5')}`,
            image: `${urlConfig().s3Url}/Image/hannstar/index/foundation_logo.jpg`,
            paragraphs: true,
            theme: GrapTheme.Customization,
            content:`${t('About_Family.content5')}`,
            comment: {
              commentTitle: `${t('About_Family.info')}`,
              comments: [
                `${t('About_Family.telephone5')}`,
                `${t('About_Family.address5')}`,
                `${t('About_Family.email5')}`,
              ]
            },
            moreHref: "/",
          },
        ]
      },
    ],
  };

  return PageType;
}

export default usePageData;
