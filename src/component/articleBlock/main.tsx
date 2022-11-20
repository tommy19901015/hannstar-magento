import React from "react";
import "./css.scss";
import { I_Article } from "./interface";

const ArticleBlock: React.FC<I_Article> = ({data}) => {
  console.log('data',data.length)
  return (
    <div className="articleList">

      {data.map((item, idx) => {
        return (
          <div key={idx} className={`item content-${idx}`}>
            <img src={item.src} alt={item.title} />
            <span className="text">{item.title}</span>
          </div>
        );
      })}
      </div>

  );
};

export default ArticleBlock;
