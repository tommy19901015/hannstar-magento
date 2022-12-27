import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import 'react-phone-number-input/style.css';
import { useForm, SubmitHandler } from "react-hook-form";
import useGreenServiceApply from "./pageData";
import "./css.scss";

const ServiceGreenServiceApply: React.FC = () => {
  const pageName = "ServiceGreenServiceApply";
  const formData = useGreenServiceApply();
  const [formFile, setFormFile] = useState<any>()

  type Keys = keyof typeof formData;

  type IFormInputs = {
    [key in Keys]: string | number | string[];
  };

  const FormBlock = () => {
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<IFormInputs>();
    const errorMsg = formData.Required;
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      const result: any = {
        ...data,
      };
      console.log("result", result);
    }

    const handlerReset = () => { }

    const handleFileChange = (e: any) => {
      setFormFile(e.target.files);
    };

    return (
      <>
        <h1 className={`${pageName}H1Title`}>{formData.MainTitle}</h1>
        <div className={`${pageName}FormBlock`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`title`}>{formData.SubTitle}</div>
            <div className="classificationBlock">
              <div className="row">
                <div className="col-2">
                  <label className="">{formData.customer_code}</label>
                  <input
                    type="text"
                    disabled
                    {...register("customer_code")}
                  />
                </div>
                <div className="col-2">
                  <label className="required">{formData.agent}</label>
                  <input
                    type="text"
                    {...register("agent", { required: true })} />
                  {errors.agent && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="">{formData.doc_no}</label>
                  <input
                    type="text"
                    {...register("doc_no")}
                    disabled />
                </div>
                <div className="col-2">
                  <label className="">{formData.Date}</label>
                  <input
                    type="text"
                    disabled />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.model_name}</label>
                  <input
                    type="text"
                    {...register("model_name", { required: true })}
                  />
                  {errors.model_name && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <label className="required">{formData.green_code.title}</label>
                  <div className="checkbox-col">
                    {formData.green_code.option.map((item, i) => (
                      <div className="hannstarCheckBox" key={i}>
                        <input
                          id={item.value}
                          type="checkbox"
                          value={item.value}
                          {...register("green_code", { required: true })}
                        />
                        <label htmlFor={item.value}>{item.text}</label>
                      </div>
                    ))}
                  </div>
                  {errors.green_code && (
                    <span className="error">{errorMsg}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <label className="required">{formData.remark}</label>
                  <textarea
                    className="companyRemark"
                    defaultValue=""
                    {...register("remark", { required: true })}
                  />
                  {errors.remark && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <div className="fileBlock">
                    <input type="file" onChange={handleFileChange} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${pageName}BtnBlock`}>
              <div onClick={handlerReset} className="btn">
                {formData.Reset}
              </div>
              <input type="submit" defaultValue={formData.Send} className="btn" />
            </div>
          </form>
        </div>
      </>
    );
  };

  return (
    <Layout>
      <Columns type={ColType.OneCol} content={
        <>
          <Breadcrumbs {...formData.breadcrumbs} />
          <FormBlock />
        </>
      } />
    </Layout>
  );
};

export default ServiceGreenServiceApply;