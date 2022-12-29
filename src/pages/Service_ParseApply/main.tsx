import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { useForm, SubmitHandler } from "react-hook-form";
import useParseApply from "./pageData";
import { postInitParseapply, postSendParseapply } from "../../services/api.service";
import "./css.scss";
import { urlConfig } from "../../config/urlSetting";
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
      getValues,
      setValue,
      formState: { errors },
    } = useForm<IFormInputs>();

    const errorMsg = formData.Required;

    const [parseapplyData, setParseapplyData] = useState<any>()
    const [issueCodeSelect, setIssueCodeSelect] = useState<any>([])

    const [defectRate, setDefectRate] = useState<any>()
    const [parseapplyFile, setParseapplyFile] = useState<any>()

    const inputAmountRef: any = useRef(null);
    const defectAmountRef: any = useRef(null);

    useEffect(() => {
      console.log("fakeDataJson", fakeDataJson)
      const fakeData: any = fakeDataJson
      setParseapplyData(fakeData)
      setInitData(fakeData)

      const email = window.hannstar?.email
      if (!email) window.location.href = urlConfig().account.login.href
      const postData = {
        type: "post",
        data: {
          cid: email,
          lang: window.hannstar?.language,
        }
      }
      postInitParseapply(postData).then((response: any) => {
        setParseapplyData(response)
        setInitData(response)
      });
      // parseapplyData && setInitData()
    }, [])

    const setInitData = (response: any) => {
      setValue("issue_number", response.issue_number)//解析申請單號
      setValue("customer_code", response.customer_code)//客戶名稱
      setValue("hs_id", response.hs_id)//cqs窗口
      setIssueCodeSelect(response.IssueType[0].issuecode)
      setValue("issue_code", response.IssueType[0].issuecode[0].id)
    }


    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      const result: any = {
        ...data,
      };
      console.log("result", result);
    }

    const handlerSave = () => {
      postData("save")
    }

    const postData = (type: string) => {
      const status = type === "save" ? "UNSENT" : "RUN"

      console.log("ddddaaatttaaa", {
        type,
        data: {
          header: [
            { ...getValues(), cid: window.hannstar?.email, status }
          ],
          detail: []
        }
      })

      const postFormData = new FormData();
      postFormData.append("data", JSON.stringify({
        type,
        data: {
          header: [
            { ...getValues(), cid: window.hannstar?.email, status }
          ],
          detail: []
        }
      }));
      parseapplyFile && Object.values(parseapplyFile).map((file: any, idx) => {
        postFormData.append(idx.toString(), file);
      })

      console.log("pppostFormData", postFormData);

      postSendParseapply(postFormData).then((response: any) => {
        console.log('response', response)
      });
    }

    const handlerReset = () => {
      window.location.reload()
    }

    const handlerUpload = () => {
      console.log(parseapplyFile);
      const myHeaders = new Headers();
      // myHeaders.append("Content-type", "multipart/form-data; boundary=------------------------ --974767299852498929531610575");
      // myHeaders.append("Cookie", "PHPSESSID=a2oqivsofl3517bgcifcve7r63");

      const formData = new FormData();
      formData.append("file", parseapplyFile[0]);

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
      setParseapplyFile(e.target.files);
    };

    const handleIssueTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const code = parseapplyData.IssueType.find(({ id }: { id: string }) => id === e.target.value).issuecode
      setIssueCodeSelect(code)
      setValue("issue_code", code[0].id)
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
                  <label className="required">{formData.form_type.title}</label>
                  <select
                    {...register("form_type", { required: false })}
                  >
                    {formData.form_type.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="required">{formData.product_code}</label>
                  <select {...register("product_code", { required: false })}>
                    {parseapplyData?.product.map((item: string) => (
                      <option value={item}>{item}</option>
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
                  <label className="required">{formData.site_name}</label>
                  <input
                    type="text"
                    {...register("site_name", { required: true })} />
                  {errors.site_name && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.issue_type.title}</label>
                  <select
                    {...register("issue_type", { required: true })} onChange={(e) => handleIssueTypeSelect(e)}>
                    {parseapplyData?.IssueType.map((item: { id: string, text: string }) => (
                      <option value={item.id}>{item.text}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="required">{formData.issue_code.title}</label>
                  <select
                    {...register("issue_code", { required: true })}>
                    {issueCodeSelect.map((item: { id: string, text: string }) => (
                      <option value={item.id}>{item.text}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="">{formData.invoce_number}</label>
                  <input
                    type="text"
                    {...register("invoce_number")}
                  />
                </div>
                <div className="col-2">
                  <label className="required">{`${formData.remark} ${formData.ProvidDefectiveProduct}`}</label>
                  <input
                    type="text"
                    defaultValue=""
                    {...register("remark", { required: true })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <label className="">{formData.FileTitle}</label>
                  <div className="fileBlock">
                    <input type="file" multiple onChange={handleFileChange} />
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

export default ServiceParseApply;
