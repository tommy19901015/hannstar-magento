import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { FormType } from "../../component/form/interface";
import "./css.scss";

const PartnerApplication: React.FC = () => {
  const pageName = "PartnerApplication";

  const formData1 = [
    {
      title: "需求單時間",
      value: "",
      columnKey: "1",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "需求單號",
      value: "",
      columnKey: "2",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
  ];

  const formData2 = [
    {
      title: "需求單狀態",
      value: "",
      columnKey: "3",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "已正式詢價", value: "已正式詢價" },
        { text: "報價完成", value: "報價完成" },
        { text: "HSD回覆不報價", value: "HSD回覆不報價" },
      ],
    },
  ];

  const formData3 = [
    {
      title: "詢價單單號",
      value: "",
      columnKey: "4",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "產品life time(月)",
      value: "",
      columnKey: "5",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "需求原因",
      value: "",
      columnKey: "6",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "預估每月需求量(k)",
      value: "",
      columnKey: "7",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "建立者",
      value: "",
      columnKey: "8",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "預估總需求量",
      value: "",
      columnKey: "9",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "材料類別",
      value: "",
      columnKey: "9",
      type: FormType.Radio,
      placeholder: "",
      required: true,
      option: [
        { text: "IC", value: "IC" },
        { text: "BL背光", value: "BL背光" },
        { text: "FPC/PCB", value: "FPC/PCB" },
        { text: "蓋板", value: "蓋板" },
        { text: "其他特殊材料", value: "其他特殊材料" },
      ],
    },
    {
      title: "使用產品",
      value: "",
      columnKey: "10",
      type: FormType.Radio,
      placeholder: "",
      required: true,
      option: [
        { text: "顯示屏模組", value: "顯示屏模組" },
        { text: "終端產品", value: "終端產品" },
        { text: "其他", value: "其他" },
      ],
    },
    {
      title: "產品運用",
      value: "",
      columnKey: "11",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "客戶資訊",
      value: "",
      columnKey: "12",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "代工機種",
      value: "",
      columnKey: "13",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "可靠度時間(Hour)",
      value: "",
      columnKey: "14",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "此評估使用匯率",
      value: "",
      columnKey: "15",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "需求期限",
      value: "",
      columnKey: "16",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "建立日期",
      value: "",
      columnKey: "17",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
  ];

  const formData4 = [
    {
      title: "需求項目名稱",
      value: "",
      columnKey: "18",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "項目型號",
      value: "",
      columnKey: "19",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "產品規格",
      value: "",
      columnKey: "20",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "供應商",
      value: "",
      columnKey: "21",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "目標價格",
      value: "",
      columnKey: "22",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "市場價格",
      value: "",
      columnKey: "23",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
  ];

  const formData5 = [
    {
      title: "備註說明",
      value: "",
      columnKey: "24",
      type: FormType.Textarea,
      placeholder: "",
      required: true,
    },
  ];

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
        text: "協同採購",
        href: "",
      },
      {
        text: "需求申請",
        href: "",
      },
    ],
  };

  const formMethods1: any = React.useRef(null);
  const formMethods2: any = React.useRef(null);
  const formMethods3: any = React.useRef(null);
  const formMethods4: any = React.useRef(null);
  const formMethods5: any = React.useRef(null);

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
    formMethods: formMethods4,
    formData: formData4,
  };

  const formProp5 = {
    isOneRow: true,
    formMethods: formMethods5,
    formData: formData5,
  };

  const handleSave = () => {
    const values1 = formMethods1.current.getValues();
    const values2 = formMethods2.current.getValues();
    const values3 = formMethods3.current.getValues();
    const values4 = formMethods4.current.getValues();
    const values5 = formMethods5.current.getValues();

    const stepOneData = {
      ...values1,
      ...values2,
      ...values3,
      ...values4,
      ...values5,
    };
    console.log("saveData", stepOneData);
  };

  const handlerUpload = () => { };

  const FormBlock = () => {
    return (
      <div className={`${pageName}FormBlock`}>
        <div className={`${pageName}ContentBlock`}>
          <div className={`${pageName}Title`}>需求申請</div>
          <FormComponent {...formProp1} />
          <FormComponent {...formProp2} />
          <FormComponent {...formProp3} />
        </div>
        <div className={`${pageName}ContentBlock`}>
          <div className={`${pageName}Title`}>需求項目規格</div>
          <FormComponent {...formProp4} />
          <FormComponent {...formProp5} />
        </div>
        <div className={`${pageName}ContentBlock`}>
          <div className={`${pageName}Title`}>附件</div>
          <div className={`${pageName}UploadBlock`}>
            <input
              className="uploadInput"
              type="file"
              name="file"
              onChange={handlerUpload}
            />
            <div className="uploadBtn">上傳</div>
          </div>
        </div>
        <div className={`${pageName}BtnBlock`}>
          <div className="formBtn" onClick={handleSave}>
            儲存
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Breadcrumbs {...breadcrumbsData} />
      <Columns type={ColType.OneColFullPage} content={<FormBlock />} />
    </Layout>
  );
};

export default PartnerApplication;
