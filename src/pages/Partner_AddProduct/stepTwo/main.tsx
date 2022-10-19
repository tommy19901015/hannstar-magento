import React, { useRef, forwardRef, useImperativeHandle } from "react";
import FormComponent from "../../../component/form/main";
import { FormType } from "../../../component/form/interface";
import "./css.scss";

const StepTwo: React.FC<any> = forwardRef((props, ref) => {
  const pageName = "StepTwo";

  const formData = [
    {
      title: "對比",
      value: "",
      columnKey: "1",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "1000:1", value: "1000:1" },
        { text: "1100:1", value: "1100:1" },
        { text: "1200:1", value: "1200:1" },
      ],
    },
    {
      title: "反應時間(ms)",
      value: "",
      columnKey: "2",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :40",
      required: true,
    },
    {
      title: "亮度(nits)",
      value: "",
      columnKey: "3",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "NA", value: "1000:1" },
        { text: "150", value: "150" },
        { text: "180", value: "180" },
      ],
    },
    {
      title: "視角(H/V)",
      value: "",
      columnKey: "4",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "110/110", value: "110/110" },
        { text: "120/120", value: "120/120" },
        { text: "130/130", value: "130/130" },
      ],
    },
    {
      title: "最佳視角",
      value: "",
      columnKey: "5",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "2 o'clock", value: "2 o'clock" },
        { text: "3 o'clock", value: "3 o'clock" },
        { text: "4 o'clock", value: "4 o'clock" },
      ],
    },
    {
      title: "I/F Pin數",
      value: "",
      columnKey: "6",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :10",
      required: true,
    },
    {
      title: "電器架構",
      value: "",
      columnKey: "7",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "PCBa", value: "PCBa" },
        { text: "架橋式FPCa", value: "架橋式FPCa" },
        { text: "豬尾巴", value: "豬尾巴" },
      ],
    },
    {
      title: "操作溫度/保存溫度(°C)",
      value: "",
      columnKey: "8",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "A=>0~50/-20~60", value: "A=>0~50/-20~60" },
        { text: "B=>10~50/-20~60", value: "B=>10~50/-20~60" },
        { text: "C=>20~70/-30~80", value: "C=>20~70/-30~80" },
      ],
    },
    {
      title: "信賴測試時間(hr)",
      value: "",
      columnKey: "9",
      type: FormType.Select,
      placeholder: "",
      required: true,
      option: [
        { text: "48hrs", value: "48hrs" },
        { text: "96hrs", value: "96hrs" },
        { text: "120hrs", value: "120hrs" },
      ],
    },
    {
      title: "四邊邊框尺寸(L/R/U/D)",
      value: "",
      columnKey: "10",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :1.9/1.9/1.67/4.33",
      required: true,
    },
    {
      title: "與同基板第一隻機種差異",
      value: "",
      columnKey: "11",
      type: FormType.Intput,
      placeholder: "請輸入 例如: :亮度、外型等差異",
      required: true,
    },
  ];

  const formMethods: any = useRef(null);

  const formProp = {
    formMethods: formMethods,
    formData: formData,
  };

  const handleSaveStepTwo = () => {
    const values1 = formMethods.current.getValues();
    console.log("stepTwoData", values1);
  };

  useImperativeHandle(ref, () => ({
    handleSaveStepTwo,
  }));

  return (
    <div className={`${pageName}ContentBlock`}>
      <div className={`${pageName}Title`}>產品資訊</div>
      <div className="formBlock">
        <FormComponent {...formProp} />
      </div>
    </div>
  );
});

export default StepTwo;
