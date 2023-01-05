import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { postInitGreenapply, postSendGreenapply } from "../../services/api.service";
import useGreenServiceApply from "./pageData";
import "./css.scss";
import { urlConfig } from "../../config/urlSetting";
import { I_detailData } from "./interface"
import Popup from "../../component/popup/main";
import Loading from "../../component/loading/main";
//=====================================================
import fakeDataJson from "../../ServiceFakeData/initGreen.json"
//=====================================================

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

    const [greenApplyData, setGreenApplyData] = useState<any>()
    const [gerrnApplyFile, setGerrnApplyFile] = useState<any>()
    const [popupMessage, setPopupMessage] = useState<string[]>([])
    const showPopUpRef: any = useRef();

    useEffect(() => {
      // console.log("fakeDataJson", fakeDataJson)
      // const fakeData: any = fakeDataJson
      // setInitDataToForm(fakeData.data)
      // setGreenApplyData(fakeData.data)

      const email = window.hannstar?.email
      if (!email) window.location.href = urlConfig().account.login.href
      const postData = {
        type: "post",
        data: {
          cid: email,
          lang: window.hannstar?.language,
        }
      }
      postInitGreenapply(postData).then((response: any) => {
        setGreenApplyData(response.data)
        setInitDataToForm(response.data)
      });
    }, [])

    const setInitDataToForm = (response: any) => {
      console.log('response', response);
      const date = new Date();
      setValue("customer_code", response.customer_code)//客戶
      setValue("doc_no", response.issue_number)//單號
      setValue("cdt", `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)//開單日期
    }

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      const result: any = {
        ...data,
      };
      console.log("result", result);
    }

    const handlerReset = () => {
      window.location.reload()
    }

    const postData = (data: any, type: string) => {
      const postFormData = new FormData();
      const detailData: I_detailData[] = []
      data.green_code.map((code: string) => {
        detailData.push({
          doc_no: data.doc_no,
          green_code: code,
          cid: window.hannstar?.email
        })
      })
      delete data["green_code"]
      postFormData.append("data", JSON.stringify({
        type,
        data: {
          header: [
            { ...data, cid: window.hannstar?.email }
          ],
          detail: detailData
        }
      }));
      gerrnApplyFile && Object.values(gerrnApplyFile).map((file: any, idx) => {
        postFormData.append(idx.toString(), file);
      })

      // postSendGreenapply(postFormData).then((response: any) => {
      //   console.log('response', response)
      //   setPopupMessage(response.data.messages)
      //   handleShowPopup()
      // });
      fetch('/rest/V1/eService/SetGreen', {
        method: 'POST',
        body: postFormData,
      })
        .then((response) => response.json())
        .then((res) => {
          setPopupMessage(res.data.message)
        }).then(() => {
          console.log('popupMessage', popupMessage);
          handleShowPopup()
        })


    }

    const handleShowPopup = () => {
      showPopUpRef.current.classList.add("show");
    };

    const handleFileChange = (e: any) => {
      setGerrnApplyFile(e.target.files);
    };

    const handleConfirmPopUp = () => {
      showPopUpRef.current.classList.remove("show")
      handlerReset()
    };

    const popupProps = {
      content: (
        <div className={`${pageName}DeletePop`}>
          {
            popupMessage?.map(item => <div>{item}</div>)
          }
          <div className="btnBlock">
            <div className="btn" onClick={() => handleConfirmPopUp()}>
              確定
            </div>
          </div>
        </div>
      ),
      openFc: showPopUpRef,
    };

    return (
      greenApplyData ? <>
        <Popup {...popupProps} />
        <h1 className={`${pageName}H1Title`}>{formData.MainTitle}</h1>
        <div className={`${pageName}FormBlock`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`title`}>{formData.SubTitle}</div>
            <div className="classificationBlock">
              <div className="row">
                <div className="col-2">
                  <label className="">{formData.customer_code}</label>
                  <input
                    type="text"
                    disabled
                    {...register("customer_code")}
                  />
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
                  <label className="">{formData.doc_no}</label>
                  <input
                    type="text"
                    {...register("doc_no")}
                    disabled />
                </div>
                <div className="col-2">
                  <label className="">{formData.cdt}</label>
                  <input
                    type="text"
                    {...register("cdt")}
                    disabled />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label className="required">{formData.model_name}</label>
                  <input
                    type="text"
                    {...register("model_name", { required: true })}
                  />
                  {errors.model_name && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <label className="required">{formData.green_code.title}</label>
                  <div className="checkbox-col">
                    {formData.green_code.option.map((item, i) => (
                      <div className="hannstarCheckBox" key={i}>
                        <input
                          id={item.value}
                          type="checkbox"
                          value={item.value}
                          {...register("green_code", { required: true })}
                        />
                        <label htmlFor={item.value}>{item.text}</label>
                      </div>
                    ))}
                  </div>
                  {errors.green_code && (
                    <span className="error">{errorMsg}</span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <label className="required">{formData.remark}</label>
                  <textarea
                    className="companyRemark"
                    defaultValue=""
                    {...register("remark", { required: true })}
                  />
                  {errors.remark && (<span className="error">{errorMsg}</span>)}
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
              <div className="btn" onClick={handleSubmit((data) => postData(data, 'send'))}>{formData.Send}</div>
              <div className="btn" onClick={handlerReset}>{formData.Reset}</div>
            </div>
          </form>
        </div>
      </> : <Loading />
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