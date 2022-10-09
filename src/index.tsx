import ReactDOM from "react-dom";
import "./style/reset.css";
import "./style/common.scss";
import Index from "./pages/index/main";
import About from "./pages/about/main";
import Eservice from "./pages/e-service/main";
import EBiz from "./pages/e-biz/main";
import Solution from "./pages/solution/main";
import Stronghold from "./pages/stronghold/main";
import Document360Test from "./pages/document360Test/main";
import FormTest from "./pages/formTest/main";
import PartnerIndex from "./pages/Partner_Index/main";
import PartnerQuotationList from "./pages/Partner_QuotationList/main";
import PartnerQuotation from "./pages/Partner_Quotation/main";
import PartnerProductList from "./pages/Partner_ProductList/main";
import PartnerProductInventory from "./pages/Partner_ProductInventory/main";
import PartnerAddProduct from "./pages/Partner_AddProduct/main";
import PartnerSolutionList from "./pages/Partner_SolutionList/main";
import PartnerSolutionInventory from "./pages/Partner_SolutionInventory/main";
import PartnerAddSolution from "./pages/Partner_AddSolution/main";
import PartnerApplication from "./pages/Partner_Application/main";
import PartnerTechnical from "./pages/Partner_Technical/main";
import EServerRMAApply from "./pages/e-server-rma-apply/main";
import EServiceRMAList from "./pages/EService_RMAList/main";
import EServiceParseList from "./pages/EService_parseList/main";
import urlConfig from "./config/urlSetting.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
const { hannstar, partner } = urlConfig;

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={hannstar.index.href} element={<Index />} />
      <Route path={hannstar.about.href} element={<About />} />
      <Route path="/zh-tw/e-service" element={<Eservice />} />
      <Route path={partner.index.href} element={<PartnerIndex />} />
      <Route path="/zh-tw/e-biz" element={<EBiz />} />
      <Route path="/zh-tw/solution" element={<Solution />} />
      <Route path="/zh-tw/stronghold" element={<Stronghold />} />
      <Route path="/document360Test" element={<Document360Test />} />
      <Route path="/formTest" element={<FormTest />} />
      <Route
        path={partner.quotationList.href}
        element={<PartnerQuotationList />}
      />
      <Route path={partner.quotation.href} element={<PartnerQuotation />} />
      <Route path={partner.productList.href} element={<PartnerProductList />} />
      <Route
        path={partner.productInventory.href}
        element={<PartnerProductInventory />}
      />
      <Route path={partner.addProduct.href} element={<PartnerAddProduct />} />
      <Route
        path={partner.solutionList.href}
        element={<PartnerSolutionList />}
      />
      <Route
        path={partner.solutionInventory.href}
        element={<PartnerSolutionInventory />}
      />
      <Route path={partner.addSolution.href} element={<PartnerAddSolution />} />
      <Route path={partner.application.href} element={<PartnerApplication />} />
      <Route path={partner.technical.href} element={<PartnerTechnical />} />
      <Route path="/zh-tw/e-server/rma-apply" element={<EServerRMAApply />} />
      <Route path="/zh-tw/e-service/rma-list" element={<EServiceRMAList />} />
      <Route
        path="/zh-tw/e-service/parse-list"
        element={<EServiceParseList />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
