import React from "react";
import { useIsMobile } from "../../hooks";
import aboutData from "../../common/aboutData";
import { I_AboutBlock } from "./interface";
import "./css.scss";

const AboutBlock: React.FC<I_AboutBlock> = ({
  activeId,
  type,
  handleAboutTab,
}) => {
  const isMobile = useIsMobile();

  const tabData = aboutData().filter(
    (item: any) => item.type === type
  )[0].tab;


  const Tab = () => {
    return (
      <div className="TabBlock">
        {isMobile ? (
          <select
            className="dropdown"
            onChange={(e) => handleAboutTab(e.target.value)}>
            {tabData.map((tab: any, index: number) => {
              return activeId === index ? <option key={tab.id} value={tab.type} selected>
                {tab.text}
              </option> : <option key={tab.id} value={tab.type}>
                {tab.text}
              </option>
            })}
          </select>
        ) : (
          <ul>
            {tabData &&
              tabData.map((tab: any, index: number) => (
                <li
                  className={`${activeId === index ? "active" : ""}`}
                  onClick={() => handleAboutTab(tab.type)}
                >
                  {tab.text}
                </li>
              ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <Tab />
  );
};

export default AboutBlock;
