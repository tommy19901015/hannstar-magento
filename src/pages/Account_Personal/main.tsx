import React, { useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import FormComponent from "../../component/form/main";
import { FormType } from "../../component/form/interface";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./css.scss";

const formData1 = [
  {
    title: "工作屬性",
    value: "",
    columnKey: "JobAttributes",
    type: FormType.Select,
    required: true,
    option: [
      { text: "業務相關", value: "業務相關" },
      { text: "採購相關", value: "採購相關" },
      { text: "研發相關", value: "研發相關" },
      { text: "品質相關", value: "品質相關" },
      { text: "項目管理", value: "項目管理" },
      { text: "經營管理", value: "經營管理" },
      { text: "其他", value: "其他" },
    ],
  },
  {
    title: "職稱",
    value: "",
    columnKey: "JobTitle",
    type: FormType.Select,
    placeholder: "",
    option: [
      { text: "創辦人/董事長", value: "創辦人/董事長" },
      { text: "執行長/總經理/協理", value: "執行長/總經理/協理" },
      { text: "總監/處長/經理", value: "總監/處長/經理" },
      { text: "主任/課長/組長", value: "主任/課長/組長" },
      { text: "專員/管理師", value: "專員/管理師" },
      { text: "工程師", value: "工程師" },
      { text: "其他類型", value: "其他類型" },
    ],
  },
];

const formData4 = [
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

const formData5 = [
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
      { text: "品牌廠", value: "品牌廠" },
      { text: "其他", value: "其他" },
    ],
  },
  {
    title: "企業編號(統編/稅號)",
    value: "",
    columnKey: "TaxNo",
    type: FormType.Intput,
    placeholder: "",
    required: true,
  },
];

const formData6 = [
  {
    title: "公司網址",
    value: "",
    columnKey: "Weblink",
    type: FormType.Intput,
    placeholder: "",
  },
];

const formData7 = [
  {
    title: "國家/地區",
    value: "",
    columnKey: "Country",
    type: FormType.Select,
    required: true,
    option: [
      { text: "台灣", value: "台灣" },
      { text: "日本", value: "日本" },
    ],
  },
  {
    title: "城市",
    value: "",
    columnKey: "AreaCity",
    type: FormType.Intput,
    required: true,
  },
  {
    title: "地址",
    value: "",
    columnKey: "AreaAddress",
    type: FormType.Intput,
    placeholder: "",
  },
];

const formData8 = [
  {
    title: "員工總數",
    value: "",
    columnKey: "CompanyEmpNumber",
    type: FormType.Select,
    required: true,
    option: [
      { text: "<100", value: "<100" },
      { text: "100-500", value: "100-500" },
      { text: "500-1000", value: "500-1000" },
      { text: ">1000", value: ">1000" },
    ],
  },
  {
    title: "年營業額(USD)",
    value: "",
    columnKey: "AnnualRevenue",
    type: FormType.Select,
    required: true,
    option: [
      { text: "<1M", value: "<1M" },
      { text: "1M-5M", value: "1M-5M" },
      { text: "5M-10M", value: "5M-10M" },
      { text: "10M-30M", value: "10M-30M" },
      { text: ">30M", value: ">30M" },
    ],
  },
  {
    title: "上市公司",
    value: "",
    columnKey: "CompanyStockOn",
    type: FormType.Select,
    required: true,
    option: [
      { text: "是", value: "是" },
      { text: "否", value: "否" },
    ],
  },
];

