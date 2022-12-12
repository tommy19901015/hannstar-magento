import React from "react";
import "./css.scss";

const Loading: React.FC = () => {
  const componentName = "Loading";

  return (
    <div className={`${componentName}Content`}>
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
