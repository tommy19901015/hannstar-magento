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
import ArticleList2 from "../../component/articleList2/main";
import { I_TemplateLayout, I_DataModel } from "./interface";
import "./css.scss";
import SustainabilityBlock from "../../component/sustainabilityBlock/main";
import AboutBlock from "../../component/aboutBlock/main";
import ArticleBlock from "../../component/articleBlock/main";
import TabProductList from "../../component/tabProductList/main";
import MessageCenter from "../../component/messageCenter/main";
import PlatformEntry from "../../component/platformEntry/main";

const TemplateLayout: React.FC<I_TemplateLayout> = ({
  props,
  handleSustainabilityTab,
  handleAboutTab,
}) => {
  const pageName = "TemplateLayout";

  const FullBanner: Function = ({ data }: any): JSX.Element[] => {
    return data.map((item: any) => (
      <>
        <Columns type={ColType.OneColFullPage} content={<Banner {...item} />} />
      </>
    ));
  };

  const BannerBlock: Function = ({ data }: any): JSX.Element[] => {
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
  };

  const BreadcrumbsBlock: Function = ({ data }: any): JSX.Element[] => {
    return data.map((item: any) => (
      <Columns type={ColType.OneCol} content={<Breadcrumbs {...item} />} />
    ));
  };

  const SustainabilityGraphics3: Function = ({ data }: any): JSX.Element => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <Graphics3 groups={data} />
          </div>
        }
      />
    );
  };

  const TitleContentBlock: Function = ({ data }: any): JSX.Element[] => {
    return data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item} />
          </div>
        }
      />
    ));
  };

  const TitleContentBanner: Function = ({ data }: any): JSX.Element[] => {
    return data.map((item: any) => (
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
  };

  const TitleContentImgGrid: Function = ({ data }: any): JSX.Element => {
    const { titleContent, rowCount, imgGrids } = data[0];

    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...titleContent} />
            <ImgGrid rowCount={rowCount} imgs={imgGrids} />
          </div>
        }
      />
    );
  };
  const TitleContentVideo: Function = ({ data }: any): JSX.Element[] => {
    return data.map((item: any) => (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TitleContent {...item.titleContent} />
            <Video {...item} />
          </div>
        }
      />
    ));
  };
  const TitleContentGraphicsCard: Function = ({ data }: any): JSX.Element => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <GraphicsCard {...data[0]} />
          </div>
        }
      />
    );
  };
  const ArticleContent: Function = ({ data }: any): JSX.Element => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <ArticleBlock data={data} />
          </div>
        }
      />
    );
  };

  const TabProductListBlock: Function = ({ data }: any): JSX.Element => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <TabProductList {...data} />
          </div>
        }
      />
    );
  };

  const ArticleListContent: Function = ({ data }: any): JSX.Element => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <ArticleList2 {...data[0]} />
          </div>
        }
      />
    );
  };

  const SustainabilityTab: Function = ({ data }: any): JSX.Element => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <SustainabilityBlock
              {...data[0]}
              handleSustainabilityTab={handleSustainabilityTab}
            />
          </div>
        }
      />
    );
  };

  const AboutTab: Function = ({ data }: any): JSX.Element => {
    return (
      <Columns
        type={ColType.OneCol}
        content={
          <div className={`${pageName}ModuleBlock`}>
            <AboutBlock {...data[0]} handleAboutTab={handleAboutTab} />
          </div>
        }
      />
    );
  };

  const MessageCenterPlatform: Function = ({ data }: any): JSX.Element => {
    console.log("datadata", data);
    return (
      <Columns
        type={ColType.TwoColFullPage}
        widthL={60}
        widthR={40}
        contentL={<MessageCenter />}
        contentR={<PlatformEntry data={data} />}
      />
    );
  };

  const mappingType = (data: I_DataModel[]) => {
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
      ArticleContent: <ArticleContent data={data} />,
      TabProductListBlock: <TabProductListBlock data={data} />,
      ArticleListContent: <ArticleListContent data={data} />,
      SustainabilityTab: <SustainabilityTab data={data} />,
      AboutTab: <AboutTab data={data} />,
      MessageCenterPlatform: <MessageCenterPlatform data={data} />,
    };
  };

  const pageBuilder = () =>
    props.map((component) => mappingType(component.data)[component.type]);

  return <>{pageBuilder()}</>;
};

export default TemplateLayout;
