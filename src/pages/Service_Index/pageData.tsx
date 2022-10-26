import { useTranslation } from "react-i18next";
import { I_PageType } from "./interface"

function useServiceIndex() {
    const { t } = useTranslation();
  
    const tableList: I_PageType =  {
      bannerData: [
        {
          src: "https://www.hannstar.com/upload/banner_list/twL_banner_22A27_6erpvjpmxp.jpg",
          title: "創新技術、品質服務",
        },
        {
          src: "https://www.hannstar.com/upload/banner_list/twL_banner_22A28_zi638kdkyz.jpg",
          title: "綠色顯示、全新視界",
        },
        {
          src: "https://www.hannstar.com/upload/banner_list/twL_banner_22B08_8e38nb3hz6.jpg",
          title: "實踐 ESG、邁向永續經營",
        },
      ],
      messageCenterData :[
        {
          tag: "企業永續",
          date: "2022.03.22",
          title:
            '瀚宇彩晶加入「TALENT, In Taiwan，台灣人才永續行動聯盟」">瀚宇彩晶加入「TALENT, In Taiwan，台灣人才永續行動聯盟」',
        },
        {
          tag: "企業永續",
          date: "2022.03.11",
          title: '38婦女節，多愛妳一點">38婦女節，多愛妳一點',
        },
        {
          tag: "投資人關係",
          date: "2022.03.09",
          title: '瀚宇彩晶2022年2月份營收報告">瀚宇彩晶2022年2月份營收報告',
        },
        {
          tag: "投資人關係",
          date: "2022.02.24",
          title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
        },
        {
          tag: "投資人關係",
          date: "2022.02.03",
          title: '沒有人該成為孤島 為防疫英雄加油">沒有人該成為孤島 為防疫英雄加油',
        },
        {
          tag: "投資人關係",
          date: "2022.02.24",
          title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
        },
        {
          tag: "投資人關係",
          date: "2022.02.24",
          title: '瀚宇彩晶2021 / 4Q營業報告新聞稿">瀚宇彩晶2021 / 4Q營業報告新聞稿',
        },
        {
          tag: "投資人關係",
          date: "2022.02.03",
          title: '沒有人該成為孤島 為防疫英雄加油">沒有人該成為孤島 為防疫英雄加油',
        },
      ],
      platformEntryData: [
        {
          src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_t4gtmsjux5.png",
          title: "客戶通",
          href: "/",
        },
        {
          src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_xnf94vwkwm.png",
          title: "綠色環保申請",
          href: "/",
        },
        {
          src: "https://webdev.hannstar.com/upload/ad_icon_list/twL_ad_21G07_pub4mi8vcn.png",
          title: "技術諮詢",
          href: "/",
        },
      ],
      graphicsCardData :[
        {
          src: "https://e-service.hannstar.com/Content/images/img/home1.jpg",
          title: "客戶通",
          text:
            "透過平台簡易、便利的服務，讓客戶享受更快速的各項專業諮詢交流，由全方位的售後服務團隊為您效勞。",
          href: "",
          btnText: "了解更多",
        },
        {
          src: "https://e-service.hannstar.com/Content/images/img/home3.jpg",
          title: "綠色環保申請",
          text:
            "「可回收、低污染、省資源」致力推動綠色產品發展，並取得環保標章，符合永續發展。",
          href: "",
          btnText: "了解更多",
        },
        {
          src: "https://e-service.hannstar.com/Content/images/img/home2.jpg",
          title: "技術諮詢",
          text: "多年的技術經驗及教育訓練透過雲端共享，",
          href: "",
          btnText: "了解更多",
        },
      ],
      articleList :[
        {
          category: "技術文件",
          src: "https://e-service.hannstar.com/Content/images/img/professional-accurately-unscrewing-case-metallic-slim-laptop-his-electric-service-lab-near-tool-bag-clean-repair-it-front-view.jpg",
          title: "LCM 偏光板製程",
          content: "LCM模組生產站點POL站，針對整個偏光板貼附作業的技術介紹",
          href: "",
          date: "2022/09/01",
          views: "5",
        },
        {
          category: "技術文件",
          src: "https://e-service.hannstar.com/Content/images/img/close-up-reparation-laptop.jpg",
          title: "LCM 切割製程簡介",
          content: "LCM模組生產站點切割站，針對切割Cell玻璃的技術介紹",
          href: "",
          date: "2022/08/22",
          views: "8",
        },
        {
          category: "教育訓練",
          src: "https://e-service.hannstar.com/Content/images/img/iStock-962459768.jpg",
          title: "Cover Lens技術介紹",
          content:
            "Cover Lens，是電容式觸控面板的關鍵元件，也是人機接觸之第一道界面，其位置是觸控面板最外層、最靠近手指端之保護玻璃板。表面蓋板通常是以強化玻璃基板為基材，在上層經過抗反射(AR)、抗眩(AG)、抗污(AS)等加工處理；下層部分則以網印製程製做邊框遮蔽層，最後製得之成品可與觸控感測器(Sensors)貼合而完成—觸控面板。",
          href: "",
          date: "2022/08/29",
          views: "9",
        },
        {
          category: "教育訓練",
          src: "https://e-service.hannstar.com/Content/images/img/iStock-480928463.jpg",
          title: "可靠度試驗-MTBF(Mean Time Between Failure)",
          content:
            "MTBF(Mean Time between failures)是產品在操作使用或測試時間的平均連續無故障時間…",
          href: "",
          date: "2022/08/22",
          views: "9",
        },
      ]
    }
  
    return tableList;
  }
  
export default useServiceIndex;

