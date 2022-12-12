import React, { useState, useEffect } from "react";
import "./css.scss";
import { I_TabsModule, I_TabDataModule } from "./interface";

const ProductCard: React.FC<any> = ({ src, title, content, btnTextL, btnTextR },idx) => {
  return (
    <div className="productBlock" key={idx}>
      <div className="imgBlock">
        <img src={src} alt={title} />
      </div>
      <div className="contentWrap">
        <div className="productTitle">{title}</div>
        <div className="productContent">{content}</div>
        <div className="btnBlock">
          <div className="btn1">{btnTextL}</div>
          <div className="btn2">{btnTextR}</div>
        </div>
      </div>
    </div>
  );
};



const TabProductList: React.FC<I_TabsModule[]> = (data) => {
  const componentName = "TabProductList";
  const [initTabList, setInitTabList,] = useState<I_TabsModule[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    let initTab = Object.values(data);
    setInitTabList(initTab);
  }, [data]);

  const TabBlock = () => {
    const changeTab = (tabName: string, index: number) => {
      setActiveTab(index);
    };

    return (
      <div className="tabContent">
        {initTabList.map((item, index) => (
          <div
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => changeTab(item.tabName, index)}
          >
            {item.tabName}
          </div>
        ))}
      </div>
    );
  };
  return (
    
    <div className={`${componentName}Content`}>
      <TabBlock />
      <div className="productListBlock">
        {initTabList.map((tab, idx) => (
          idx === activeTab && (
            <>
              {tab.tabData.map((child, childIdx) => (
                <ProductCard {...child} idx={childIdx} />
              ))}
            </>
          )
        ))}
      </div>
    </div>
  );
};

export default TabProductList;
