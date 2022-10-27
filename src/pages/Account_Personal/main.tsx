import React, { useRef, useState, useMemo } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import FormComponent from "../../component/form/main";
import { FormType } from "../../component/form/interface";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { PageType } from "../../templates/partner_product/interface";
import { StepTap, I_tabStateInfo } from "./interface";

import "./css.scss";

const formData1 = [
  {
    title: "工作屬性",
    value: "",
    columnKey: "JobAttributes",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
  {
    title: "職稱",
    value: "",
    columnKey: "JobTitle",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
  {
    title: "電話號碼",
    value: "",
    columnKey: "PhoneNumber",
    type: FormType.Intput,
    placeholder: "",
  },
  {
    title: "手機號碼",
    value: "",
    columnKey: "CellPhoneNumber",
    type: FormType.Intput,
    placeholder: "",
  },
];

const formData2 = [
  {
    title: "感興趣的應用別(可複選)",
    value: "",
    columnKey: "InterestedType",
    type: FormType.CheckBox,
    placeholder: "",
    required: true,
    option: [
      { text: "智慧零售", value: "智慧零售" },
      { text: "智慧育樂", value: "智慧育樂." },
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
    columnKey: "CompanyName",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
  {
    title: "公司名稱關鍵字",
    value: "",
    columnKey: "CompanySName",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
  {
    title: "商業類型",
    value: "",
    columnKey: "BusinessType",
    type: FormType.Select,
    placeholder: "",
    option: [
      { text: "代理商", value: "代理商" },
      { text: "經銷商", value: "經銷商" },
      { text: "模組廠", value: "模組廠" },
      { text: "方案商", value: "方案商" },
      { text: "系統整合廠", value: "系統整合廠" },
      { text: "其他", value: "其他" },
    ],
  },
  {
    title: "企業編號(統編/掛號)",
    value: "",
    columnKey: "TaxNo",
    type: FormType.Intput,
    placeholder: "",
    require: true
  },
];

const formData4 = [
  {
    title: "公司網址",
    value: "",
    columnKey: "Weblink",
    type: FormType.Intput,
    placeholder: "",
  },
];

const formData5 = [
  {
    title: "公司通訊地址",
    value: "",
    columnKey: "CompanyAddress",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "郵遞區號",
    value: "",
    columnKey: "AreaNo",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "城市",
    value: "",
    columnKey: "AreaCity",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "街道地址",
    value: "",
    columnKey: "AreaAddress",
    type: FormType.Intput,
    placeholder: "",
  },
];

const formData6 = [
  {
    title: "員工總數",
    value: "",
    columnKey: "CompanyEmpNumber",
    type: FormType.Select,
    require: true,
    option: [
      { text: "<100", value: "<100" },
      { text: "100-500", value: "100-500" },
      { text: "500-1000", value: "500-1000" },
      { text: ">1000", value: ">1000" },
    ],
  },
  {
    title: "年營業額幣別",
    value: "",
    columnKey: "CurrencyAnnualRevenue  ",
    type: FormType.Select,
    require: true,
    option: [
      { text: "USD", value: "USD" },
      { text: "EUR", value: "EUR" },
      { text: "TWD", value: "TWD" },
      { text: "CNY", value: "CNY" },
    ],
  },
  {
    title: "年營業",
    value: "",
    columnKey: "AnnualRevenue",
    type: FormType.Select,
    require: true,
    option: [
      { text: "<10M", value: "<10M" },
      { text: "10M-50M", value: "10M-50M" },
      { text: "50M-100M", value: "50M-100M" },
      { text: "100M-300M", value: "100M-300M" },
      { text: ">30M", value: ">30M" },
    ],
  },
  {
    title: "上市公司",
    value: "",
    columnKey: "CompanyStockOn",
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
    columnKey: "CompanyStockNo",
    type: FormType.Intput,
  },
];

const formData7 = [
  {
    title: "公司產品主要銷售分類(可複選)",
    value: "",
    columnKey: "CompanyMA1",
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
    columnKey: "CompanyMA2",
    type: FormType.Select,
    require: true,
    option: [
      { text: "台灣", value: "台灣" },
      { text: "中國", value: "中國" },
      { text: "日本", value: "日本" },
    ],
  },
];

const formData9 = [
  {
    title: "TOP1",
    value: "",
    columnKey: "TOP1",
    type: FormType.Intput,
  },
  {
    title: "TOP2",
    value: "",
    columnKey: "TOP2",
    type: FormType.Intput,
  },
  {
    title: "TOP3",
    value: "",
    columnKey: "TOP3",
    type: FormType.Intput,
  },
];

const formData10 = [
  {
    title: "未能提供更完整的服務，請問貴司是否已使用HannStar產品",
    value: "",
    columnKey: "HaveHannstar",
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
    columnKey: "Buy1",
    type: FormType.Select,
    option: [
      { text: "瀚宇彩晶", value: "瀚宇彩晶" },
      { text: "代理商", value: "代理商" },
      { text: "其他", value: "其他" },
    ],
  },
  {
    title: "渠道公司名稱-1",
    value: "",
    columnKey: "BuyCompany1",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "購買渠道-2",
    value: "",
    columnKey: "Buy2",
    type: FormType.Select,
    option: [
      { text: "瀚宇彩晶", value: "瀚宇彩晶" },
      { text: "代理商", value: "代理商" },
      { text: "其他", value: "其他" },
    ],
  },
  {
    title: "渠道公司名稱-2",
    value: "",
    columnKey: "BuyCompany2",
    type: FormType.Intput,
    require: true,
  },
  {
    title: "購買渠道-3",
    value: "",
    columnKey: "Buy3",
    type: FormType.Select,
    option: [
      { text: "瀚宇彩晶", value: "瀚宇彩晶" },
      { text: "代理商", value: "代理商" },
      { text: "其他", value: "其他" },
    ],
  },
  {
    title: "渠道公司名稱-3",
    value: "",
    columnKey: "BuyCompany3",
    type: FormType.Intput,
    require: true,
  },
];

const formData12 = [
  {
    title: "備註說明",
    value: "",
    columnKey: "CompanyRemark",
    type: FormType.Textarea,
  },
];

const AccountPersonal: React.FC = () => {
  const pageName = "AccountPersonal";
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

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
        text: "會員中心",
        href: "",
      },
      {
        text: "我的權限",
        href: "",
      }
    ],
  };

  const handlerSubmit = () => {
    const values1 = formMethods1.current.getValues();
    const values2 = formMethods2.current.getValues();
    const values3 = formMethods3.current.getValues();
    const values4 = formMethods4.current.getValues();
    const values5 = formMethods5.current.getValues();
    const values6 = formMethods6.current.getValues();
    const values7 = formMethods7.current.getValues();
    const values8 = formMethods8.current.getValues();
    const values9 = formMethods9.current.getValues();
    const values10 = formMethods10.current.getValues();
    const values11 = formMethods11.current.getValues();
    const values12 = formMethods12.current.getValues();

    const formData = {
      "UserName": "UserName",
      "Email": "Email",
      ...values1,
      ...values2,
      ...values3,
      ...values4,
      ...values5,
      ...values6,
      ...values7,
      ...values8,
      ...values9,
      ...values10,
      ...values11,
      ...values12,
    };
    console.log("formData", formData);

    fetch('/rest/V1/AppEnterPrice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(formData)
    }).then(response => response.json())
      .then((data) => {
        console.log('data', data);
      }).catch(() => {
        setIsSubmit(true)
      })
  };

  const handlerGoBack = () => {
    window.history.back()
  }

  const PersonalFormContent = () => {
    return <>
      {isSubmit ? <div className={`${pageName}ApplyTitle`}>已收到您的申請，謝謝。</div> : <div className={`${pageName}FormBlock`}>
        <div className="formTitle">申請企業會員</div>
        <div className="stepTitle">步驟 1. 請選擇您的身份</div>
        <div className="classificationBlock">
          <div>客戶</div>
          <div>供應商</div>
        </div>
        <div className="stepTitle">步驟 2. 申請人資訊</div>
        <FormComponent {...formProp1} />
        <FormComponent {...formProp2} />
        <div className="stepTitle">步驟 3. 企業資料</div>
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
        <div className="btnBlock">
          <div onClick={handlerGoBack} className="goBack">回上一頁</div>
          <div onClick={handlerSubmit} className="confirm">確認申請</div>
        </div>
      </div>}
    </>;
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbsData} />}
      />
      <AccountPersonalTemplate contentComponent={<PersonalFormContent />} />
    </Layout>
  );
};

export default AccountPersonal;
