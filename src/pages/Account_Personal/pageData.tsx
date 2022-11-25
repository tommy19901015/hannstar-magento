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
      title: t('Account_Personal.JobAttributes.title'),
      option: [
        {text:t('Account_Personal.JobAttributes.businessRelated'),value:t('Account_Personal.JobAttributes.businessRelated')},
        {text:t('Account_Personal.JobAttributes.purchasing'),value:t('Account_Personal.JobAttributes.purchasing')},
        {text:t('Account_Personal.JobAttributes.related'),value:t('Account_Personal.JobAttributes.related')},
        {text:t('Account_Personal.JobAttributes.qualityRelated'),value:t('Account_Personal.JobAttributes.qualityRelated')},
        {text:t('Account_Personal.JobAttributes.projectManagement'),value:t('Account_Personal.JobAttributes.projectManagement')},
        {text:t('Account_Personal.JobAttributes.management'),value:t('Account_Personal.JobAttributes.management')},
        {text:t('Account_Personal.JobAttributes.other'),value:t('Account_Personal.JobAttributes.other')},
      ],
    },
    InterestedType: {
      title: t('Account_Personal.InterestedType.title'),
      option: [
        {text:t('Account_Personal.InterestedType.smartRetail'),value:t('Account_Personal.InterestedType.smartRetail')},
        {text:t('Account_Personal.InterestedType.wisdomRecreation'),value:t('Account_Personal.InterestedType.wisdomRecreation')},
        {text:t('Account_Personal.InterestedType.intelligentBuilding'),value:t('Account_Personal.InterestedType.intelligentBuilding')},
        {text:t('Account_Personal.InterestedType.healthCare'),value:t('Account_Personal.InterestedType.healthCare')},
        {text:t('Account_Personal.InterestedType.transportation'),value:t('Account_Personal.InterestedType.transportation')},
        {text:t('Account_Personal.InterestedType.smartManufacturing'),value:t('Account_Personal.InterestedType.smartManufacturing')},
      ],
    },
    CompanyName: {
      title: t('Account_Personal.CompanyName'),
    },
    CompanySName: {
      title: t('Account_Personal.CompanySName'),
    },
    BusinessType: {
      title: t('Account_Personal.BusinessType.title'),
      option: [
        {text:t('Account_Personal.BusinessType.agent'),value:t('Account_Personal.BusinessType.agent')},
        {text:t('Account_Personal.BusinessType.dealer'),value:t('Account_Personal.BusinessType.dealer')},
        {text:t('Account_Personal.BusinessType.moduleFactory'),value:t('Account_Personal.BusinessType.moduleFactory')},
        {text:t('Account_Personal.BusinessType.solutionProvider'),value:t('Account_Personal.BusinessType.solutionProvider')},
        {text:t('Account_Personal.BusinessType.systemIntegrationFactory'),value:t('Account_Personal.BusinessType.systemIntegrationFactory')},
        {text:t('Account_Personal.BusinessType.brandFactory'),value:t('Account_Personal.BusinessType.brandFactory')},
        {text:t('Account_Personal.BusinessType.other'),value:t('Account_Personal.BusinessType.other')},
      ],
    },
    TaxNo: {
      title: t('Account_Personal.TaxNo'),
    },
    Weblink: {
      title: t('Account_Personal.Weblink'),
    },
    Country: {
      title: t('Account_Personal.Country'),
    },
    AreaCity: {
      title: t('Account_Personal.AreaCity'),
    },
    AreaAddress: {
      title: t('Account_Personal.AreaAddress'),
    },
    CompanyEmpNumber: {
      title: t('Account_Personal.CompanyEmpNumber.title'),
      option: [
        {text:t('Account_Personal.CompanyEmpNumber.option1'),value:t('Account_Personal.CompanyEmpNumber.option1')},
        {text:t('Account_Personal.CompanyEmpNumber.option2'),value:t('Account_Personal.CompanyEmpNumber.option2')},
        {text:t('Account_Personal.CompanyEmpNumber.option3'),value:t('Account_Personal.CompanyEmpNumber.option3')},
        {text:t('Account_Personal.CompanyEmpNumber.option4'),value:t('Account_Personal.CompanyEmpNumber.option4')}
      ],
    },
    AnnualRevenue: {
      title: t('Account_Personal.AnnualRevenue.title'),
      option: [
        {text:t('Account_Personal.AnnualRevenue.option1'),value:t('Account_Personal.AnnualRevenue.option1')},
        {text:t('Account_Personal.AnnualRevenue.option2'),value:t('Account_Personal.AnnualRevenue.option2')},
        {text:t('Account_Personal.AnnualRevenue.option3'),value:t('Account_Personal.AnnualRevenue.option3')},
        {text:t('Account_Personal.AnnualRevenue.option4'),value:t('Account_Personal.AnnualRevenue.option4')},
        {text:t('Account_Personal.AnnualRevenue.option5'),value:t('Account_Personal.AnnualRevenue.option5')},
      ],
    },
    CompanyStockOn: {
      title: t('Account_Personal.CompanyStockOn.title'),
      option: [
        {text:t('Account_Personal.CompanyStockOn.option1'),value:t('Account_Personal.CompanyStockOn.option1')},
        {text:t('Account_Personal.CompanyStockOn.option2'),value:t('Account_Personal.CompanyStockOn.option2')},
      ],
    },
    CompanyMA1: {
      title: t('Account_Personal.CompanyMA1.title'),
      option: [
        {text:t('Account_Personal.CompanyMA1.option1'),value:t('Account_Personal.CompanyMA1.option1')},
        {text:t('Account_Personal.CompanyMA1.option2'),value:t('Account_Personal.CompanyMA1.option2')},
        {text:t('Account_Personal.CompanyMA1.option3'),value:t('Account_Personal.CompanyMA1.option3')},
        {text:t('Account_Personal.CompanyMA1.option4'),value:t('Account_Personal.CompanyMA1.option4')},
        {text:t('Account_Personal.CompanyMA1.option5'),value:t('Account_Personal.CompanyMA1.option5')},
        {text:t('Account_Personal.CompanyMA1.option6'),value:t('Account_Personal.CompanyMA1.option6')},
      ],
    },
    CompanyMA2: {
      title: t('Account_Personal.CompanyMA2'),
    },
    CompanyMA3: {
      title: t('Account_Personal.CompanyMA3'),
    },
    CompanyMA4: {
      title: t('Account_Personal.CompanyMA4'),
    },
    TOP1: {
      title: t('Account_Personal.TOP1'),
    },
    TOP2: {
      title: t('Account_Personal.TOP2'),
    },
    TOP3: {
      title: t('Account_Personal.TOP3'),
    },
    HannstarYN: {
      title: t('Account_Personal.HannstarYN.title'),
      option: [
        {text:t('Account_Personal.HannstarYN.option1'),value:t('Account_Personal.HannstarYN.option1')},
        {text:t('Account_Personal.HannstarYN.option2'),value:t('Account_Personal.HannstarYN.option2')},
      ],
    },
    Buy1: {
      title: t('Account_Personal.Buy1.title'),
      option: [
        {text:t('Account_Personal.Buy1.option1'),value:t('Account_Personal.Buy1.option1')},
        {text:t('Account_Personal.Buy1.option2'),value:t('Account_Personal.Buy1.option2')},
        {text:t('Account_Personal.Buy1.option3'),value:t('Account_Personal.Buy1.option3')},
      ],
    },
    BuyCompany1: {
      title: t('Account_Personal.BuyCompany1'),
    },
    Buy2: {
      title: t('Account_Personal.Buy2.title'),
      option: [
        {text:t('Account_Personal.Buy2.option1'),value:t('Account_Personal.Buy2.option1')},
        {text:t('Account_Personal.Buy2.option2'),value:t('Account_Personal.Buy2.option2')},
        {text:t('Account_Personal.Buy2.option3'),value:t('Account_Personal.Buy2.option3')},
      ],
    },
    BuyCompany2: {
      title: t('Account_Personal.BuyCompany2'),
    },
    Buy3: {
      title: t('Account_Personal.Buy3.title'),
      option: [
        {text:t('Account_Personal.Buy3.option1'),value:t('Account_Personal.Buy3.option1')},
        {text:t('Account_Personal.Buy3.option2'),value:t('Account_Personal.Buy3.option2')},
        {text:t('Account_Personal.Buy3.option3'),value:t('Account_Personal.Buy3.option3')},
      ],
    },
    BuyCompany3: {
      title: t('Account_Personal.BuyCompany3'),
    },
    CompanyRemark: {
      title: t('Account_Personal.CompanyRemark'),
    },
    JobTitle: {
      title: t('Account_Personal.JobTitle.title'),
      option: [
        {text:t('Account_Personal.JobTitle.option1'),value:t('Account_Personal.JobTitle.option1')},
        {text:t('Account_Personal.JobTitle.option2'),value:t('Account_Personal.JobTitle.option2')},
        {text:t('Account_Personal.JobTitle.option3'),value:t('Account_Personal.JobTitle.option3')},
        {text:t('Account_Personal.JobTitle.option4'),value:t('Account_Personal.JobTitle.option4')},
        {text:t('Account_Personal.JobTitle.option5'),value:t('Account_Personal.JobTitle.option5')},
        {text:t('Account_Personal.JobTitle.option6'),value:t('Account_Personal.JobTitle.option6')},
        {text:t('Account_Personal.JobTitle.option7'),value:t('Account_Personal.JobTitle.option7')},
      ],
    },
    PhoneNumber0: t('Account_Personal.PhoneNumber0'),
    PhoneNumber1:t('Account_Personal.PhoneNumber1'),
    PhoneNumber2: t('Account_Personal.PhoneNumber2'),
    CellPhoneNumber0: t('Account_Personal.CellPhoneNumber0'),
    CellPhoneNumber1: t('Account_Personal.CellPhoneNumber1'),
    ApplyMembership: t('Account_Personal.ApplyMembership'),
    Step1: t('Account_Personal.Step1'),
    Step2: t('Account_Personal.Step2'),
    Step3: t('Account_Personal.Step3'),
    Step4: t('Account_Personal.Step4'),
    Goback:t('Account_Personal.Goback'),
    Notes: t('Account_Personal.Notes'),
    Application: t('Account_Personal.Application'),
    Required: t('Account_Personal.Required'),
  }
}

export default usePageData;
