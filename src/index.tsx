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
import PartnerFcpProgFcpQuotation from "./pages/partner-fcp-prog_fcp_quotation/main";
import PartnerFcpProgFcpQuotationReply from "./pages/partner-fcp-prog_fcp_quotation_reply/main";
import PartnerFcpProductFcpProductList from "./pages/partner-fcp-product_fcp_product_list/main";
import PartnerFcpProductProgFcpProductCostInventory from "./pages/partner-fcp-product-prog-fcp-product-cost-inventory/main";
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
      <Route path="/FCP/PROG_FCP_QUOTATION" element={<PartnerFcpProgFcpQuotation />} />
      <Route path="/FCP/PROG_FCP_QUOTATION_REPLY" element={<PartnerFcpProgFcpQuotationReply />} />
      <Route path="/FCP/PRODUCT/PROG_FCP_PRODUCT_LIST" element={<PartnerFcpProductFcpProductList />} />
      <Route path="/FCP/PRODUCT/PROG_FCP_PRODUCT_COST_INVENTORY" element={<PartnerFcpProductProgFcpProductCostInventory />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(<Index />, document.getElementById("root"));
