import { useTranslation } from "react-i18next"; 

function usePartnerApplication() {
    const { t } = useTranslation();
    return {
      breadcrumbs: {
        title: "",
        breadcrumbsLink: [
            {
              text: t('PartnerApplication.home'),
              href: "",
            },
            {  
              text:  t('PartnerApplication.breadcrumbFirst'),
              href: "",
            },
            {
              text:  t('PartnerApplication.breadcrumbSecond'),
              href: "",
            },
            {
              text:  t('PartnerApplication.breadcrumbThird'),
              href: "",
            },
            {
              text:  t('PartnerApplication.breadcrumbFourth'),
              href: "",
            }
        ],
      },
      Application: t('PartnerApplication.application'),
      OrderTime: t('PartnerApplication.orderTime'),
      RequestNumber: t('PartnerApplication.requestNumber'),
      RequisitionOrderStatus:{
        title: t('PartnerApplication.requisitionOrderStatus'),
        option:[
          { text:"已正式詢價", value:"" },
          { text:"報價完成", value:"" },
          { text:"HSD回覆不報價", value:"" }
        ]
      },
      Required: t('PartnerApplication.required'),
      InquiryNumber: t('PartnerApplication.inquiryNumber'),
      ProductLifeTime: t('PartnerApplication.productLifeTime'),
      Reason: t('PartnerApplication.reason'),
      Demand: t('PartnerApplication.demand'),
      Founder: t('PartnerApplication.founder'),
      TotalDemand: t('PartnerApplication.totalDemand'),
      ProductApplication:t('PartnerApplication.productApplication'),
      Customer: t('PartnerApplication.customer'),
      Model:t('PartnerApplication.model'),
      Time: t('PartnerApplication.time'),
      Uses: t('PartnerApplication.uses'),
      Period: t('PartnerApplication.period'),
      ItemName: t('PartnerApplication.itemName'),
      ProjectModel: t('PartnerApplication.projectModel'),
      ProductSpecifications: t('PartnerApplication.productSpecifications'),
      Supplier: t('PartnerApplication.supplier'),
      TargetPrice:  t('PartnerApplication.targetPrice'),
      MarketPrice:  t('PartnerApplication.marketPrice'),
      Remark: t('PartnerApplication.remark'),
      Appendix:t('PartnerApplication.appendix'),
      Upload:t('PartnerApplication.common.upload'),
      Save:t('PartnerApplication.common.save'),
      RequiredItem:t('PartnerApplication.requiredItem'),
      Material:{
        title: t('PartnerApplication.material'),
        option:[
          { text: t('PartnerApplication.materialItem1') , value: t('PartnerApplication.materialItem1')},
          { text: t('PartnerApplication.materialItem2') , value: t('PartnerApplication.materialItem2') },
          { text: t('PartnerApplication.materialItem3') , value: t('PartnerApplication.materialItem3') },
          { text: t('PartnerApplication.materialItem4') , value: t('PartnerApplication.materialItem4') },
          { text: t('PartnerApplication.materialItem5') , value: t('PartnerApplication.materialItem5')  },
        ]
      } ,
      Product:{
        title: t('PartnerApplication.product'),
        option:[
          { text: t('PartnerApplication.productItem1') , value: t('PartnerApplication.productItem1')},
          { text: t('PartnerApplication.productItem2') , value: t('PartnerApplication.productItem2') },
          { text: t('PartnerApplication.productItem3') , value: t('PartnerApplication.productItem3') },
        ]
      } 
    }
  }
  
export default usePartnerApplication;
