import React, { useRef, useEffect } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { MagentoFilterBar } from "./magentoFilterBar";
import { MagentoProductContent } from "./magentoProductContent";
import usePageData from "./pageData";
import "./css.scss";

const TFTPreferredProduct: React.FC = () => {
  const pageName = "TFTPreferredProduct";
  const pageData = usePageData();

  const leftMagentoBlock: any = useRef();
  const rightMagentoBlock: any = useRef();

  useEffect(() => {
    const leftMagentoDom: any = document.getElementsByClassName("sidebar-main")[0];
    if (leftMagentoDom) leftMagentoBlock.current.appendChild(leftMagentoDom);

    const rightMagentoDom: any = document.getElementsByClassName("products-list")[0];
    if (rightMagentoDom) rightMagentoBlock.current.appendChild(rightMagentoDom);

  }, []);

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Columns
          type={ColType.TwoCol}
          widthL={30}
          widthR={70}
          contentL={<div className="leftMagentoBlock" ref={leftMagentoBlock} />}
          contentR={<div className="rightMagentoBlock" ref={rightMagentoBlock} />}
        // contentL={<div className="leftMagentoBlock"><MagentoFilterBar /></div>}
        // contentR={<div className="rightMagentoBlock"><MagentoProductContent /></div>}
        />
      </div>
    </Layout>
  );
};

export default TFTPreferredProduct;
