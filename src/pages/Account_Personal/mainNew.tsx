import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import AccountPersonalTemplate from "../../templates/AccountPersonalTemplate/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import urlConfig from "../../config/urlSetting.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { postEnterPrice, postAccountInfo } from "../../services/api.service";
import { useForm, SubmitHandler } from "react-hook-form";
import "./css.scss";
import usePageData from "./pageData";

const AccountPersonal: React.FC = () => {
  const pageName = "AccountPersonal";
  const [accountInfo, setAccountInfo] = useState<any>("");
  const formData = usePageData();

  type Keys = keyof typeof formData;

  type IFormInputs = {
    [key in Keys]: string | number | string[];
  };

  useEffect(() => {
    postAccountInfo({
      email: "rfchen@hannstar.com",
    }).then((response: any) => {
      setAccountInfo(response);
    });
    setAccountInfo({
      UserName: "ronfu",
      Email: "rfchen@hannstar.com",
      Lang: "en",
      GroupName: "權限群組名稱",
      PhoneNumber0: "886",
      PhoneNumber1: "1111",
      PhoneNumber2: "11111",
      CellPhoneNumber0: "886",
      CellPhoneNumber1: "222222",
      CountryCode: "國家代碼",
      JobAttributes: "業務相關",
      JobTitle: "創辦人/董事長",
      InterestedType: [
        "智慧零售",
        "智慧育樂.",
        "智能建築",
        "健康關懷",
        "交通運輸",
        "智能製造",
      ],
      CompanyName: "公司名稱",
      CompanySName: "公司名稱關鍵字",
      BusinessType: "代理商",
      TaxNo: "企業編號(統編/稅號)",
      Weblink: "公司網址",
      Country: "台灣",
      AreaCity: "城市",
      AreaAddress: "地址",
      CompanyEmpNumber: "<100",
      AnnualRevenue: "<1M",
      CompanyStockOn: "是",
      CompanyMA1: ["車載", "穿戴", "工控", "手機", "消費類", "其他"],
      CompanyMA2: "公司產品主要銷售國家/地區-1",
      CompanyMA3: "公司產品主要銷售國家/地區-2",
      CompanyMA4: "公司產品主要銷售國家/地區-3",
      TOP1: "主要出貨客戶-1",
      TOP2: "主要出貨客戶-2",
      TOP3: "主要出貨客戶-3",
      HannstarYN: "Y",
      Buy1: "瀚宇彩晶",
      BuyCompany1: "渠道公司名稱-1",
      Buy2: "瀚宇彩晶",
      BuyCompany2: "渠道公司名稱-2",
      Buy3: "瀚宇彩晶",
      BuyCompany3: "渠道公司名稱-3",
      CompanyRemark: "備註說明",
    });
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

  const PersonalFormContent = () => {
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      console.log(data);
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
                src={`${urlConfig.s3Url}/Image/account/btn_enterprisemember_client_hnp.png`}
              />
            </a>
            <a
              className="changTab"
              href={urlConfig.account.AccountPartner.href}
            >
              <img
                alt={urlConfig.account.AccountPartner.title}
                src={`${urlConfig.s3Url}/Image/account/btn_enterprisemember_supplier_normal.png`}
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
                </select>
                {errors.JobAttributes && <span>必填欄位，請重新輸入</span>}
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
                    {formData.JobTitle.option[0].text}
                  </option>
                </select>
                {errors.JobTitle && <span>必填欄位，請重新輸入</span>}
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
                {errors.PhoneNumber1 && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-2">
                <label className="required">分機</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("PhoneNumber2", { required: true })}
                />
                {errors.PhoneNumber2 && <span>必填欄位，請重新輸入</span>}
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
                {errors.CellPhoneNumber1 && <span>必填欄位，請重新輸入</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <label className="required">感興趣的應用別(可複選)</label>
                <div className="checkbox-col">
                  {formData.InterestedType.option.map((item, i) => (
                    <>
                      <label key={item.value}>
                        <input
                          type="checkbox"
                          value={item.value}
                          {...(register("InterestedType"), { required: true })}
                        />
                        {item.text}
                      </label>
                    </>
                  ))}
                </div>
              </div>
              {errors.InterestedType && <span>必填欄位，請重新輸入</span>}
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
                {errors.CompanyName && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-2">
                <label className="required">公司名稱關鍵字</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanySName", { required: true })}
                />
                {errors.CompanySName && <span>必填欄位，請重新輸入</span>}
              </div>
            </div>
            <div className="row">
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
                  <option value={formData.BusinessType.option[3].value}>
                    {formData.BusinessType.option[3].text}
                  </option>
                  <option value={formData.BusinessType.option[4].value}>
                    {formData.BusinessType.option[4].text}
                  </option>
                  <option value={formData.BusinessType.option[0].value}>
                    {formData.BusinessType.option[5].text}
                  </option>
                  <option value={formData.BusinessType.option[6].value}>
                    {formData.BusinessType.option[6].text}
                  </option>
                </select>
                {errors.BusinessType && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-2">
                <label className="required">企業編號(統編/稅號)</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("TaxNo", { required: true })}
                />
                {errors.TaxNo && <span>必填欄位，請重新輸入</span>}
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
                {errors.Weblink && <span>必填欄位，請重新輸入</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label className="required">國家/地區</label>
                <select {...register("Country", { required: true })}>
                  <option value={formData.Country.option[0].value}>
                    {formData.Country.option[0].text}
                  </option>
                  <option value={formData.Country.option[1].value}>
                    {formData.Country.option[1].text}
                  </option>
                </select>
                {errors.Country && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-3">
                <label className="required">城市</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("AreaCity", { required: true })}
                />
                {errors.AreaCity && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-3">
                <label className="required">地址</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("AreaAddress", { required: true })}
                />
                {errors.AreaAddress && <span>必填欄位，請重新輸入</span>}
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
                    {formData.CompanyEmpNumber.option[0].text}
                  </option>
                </select>
                {errors.CompanyEmpNumber && <span>必填欄位，請重新輸入</span>}
              </div>
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
                {errors.AnnualRevenue && <span>必填欄位，請重新輸入</span>}
              </div>
            </div>
            <div className="row">
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
                {errors.CompanyStockOn && <span>必填欄位，請重新輸入</span>}
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <label className="required">公司產品主要銷售分類(可複選)</label>
                <div className="checkbox-col">
                  {formData.CompanyMA1.option.map((item, i) => (
                    <>
                      <label key={item.value}>
                        <input
                          type="checkbox"
                          value={item.value}
                          {...register("CompanyMA1")}
                        />
                        {item.text}
                      </label>
                    </>
                  ))}
                  {errors.CompanyMA1 && <span>必填欄位，請重新輸入</span>}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <label className="required">公司產品主要銷售國家地區-1</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA2", { required: true })}
                />
                {errors.CompanyMA2 && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-3">
                <label className="required">公司產品主要銷售國家地區-2</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA3", { required: true })}
                />
                {errors.CompanyMA3 && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-3">
                <label className="required">公司產品主要銷售國家地區-3</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("CompanyMA4", { required: true })}
                />
                {errors.CompanyMA4 && <span>必填欄位，請重新輸入</span>}
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
                {errors.TOP1 && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-3">
                <label className="required">主要出貨客戶-2</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("TOP2", { required: true })}
                />
                {errors.TOP2 && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-3">
                <label className="required">主要出貨客戶-3</label>
                <input
                  type="text"
                  defaultValue=""
                  {...register("TOP3", { required: true })}
                />
                {errors.TOP3 && <span>必填欄位，請重新輸入</span>}
              </div>
            </div>
          </div>
          <div className="stepTitle">
            為能提供更完整的服務，請問貴司是否已使用HannStar產品
          </div>
          <div className="classificationBlock">
            <div className="row">
              <div className="col-1">
                <label className="required">是否已使用HannStar產品</label>
                <div className="checkbox-col">
                  {formData.HannstarYN.option.map((item, i) => (
                    <>
                      <label key={item.value}>
                        <input
                          type="radio"
                          value={item.value}
                          {...register("HannstarYN")}
                        />
                        {item.text}
                      </label>
                    </>
                  ))}
                </div>

                {errors.HannstarYN && <span>必填欄位，請重新輸入</span>}
              </div>
            </div>
          </div>
          <div className="classificationBlock">
            <div className="row">
              <div className="col-2">
                <label className="required">購買渠道-1</label>
                <input
                  type="text"
                  className="mb-20"
                  defaultValue=""
                  {...register("Buy1", { required: true })}
                />
                {errors.Buy1 && <span>必填欄位，請重新輸入</span>}
                <label className="required">購買渠道-1</label>
                <input
                  type="text"
                  className="mb-20"
                  defaultValue=""
                  {...register("Buy2", { required: true })}
                />
                {errors.Buy2 && <span>必填欄位，請重新輸入</span>}
                <label className="required">購買渠道-1</label>
                <input
                  type="text"
                  className="mb-20"
                  defaultValue=""
                  {...register("Buy3", { required: true })}
                />
                {errors.Buy3 && <span>必填欄位，請重新輸入</span>}
              </div>
              <div className="col-2">
                <label className="required">渠道公司名稱-1</label>
                <input
                  type="text"
                  className="mb-20"
                  defaultValue=""
                  {...register("BuyCompany1", { required: true })}
                />
                {errors.BuyCompany1 && <span>必填欄位，請重新輸入</span>}
                <label className="required">渠道公司名稱-2</label>
                <input
                  type="text"
                  className="mb-20"
                  defaultValue=""
                  {...register("BuyCompany2", { required: true })}
                />
                {errors.BuyCompany2 && <span>必填欄位，請重新輸入</span>}
                <label className="required">渠道公司名稱-3</label>
                <input
                  type="text"
                  className="mb-20"
                  defaultValue=""
                  {...register("BuyCompany3", { required: true })}
                />
                {errors.BuyCompany3 && <span>必填欄位，請重新輸入</span>}
              </div>
            </div>
          </div>

          <div className="classificationBlock">
            <div className="row">
              <div className="col-1">
                <label className="required">備註說明</label>
                <input
                  type="text"
                  className="companyRemark"
                  defaultValue=""
                  {...register("CompanyRemark", { required: true })}
                />
                {errors.CompanyRemark && <span>必填欄位，請重新輸入</span>}
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
        contentComponent={<PersonalFormContent />}
        rootId={accountInfo.rootid}
      />
    </Layout>
  );
};

export default AccountPersonal;
