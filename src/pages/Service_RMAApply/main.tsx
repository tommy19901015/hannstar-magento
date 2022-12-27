import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { useForm, SubmitHandler } from "react-hook-form";
import useServiceRMAApply from "./pageData";
import { postInitParseapply } from "../../services/api.service";
import "./css.scss";
//=====================================================
import fakeDataJson from "../../ServiceFakeData/parseapply.json"
//=====================================================

const ServiceRMAApply: React.FC = () => {
  const pageName = "ServiceRMAApply";
  const formData = useServiceRMAApply();
  type Keys = keyof typeof formData;

  type IFormInputs = {
    [key in Keys]: string | number | string[];
  };

  const FormBlock = () => {
    const {
      register,
      handleSubmit,
      getValues,
      setValue,
      formState: { errors },
    } = useForm<IFormInputs>();

    const errorMsg = formData.Required;

    const [parseapplyData, setParseapplyData] = useState<any>()
    const [issueCodeSelect, setIssueCodeSelect] = useState<any>([])
    // const [inputAmount, setInputAmount] = useState<any>()
    // const [defectAmount, setDefectAmount] = useState<any>()
    const [defectRate, setDefectRate] = useState<any>()
    const [testFile, setTestFile] = useState<any>()

    const inputAmountRef: any = useRef(null);
    const defectAmountRef: any = useRef(null);

    useEffect(() => {
      console.log("fakeDataJson", fakeDataJson)
      const fakeData: any = fakeDataJson
      setParseapplyData(fakeData)
      parseapplyData && setInitData()

      // const email = window.hannstar?.email
      // const postData = {
      //   type: "post",
      //   data: {
      //     cid: email,
      //     lang: window.hannstar?.language,
      //   }
      // }
      // postInitParseapply(postData).then((response: any) => {
      // });


    }, [parseapplyData])

    const setInitData = () => {
      setValue("issue_number", parseapplyData.issue_number)//解析申請單號
      setValue("customer_code", parseapplyData.customer_code)//客戶名稱
      setValue("hs_id", parseapplyData.hs_id)//cqs窗口
      setIssueCodeSelect(parseapplyData.IssueType[0].issuecode)
      // setValue("issue_code", parseapplyData.IssueType[0].issuecode[0].id)
    }


    const onSubmit: SubmitHandler<IFormInputs> = (data) => {

      const result: any = {
        ...data,
      };
      console.log("result", result);
    }

    const handlerSave = () => {
      const formData = getValues()
      const saveData = {
        type: "save",
        data: {
          header: [
            { ...formData, cid: "email", status: "UNSENT" }
          ]
        }

      }
      console.log('saveData', saveData);
    }

    const handlerReset = () => {
      window.location.reload()
    }

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

    const handleIssueTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const code = parseapplyData.IssueType.find(({ id }: { id: string }) => id === e.target.value).issuecode
      setIssueCodeSelect(code)
      // setValue("issue_code", code[0].id)
    }

    const setDefect_rate = () => {
      const defectAmountValue = defectAmountRef.current.value
      const inputAmountValue = inputAmountRef.current.value
      if (inputAmountValue && defectAmountValue) {
        setDefectRate(defectAmountValue / inputAmountValue)
        setValue("defect_rate", defectAmountValue / inputAmountValue)
      }
    }

    const handleInput_amount = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDefect_rate()
      setValue("input_amount", e.target.value)
    }

    const handleDefect_amount = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDefect_rate()
      setValue("defect_amount", e.target.value)
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
                    {...register("customer_code")}
                    disabled />
                </div>
                <div className="col-2">
                  <label className="">{formData.agent}</label>
                  <input
                    type="text"
                    {...register("agent")} />
                  {errors.agent && (<span className="error">{errorMsg}</span>)}
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
                    {...register("hs_id")}
                    disabled />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.product}</label>
                  <select {...register("product", { required: false })}>
                    {parseapplyData?.product.map((item: string) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="required">{formData.form_type.title}</label>
                  <select
                    {...register("form_type", { required: false })}
                  >
                    {formData.form_type.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="">{formData.monthEndYear}</label>
                  <select
                    {...register("monthEndYear", { required: true })} onChange={(e) => handleIssueTypeSelect(e)}>
                    {parseapplyData?.IssueType.map((item: { id: string, text: string }) => (
                      <option value={item.id}>{item.text}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="">{formData.monthEndMonth}</label>
                  <select
                    {...register("monthEndMonth", { required: true })} onChange={(e) => handleIssueTypeSelect(e)}>
                    {parseapplyData?.IssueType.map((item: { id: string, text: string }) => (
                      <option value={item.id}>{item.text}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="required">{`${formData.input_amount} ${formData.Slice}`}</label>
                  <input
                    type="number"
                    {...register("input_amount", { required: true })}
                    ref={inputAmountRef}
                    onChange={(e) => handleInput_amount(e)}
                  />
                  {errors.input_amount && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="required">{`${formData.defect_amount} ${formData.Slice}`}</label>
                  <input
                    type="number"
                    {...register("defect_amount", { required: true })}
                    ref={defectAmountRef}
                    onChange={(e) => handleDefect_amount(e)}
                  />
                  {errors.defect_amount && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="">{`${formData.defect_rate} ${formData.Per}`}</label>
                  <input
                    type="text"
                    value={defectRate}
                    {...register("defect_rate")}
                  />
                </div>
                <div className="col-2">
                  <label className="required">{formData.Invoice}</label>
                  <input
                    type="text"
                    {...register("Invoice", { required: true })} />
                  {errors.Invoice && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="">{formData.paula}</label>
                  <input
                    type="text"
                    value={defectRate}
                    {...register("paula")}
                  />
                </div>
                <div className="col-2">
                  <label className="required">{formData.caseNumber}</label>
                  <input
                    type="text"
                    {...register("caseNumber", { required: true })} />
                  {errors.caseNumber && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <label className="required">{formData.quickReview.title}</label>
                  <div className="radio-col">
                    {formData.quickReview.option.map((item, i) => (
                      <div className="hannstarRadio" key={i}>
                        <input
                          id={item.value}
                          type="radio"
                          value={item.value}
                          {...register("quickReview", { required: true })}
                        />
                        <label htmlFor={item.value}>{item.text}</label>
                      </div>
                    ))}
                  </div>
                  {errors.quickReview && (
                    <span className="error">{errorMsg}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <div className="fileBlock">
                    <input type="file" onChange={handleFileChange} />
                    <div className="uploadBtn" onClick={handlerUpload}>{formData.Upload}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${pageName}BtnBlock`}>
              <div className="btn" onClick={handlerSave}>{formData.Save}</div>
              <input className="btn" type="submit" value={formData.Send} />
              <div className="btn" onClick={handlerReset}>{formData.Reset}</div>
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

export default ServiceRMAApply;
