import React, { useRef, useEffect } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";
//import PhoneInput from "react-phone-input-2";
import { postAppVendor } from "../../services/api.service";
//import "react-phone-input-2/lib/style.css";
import 'react-phone-number-input/style.css';
import { getCountryCallingCode } from 'react-phone-number-input/input';
import { useForm, SubmitHandler } from "react-hook-form";
import "./css.scss";
import usePageData from "./pageData";
import CountryCodeComponent  from '../../component/countryCode/main';


const AccountPartner: React.FC = () => {
  const pageName = "AccountPartner";
  const formData = usePageData();
  const countrySelectBlock: any = useRef();

  type Keys = keyof typeof formData;

  type IFormInputs = {
    [key in Keys]: string | number | string[];
  };

  const errorMsg = formData.Required;

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
      //const Country = selectDom.value;
      //const CountryCode = selectDom.selectedOptions[0].text;

      const UserName = window.hannstar?.userName;
      const Email = window.hannstar?.email;
      const Lang = "en";
      const GroupName = "";
      const result: any = {
        ...data,
        Lang,
        //Country,
        //CountryCode,
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

    const handlePhoneInput = (countryCode:any) => {
      setValue("PhoneNumber0", getCountryCallingCode(countryCode));
    };

    const handlCellPhoneInput = (countryCode:any ) => {
      setValue("CellPhoneNumber0", getCountryCallingCode(countryCode));
    };

    return (
      <div className={`${pageName}FormBlock`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formTitle">{formData.ApplyMembership}</div>
          <div className="stepTitle">{formData.Step1}</div>
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
          <div className="stepTitle">{formData.Step2}</div>
          <div className="classificationBlock">
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.JobAttributes.title}</label>
                <select {...register("JobAttributes")}>
                  {formData.JobAttributes.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
                {errors.JobAttributes && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.JobTitle.title}</label>
                <select {...register("JobTitle")}>
                  {formData.JobTitle.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
                {errors.JobTitle && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            <div className="row align-end">
              <div className="col-2">
                <label className="required">{formData.PhoneNumber1}</label>
                <div className="countryBlock">
                <CountryCodeComponent onSelectionUpdate={(data:any)=> setValue("PhoneNumber0",getCountryCallingCode(data))}/>
                  <input
                    type="text"
                    className="country-num-input"
                    {...register("PhoneNumber1", { required: true })}
                    onChange={event => setValue("PhoneNumber1", event.target.value)}
                  />
                </div>
              
                {errors.PhoneNumber1 && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.PhoneNumber2}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("PhoneNumber2", { required: true })}
                />
                {errors.PhoneNumber2 && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.CellPhoneNumber1}</label>
                <div className="countryBlock">
                <CountryCodeComponent onSelectionUpdate={(data:any)=> setValue("CellPhoneNumber0",getCountryCallingCode(data))}/>
                <input
                  type="text"
                  className="country-num-input"
                  defaultValue=""
                  {...register("CellPhoneNumber1", { required: true })}
                  onChange={event => setValue("CellPhoneNumber1", event.target.value)}
                />  
                </div>
                {errors.CellPhoneNumber1 && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <label className="required">{formData.InterestedType.title}</label>
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
                  {errors.InterestedType && (<span className="error">{errorMsg}</span>)}
                </div>
              </div>
            </div>
          </div>
          <div className="stepTitle">{formData.Step3}</div>
          <div className="classificationBlock">
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.CompanyName.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyName", { required: true })}
                />
                {errors.CompanyName && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.CompanySName.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanySName", { required: true })}
                />
                {errors.CompanySName && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.TaxNo.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("TaxNo", { required: true })}
                />
                {errors.TaxNo && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.BusinessType.title}</label>
                <select {...register("BusinessType")}>
                  {formData.BusinessType.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
                {errors.BusinessType && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.ApplicableArea.title}</label>
                <select {...register("ApplicableArea")}>
                  {formData.ApplicableArea.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <label className="required">{formData.Weblink.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("Weblink", { required: true })}
                />
                {errors.Weblink && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            <div className="row">
              {/* <div className="col-3">
                <label className="required">{formData.Country.title}</label>
                <div ref={countrySelectBlock}></div>
              </div> */}
              <div className="col-3">
                <label className="required">{formData.AreaCity.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("AreaCity", { required: true })}
                />
                {errors.AreaCity && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-3">
                <label>{formData.AreaAddress.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("AreaAddress")}
                />
                {errors.AreaAddress && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.CompanyEmpNumber.title}</label>
                <select {...register("CompanyEmpNumber", { required: true })}>
                  {formData.CompanyEmpNumber.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
                {errors.CompanyEmpNumber && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.TechnicalStaff.title}</label>
                <select {...register("TechnicalStaff", { required: true })}>
                  {formData.TechnicalStaff.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
                {errors.AnnualRevenue && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.AnnualRevenue.title}</label>
                <select {...register("AnnualRevenue", { required: true })}>
                  {formData.AnnualRevenue.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
                {errors.AnnualRevenue && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.CompanyStockOn.title}</label>
                <select {...register("CompanyStockOn", { required: true })}>
                  {formData.CompanyStockOn.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
                {errors.CompanyStockOn && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <label className="required">{formData.CompanyMA2.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA2", { required: true })}
                />
                {errors.CompanyMA2 && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-3">
                <label>{formData.CompanyMA3.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA3")}
                />
              </div>
              <div className="col-3">
                <label>{formData.CompanyMA4.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA4")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label className="required">{formData.TOP1.title}</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("TOP1", { required: true })}
                />
                {errors.TOP1 && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-3">
                <label>{formData.TOP2.title}</label>
                <input type="text" defaultValue="" {...register("TOP2")} />
              </div>
              <div className="col-3">
                <label>{formData.TOP3.title}</label>
                <input type="text" defaultValue="" {...register("TOP3")} />
              </div>
            </div>
          </div>
          <div className="stepTitle">
            {formData.Step4}
          </div>

          <div className="classificationBlock">
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.HannstarYN.title}</label>
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
                {errors.HannstarYN && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label>{formData.HannstarCode.title}</label>
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
                <label className="required">{formData.Buy1.title}</label>
                <select {...register("Buy1", { required: true })}>
                  {formData.Buy1.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
                {errors.Buy1 && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="required">{formData.BuyCompany1.title}</label>
                <input
                  type="text"
                  className=""
                  defaultValue=""
                  {...register("BuyCompany1", { required: true })}
                />
                {errors.BuyCompany1 && (<span className="error">{errorMsg}</span>)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label>{formData.Buy2.title}</label>
                <select {...register("Buy2")}>
                  {formData.Buy2.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
              <div className="col-2">
                <label>{formData.BuyCompany2.title}</label>
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
                <label>{formData.Buy3.title}</label>
                <select {...register("Buy3")}>
                  {formData.Buy3.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
              <div className="col-2">
                <label>{formData.BuyCompany3.title}</label>
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
                <label>{formData.Notes}</label>
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
              {formData.Goback}
            </div>
            <input type="submit" defaultValue={formData.Application} className="confirm" />
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
