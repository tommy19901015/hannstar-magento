import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { pageData } from "./pageData";
import "./css.scss";
import Popup from "../../component/popup/main";

const ServiceParseApply: React.FC = () => {
  const pageName = "ServiceParseApply";
  const [formErrorObj, setFormErrorObj] = useState([])
  const formMethods: any = React.useRef(null);
  const popUpRef: any = useRef();


  const handlerSave = () => {
    handlerFormError()
  };

  const handlerFormError = () => {
    const formValuesObj = formMethods.current.getValues();
    const errorObj = formMethods.current.getErrorsData(pageData().formData, formValuesObj);
    console.log('errorObj', errorObj);
    if (errorObj.length === 0) {
      return <></>
    } else {
      setFormErrorObj(errorObj)
      // formErrorMessage(errorObj)
      popUpRef.current.classList.add("show");
    }
  }


  const formErrorMessage = (errorObj: any) => {
    return (<div>
      {errorObj.map((item: any, index: number) => <div>{item.title}為必填</div>)}
    </div>)
  }



  const popupProps = {
    content: formErrorMessage(formErrorObj),
    openFc: popUpRef,
  }

  const handlerReset = () => { };
  const handlerSubmit = () => {
    // const test = formMethods.current.getValues();
    // console.log('test', test);
    // console.log('errors', errors);
  };

  const FormBlock = () => {
    return (
      <>
        <h1 className={`${pageName}H1Title`}>{pageData().pageTitle}</h1>
        <div className={`${pageName}FormBlock`}>
          <div className={`${pageName}Title`}>{pageData().formTitle}</div>
          <div className={`${pageName}ContentBlock`}>
            <FormComponent data={formData} />
            <div className="fileBlock">
              <div className="title">{pageData().uploadTitle}</div>
              <input type="file" />
            </div>
          </div>
          <div className={`${pageName}UploadBlock`}></div>
          <div className={`${pageName}BtnBlock`}>
            <div className="btn" onClick={handlerSave}>
              {pageData().saveBtn}
            </div>
            <div className="btn" onClick={handlerReset}>
              {pageData().resetBtn}
            </div>
            <div className="btn" onClick={handlerSubmit}>
              {pageData().sendBtn}
            </div>
          </div>
        </div>
      </>
    );
  };

  const formData = {
    formMethods,
    formData: pageData().formData,
  };

  return (
    <Layout>
      <Columns type={ColType.OneCol} content={
        <>
          <Breadcrumbs {...pageData().breadcrumbs} />
          <FormBlock />
        </>
      } />
      <Popup {...popupProps} />
    </Layout>
  );
};

export default ServiceParseApply;
