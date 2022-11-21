import React, { useState, useEffect } from "react";
import { useIsMobile } from "../../hooks";
import sustainabilityData from "../../common/sustainabilityData"
import "./css.scss";

type Props = {
  activeId: number
  type?: string
  data?: {
    id: number,
    text: string
    href: string
  }[]
}

const Tab: React.FC<Props> = ({ activeId, data, type }) => {
  const isMobile = useIsMobile();
  const tabs = [
    {
      id: 1,
      text: '董事會名單'
    },
    {
      id: 2,
      text: '審計委員會'
    },
    {
      id: 3,
      text: '薪酬委員會'
    },
    {
      id: 4,
      text: '內部稽核'
    },
    {
      id: 5,
      text: '誠信經營'
    },
    {
      id: 6,
      text: '風險管理'
    },
    {
      id: 7,
      text: '資訊安全管理'
    },
    {
      id: 8,
      text: '內部重大資訊處理既防範內線交易管理'
    },
    {
      id: 9,
      text: '公司治理章程與程序'
    },
  ]
  // const tabData = sustainabilityData()[type]
  const renderData = tabs


  return (
    <div className="TabBlock">
      {
        isMobile ?
          (
            <select name="" id="" className='dropdown'>
              {renderData.map((tab: any) => (
                <option key={tab.id} value={tab.text}>
                  {tab.text}
                </option>
              ))}
            </select>
          )
          :
          (
            <ul>
              {
                renderData && renderData.map((tab: any) => (
                  <li className={`${activeId === tab.id ? "active" : ""}`}>
                    <a href="#">{tab.text}</a>
                  </li>
                ))
              }
            </ul>
          )
      }
    </div>
  );
};

export default Tab;
