import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";

import "./css.scss";


const PartnerFcpProductProgFcpProductCostInventory: React.FC = () => {
  const pageName = "partner-fcp-product-prog-fcp-product-cost-inventory";

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "供應商協同合作",
        href: "",
      },
      {
        text: "協同製造夥伴",
        href: "",
      },
      {
        text: "製造夥伴資料",
        href: "",
      },
      {
        text: "價格庫存管理",
        href: "",
      },
    ],
  };

  const ContentBlock = () => {
    const handlerUploadPrice = () => { }
    const handlerUploadStock = () => { }


    return (
      <div className={`${pageName}ContentBlock`}>
        <div className="topBlock">
          <div className="mainTitle">價格管理</div>
          <div className="contentBlock">
            <div className="leftBlock">
              <div className="title">匯出作業</div>
              <div className="downloadBtn">下載現行價格</div>
            </div>
            <div className="rightBlock">
              <div className="title">匯入作業</div>
              <div className="uploadBtn">上傳價格</div>
              <input className="uploadInput" type="file" name="file" onChange={handlerUploadPrice} />
            </div>
          </div>
        </div>
        <div className="bottomBlock">
          <div className="mainTitle">庫存管理</div>
          <div className="contentBlock"><div className="leftBlock">
            <div className="title">庫存管理</div>
            <div className="downloadBtn">下載現行庫存</div>
          </div>
            <div className="rightBlock">
              <div className="title">匯入作業</div>
              <div className="uploadBtn">上傳庫存</div>
              <input className="uploadInput" type="file" name="file" onChange={handlerUploadStock} />
            </div></div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Breadcrumbs data={breadcrumbsData} />
      <ContentBlock />
    </Layout>
  );
};

export default PartnerFcpProductProgFcpProductCostInventory;
