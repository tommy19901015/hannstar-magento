import { useTranslation } from "react-i18next";

function usePageData() {
    const { t } = useTranslation();
    return {
      breadcrumbs: {
        title: "",
        breadcrumbsLink: [
            {
              text: `${t('TFTCustomizedForm.home')}`,
              href: "",
            },
            {  
              text:  `${t('TFTCustomizedForm.breadcrumbItem1')}`,
              href: "",
            },
            {
              text:  t('TFTCustomizedForm.breadcrumbItem2'),
              href: "",
            }
        ],
      },
      pageTitle:`${t('TFTCustomizedForm.pageTitle')}`,
      formTitle1: `${t('TFTCustomizedForm.formTitle_1')}`,
      formTitle2: `${t('TFTCustomizedForm.formTitle_2')}`,
      formTitle3: `${t('TFTCustomizedForm.formTitle_3')}`,
      aspectRatio:{
        title:`${t('TFTCustomizedForm.labelTitle_3')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_3_1')}` , value:`${t('TFTCustomizedForm.labelOpt_3_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_3_2')}` , value:`${t('TFTCustomizedForm.labelOpt_3_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_3_3')}` , value:`${t('TFTCustomizedForm.labelOpt_3_3')}`  },
        ],
      },
      resolution:{
        title:`${t('TFTCustomizedForm.labelTitle_2')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_2_1')}` , value:`${t('TFTCustomizedForm.labelOpt_2_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_2_2')}` , value:`${t('TFTCustomizedForm.labelOpt_2_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_2_3')}` , value:`${t('TFTCustomizedForm.labelOpt_2_3')}`  },
        ],
      },
      size:{
        title:`${t('TFTCustomizedForm.labelTitle_1')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_1_1')}` , value:`${t('TFTCustomizedForm.labelOpt_1_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_1_2')}` , value:`${t('TFTCustomizedForm.labelOpt_1_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_1_3')}` , value:`${t('TFTCustomizedForm.labelOpt_1_3')}`  },
        ],
      },
      pixel:`${t('TFTCustomizedForm.labelTitle_4')}`,
      activeArea:`${t('TFTCustomizedForm.labelTitle_5')}`,
      technology:`${t('TFTCustomizedForm.labelTitle_6')}`,
      compared:`${t('TFTCustomizedForm.labelTitle_7')}`,
      view:`${t('TFTCustomizedForm.labelTitle_8')}`,
      bestView:`${t('TFTCustomizedForm.labelTitle_9')}`,
      reaction:`${t('TFTCustomizedForm.labelTitle_10')}`,
      colors:`${t('TFTCustomizedForm.labelTitle_11')}`,
      saturation:`${t('TFTCustomizedForm.labelTitle_12')}`,
      pin:"Pin數",
      brightness:`${t('TFTCustomizedForm.labelTitle_13')}`,
      whiteColor :`${t('TFTCustomizedForm.labelTitle_14')}`,
      IC:{
        title:`${t('TFTCustomizedForm.labelTitle_16')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_16_1')}` , value:`${t('TFTCustomizedForm.labelOpt_16_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_16_2')}` , value:`${t('TFTCustomizedForm.labelOpt_16_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_16_3')}` , value:`${t('TFTCustomizedForm.labelOpt_16_3')}`  },
        ],
      },
      interface:{
        title:`${t('TFTCustomizedForm.labelTitle_15')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_15_1')}` , value:`${t('TFTCustomizedForm.labelOpt_15_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_15_2')}` , value:`${t('TFTCustomizedForm.labelOpt_15_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_15_3')}` , value:`${t('TFTCustomizedForm.labelOpt_15_3')}`  },
        ],
      },
      temp :`${t('TFTCustomizedForm.labelTitle_17')}`,
      outward:`${t('TFTCustomizedForm.labelTitle_18')}`,
      touchMode:{
        title:`${t('TFTCustomizedForm.labelTitle_19')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_19_1')}` , value:`${t('TFTCustomizedForm.labelOpt_19_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_19_2')}` , value:`${t('TFTCustomizedForm.labelOpt_19_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_19_3')}` , value:`${t('TFTCustomizedForm.labelOpt_19_3')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_19_4')}` , value:`${t('TFTCustomizedForm.labelOpt_19_4')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_19_5')}` , value:`${t('TFTCustomizedForm.labelOpt_19_5')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_19_6')}` , value:`${t('TFTCustomizedForm.labelOpt_19_6')}`  },
        ],
      },
      touchTechnology:{
        title:`${t('TFTCustomizedForm.labelTitle_20')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_20_1')}` , value:`${t('TFTCustomizedForm.labelOpt_20_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_2')}` , value:`${t('TFTCustomizedForm.labelOpt_20_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_3')}` , value:`${t('TFTCustomizedForm.labelOpt_20_3')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_4')}` , value:`${t('TFTCustomizedForm.labelOpt_20_4')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_5')}` , value:`${t('TFTCustomizedForm.labelOpt_20_5')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_6')}` , value:`${t('TFTCustomizedForm.labelOpt_20_6')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_7')}` , value:`${t('TFTCustomizedForm.labelOpt_20_7')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_8')}` , value:`${t('TFTCustomizedForm.labelOpt_20_8')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_9')}` , value:`${t('TFTCustomizedForm.labelOpt_20_9')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_10')}` , value:`${t('TFTCustomizedForm.labelOpt_20_10')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_11')}` , value:`${t('TFTCustomizedForm.labelOpt_20_11')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_12')}` , value:`${t('TFTCustomizedForm.labelOpt_20_12')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_13')}` , value:`${t('TFTCustomizedForm.labelOpt_20_13')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_20_14')}` , value:`${t('TFTCustomizedForm.labelOpt_20_14')}`  },
          
        ],
      },
      fittingMethod:{
        title:`${t('TFTCustomizedForm.labelTitle_21')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_21_1')}` , value:`${t('TFTCustomizedForm.labelOpt_21_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_21_2')}` , value:`${t('TFTCustomizedForm.labelOpt_21_2')}`  },
        ],
      },
      CL:{
        title:`${t('TFTCustomizedForm.labelTitle_22')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_22_1')}` , value:`${t('TFTCustomizedForm.labelOpt_22_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_2')}` , value:`${t('TFTCustomizedForm.labelOpt_22_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_3')}` , value:`${t('TFTCustomizedForm.labelOpt_22_3')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_4')}` , value:`${t('TFTCustomizedForm.labelOpt_22_4')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_5')}` , value:`${t('TFTCustomizedForm.labelOpt_22_5')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_6')}` , value:`${t('TFTCustomizedForm.labelOpt_22_6')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_7')}` , value:`${t('TFTCustomizedForm.labelOpt_22_7')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_8')}` , value:`${t('TFTCustomizedForm.labelOpt_22_8')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_9')}` , value:`${t('TFTCustomizedForm.labelOpt_22_9')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_10')}` , value:`${t('TFTCustomizedForm.labelOpt_22_10')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_11')}` , value:`${t('TFTCustomizedForm.labelOpt_22_11')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_12')}` , value:`${t('TFTCustomizedForm.labelOpt_22_12')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_13')}` , value:`${t('TFTCustomizedForm.labelOpt_22_13')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_22_14')}` , value:`${t('TFTCustomizedForm.labelOpt_22_14')}`  },
        ],
      },
      coverMaterial:{
        title:`${t('TFTCustomizedForm.labelTitle_23')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_23_1')}` , value:`${t('TFTCustomizedForm.labelOpt_23_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_2')}` , value:`${t('TFTCustomizedForm.labelOpt_23_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_3')}` , value:`${t('TFTCustomizedForm.labelOpt_23_3')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_4')}` , value:`${t('TFTCustomizedForm.labelOpt_23_4')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_5')}` , value:`${t('TFTCustomizedForm.labelOpt_23_5')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_6')}` , value:`${t('TFTCustomizedForm.labelOpt_23_6')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_7')}` , value:`${t('TFTCustomizedForm.labelOpt_23_7')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_8')}` , value:`${t('TFTCustomizedForm.labelOpt_23_8')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_9')}` , value:`${t('TFTCustomizedForm.labelOpt_23_9')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_10')}` , value:`${t('TFTCustomizedForm.labelOpt_23_10')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_23_11')}` , value:`${t('TFTCustomizedForm.labelOpt_23_11')}`  },
        ],
      },
      communication:{
        title:`${t('TFTCustomizedForm.labelTitle_25')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_25_1')}` , value:`${t('TFTCustomizedForm.labelOpt_25_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_25_2')}` , value:`${t('TFTCustomizedForm.labelOpt_25_2')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_25_3')}` , value:`${t('TFTCustomizedForm.labelOpt_25_3')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_25_4')}` , value:`${t('TFTCustomizedForm.labelOpt_25_4')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_25_5')}` , value:`${t('TFTCustomizedForm.labelOpt_25_5')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_25_6')}` , value:`${t('TFTCustomizedForm.labelOpt_25_6')}`  },
        ],
      },
      AVI:{
        title:`${t('TFTCustomizedForm.labelTitle_26')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_26_1')}` , value:`${t('TFTCustomizedForm.labelOpt_26_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_26_2')}` , value:`${t('TFTCustomizedForm.labelOpt_26_2')}`  },
        ],
      },
      internet:{
        title:`${t('TFTCustomizedForm.labelTitle_27')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_27_1')}` , value:`${t('TFTCustomizedForm.labelOpt_27_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_27_2')}` , value:`${t('TFTCustomizedForm.labelOpt_27_2')}`  },
        ],
      },
      other:`${t('TFTCustomizedForm.labelTitle_28')}`,
      forecast:`${t('TFTCustomizedForm.labelTitle_29')}`,
      applications:{
        title:`${t('TFTCustomizedForm.labelTitle_30')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_30_1')}` , value:`${t('TFTCustomizedForm.labelOpt_30_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_30_2')}` , value:`${t('TFTCustomizedForm.labelOpt_30_2')}`  },
        ],
      },
      life:`${t('TFTCustomizedForm.labelTitle_32')}`,
      time:{
        title:`${t('TFTCustomizedForm.labelTitle_33')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_33_1')}` , value:`${t('TFTCustomizedForm.labelOpt_33_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_33_2')}` , value:`${t('TFTCustomizedForm.labelOpt_33_2')}`  },
        ],
      },
      endProducts:`${t('TFTCustomizedForm.labelTitle_31')}`,
      file:`${t('TFTCustomizedForm.labelTitle_35')}`,
      reset:`${t('TFTCustomizedForm.reset')}`,
      submit:`${t('TFTCustomizedForm.submit')}`,
      save:`${t('TFTCustomizedForm.save')}`,
      remark:`${t('TFTCustomizedForm.labelTitle_34')}`,
      board:{
        title:`${t('TFTCustomizedForm.labelTitle_24')}`,
        option: [
          { text:`${t('TFTCustomizedForm.labelOpt_24_1')}` , value:`${t('TFTCustomizedForm.labelOpt_24_1')}`  },
          { text:`${t('TFTCustomizedForm.labelOpt_24_2')}` , value:`${t('TFTCustomizedForm.labelOpt_24_2')}`  },
        ],
      },
      required:`${t('TFTCustomizedForm.labelOpt_24_2')}` ,
      note1:`${t('TFTCustomizedForm.note1')}` ,
      note2:`${t('TFTCustomizedForm.note2')}`,
      note3:`${t('TFTCustomizedForm.note3')}` ,
      add:`${t('TFTCustomizedForm.add')}`
    }
  }
  
export default usePageData;
