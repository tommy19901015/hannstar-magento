import React, { useState, useEffect } from "react";
import "./css.scss";
import { I_TabsModule, I_TabDataModule } from "./interface";

const productListData = [
  {
    tabName: "11111",
    tabData: [
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "1111titletitle",
        isHot: true,
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
    ],
  },
  {
    tabName: "22222",
    tabData: [
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "22222titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
    ],
  },
  {
    tabName: "33333",
    tabData: [
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "33333titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
    ],
  },
  {
    tabName: "44444",
    tabData: [
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
      {
        src: "https://fakeimg.pl/350x200/?text=Hello",
        title: "titletitle",
        content:
          "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
        productId: "1",
      },
    ],
  },
];

const TabProductList: React.FC<I_TabsModule[]> = (data) => {
  const componentName = "TabProductList";
  const [initTabList, setInitTabList,] = useState<I_TabsModule[]>([]);
  const [productListData, setProductListData] = useState<I_TabDataModule[]>([]);
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    let initTab = Object.values(data);
    setInitTabList(initTab);
  }, [data]);

  const TabBlock = () => {
    const changeTab = (tabName: string, index: number) => {
      setTab(index);
      const filterData = tabName
        ? initTabList.filter(item => item.tabName === tabName)
        : initTabList;
      setProductListData(filterData[0].tabData);
    };

    return (
      <div className="tabContent">
        {initTabList.map((item, index) => (
          <div
            className={`tab ${tab === index ? "active" : ""}`}
            onClick={() => changeTab(item.tabName, index)}
          >
            {item.tabName}
          </div>
        ))}
      </div>
    );
  };

  const ProductCard: React.FC<any> = ({ title, src, content, index, btnTextL, btnTextR }) => {
    return (
      <div className="productBlock" key={index}>
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

  return (
    <div className={`${componentName}Content`}>
      <TabBlock />
      <div className="productListBlock">
        {productListData.map((item, index) => (
          <ProductCard {...{ ...item, index }} />
        ))}
      </div>
    </div>
  );
};

export default TabProductList;
