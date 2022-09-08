import React from "react";
import "./css.scss";

interface I_Props {
  data: {
    title: string
    src: string
    href: string
  }[]
}

const PlatformEntry: React.FC<I_Props> = ({ data }) => {
  return (
    <div className="platformEntryBlock">
      {data.map((item, idx) => <div className={`item style${idx}`} key={idx}>
        <a href={item.href} target="_blank" rel="noreferrer">
          <img src={item.src} alt={item.title} />
          <h2>{item.title}</h2>
        </a>
      </div>)}
    </div>
  );
};

export default PlatformEntry;
