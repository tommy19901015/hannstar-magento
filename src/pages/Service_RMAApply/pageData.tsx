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
        model_no: t('RMAApply.modelNo'),
        product_type: {
            title: t('RMAApply.shipment'),
        },
        isseu_year: t('RMAApply.monthEndYear'),
        isseu_month: t('RMAApply.monthEndMonth'),

        input_amount: t('RMAApply.amount'),
        Slice: t('RMAApply.slice'),
        Required: t('RMAApply.required'),
        defect_amount: t('RMAApply.defective'),
        defect_rate: t('RMAApply.nonPerforming'),
        Per: t('RMAApply.per'),
        invoce_number: t('RMAApply.Invoice'),
        yield: t('RMAApply.paula'),
        box_no: t('RMAApply.caseNumber'),
        quick_review: {
            title: t('RMAApply.quickReview'),
            option: [
                { text: t('RMAApply.yes'), value: "Y" },
                { text: t('RMAApply.no'), value: "N" }
            ]
        },
        title1: t('RMAApply.title1'),
        text1: t('RMAApply.text1'),
        title2: t('RMAApply.title2'),
        noteText2: t('RMAApply.noteText2'),
        Upload: t('RMAApply.common.upload'),
        Send: t('RMAApply.common.send'),
        Reset: t('RMAApply.common.reset'),
        Save: t('RMAApply.common.save'),
    }
}

export default useServiceRMAApply;

