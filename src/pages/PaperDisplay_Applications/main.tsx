import React from "react";
import Layout from "../../component/layout/main";
import TemplateLayout from "../../templates/TemplateLayout/main";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import D360Templates from "../../templates/D360Templates/main";
import "./css.scss";

const PaperDisplayApplications: React.FC = () => {
  const pageName = "PaperDisplayApplications";
  const pageData = usePageData();
  const D360TemplatesProp = {
    site: "/paperdisplay/applications",
    method: "GetAllArticles",
    theme: "paperDisplay",
  };

  const IconBlock = () => {
    const iconData = [
      {
        src: "https://fakeimg.pl/250x100/",
        text: "智慧城市",
        href: "",
      },
      {
        src: "https://fakeimg.pl/250x100/",
        text: "智慧零售",
        href: "",
      },
      {
        src: "https://fakeimg.pl/250x100/",
        text: "智慧育樂",
        href: "",
      },
      {
        src: "https://fakeimg.pl/250x100/",
        text: "健康關懷",
        href: "",
      },
      {
        src: "https://fakeimg.pl/250x100/",
        text: "智能製造",
        href: "",
      },
    ];

    return (
      <div className={`${pageName}IconBlock`}>
        <div className={`${pageName}Title`}>應用</div>
        <div className={`${pageName}IconContent`}>
          {iconData.map((item) => (
            <div className="block">
              <img src={item.src} alt={item.text} />
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <TemplateLayout {...pageData} />
        <Columns
          type={ColType.OneCol}
          content={
            <>
              <D360Templates {...D360TemplatesProp} />
              <IconBlock />
            </>
          }
        />
      </div>
    </Layout>
  );
};

export default PaperDisplayApplications;
