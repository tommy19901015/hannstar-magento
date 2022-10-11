import React, { useState, useEffect } from "react";
import "./css.scss";
import { I_Article, I_ArticleList2 } from "./interface";

const fakeApiData = [
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

const TabProductList: React.FC<any> = () => {
  const componentName = "TabProductList";

  const [productListData, setProductListData] = useState<any>([]);
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    setProductListData(fakeApiData[0].tabData);
  }, [fakeApiData]);

  const TabBlock = () => {
    const changeTab = (tabName: string, index: number) => {
      setTab(index);
      const filterData = tabName
        ? fakeApiData.filter((item: any) => item.tabName === tabName)
        : fakeApiData;
      setProductListData(filterData[0].tabData);
    };

    return (
      <div>
        {fakeApiData.map((item, index) => (
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

  const ProductCard: React.FC<any> = ({ title, src, content, index }) => {
    return (
      <div className="productBlock" key={index}>
        <div className="imgBlock">
          <img src={src} alt={title} />
        </div>
        <div className="contentWrap">
          <div className="productTitle">{title}</div>
          <div className="productContent">{content}</div>
          <div className="btnBlock">
            <div className="btn1">了解詳細規格</div>
            <div className="btn2">提出需求</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${componentName}Content`}>
      <TabBlock />
      <div className="productListBlock">
        {productListData.map((item: any, index: any) => (
          <ProductCard {...{ ...item, index }} />
        ))}
      </div>
    </div>
  );
};

export default TabProductList;
