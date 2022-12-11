import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import 'react-phone-number-input/style.css';
import { useForm, SubmitHandler } from "react-hook-form";
import usePartnerQuotation from "./pageData";
import "./css.scss";

const PartnerQuotation: React.FC = () => {
    const pageName = "PartnerQuotation";
    const formData = usePartnerQuotation();
    
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
      const handlerUpload =() =>{}

      return (
        <>
        <div className={`${pageName}FormBlock`}>
          <div className={`${pageName}TextBlock`}>
            <div className="title">{formData.Quote}</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="classificationBlock">
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.RFQNumber}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("RFQNumber", { required: true })} />
                   {errors.RFQNumber && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="required">{formData.SerialNumber}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("SerialNumber", { required: true })} />
                   {errors.SerialNumber && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Status.title}</label>
                  <select {...register("Status")}>
                  {formData.Status.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                  </select>
                   {errors.Status && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                <label className="required">{formData.PM}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("PM", { required: true })} />
                   {errors.PM && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                <label className="required">{formData.Size}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Size", { required: true })} />
                   {errors.Size && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                <label className="required">{formData.Resolution}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Resolution", { required: true })} />
                   {errors.Resolution && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>


              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Technology.title}</label>
                  <select {...register("Technology")}>
                  {formData.Technology.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                  </select>
                   {errors.Technology && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

          </div>
          
            <div className="btnBlock">
              <input type="submit" defaultValue={formData.Search} className="btn" />              
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
    
    export default PartnerQuotation;