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
import { I_TemplateLayout } from "./interface";
import "./css.scss";
import Tab from "../../component/tab/main";

const TemplateLayout: React.FC<I_TemplateLayout> = ({ props }) => {
  const pageName = "TemplateLayout";

  const FullBanner = ({ data }: any) =>
    data.map((item: any) => (
      <Columns type={ColType.OneColFullPage} content={<Banner {...item} />} />
    ));

  const BannerBlock = ({ data }: any) =>
    data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <Banner {...item} />
          </div>
        }
      />
    ));

  const BreadcrumbsBlock = ({ data }: any) =>
    data.map((item: any) => (
      <Columns type={ColType.OneCol} content={<Breadcrumbs {...item} />} />
    ));

  const SustainabilityGraphics3 = ({ data }: any) => (
    <Columns
      type={ColType.OneCol}
      content={
        <div className={`${pageName}ModuleBlock`}>
          <Graphics3 data={data} />
        </div>
      }
    />
  );

  const TitleContentBlock = ({ data }: any) =>
    data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item} />
          </div>
        }
      />
    ));

  const TitleContentBanner = ({ data }: any) =>
    data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <Banner {...item.banner} />
          </div>
        }
      />
    ));

  const TitleContentImgGrid = (data: any) =>
    data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <ImgGrid {...data.imgGrid} />
          </div>
        }
      />
    ));

  const TitleContentVideo = ({ data }: any) =>
    data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <Video {...item.video} />
          </div>
        }
      />
    ));

  const TitleContentGraphicsCard = (data: any) =>
    data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <GraphicsCard {...item.graphicsCard} />
          </div>
        }
      />
    ));

  const mappingType = (data: any) => {
    return {
      FullBanner: <FullBanner data={data} />,
      BannerBlock: <BannerBlock data={data} />,
      BreadcrumbsBlock: <BreadcrumbsBlock data={data} />,
      SustainabilityGraphics3: <SustainabilityGraphics3 data={data} />, //
      TitleContentBlock: <TitleContentBlock data={data} />,
      TitleContentGraphicsCard: <TitleContentGraphicsCard data={data} />, // 3x3 
      TitleContentImgGrid: <TitleContentImgGrid data={data} />, // 4X4    組建  先不用
      TitleContentVideo: <TitleContentVideo data={data} />,
      TitleContentBanner: <TitleContentBanner data={data} />,
    };
  };

  const pageBuilder = () =>
    props.map((component) => mappingType(component.data)[component.type]);

  return <>{pageBuilder()}</>;
};

export default TemplateLayout;
