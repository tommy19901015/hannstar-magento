import React, { useState } from "react";
import Columns from "../../component/columns/main";
import Layout from "../../component/layout/main";
import { ColType } from "../../component/columns/interface";
import { I_AccountTemplate } from "./interface";
import { initialServiceData } from "./pageData";
import { serviceType } from "./interface";
import "./css.scss";
const AccountTemplate: React.FC<I_AccountTemplate> = ({ content }) => {
  const templateName = "AccountTemplate";
  const [serviceData, setServiceData] =
    useState<serviceType[]>(initialServiceData);

  const MainContainer = () => {
    return (
      <Layout>
      <div className={`${templateName}ContentBlock`}>
        <Columns
          type={ColType.TwoColFullPage}
          widthL={50}
          widthR={50}
          contentL={content}
          contentR={
            <div className="HannstarLogin">
            <div className="serviceBlock">
            <h3>立即註冊翰宇彩晶會員</h3>
            <>
              {serviceData.map((category) => (
                <div className="content">
                  <h4 className="title">{category.categoryTitle}</h4>
                  <div className="items">
                    {category.serviceItems.map((item) => (
                      <div className="item">
                        <img className="" src={item.icon} alt={item.icon} />
                        <span className="">{item.title}</span>
                        <p className="">{item.directions}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          </div>
          </div>
        }
        />
      </div>
      </Layout>
    );
  };
  return <MainContainer />;
};

export default AccountTemplate;
