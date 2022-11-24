import React from "react";
import { I_PlatformEntry } from "./interface";
import "./css.scss";

const PlatformEntry: React.FC<I_PlatformEntry> = ({ data }) => {
  return (
    <div
      className={`platformEntryBlock ${data.length < 4 ? "row" : data.length % 2 ? "odd" : ""
        }`}
    >
      {data.map((item, idx) => (
        <div className={`item style${idx}`} key={idx}>
          <a href={item.href}>
            <img src={item.src} alt={item.title} />
            <div className="platformTitle">{item.title}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PlatformEntry;
