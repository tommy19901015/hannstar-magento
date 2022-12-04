import { useTranslation } from "react-i18next";
import { TextAlign , BannerType} from "../../component/banner/interface";
import { GraphicsTheme } from "../../component/graphicsCard/interface";
import { I_PageType } from "./interface";

function usePageData() {
  const { t } = useTranslation();
  const PageType: I_PageType = {
    breadcrumbs: {
      title: "",
      breadcrumbsLink: [
        {
          text: t('Account_MemberInfo.breadcrumbsLinkFrontPage'),
        },
        {
          text: t('Account_MemberInfo.breadcrumbsLinkMemberCentre'),
        },
        {
          text: t('Account_MemberInfo.breadcrumbsLinkMemberInfo'),
        },
      ],
    },
    inputEmail: t('Account_MemberInfo.inputEmail'),
    content: {
      title: t('Account_MemberInfo.contentTitle'),
      label: t('Account_MemberInfo.contentLabel'),
      btn: t('Account_MemberInfo.contentBtn'),
      table: [
        t('Account_MemberInfo.contentTableName'),
        t('Account_MemberInfo.contentTableEmail'),
        t('Account_MemberInfo.contentTableJobTitle')
      ],
    },
  };

  return PageType;
}

export default usePageData;
