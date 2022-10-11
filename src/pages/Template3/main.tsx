import React, { useState, useEffect, useRef } from "react";
import Layout from "../../component/layout/main";
import Template3 from "../../templates/Template3/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";

import "./css.scss";

const Template3Page: React.FC = () => {
  const pageName = "Template3";

  const MainContainer = () => {
    return <div className={`${pageName}MainContainer`}>
      <Template3 />
    </div>
  }
  return (
    <Layout>
      <Columns
        type={ColType.OneColFullPage}
        content={<MainContainer />} />
    </Layout>
  );
};

export default Template3Page;
