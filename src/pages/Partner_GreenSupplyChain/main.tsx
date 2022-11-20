import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Banner from "../../component/banner/main";
import { TextAlign } from "../../component/banner/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import TitleContent from "../../component/titleContent/main";
import Graphics3 from "../../component/graphics3/main";
import "./css.scss";

const bannerProps = {
  src: "https://partner.hannstar.com/images/supplier/supplychain/banner.jpg",
  title: "綠色供應鏈",
  text: "瀚宇彩晶致力於提供永續、環境友善且高品質的產品給客戶，作為全球領導性面板供應商，我們期待與供應商夥伴共同創造永續經營價值",
  textAlign: TextAlign.BottomLeft,
};

const breadcrumbProps = {
  title: "",
  breadcrumbsLink: [
    {
      text: "首頁",
      href: "",
    },
    {
      text: "綠色供應鏈",
      href: "",
    },
  ],
};

const titleContentProps = {
  title: "綠色供應鏈",
  content:
    "瀚宇彩晶身為全球面板龍頭，承諾提供環保永續性產品給客戶我們將幫助合作夥伴達成永續經營及高效能產品，成為我們永續供應鏈成員",
};

const tab0_titleContentProps = {
  title: "勞工權益",
  content:
    "瀚宇彩晶位以責任商業聯盟(RBA)規範項目進行供應商風險評估與稽核，承諾維護勞工健康、職場安全並持續改善其權益，安排年度內部稽核及召開管理審查會議及時糾正，亦將此承諾要求認證供應商遵守並執行，落實彩晶善循環共創更好的職場環境。",
};

const tab1_titleContentProps = {
  title: "環境與安全",
  content:
    "瀚宇彩晶致力於提供永續且亮彩的綠色環境給下一代，我們注重產品是否能減少對於環境衝擊與損害，鼓勵合作供應商取得ISO環境及職安管理認證，更進一步協助供應商進行永續評估作業，共同實踐永續經營理念。",
};

const tab2_titleContentProps = {
  title: "綠色產品",
  content:
    "瀚宇彩晶致力於持續符合國際綠色法規、提供綠色產品及進行環保盤查達成永續供應鏈目標，身為永續供應鏈一員，彩晶邀請您與我們一起創造更好的價值目標，以提供客戶高附加價值的產品與服務。",
};

const tab2_greenProductBlock = [
  {
    src: "https://partner.hannstar.com/images/supplier/supplychain/011.png",
    title: "REACH",
    text: "REACH是為保護人類與環境，對人類健康或環境有嚴重危害或影響之物質，建立的安全屏障，如限制物質用途及濃度",
  },
  {
    src: "https://partner.hannstar.com/images/supplier/supplychain/012.png",
    title: "RoHS2.0+HF",
    text: "RoHS及HF分別是由歐盟立法制定的一項強制性標準，用於規範電子電器產品的材料及技術標準及規範無鹵阻燃劑的要求",
  },
  {
    src: "https://partner.hannstar.com/images/supplier/supplychain/013.png",
    title: "不使用衝突礦產",
    text: "衝突礦產主要為鎢 、錫、鉭、金、鈷及雲母，對電子業製造為極重要的原物料，經常使用在電器產品零組件當中",
  },
  {
    src: "https://partner.hannstar.com/images/supplier/supplychain/014.png",
    title: "IMDS / CAMDS",
    text: "全球汽車廠商以生產件符合程序 (PPAP) / 產品承認書 (PSW) 中要求車廠供應商提交物質資料監控管理整體供應鏈全物質狀態",
  },
  {
    src: "https://partner.hannstar.com/images/supplier/supplychain/015.png",
    title: "chem SHERPA",
    text: "chemSHERPA提供了可應用與整條供應鏈的資訊傳遞機制，正確管理產品中含有的化學物質，持續應對日益嚴格的法規",
  },
  {
    src: "https://partner.hannstar.com/images/supplier/supplychain/016.png",
    title: "環保規範盤查",
    text: "透過供應商對環保規範資料調查，進行審核及承認，確認符合國際法規要求及客戶規範",
  },
  {
    src: "https://partner.hannstar.com/images/supplier/supplychain/017.png",
    title: "不使用宣告書/承諾書",
    text: "依各客戶要求環境管理物質不使用宣告書/承諾書，包括產品本身、製成相關零部件、輔助材料及包裝材料",
  },
];

const tab3_titleContentProps = {
  title: "品質與服務",
  content:
    "瀚宇彩晶承諾提供給客戶高品質良率之產品，供應商需備有ISO 9001(工控)、IATF 16949 Steel(車載)認證，新進供應商必備之品質評估表、保證合約及保密切結書，確認啟案後展開執行稽核調查與相關合約簽訂展開雙方交易。",
};

