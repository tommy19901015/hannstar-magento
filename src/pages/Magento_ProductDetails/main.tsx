import React, { useRef, useEffect } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { MagentoInfo } from "./magentoInfo"
import { MagentoProductDetail } from "./magentoProductDetail"
import { MagentoProductMedia } from "./magentoProductMedia"

import usePageData from "./pageData";
import "./css.scss";

const MagentoProductDetails: React.FC = () => {
  const pageName = "MagentoProductDetails";
  const pageData = usePageData();

  const magentoImgBlock: any = useRef();
  const magentoInfoBlock: any = useRef();
  const magentoDetailsBlock: any = useRef();

  useEffect(() => {
    const magentoImgBlockDom: any = document.getElementsByClassName("product media")[0];
    if (magentoImgBlockDom) magentoImgBlock.current.appendChild(magentoImgBlockDom);

    const magentoInfoBlockDom: any = document.getElementsByClassName("product-info-main")[0];
    if (magentoInfoBlockDom) magentoInfoBlock.current.appendChild(magentoInfoBlockDom);

    const magentoDetailsBlockDom: any = document.getElementsByClassName("product info detailed")[0];
    if (magentoDetailsBlockDom) magentoDetailsBlock.current.appendChild(magentoDetailsBlockDom);
  }, []);

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Columns
          type={ColType.OneCol}
          content={<>
            {/* <div className={`${pageName}Content`}>
              <div className="topBlock">
                <div className="magentoProductMedia"><MagentoProductMedia /></div>
                <div className="magentoInfo"><MagentoInfo /></div>
              </div>
              <div className="magentoProductDetail"><MagentoProductDetail /></div>
            </div> */}
            <div className={`${pageName}Content`}>
              <div className="topBlock">
                <div className="magentoProductMedia" ref={magentoImgBlock}></div>
                <div className="magentoInfo" ref={magentoInfoBlock}></div>
              </div>
              <div className="magentoProductDetail" ref={magentoDetailsBlock}></div>
            </div>
          </>}
        />
      </div>
    </Layout>
  );
};

export default MagentoProductDetails;
