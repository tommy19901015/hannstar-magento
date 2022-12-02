import React, { useRef, useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { MagentoCompare } from "./magentoCompare";

import usePageData from "./pageData";
import "./css.scss";

declare global {
  interface Window {
    hannstarProductImgs: any;
  }
}

const MagentoProductCompare: React.FC = () => {
  const pageName = "MagentoProductCompare";

  const pageData = usePageData();

  const magentoCompareBlock: any = useRef();

  useEffect(() => {
    // const magentoCompareBlockDom: any =
    //   document.getElementsByClassName("table-wrapper comparison")[0];

    // if (magentoCompareBlockDom)
    //   magentoCompareBlock.current.appendChild(magentoCompareBlockDom);

  }, []);


  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Columns
          type={ColType.OneCol}
          content={<div className={`${pageName}Content`}>
            <>
              {/* <div className="magentoCompare" ref={magentoCompareBlock}></div> */}
              <MagentoCompare />
            </>
          </div>}
        />
      </div>
    </Layout>
  );
};

export default MagentoProductCompare;
