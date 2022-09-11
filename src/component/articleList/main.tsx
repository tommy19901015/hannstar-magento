import React from "react";
import "./css.scss";
import { I_Article, I_Props } from "./interface";

const ArticleList: React.FC<I_Props> = ({ data }) => {
  type I_Category = () => string[];

  const sortArticleCategory: I_Category = () => {
    const uniqueArray = new Set<string>();
    data.forEach((obj) => uniqueArray.add(obj.category));
    return Array.from(uniqueArray);
  };

  const Article: React.FC<I_Article> = (props, idx: number) => {
    sortArticleCategory();
    return (
      <div className="articleBlock" key={idx}>
        <div className="imgBlock">
          <img src={props.src} alt={props.title} />
        </div>
        <div className="rightBlock">
          <div className="textBlock">
            <div className="title">{props.title}</div>
            <div className="content">{props.content}</div>
          </div>
          <div className="articleDetailBlock">
            <span>Published date</span>
            <span className="date">{props.date}</span>
            <span>Views</span>
            <span className="views">{props.views}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="articleList">
      {sortArticleCategory().map((item, idx) => {
        return (
          <div className="categoryListBlock" key={idx}>
            <div className="category">{item}</div>
            <div className="contentBlock">
              {data.map((obj, idx) =>
                obj.category === item ? <Article {...obj} idx={idx} /> : null
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
