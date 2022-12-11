import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import 'react-phone-number-input/style.css';
import { useForm, SubmitHandler } from "react-hook-form";
import usePartnerApplication from "./pageData";
import "./css.scss";

const PartnerApplication: React.FC = () => {
    const pageName = "PartnerApplication";
    const formData = usePartnerApplication();
    
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
      const handlerUpload =() =>{}

      return (
        <>
        <div className={`${pageName}FormBlock`}>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="classificationBlock">
          <h5 className="title">{formData.Application}</h5>
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.OrderTime}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("OrderTime", { required: true })} />
                   {errors.OrderTime && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="required">{formData.RequestNumber}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("RequestNumber", { required: true })} />
                   {errors.RequestNumber && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <label className="required">{formData.RequisitionOrderStatus.title}</label>
                  <select {...register("RequisitionOrderStatus")}>
                  {formData.RequisitionOrderStatus.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                  </select>
                   {errors.RequisitionOrderStatus && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">

                <div className="col-2">
                <label className="required">{formData.InquiryNumber}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("InquiryNumber", { required: true })} />
                   {errors.InquiryNumber && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                <label className="required">{formData.ProductLifeTime}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("ProductLifeTime", { required: true })} />
                   {errors.ProductLifeTime && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                <label className="required">{formData.Reason}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Reason", { required: true })} />
                   {errors.Reason && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                <label className="required">{formData.Demand}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Demand", { required: true })} />
                   {errors.Demand && (<span className="error">{errorMsg}</span>)}
                </div>

              </div>


            <div className="row">

                <div className="col-2">
                  <label className="required">{formData.Founder}</label>
                    <input
                    type="text"
                    defaultValue=""
                    {...register("Founder", { required: true })} />
                    {errors.Founder && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                <label className="required">{formData.TotalDemand}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("TotalDemand", { required: true })} />
                   {errors.TotalDemand && (<span className="error">{errorMsg}</span>)}
                </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.Material.title}</label>
                <div className="radios">
                {formData.Material.option.map((item, i) => (
                    <div className="hannstarRadio" key={i}>
                      <input
                        {...register("Material", { required: true })}
                        id={item.value}
                        type="radio"
                        value={item.value}
                      />
                      <label htmlFor={item.value}>{item.text}</label>
                    </div>
                ))}
                </div>

                {errors.Material && (<span className="error">{errorMsg}</span>)}
              </div>

              <div className="col-2">
                <label className="required">{formData.Product.title}</label>
                <div className="radios">
                {formData.Product.option.map((item, i) => (
                    <div className="hannstarRadio" key={i}>
                      <input
                        {...register("Product", { required: true })}
                        id={item.value}
                        type="radio"
                        value={item.value}
                      />
                      <label htmlFor={item.value}>{item.text}</label>
                    </div>
                ))}
                </div>
                {errors.Product && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
              

              {/*  */}

              {/*  */}

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.ProductApplication}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("ProductApplication", { required: true })} />
                   {errors.ProductApplication && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.Customer}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Customer", { required: true })} />
                   {errors.Customer && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.Model}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Model", { required: true })} />
                   {errors.Model && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.Time}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Time", { required: true })} />
                   {errors.Time && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.Uses}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Uses", { required: true })} />
                   {errors.Uses && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.Period}</label>
                  <input
                  type="text"
                  defaultValue=""
                  {...register("Period", { required: true })} />
                   {errors.Period && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

          </div>

          <div className="classificationBlock">
          <h5 className="title">{formData.RequiredItem}</h5>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.ItemName}</label>
                <input
                type="text"
                defaultValue=""
                {...register("ItemName", { required: true })} />
                  {errors.ItemName && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.ProjectModel}</label>
                <input
                type="text"
                defaultValue=""
                {...register("ProjectModel", { required: true })} />
                 {errors.ProjectModel && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.ProductSpecifications}</label>
                <input
                type="text"
                defaultValue=""
                {...register("ProductSpecifications", { required: true })} />
                  {errors.ProductSpecifications && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.Supplier}</label>
                <input
                type="text"
                defaultValue=""
                {...register("Supplier", { required: true })} />
                 {errors.Supplier && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.TargetPrice}</label>
                <input
                type="text"
                defaultValue=""
                {...register("TargetPrice", { required: true })} />
                  {errors.TargetPrice && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.MarketPrice}</label>
                <input
                type="text"
                defaultValue=""
                {...register("MarketPrice", { required: true })} />
                 {errors.MarketPrice && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
              <div className="col-1">
              <label>{formData.Remark}</label>
                <textarea
                  className="companyRemark"
                  defaultValue=""
                  {...register("Remark")}
                />
                  {errors.Remark && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            </div>
          <div className="classificationBlock">
            <h5 className="title">{formData.Appendix}</h5>
            <div className="row">
              
                <div className="col-2">
                  <input type="file" />
                </div>
                <div className="col-2">
                  <div onClick={handlerUpload} className="btn">
                {formData.Upload}
              </div>
                </div>
            </div>
          </div>
          
            <div className="btnBlock">
              <input type="submit" defaultValue={formData.Save} className="btn" />              
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
    
    export default PartnerApplication;