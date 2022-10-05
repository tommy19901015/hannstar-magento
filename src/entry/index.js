import React from "react";
import ReactDOM from "react-dom";
import "../style/reset.css";
import "../style/common.scss";
import Index from "../pages/index/main";
import About from "../pages/about/main";
import Eservice from "../pages/e-service/main";
import Partner from "../pages/partner/main";
import EBiz from "../pages/e-biz/main";
import Solution from "../pages/solution/main";
import Stronghold from "../pages/stronghold/main";
import Document360Test from "../pages/document360Test/main";
import FormTest from "../pages/formTest/main";
import PartnerQuotationList from "../pages/partner-quotation-list/main";
import PartnerOnlineQuotation from "../pages/partner-online-quotation/main";
import PartnerProductList from "../pages/partner-product-list/main";
import PartnerProductInventory from "../pages/partner-product-inventory/main";
import PartnerProductProduct from "../pages/partner-product-product/main";
import PartnerSolutionList from "../pages/partner-solution-list/main";
import PartnerSolutionInventory from "../pages/partner-solution-inventory/main";
import PartnerSolutionProduct from "../pages/partner-solution-product/main";
import PartnerPurchaseRequest from "../pages/partner-purchase-request/main";
import PartnerTechnicalCooperation from "../pages/partner-technical-cooperation/main";
import EServerRMAApply from "../pages/e-server-rma-apply/main";

const arr = {
  root_Index: <Index />,
  root_About: <About />,
  root_Eservice: <Eservice />,
  root_Partner: <Partner />,
  root_EBiz: <EBiz />,
  root_Solution: <Solution />,
  root_Stronghold: <Stronghold />,
  root_Document360Test: <Document360Test />,
  root_FormTest: <FormTest />,
  root_PartnerQuotationList: <PartnerQuotationList />,
  root_PartnerOnlineQuotation: <PartnerOnlineQuotation />,
  root_PartnerProductList: <PartnerProductList />,
  root_PartnerProductInventory: <PartnerProductInventory />,
  root_PartnerProductProduct: <PartnerProductProduct />,
  root_PartnerSolutionList: <PartnerSolutionList />,
  root_PartnerSolutionInventory: <PartnerSolutionInventory />,
  root_PartnerSolutionProduct: <PartnerSolutionProduct />,
  root_PartnerPurchaseRequest: <PartnerPurchaseRequest />,
  root_PartnerTechnicalCooperation: <PartnerTechnicalCooperation />,
  root_EServerRMAApply: <EServerRMAApply />,
};
let dom;
Object.keys(arr).map((key) => {
  if (document.getElementById(key)) {
    dom = key    
  }
});

ReactDOM.render(arr[dom], document.getElementById(dom));
