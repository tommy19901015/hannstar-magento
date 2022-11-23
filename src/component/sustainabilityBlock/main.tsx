import React from "react";
import { useIsMobile } from "../../hooks";
import sustainabilityData from "../../common/sustainabilityData";
import Graphics3 from "../graphics3/main";
import { I_SustainabilityBlock } from "./interface";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import "./css.scss";

const SustainabilityBlock: React.FC<I_SustainabilityBlock> = ({
  activeId,
  component,
  type,
  handleSustainabilityTab,
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
                <li
                  className={`${activeId === index ? "active" : ""}`}
                  onClick={() => handleSustainabilityTab(tab.type)}
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
    <>
      {component === "tab" ? (
        <Tab />
      ) : (
        <Columns
          type={ColType.OneCol}
          content={
            <Graphics3 groups={[{ ...graphics3Data }]} />
          }
        />

      )}
    </>
  );
};

export default SustainabilityBlock;
