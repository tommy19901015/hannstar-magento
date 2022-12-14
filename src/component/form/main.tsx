import React, { useState, useEffect } from "react";
import { I_FormProps, FormType, I_FormData, I_MappingForm } from "./interface";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import "./css.scss";

const FormComponent: React.FC<I_FormProps> = ({ isOneRow, formMethods, formData }) => {
  const methods = useForm({ shouldFocusError: false });

  useEffect(() => {
    formMethods.current = methods;
    formMethods.current.getFormErrorInfo = getFormErrorInfo
  }, [formMethods, methods]);

  interface I_FormErrorInfo {
    isError: boolean
    errorFilds: I_FormData[]
  }

  const getFormErrorInfo = (initData: I_FormData[], formData: { [key: string]: string }): I_FormErrorInfo => {
    const errorArr: I_FormData[] = []
    Object.keys(formData).forEach(formkey => {
      const error = initData.filter((data) => {
        return data.columnKey === formkey
          && data.required
          && formData[formkey] === ""
      })[0]
      if (error) errorArr.push(error)
    })
    return {
      isError: errorArr.length !== 0,
      errorFilds: errorArr
    }
  }

  const QuestionComponent: React.FC<I_FormData> = (data, ChildComponent) => {
    return (
      <div className="columnBlock" key={data.index}>
        <div className={`title ${data.required ? "required" : ""}`}>
          {data.title}
        </div>
        <div className={`bodyBlock ${data.type}`}>
          <ChildComponent {...data} />
        </div>
      </div>
    );
  };

  const InputComponent: React.FC<I_FormData> = (data) => {
    methods.setValue(data.columnKey, data.value);
    const IntputBlock = () => {
      const { register, getFieldState } = useFormContext();
      return (
        <>
          <input
            type="text"
            placeholder={data.placeholder}
            disabled={data.disabled}
            {...register(data.columnKey, { required: data.required })}
          />
          <p>{getFieldState("fff").isDirty && "dirty"}</p>
        </>
      );
    };

    return QuestionComponent(data, IntputBlock);
  };

  const RaidoComponent: React.FC<I_FormData> = (data) => {
    const { register } = useFormContext();
    const RaidoBlock = () => {
      return (
        data.option &&
        data.option.map((item, index) => (
          <div className="hannstarRadio" key={index}>
            <input
              {...register(data.columnKey, { required: data.required })}
              id={data.columnKey + index}
              type={FormType.Radio}
              value={item.value}
              name={data.columnKey}
            />
            <label htmlFor={`${data.columnKey + index}`}>{item.text}</label>
          </div>
        ))
      );
    };
    return QuestionComponent(data, RaidoBlock);
  };

  const CheckBoxComponent: React.FC<I_FormData> = (data) => {
    const { register } = useFormContext();
    const CheckBoxBlock = () => {
      return (
        data.option &&
        data.option.map((item, index) => (
          <div className="hannstarCheckBox" key={index}>
            <input
              {...register(data.columnKey, { required: data.required })}
              id={data.columnKey + index}
              type={FormType.CheckBox}
              value={item.value}
              name={data.columnKey}
            />
            <label htmlFor={`${data.columnKey + index}`}>{item.text}</label>
          </div>
        ))
      );
    };
    return QuestionComponent(data, CheckBoxBlock);
  };

  const SelectComponent: React.FC<I_FormData> = (data) => {
    const { register } = useFormContext();
    const SelectBlock = () => {
      const [selectValue, setSelectValue] = useState<string>("");
      const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.target.value);
      };

      return (
        <select
          {...register(data.columnKey, { required: data.required })}
          value={selectValue}
          onChange={handleOnChange}
        >
          {data.option &&
            data.option.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.text}
                </option>
              );
            })}
        </select>
      );
    };
    return QuestionComponent(data, SelectBlock);
  };

  const TextareaComponent: React.FC<I_FormData> = (data) => {
    methods.setValue(data.columnKey, data.value);
    const TextareaBlock = () => {
      const { register } = useFormContext();
      return (
        <textarea
          placeholder={data.placeholder}
          disabled={data.disabled}
          {...register(data.columnKey, { required: data.required })}
        />
      );
    };

    return QuestionComponent(data, TextareaBlock);
  };

  const mappingType = (item: I_FormData, index: number): I_MappingForm => {
    const data = { ...item, index };
    return {
      [FormType.Intput]: <InputComponent {...data} />,
      [FormType.Radio]: <RaidoComponent {...data} />,
      [FormType.CheckBox]: <CheckBoxComponent {...data} />,
      [FormType.Select]: <SelectComponent {...data} />,
      [FormType.Textarea]: <TextareaComponent {...data} />,
    };
  };

  return (
    <FormProvider {...methods}>
      <form className={`formComponent ${isOneRow ? "oneRow" : ""}`}>
        {formData.map((item, index) => {
          return mappingType(item, index)[item.type];
        })}
      </form>
    </FormProvider>
  );
};

export default FormComponent;
