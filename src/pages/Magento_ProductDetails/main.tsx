import React, { useRef, useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { MagentoInfo } from "./magentoInfo";
import { MagentoProductDetail } from "./magentoProductDetail";
import { MagentoProductMedia } from "./magentoProductMedia";
import SlickComponent from "../../component/slickComponent/main";

import usePageData from "./pageData";
import "./css.scss";

declare global {
  interface Window {
    hannstarProductImgs: any;
  }
}

const MagentoProductDetails: React.FC = () => {
  const pageName = "MagentoProductDetails";
  const [magentoImgs, setMagentoImgs] = useState<any>([]);

  const pageData = usePageData();

  const magentoImgBlock: any = useRef();
  const magentoInfoBlock: any = useRef();
  const magentoDetailsBlock: any = useRef();

  useEffect(() => {
    // const magentoImgBlockDom: any =
    //   document.getElementsByClassName("product media")[0];
    // if (magentoImgBlockDom)
    //   magentoImgBlock.current.appendChild(magentoImgBlockDom);

    // const magentoInfoBlockDom: any =
    //   document.getElementsByClassName("product-info-main")[0];
    // if (magentoInfoBlockDom)
    //   magentoInfoBlock.current.appendChild(magentoInfoBlockDom);
    // const magentoDetailsBlockDom: any = document.getElementsByClassName(
    //   "product info detailed"
    // )[0];

    // if (magentoDetailsBlockDom)
    //   magentoDetailsBlock.current.appendChild(magentoDetailsBlockDom);

    window.hannstarProductImgs && setMagentoImgs(window.hannstarProductImgs);
  }, []);

  const testImgData = [
    {
      thumb:
        "http://tommylee.magento.com/media/catalog/product\\cache\\c30134b0ebf5e43acb8cef637f15b3a9\\/m/g/mg05-br-0.jpg",
      img: "http://fakeimg.pl/700x700/?text=1111",
      full: "http://tommylee.magento.com/media/catalog/product\\cache\\ff36c727959f0c54636dc849b3427e12\\/m/g/mg05-br-0.jpg",
      caption: "Image",
      position: "1",
      isMain: true,
      type: "image",
      videoUrl: null,
    },
    {
      thumb:
        "http://tommylee.magento.com/media/catalog/product\\cache\\c30134b0ebf5e43acb8cef637f15b3a9\\/m/g/mg05-br-0.jpg",
      img: "http://fakeimg.pl/700x700/?text=2222",
      full: "http://tommylee.magento.com/media/catalog/product\\cache\\ff36c727959f0c54636dc849b3427e12\\/m/g/mg05-br-0.jpg",
      caption: "Image",
      position: "2",
      isMain: false,
      type: "image",
      videoUrl: null,
    },
    {
      thumb:
        "http://tommylee.magento.com/media/catalog/product\\cache\\c30134b0ebf5e43acb8cef637f15b3a9\\/m/g/mg05-br-0.jpg",
      img: "http://fakeimg.pl/700x700/?text=3333",
      full: "http://tommylee.magento.com/media/catalog/product\\cache\\ff36c727959f0c54636dc849b3427e12\\/m/g/mg05-br-0.jpg",
      caption: "Image",
      position: "3",
      isMain: false,
      type: "image",
      videoUrl: null,
    },
    {
      thumb:
        "http://tommylee.magento.com/media/catalog/product\\cache\\c30134b0ebf5e43acb8cef637f15b3a9\\/m/g/mg05-br-0.jpg",
      img: "http://fakeimg.pl/700x700/?text=4444",
      full: "http://tommylee.magento.com/media/catalog/product\\cache\\ff36c727959f0c54636dc849b3427e12\\/m/g/mg05-br-0.jpg",
      caption: "Image",
      position: "4",
      isMain: false,
      type: "image",
      videoUrl: null,
    },
    {
      thumb:
        "http://tommylee.magento.com/media/catalog/product\\cache\\c30134b0ebf5e43acb8cef637f15b3a9\\/m/g/mg05-br-0.jpg",
      img: "http://fakeimg.pl/700x700/?text=5555",
      full: "http://tommylee.magento.com/media/catalog/product\\cache\\ff36c727959f0c54636dc849b3427e12\\/m/g/mg05-br-0.jpg",
      caption: "Image",
      position: "5",
      isMain: false,
      type: "image",
      videoUrl: null,
    },
  ];

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <Columns
          type={ColType.OneCol}
          content={
            <>
              <div className={`${pageName}Content`}>
                <div className="topBlock">
                  <div className="magentoProductMedia">
                    <SlickComponent imgs={testImgData} />
                  </div>
                  <div className="magentoInfo">
                    <MagentoInfo />
                  </div>
                </div>
                <div className="magentoProductDetail">
                  <MagentoProductDetail />
                </div>
              </div>

              {/* <div className={`${pageName}Content`}>
                <div className="topBlock">
                  <div className="magentoProductMedia">
                    <SlickComponent imgs={magentoImgs} />
                  </div>
                  <div className="magentoInfo" ref={magentoInfoBlock}></div>
                </div>
                <div
                  className="magentoProductDetail"
                  ref={magentoDetailsBlock}
                ></div>
              </div> */}
            </>
          }
        />
      </div>
    </Layout>
  );
};

export default MagentoProductDetails;