const tab4_titleContentProps = {
  title: "年度稽核",
  content:
    "瀚宇彩晶為確保與供應商能貫徹共同永續經營價值，每年定期進行稽查評核，以確保品質系統皆能達到彩晶規範標準，以品質、價格、交期、技術及服務為五大評核指標，積極協助未達標供應商進行限期改善。",
};

const tab4_stepProps = [
  {
    step: "步驟一",
    title: "年度自主評核",
    text: "供應商應依據與彩晶規章於每年進行評核，主要針對QSA、QPA及RBA進行自主稽核。",
  },
  {
    step: "步驟二",
    title: "實地採檢 評列改善項目",
    text: "彩晶將進行實地採檢，依品質、價格、交期、技術及服務進行評核，並條列修改改善項目。",
  },
  {
    step: "步驟三",
    title: "提出改善報告",
    text: "供應商應根據各項目提出有效改善計畫.，於時限內完成改善後，通知彩晶相關人員。",
  },
  {
    step: "步驟四",
    title: "落實改善計畫",
    text: "供應商依報告書進行改善落實，彩晶將針對供應商之需要協助計畫，共創永續價值。",
  },
];

const tab5_titleContentProps = {
  title: "供應商系統",
  content:
    "為持續與認證供應商維持緊密合作關係，提供多樣數位系統使供應商零距離與瀚宇彩晶互動，新產品、新技術、多樣化服務及解決方案皆能透過以下系統與彩晶進行商業往來。",
};

const tab5_cardProps = [
  {
    title: "新技術合作",
    subTitle1: "適用對象",
    text1: "所有供應商",
    subTitle2: "系統簡述",
    text2: "新供應商推廣產品及技術服務",
  },
  {
    title: "供應商認證系統",
    subTitle1: "適用對象",
    text1: "欲加入彩晶之供應商",
    subTitle2: "系統簡述",
    text2: "新供應商認證系統，具備彩晶審查必要資料方得進行認證",
  },
  {
    title: "VIP採購系統",
    subTitle1: "適用對象",
    text1: "彩晶合格供應商",
    subTitle2: "系統簡述",
    text2:
      "採購與供應商之互動平台，進行雙向資訊交流，包含採購單、交期、查詢等作業",
  },
  {
    title: "事件管理",
    subTitle1: "適用對象",
    text1: "彩晶合格供應商",
    subTitle2: "系統簡述",
    text2: "彩晶合格供應商進行新產品推廣、教育訓練與會議記錄",
  },
  {
    title: "綠色產品管理系統",
    subTitle1: "適用對象",
    text1: "彩晶合格供應商",
    subTitle2: "系統簡述",
    text2: "確保供應商所提供原料、零件或半成品皆符合「瀚宇彩晶產品環保規格」",
  },
  {
    title: "供應商品質管理系統",
    subTitle1: "適用對象",
    text1: "彩晶合格供應商",
    subTitle2: "系統簡述",
    text2: "彩晶合格供應商月評核系統及供應商ISO、IATF認證文管資料庫",
  },
];

const graphics3Props = [
  {
    src: "https://partner.hannstar.com/images/supplier/supplychain/supplier.png",
    title: "成為瀚宇彩晶合格供應商",
    content:
      "瀚宇彩晶供應商協同合作平台探索無限商機可能，致力於提供高品質且符合國際綠色法規之產品給客戶，堅守永續經營價值，加入彩晶，我們的用心您看的見!",
    btnText: "聯絡我們",
    btnHref: "/",
    imgSizePercent: 50
  },
];

