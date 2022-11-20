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
import { I_TemplateLayout, I_DataModel} from "./interface";
import "./css.scss";
import Tab from "../../component/tab/main";
import { 
  I_Banner, 
  I_Breadcrumbs, 
  I_TitleContent, 
  I_GraphicsModel, 
  I_TitleContentVideo,
  I_TitleContentBanner,
  I_TitleContentImgGrid
 } from "../../types/base";

const TemplateLayout: React.FC<I_TemplateLayout> = ({ props }) => {
  const pageName = "TemplateLayout";

  const FullBanner: Function = ({data}:any): JSX.Element[] =>{
    return  data.map((item: any) => (
      <Columns type={ColType.OneColFullPage} content={<Banner {...item} />} />
    ));;
    
  }
    
  const BannerBlock:Function = ({data}:any): JSX.Element[] => {
    return data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <Banner {...item} />
          </div>
        }
      />
    ));
  }

  const BreadcrumbsBlock:Function = ({data}:any): JSX.Element[] => {
    return data.map((item: any) => (
      <Columns type={ColType.OneCol} content={<Breadcrumbs {...item} />} />
    ));
  }

  const SustainabilityGraphics3:Function = ({data}:any): JSX.Element => {
    return (
      <Columns
      type={ColType.OneCol}
      content={
        <div className={`${pageName}ModuleBlock`}>
          <Graphics3 groups={data}/>
        </div>
      }
    />
  )};

  const TitleContentBlock:Function = ({data}:any): JSX.Element[] => {
    return data.map((item:any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item} />
          </div>
        }
      />
    ));
  }

  const TitleContentBanner:Function = ({data}:any): JSX.Element[] => {
    return data.map((item:any) => (
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
  }

  const TitleContentImgGrid:Function = ({data}:any): JSX.Element []=> {
    return data.map((item:any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <ImgGrid {...item.imgGrids} />
          </div>
        }
      />
    ));
  }
  const TitleContentVideo:Function = ({data}:any): JSX.Element[] => {
    return data.map((item:any) => (
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
  }
  const TitleContentGraphicsCard:Function = ({data}:any) : JSX.Element => {
    return data.map((item: any) => (
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
  }


  const mappingType = (data: I_DataModel[]) => {
    console.log('mappingType',data)
    return {
      FullBanner: <FullBanner data={data}/>,
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
