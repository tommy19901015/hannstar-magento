import React from "react";
import ReactDOM from "react-dom";
import "../style/reset.css";
import "../style/common.scss";
import Login from "../pages/Login/main";
import Index from "../pages/index/main";
import HannstarRegister from "../pages/Register/main";
import AccountPersonal from "../pages/Account_Personal/mainNew";
import AccountPartner from "../pages/Account_Partner/mainNew";
import AccountApplication from "../pages/Account_Application/main";
import AccountSendVerifyEmail from "../pages/Account_SendVerifyEmail/main";
import AccountMyAccount from "../pages/Account_MyAccount/main";
import AccountEditAccount from "../pages/Account_EditAccount/main";
import AccountMemberInfo from "../pages/Account_MemberInfo/main";
import AccountDashboard from "../pages/Account_Dashboard/main";
import AccountNewsletter from "../pages/Account_Newsletter/main";
import AccountLogout from "../pages/Account_Logout/main";
import MFAQRCode from "../pages/MFAQRCode/main";
import MFA from "../pages/MFA/main";
import ForgotPassword from "../pages/ForgotPassword/main";
import ResetPassword from "../pages/ResetPassword/main";
import EBiz from "../pages/e-biz/main";
import Solution from "../pages/solution/main";
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
import PartnerManageandadvisory from "../pages/Partner_Manageandadvisory/main";
import PartnerTechnical from "../pages/Partner_Technical/main";
import PartnerGreenSupplyChain from "../pages/Partner_GreenSupplyChain/main";
import PartnerManufacturing from "../pages/Partner_Manufacturing/main";
import ServiceIndex from "../pages/Service_Index/main";
import ServiceRMAApply from "../pages/Service_RMAApply/main";
import ServiceRMAList from "../pages/Service_RMAList/main";
import ServiceParseList from "../pages/Service_ParseList/main";
import ServiceGreenService from "../pages/Service_GreenService/main";
import ServiceCustomerSupport from "../pages/Service_CustomerSupport/main";
import ServiceParseApply from "../pages/Service_ParseApply/main";
import ServiceGreenServiceApply from "../pages/Service_GreenServiceApply/main";
//關於瀚宇彩晶
import AboutIndex from "../pages/About_Index/main";
import AboutStronghold from "../pages/About_Stronghold/main";
import AboutFamily from "../pages/About_Family/main";
import AboutTeam from "../pages/About_Team/main";
import AboutCertification from "../pages/About_Certification/main";
//投資人專區
import InvestorsSummary from "../pages/Investors_Summary/main";
import InvestorsConference from "../pages/Investors_Conference/main";
import InvestorsDividend from "../pages/Investors_Dividend/main";
import InvestorsRevenue from "../pages/Investors_Revenue/main";
import InvestorsShareholdermeeting from "../pages/Investors_Shareholdermeeting/main";
import InvestorsReport from "../pages/Investors_Report/main";
import InvestorsContacts from "../pages/Investors_Contacts/main";
import "../i18n/index";

const pageMappingObj = {
  root_Login: <Login />,
  root_AccountMyAccount: <AccountMyAccount />,
  root_AccountEditAccount: <AccountEditAccount />,
  root_AccountPersonal: <AccountPersonal />,
  root_AccountPartner: <AccountPartner />,
  root_AccountApplication: <AccountApplication />,
  root_AccountSendVerifyEmail: <AccountSendVerifyEmail />,
  root_AccountMemberInfo: <AccountMemberInfo />,
  root_AccountDashboard: <AccountDashboard />,
  root_AccountNewsletter: <AccountNewsletter />,
  root_AccountLogout: <AccountLogout />,
  root_Register: <HannstarRegister />,
  root_MFAQRCode: <MFAQRCode />,
  root_MFA: <MFA />,
  root_ForgotPassword: <ForgotPassword />,
  root_ResetPassword: <ResetPassword />,
  root_Index: <Index />,
  root_AboutIndex: <AboutIndex />,
  root_AboutStronghold: <AboutStronghold />,
  root_AboutFamily: <AboutFamily />,
  root_AboutTeam: <AboutTeam />,
  root_AboutCertification: <AboutCertification />,
  root_EBiz: <EBiz />,
  root_Solution: <Solution />,
  root_InvestorsSummary: <InvestorsSummary />,
  root_InvestorsConference: <InvestorsConference />,
  root_InvestorsDividend: <InvestorsDividend />,
  root_InvestorsRevenue: <InvestorsRevenue />,
  root_InvestorsShareholdermeeting: <InvestorsShareholdermeeting />,
  root_InvestorsReport: <InvestorsReport />,
  root_InvestorsContacts: <InvestorsContacts />,
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
  root_PartnerManageandadvisory: <PartnerManageandadvisory />,
  root_PartnerTechnical: <PartnerTechnical />,
  root_PartnerGreenSupplyChain: <PartnerGreenSupplyChain />,
  root_PartnerManufacturing: <PartnerManufacturing />,
  root_ServiceIndex: <ServiceIndex />,
  root_ServiceRMAApply: <ServiceRMAApply />,
  root_ServiceRMAList: <ServiceRMAList />,
  root_ServiceParseList: <ServiceParseList />,
  root_ServiceGreenService: <ServiceGreenService />,
  root_ServiceCustomerSupport: <ServiceCustomerSupport />,
  root_ServiceParseApply: <ServiceParseApply />,
  root_ServiceGreenServiceApply: <ServiceGreenServiceApply />,
};

const targetDom = Object.keys(pageMappingObj).filter(
  (key) => document.getElementById(key) && key
)[0];
ReactDOM.render(pageMappingObj[targetDom], document.getElementById(targetDom));
