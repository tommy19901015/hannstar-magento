import React from "react";
import ReactDOM from "react-dom";
import "./style/reset.css";
import "./style/common.scss";
import Index from "./pages/index/main";
import About from "./pages/about/main";
import Eservice from "./pages/e-service/main";
import Partner from "./pages/partner/main";
import EBiz from "./pages/e-biz/main";
import Solution from "./pages/solution/main";
import Stronghold from "./pages/stronghold/main";
import Document360Test from "./pages/document360Test/main";
import FormTest from "./pages/formTest/main";
import PartnerQuotationList from "./pages/partner-quotation-list/main";
import PartnerOnlineQuotation from "./pages/partner-online-quotation/main";
import PartnerProductList from "./pages/partner-product-list/main";
import PartnerProductInventory from "./pages/partner-product-inventory/main";
import PartnerProductProduct from "./pages/partner-product-product/main";
import PartnerSolutionList from "./pages/partner-solution-list/main";
import PartnerSolutionInventory from "./pages/partner-solution-inventory/main";
import PartnerSolutionProduct from "./pages/partner-solution-product/main";
import PartnerPurchaseRequest from "./pages/partner-purchase-request/main";
import PartnerTechnicalCooperation from "./pages/partner-technical-cooperation/main";
import EServerRMAApply from "./pages/e-server-rma-apply/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/zh-tw/about" element={<About />} />
      <Route path="/zh-tw/e-service" element={<Eservice />} />
      <Route path="/zh-tw/partner" element={<Partner />} />
      <Route path="/zh-tw/e-biz" element={<EBiz />} />
      <Route path="/zh-tw/solution" element={<Solution />} />
      <Route path="/zh-tw/stronghold" element={<Stronghold />} />
      <Route path="/document360Test" element={<Document360Test />} />
      <Route path="/formTest" element={<FormTest />} />
      <Route
        path="/zh-tw/partner/quotation"
        element={<PartnerQuotationList />}
      />
      <Route
        path="/zh-tw/partner/FCP/reply"
        element={<PartnerOnlineQuotation />}
      />
      <Route
        path="/zh-tw/partner/productlist"
        element={<PartnerProductList />}
      />
      <Route
        path="/zh-tw/partner/inventory"
        element={<PartnerProductInventory />}
      />
      <Route
        path="/zh-tw/partner/product"
        element={<PartnerProductProduct />}
      />
      <Route
        path="/zh-tw/partner/solution/productlist"
        element={<PartnerSolutionList />}
      />
      <Route
        path="/zh-tw/partner/solution/inventory"
        element={<PartnerSolutionInventory />}
      />
      <Route
        path="/zh-tw/partner/solution/product"
        element={<PartnerSolutionProduct />}
      />
      <Route
        path="/zh-tw/partner/purchase"
        element={<PartnerPurchaseRequest />}
      />
      <Route
        path="/zh-tw/partner/technical"
        element={<PartnerTechnicalCooperation />}
      />
      <Route path="/zh-tw/e-server/rma-apply" element={<EServerRMAApply />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(<Index />, document.getElementById("root"));
