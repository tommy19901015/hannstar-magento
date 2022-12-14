import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { useForm, SubmitHandler } from "react-hook-form";
import useParseApply from "./pageData";
import "./css.scss";

const ServiceParseApply: React.FC = () => {
  const pageName = "ServiceParseApply";
  const formData = useParseApply();
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

    const handlerReset = () =>{}
    return (
      <>
        <h1 className={`${pageName}H1Title`}>{formData.PageTitle}</h1>
        <div className={`${pageName}FormBlock`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`title`}>{formData.FormTitle}</div>
          <div className="classificationBlock">
            <div className="row">
              <div className="col-2">
                <label className="">{formData.Client}</label>
                <input
                type="text"
                defaultValue=""
                disabled/>
              </div>
              <div className="col-2">
                <label className="required">{formData.Agent}</label>
                <input
                type="text"
                defaultValue=""
                {...register("Agent", { required: true })}/>
                {errors.Agent && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.TaxNo}</label>
                <input
                type="text"
                defaultValue=""
                disabled />
              </div>
              <div className="col-2">
                <label className="">{formData.CQS}</label>
                <input
                type="text"
                defaultValue=""
                disabled />
              </div>
            </div>

          <div className="row">
            <div className="col-2">
                <label className="">{formData.FieldClass.title}</label>
                <select>
                  {formData.FieldClass.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
              <div className="col-2">
                <label className="">{formData.Model}</label>
                <input
                type="text"
                defaultValue=""
                {...register("Model", { required: true })}/>
                {errors.Model && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
            <div className="col-2">
                <label className="">{`${formData.Amount} ${formData.Slice}`}</label>
                <input
                type="text"
                defaultValue=""
                {...register("Amount", { required: true })}/>
                {errors.Amount && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="">{`${formData.Defective} ${formData.Slice}`}</label>
                <input
                type="text"
                defaultValue=""
                {...register("Defective", { required: true })}/>
                {errors.Defective && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

          <div className="row">
            <div className="col-2">
                <label className="">{`${formData.NonPerforming} ${formData.Per}`}</label>
                <input
                type="text"
                defaultValue=""/>
              </div>
              <div className="col-2">
                <label className="">{formData.Stand}</label>
                <input
                type="text"
                defaultValue=""
                {...register("Stand", { required: true })}/>
                {errors.Stand && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

          <div className="row">
            <div className="col-2">
                <label className="">{formData.IssueCategory.title}</label>
                <select {...register("IssueCategory")}>
                  {formData.IssueCategory.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
              <div className="col-2">
                <label className="">{formData.IssueCode.title}</label>
                <select {...register("IssueCode")}>
                  {formData.IssueCode.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>
        
            <div className="row">
            <div className="col-2">
                <label className="">{formData.Invoice}</label>
                <input
                type="text"
                defaultValue=""/>
              </div>
              <div className="col-2">
                <label className="">{`${formData.Remark} ${formData.ProvidDefectiveProduct}`}</label>
                <input
                type="text"
                defaultValue=""/>
              </div>
            </div>


        </div>

          <div className={`${pageName}BtnBlock`}>
           
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

export default ServiceParseApply;
