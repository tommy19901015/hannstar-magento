import React from "react";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Banner from "../../component/banner/main";
import Video from "../../component/video/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import TitleContent from "../../component/titleContent/main";
import GraphicsCard from "../../component/graphicsCard/main";
import Graphics3 from "../../component/graphics3/main";
import ImgGrid from "../../component/imgGrid/main";
import { I_Template1 } from "../../types/Tmeplate1/interface";
import "./css.scss";
import Tab from "../../component/sustainabilityBlock/main";

const newnewTemplate1: React.FC<any> = (props) => {
  const pageName = "Template1";

  const FullBanner = (data: any) => (
    <Columns type={ColType.OneColFullPage} content={<Banner {...data} />} />
  );

  const BannerBlock = (data: any) => (
    <Columns
      type={ColType.OneCol}
      content={
        <div className={`${pageName}ModuleBlock`}>
          <Banner {...data} />
        </div>
      }
    />
  );

  const BreadcrumbsBlock = (data: any) => (
    <Columns type={ColType.OneCol} content={<Breadcrumbs {...data} />} />
  );

  const SustainabilityGraphics3 = (data: any) => (
    <Columns
      type={ColType.OneCol}
      content={
        <div className={`${pageName}ModuleBlock`}>
          <Graphics3 {...data} />
        </div>
      }
    />
  );

  const TitleContent = (data: any) => (
    <Columns
      type={ColType.OneCol}
      content={
        <div className={`${pageName}ModuleBlock`}>
          <TitleContent {...data} />
        </div>
      }
    />
  );

  const TitleContentImgGrid = (data: any) => (
    <Columns
      type={ColType.OneCol}
      content={
        <div className={`${pageName}ModuleBlock`}>
          <TitleContent {...data} />
          <ImgGrid {...data} />
        </div>
      }
    />
  );

  const TitleContentVideo = (data: any) => (
    <Columns
      type={ColType.OneCol}
      content={
        <div className={`${pageName}ModuleBlock`}>
          <TitleContent {...data} />
          <Video {...data} />
        </div>
      }
    />
  );

  const TitleContentGraphicsCard = (data: any) => (
    <Columns
      type={ColType.OneCol}
      content={
        <div className={`${pageName}ModuleBlock`}>
          <TitleContent {...data} />
          <GraphicsCard {...data} />
        </div>
      }
    />
  );

  const mappingType = (data: any) => {
    return {
      FullBanner: <FullBanner />,
      BannerBlock: <BannerBlock {...data} />,
      BreadcrumbsBlock: <BreadcrumbsBlock />,
      SustainabilityGraphics3: <SustainabilityGraphics3 />,
      TitleContent: <TitleContent />,
      TitleContentGraphicsCard: <TitleContentGraphicsCard />,
      TitleContentImgGrid: <TitleContentImgGrid />,
      TitleContentVideo: <TitleContentVideo />,
    };
  };

  const pageBuilder = () => {
    const testProps = [
      {
        type: "BannerBlock",
        data: [
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "社會共融11",
            text: "只有永續的人才，才有永續的企業。盼望攜手共創永續共榮的社會。",
            // textAlign: TextAlign.BottomLeft,
          },
          {
            src: "https://fakeimg.pl/1000x700/?text=Image",
            title: "社會共融22",
            text: "只有永續的人才，才有永續的企業。盼望攜手共創永續共榮的社會。",
            // textAlign: TextAlign.BottomLeft,
          },
        ],
      },
      // { type: "titleContent", data: [] },
      // { type: "banner", data: [] },
      // { type: "banner", data: [] },
    ];

    return testProps.map((component) =>
      component.data.map((item) => mappingType(item)[component.type])
    );
  };

  return <>{pageBuilder()}</>;
};

export default newnewTemplate1;
