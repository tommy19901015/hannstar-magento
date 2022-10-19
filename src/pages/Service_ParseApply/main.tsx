import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { pageData } from "./pageData";
import "./css.scss";
import Popup from "../../component/popup/main";
import { I_FormData, I_FormProps } from "@component/form/interface";

const ServiceParseApply: React.FC = () => {
  const pageName = "ServiceParseApply";
  const formMethods: any = React.useRef(null);
  const savePopUpRef: any = useRef();
  const submitPopUpRef: any = useRef();
  const resetPopUpRef: any = useRef();

  const FormErrorMessage = ({ errorMessage }: { errorMessage: I_FormData[] }) => {
    return (<div className={`${pageName}FormErrorMessageBlock`}>
      {errorMessage.map((item, index) =>
        <div className={`${pageName}ErrorList`} key={index}>{item.title}為必填</div>)}
    </div>)
  }

  const SubmitBtn = () => {
    const [errorMessage, setErrorMessage] = useState([])

    const popupProps = {
      content: <FormErrorMessage errorMessage={errorMessage} />,
      openFc: submitPopUpRef,
    }

    const handlerSubmit = () => {
      const formErrorInfo = formMethods.current
        .getFormErrorInfo(pageData().formData,
          formMethods.current.getValues());

      if (formErrorInfo.isError) {
        setErrorMessage(formErrorInfo.errorFilds)
        submitPopUpRef.current.classList.add("show");
      }
    };

    return (<>
      <div className="btn" onClick={handlerSubmit}>
        {pageData().sendBtn}
      </div>
      <Popup {...popupProps} />
    </>)
  }

  const SaveBtn = () => {
    const popupProps = {
      content: <div className={`${pageName}SavePop`}>儲存成功</div>,
      openFc: savePopUpRef,
    }

    const handlerSave = () => {
      savePopUpRef.current.classList.add("show");
    };

    return (<>
      <div className="btn" onClick={handlerSave}>
        {pageData().saveBtn}
      </div>
      <Popup {...popupProps} />
    </>)
  }


  const FormBlock = () => {
    const formData = {
      formMethods,
      formData: pageData().formData,
    };

    const [formProps, setFormProps] = useState<I_FormProps>(formData)

    const handlerPopConfirm = () => {
      setFormProps({
        formMethods,
        formData: pageData().formData,
      })
      resetPopUpRef.current.classList.remove("show");
    }

    const handlerPopCancel = () => {
      resetPopUpRef.current.classList.remove("show");
    }

    const ResetBtn = () => {
      const popupProps = {
        content: <div className={`${pageName}SavePop`}>
          <div>是否確定?</div>
          <div onClick={handlerPopConfirm}>確定</div>
          <div onClick={handlerPopCancel}>取消</div>
        </div>,
        openFc: resetPopUpRef,
      }

      const handlerReset = () => {
        resetPopUpRef.current.classList.add("show");
      };

      return (<>
        <div className="btn" onClick={handlerReset}>
          {pageData().resetBtn}
        </div>
        <Popup {...popupProps} />
      </>)
    }

    return (
      <>
        <h1 className={`${pageName}H1Title`}>{pageData().pageTitle}</h1>
        <div className={`${pageName}FormBlock`}>
          <div className={`${pageName}Title`}>{pageData().formTitle}</div>
          <div className={`${pageName}ContentBlock`}>
            <FormComponent {...formProps} />
            <div className="fileBlock">
              <div className="title">{pageData().uploadTitle}</div>
              <input type="file" />
            </div>
          </div>
          <div className={`${pageName}UploadBlock`}></div>
          <div className={`${pageName}BtnBlock`}>
            <SaveBtn />
            <ResetBtn />
            <SubmitBtn />
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout>
      <Columns type={ColType.OneCol} content={
        <>
          <Breadcrumbs {...pageData().breadcrumbs} />
          <FormBlock />
        </>
      } />
    </Layout>
  );
};

export default ServiceParseApply;
