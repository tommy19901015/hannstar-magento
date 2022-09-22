import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Form from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_Props, FormType } from "../../component/form/interface";
import "./css.scss";

const PartnerFcpProductFcpProductList: React.FC = () => {
  const pageName = "partner-fcp-product_fcp_product_list";

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
        text: "產品清單",
        href: "",
      }
    ]
  }

  interface I_UserInfo {
    name: string
    email: string
  }

  const userInfoData = {
    name: "pdmo01",
    email: "pdmo01@hannstar.com"
  }

  const UserInfoBlock: React.FC<I_UserInfo> = ({ name, email }) => {
    return (<div className="userInfoBlock">
      <div className="imgBlock">
        <img alt="" src="https://partner-test.hannstar.com/images/fcp/vendor.png" />
      </div>
      <div className="infoBlock">
        <div className="name">{`${name}，您好!`}</div>
        <div className="email">{`廠商帳戶: ${email}`}</div>
      </div>
    </div>)
  }

  const productCountInfoData = {
    total: "21",
    productOn: "2",
    productOff: "19",
  }

  interface I_ProductCountInfo {
    total: string
    productOn: string
    productOff: string
  }

  const ProductCountInfoBlock: React.FC<I_ProductCountInfo> = ({ total, productOn, productOff }) => {
    return (<div className="productCountInfoBlock">
      <div className="block">
        <div className="title">總產品數量</div>
        <div className="count total">{total}</div>
      </div>
      <div className="block">
        <div className="title">未上架數量</div>
        <div className="count productOff">{productOff}</div>
      </div>
      <div className="block">
        <div className="title">已上架數量</div>
        <div className="count productOn">{productOn}</div>
      </div>
    </div>)
  }

  const ProductToolBar = () => {
    return (<div className="productToolBar">
      <div className="leftBlock">
        <div className="linkBtn">產品清單</div>
        <div className="linkBtn">價格及庫存管理</div>
        <div className="linkBtn">新增產品</div>
      </div>
      <div className="rightBlock">
        <select>
          <option>下載使用手冊</option>
          <option>平台操作手冊</option>
          <option>產品標籤手冊</option>
        </select>
      </div>
    </div>)
  }

  const FormContent = () => {
    return (
      <div>
        <div>產品清單</div>
        <div>
          <input type="text" placeholder="Search" />
          <div className="searchBtn">查詢</div>
        </div>

      </div>
    )
  }

  const ContentBlock = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <div className="topBlock">
          <UserInfoBlock {...userInfoData} />
          <ProductCountInfoBlock {...productCountInfoData} />
        </div>
        <ProductToolBar />
      </div>
    )
  }



  return (
    <Layout>
      <Breadcrumbs data={breadcrumbsData} />
      <Columns
        type={ColType.OneCol}
        content={<ContentBlock />}
      />
    </Layout>
  );
};

export default PartnerFcpProductFcpProductList;
