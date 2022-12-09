import ReactDOM from "react-dom";
import "./style/reset.css";
import "./style/common.scss";
import Index from "./pages/Index/main";
import EBiz from "./pages/e-biz/main";
import Solution from "./pages/solution/main";
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
//關於瀚宇彩晶
import AboutIndex from "./pages/About_Index/main";
import AboutStronghold from "./pages/About_Stronghold/main";
import AboutFamily from "./pages/About_Family/main";
import AboutCertification from "./pages/About_Certification/main";
import AboutTeam from "./pages/About_Team/main";
import AboutStrategy from "./pages/About_Strategy/main";
//企業永續
import SustainabilityIndex from "./pages/Sustainability_Index/main";
import SustainabilityGovernance from "./pages/Sustainability_Governance/main";
import SustainabilityEnvironment from "./pages/Sustainability_Environment/main";
import SustainabilitySocial from "./pages/Sustainability_Social/main";
import SustainabilityReport from "./pages/Sustainability_Report/main";
import SustainabilityESG from "./pages/Sustainability_ESG/main";
import SustainabilityCSR from "./pages/Sustainability_CSR/main";
import SustainabilityArticle from "./pages/Sustainability_Article/main";
//投資人專區
import InvestorsSummary from "./pages/Investors_Summary/main";
import InvestorsConference from "./pages/Investors_Conference/main";
import InvestorsDividend from "./pages/Investors_Dividend/main";
import InvestorsRevenue from "./pages/Investors_Revenue/main";
import InvestorsShareholdermeeting from "./pages/Investors_Shareholdermeeting/main";
import InvestorsReport from "./pages/Investors_Report/main";
import InvestorsContacts from "./pages/Investors_Contacts/main";
//人才招募
import CareersDetailWork from "./pages/CareersDetail_Work/main";
import CareersDetailJoin from "./pages/CareersDetail_Join/main";
import CareersDetailIndex from "./pages/CareersDetail_Index/main";
import CareersDetailGrowup from "./pages/CareersDetail_Growup/main";
//TFT
import TFTIndex from "./pages/TFT_Index/main";
import TFTPreferredProduct from "./pages/TFT_PreferredProduct/main";
//PaperDisplay
import PaperDisplayIndex from "./pages/PaperDisplay_Index/main";
import PaperDisplayTechnology from "./pages/PaperDisplay_Technology/main";
import PaperDisplayIntroduce from "./pages/PaperDisplay_Introduce/main";
//Hannspree
import HannspreeIndex from "./pages/Hannspree_Iindex/main";
import HannspreeSolve from "./pages/Hannspree_Solve/main";
import HannspreeCustom from "./pages/Hannspree_Custom/main";
//方案
import SolutionLabel from "./pages/Solution_Label/main";
import SolutionIndex from "./pages/Solution_Index/main";
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
import PartnerTechnical from "./pages/Partner_Technical/newMain";
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
import ServiceGreenServiceApply from "./pages/Service_GreenServiceApply/newMain";
import ServiceTechnicalSupport from "./pages/Service_TechnicalSupport/main";
import ServiceArticle from "./pages/Service_Article/main"
//Magento 原生頁面
import MagentoProductCompare from "./pages/Magento_ProductCompare/main";
import MagentoProductDetails from "./pages/Magento_ProductDetails/main";

import { urlConfig } from "./config/urlSetting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";

import NewsFinancial from "./pages/News_Financial/main";
import ServiceGreenManagement from "./pages/Service_GreenManagement/main";
import ServiceGreenProductPolicy from "./pages/Service_GreenProductPolicy/main";

