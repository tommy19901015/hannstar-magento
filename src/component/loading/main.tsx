import React from "react";
import { I_Popup } from "./interface"
import "./css.scss";

const Loading: React.FC<I_Popup> = ({ height }) => {
  const componentName = "Loading";

  return (
    <div className={`${componentName}Content`} style={{ height }}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Loading;
