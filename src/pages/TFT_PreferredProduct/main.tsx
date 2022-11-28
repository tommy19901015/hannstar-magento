import React, { useRef, useEffect } from "react";
import Layout from "../../component/layout/main";
import usePageData from "./pageData";
import "./css.scss";

const TFTPreferredProduct: React.FC = () => {
  const pageName = "TFTPreferredProduct";
  const pageData = usePageData();

  const magentoBlock: any = useRef();

  useEffect(() => {
    const magentoDom: any = document.getElementsByClassName("columns")[0];
    if (magentoDom) magentoBlock.current.appendChild(magentoDom);

  }, [magentoBlock]);

  return (
    <Layout>
      <div className={`${pageName}MainContainer`}>
        <div ref={magentoBlock} />
      </div>
    </Layout>
  );
};

export default TFTPreferredProduct;
