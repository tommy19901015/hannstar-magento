import React from "react";
import "./css.scss";
import { I_D360Article2, I_D360ArticleList2 } from "./interface";
import { urlConfig } from "../../config/urlSetting";

const D360ArticleList2: React.FC<I_D360ArticleList2> = ({
  data,
  showQuantity,
}) => {
  const componentName = "D360ArticleList2";

  const ArticleBlock: React.FC<I_D360Article2> = (article, index) => {
    return (
      <a
        className="articleBlock"
        href={`${urlConfig().service.article.href}?articleID=${
          article.articleId
        }`}
        key={index}
      >
        <div className="imgBlock">
          <img src={article["preview-image"]} alt={article.title} />
        </div>
        <div className="contentWrap">
          <div className="articleTitle">{article.title}</div>
          <div className="date">{article["published-date"]}</div>
          <div className="description">
            {Array.isArray(article.description) ? (
              <>
                {article.description.map((childcontent) => (
                  <ul className="content">
                    <li>{childcontent}</li>
                  </ul>
                ))}
              </>
            ) : (
              <div className="content">{article.description}</div>
            )}
          </div>
          <div className="tagBlock">
            {article.tags &&
              article.tags.map((tag) => <div className="tag">{`#${tag}`}</div>)}
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className={`${componentName}Content`}>
      <div className="articleContent">
        {showQuantity
          ? data
              .filter((item, index) => showQuantity > index)
              .map((item, index) => (
                <div className="articleBlock" key={index}>
                  <ArticleBlock {...item} />
                </div>
              ))
          : data.map((item, index) => (
              <div className="articleBlock" key={index}>
                <ArticleBlock {...item} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default D360ArticleList2;
