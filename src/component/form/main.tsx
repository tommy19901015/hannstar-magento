import React, { useState, useEffect, useRef, createRef } from "react";
import "./css.scss";

const testObj: any = [
  {
    title: "標題input",
    columnKey: "input1",
    type: "input",
    placeholder: "標題input",
    required: true,
    option: [
      {
        text: "",
      },
    ],
  },
  {
    title: "標題radio",
    type: "radio",
    columnKey: "radio1",
    placeholder: "",
    required: true,
    option: [
      {
        text: "選項1",
      },
      {
        text: "選項2",
      },
      {
        text: "選項3",
      },
    ],
  },
  {
    title: "標題checkbox",
    type: "checkbox",
    columnKey: "checkbox1",
    placeholder: "",
    required: true,
    option: [
      {
        text: "選項1",
      },
      {
        text: "選項2",
      },
      {
        text: "選項3",
      },
    ],
  },
  {
    title: "標題select",
    type: "select",
    columnKey: "select1",
    placeholder: "",
    required: true,
    option: [
      {
        text: "選項1",
      },
      {
        text: "選項2",
      },
      {
        text: "選項3",
      },
    ],
  },
  {
    title: "標題radio2",
    type: "radio",
    columnKey: "radio2",
    placeholder: "",
    required: true,
    option: [
      {
        text: "選項1",
      },
      {
        text: "選項2",
      },
      {
        text: "選項3",
      },
    ],
  },
  {
    title: "標題checkbox2",
    type: "checkbox",
    columnKey: "checkbox2",
    placeholder: "",
    required: true,
    option: [
      {
        text: "選項1",
      },
      {
        text: "選項2",
      },
      {
        text: "選項3",
      },
    ],
  },
];

const Form: React.FC<any> = () => {
  const elementsRef: any = useRef(testObj.map(() => createRef()));

  const QuestionComponent: React.FC<any> = (data, ChildComponent) => {
    return (
      <div className="columnBlock" key={data.index}>
        <div className="title">{data.title}</div>
        <div
          data-title={data.columnKey}
          data-type={data.type}
          className="bodyBlock"
          ref={elementsRef.current[data.index]}
        >
          <ChildComponent {...data} />
          {/* <ErrorMessage message={setErrorMessage(type, item.inputType)} /> */}
        </div>
      </div>
    );
  };

  const InputComponent = (data: any) => {
    const InputBlock = () => {
      // props.type = data.type;
      // const inputTypeObj = {
      //   [InputType.Text]: "text",
      //   [InputType.Textarea]: "text",
      //   [InputType.Email]: "email",
      //   [InputType.Phone]: "tel",
      // };
      return (
        <input
          placeholder={data.placeholder}
          type="text"
          name={data.columnKey}
          // onChange={(e) =>
          //   inputOnChangeVerify(
          //     e.target.value,
          //     elementsRef.current[props.refID].current,
          //     props
          //   )
          // }
        />
      );
    };
    return QuestionComponent(data, InputBlock);
  };

  const RaidoComponent = (data: any) => {
    const RaidoBlock = () => {
      return data.option.map((item: any, index: any) => (
        <div className="hannstarRadio">
          <input
            id={data.columnKey + index}
            type="radio"
            value={item.text}
            name={data.columnKey}
          />
          <label htmlFor={`${data.columnKey + index}`} {...data}>
            {item.text}
          </label>
        </div>
      ));
    };
    return QuestionComponent(data, RaidoBlock);
  };

  const CheckBoxComponent = (data: any) => {
    const CheckBoxBlock = (props: any) => {
      return props.option.map((item: any, index: any) => (
        <div className="hannstarCheckBox">
          <input
            id={data.columnKey + index}
            type="checkbox"
            value={item.text}
            name={data.columnKey}
          />
          <label htmlFor={`${data.columnKey + index}`} {...props}>
            {item.text}
          </label>
        </div>
      ));
    };
    return QuestionComponent(data, CheckBoxBlock);
  };

  const SelectComponent = (data: any) => {
    const SelectBlock = (props: any) => {
      const [selectValue, setSelectValue] = useState("");
      const handleOnChange = (e: any) => {
        setSelectValue(e.target.value);
      };

      return (
        <select
          name={`${data.columnKey}`}
          value={selectValue}
          onChange={handleOnChange}
        >
          {props.option.map((item: any) => {
            return <option value={item.text}>{item.text}</option>;
          })}
        </select>
      );
    };
    return QuestionComponent(data, SelectBlock);
  };

  const mappingType: any = (item: any, index: any) => {
    const data = { ...item, index };
    return {
      input: <InputComponent {...data} />,
      radio: <RaidoComponent {...data} />,
      checkbox: <CheckBoxComponent {...data} />,
      select: <SelectComponent {...data} />,
    };
  };

  const getAllData = (e: any) => {
    e.preventDefault();
    const resss: any = {};
    const targetDom = (index: any) => elementsRef.current[index].current;
    testObj.map((item: any, index: any) => {
      const dataKey = targetDom(index).getAttribute("data-title");
      const type = targetDom(index).getAttribute("data-type");
      const info = new FormData(e.target).getAll(dataKey);
      resss[dataKey] = type === "input" || type === "select" ? info[0] : info;
    });
    console.log(resss);
  };

  // const checkSubmitError =(getFormData, targetDom)=>{

  // };

  //用from是否能用外部call
  //錯誤判斷
  //錯誤顯示

  return (
    <div>
      <form onSubmit={getAllData} noValidate>
        {testObj.map((item: any, index: any) => {
          return mappingType(item, index)[item.type];
        })}
        <button type="submit">送出</button>
      </form>
    </div>
  );
};

export default Form;
