import React from "react";
import { urlConfig } from "../../config/urlSetting";
import "./css.scss";
import { I_D360Article, I_D360ArticleList } from "./interface";

const D360ArticleList: React.FC<I_D360ArticleList> = ({ data, articleUrl }) => {
  const componentName = "D360ArticleList";

  const ArticleBlock: React.FC<any> = (articleData) => {
    const { title, tag, articleId } = articleData;
    const previewImage = articleData["preview-image"];
    const date = articleData["published-date"];

    const splitDate = () => {
      const dateArr = date.replaceAll(".", "/").split("/");
      console.log("dateArr", dateArr);
      const year = dateArr[0];
      const month = dateArr[1];
      const day = dateArr[2];
      return {
        year,
        month,
        day,
      };
    };

    return (
      <a className="articleBlock" href={`${articleUrl}?articleID=${articleId}`}>
        <div className="imgBlock">
          {previewImage && (
            <>
              <div className="tag only">{tag}</div>
              <img src={previewImage} alt={title} />
            </>
          )}
        </div>
        <div className="contentWrap">
          <div className="dateBlock">
            <div className="day">{splitDate().day}</div>
            <div className="bottomBlock">
              <div className="year">{splitDate().year}.</div>
              <div className="month">{splitDate().month}</div>
            </div>
          </div>
          <div className="titleBlock">
            {previewImage || <div className="tag only">{tag}</div>}
            <div className="articleTitle">{title}</div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className={`${componentName}Content`}>
      {data.map((item) => (
        <ArticleBlock {...item} />
      ))}
    </div>
  );
};

export default D360ArticleList;