const formData9 = [
  {
    title: "公司產品主要銷售分類(可複選)",
    value: "",
    columnKey: "CompanyMA1",
    type: FormType.CheckBox,
    required: true,
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

const formData10 = [
  {
    title: "公司產品主要銷售國家/地區-1",
    value: "",
    columnKey: "CompanyMA2",
    type: FormType.Intput,
    required: true,
  },
  {
    title: "公司產品主要銷售國家/地區-2",
    value: "",
    columnKey: "CompanyMA3",
    type: FormType.Intput,
  },
  {
    title: "公司產品主要銷售國家/地區-3",
    value: "",
    columnKey: "CompanyMA4",
    type: FormType.Intput,
  },
];

const formData11 = [
  {
    title: "主要出貨客戶-1",
    value: "",
    columnKey: "TOP1",
    type: FormType.Intput,
  },
  {
    title: "主要出貨客戶-2",
    value: "",
    columnKey: "TOP2",
    type: FormType.Intput,
  },
  {
    title: "主要出貨客戶-3",
    value: "",
    columnKey: "TOP3",
    type: FormType.Intput,
  },
];

const formData12 = [
  {
    title: "為能提供更完整的服務，請問貴司是否已使用HannStar產品",
    value: "",
    columnKey: "HannstarYN",
    type: FormType.Radio,
    option: [
      { text: "是(請在協助以下資訊)", value: "Y" },
      { text: "否/不確定", value: "N" },
    ],
  },
];

const formData13 = [
  {
    title: "購買渠道-1",
    value: "",
    columnKey: "Buy1",
    type: FormType.Select,
    required: true,
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
    required: true,
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
  },
];

const formData14 = [
  {
    title: "備註說明",
    value: "",
    columnKey: "CompanyRemark",
    type: FormType.Textarea,
  },
];

const AccountPersonal: React.FC = () => {
  const pageName = "AccountPersonal";

  const formMethods1: any = useRef(null);
  const formMethods4: any = useRef(null);
  const formMethods5: any = useRef(null);
  const formMethods6: any = useRef(null);
  const formMethods7: any = useRef(null);
  const formMethods8: any = useRef(null);
  const formMethods9: any = useRef(null);
  const formMethods10: any = useRef(null);
  const formMethods11: any = useRef(null);
  const formMethods12: any = useRef(null);
  const formMethods13: any = useRef(null);
  const formMethods14: any = useRef(null);

  const formProp1 = {
    formMethods: formMethods1,
    formData: formData1,
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
    isOneRow: true,
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
    isOneRow: true,
    formMethods: formMethods11,
    formData: formData11,
  };

  const formProp12 = {
    isOneRow: true,
    formMethods: formMethods12,
    formData: formData12,
  };

  const formProp13 = {
    formMethods: formMethods13,
    formData: formData13,
  };

  const formProp14 = {
    isOneRow: true,
    formMethods: formMethods14,
    formData: formData14,
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
      },
    ],
  };

  const handlerGoBack = () => {
    window.history.back();
  };

  const PersonalFormContent = () => {
    const [phoneCountryCode, setPhoneCountryCode] = useState<any>();
    const [phoneCode, setPhoneCode] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [extension, setExtension] = useState<string>("");

    const [cellPhoneCountryCode, setCellPhoneCountryCode] = useState<any>();
    const [cellPhoneCode, setCellPhoneCode] = useState<string>("");
    const [cellPhoneCountry, setCellPhoneCountry] = useState<string>("");

    const handlerSubmit = () => {
      const values1 = formMethods1.current.getValues();
      const values4 = formMethods4.current.getValues();
      const values5 = formMethods5.current.getValues();
      const values6 = formMethods6.current.getValues();
      const values7 = formMethods7.current.getValues();
      const values8 = formMethods8.current.getValues();
      const values9 = formMethods9.current.getValues();
      const values10 = formMethods10.current.getValues();
      const values11 = formMethods11.current.getValues();
      const values12 = formMethods12.current.getValues();
      const values13 = formMethods13.current.getValues();
      const values14 = formMethods14.current.getValues();

      const PhoneNumber1 = phoneCode.split(phoneCountryCode)[1];
      const CellPhoneNumber1 = cellPhoneCode.split(cellPhoneCountryCode)[1];

      const formData = {
        UserName: "ronfu",
        Email: "rfchen@hannstar.com",
        Lang: "en",
        GroupName: "權限群組名稱",
        PhoneNumber0: phoneCountryCode,
        PhoneNumber1: PhoneNumber1,
        PhoneNumber2: extension,
        CellPhoneNumber0: cellPhoneCountryCode,
        CellPhoneNumber1: CellPhoneNumber1,
        CountryCode: "國家代碼",
        ...values1,
        ...values4,
        ...values5,
        ...values6,
        ...values7,
        ...values8,
        ...values9,
        ...values10,
        ...values11,
        ...values12,
        ...values13,
        ...values14,
      };
      console.log("formData", formData);

      fetch("/rest/V1/AppEnterPrice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          //{result: 'success', resultMsg: ''}
        })
        .catch(() => {});
    };

    const handleExtension = (e: React.ChangeEvent<HTMLInputElement>) => {
      setExtension(e.target.value);
    };

    const handlePhoneCall = (value: string, data: any) => {
      setPhoneCountryCode(data.dialCode);
      setCountry(data.name);
      setPhoneCode(value);
    };

    const handleCellPhoneCall = (value: string, data: any) => {
      setCellPhoneCountryCode(data.dialCode);
      setCellPhoneCountry(data.name);
      setCellPhoneCode(value);
    };

    return (
      <div className={`${pageName}FormBlock`}>
        <div className="formTitle">申請企業會員</div>
        <div className="stepTitle">步驟 1. 請選擇您的身份</div>
        <div className="classificationBlock">
          <a className="changTab" href={urlConfig.account.AccountPersonal.href}>
            <img
              alt={urlConfig.account.AccountPersonal.title}
              src={`${urlConfig.s3Url}/Image/account/btn_enterprisemember_client_hnp.png`}
            />
          </a>
          <a className="changTab" href={urlConfig.account.AccountPartner.href}>
            <img
              alt={urlConfig.account.AccountPartner.title}
              src={`${urlConfig.s3Url}/Image/account/btn_enterprisemember_supplier_normal.png`}
            />
          </a>
        </div>
        <div className="stepTitle">步驟 2. 申請人資訊</div>
        <FormComponent {...formProp1} />
        <div className="columnRow">
          <div className="columnBlock">
            <div className="title required">電話號碼</div>
            <div className="bodyBlock input">
              <PhoneInput
                country={"tw"}
                value={phoneCode}
                onChange={(value, data) => handlePhoneCall(value, data)}
              />
            </div>
          </div>
          <div className="columnBlock">
            <div className="title required">分機</div>
            <div className="bodyBlock input">
              <input
                className="extensionInput"
                type="text"
                onChange={handleExtension}
                value={extension}
              />
            </div>
          </div>
        </div>
        <div className="columnRow">
          <div className="columnBlock">
            <div className="title required">手機號碼</div>
            <div className="bodyBlock input">
              <PhoneInput
                country={"tw"}
                value={cellPhoneCode}
                onChange={(value, data) => handleCellPhoneCall(value, data)}
              />
            </div>
          </div>
        </div>
        <FormComponent {...formProp4} />
        <div className="stepTitle">步驟 3. 企業資料</div>
        <FormComponent {...formProp5} />
        <FormComponent {...formProp6} />
        <FormComponent {...formProp7} />
        <FormComponent {...formProp8} />
        <FormComponent {...formProp9} />
        <FormComponent {...formProp10} />
        <FormComponent {...formProp11} />
        <FormComponent {...formProp12} />
        <FormComponent {...formProp13} />
        <FormComponent {...formProp14} />
        <div className="btnBlock">
          <div onClick={handlerGoBack} className="goBack">
            回上一頁
          </div>
          <div onClick={handlerSubmit} className="confirm">
            確認申請
          </div>
        </div>
      </div>
    );
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
