import React, { useState } from "react";
import Columns from "../../component/columns/main";
import Layout from "../../component/layout/main";
import { ColType, TopMType } from "../../component/columns/interface";
import { I_AccountTemplate } from "./interface";
import useServiceForm from "./pageData";
import { I_PageData } from "./interface";
import "./css.scss";
const AccountTemplate: React.FC<I_AccountTemplate> = ({ content }) => {
  const templateName = "AccountTemplate";
  const initData = useServiceForm();
  const [serviceData, setServiceData] = useState<I_PageData>(initData);

  const MainContainer = () => {
    const { signTitle, service} = serviceData;
    return (
      <Columns
        type={ColType.TwoColFullPage}
        widthL={50}
        widthR={50}
        topMContent={TopMType.Left}
        contentL={content}
        contentR={
          <div className={`${templateName}ServiceBlock`}>
            <h3>{signTitle}</h3>
            <>
              {service.map((category) => (
                <div className="content">
                  <h4 className="title">{category.categoryTitle}</h4>
                  <div className="items">
                    {category.serviceItems.map(item => (
                      <div className={`item block${category.categoryId}`}>
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
        }
      />
    );
  };
  return <MainContainer />;
};

export default AccountTemplate;
