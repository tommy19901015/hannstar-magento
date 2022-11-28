
import { DataType } from "./interface"
import urlConfig from "../../config/urlSetting.json";
import { useTranslation } from "react-i18next";


function useInitData() {
    const { t } = useTranslation();
    const initList: DataType[] = [
        {
            categoryId: 0,
            categoryTitle:t('Account_Personal_Template.breadcrumbsLinkPersonal'),
            items: [
                {
                    title: t('Account_Personal_Template.breadcrumbsLinkAccountInfo'),
                    href: urlConfig.account.MyAccount.href,
                },
                {
                    title: t('Account_Personal_Template.breadcrumbsLinkAuthority'),
                    href: urlConfig.account.AccountApplication.href,
                }
            ]
        },
        {
            categoryId: 0,
            categoryTitle: t('Account_Personal_Template.breadcrumbsLinkEnterprise'),
            items: [
                {
                    title: t('Account_Personal_Template.breadcrumbsLinkMember'),
                    href: urlConfig.account.MemberInfo.href,
                },
                {
                    title: t('Account_Personal_Template.breadcrumbsLinkKanban'),
                    href: urlConfig.account.AccountDashboard.href,
                },
            ]
        },
    ];
  
    return initList;
  }
  
export default useInitData;
