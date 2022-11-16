import React from "react";
import "./css.scss";
import { I_D360Article, I_D360ArticleList } from "./interface";

const D360ArticleList: React.FC<I_D360ArticleList> = ({ data }) => {
  const componentName = "D360ArticleList";
  console.log("data", data);

  const ArticleBlock: React.FC<I_D360Article> = ({ title, src, tag, date }) => {
    const splitDate = () => {
      const dateArr = date.split("/")
      const year = dateArr[0]
      const month = dateArr[1]
      const day = dateArr[2]
      return {
        year,
        month,
        day
      }
    }

    return (
      <a className="articleBlock" href={"/"}>
        <div className="imgBlock">
          {/* <div className="tag">{tag}</div> */}
          <div className="tag">企業永續</div>
          <img src="https://fakeimg.pl/300x200/ddd/" alt={title} />
          {/* <img src={src} alt={title} /> */}
        </div>
        <div className="contentWrap">
          <div className="dateBlock">
            <div className="day">{splitDate().day}</div>
            <div className="bottomBlock">
              <div className="year">{splitDate().year}.</div>
              <div className="month">{splitDate().month}</div>
            </div>
          </div>
          <div className="articleTitle">{title}</div>
        </div>
      </a>
    );
  };

  return (
    <div className={`${componentName}Content`}>
      {data.map(item => <ArticleBlock {...item} />)}
    </div>
  );
};

export default D360ArticleList;
