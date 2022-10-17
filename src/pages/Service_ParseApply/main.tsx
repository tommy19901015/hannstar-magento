import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { pageData } from "./pageData";
import "./css.scss";

const ServiceParseApply: React.FC = () => {
  const pageName = "ServiceParseApply";
  const formMethods: any = React.useRef(null);

  const handlerSave = () => {
    // const test = formMethods.current.getValues();

    console.log(formMethods.current.getFieldState('fff'));
    // const test = formMethods.current

    // console.log('test', test);
  };
  const handlerReset = () => { };
  const handlerSubmit = () => {
    const test = formMethods.current.getValues();
    console.log('test', test);
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
    </Layout>
  );
};

export default ServiceParseApply;
