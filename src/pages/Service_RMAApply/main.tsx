import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import FormComponent from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import useApplyList  from "./pageData";
import { useTranslation } from "react-i18next";
import "./css.scss";

const ServiceRMAApply: React.FC = () => {
  const pageName = "ServiceRMAApply";
  const [tab, setTab] = useState<number>(0);
  const [trDetailArr, setTrDetailArr] = useState<number[]>([0]);
  const [trDetailCount, setTrDetailCount] = useState<number>(1);
  const [selectCount, setSelectCount] = useState<number>(1);

  const handlerSave = () => { };
  const handlerReset = () => { };
  const handlerSubmit = () => { };

  const formMethods: any = React.useRef(null);

  const BadDetailsTabBlock = () => {
    const changeTab = (index: number) => setTab(index);

    return (
      <div className={`${pageName}TabBlock`}>
        {useApplyList().tabNames.map((text, index) => (
          <div
            className={`tab ${tab === index ? "active" : ""}`}
            onClick={() => changeTab(index)}
          >
            {text}
          </div>
        ))}
      </div>
    );
  };

  const TableTrBlock = ({ index }: any) => {
    return (<tr>
      <td>
        <img alt="delete" src="https://e-service-test.hannstar.com/Content/images/trash.png" />
      </td>
      <td>{index}</td>
      <td>
        <input type="text" />
      </td>
      <td>
        <select>
          {
            useApplyList().tableSelectOption.map((item, index) =>
              <option value={item.value}>{item.text}</option>)
          }
        </select>
      </td>
      <td><input type="text" /></td>
      <td><input type="file" /></td>
    </tr>)
  }

  const SingleImportBlock: React.FC = () => {
    const handlerOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectCount(parseInt(e.target.value))
      setTrDetailCount(trDetailCount + parseInt(e.target.value))
    }

    const handlerAdd = () => {
      setTrDetailArr(Array(trDetailCount).fill(0))
    }


    return (
      <div className={`${pageName}SingleImportBlock`}>
        <div className="toolBar">
          <select value={selectCount} onChange={handlerOnChange}>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <div className="addBtn" onClick={handlerAdd}>{useApplyList().addTrBtnText}</div>
        </div>
        <table>
          <thead>
            <tr>
              <td>{useApplyList().tableHead.action}</td>
              <td>{useApplyList().tableHead.index}</td>
              <td>{useApplyList().tableHead.hannstarNo}</td>
              <td>{useApplyList().tableHead.warranty}</td>
              <td>{useApplyList().tableHead.badType}</td>
              <td>{useApplyList().tableHead.img}</td>
            </tr>
          </thead>
          <tbody>
            {trDetailArr
              .map((item, index) => {
                console.log('trDetailCounttrDetailCount', trDetailCount);
                return <TableTrBlock index={index + 1} />
              })}
          </tbody>
        </table>
      </div>
    )
  }

  const BatchImportBlock = () => {
    return (
      <div className={`${pageName}BatchImportBlock`}>
        <div className="stepTitle">{useApplyList().batchImportText.title1}</div>
        <a href="/" className="text">{useApplyList().batchImportText.text1}</a>
        <input type="file" />
        <div className="stepTitle">{useApplyList().batchImportText.title2}</div>
        <div className="noteText">{useApplyList().batchImportText.noteText2}</div>
        <a href="/" className="text">{useApplyList().batchImportText.text2}</a>
        <input type="file" />
      </div>
    )
  }

  const handleTabContentObj: any = {
    "0": <SingleImportBlock />,
    "1": <BatchImportBlock />,
  };

  const FormBlock = () => {
    return (
      <>
        <h1 className={`${pageName}H1Title`}>{useApplyList().pageTitle}</h1>
        <div className={`${pageName}FormBlock`}>
          <div className={`${pageName}Title`}>{useApplyList().formTitle}</div>
          <div className={`${pageName}ContentBlock`}>
            <FormComponent {...formData} />
            <div className="badDetailsTitle">{useApplyList().badDetailsTitle}</div>
            <BadDetailsTabBlock />
            {handleTabContentObj[tab]}
          </div>
          <div className={`${pageName}UploadBlock`}></div>
          <div className={`${pageName}BtnBlock`}>
            <div className="btn" onClick={handlerSave}>
              {useApplyList().saveBtn}
            </div>
            <div className="btn" onClick={handlerReset}>
              {useApplyList().resetBtn}
            </div>
            <div className="btn" onClick={handlerSubmit}>
              {useApplyList().sendBtn}
            </div>
          </div>
        </div>
      </>
    );
  };

  const formData = {
    formMethods,
    formData: useApplyList().formData,
  };

  return (
    <Layout>
      <Columns type={ColType.OneCol} content={
        <>
          <Breadcrumbs {...useApplyList().breadcrumbs} />
          <FormBlock />
        </>
      } />
    </Layout>
  );
};

export default ServiceRMAApply;
