import { useTranslation } from "react-i18next";

function usePageData() {
  const { t } = useTranslation();
  return {
    JobAttributes:{
      title: "工作屬性",
      option: [
        { text: "業務相關", value: "業務相關" },
        { text: "採購相關", value: "採購相關" },
        { text: "研發相關", value: "研發相關" },
        { text: "品質相關", value: "品質相關" },
        { text: "項目管理", value: "項目管理" },
        { text: "經營管理", value: "經營管理" },
        { text: "其他", value: "其他" },
      ],
    },
    InterestedType:{
      title: "感興趣的應用別(可複選)",
      option: [
        { text: "智慧零售", value: "智慧零售" },
        { text: "智慧育樂", value: "智慧育樂." },
        { text: "智能建築", value: "智能建築" },
        { text: "健康關懷", value: "健康關懷" },
        { text: "交通運輸", value: "交通運輸" },
        { text: "智能製造", value: "智能製造" },
      ],
    },
    CompanyName:{
      title: "公司名稱",
    },
    CompanySName:{
      title: "公司名稱關鍵字",
    },
    BusinessType:{
      title: "商業類型",
      option: [
        { text: "代理商", value: "代理商" },
        { text: "經銷商", value: "經銷商" },
        { text: "模組廠", value: "模組廠" },
        { text: "方案商", value: "方案商" },
        { text: "系統整合廠", value: "系統整合廠" },
        { text: "品牌廠", value: "品牌廠" },
        { text: "其他", value: "其他" },
      ],
    },
    TaxNo:{
      title: "企業編號(統編/稅號)",
    },
    Weblink:{
      title: "公司網址",
    },
    Country:{
      title: "國家/地區",
      option: [
        { text: "台灣", value: "台灣" },
        { text: "日本", value: "日本" },
      ],
    },
    AreaCity:{
      title: "城市",
    },
    AreaAddress:{
      title: "地址",
    },
    CompanyEmpNumber:{
      title: "員工總數",
      option: [
        { text: "<100", value: "<100" },
        { text: "100-500", value: "100-500" },
        { text: "500-1000", value: "500-1000" },
        { text: ">1000", value: ">1000" },
      ],
    },
    AnnualRevenue:{
      title: "年營業額(USD)",
      option: [
        { text: "<1M", value: "<1M" },
        { text: "1M-5M", value: "1M-5M" },
        { text: "5M-10M", value: "5M-10M" },
        { text: "10M-30M", value: "10M-30M" },
        { text: ">30M", value: ">30M" },
      ],
    },
    CompanyStockOn:{
      title: "上市公司",
      option: [
        { text: "是", value: "是" },
        { text: "否", value: "否" },
      ],
    },
    CompanyMA1:{
      title: "公司產品主要銷售分類(可複選)",
      option: [
        { text: "車載", value: "車載" },
        { text: "穿戴", value: "穿戴" },
        { text: "工控", value: "工控" },
        { text: "手機", value: "手機" },
        { text: "消費類", value: "消費類" },
        { text: "其他", value: "其他" },
      ],
    },
    CompanyMA2:{
      title: "公司產品主要銷售國家/地區-1",
    },
    CompanyMA3:{
      title: "公司產品主要銷售國家/地區-2",
    },
    CompanyMA4:{
      title: "公司產品主要銷售國家/地區-3",
    },
    TOP1:{
      title: "主要出貨客戶-1",
    },
    TOP2:{
      title: "主要出貨客戶-2",
    },
    TOP3:{
      title: "主要出貨客戶-3",
    },
    HannstarYN:{
      title: "是否已使用HannStar產品",
      option: [
        { text: "是(請在協助以下資訊)", value: "Y" },
        { text: "否/不確定", value: "N" },
      ],
    },
    Buy1:{
      title: "購買渠道-1",
      option: [
        { text: "瀚宇彩晶", value: "瀚宇彩晶" },
        { text: "代理商", value: "代理商" },
        { text: "其他", value: "其他" },
      ],
    },
    BuyCompany1:{
      title: "渠道公司名稱-1",
    },
    Buy2:{
      title: "購買渠道-2",
      option: [
        { text: "瀚宇彩晶", value: "瀚宇彩晶" },
        { text: "代理商", value: "代理商" },
        { text: "其他", value: "其他" },
      ],
    },
    BuyCompany2:{
      title: "渠道公司名稱-2"
    },
    Buy3:{
      title: "購買渠道-3",
      option: [
        { text: "瀚宇彩晶", value: "瀚宇彩晶" },
        { text: "代理商", value: "代理商" },
        { text: "其他", value: "其他" },
      ],
    },
    BuyCompany3:{
      title: "渠道公司名稱-3",
    },
    CompanyRemark:{
      title: "備註說明",
    },
    JobTitle:{
      title: "職稱",
      option: [
        { text: "創辦人/董事長", value: "創辦人/董事長" },
        { text: "執行長/總經理/協理", value: "執行長/總經理/協理" },
        { text: "總監/處長/經理", value: "總監/處長/經理" },
        { text: "主任/課長/組長", value: "主任/課長/組長" },
        { text: "專員/管理師", value: "專員/管理師" },
        { text: "工程師", value: "工程師" },
        { text: "其他類型", value: "其他類型" },
      ],
    },
    PhoneNumber0:{},
    PhoneNumber1:{},
    PhoneNumber2:{},
    CellPhoneNumber0:{},
    CellPhoneNumber1:{},
    CountryCode:{},
  }
}

export default usePageData;
