import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Form from "../../component/form/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { I_Props, FormType } from "../../component/form/interface";
import ReactPaginate from 'react-paginate';
import testTableData from "./testTableData.json"
import "./css.scss";

const PartnerFcpProductFcpProductList: React.FC = () => {
  const pageName = "partner-fcp-product_fcp_product_list";

  const fakeData: any = testTableData

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

  const FilterStateBlock = () => {
    return (<div className="filterStateBlock">
      <div>所有產品</div>
      <div>審核中</div>
      <div>未通過審核</div>
      <div>草稿區</div>
    </div>)
  }

  const FormTopBlock = () => {
    return (
      <div className="formTopBlock">
        <div className="title">產品清單</div>
        <div className="searchBlock">
          <input type="text" placeholder="Search" />
          <div className="searchBtn">查詢</div>
        </div>

      </div>
    )
  }

  interface I_Table {
    state: string
    productNo: string
    HSDNo: string
    size: string
    resolution: string
    auditState: string
    detailSpecs: string
    productPhoto: string
    productData: string
    fontState: string
    date: string
  }

  const ContentBlock = () => {
    return (
      <div className={`${pageName}ContentBlock`}>
        <div className="topBlock">
          <UserInfoBlock {...userInfoData} />
          <ProductCountInfoBlock {...productCountInfoData} />
        </div>
        <ProductToolBar />
        <FormTopBlock />
        <FilterStateBlock />
        <PaginatedForm itemsPerPage={10} />
      </div>
    )
  }

  //-------------------------------------------

  const FormBlock = ({ currentItems }: any) => {
    return (
      <table className="productListTable">
        <thead>
          <tr>
            <td>外包型號</td>
            <td>HSD型號</td>
            <td>吋別</td>
            <td>解析度</td>
            <td>審核狀態</td>
            <td>詳細規格</td>
            <td>產品照片</td>
            <td>產品資料</td>
            <td>前台狀態</td>
            <td>建立日期</td>
          </tr>
        </thead>
        <tbody>
          {currentItems && currentItems.map((item: any) => (
            <tr>
              <td>{item.productNo}</td>
              <td>{item.HSDNo}</td>
              <td>{item.size}</td>
              <td>{item.resolution}</td>
              <td>{item.auditState}</td>
              <td>{item.detailSpecs}</td>
              <td>{item.productPhoto}</td>
              <td>{item.productData}</td>
              <td>{item.fontState}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const PaginatedForm = ({ itemsPerPage }: any) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(fakeData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(fakeData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % fakeData.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <div className="paginatedForm">
        <FormBlock currentItems={currentItems} />
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel=""
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="pagePrevious"
          previousLinkClassName="page-link"
          nextClassName="pageNext"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    );
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
}

export default PartnerFcpProductFcpProductList;
