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
import About from "../pages/about/main";
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
import "../i18n/index"

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
  root_AccountNewsletter: <AccountNewsletter/>,
  root_AccountLogout: <AccountLogout/>,
  root_Register: <HannstarRegister />,
  root_MFAQRCode: <MFAQRCode />,
  root_MFA: <MFA />,
  root_ForgotPassword: <ForgotPassword />,
  root_ResetPassword: <ResetPassword />,
  root_Index: <Index />,
  root_About: <About />,
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
