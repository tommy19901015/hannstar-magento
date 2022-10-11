import React from "react";
import "./css.scss";
import { I_Article, I_ArticleList2 } from "./interface";

const ArticleList2: React.FC<I_ArticleList2> = ({ title, data }) => {
  const componentName = "ArticleList2";

  const ArticleBlock: React.FC<I_Article> = (article, index) => {
    return (
      <a className="articleBlock" href={article.href} key={index}>
        <div className="imgBlock">
          <img src={article.src} alt={article.title} />
        </div>
        <div className="contentWrap">
          <div className="articleTitle">{article.title}</div>
          <div className="date">{article.date}</div>
          <div className="description">{article.description}</div>
        </div>
      </a>
    );
  };

  return (
    <div className={`${componentName}Content`}>
      <div className="title">{title}</div>
      <div className="articleContent">
        {data.map((item, index) => (
          <div className="catalogBlock" key={index}>
            <div className="catalogTitle">{item.catalog}</div>
            <div className="catalogContent">
              {item.articleDatas.map((article, index) => (
                <ArticleBlock {...{ ...article, index }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList2;
