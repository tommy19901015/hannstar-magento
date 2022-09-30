import React, { useRef, forwardRef, useImperativeHandle } from "react";
import FormComponent from "../../../component/form/main";
import { FormType } from "../../../component/form/interface";
import "./css.scss";

const StepFive: React.FC<any> = forwardRef((props, ref) => {
  const pageName = "StepFive";

  const handleSaveStepFive = () => {
    const values1 = formMethods1.current.getValues();
    const values2 = formMethods2.current.getValues();

    const StepFiveData = {
      ...values1,
      ...values2,
    };
    console.log("StepFiveData", StepFiveData);
  };

  useImperativeHandle(ref, () => ({
    handleSaveStepFive,
  }));

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

  return (
    <div className={`${pageName}ContentBlock`}>
      <div className={`${pageName}Title`}>{`價格&庫存管理`}</div>
      <div className="formBlock">
        <FormComponent data={formProp1} />
        <FormComponent data={formProp2} />
      </div>
    </div>
  );
});

export default StepFive;
