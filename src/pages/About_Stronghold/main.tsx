import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Banner from "../../component/banner/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import "./css.scss";
import { urlConfig } from "../../config/urlSetting";
import { useTranslation } from "react-i18next";


const AboutStronghold: React.FC = () => {
  const pageName = "AboutStronghold";
  const { t } = useTranslation();
  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: `${t('About_Stronghold.breadcrumbsItem1')}`,
        href: "",
      },
      {
        text: `${t('About_Stronghold.breadcrumbsItem2')}`,
        href: "",
      },
      {
        text:`${t('About_Stronghold.breadcrumbsItem3')}`,
        href: "",
      },
    ],
  };
  
  const strongholdData = [
    {
      title: `${t('About_Stronghold.company1')}`,
      address:`${t('About_Stronghold.address1')}`,
      phone: `${t('About_Stronghold.telephone1')}`,
    },
    {
      title: `${t('About_Stronghold.company2')}`,
      address:`${t('About_Stronghold.address2')}`,
      phone: `${t('About_Stronghold.telephone2')}`,
    },
    {
      title: `${t('About_Stronghold.company3')}`,
      address:`${t('About_Stronghold.address3')}`,
      phone: `${t('About_Stronghold.telephone3')}`,
    },
    {
      title: `${t('About_Stronghold.company4')}`,
      address:`${t('About_Stronghold.address4')}`,
      phone: `${t('About_Stronghold.telephone4')}`,
    },
  ];
  
  const allData = {
    breadcrumbsData,
    strongholdData,
  };
  const TextBlock = () => {
    return (
      <div className={`${pageName}Content`}>
        <div className="mainTitle">{`${t('About_Stronghold.title')}`}</div>
        <div className={`${pageName}Block`}>
          <div className="leftBlock">
            <img
              alt="全球據點"
              src={`${urlConfig().s3Url}/Image/hannstar/about/GlobalLocation/map.jpg`}
            />
          </div>
          <div className="rightBlock">
            {allData &&allData.strongholdData.map((item) => {
              return (
                <div className="contentBlock">
                  <div className="titleBlock">
                    <span className="icon"></span>
                    <span className="title">{item.title}</span>
                  </div>
                  <div className="addressBlock">
                    <span className="title">{`${t('About_Stronghold.addressTitle')}`}</span>
                    <span className="content">{item.address}</span>
                  </div>
                  <div className="phoneBlock">
                    <span className="title">{`${t('About_Stronghold.telephoneTitle')}`}</span>
                    <span className="contrnt">{item.phone}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={
          <>
            <Breadcrumbs {...allData.breadcrumbsData} />
            <TextBlock />
          </>
        }
      />
    </Layout>
  );
};

export default AboutStronghold;
