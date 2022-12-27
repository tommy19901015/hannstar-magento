import { useTranslation } from "react-i18next";

function useServiceRMAApply() {
    const { t } = useTranslation();
    return {
        breadcrumbs: {
            title: "",
            breadcrumbsLink: [
                {
                    text: t('RMAApply.home'),
                    href: "",
                },
                {
                    text: t('RMAApply.breadcrumb'),
                    href: "",
                },
                {
                    text: t('RMAApply.breadcrumbItem'),
                    href: "",
                }
            ],
        },
        PageTitle: t('RMAApply.application'),
        FormTitle: t('RMAApply.basicInfo'),
        customer_code: t('RMAApply.customer'),
        agent: t('RMAApply.agent'),
        issue_number: t('RMAApply.singleNumber'),
        hs_id: t('RMAApply.cqs'),
        product: t('RMAApply.modelNo'),
        form_type: {
            title: t('RMAApply.shipment'),
            option: [
                { text: t('RMAApply.productionStage'), value: t('RMAApply.productionStage') }
            ]
        },
        monthEndYear: t('RMAApply.monthEndYear'),
        monthEndMonth: t('RMAApply.monthEndMonth'),

        input_amount: t('RMAApply.amount'),
        Slice: t('RMAApply.slice'),
        Required: t('RMAApply.required'),
        defect_amount: t('RMAApply.defective'),
        defect_rate: t('RMAApply.nonPerforming'),
        Per: t('RMAApply.per'),
        Invoice: t('RMAApply.Invoice'),
        paula: t('RMAApply.paula'),
        caseNumber: t('RMAApply.caseNumber'),
        quickReview: {
            title: t('RMAApply.quickReview'),
            option: [
                { text: t('RMAApply.yes'), value: t('RMAApply.yes') },
                { text: t('RMAApply.no'), value: t('RMAApply.no') }
            ]
        },
        Upload: t('RMAApply.common.upload'),
        Send: t('RMAApply.common.send'),
        Reset: t('RMAApply.common.reset'),
        Save: t('RMAApply.common.save'),
    }
}

export default useServiceRMAApply;