const {
  hannstar,
  partner,
  service,
  account,
  tftdisplay,
  paperdisplay,
  solution,
  hannspree,
} = urlConfig();

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
      <Route path={account.AccountLogout.href} element={<AccountLogout />} />
      <Route path={account.MemberInfo.href} element={<AccountMemberInfo />} />
      <Route path={account.EditAccount.href} element={<AccountEditAccount />} />
      <Route path={account.MyAccount.href} element={<AccountMyAccount />} />
      <Route
        path={account.AccountNewsletter.href}
        element={<AccountNewsletter />}
      />
      {/* <Route path={hannstar.index.href} element={<OddIndex />} /> */}
      <Route path={hannstar.index.href} element={<Index />} />
      <Route path={service.index.href} element={<ServiceIndex />} />
      <Route path={partner.index.href} element={<PartnerIndex />} />
      <Route path="/e-biz" element={<EBiz />} />
      <Route path="/solution" element={<Solution />} />
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
      <Route
        path={hannstar.sustainability_index.href}
        element={<SustainabilityIndex />}
      />
      <Route
        path={hannstar.sustainability_csr.href}
        element={<SustainabilityCSR />}
      />
      <Route
        path={hannstar.sustainability_governance.href}
        element={<SustainabilityGovernance />}
      />
      <Route
        path={hannstar.sustainability_environment.href}
        element={<SustainabilityEnvironment />}
      />
      <Route
        path={hannstar.sustainability_social.href}
        element={<SustainabilitySocial />}
      />
      <Route
        path={hannstar.sustainability_report.href}
        element={<SustainabilityReport />}
      />
      <Route
        path={hannstar.sustainability_esg.href}
        element={<SustainabilityESG />}
      />
      <Route
        path={hannstar.sustainability_article.href}
        element={<SustainabilityArticle />}
      />
      {/* 關於瀚宇彩晶 */}
      <Route path={hannstar.about_index.href} element={<AboutIndex />} />
      <Route
        path={hannstar.about_stronghold.href}
        element={<AboutStronghold />}
      />
      <Route path={hannstar.about_family.href} element={<AboutFamily />} />
      <Route
        path={hannstar.about_certification.href}
        element={<AboutCertification />}
      />
      <Route path={hannstar.about_team.href} element={<AboutTeam />} />
      <Route path={hannstar.about_strategy.href} element={<AboutStrategy />} />
      {/* 投資人專區 */}
      <Route
        path={hannstar.investors_Summary.href}
        element={<InvestorsSummary />}
      />
      <Route
        path={hannstar.investors_Revenue.href}
        element={<InvestorsRevenue />}
      />
      <Route
        path={hannstar.investors_Report.href}
        element={<InvestorsReport />}
      />
      <Route
        path={hannstar.investors_Conference.href}
        element={<InvestorsConference />}
      />
      <Route
        path={hannstar.investors_Shareholdermeeting.href}
        element={<InvestorsShareholdermeeting />}
      />
      <Route
        path={hannstar.investors_Dividend.href}
        element={<InvestorsDividend />}
      />
      <Route
        path={hannstar.investors_Contacts.href}
        element={<InvestorsContacts />}
      />

      {/* 人資專區 */}
      <Route
        path={hannstar.careersDetail_Work.href}
        element={<CareersDetailWork />}
      />
      <Route
        path={hannstar.careersDetail_Join.href}
        element={<CareersDetailJoin />}
      />
      <Route
        path={hannstar.careersDetail_Index.href}
        element={<CareersDetailIndex />}
      />
      <Route
        path={hannstar.careersDetail_Growup.href}
        element={<CareersDetailGrowup />}
      />
      <Route path={solution.label.href} element={<SolutionLabel />} />
      <Route path={solution.index.href} element={<SolutionIndex />} />
      <Route path={tftdisplay.index.href} element={<TFTIndex />} />
      <Route path={paperdisplay.index.href} element={<PaperDisplayIndex />} />
      <Route
        path={paperdisplay.technology.href}
        element={<PaperDisplayTechnology />}
      />
      <Route
        path={paperdisplay.introduce.href}
        element={<PaperDisplayIntroduce />}
      />
      <Route path={hannspree.index.href} element={<HannspreeIndex />} />
      <Route path={hannspree.solve.href} element={<HannspreeSolve />} />
      <Route path={hannspree.custom.href} element={<HannspreeCustom />} />

      <Route path={hannstar.news_financial.href} element={<NewsFinancial />} />

      <Route path={"/news/serviceGreenManagement"} element={<ServiceGreenManagement />} />
      <Route path={"/news/serviceGreenProductPolicy"} element={<ServiceGreenProductPolicy />} />
      <Route path={"/tftdisplay/PreferredProduct/ProductList"} element={<TFTPreferredProduct />} />
      <Route path={"/MagentoProductDetails"} element={<MagentoProductDetails />} />
      <Route path={"/MagentoProductCompare"} element={<MagentoProductCompare />} />
      <Route path={service.technicalSupport.href} element={<ServiceTechnicalSupport />} />
      <Route path={service.article.href} element={<ServiceArticle />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
