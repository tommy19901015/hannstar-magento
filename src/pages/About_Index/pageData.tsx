import { useTranslation } from "react-i18next";
import { TextAlign, BannerType } from "../../component/banner/interface";
import { I_PageType } from "./interface";
import { urlConfig } from "../../config/urlSetting";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {

    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: `${t('About_Index.breadcrumbsItem1')}`,
          href: "",
        },
        {
          text: `${t('About_Index.breadcrumbsItem2')}`,
          href: "",
        },
        {
          text: `${t('About_Index.breadcrumbsItem3')}`,
          href: "",
        }
      ]
    },

    bannerTextData: {
      src: `${urlConfig().s3Url}/Image/hannstar/about/Profile/HannStarVision.jpg`,
      title: `${t('About_Index.bannerTitle')}`,
      text: `${t('About_Index.bannerContent')}`,
      textAlign: TextAlign.BottomLeft,
      type: BannerType.Main,
    },
    milestoneData: [
      {
        date:`${t('About_Index.milestoneDate1')}`,
        title: `${t('About_Index.milestoneTitle1')}`,
        imgSrc: ""
      },
      {
        date:`${t('About_Index.milestoneDate2')}`,
        title: `${t('About_Index.milestoneTitle2')}`,
        imgSrc: `${urlConfig().s3Url}/Image/hannstar/about/Profile/November2021.jpg`,
      },
      {
        date:`${t('About_Index.milestoneDate3')}`,
        title: `${t('About_Index.milestoneTitle3')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate4')}`,
        title: `${t('About_Index.milestoneTitle4')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/45001.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate5')}`,
        title: `${t('About_Index.milestoneTitle5')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/50001.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate6')}`,
        title: `${t('About_Index.milestoneTitle6')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/17025.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate7')}`,
        title: `${t('About_Index.milestoneTitle7')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/28000.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate8')}`,
        title: `${t('About_Index.milestoneTitle8')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate9')}`,
        title: `${t('About_Index.milestoneTitle9')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate10')}`,
        title: `${t('About_Index.milestoneTitle10')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/27001.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate11')}`,
        title: `${t('About_Index.milestoneTitle11')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate12')}`,
        title: `${t('About_Index.milestoneTitle12')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/TWAEO.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate13')}`,
        title: `${t('About_Index.milestoneTitle13')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate14')}`,
        title: `${t('About_Index.milestoneTitle14')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate15')}`,
        title: `${t('About_Index.milestoneTitle15')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate16')}`,
        title: `${t('About_Index.milestoneTitle16')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/office.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate17')}`,
        title: `${t('About_Index.milestoneTitle17')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate18')}`,
        title: `${t('About_Index.milestoneTitle18')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate19')}`,
        title: `${t('About_Index.milestoneTitle19')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate20')}`,
        title: `${t('About_Index.milestoneTitle20')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate21')}`,
        title: `${t('About_Index.milestoneTitle21')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/Sharp.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate22')}`,
        title: `${t('About_Index.milestoneTitle22')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate23')}`,
        title: `${t('About_Index.milestoneTitle23')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/9001.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate24')}`,
        title: `${t('About_Index.milestoneTitle24')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/TainanLCD.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate25')}`,
        title: `${t('About_Index.milestoneTitle25')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate26')}`,
        title: `${t('About_Index.milestoneTitle26')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate27')}`,
        title: `${t('About_Index.milestoneTitle27')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate28')}`,
        title: `${t('About_Index.milestoneTitle28')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate29')}`,
        title: `${t('About_Index.milestoneTitle29')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate30')}`,
        title: `${t('About_Index.milestoneTitle30')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate31')}`,
        title: `${t('About_Index.milestoneTitle31')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate32')}`,
        title: `${t('About_Index.milestoneTitle32')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/14001.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate33')}`,
        title: `${t('About_Index.milestoneTitle33')}`,
        imgSrc:
          "",
      },
      {
        date:`${t('About_Index.milestoneDate34')}`,
        title: `${t('About_Index.milestoneTitle34')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/Toshiba.jpg`
      },
      {
        date:`${t('About_Index.milestoneDate35')}`,
        title: `${t('About_Index.milestoneTitle35')}`,
        imgSrc:
          `${urlConfig().s3Url}/Image/hannstar/about/Profile/HannStarDisplay.png`
      }
    ],
    graphics3Data: [
      {
        src: `${urlConfig().s3Url}/Image/hannstar/about/Profile/Managementphilosophy.jpg`,
        title: `${t('About_Index.graphicsDataTitle1')}`,
        content:`${t('About_Index.graphicsDataContent1')}`,
      },
      {
        src: `${urlConfig().s3Url}/Image/hannstar/about/Profile/HannStarMission.jpg`,
        title: `${t('About_Index.graphicsDataTitle2')}`,
        content:`${t('About_Index.graphicsDataContent2')}`,
      },
    ]
  }

  return PageType;
}

export default usePageData;
