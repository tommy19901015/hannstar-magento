import { useTranslation } from "react-i18next";

function usePageData() {
  const { t } = useTranslation();
  return {
    breadcrumbsData:{
      breadcrumbsLinkFrontPage: t('Account_Partner.breadcrumbsLinkFrontPage'),
      breadcrumbsLinkMemberCentre:t('Account_Partner.breadcrumbsLinkMemberCentre'),
      breadcrumbsLinkMemberCentrePermissions:t('Account_Partner.breadcrumbsLinkMemberCentrePermissions'),
    },
    JobAttributes: {
      title: t('Account_Partner.JobAttributes.title'),
      option: [
        {text:t('Account_Partner.JobAttributes.businessRelated'),value:t('Account_Partner.JobAttributes.businessRelated')},
        {text:t('Account_Partner.JobAttributes.purchasing'),value:t('Account_Partner.JobAttributes.purchasing')},
        {text:t('Account_Partner.JobAttributes.related'),value:t('Account_Partner.JobAttributes.related')},
        {text:t('Account_Partner.JobAttributes.qualityRelated'),value:t('Account_Partner.JobAttributes.qualityRelated')},
        {text:t('Account_Partner.JobAttributes.projectManagement'),value:t('Account_Partner.JobAttributes.projectManagement')},
        {text:t('Account_Partner.JobAttributes.management'),value:t('Account_Partner.JobAttributes.management')},
        {text:t('Account_Partner.JobAttributes.other'),value:t('Account_Partner.JobAttributes.other')},
      ],
    },
    ApplicableArea: {
      title:  t('Account_Partner.ApplicableArea.title'),
      option: [
        {text:t('Account_Partner.ApplicableArea.option1'),value:t('Account_Partner.ApplicableArea.option1')},
        {text:t('Account_Partner.ApplicableArea.option2'),value:t('Account_Partner.ApplicableArea.option2')},
        {text:t('Account_Partner.ApplicableArea.option3'),value:t('Account_Partner.ApplicableArea.option3')},
        {text:t('Account_Partner.ApplicableArea.option4'),value:t('Account_Partner.ApplicableArea.option4')},
        {text:t('Account_Partner.ApplicableArea.option5'),value:t('Account_Partner.ApplicableArea.option5')},
        {text:t('Account_Partner.ApplicableArea.option6'),value:t('Account_Partner.ApplicableArea.option6')},
      ],
    },
    HannstarCode: {
      title: t('Account_Partner.HannstarCode'),
    },
    TechnicalStaff: {
      title:  t('Account_Partner.TechnicalStaff.title'),
      option: [
        {text:t('Account_Partner.TechnicalStaff.option1'),value:t('Account_Partner.TechnicalStaff.option1')},
        {text:t('Account_Partner.TechnicalStaff.option2'),value:t('Account_Partner.TechnicalStaff.option2')},
        {text:t('Account_Partner.TechnicalStaff.option3'),value:t('Account_Partner.TechnicalStaff.option3')},
        {text:t('Account_Partner.TechnicalStaff.option4'),value:t('Account_Partner.TechnicalStaff.option4')},
      ],
    },
    InterestedType: {
      title: t('Account_Partner.InterestedType.title'),
      option: [
        {text:t('Account_Partner.InterestedType.smartRetail'),value:t('Account_Partner.InterestedType.smartRetail')},
        {text:t('Account_Partner.InterestedType.wisdomRecreation'),value:t('Account_Partner.InterestedType.wisdomRecreation')},
        {text:t('Account_Partner.InterestedType.intelligentBuilding'),value:t('Account_Partner.InterestedType.intelligentBuilding')},
        {text:t('Account_Partner.InterestedType.healthCare'),value:t('Account_Partner.InterestedType.healthCare')},
        {text:t('Account_Partner.InterestedType.transportation'),value:t('Account_Partner.InterestedType.transportation')},
        {text:t('Account_Partner.InterestedType.smartManufacturing'),value:t('Account_Partner.InterestedType.smartManufacturing')},
      ],
    },
    CompanyName: {
      title: t('Account_Partner.CompanyName'),
    },
    CompanySName: {
      title: t('Account_Partner.CompanySName'),
    },
    BusinessType: {
      title: t('Account_Partner.BusinessType.title'),
      option: [
        {text:t('Account_Partner.BusinessType.option1'),value:t('Account_Partner.BusinessType.option1')},
        {text:t('Account_Partner.BusinessType.option2'),value:t('Account_Partner.BusinessType.option2')},
        {text:t('Account_Partner.BusinessType.option3'),value:t('Account_Partner.BusinessType.option3')},
      ],
    },
    TaxNo: {
      title: t('Account_Partner.TaxNo'),
    },
    Weblink: {
      title: t('Account_Partner.Weblink'),
    },
    Country: {
      title: t('Account_Partner.Country'),
    },
    AreaCity: {
      title: t('Account_Partner.AreaCity'),
    },
    AreaAddress: {
      title: t('Account_Partner.AreaAddress'),
    },
    CompanyEmpNumber: {
      title: t('Account_Partner.CompanyEmpNumber.title'),
      option: [
        {text:t('Account_Partner.CompanyEmpNumber.option1'),value:t('Account_Partner.CompanyEmpNumber.option1')},
        {text:t('Account_Partner.CompanyEmpNumber.option2'),value:t('Account_Partner.CompanyEmpNumber.option2')},
        {text:t('Account_Partner.CompanyEmpNumber.option3'),value:t('Account_Partner.CompanyEmpNumber.option3')},
        {text:t('Account_Partner.CompanyEmpNumber.option4'),value:t('Account_Partner.CompanyEmpNumber.option4')}
      ],
    },
    AnnualRevenue: {
      title: t('Account_Partner.AnnualRevenue.title'),
      option: [
        {text:t('Account_Partner.AnnualRevenue.option1'),value:t('Account_Partner.AnnualRevenue.option1')},
        {text:t('Account_Partner.AnnualRevenue.option2'),value:t('Account_Partner.AnnualRevenue.option2')},
        {text:t('Account_Partner.AnnualRevenue.option3'),value:t('Account_Partner.AnnualRevenue.option3')},
        {text:t('Account_Partner.AnnualRevenue.option4'),value:t('Account_Partner.AnnualRevenue.option4')},
        {text:t('Account_Partner.AnnualRevenue.option5'),value:t('Account_Partner.AnnualRevenue.option5')},
      ],
    },
    CompanyStockOn: {
      title: t('Account_Partner.CompanyStockOn.title'),
      option: [
        {text:t('Account_Partner.CompanyStockOn.option1'),value:t('Account_Partner.CompanyStockOn.option1')},
        {text:t('Account_Partner.CompanyStockOn.option2'),value:t('Account_Partner.CompanyStockOn.option2')},
      ],
    },
    CompanyMA1: {
      title: t('Account_Partner.CompanyMA1.title'),
      option: [
        {text:t('Account_Partner.CompanyMA1.option1'),value:t('Account_Partner.CompanyMA1.option1')},
        {text:t('Account_Partner.CompanyMA1.option2'),value:t('Account_Partner.CompanyMA1.option2')},
        {text:t('Account_Partner.CompanyMA1.option3'),value:t('Account_Partner.CompanyMA1.option3')},
        {text:t('Account_Partner.CompanyMA1.option4'),value:t('Account_Partner.CompanyMA1.option4')},
        {text:t('Account_Partner.CompanyMA1.option5'),value:t('Account_Partner.CompanyMA1.option5')},
        {text:t('Account_Partner.CompanyMA1.option6'),value:t('Account_Partner.CompanyMA1.option6')},
      ],
    },
    CompanyMA2: {
      title: t('Account_Partner.CompanyMA2'),
    },
    CompanyMA3: {
      title: t('Account_Partner.CompanyMA3'),
    },
    CompanyMA4: {
      title: t('Account_Partner.CompanyMA4'),
    },
    TOP1: {
      title: t('Account_Partner.TOP1'),
    },
    TOP2: {
      title: t('Account_Partner.TOP2'),
    },
    TOP3: {
      title: t('Account_Partner.TOP3'),
    },
    HannstarYN: {
      title: t('Account_Partner.HannstarYN.title'),
      option: [
        {text:t('Account_Partner.HannstarYN.option1'),value:t('Account_Partner.HannstarYN.option1')},
        {text:t('Account_Partner.HannstarYN.option2'),value:t('Account_Partner.HannstarYN.option2')},
      ],
    },
    Buy1: {
      title: t('Account_Partner.Buy1.title'),
      option: [
        {text:t('Account_Partner.Buy1.option1'),value:t('Account_Partner.Buy1.option1')},
        {text:t('Account_Partner.Buy1.option2'),value:t('Account_Partner.Buy1.option2')},
        {text:t('Account_Partner.Buy1.option3'),value:t('Account_Partner.Buy1.option3')},
      ],
    },
    BuyCompany1: {
      title: t('Account_Partner.BuyCompany1'),
    },
    Buy2: {
      title: t('Account_Partner.Buy2.title'),
      option: [
        {text:t('Account_Partner.Buy2.option1'),value:t('Account_Partner.Buy2.option1')},
        {text:t('Account_Partner.Buy2.option2'),value:t('Account_Partner.Buy2.option2')},
        {text:t('Account_Partner.Buy2.option3'),value:t('Account_Partner.Buy2.option3')},
      ],
    },
    BuyCompany2: {
      title: t('Account_Partner.BuyCompany2'),
    },
    Buy3: {
      title: t('Account_Partner.Buy3.title'),
      option: [
        {text:t('Account_Partner.Buy3.option1'),value:t('Account_Partner.Buy3.option1')},
        {text:t('Account_Partner.Buy3.option2'),value:t('Account_Partner.Buy3.option2')},
        {text:t('Account_Partner.Buy3.option3'),value:t('Account_Partner.Buy3.option3')},
      ],
    },
    BuyCompany3: {
      title: t('Account_Partner.BuyCompany3'),
    },
    CompanyRemark: {
      title: t('Account_Partner.CompanyRemark'),
    },
    JobTitle: {
      title: t('Account_Partner.JobTitle.title'),
      option: [
        {text:t('Account_Partner.JobTitle.option1'),value:t('Account_Partner.JobTitle.option1')},
        {text:t('Account_Partner.JobTitle.option2'),value:t('Account_Partner.JobTitle.option2')},
        {text:t('Account_Partner.JobTitle.option3'),value:t('Account_Partner.JobTitle.option3')},
        {text:t('Account_Partner.JobTitle.option4'),value:t('Account_Partner.JobTitle.option4')},
        {text:t('Account_Partner.JobTitle.option5'),value:t('Account_Partner.JobTitle.option5')},
        {text:t('Account_Partner.JobTitle.option6'),value:t('Account_Partner.JobTitle.option6')},
        {text:t('Account_Partner.JobTitle.option7'),value:t('Account_Partner.JobTitle.option7')},
      ],
    },
    PhoneNumber0: t('Account_Partner.PhoneNumber0'),
    PhoneNumber1:t('Account_Partner.PhoneNumber1'),
    PhoneNumber2: t('Account_Partner.PhoneNumber2'),
    CellPhoneNumber0: t('Account_Partner.CellPhoneNumber0'),
    CellPhoneNumber1: t('Account_Partner.CellPhoneNumber1'),
    ApplyMembership: t('Account_Partner.ApplyMembership'),
    Step1: t('Account_Partner.Step1'),
    Step2: t('Account_Partner.Step2'),
    Step3: t('Account_Partner.Step3'),
    Step4: t('Account_Partner.Step4'),
    Goback:t('Account_Partner.Goback'),
    Notes: t('Account_Partner.Notes'),
    Application: t('Account_Partner.Application'),
    Required: t('Account_Partner.Required'),
  }
}

export default usePageData;