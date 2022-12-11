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
            <h1 className={`${pageName}H1Title`}>法規申請</h1>
            <div className={`${pageName}FormBlock`}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={`title`}>基本資料</div>
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
                    <label className="">{formData.Date}</label>
                    <input
                    type="text"
                    defaultValue=""
                    disabled />
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <label className="">{formData.Model}</label>
                    <input
                    type="text"
                    defaultValue=""
                    disabled />
                  </div>
                </div>

              <div className="row">
              <div className="col-1">
                <label className="required">{formData.ApplicationType.title}</label>
                <div className="checkbox-col">
                  {formData.ApplicationType.option.map((item, i) => (
                    <div className="hannstarCheckBox" key={i}>
                      <input
                        id={item.value}
                        type="checkbox"
                        value={item.value}
                        {...register("ApplicationType", { required: true })}
                      />
                      <label htmlFor={item.value}>{item.text}</label>
                    </div>
                  ))}
                  {errors.ApplicationType && (
                    <span className="error">{errorMsg}</span>
                  )}
                </div>
              </div>
              </div>
            </div>

            <div className="title required">{formData.Remark}</div>
            <div className="classificationBlock">
            <div className="row">
              <div className="col-1">
                <textarea
                  className="companyRemark"
                  defaultValue=""
                  {...register("Remark")}
                />
                 {errors.Agent && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            </div>

            <div className="title required">檔案附件</div>
            <div className="classificationBlock">
                <div className="row">
                  <div className="col-1">
                    <input type="file" />
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