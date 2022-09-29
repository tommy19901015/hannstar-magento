import React, { useRef, useState } from "react";
import FormComponent from "../../../component/form/main";
import { FormType } from "../../../component/form/interface";
import "./css.scss";

const StepFive: React.FC = () => {
  const pageName = "StepFive";

  const formData1 = [
    {
      title: "Sample(USD)",
      value: "",
      columnKey: "1",
      type: FormType.Intput,
      placeholder: "請輸入美金金額",
      required: true,
    },
    {
      title: "2K(USD) pcs",
      value: "",
      columnKey: "2",
      type: FormType.Intput,
      placeholder: "請輸入美金金額",
      required: true,
    },
    {
      title: "5K(USD) pcs",
      value: "",
      columnKey: "3",
      type: FormType.Intput,
      placeholder: "請輸入美金金額",
      required: true,
    },
    {
      title: "10K(USD) pcs",
      value: "",
      columnKey: "4",
      type: FormType.Intput,
      placeholder: "請輸入美金金額",
      required: true,
    },
  ];

  const formData2 = [
    {
      title: "庫存數量(pcs)",
      value: "",
      columnKey: "5",
      type: FormType.Intput,
      placeholder: "",
      required: true,
    },
  ];

  const formMethods1: any = useRef(null);
  const formMethods2: any = useRef(null);

  const formProp1 = {
    formMethods: formMethods1,
    formData: formData1,
  };

  const formProp2 = {
    isOneRow: true,
    formMethods: formMethods1,
    formData: formData2,
  };

  const handleSave = () => {
    // const values1 = formMethods.current.getValues();
    // console.log("StepThreeData", values1);
  };

  const goNextStep = () => {
    console.log("goNextStep", goNextStep);
  };
  const goPreStep = () => {
    console.log("handleSave", handleSave);
  };

  return (
    <div className={`${pageName}ContentBlock`}>
      <div className={`${pageName}Title`}>{`價格&庫存管理`}</div>
      <div className="formBlock">
        <FormComponent data={formProp1} />
        <FormComponent data={formProp2} />
      </div>
      <div className="btnBlock">
        <div className="formBtn" onClick={handleSave}>
          儲存
        </div>
        <div className="formBtn" onClick={goNextStep}>
          上一步
        </div>
        <div className="formBtn" onClick={goPreStep}>
          提交
        </div>
      </div>
    </div>
  );
};

export default StepFive;
