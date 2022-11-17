import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Banner from "../../component/banner/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import GraphicsLine from "../../component/graphicsLine/main";
import { GraphicsLineType } from "../../component/graphicsLine/interface";
import Graphics3 from "../../component/graphics3/main";
import { TextAlign } from "../../component/banner/interface";
import usePageData from "./pageData";
import { getTodoData } from "../../services/api.service";
import "./css.scss";

const About: React.FC = () => {

  const {
    breadcrumbs,
    bannerTextData,
    graphics3Data,
    milestoneData,
  } = usePageData();

  const Milestone: React.FC = () => {
    return (
      <div className="milestoneBlock">
        <div className="title">發展里程碑</div>
        <ul className="historyList">
          {milestoneData.map((item) => {
            return (
              <li className="">
                <div className="item">
                  <div className="historyDate">{item.date}</div>
                  {item.imgSrc === "" ||
                    <div className="imgBlock"><img src={item.imgSrc} alt={item.title} /></div>}
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
        content={<Banner {...bannerTextData} />} />
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />} />
      <Columns
        type={ColType.OneCol}
        content={<Graphics3 data={graphics3Data} />} />
      <Columns
        type={ColType.OneCol}
        content={<Milestone />} />

    </Layout>
  );
};

export default About;
