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
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/e-service" element={<Eservice />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/e-biz" element={<EBiz />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/stronghold" element={<Stronghold />} />
      <Route path="/document360Test" element={<Document360Test />} />
      <Route path="/formTest" element={<FormTest />} />
      <Route
        path="/FCP/PROG_FCP_QUOTATION"
        element={<PartnerQuotationList />}
      />
      <Route
        path="/FCP/PROG_FCP_QUOTATION_REPLY"
        element={<PartnerOnlineQuotation />}
      />
      <Route
        path="/FCP/PRODUCT/PROG_FCP_PRODUCT_LIST"
        element={<PartnerProductList />}
      />
      <Route
        path="/FCP/PRODUCT/PROG_FCP_PRODUCT_COST_INVENTORY"
        element={<PartnerProductInventory />}
      />
      <Route
        path="/FCP/PRODUCT/PROG_FCP_NEW_PRODUCT"
        element={<PartnerProductProduct />}
      />
      <Route
        path="/FCP/SOLUTION/PROG_FCP_PRODUCT_LIST"
        element={<PartnerSolutionList />}
      />
      <Route
        path="/FCP/SOLUTION/PROG_FCP_PRODUCT_COST_INVENTORY"
        element={<PartnerSolutionInventory />}
      />
      <Route
        path="/FCP/SOLUTION/PROG_FCP_NEW_SOLUTION"
        element={<PartnerSolutionProduct />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(<Index />, document.getElementById("root"));
