import React, { useState, useEffect, useRef, createRef } from "react";
import { I_Props, FormType } from "./interface";
import { useForm } from "react-hook-form";
import "./css.scss";

const FormHook: React.FC<I_Props> = ({ data }) => {
  const { register, handleSubmit, setValue } = useForm({
    mode: 'onSubmit',
    shouldFocusError: false,
  });
  const onSubmit = async (data: any) => { return await data }
  const onError = (errors: any, e: any) => { return { errors, e } };

  useEffect(() => {
    data.getAllData.current = handleSubmit(onSubmit, onError)
  }, [])

  const QuestionComponent: React.FC<any> = (data, ChildComponent) => {
    return (
      <div className="columnBlock" key={data.index}>
        <div className="title">{data.title}</div>
        <div className="bodyBlock">
          <ChildComponent {...data} />
        </div>
      </div>
    );
  };

  const InputComponent = (data: any) => {
    setValue(data.columnKey, data.value)
    const IntputBlock = () =>
      <input
        type="text"
        placeholder={data.placeholder}
        {...register(data.columnKey, { required: data.required })}
      />
    return QuestionComponent(data, IntputBlock);
  };

  const RaidoComponent = (data: any) => {
    const RaidoBlock = () => {
      return data.option.map((item: any, index: any) => (
        <div className="hannstarRadio">
          <input
            {...register(data.columnKey, { required: data.required })}
            id={data.columnKey + index}
            type={FormType.Radio}
            value={item.text}
            name={data.columnKey}
          />
          <label htmlFor={`${data.columnKey + index}`}>
            {item.text}
          </label>
        </div>
      ));
    };
    return QuestionComponent(data, RaidoBlock);
  };

  const CheckBoxComponent = (data: any) => {
    const CheckBoxBlock = () => {
      return data.option.map((item: any, index: any) => (
        <div className="hannstarCheckBox">
          <input
            {...register(data.columnKey, { required: data.required })}
            id={data.columnKey + index}
            type={FormType.CheckBox}
            value={item.text}
            name={data.columnKey}
          />
          <label htmlFor={`${data.columnKey + index}`}>
            {item.text}
          </label>
        </div>
      ));
    };
    return QuestionComponent(data, CheckBoxBlock);
  };

  const SelectComponent = (data: any) => {
    const SelectBlock = () => {
      const [selectValue, setSelectValue] = useState("");
      const handleOnChange = (e: any) => {
        setSelectValue(e.target.value);
      };

      return (
        <select
          {...register(data.columnKey, { required: data.required })}
          value={selectValue}
          onChange={handleOnChange}
        >
          {data.option.map((item: any) => {
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
      [FormType.Intput]: <InputComponent {...data} />,
      [FormType.Radio]: <RaidoComponent {...data} />,
      [FormType.CheckBox]: <CheckBoxComponent {...data} />,
      [FormType.Select]: <SelectComponent {...data} />,
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {data.formData.map((item: any, index: any) => {
          return mappingType(item, index)[item.type];
        })}
      </form>
    </div>
  );
};

export default FormHook;
