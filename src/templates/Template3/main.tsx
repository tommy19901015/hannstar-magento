import React from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Banner from "../../component/banner/main";
import { TextAlign , BannerType} from "../../component/banner/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import TitleContent from "../../component/titleContent/main";
import GraphicsCard from "../../component/graphicsCard/main";
import ArticleList2 from "../../component/articleList2/main";
import TabProductList from "../../component/tabProductList/main";
import Graphics3 from "../../component/graphics3/main";
import { I_Template3 } from "./interface";
import "./css.scss";

const Template3: React.FC<I_Template3> = ({ banner, breadcrumbs, module1, module2, module3, module4, module5, module6 }) => {
  const pageName = "Template3"

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
          <Banner {...module1.banner} />
        </div>} />)
    }

    if (module2) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module2.titleContent} />
          <Graphics3 {...module2.graphics3} />
        </div>} />)
    }

    if (module3) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module3.titleContent} />
          <GraphicsCard {...module3.graphicsCard} />
        </div>} />)
    }

    if (module4) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <ArticleList2 {...module4.articleList2} />
        </div>} />)
    }

    if (module5) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module5.tabProductList} />
          {/* <TabProductList /> */}
        </div>} />)
    }

    if (module6) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <div>module6</div>
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

export default Template3;
