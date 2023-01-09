import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { I_TemplateLayout, I_BlockLayout } from "../../templates/TemplateLayout/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { urlConfig } from "../../config/urlSetting";

const {
  hannstar,
  partner,
  service,
  tftdisplay,
  paperdisplay,
  solution,
  hannspree,
  s3Url,
} = urlConfig();

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_TemplateLayout = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/banner1.jpg`,
            title: `${t('Index.bannerTitle')}`,
            text: "",
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "MessageCenterPlatform",
        data: [
          {
            src: `${
              urlConfig().s3Url
            }/Image/hannstar/index/icon_index_menu_blue_tft.png`,
            title:`${t('Index.platform_1')}`,
            href: tftdisplay.index.href,
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/hannstar/index/icon_index_menu_blue_paperdisplay.png`,
            title: `${t('Index.platform_2')}`,
            href: paperdisplay.index.href,
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/hannstar/index/icon_index_menu_blue_service.png`,
            title: `${t('Index.platform_3')}`,
            href: service.index.href,
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/hannstar/index/icon_index_menu_blue_siass.png`,
            title: `${t('Index.platform_4')}`,
            href: solution.index.href,
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/hannstar/index/icon_index_menu_blue_sc.png`,
            title:`${t('Index.platform_5')}`,
            href: partner.index.href,
          },
          {
            src: `${
              urlConfig().s3Url
            }/Image/hannstar/index/icon_index_menu_blue_hsp.png`,
            title: `${t('Index.platform_6')}`,
            href: hannspree.index.href,
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_main.jpg`,
            title: `${t('Index.bannerBlockTitle1')}`,
            text: `${t('Index.bannerContent1')}`,
            textAlign: TextAlign.BottomLeft,
            btnText:`${t('Index.moreBtn')}`,
            btnHref: "/",
          },
        ],
      },
      {
        type: "TitleContentGraphicsCard",
        data: [
          {
            rowCount: 3,
            theme: GraphicsTheme.Theme3,
            data: [
              {
                src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_skill.jpg`,
                title:`${t('Index.cardTitle1')}`,
                text:`${t('Index.cardContent1')}`,
                href: "/",
                btnText:`${t('Index.cardBtn1_1')}`,
                hrefSec:"/",
                btnTextSec:`${t('Index.cardBtn1_2')}`,
              },
              {
                src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_buy.jpg`,
                title:`${t('Index.cardTitle2')}`,
                text:`${t('Index.cardContent2')}`,
                href: "/",
                btnText:`${t('Index.cardBtn2_1')}`,
                hrefSec:"/",
                btnTextSec:`${t('Index.cardBtn2_2')}`,
              },
              {
                src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_ef.jpg`,
                title:`${t('Index.cardTitle3')}`,
                text:`${t('Index.cardContent3')}`,
                href: "/",
                btnText:`${t('Index.cardBtn3_1')}`,
              },
            ],
          },
        ],
      },
      {
        type: "SustainabilityGraphics3",
        layoytBgColor:'#f6f6f6',
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/img_hsd_index_pd_banner_application.jpg`,
            title: `${t('Index.informationTitle')}`,
            content:`${t('Index.informationContent')}`,
            bgColor:"none",
            information:[
              { title:`${t('Index.information_1')}`, link:"/" },
              { title:`${t('Index.information_2')}`, link:"/" },
              { title:`${t('Index.information_3')}`, link:"/" },
              { title:`${t('Index.information_4')}`, link:"/" },
              { title:`${t('Index.information_5')}`, link:"/" },
              { title:`${t('Index.information_6')}`, link:"/" }
            ]
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/career_banner.jpg`,
            title: `${t('Index.bannerBlockTitle2')}`,
            text: `${t('Index.bannerContent2')}`,
            textAlign: TextAlign.BottomLeft,
            btnText:`${t('Index.moreBtn')}`,
            btnHref: "/",
          },
        ],
      },
      {
        type: "BannerBlock",
        data: [
          {
            src: `${s3Url}/Image/hannstar/index/esg_banner.jpg`,
            title: `${t('Index.bannerBlockTitle3')}`,
            text: `${t('Index.bannerContent3')}`,
            textAlign: TextAlign.BottomLeft,
            btnText:`${t('Index.moreBtn')}`,
            btnHref: "/",
          },
        ],
      },
      {
        type: "TitleContentImgGrid",
        data: [
          {
            titleContent: {
              title: `${t('Index.gridTitle')}`,
              content: "",
              bgColor:"none",
            },
            layout : I_BlockLayout.FullLayout,
            isFixed:true,
            rowCount: 5,
            imgGrids: [
              {
                text: `${t('Index.imgGridTitle_1')}`,
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hss.png`,
              },
              {
                text: `${t('Index.imgGridTitle_2')}`,
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hst.png`,
              },
              {
                text: `${t('Index.imgGridTitle_3')}`,
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hsp.png`,
              },
              {
                text: `${t('Index.imgGridTitle_4')}`,
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hsh.png`,
              },
              {
                text: `${t('Index.imgGridTitle_5')}`,
                src: `${s3Url}/Image/hannstar/index/btn_hsd_index_rc_hsf.png`,
              },
            ],
          },
        ],
      },
    ],
  };

  return PageType;
}

export default usePageData;
