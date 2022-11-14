import { I_PageData } from "./interface"
import urlConfig from "../../config/urlSetting.json";
import { useTranslation } from "react-i18next";


function useServiceForm() {
    const { t } = useTranslation();
    const initList: I_PageData = {
        signTitle: t('LoginForm.signTitle'),
        service:[{
            categoryId: 0,
            categoryTitle: t('LoginForm.customer'),
            serviceItems: [
                {
                    id: 0,
                    icon: `${urlConfig.s3Url}/Image/account/icon_signup_device.png`,
                    title: t('LoginForm.productAndSolutions'),
                    directions: t('LoginForm.productAndSolutionsDirections')
                }, {
                    id: 1,
                    icon: `${urlConfig.s3Url}/Image/account/icon_signup_inquire.png`,
                    title: t('LoginForm.quickQuote'),
                    directions: t('LoginForm.quickQuoteDirections')
                }, {
                    id: 2,
                    icon: `${urlConfig.s3Url}/Image/account/icon_signup_support.png`,
                    title: t('LoginForm.technicalSupport'),
                    directions: t('LoginForm.technicalSupportContent')
                }
            ]
        },
        {
            categoryId: 1,
            categoryTitle: t('LoginForm.supplierMember'),
            serviceItems: [
                {
                    id: 0,
                    icon: `${urlConfig.s3Url}/Image/account/icon_signup_green.png`,
                    title: t('LoginForm.supplyChain'),
                    directions: t('LoginForm.supplyChainDirections')
                }
            ]
        }],
     };
  
    return initList;
  }
  
export default useServiceForm;


