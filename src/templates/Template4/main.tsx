import React from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Banner from "../../component/banner/main";
import { TextAlign } from "../../component/banner/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import TitleContent from "../../component/titleContent/main";
import GraphicsCard from "../../component/graphicsCard/main";
import ArticleList2 from "../../component/articleList2/main";
import TabProductList from "../../component/tabProductList/main";
import Graphics3 from "../../component/graphics3/main";
import Graphics2 from "../../component/graphics2/main";
import { I_Template4 } from "./interface";
import "./css.scss";

const Template4: React.FC<I_Template4> = ({ banner, breadcrumbs, module1, module2, module3, module4, module5 }) => {
  const pageName = "Template4"

  const pageBuilder = () => {
    const pageContentArr: JSX.Element[] = []
    if (banner) {
      pageContentArr.push(<Columns type={ColType.OneColFullPage}
        content={<Banner {...banner} />}
      />)
    }

    if (breadcrumbs) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbs} />} />)
    }

    if (module1) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module1.titleContent} />
          <Graphics2 {...module1.graphics2} />
        </div>} />)
    }

    if (module2) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module2.titleContent} />
          <div>人資</div>
        </div>} />)
    }

    if (module3) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module3.titleContent} />
          <Banner {...module3.banner} />
        </div>} />)
    }

    if (module4) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module4.titleContent} />
          <GraphicsCard {...module4.graphicsCard} />
        </div>} />)
    }

    if (module5) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module5.titleContent} />
          <GraphicsCard {...module5.graphicsCard} />
        </div>} />)
    }

    return pageContentArr
  }

  const MainContainer = () => {
    return (
      <>
        {pageBuilder().map(item => item)}
      </>
    );
  };
  return <MainContainer />;
};

export default Template4;
