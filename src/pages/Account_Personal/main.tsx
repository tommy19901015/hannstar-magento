import React, { useRef, useState, useMemo } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import FormComponent from "../../component/form/main";
import { FormType } from "../../component/form/interface";
import { PageType } from "../../templates/partner_product/interface";
import { StepTap, I_tabStateInfo } from "./interface";

import "./css.scss";

const formData1 = [
  {
    title: "工作屬性",
    value: "",
    columnKey: "1",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
  {
    title: "職稱",
    value: "",
    columnKey: "2",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
  {
    title: "電話號碼",
    value: "",
    columnKey: "3",
    type: FormType.Intput,
    placeholder: "",
  },
  {
    title: "手機號碼",
    value: "",
    columnKey: "3",
    type: FormType.Intput,
    placeholder: "",
  },
];

const formData2 = [
  {
    title: "感興趣的應用別(可複選)",
    value: "",
    columnKey: "14",
    type: FormType.CheckBox,
    placeholder: "",
    required: true,
    option: [
      { text: "醫療零售", value: "醫療零售" },
      { text: "智慧娛樂", value: "智慧娛樂" },
      { text: "智能建築", value: "智能建築" },
      { text: "健康關懷", value: "健康關懷" },
      { text: "交通運輸", value: "交通運輸" },
      { text: "智能製造", value: "智能製造" },
    ],
  },
];

const formData3 = [
  {
    title: "公司名稱",
    value: "",
    columnKey: "10",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
  {
    title: "公司名稱關鍵字",
    value: "",
    columnKey: "11",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
  {
    title: "商業類型",
    value: "",
    columnKey: "13",
    type: FormType.Select,
    placeholder: "",
    option: [
      { text: "代理商", value: "醫療零售" },
      { text: "智慧娛樂", value: "智慧娛樂" },
      { text: "智能建築", value: "智能建築" },
      { text: "健康關懷", value: "健康關懷" },
      { text: "交通運輸", value: "交通運輸" },
      { text: "智能製造", value: "智能製造" },
    ],
  },
  {
    title: "企業編號(統編/掛號)",
    value: "",
    columnKey: "13",
    type: FormType.Select,
    placeholder: "",
    option: [
      { text: "代理商", value: "醫療零售" },
      { text: "智慧娛樂", value: "智慧娛樂" },
      { text: "智能建築", value: "智能建築" },
      { text: "健康關懷", value: "健康關懷" },
      { text: "交通運輸", value: "交通運輸" },
      { text: "智能製造", value: "智能製造" },
    ],
  },
];

const formData4 = [
  {
    title: "公司網址",
    value: "",
    columnKey: "20",
    type: FormType.Intput,
    placeholder: "",
  },
];

const formData5 = [
  {
    title: "公司通訊地址",
    value: "",
    columnKey: "30",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "郵遞區號",
    value: "",
    columnKey: "31",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "城市",
    value: "",
    columnKey: "32",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "街道地址",
    value: "",
    columnKey: "40",
    type: FormType.Intput,
    placeholder: "",
  },
];

const formData6 = [
  {
    title: "員工總數",
    value: "",
    columnKey: "50",
    type: FormType.Select,
    require: true,
    option: [
      { text: "代理商", value: "醫療零售" },
      { text: "智慧娛樂", value: "智慧娛樂" },
      { text: "智能建築", value: "智能建築" },
    ],
  },
  {
    title: "年營業額幣別",
    value: "",
    columnKey: "51",
    type: FormType.Select,
    require: true,
    option: [
      { text: "代理商", value: "醫療零售" },
      { text: "智慧娛樂", value: "智慧娛樂" },
      { text: "智能建築", value: "智能建築" },
    ],
  },
  {
    title: "年營業",
    value: "",
    columnKey: "52",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "上市公司",
    value: "",
    columnKey: "53",
    type: FormType.Select,
    require: true,
    option: [
      { text: "是", value: "是" },
      { text: "否", value: "否" },
    ],
  },
  {
    title: "股票代號",
    value: "",
    columnKey: "54",
    type: FormType.Intput,
  },
];

const formData7 = [
  {
    title: "公司產品主要銷售分類(可複選)",
    value: "",
    columnKey: "50",
    type: FormType.CheckBox,
    require: true,
    option: [
      { text: "車載", value: "車載" },
      { text: "穿戴", value: "穿戴" },
      { text: "工控", value: "工控" },
      { text: "手機", value: "手機" },
      { text: "消費類", value: "消費類" },
      { text: "其他", value: "其他" },
    ],
  },
];

const formData8 = [
  {
    title: "公司產品主要銷售國家/地區(可複選)",
    value: "",
    columnKey: "80",
    type: FormType.Select,
    require: true,
    option: [
      { text: "車載", value: "車載" },
      { text: "穿戴", value: "穿戴" },
      { text: "工控", value: "工控" },
    ],
  },
];

const formData9 = [
  {
    title: "TOP1",
    value: "",
    columnKey: "80",
    type: FormType.Intput,
  },
  {
    title: "TOP2",
    value: "",
    columnKey: "80",
    type: FormType.Intput,
  },
  {
    title: "TOP3",
    value: "",
    columnKey: "80",
    type: FormType.Intput,
  },
];

const formData10 = [
  {
    title: "未能提供更完整的服務，請問貴司是否已使用HannStar產品",
    value: "",
    columnKey: "80",
    type: FormType.Radio,
    option: [
      { text: "是(請在協助以下資訊)", value: "yes" },
      { text: "否/不確定", value: "no" },
    ],
  },
];

const formData11 = [
  {
    title: "購買渠道-1",
    value: "",
    columnKey: "80",
    type: FormType.Select,
    option: [
      { text: "是(請在協助以下資訊)", value: "yes" },
      { text: "否/不確定", value: "no" },
    ],
  },
  {
    title: "渠道公司名稱-1",
    value: "",
    columnKey: "80",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "購買渠道-2",
    value: "",
    columnKey: "80",
    type: FormType.Select,
    option: [
      { text: "是(請在協助以下資訊)", value: "yes" },
      { text: "否/不確定", value: "no" },
    ],
  },
  {
    title: "渠道公司名稱-2",
    value: "",
    columnKey: "80",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "購買渠道-3",
    value: "",
    columnKey: "80",
    type: FormType.Select,
    option: [
      { text: "是(請在協助以下資訊)", value: "yes" },
      { text: "否/不確定", value: "no" },
    ],
  },
  {
    title: "渠道公司名稱-3",
    value: "",
    columnKey: "80",
    type: FormType.Intput,
    require: true,
  },
];

const formData12 = [
  {
    title: "備註說明",
    value: "",
    columnKey: "80",
    type: FormType.Textarea,
  },
];

const AccountPersonal: React.FC = () => {
  const pageName = "AccountPersonal";
  const formMethods1: any = useRef(null);
  const formMethods2: any = useRef(null);
  const formMethods3: any = useRef(null);
  const formMethods4: any = useRef(null);
  const formMethods5: any = useRef(null);
  const formMethods6: any = useRef(null);
  const formMethods7: any = useRef(null);
  const formMethods8: any = useRef(null);
  const formMethods9: any = useRef(null);
  const formMethods10: any = useRef(null);
  const formMethods11: any = useRef(null);
  const formMethods12: any = useRef(null);

  const formProp1 = {
    formMethods: formMethods1,
    formData: formData1,
  };

  const formProp2 = {
    isOneRow: true,
    formMethods: formMethods2,
    formData: formData2,
  };

  const formProp3 = {
    formMethods: formMethods3,
    formData: formData3,
  };

  const formProp4 = {
    isOneRow: true,
    formMethods: formMethods4,
    formData: formData4,
  };

  const formProp5 = {
    formMethods: formMethods5,
    formData: formData5,
  };

  const formProp6 = {
    formMethods: formMethods6,
    formData: formData6,
  };

  const formProp7 = {
    isOneRow: true,
    formMethods: formMethods7,
    formData: formData7,
  };

  const formProp8 = {
    formMethods: formMethods8,
    formData: formData8,
  };

  const formProp9 = {
    isOneRow: true,
    formMethods: formMethods9,
    formData: formData9,
  };

  const formProp10 = {
    isOneRow: true,
    formMethods: formMethods10,
    formData: formData10,
  };

  const formProp11 = {
    formMethods: formMethods11,
    formData: formData11,
  };

  const formProp12 = {
    isOneRow: true,
    formMethods: formMethods12,
    formData: formData12,
  };

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "供應商協同合作",
        href: "",
      },
      {
        text: "協同製造夥伴",
        href: "",
      },
      {
        text: "產品清單",
        href: "",
      },
      {
        text: "新增產品",
        href: "",
      },
    ],
  };

  const Setp1 = () => {};

  const PersonalFormContent = () => {
    return (
      <div>
        <div className="formBlock">
          <FormComponent {...formProp1} />
          <FormComponent {...formProp2} />
          <FormComponent {...formProp3} />
          <FormComponent {...formProp4} />
          <FormComponent {...formProp5} />
          <FormComponent {...formProp6} />
          <FormComponent {...formProp7} />
          <FormComponent {...formProp8} />
          <FormComponent {...formProp9} />
          <FormComponent {...formProp10} />
          <FormComponent {...formProp11} />
          <FormComponent {...formProp12} />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Breadcrumbs {...breadcrumbsData} />
      <AccountPersonalTemplate contentComponent={<PersonalFormContent />} />
    </Layout>
  );
};

export default AccountPersonal;