const PartnerGreenSupplyChain: React.FC = () => {
  const pageName = "PartnerGreenSupplyChain";
  const [tab, setTab] = useState<number>(0);

  const AchievementBlock = () => {
    return (
      <div className="achievementBlock">
        <div className="title">瀚宇彩晶永續成就</div>
        <div className="content">
          <img
            src="https://partner.hannstar.com/images/supplier/supplychain/percentage01.png"
            alt="percentage01"
          />
          <img
            src="https://partner.hannstar.com/images/supplier/supplychain/percentage02.png"
            alt="percentage02"
          />
          <img
            src="https://partner.hannstar.com/images/supplier/supplychain/percentage03.png"
            alt="percentage03s"
          />
        </div>
        <a href="/" className="reportBtn">
          瀚宇彩晶ESG環境永續報告書
        </a>
      </div>
    );
  };

  const TabBlock = () => {
    const changeTab = (index: number) => setTab(index);

    const tabImgArr = [
      "https://partner.hannstar.com/images/supplier/supplychain/01.png",
      "https://partner.hannstar.com/images/supplier/supplychain/02.png",
      "https://partner.hannstar.com/images/supplier/supplychain/03.png",
      "https://partner.hannstar.com/images/supplier/supplychain/04.png",
      "https://partner.hannstar.com/images/supplier/supplychain/05.png",
      "https://partner.hannstar.com/images/supplier/supplychain/06.png",
    ];

    return (
      <div className={`${pageName}TabBlock`}>
        {tabImgArr.map((src, index) => (
          <div
            className={`tab ${tab === index ? "active" : ""}`}
            onClick={() => changeTab(index)}
          >
            <img src={src} alt={index.toString()} />
          </div>
        ))}
      </div>
    );
  };


  const TabContent0 = () => {
    return (
      <div className={`${pageName}TabContent`}>
        <Columns
          type={ColType.OneCol}
          content={
            <>
              <div className={`${pageName}TitleContent`}>
                <TitleContent {...tab0_titleContentProps} />
              </div>
              <div className="RBA">
                <div className="title">RBA行為準則</div>
                <img
                  alt="RBA行為準則"
                  src="https://partner.hannstar.com/images/supplier/supplychain/chart01.png"
                />
                <div className="text">
                  RBA行為準則專為電子行業或電子為主要組成部份的行業和其供應鏈訂定規範，確保工作環境的安全、工人受到尊重並富有尊嚴、商業營運合乎環保性質並遵守道德操守，準則由五個部分組成:
                  勞工、健康與安全、環境、管理體系及商業道德，參與者必須在整個供應鏈中倡議採用本準則，並完全遵守其經營所在國家的法律、法例及法規。
                </div>
              </div>
              <div className={`${pageName}DownloadBlock`}>
                <div className="title">文件下載專區</div>
                <table>
                  <thead>
                    <tr>
                      <td>文件</td>
                      <td>內文簡述</td>
                      <td>下載</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RBA供應商承諾書</td>
                      <td>簽訂合格供應商企業社會責任承諾書</td>
                      <td>
                        <img
                          alt="download"
                          src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>供應商勞工與道德風險評估表</td>
                      <td>
                        評估表準則分為勞工、健康安全、環境、道德規範及管理系統
                      </td>
                      <td>
                        <img
                          alt="download"
                          src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          }
        />
      </div>
    );
  };

  const TabContent1 = () => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}TabContent`}>
            <div className={`${pageName}TitleContent`}>
              <TitleContent {...tab1_titleContentProps} />
            </div>
            <div className="ISO">
              <div className="title">瀚宇彩晶倡導供應商取得</div>
              <div className="contentBlock">
                <div className="leftBlock">
                  <div className="title">ISO 14001</div>
                  <div className="text">
                    環境管理系統是為提供環保的知識工具與技術來管理環境風險，適用所有產業組織，以控制對環境的衝擊，並關注對環境污染、不當的廢棄物管理、氣候變遷等議題，達成環境、社會及經濟之均衡。
                  </div>
                </div>
                <div className="rightBlock">
                  <div className="title">ISO 45001</div>
                  <div className="text">
                    提供建立職業健康與安全衛生管理系統(OHSMS)，藉由制定和實施有效的政策和目標，使組織能夠鑑別和預防其風險，保護並提供員工一個安全可靠的工作場所，更能達到企業永續經營的目標，展現企業的社會責任。
                  </div>
                </div>
              </div>
            </div>
            <div className="eight">
              <div className="title">瀚宇彩晶環安八大政策</div>
              <div className="contentBlock">
                <div className="text">#1 符合法令規章要求</div>
                <div className="text">#2 預防污染消除危害</div>
                <div className="text">#3 持續改善環安績效</div>
                <div className="text">#4 節約能源資源使用</div>
                <div className="text">#5 落實全員諮商參與</div>
                <div className="text">#6 降低產品環境衝擊</div>
                <div className="text">#7 環境生態保護承諾</div>
                <div className="text">#8 促進健康降低風險</div>
              </div>
            </div>
          </div>
        }
      />
    );
  };

  const TabContent2 = () => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}TabContent`}>
            <div className={`${pageName}TitleContent`}>
              <TitleContent {...tab2_titleContentProps} />
            </div>
            <div className="greenProduct">
              {tab2_greenProductBlock.map((item, index) => (
                <div className="contentBlock" key={index}>
                  <img src={item.src} alt={item.title} />
                  <div className="textBlock">
                    <div className="title">{item.title}</div>
                    <div className="text">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${pageName}DownloadBlock`}>
              <div className="title">文件下載專區</div>
              <table>
                <thead>
                  <tr>
                    <td>文件</td>
                    <td>內文簡述</td>
                    <td>下載</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>環保規範文件</td>
                    <td>
                      因應國際環保法規與客戶產品之環保要求，制定規範條款以確保減輕環境衝擊及保障人體健康{" "}
                    </td>
                    <td>
                      <img
                        alt="download"
                        src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>不使用宣告書/承諾書</td>
                    <td>確保符合綠色法規要求，不提供危害地球環境之產品</td>
                    <td>
                      <img
                        alt="download"
                        src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      />
    );
  };

  const TabContent3 = () => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}TabContent`}>
            <div className={`${pageName}TitleContent`}>
              <TitleContent {...tab3_titleContentProps} />
            </div>
            <div className="must">
              <div className="title">認證供應商必須取得</div>
              <div className="mustContentBlock">
                <img
                  src="https://partner.hannstar.com/images/supplier/supplychain/iso9001.png"
                  alt="ISO9001"
                />
                <img
                  src="https://partner.hannstar.com/images/supplier/supplychain/iatf16949.png"
                  alt="IATF16949"
                />
              </div>
            </div>
            <div className={`${pageName}DownloadBlock`}>
              <div className="title">文件下載專區</div>
              <table>
                <thead>
                  <tr>
                    <td>文件</td>
                    <td>內文簡述</td>
                    <td>下載</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>新供應商導入檢核表</td>
                    <td>
                      針對新供應商進行製程、品質及服務等面向檢核，確保認證各項皆符合標準
                    </td>
                    <td>
                      <img
                        alt="download"
                        src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>品質保證合約</td>
                    <td>依彩晶要求必要品質規範，簽訂保證合約確保產品品質</td>
                    <td>
                      <img
                        alt="download"
                        src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>NDA保密切結書</td>
                    <td>
                      確保合作過程屬雙方安全責任，要求新進供應商需簽定保密協議方得開始交易
                    </td>
                    <td>
                      <img
                        alt="download"
                        src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      />
    );
  };

  const TabContent4 = () => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}TabContent`}>
            <div className={`${pageName}TitleContent`}>
              <TitleContent {...tab4_titleContentProps} />
            </div>
            <div className="step">
              <div className="contentBlock">
                {tab4_stepProps.map((item, index) => (
                  <div className="stepBlock" key={index}>
                    <div className="stepTitle">{item.step}</div>
                    <div className="title">{item.title}</div>
                    <div className="text">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${pageName}DownloadBlock`}>
              <div className="title">文件下載專區</div>
              <table>
                <thead>
                  <tr>
                    <td>文件</td>
                    <td>內文簡述</td>
                    <td>下載</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>品質系統稽核表QSA</td>
                    <td>依評核表項目對主要材料供應商進行品質系統抽檢</td>
                    <td>
                      <img
                        alt="download"
                        src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>供應商勞工環安稽核表RBA</td>
                    <td>
                      針對主要材料供應商進行職安評估，確保勞工環境符合RBA要求基準{" "}
                    </td>
                    <td>
                      <img
                        alt="download"
                        src="https://partner.hannstar.com/images/supplier/supplychain/icon-download.png"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        }
      />
    );
  };

  const TabContent5 = () => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}TabContent`}>
            <div className={`${pageName}TitleContent`}>
              <TitleContent {...tab5_titleContentProps} />
            </div>
            <div className="cardBlock">
              {tab5_cardProps.map((item, index) => (
                <div className="card" key={index}>
                  <div className="title">{item.title}</div>
                  <div className="subTitle">{item.subTitle1}</div>
                  <div className="text">{item.text1}</div>
                  <div className="subTitle">{item.subTitle2}</div>
                  <div className="text">{item.text2}</div>
                </div>
              ))}
            </div>
          </div>
        }
      />
    );
  };

  const BecomePartnerBlock = () => {
    return (
      <Columns
        type={ColType.OneCol}
        bgColor={"#f6f6f6"}
        content={<div className={`${pageName}Graphics3`}>
          <Graphics3 groups={graphics3Props} />
        </div>} />)
  }

  const handleTabContentObj: any = {
    "0": <TabContent0 />,
    "1": <TabContent1 />,
    "2": <TabContent2 />,
    "3": <TabContent3 />,
    "4": <TabContent4 />,
    "5": <TabContent5 />,
  };

  return (
    <Layout>
      <div className={`${pageName}ContentBlock`}>
        <Columns
          type={ColType.OneColFullPage}
          content={<Banner {...bannerProps} />}
        />
        <Columns
          type={ColType.OneCol}
          content={
            <>
              <Breadcrumbs {...breadcrumbProps} />
              <TitleContent {...titleContentProps} />
            </>
          }
        />
        <Columns
          bgColor={"#e6e6e6"}
          type={ColType.OneCol}
          content={<AchievementBlock />}
        />
        <Columns
          type={ColType.OneCol}
          content={<TabBlock />}
        />
        {handleTabContentObj[tab]}
        <BecomePartnerBlock />
      </div>
    </Layout>
  );
};

export default PartnerGreenSupplyChain;
