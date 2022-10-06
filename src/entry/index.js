import React from "react";
import ReactDOM from "react-dom";
import "../style/reset.css";
import "../style/common.scss";
import Index from "../pages/index/main";
import About from "../pages/about/main";
import Eservice from "../pages/e-service/main";
import EBiz from "../pages/e-biz/main";
import Solution from "../pages/solution/main";
import Stronghold from "../pages/stronghold/main";
import Document360Test from "../pages/document360Test/main";
import FormTest from "../pages/formTest/main";
import PartnerIndex from "../pages/Partner_Index/main";
import PartnerQuotationList from "../pages/Partner_QuotationList/main";
import PartnerQuotation from "../pages/Partner_Quotation/main";
import PartnerProductList from "../pages/Partner_ProductList/main";
import PartnerProductInventory from "../pages/Partner_ProductInventory/main";
import PartnerAddProduct from "../pages/Partner_AddProduct/main";
import PartnerSolutionList from "../pages/Partner_SolutionList/main";
import PartnerSolutionInventory from "../pages/Partner_SolutionInventory/main";
import PartnerAddSolution from "../pages/Partner_AddSolution/main";
import PartnerApplication from "../pages/Partner_Application/main";
import PartnerTechnical from "../pages/Partner_Technical/main";
import EServerRMAApply from "../pages/e-server-rma-apply/main";

const pageMappingObj = {
  root_Index: <Index />,
  root_About: <About />,
  root_Eservice: <Eservice />,
  root_EBiz: <EBiz />,
  root_Solution: <Solution />,
  root_Stronghold: <Stronghold />,
  root_Document360Test: <Document360Test />,
  root_FormTest: <FormTest />,
  root_PartnerIndex: <PartnerIndex />,
  root_PartnerQuotationList: <PartnerQuotationList />,
  root_PartnerQuotation: <PartnerQuotation />,
  root_PartnerProductList: <PartnerProductList />,
  root_PartnerProductInventory: <PartnerProductInventory />,
  root_PartnerAddProduct: <PartnerAddProduct />,
  root_PartnerSolutionList: <PartnerSolutionList />,
  root_PartnerSolutionInventory: <PartnerSolutionInventory />,
  root_PartnerAddSolution: <PartnerAddSolution />,
  root_PartnerApplication: <PartnerApplication />,
  root_PartnerTechnical: <PartnerTechnical />,
  root_EServerRMAApply: <EServerRMAApply />,
};

const targetDom = Object.keys(pageMappingObj).filter((key) => document.getElementById(key) && key)[0];
ReactDOM.render(pageMappingObj[targetDom], document.getElementById(targetDom));
