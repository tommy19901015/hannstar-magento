import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { FormType } from "../../component/form/interface";
import "./css.scss";

const PartnerTechnical: React.FC = () => {
  const pageName = "PartnerTechnical";

  const formData1 = [
    {
      title: "姓名",
      value: "",
      columnKey: "1",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "供應商類別",
      value: "",
      columnKey: "2",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "材料供應商", value: "材料供應商" },
        { text: "設備供應商", value: "設備供應商" },
        { text: "一般類", value: "一般類" },
      ],
    },
    {
      title: "電子信箱",
      value: "",
      columnKey: "3",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "廠別",
      value: "",
      columnKey: "4",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "", value: "" },
      ],
    },
    {
      title: "公司",
      value: "",
      columnKey: "5",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "分類",
      value: "",
      columnKey: "6",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "", value: "" },
      ],
    },
    {
      title: "電話",
      value: "",
      columnKey: "7",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "提案類別",
      value: "",
      columnKey: "8",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "全新產品或技術", value: "全新產品或技術" },
        { text: "替換方案", value: "替換方案" },
        { text: "設備", value: "設備" },
        { text: "其他", value: "其他" },
      ],
    },
    {
      title: "主題",
      value: "",
      columnKey: "9",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
    {
      title: "國家",
      value: "",
      columnKey: "10",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "", value: "" },
      ],
    },
  ];

  const formData2 = [
    {
      title: "描述",
      value: "",
      columnKey: "11",
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
        text: "新技術合作",
        href: "",
      },
    ],
  };

  const formMethods1: any = React.useRef(null);
  const formMethods2: any = React.useRef(null);

  const formProp1 = {
    formMethods: formMethods1,
    formData: formData1,
  };

  const formProp2 = {
    isOneRow: true,
    formMethods: formMethods2,
    formData: formData2,
  };

  const handleSubmit = () => {
    const values1 = formMethods1.current.getValues();
    const values2 = formMethods2.current.getValues();

    const submitData = {
      ...values1,
      ...values2,
    };
    console.log("submitData", submitData);
  };

  const handleCancel = () => { };

  const handlerUpload = () => { };

  const FormBlock = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <div className={`${pageName}TextBlock`}>
          <div className="title">新技術合作</div>
          <div className="content">
            瀚宇彩晶秉持著研發與創新是企業成長及永續經營的驅動力，我們非常重視供應商夥伴能齊心共同技術研發在產品應用創新，若貴公司有任何新技術與產品，可改善並優化於材料或設備等規格提升與應用推廣給予瀚宇彩晶，歡迎您進一步提供相關資料給予我們，透過該平台技術交流，共創無限商機。
          </div>
        </div>
        <div className={`${pageName}FormBlock`}>
          <FormComponent {...formProp1} />
          <FormComponent {...formProp2} />
        </div>
        <div className={`${pageName}UploadBlock`}>
          <input
            className="uploadInput"
            type="file"
            name="file"
            onChange={handlerUpload}
          />
          <div className="uploadBtn">上傳</div>
        </div>
        <div className={`${pageName}NoteBlock`}>
          先選取Mac或PC的檔案，並按"上傳"鈕，才能執行附檔作業。
        </div>
        <div className={`${pageName}BtnBlock`}>
          <div className="formBtn" onClick={handleSubmit}>
            送出
          </div>
          <div className="formBtn" onClick={handleCancel}>
            取消
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

export default PartnerTechnical;
