import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Banner from "../../component/banner/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Graphics3 from "../../component/graphics3/main";
import usePageData from "./pageData";
import "./css.scss";
import { useTranslation } from "react-i18next";

const AboutIndex: React.FC = () => {
  const { breadcrumbs, bannerTextData, graphics3Data, milestoneData } =
    usePageData();

  const { t } = useTranslation();
  const Milestone: React.FC = () => {
    return (
      <div className="milestoneBlock">
        <div className="title">{`${t('About_Index.milestoneTitle')}`}</div>
        <ul className="historyList">
          {milestoneData.map((item) => {
            return (
              <li className="">
                <div className="item">
                  <div className="historyDate">{item.date}</div>
                  {item.imgSrc === "" || (
                    <div className="imgBlock">
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                  )}
                  <h3>{item.title}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneColFullPage}
        content={<Banner {...bannerTextData} />}
      />
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />}
      />
      <Columns
        type={ColType.OneCol}
        content={<Graphics3 groups={graphics3Data} />}
      />
      <Columns type={ColType.OneCol} content={<Milestone />} />
    </Layout>
  );
};

export default AboutIndex;
