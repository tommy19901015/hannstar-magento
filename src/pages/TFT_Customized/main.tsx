import React from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import usePageData from "./pageData";
import { useForm, SubmitHandler } from "react-hook-form";
import "./css.scss";


const TFTCustomized: React.FC = () => {
  const pageName = "TFTCustomized";
  const formData = usePageData();
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

    return (
      <>
        <h1 className={`${pageName}H1Title`}>{formData.PageTitle}</h1>
        <p>1.提醒您客製相關產品規格可能會有 MOQ 和NRE費用； <br/>
          2.所有規格資訊都可修改 ； 3. 星號(*)為必填</p>
        <div className={`${pageName}FormBlock`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`title`}>{formData.FormTitle}</div>
            <div className="classificationBlock">
            <div className="row">
                <div className="col-2">
                  <label className="">{formData.Size}</label>
                  <input
                    type="text"
                    defaultValue=""/>
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
                <label className="">{formData.Ratio}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
              <div className="col-2">
                <label className="">{formData.Pixel}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.DisplayArea}</label>
                <div className="row-col-2">
                  <input
                    type="text"
                    className="max-w-col2"
                    defaultValue=""/>
                    <input
                    type="text"
                    className="max-w-col2"
                    defaultValue=""/>
                </div>
               
                </div>
                <div className="col-2">
                  <label className="">{formData.Technology}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.Compared}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
              <div className="col-2">
                  <label className="">{formData.View}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.BestView}</label>
                <input
                  type="text"
                  defaultValue=""/>
                </div>
                <div className="col-2">
                  <label className="">{formData.Reaction}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.Colors}</label>
                <input
                  type="text"
                  defaultValue=""/>
                </div>
                <div className="col-2">
                  <label className="">{formData.Saturation}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.Brightness}</label>
                <input
                  type="text"
                  defaultValue=""/>
                </div>
                <div className="col-2">
                  <label className="">{formData.WhiteColor}</label>
                  <div className="row-col-2">
                  <input
                    type="text"
                    className="max-w-col2"
                    defaultValue=""/>
                    <input
                    type="text"
                    className="max-w-col2"
                    defaultValue=""/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
              <label className="">{formData.IC.title}</label>
                  <select>
                    {formData.IC.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                <label className="">{formData.Interface.title}</label>
                  <select>
                    {formData.Interface.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.Temperature}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
              <div className="col-2">
                  <label className="">{formData.StorageTemperature}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.Outward}</label>
                <div className="row-col-3">
                  <input
                    type="text"
                    className="max-w-col3"
                    defaultValue=""/>
                    <input
                    type="text"
                    className="max-w-col3"
                    defaultValue=""/>
                     <input
                    type="text"
                    className="max-w-col3"
                    defaultValue=""/>
                </div>
                </div>
                <div className="col-2">
                  <label className="">{formData.TouchMode}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
            <div className="col-2">
                <label className="">{formData.TouchTechnology}</label>
                <input
                  type="text"
                  defaultValue=""/>
                </div>
              <div className="col-2">
                <label className="">{formData.FittingMethod}</label>
                <input
                  type="text"
                  defaultValue=""/>
                </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.CL}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
              <div className="col-2">
                <label className="">{formData.CoverMaterial}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
            </div>

            </div>

          <div className="classificationBlock">
          <div className="subTitle">您感興趣的嵌入式解決方案？（可複選）</div>
            <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Communication.title}</label>
                  <select>
                    {formData.Communication.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="required">{formData.AVI.title}</label>
                  <select>
                    {formData.AVI.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Internet.title}</label>
                  <select>
                    {formData.Internet.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="">{formData.Other}</label>
                  <input
                  type="text"
                  defaultValue=""/>
                </div>
            </div>
          </div>

          <div className="classificationBlock">
          <div className="subTitle">專案資訊</div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.EstimatedAmount.title}</label>
                <select>
                  {formData.EstimatedAmount.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
              <div className="col-2">
                <label className="required">{formData.Applications.title}</label>
                <select>
                  {formData.Applications.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.Life.title}</label>
                <select>
                  {formData.Life.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
              <div className="col-2">
                <label className="required">{formData.Time.title}</label>
                <select>
                  {formData.Time.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.EndProducts}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <label>{formData.Remark}</label>
                <textarea
                  className="companyRemark"
                  defaultValue=""
                />
              </div>
            </div>
          </div>

          <div className="btnBlock">
            <div className="goBack">
              {formData.Send}
            </div>
            <input type="submit" defaultValue={formData.Save} className="confirm" />
            <div className="goBack">
              {formData.Reset}
            </div>
          </div>
          </form>
        </div>
      </>
    )
  }

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

export default TFTCustomized;
