import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import { TextAlign, BannerType } from "../../component/banner/interface";
import usePageData from "./pageData";
import Banner from "../../component/banner/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

//===========================================
import D360_5Application from "../../D360fakeData/D360_5Application.json";
//===========================================

const D360Application: React.FC = () => {
  const pageName = "D360Application";

  const [D360Data, setD360Data] = useState<any>(D360_5Application.data[0]);

  useEffect(() => {
    console.log("D360_5Application", D360_5Application);
    setD360Data(D360_5Application.data[0]);
    initData();
  }, []);

  // const pageData = usePageData();
  const D360TemplatesProp = {
    site: "/paperdisplay/applications",
    method: "GetAllArticles",
    theme: "paperDisplay",
  };

  const initData = () => {
    console.log("initData", D360_5Application);
  };

  const pageData = {
    props: [
      {
        type: "FullBanner",
        data: [
          {
            src: D360Data.bannerimg,
            title: D360Data.bannertitle,
            text: D360Data.bannertext,
            textAlign: TextAlign.BottomLeft,
            type: BannerType.Main,
          },
        ],
      },
      {
        type: "BreadcrumbsBlock",
        data: [
          {
            title: "",
            breadcrumbsLink: [
              {
                text: "首頁",
                href: "",
              },
              {
                text: "顯示紙技術",
                href: "",
              },
            ],
          },
        ],
      },
      {
        type: "TitleContentBlock",
        data: [
          {
            title: D360Data.pagetitle,
            content: D360Data.pagecontent,
          },
        ],
      },
    ],
  };

  const LeftBlock = () => {
    return <div className="leftBlock">filter</div>;
  };

  const RightBlock = () => {
    const bannerProp = {
      src: D360Data.data[0].deviceimg,
      title: D360Data.data[0].devicetitle,
      text: D360Data.data[0].devicetext,
      textAlign: TextAlign.BottomLeft,
    };

    return (
      <div className="rightBlock">
        <div className="topBlock">
          <Banner {...bannerProp} />
        </div>
        <div className="bottomBlock">
          {D360Data.data[0].subimg.map((item: string) => (
            <img src={item} alt={item} />
          ))}
        </div>
      </div>
    );
  };

  const ProductBlock = () => {
    return <div className="productBlock">product</div>;
  };

  const PantnerBlock = () => {
    return (
      <div className="pantnerBlock">
        <div className="pantnerTitle">合作夥伴</div>
        <div className="logoBlock">
          {D360Data.partner.map((item: string) => (
            <img src={item} alt={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        {D360Data && <TemplateLayout {...pageData} />}
        <Columns
          type={ColType.OneCol}
          content={
            <div className={`${pageName}Container`}>
              <div className="row">
                <LeftBlock />
                <RightBlock />
              </div>
              <ProductBlock />
              <PantnerBlock />
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default D360Application;
