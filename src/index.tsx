import ReactDOM from "react-dom";
import "./style/reset.css";
import "./style/common.scss";
import Index from "./pages/index/main";
import CSRIndex from "./pages/CSR_Index/main";
import About from "./pages/about/main";
import EBiz from "./pages/e-biz/main";
import Solution from "./pages/solution/main";
import Stronghold from "./pages/stronghold/main";
import Document360Test from "./pages/document360Test/main";
import FormTest from "./pages/formTest/main";
import HannstarLogin from "./pages/Login/main";
import HannstarRegister from "./pages/Register/main";
import ForgotPassword from "./pages/ForgotPassword/main";
import ResetPassword from "./pages/ResetPassword/main";
import MFA from "./pages/MFA/main";
import MFAQRCode from "./pages/MFAQRCode/main";
import AccountPersonal from "./pages/Account_Personal/mainNew";
import AccountPartner from "./pages/Account_Partner/mainNew";
import AccountApplication from "./pages/Account_Application/main";
import AccountSendVerifyEmail from "./pages/Account_SendVerifyEmail/main";
import AccountMyAccount from "./pages/Account_MyAccount/main";
import AccountEditAccount from "./pages/Account_EditAccount/main";
import AccountMemberInfo from "./pages/Account_MemberInfo/main";
import AccountDashboard from "./pages/Account_Dashboard/main";
import AccountNewsletter from "./pages/Account_Newsletter/main";
import AccountLogout from "./pages/Account_Logout/main";
//供應商(Partner)
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
import PartnerManageandadvisory from "./pages/Partner_Manageandadvisory/main";
import PartnerTechnical from "./pages/Partner_Technical/main";
import PartnerGreenSupplyChain from "./pages/Partner_GreenSupplyChain/main";
import PartnerManufacturing from "./pages/Partner_Manufacturing/main";
//客戶服務(Service)
import ServiceIndex from "./pages/Service_Index/main";
import ServiceRMAApply from "./pages/Service_RMAApply/main";
import ServiceRMAList from "./pages/Service_RMAList/main";
import ServiceParseList from "./pages/Service_ParseList/main";
import ServiceGreenService from "./pages/Service_GreenService/main";
import ServiceCustomerSupport from "./pages/Service_CustomerSupport/main";
import ServiceParseApply from "./pages/Service_ParseApply/main";
import ServiceGreenServiceApply from "./pages/Service_GreenServiceApply/main";

import Template3Page from "./pages/Template3/main";
import urlConfig from "./config/urlSetting.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
const { hannstar, partner, service, account } = urlConfig;

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={account.login.href} element={<HannstarLogin />} />
      <Route path={account.register.href} element={<HannstarRegister />} />
      <Route path={account.forgotPassword.href} element={<ForgotPassword />} />
      <Route path={"/resetPassword"} element={<ResetPassword />} />
      <Route path={account.LoginMFA.href} element={<MFA />} />
      <Route
        path={"/AccountSendVerifyEmail"}
        element={<AccountSendVerifyEmail />}
      />
      <Route path={account.MFAQRcode.href} element={<MFAQRCode />} />
      <Route
        path={account.AccountPersonal.href}
        element={<AccountPersonal />}
      />
      <Route path={account.AccountPartner.href} element={<AccountPartner />} />
      <Route
        path={account.AccountApplication.href}
        element={<AccountApplication />}
      />
      <Route
        path={account.AccountDashboard.href}
        element={<AccountDashboard />}
      />
      <Route
        path={account.AccountLogout.href}
        element={<AccountLogout />}
      />
      <Route path={account.MemberInfo.href} element={<AccountMemberInfo />} />
      <Route path={account.EditAccount.href} element={<AccountEditAccount />} />
      <Route path={account.MyAccount.href} element={<AccountMyAccount />} />
      <Route path={account.AccountNewsletter.href} element={<AccountNewsletter />} />
      <Route path={hannstar.index.href} element={<Index />} />
      <Route path={hannstar.about.href} element={<About />} />
      <Route path={hannstar.csrIndex.href} element={<CSRIndex />} />
      <Route path={service.index.href} element={<ServiceIndex />} />
      <Route path={partner.index.href} element={<PartnerIndex />} />
      <Route path="/zh-tw/e-biz" element={<EBiz />} />
      <Route path="/zh-tw/solution" element={<Solution />} />
      <Route path="/zh-tw/stronghold" element={<Stronghold />} />
      <Route path="/document360Test" element={<Document360Test />} />
      <Route path="/formTest" element={<FormTest />} />
      <Route path="/template3" element={<Template3Page />} />
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
      <Route
        path={partner.manageandadvisory.href}
        element={<PartnerManageandadvisory />}
      />
      <Route
        path={partner.manufacturing.href}
        element={<PartnerManufacturing />}
      />
      <Route
        path={partner.greensupplychain.href}
        element={<PartnerGreenSupplyChain />}
      />
      <Route path={service.RMAApply.href} element={<ServiceRMAApply />} />
      <Route path={service.RMAList.href} element={<ServiceRMAList />} />
      <Route path={service.parseList.href} element={<ServiceParseList />} />
      <Route
        path={service.greenLawApply.href}
        element={<ServiceGreenService />}
      />
      <Route
        path={service.customer.href}
        element={<ServiceCustomerSupport />}
      />
      <Route path={service.parseApply.href} element={<ServiceParseApply />} />
      <Route
        path={service.lawApply.href}
        element={<ServiceGreenServiceApply />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
