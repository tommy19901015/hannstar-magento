import React, { useState, useEffect } from "react";
import { useIsMobile } from "../../hooks";
import sustainabilityData from "../../common/sustainabilityData";
import Graphics3 from "../graphics3/main";
import { I_SustainabilityBlock } from "./interface";
import "./css.scss";

const SustainabilityBlock: React.FC<I_SustainabilityBlock> = ({
  activeId,
  component,
  type,
}) => {
  const isMobile = useIsMobile();

  const tabData = sustainabilityData().filter(
    (item: any) => item.type === type
  )[0].tab;

  const graphics3Data = sustainabilityData().filter(
    (item: any) => item.type === type
  )[0].graphics3;

  const Tab = () => {
    return (
      <div className="TabBlock">
        {isMobile ? (
          <select className="dropdown">
            {tabData.map((tab: any) => (
              <option key={tab.id} value={tab.text}>
                {tab.text}
              </option>
            ))}
          </select>
        ) : (
          <ul>
            {tabData &&
              tabData.map((tab: any, index: number) => (
                <li className={`${activeId === index ? "active" : ""}`}>
                  <a href="/">{tab.text}</a>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <>
      {component === "tab" ? (
        <Tab />
      ) : (
        <Graphics3 groups={[{ ...graphics3Data }]} />
      )}
    </>
  );
};

export default SustainabilityBlock;
