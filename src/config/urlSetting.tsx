import mappingD360I18n from "../common/mappingUrlI18n";

export const urlConfig = () => {
  const switchDomain = () => {
    const domain = window.location.host;
    switch (domain) {
      case "magentoprd.hannstar.com":
        return "prd";
      case "magentoqas.hannstar.com":
        return "qas";
      case "magentodev.hannstar.com":
        return "dev";
      default:
        return "dev";
    }
  };

  return {
    s3Url: `https://s3magento${switchDomain()}.hannstar.com`,
    account: {
      login: {
        title: "登入",
        href: mappingD360I18n() + "/customer/account/login",
      },
      register: {
        title: "註冊",
        href: mappingD360I18n() + "/customer/account/create/",
      },
      forgotPassword: {
        title: "忘記密碼",
        href: mappingD360I18n() + "/customer/account/forgotpassword/",
      },
      MFAQRcode: {
        title: "MFAQRcode",
        href: mappingD360I18n() + "/Cognito/Account/RegisterMFA",
      },
      LoginMFA: {
        title: "MFAQRcode",
        href: mappingD360I18n() + "/Cognito/Account/LoginMFA",
      },
      AccountPersonal: {
        title: "客戶",
        href: mappingD360I18n() + "/account/enterprise/view",
      },
      AccountPartner: {
        title: "供應商",
        href: mappingD360I18n() + "/account/partner/view",
      },
      AccountApplication: {
        title: "申請權限",
        href: mappingD360I18n() + "/account/permission/view",
      },
      MyAccount: {
        title: "個人專區",
        href: mappingD360I18n() + "/customer/account/",
      },
      EditAccount: {
        title: "編輯個人專區",
        href: mappingD360I18n() + "/customer/account/edit/",
      },
      MemberInfo: {
        title: "成員資訊",
        href: mappingD360I18n() + "/account/memberinfo/view",
      },
      AccountDashboard: {
        title: "看板",
        href: mappingD360I18n() + "/account/dashboard/view",
      },
      AccountNewsletter: {
        title: "訂閱信件",
        href: mappingD360I18n() + "/newsletter/manage/",
      },
      AccountMagentoLogoutUrl: {
        title: "Magento 登出 url",
        href: mappingD360I18n() + "/customer/account/logout/",
      },
      AccountLogout: {
        title: "登出頁面",
        href: mappingD360I18n() + "/customer/account/Success/",
      },
    },
    hannstar: {
      index: {
        title: "官網首頁",
        href: mappingD360I18n() + "/",
        hrefOld: "/index/index/view",
      },
      about_index: {
        title: "瀚宇彩晶簡介",
        href: mappingD360I18n() + "/about/index/view",
      },
      about_team: {
        title: "瀚宇彩晶團隊",
        href: mappingD360I18n() + "/about/team/view",
      },
      about_family: {
        title: "瀚宇關係企業",
        href: mappingD360I18n() + "/about/family/view",
      },
      about_certification: {
        title: "認證與獎項",
        href: mappingD360I18n() + "/about/certification/view",
      },
      about_stronghold: {
        title: "全球據點",
        href: mappingD360I18n() + "/about/stronghold/view",
      },
      about_strategy: {
        title: "全球據點",
        href: mappingD360I18n() + "/about/strategy/view",
      },
      sustainability_index: {
        title: "企業永續",
        href: mappingD360I18n() + "/sustainability/index/view",
      },
      sustainability_csr: {
        title: "永續管理",
        href: mappingD360I18n() + "/sustainability/csr/view",
      },
      sustainability_governance: {
        title: "公司治理",
        href: mappingD360I18n() + "/sustainability/governance/view",
      },
      sustainability_environment: {
        title: "綠色創新",
        href: mappingD360I18n() + "/sustainability/environment/view",
      },
      sustainability_social: {
        title: "社會共融",
        href: mappingD360I18n() + "/sustainability/social/view",
      },
      sustainability_report: {
        title: "報告書下載",
        href: mappingD360I18n() + "/sustainability/report/view",
      },
      sustainability_esg: {
        title: "永續訊息",
        href: mappingD360I18n() + "/sustainability/esg/view",
      },
      sustainability_article: {
        title: "永續訊息 文章",
        href: mappingD360I18n() + "/sustainability/esg/article",
      },
      investors_Summary: {
        title: "公司概況",
        href: mappingD360I18n() + "/investors/summary/view",
      },
      investors_Revenue: {
        title: "每月營收",
        href: mappingD360I18n() + "/investors/revenue/view",
      },
      investors_Report: {
        title: "財務季報及公司年報",
        href: mappingD360I18n() + "/investors/report/view",
      },
      investors_Conference: {
        title: "法人說明會",
        href: mappingD360I18n() + "/investors/conference/view",
      },
      investors_Shareholdermeeting: {
        title: "股東會資訊",
        href: mappingD360I18n() + "/investors/shareholdermeeting/view",
      },
      investors_Dividend: {
        title: "股利分派",
        href: mappingD360I18n() + "/investors/dividend/view",
      },
      investors_Quote: {
        title: "股價查詢",
        href: "https://tw.stock.yahoo.com/quote/6116",
      },
      investors_Contacts: {
        title: "投資人相關洽詢",
        href: mappingD360I18n() + "/investors/contacts/view",
      },
      careersDetail_Index: {
        title: "人才招募",
        href: mappingD360I18n() + "/careers/index/view",
      },
      careersDetail_Work: {
        title: "工作在彩晶",
        href: mappingD360I18n() + "/careers/work/view",
      },
      careersDetail_Growup: {
        title: "成長在彩晶",
        href: mappingD360I18n() + "/careers/growup/view",
      },
      careersDetail_Join: {
        title: "加入彩晶",
        href: mappingD360I18n() + "/careers/join/view",
      },
      news_financial: {
        title: "投資人關係",
        href: mappingD360I18n() + "/news/financial/view",
      },
      news_article: {
        title: "投資人關係 文章",
        href: mappingD360I18n() + "/news/financial/article",
      },
      support: {
        title: "常見問題",
        href: "https://support.hannstar.com",
      },
      privacy: {
        title: "隱私權",
        href: mappingD360I18n() + "/informations/privacy/view",
      },
      legalnotices: {
        title: "法律聲明",
        href: mappingD360I18n() + "/informations/legalnotices/view",
      },
    },
    partner: {
      index: {
        title: "供應商平台",
        href: mappingD360I18n() + "/partner/index/view",
      },
      manageandadvisory: {
        title: "管理與諮詢",
        href: mappingD360I18n() + "/partner/manageandadvisory/view",
      },
      technical: {
        title: "新技術合作",
        href: mappingD360I18n() + "/partner/technical/view",
      },
      manufacturing: {
        title: "協同製造夥伴平台",
        href: mappingD360I18n() + "/partner/manufacturingpartner/view",
      },
      quotationList: {
        title: "RFQ報價清單",
        href: mappingD360I18n() + "/partner/quotationlist/view",
      },
      quotation: {
        title: "RFQ線上報價",
        href: mappingD360I18n() + "/partner/quotation/view",
      },
      productList: {
        title: "產品管理",
        href: mappingD360I18n() + "/partner/productlist/view",
      },
      productInventory: {
        title: "價格庫存管理",
        href: mappingD360I18n() + "/partner/productinventory/view",
      },
      addProduct: {
        title: "新增產品",
        href: mappingD360I18n() + "/partner/addproduct/view",
      },
      solutionList: {
        title: "方案產品管理",
        href: mappingD360I18n() + "/partner/solutionlist/view",
      },
      solutionInventory: {
        title: "方案價格庫存管理",
        href: mappingD360I18n() + "/partner/solutioninventory/view",
      },
      greensupplychain: {
        title: "綠色供應鏈",
        href: mappingD360I18n() + "/partner/greensupplychain/view",
      },
      addSolution: {
        title: "方案新增產品",
        href: mappingD360I18n() + "/partner/addsolution/view",
      },
      application: {
        title: "需求申請",
        href: mappingD360I18n() + "/partner/application/view",
      },
      message: {
        title: "訊息中心",
        href: mappingD360I18n() + "/partner/message/view",
      },
      qa: {
        title: "常見問題",
        href: mappingD360I18n() + "/partner/qa/view",
      },
    },
    service: {
      index: {
        title: "首頁",
        href: mappingD360I18n() + "/service/index/view",
      },
      RMAApply: {
        title: "RMA申請",
        href: mappingD360I18n() + "/service/rmaapply/view",
      },
      RMAList: {
        title: "RMA列表",
        href: mappingD360I18n() + "/service/rmalist/view",
      },
      parseApply: {
        title: "解析申請",
        href: mappingD360I18n() + "/service/parseapply/view",
      },
      parseList: {
        title: "解析列表",
        href: mappingD360I18n() + "/service/parselist/view",
      },
      customer: {
        title: "客戶通",
        href: mappingD360I18n() + "/service/customer/view",
      },
      lawApply: {
        title: "法規申請",
        href: mappingD360I18n() + "/service/lawapply/view",
      },
      greenLawApply: {
        title: "綠色環保申請",
        href: mappingD360I18n() + "/service/greenlawapply/view",
      },
      technicalSupport: {
        title: "技術諮詢",
        href: mappingD360I18n() + "/service/technicalsupport/view",
      },
      article: {
        title: "技術諮詢",
        href: mappingD360I18n() + "/service/technicalsupport/article",
      },
    },
    tftdisplay: {
      index: {
        title: "首頁",
        href: mappingD360I18n() + "/tftdisplay/index/view",
      },
      preferredProduct: {
        title: "優選產品",
        href: mappingD360I18n() + "/tftdisplay/PreferredProduct/ProductList",
      },
    },
    paperdisplay: {
      index: {
        title: "首頁",
        href: mappingD360I18n() + "/paperdisplay/index/view",
      },
      traffic: {
        title: "交通運輸",
        href: mappingD360I18n() + "/paperdisplay/traffic/view",
      },
      technology: {
        title: "顯示紙技術1",
        href: mappingD360I18n() + "/paperdisplay/technology/view",
      },
      introduce: {
        title: "顯示紙技術2",
        href: mappingD360I18n() + "/paperdisplay/introduce/view",
      },
      applications: {
        title: "顯示紙技術",
        href: mappingD360I18n() + "/paperdisplay/applications/view",
      },
      greenSupplyChain: {
        title: "綠色供應鏈",
        href: mappingD360I18n() + "/paperdisplay/greenSupplychain/view",
      },
    },
    hannspree: {
      index: {
        title: "首頁",
        href: mappingD360I18n() + "/hannspree/index/view",
      },
      solve: {
        title: "學習解決方案",
        href: mappingD360I18n() + "/hannspree/solve/view",
      },
      custom: {
        title: "客製化服務",
        href: mappingD360I18n() + "/hannspree/custom/view",
      },
    },
    solution: {
      index: {
        title: "首頁",
        href: mappingD360I18n() + "/solution/index/view",
      },
      label: {
        title: "方案系統",
        href: mappingD360I18n() + "/solution/label/view",
      },
    },
    footerlinks: {
      contactus: {
        title: "聯絡我們",
        href: mappingD360I18n() + "/",
      },
      privacy: {
        title: "隱私權聲明",
        href: mappingD360I18n() + "/",
      },
      notices: {
        title: "法律聲明",
        href: mappingD360I18n() + "/",
      },
      webmap: {
        title: "網站地圖",
        href: mappingD360I18n() + "/",
      },
    },
  };
};
