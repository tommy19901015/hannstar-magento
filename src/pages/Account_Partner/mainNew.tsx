import React, { useRef, useState, useEffect } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";
import PhoneInput from "react-phone-input-2";
import { postAppVendor, postAccountInfo } from "../../services/api.service";
import "react-phone-input-2/lib/style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import "./css.scss";
import usePageData from "./pageData";

const AccountPartner: React.FC = () => {
  const pageName = "AccountPartner";
  const formData = usePageData();

  const countrySelectBlock: any = useRef();

  type Keys = keyof typeof formData;

  type IFormInputs = {
    [key in Keys]: string | number | string[];
  };

  useEffect(() => {
    const magentoCountrySelectDom: any = document.getElementById("country");
    console.log("magentoCountrySelectDom", magentoCountrySelectDom);
    console.log("countrySelectBlock", countrySelectBlock);
    if (magentoCountrySelectDom)
      countrySelectBlock.current.appendChild(magentoCountrySelectDom);
  }, []);

  const breadcrumbsData = {
    title: "",
    breadcrumbsLink: [
      {
        text: "首頁",
        href: "",
      },
      {
        text: "會員中心",
        href: "",
      },
      {
        text: "我的權限",
        href: "",
      },
    ],
  };

  const handlerGoBack = () => {
    window.history.back();
  };

  const PartnerFormContent = () => {
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<IFormInputs>();
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      const selectDom: any = document.getElementById("country");
      const Country = selectDom.value;
      const CountryCode = selectDom.selectedOptions[0].text;

      const UserName = window.hannstar?.userName;
      const Email = window.hannstar?.email;
      const Lang = "en";
      const GroupName = "";
      const result: any = {
        ...data,
        Lang,
        Country,
        CountryCode,
        UserName,
        Email,
        GroupName,
      };
      console.log("result", result);
      postAppVendor(result).then((response: any) => {
        console.log("response", response);
        window.location.href = urlConfig.account.AccountApplication.href;
      });
    };

    const handlCallPhoneInput = (value: string, data: any) => {
      setValue("PhoneNumber0", data.dialCode);
      setValue("PhoneNumber1", value);
    };

    const handlePhoneInput = (value: string, data: any) => {
      setValue("CellPhoneNumber0", data.dialCode);
      setValue("CellPhoneNumber1", value);
    };

    return (
      <div className={`${pageName}FormBlock`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formTitle">申請企業會員</div>
          <div className="stepTitle">步驟 1. 請選擇您的身份</div>
          <div className="classificationBlock flex">
            <a
              className="changTab"
              href={urlConfig.account.AccountPersonal.href}
            >
              <img
                alt={urlConfig.account.AccountPersonal.title}
                src={`${urlConfig.s3Url}/Image/account/btn_enterprisemember_client_normal.png`}
              />
            </a>
            <a
              className="changTab"
              href={urlConfig.account.AccountPartner.href}
            >
              <img
                alt={urlConfig.account.AccountPartner.title}
                src={`${urlConfig.s3Url}/Image/account/btn_enterprisemember_supplier_hnp.png`}
              />
            </a>
          </div>
          <div className="stepTitle">步驟 2. 申請人資訊</div>
          <div className="classificationBlock">
            <div className="row">
              <div className="col-2">
                <label className="required">工作屬性</label>
                <select {...register("JobAttributes")}>
                  <option value={formData.JobAttributes.option[0].value}>
                    {formData.JobAttributes.option[0].text}
                  </option>
                  <option value={formData.JobAttributes.option[1].value}>
                    {formData.JobAttributes.option[1].text}
                  </option>
                  <option value={formData.JobAttributes.option[2].value}>
                    {formData.JobAttributes.option[2].text}
                  </option>
                  <option value={formData.JobAttributes.option[3].value}>
                    {formData.JobAttributes.option[3].text}
                  </option>
                  <option value={formData.JobAttributes.option[4].value}>
                    {formData.JobAttributes.option[4].text}
                  </option>
                  <option value={formData.JobAttributes.option[5].value}>
                    {formData.JobAttributes.option[5].text}
                  </option>
                  <option value={formData.JobAttributes.option[6].value}>
                    {formData.JobAttributes.option[6].text}
                  </option>
                </select>
                {errors.JobAttributes && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-2">
                <label className="required">職稱</label>
                <select {...register("JobTitle")}>
                  <option value={formData.JobTitle.option[0].value}>
                    {formData.JobTitle.option[0].text}
                  </option>
                  <option value={formData.JobTitle.option[1].value}>
                    {formData.JobTitle.option[1].text}
                  </option>
                  <option value={formData.JobTitle.option[2].value}>
                    {formData.JobTitle.option[2].text}
                  </option>
                  <option value={formData.JobTitle.option[3].value}>
                    {formData.JobTitle.option[3].text}
                  </option>
                  <option value={formData.JobTitle.option[4].value}>
                    {formData.JobTitle.option[4].text}
                  </option>
                  <option value={formData.JobTitle.option[5].value}>
                    {formData.JobTitle.option[5].text}
                  </option>
                  <option value={formData.JobTitle.option[6].value}>
                    {formData.JobTitle.option[6].text}
                  </option>
                </select>
                {errors.JobTitle && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">電話號碼</label>
                <PhoneInput
                  country={"tw"}
                  {...register("PhoneNumber1")}
                  onChange={(value, data) => handlCallPhoneInput(value, data)}
                />
                {errors.PhoneNumber1 && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-2">
                <label className="required">分機</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("PhoneNumber2", { required: true })}
                />
                {errors.PhoneNumber2 && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">手機號碼</label>
                <PhoneInput
                  country={"tw"}
                  {...register("CellPhoneNumber1")}
                  onChange={(value, data) => handlePhoneInput(value, data)}
                />
                {errors.CellPhoneNumber1 && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <label className="required">感興趣的應用別(可複選)</label>
                <div className="checkbox-col">
                  {formData.InterestedType.option.map((item, i) => (
                    <div className="hannstarCheckBox" key={i}>
                      <input
                        id={item.value}
                        type="checkbox"
                        value={item.value}
                        {...register("InterestedType", { required: true })}
                      />
                      <label htmlFor={item.value}>{item.text}</label>
                    </div>
                  ))}
                  {errors.InterestedType && (
                    <span className="error">必填欄位，請重新輸入</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="stepTitle">步驟 3. 企業資料</div>
          <div className="classificationBlock">
            <div className="row">
              <div className="col-2">
                <label className="required">公司名稱</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyName", { required: true })}
                />
                {errors.CompanyName && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-2">
                <label className="required">公司名稱關鍵字</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanySName", { required: true })}
                />
                {errors.CompanySName && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">企業編號(統編/稅號)</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("TaxNo", { required: true })}
                />
                {errors.TaxNo && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-2">
                <label className="required">商業類型</label>
                <select {...register("BusinessType")}>
                  <option value={formData.BusinessType.option[0].value}>
                    {formData.BusinessType.option[0].text}
                  </option>
                  <option value={formData.BusinessType.option[1].value}>
                    {formData.BusinessType.option[1].text}
                  </option>
                  <option value={formData.BusinessType.option[2].value}>
                    {formData.BusinessType.option[2].text}
                  </option>
                </select>
                {errors.BusinessType && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">適用區域</label>
                <select {...register("ApplicableArea")}>
                  <option value={formData.ApplicableArea.option[0].value}>
                    {formData.ApplicableArea.option[0].text}
                  </option>
                  <option value={formData.ApplicableArea.option[1].value}>
                    {formData.ApplicableArea.option[1].text}
                  </option>
                  <option value={formData.ApplicableArea.option[2].value}>
                    {formData.ApplicableArea.option[2].text}
                  </option>
                  <option value={formData.ApplicableArea.option[3].value}>
                    {formData.ApplicableArea.option[3].text}
                  </option>
                  <option value={formData.ApplicableArea.option[4].value}>
                    {formData.ApplicableArea.option[4].text}
                  </option>
                  <option value={formData.ApplicableArea.option[5].value}>
                    {formData.ApplicableArea.option[5].text}
                  </option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <label className="required">公司網址</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("Weblink", { required: true })}
                />
                {errors.Weblink && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label className="required">國家/地區</label>
                <div ref={countrySelectBlock}></div>
              </div>
              <div className="col-3">
                <label className="required">城市</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("AreaCity", { required: true })}
                />
                {errors.AreaCity && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-3">
                <label>地址</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("AreaAddress")}
                />
                {errors.AreaAddress && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">員工總數</label>
                <select {...register("CompanyEmpNumber", { required: true })}>
                  <option value={formData.CompanyEmpNumber.option[0].value}>
                    {formData.CompanyEmpNumber.option[0].text}
                  </option>
                  <option value={formData.CompanyEmpNumber.option[1].value}>
                    {formData.CompanyEmpNumber.option[1].text}
                  </option>
                  <option value={formData.CompanyEmpNumber.option[2].value}>
                    {formData.CompanyEmpNumber.option[2].text}
                  </option>
                  <option value={formData.CompanyEmpNumber.option[3].value}>
                    {formData.CompanyEmpNumber.option[3].text}
                  </option>
                </select>
                {errors.CompanyEmpNumber && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-2">
                <label className="required">技術人員</label>
                <select {...register("TechnicalStaff", { required: true })}>
                  <option value={formData.TechnicalStaff.option[0].value}>
                    {formData.TechnicalStaff.option[0].text}
                  </option>
                  <option value={formData.TechnicalStaff.option[1].value}>
                    {formData.TechnicalStaff.option[1].text}
                  </option>
                  <option value={formData.TechnicalStaff.option[2].value}>
                    {formData.TechnicalStaff.option[2].text}
                  </option>
                  <option value={formData.TechnicalStaff.option[3].value}>
                    {formData.TechnicalStaff.option[3].text}
                  </option>
                </select>
                {errors.AnnualRevenue && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">年營業額(USD)</label>
                <select {...register("AnnualRevenue", { required: true })}>
                  <option value={formData.AnnualRevenue.option[0].value}>
                    {formData.AnnualRevenue.option[0].text}
                  </option>
                  <option value={formData.AnnualRevenue.option[1].value}>
                    {formData.AnnualRevenue.option[1].text}
                  </option>
                  <option value={formData.AnnualRevenue.option[2].value}>
                    {formData.AnnualRevenue.option[2].text}
                  </option>
                  <option value={formData.AnnualRevenue.option[3].value}>
                    {formData.AnnualRevenue.option[3].text}
                  </option>
                  <option value={formData.AnnualRevenue.option[4].value}>
                    {formData.AnnualRevenue.option[4].text}
                  </option>
                </select>
                {errors.AnnualRevenue && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-2">
                <label className="required">上市公司</label>
                <select {...register("CompanyStockOn", { required: true })}>
                  <option value={formData.CompanyStockOn.option[0].value}>
                    {formData.CompanyStockOn.option[0].text}
                  </option>
                  <option value={formData.CompanyStockOn.option[1].value}>
                    {formData.CompanyStockOn.option[1].text}
                  </option>
                </select>
                {errors.CompanyStockOn && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <label className="required">公司產品主要銷售國家/地區-1</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA2", { required: true })}
                />
                {errors.CompanyMA2 && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-3">
                <label>公司產品主要銷售國家/地區-2</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA3")}
                />
              </div>
              <div className="col-3">
                <label>公司產品主要銷售國家/地區-3</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA4")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label className="required">主要出貨客戶-1</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("TOP1", { required: true })}
                />
                {errors.TOP1 && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-3">
                <label>主要出貨客戶-2</label>
                <input type="text" defaultValue="" {...register("TOP2")} />
              </div>
              <div className="col-3">
                <label>主要出貨客戶-3</label>
                <input type="text" defaultValue="" {...register("TOP3")} />
              </div>
            </div>
          </div>
          <div className="stepTitle">
            為能提供更完整的服務，請問貴司是否已使用HannStar產品
          </div>

          <div className="classificationBlock">
            <div className="row">
              <div className="col-2">
                <label className="required">是否已使用HannStar產品</label>
                <div className="">
                  {formData.HannstarYN.option.map((item, i) => (
                    <div className="hannstarRadio" key={i}>
                      <input
                        {...register("HannstarYN")}
                        id={item.value}
                        type="radio"
                        value={item.value}
                      />
                      <label htmlFor={item.value}>{item.text}</label>
                    </div>
                  ))}
                </div>

                {errors.HannstarYN && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-2">
                <label>請在提供HannStar供應商代碼(6碼)</label>
                <input
                  type="text"
                  className=""
                  defaultValue=""
                  {...register("HannstarCode")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">購買渠道-1</label>
                <select {...register("Buy1", { required: true })}>
                  <option value={formData.Buy1.option[0].value}>
                    {formData.Buy1.option[0].text}
                  </option>
                  <option value={formData.Buy1.option[1].value}>
                    {formData.Buy1.option[1].text}
                  </option>
                  <option value={formData.Buy1.option[2].value}>
                    {formData.Buy1.option[2].text}
                  </option>
                </select>
                {errors.Buy1 && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
              <div className="col-2">
                <label className="required">渠道公司名稱-1</label>
                <input
                  type="text"
                  className=""
                  defaultValue=""
                  {...register("BuyCompany1", { required: true })}
                />
                {errors.BuyCompany1 && (
                  <span className="error">必填欄位，請重新輸入</span>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label>購買渠道-2</label>
                <select {...register("Buy2")}>
                  <option value={formData.Buy2.option[0].value}>
                    {formData.Buy2.option[0].text}
                  </option>
                  <option value={formData.Buy2.option[1].value}>
                    {formData.Buy2.option[1].text}
                  </option>
                  <option value={formData.Buy2.option[2].value}>
                    {formData.Buy2.option[2].text}
                  </option>
                </select>
              </div>
              <div className="col-2">
                <label>渠道公司名稱-2</label>
                <input
                  type="text"
                  className=""
                  defaultValue=""
                  {...register("BuyCompany2")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label>購買渠道-3</label>
                <select {...register("Buy3")}>
                  <option value={formData.Buy3.option[0].value}>
                    {formData.Buy3.option[0].text}
                  </option>
                  <option value={formData.Buy3.option[1].value}>
                    {formData.Buy3.option[1].text}
                  </option>
                  <option value={formData.Buy3.option[2].value}>
                    {formData.Buy3.option[2].text}
                  </option>
                </select>
              </div>
              <div className="col-2">
                <label>渠道公司名稱-3</label>
                <input
                  type="text"
                  className=""
                  defaultValue=""
                  {...register("BuyCompany3")}
                />
              </div>
            </div>
          </div>
          <div className="classificationBlock">
            <div className="row">
              <div className="col-1">
                <label>備註說明</label>
                <textarea
                  className="companyRemark"
                  defaultValue=""
                  {...register("CompanyRemark")}
                />
              </div>
            </div>
          </div>
          <div className="btnBlock">
            <div onClick={handlerGoBack} className="goBack">
              回上一頁
            </div>
            <input type="submit" defaultValue="確認申請" className="confirm" />
          </div>
        </form>
      </div>
    );
  };

  return (
    <Layout>
      <Columns
        type={ColType.OneCol}
        content={<Breadcrumbs {...breadcrumbsData} />}
      />
      <AccountPersonalTemplate
        contentComponent={<PartnerFormContent />}
      />
    </Layout>
  );
};

export default AccountPartner;
