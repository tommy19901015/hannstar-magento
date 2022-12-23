import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { useForm, SubmitHandler } from "react-hook-form";
import useParseApply from "./pageData";
import "./css.scss";
//=====================================================
import fakeDataJson from "../../ServiceFakeData/parseapply.json"
//=====================================================

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

    const [parseapplyData, setParseapplyData] = useState<any>()
    const [issueCodeSelect, setIssueCodeSelect] = useState<any>([])
    const [testFile, setTestFile] = useState<any>()

    useEffect(() => {
      console.log("fakeDataJson", fakeDataJson)
      const fakeData: any = fakeDataJson
      setParseapplyData(fakeData)
      parseapplyData && setInitData()

    }, [parseapplyData])

    const setInitData = () => {
      setValue("issue_number", parseapplyData.issue_number)//解析申請單號
      setValue("customer_code", parseapplyData.customer_code)//客戶名稱
      setValue("hs_id", parseapplyData.hs_id)//cqs窗口
      setIssueCodeSelect(parseapplyData.IssueType[0].issuecode)
      setValue("issue_code", parseapplyData.IssueType[0].issuecode[0].id)
    }


    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      const result: any = {
        ...data,
      };
      console.log("result", result);
    }

    const handlerReset = () => { }

    const handlerUpload = () => {
      console.log(testFile);
      const myHeaders = new Headers();
      // myHeaders.append("Content-type", "multipart/form-data; boundary=------------------------ --974767299852498929531610575");
      // myHeaders.append("Cookie", "PHPSESSID=a2oqivsofl3517bgcifcve7r63");

      const formData = new FormData();
      formData.append("file", testFile[0]);

      fetch('/rest/V1/eService/Excel2Detail', {
        headers: myHeaders,
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }

    const handleFileChange = (e: any) => {
      setTestFile(e.target.files);
    };

    const handleIssueTypeSelect = (e: any) => {
      const code = parseapplyData.IssueType.find(({ id }: { id: string }) => id === e.target.value).issuecode
      setIssueCodeSelect(code)
      setValue("issue_code", code[0].id)
    }

    return (
      parseapplyData ? <>
        <h1 className={`${pageName}H1Title`}>{formData.PageTitle}</h1>
        <div className={`${pageName}FormBlock`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`title`}>{formData.FormTitle}</div>
            <div className="classificationBlock">
              <div className="row">
                <div className="col-2">
                  <label className="">{formData.customer_code}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("customer_code")}
                    disabled />
                </div>
                <div className="col-2">
                  <label className="required">{formData.Agent}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Agent", { required: false })} />
                  {errors.Agent && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="">{formData.issue_number}</label>
                  <input
                    type="text"
                    {...register("issue_number")}
                    disabled />
                </div>
                <div className="col-2">
                  <label className="">{formData.hs_id}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("hs_id")}
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
                  <label className="">{formData.product}</label>
                  <select {...register("product")}>
                    {parseapplyData?.product.map((item: string) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="">{`${formData.Amount} ${formData.Slice}`}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Amount", { required: false })} />
                  {errors.Amount && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="">{`${formData.Defective} ${formData.Slice}`}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Defective", { required: false })} />
                  {errors.Defective && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="">{`${formData.NonPerforming} ${formData.Per}`}</label>
                  <input
                    type="text"
                    defaultValue="" />
                </div>
                <div className="col-2">
                  <label className="">{formData.Stand}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("Stand", { required: false })} />
                  {errors.Stand && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="">{formData.issue_type.title}</label>
                  <select
                    {...register("issue_type")} onChange={(e) => handleIssueTypeSelect(e)}>
                    {parseapplyData?.IssueType.map((item: { id: string, text: string }) => (
                      <option value={item.id}>{item.text}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="">{formData.issue_code.title}</label>
                  <select
                    {...register("issue_code")}>
                    {issueCodeSelect.map((item: { id: string, text: string }) => (
                      <option value={item.id}>{item.text}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <label className="">{formData.Invoice}</label>
                  <input
                    type="text"
                    defaultValue="" />
                </div>
                <div className="col-2">
                  <label className="">{`${formData.Remark} ${formData.ProvidDefectiveProduct}`}</label>
                  <input
                    type="text"
                    defaultValue="" />
                </div>
              </div>


            </div>
            <div className={`${pageName}UploadBlock`}>
              <input type="file" onChange={handleFileChange}
                multiple
                accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, image/png' />

              <div className="uploadBtn" onClick={handlerUpload}>上傳檔案</div>
            </div>
            <div className={`${pageName}BtnBlock`}>
              <input type="submit" defaultValue={"送出"} className="confirm" />
            </div>
          </form>
        </div>
      </> : null

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
