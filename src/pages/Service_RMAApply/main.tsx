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
import fakeDataJson from "../../ServiceFakeData/initRMA.json"
import fakePlateParseapply from "../../ServiceFakeData/plateParseapply.json"
import fakeNotPlateParseapply from "../../ServiceFakeData/notPlateParseapply.json"
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

    const [RMAData, setRMAData] = useState<any>()
    const [issueCodeSelect, setIssueCodeSelect] = useState<any>([])
    const [defectRate, setDefectRate] = useState<any>()
    const [isQuickReview, setIsQuickReview] = useState<string>("Y")
    const [stepOneFile, setStepOneFile] = useState<any>()
    const [stepTwoFile, setStepTwoFile] = useState<any>()
    const [uploadTableData, setUploadTableData] = useState<any>()


    const [testFile, setTestFile] = useState<any>()

    const inputAmountRef: any = useRef(null);
    const defectAmountRef: any = useRef(null);

    useEffect(() => {
      console.log("fakeDataJson", fakeDataJson)
      const fakeData: any = fakeDataJson
      setRMAData(fakeData.data)
      RMAData && setInitData()

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


    }, [RMAData])

    const setInitData = () => {
      setValue("issue_number", RMAData.issue_number)//解析申請單號
      setValue("customer_code", RMAData.customer_code)//客戶名稱
      setValue("hs_id", RMAData.hs_id)//cqs窗口
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

    const postData = (data: any, type: string) => {
      const status = type === "save" ? "UNSENT" : "RUN"
      const resultData = {
        type,
        data: {
          header: [
            { ...data, cid: window.hannstar?.email, status }
          ],
          detail: []
        }
      }
      const postFormData = new FormData();
      postFormData.append("data", JSON.stringify(resultData));
      // console.log('resultData', resultData);
      // console.log("uploadTableData", uploadTableData);
      if (isQuickReview === "Y") {
        if (uploadTableData) {

        }
        resultData.data.detail = uploadTableData.data
      } else {

      }
      console.log('resultData', resultData);
      // parseapplyFile && Object.values(parseapplyFile).map((file: any, idx) => {
      //   postFormData.append((idx + 1).toString(), file);
      // })

      // console.log("pppostFormData", postFormData);

      // postSendParseapply(postFormData).then((response: any) => {
      //   console.log('response', response)
      //   setPopupMessage(response.data.messages)
      //   handleShowPopup()
      // });

      // fetch('/rest/V1/eService/SetIssue', {
      //   method: 'POST',
      //   body: postFormData,
      // })
      //   .then((response) => response.json())
      //   .then((res) => {
      //     console.log("test", res)
      //     setPopupMessage(res.data.message)
      //   }).then(() => {
      //     console.log('popupMessage', popupMessage);
      //     handleShowPopup()
      //   })
    }

    const handleFileChange = (e: any) => {
      setTestFile(e.target.files);
    };

    const handleIssueTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const code = RMAData.IssueType.find(({ id }: { id: string }) => id === e.target.value).issuecode
      setIssueCodeSelect(code)
    }

    const setDefect_rate = () => {
      const defectAmountValue = defectAmountRef.current.value
      const inputAmountValue = inputAmountRef.current.value
      if (inputAmountValue && defectAmountValue) {
        const result = Math.round((defectAmountValue / inputAmountValue) * 1000) / 1000
        setDefectRate(result)
        setValue("defect_rate", result)
      }
    }

    const isseuYearData = () => {
      const year = new Date().getFullYear()
      return [year, year - 1, year - 2]
    }

    const isseuMonthData = () => {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }

    const handleInput_amount = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDefect_rate()
      setValue("input_amount", e.target.value)
    }

    const handleDefect_amount = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDefect_rate()
      setValue("defect_amount", e.target.value)
    }

    const handleQuickReview = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("handleQuickReview", e);
      setIsQuickReview(e.target.value)
    }

    const handleStepOneFileChange = (e: any) => {
      setStepOneFile(e.target.files[0]);
    };

    const handleStepTwoFileChange = (e: any) => {
      setStepTwoFile(e.target.files);
    };

    const handleProductTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log("handleProductTypeChange", e.target.value);
      setUploadTableData("")
    }

    const handleQuickReviewUpload = () => {
      const postFormData = new FormData();
      stepTwoFile && Object.values(stepTwoFile).map((file: any, idx) => {
        postFormData.append((idx + 1).toString(), file);
      })
      const issueNumber: any = getValues("issue_number")
      const productType: any = getValues("product_type")

      postFormData.append("file", stepOneFile);
      postFormData.append("issue_number", issueNumber);
      postFormData.append("product_type", productType);

      console.log('postFormData', postFormData);

      fetch('/rest/V1/eService/Excel2Detail', {
        method: 'POST',
        body: postFormData,
      })
        .then((response) => response.json())
        .then((res) => {
          console.log("test", res)
          setUploadTableData(res)
        })

      setUploadTableData(fakePlateParseapply)
      // setUploadTableData(fakeNotPlateParseapply)
    }

    const NotPlateTableBlock = () => {
      return (
        uploadTableData ? <table>
          <thead>
            <tr>
              <td>項次</td>
              <td>Hannstar序號</td>
              <td>保固</td>
              <td>不良名稱</td>
              <td>圖片</td>
            </tr>
          </thead>
          <tbody>
            {uploadTableData.data.map((item: any) => {
              return (<tr>
                <td>{item.item_no}</td>
                <td>{item.hannstar_no}</td>
                <td>{item.warranty}</td>
                <td>{item.defect_name}</td>
                <td>
                  <a href={item.show_url}>{item.file_name}</a>
                </td>
              </tr>)
            })}
          </tbody>
        </table> : null
      )
    }

    const PlateTableBlock = () => {
      return (
        uploadTableData ? <table>
          <thead>
            <tr>
              <td>項次</td>
              <td>站點</td>
              <td>不良名稱</td>
              <td>不良數量</td>
              <td>圖片</td>
            </tr>
          </thead>
          <tbody>
            {uploadTableData.data.map((item: any) => {
              return (<tr>
                <td>{item.item_no}</td>
                <td>{item.station}</td>
                <td>{item.defect_name}</td>
                <td>{item.defect_qty}</td>
                <td>
                  <a href={item.show_url}>{item.file_name}</a>
                </td>
              </tr>)
            })}
          </tbody>
        </table> : null
      )
    }

    return (
      RMAData ? <>
        <h1 className={`${pageName}H1Title`}>{formData.PageTitle}</h1>
        <div className={`${pageName}FormBlock`}>
          <form>
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
                  <label className="required">{formData.agent}</label>
                  <input
                    type="text"
                    {...register("agent", { required: true })} />
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
                  <label className="required">{formData.model_no}</label>
                  <select {...register("model_no", { required: false })}>
                    {RMAData?.product.map((item: string) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="required">{formData.product_type.title}</label>
                  <select
                    {...register("product_type", { required: false })}
                    onChange={(e) => handleProductTypeChange(e)}
                  >
                    {RMAData?.product_type.map(({ id, text }: { id: string, text: string }) => (
                      <option value={id}>{text}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.isseu_year}</label>
                  <select
                    {...register("isseu_year", { required: true })} onChange={(e) => handleIssueTypeSelect(e)}>
                    {isseuYearData().map(year => (
                      <option value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2">
                  <label className="required">{formData.isseu_month}</label>
                  <select
                    {...register("isseu_month", { required: true })} onChange={(e) => handleIssueTypeSelect(e)}>
                    {isseuMonthData().map(month => (
                      <option value={month}>{month}</option>
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
                  <label className="required">{formData.invoce_number}</label>
                  <input
                    type="text"
                    {...register("invoce_number", { required: true })} />
                  {errors.invoce_number && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.yield} {formData.Per}</label>
                  <input
                    type="text"
                    {...register("yield", { required: true })}
                  />
                  {errors.yield && (<span className="error">{errorMsg}</span>)}
                </div>
                <div className="col-2">
                  <label className="required">{formData.box_no}</label>
                  <input
                    type="text"
                    {...register("box_no", { required: true })} />
                  {errors.box_no && (<span className="error">{errorMsg}</span>)}
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
                          {...register("quickReview", { required: true })}
                          value={item.value}
                          checked={item.value === isQuickReview}
                          onChange={(e) => handleQuickReview(e)}
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
              {
                isQuickReview === "Y" ?
                  <div className="upLoadFileBlock">
                    <div className="upLoadTitle">{formData.title1}</div>
                    <a className="downloadLink" href="/">{formData.text1}</a>
                    <input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={handleStepOneFileChange} />
                    <div className="stepTwoBlock">
                      <div className="upLoadTitle">{formData.title2}</div>
                      <div className="upLoadNote">{formData.noteText2}</div>
                    </div>
                    <input type="file" multiple accept=".jpg,.png" onChange={handleStepTwoFileChange} />
                    <div className="uploadBtn" onClick={handleQuickReviewUpload}>上傳</div>
                    <div>
                      {uploadTableData && uploadTableData.isplate ? <PlateTableBlock /> : <NotPlateTableBlock />}
                    </div>
                  </div>
                  :
                  <div className="row">
                    <div className="col-1">
                      <div className="fileBlock">
                        <input type="file" onChange={handleFileChange} />
                      </div>
                    </div>
                  </div>
              }
            </div>
            <div className={`${pageName}BtnBlock`}>
              <div className="btn" onClick={handleSubmit((data) => postData(data, 'save'))}>{formData.Save}</div>
              <div className="btn" onClick={handleSubmit((data) => postData(data, 'send'))}>{formData.Send}</div>
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
