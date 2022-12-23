import { useTranslation } from "react-i18next";

function usePageData() {
    const { t } = useTranslation();
    return {
      breadcrumbs: {
        title: "",
        breadcrumbsLink: [
            {
              text: t('ParseApply.home'),
              href: "",
            },
            {  
              text:  t('ParseApply.breadcrumb'),
              href: "",
            },
            {
              text:  t('ParseApply.breadcrumbItem'),
              href: "",
            }
        ],
      },
      PageTitle:"客製化產品需求單",
      FormTitle: "A00000-A00-AA1",
      Client: t('ParseApply.customer'),
      Agent: t('ParseApply.agent'),
      TaxNo: t('ParseApply.singleNumber'),
      CQS: t('ParseApply.cqs'),
      Model: t('ParseApply.module'),
      FieldClass: {
        title:t('ParseApply.fieldClass'),
        option:[
          { text: t('ParseApply.productionStage'), value: t('ParseApply.productionStage') }
        ]
      },
      Amount: t('ParseApply.amount'),
      Slice: t('ParseApply.slice'),
      Required: t('ParseApply.required'),
      Defective:t('ParseApply.defective'),
      NonPerforming :t('ParseApply.nonPerforming'),
      Per:t('ParseApply.per'),
      Stand:t('ParseApply.stand'),
      Invoice:t('ParseApply.stand'),
      IssueCategory:{
        title:t('ParseApply.issueCategory'),
        option: [
          { text: t('ParseApply.exceptionClass'), value: t('ParseApply.exceptionClass') },
          { text: t('ParseApply.bumpClass'), value: t('ParseApply.bumpClass') },
      ],},
      IssueCode:{
        title:t('ParseApply.issueCode'),
        option: [
          { text: t('ParseApply.exceptionClass'), value: t('ParseApply.exceptionClass') },
          { text: t('ParseApply.bumpClass'), value: t('ParseApply.bumpClass')},
      ],
      },
      ProvidDefectiveProduct: t('ParseApply.providDefectiveProduct'),
      Remark:  t('ParseApply.note'),
      Send:  t('ParseApply.common.send'),
      Reset:  t('ParseApply.common.reset'),
      Resolution:"解析度",
      Size:"尺寸",
      Ratio:"長寬比",
      Pixel:"畫素間距 mm",
      DisplayArea:"顯示區 mm H*V",
      Technology:"面板技術別",
      Compared:"對比 H*V",
      View:"視角 °H*V",
      BestView:"最佳視角 Degree",
      Reaction:"反應時間 Typ.ms",
      Colors:"可顯示顏色數",
      Saturation:"色飽和度 %",
      Brightness:"亮度 nits",
      WhiteColor :"白色色坐標",
      IC:{
        title:"電源IC",
        option:[]
      },
      Interface:{
        title:"顯示介面",
        option:[]
      },
      Temperature :"操作溫度 ℃",
      StorageTemperature :"保存溫度 ℃",
      Outward:"外觀尺寸 mm",
      TouchMode:"觸控模式",
      TouchTechnology:"觸控技術",
      FittingMethod:"貼合方式",
      CL:"C/L 表面處理",
      CoverMaterial:"蓋板材質",
      Communication:{
        title:"通訊介面",
        option:[]
      },
      AVI:{
        title:"影音多媒體",
        option:[]
      },
      Internet:{
        title:"網路通訊",
        option:[]
      },
      Other:"其他需求",
      EstimatedAmount:{
        title:"預估量",
        option:[],
      },
      Applications:{
        title:"產品應用",
        option:[],
      },
      Life:{
        title:"產品週期",
        option:[],
      },
      Time:{
        title:"量產時間點",
        option:[],
      },
      EndProducts:"終端產品",
      File:"檔案附件",
      Save:"保存"
    }
  }
  
export default usePageData;
