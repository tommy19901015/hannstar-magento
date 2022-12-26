import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import 'react-phone-number-input/style.css';
import { useForm, SubmitHandler } from "react-hook-form";
import usePartnerTechnical from "./pageData";
import "./css.scss";

const PartnerTechnical: React.FC = () => {
  const pageName = "PartnerTechnical";
  const formData = usePartnerTechnical();

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

    const [testFile, setTestFile] = useState<any>()

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      const result: any = {
        ...data,
      };
      console.log("result", result);
    }

    const handlerReset = () => { }
    const handlerUpload = () => {
      console.log(testFile);
      fetch('/rest/V1/eService/name', {
        method: 'POST',
        body: testFile,
        // 👇 Set headers manually for single file upload
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }

    const handleFileChange = (e: any) => {
      // if (e.target.files) {
      //   setTestFile(e.target.files);
      // }
    };

    return (
      <>
        <div className={`${pageName}TextBlock`}>
          <div className="title">新技術合作</div>
          <div className="content">
            瀚宇彩晶秉持著研發與創新是企業成長及永續經營的驅動力，我們非常重視供應商夥伴能齊心共同技術研發在產品應用創新，若貴公司有任何新技術與產品，可改善並優化於材料或設備等規格提升與應用推廣給予瀚宇彩晶，歡迎您進一步提供相關資料給予我們，透過該平台技術交流，共創無限商機。
          </div>
        </div>


        <div className={`${pageName}FormBlock`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="classificationBlock">
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Name}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Name", { required: true })} />
                </div>
                <div className="col-2">
                  <label className="required">{formData.SupplierCategory.title}</label>
                  <select {...register("SupplierCategory")}>
                    {formData.SupplierCategory.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                  {errors.SupplierCategory && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Email}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Email", { required: true })} />
                  {errors.Email && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="required">{formData.Site.title}</label>
                  <select {...register("Site")}>
                    {formData.Site.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                  {errors.Site && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Company}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Company", { required: true })} />
                  {errors.Company && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="required">{formData.Classification.title}</label>
                  <select {...register("Classification")}>
                    {formData.Classification.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                  {errors.Classification && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>


              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Phone}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Phone", { required: true })} />
                  {errors.Phone && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="required">{formData.ProposalCategory.title}</label>
                  <select {...register("ProposalCategory")}>
                    {formData.ProposalCategory.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                  {errors.ProposalCategory && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.Theme}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Theme", { required: true })} />
                  {errors.Theme && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="required">{formData.Nation.title}</label>
                  <select {...register("Nation")}>
                    {formData.Nation.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                  {errors.Nation && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <label className="required">{formData.Describe}</label>
                  <textarea
                    className="Describe"
                    defaultValue=""
                    {...register("Describe")}
                  />
                  {errors.Describe && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <input type="file" onChange={handleFileChange}
                    accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, image/png' />
                </div>
                <div className="col-2">
                  <div onClick={handlerUpload} className="btn">
                    {formData.Upload}
                  </div>
                </div>
              </div>
              <p>{formData.NoteContent}</p>
            </div>

            <div className="btnBlock">
              <input type="submit" defaultValue={formData.Send} className="btn" />
              <div onClick={handlerReset} className="btn">
                {formData.Cancel}
              </div>

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

export default PartnerTechnical;