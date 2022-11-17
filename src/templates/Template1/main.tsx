import React from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Banner from "../../component/banner/main";
import Video from "../../component/video/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import TitleContent from "../../component/titleContent/main";
import GraphicsCard from "../../component/graphicsCard/main";
import Graphics3 from "../../component/graphics3/main";
import { I_Template1 } from "../../types/Tmeplate1/interface";
import "./css.scss";
import Tab from "../../component/tab/main";

const Template1: React.FC<I_Template1> = ({ banner, tabId, breadcrumbs, module1, module2, module3, module4, module5, module6 }) => {
  const pageName = "Template1"

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

    if (tabId) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<Tab activeId={tabId} />} />)
    }


    if (module1) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module1.titleContent} />
        </div>} />)
    }

    if (module2) {
      module2.map(item => {
        pageContentArr.push(<Columns type={ColType.OneCol}
          content={<div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <Banner {...item.banner} />
          </div>} />)
      })
    }

    if (module3) {
      module3.map(item => {
        pageContentArr.push(<Columns type={ColType.OneCol}
          content={<div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <Video {...item.video} />
          </div>} />)
      })
    }

    if (module4) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <Graphics3 data={module4.graphics3} />
        </div>} />)
    }

    if (module5) {
      module5.map(item => {
        pageContentArr.push(<Columns type={ColType.OneCol}
          content={<div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <Video {...item.video} />
          </div>} />)
      })
    }

    if (module6) {
      pageContentArr.push(<Columns type={ColType.OneCol}
        content={<div className={`${pageName}ModuleBlock`}>
          <TitleContent {...module6.titleContent} />
          <GraphicsCard {...module6.graphicsCard} />
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

export default Template1;
