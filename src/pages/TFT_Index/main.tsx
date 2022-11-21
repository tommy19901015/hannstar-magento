import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/main";
import { postGetD360Art } from "../../services/api.service";
import usePageData from "./pageData";
import Columns from "../../component/columns/main";
import Breadcrumbs from "../../component/breadcrumbs/main";
import { ColType } from "../../component/columns/interface";
import "./css.scss";

const TFTIndex: React.FC = () => {
  const pageName = "TFTIndex";

  const pageData = usePageData();

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={
          <>
            <Breadcrumbs {...pageData.breadcrumbs} />
            {/* <D360Block /> */}
          </>
        }
      />
    </Layout>
  );
};

export default TFTIndex;
