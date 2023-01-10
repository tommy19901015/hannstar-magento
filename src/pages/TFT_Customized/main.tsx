import React, { useState } from "react";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import Breadcrumbs from "../../component/breadcrumbs/main";
import usePageData from "./pageData";
import { useForm, SubmitHandler } from "react-hook-form";
import "./css.scss";

const TFTCustomized: React.FC = () => {

  const pageName = "TFTCustomized";
  const formData = usePageData();
  type Keys = keyof typeof formData;
  type IFormInputs = {
    [key in Keys]: string | number | string[];
  };
  const FormBlock = () => {
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<IFormInputs>();

    const errorMsg = formData.required;

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
      const result: any = {
        ...data,
      };
      console.log("result", result);
    }
    const [files, setFiles] = useState([]);

    const addFile = (e: any) => {
      setFiles(e.target.files[0]);
    };

    const removeFile = (event:any) => {
      //this.setState({ files: this.state.files.filter(x => x !== f) }); 
    }

    return (
      <>
        <h1 className={`${pageName}H1Title`}>{formData.pageTitle}</h1>
        <p className="note">
          {formData.note1}； <br/>
          {formData.note2} ； {formData.note3}
        </p>
        <div className={`${pageName}FormBlock`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`title`}></div>
            <div className="classificationBlock">
            <div className="subTitle">{formData.formTitle1}</div>
            <div className="row">
                <div className="col-2">
                  <label className="">{formData.size.title}</label>
                  <select>
                    {formData.size.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                  <div className="inputBlock mt-20">
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                      <span className="space">.</span>
                      <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                  </div>
                  
                </div>
                <div className="col-2">
                  <label className="required">{formData.resolution.title}</label>
                  <select>
                    {formData.size.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                  <div className="inputBlock mt-20">
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">.</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                  </div>
                  
                  {errors.resolution && (<span className="error">{errorMsg}</span>)}
                </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.aspectRatio.title}</label>
                <input
                    type="text"
                    className=""
                    defaultValue=""/>
                  <div className="inputBlock mt-20">
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">:</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                  </div>
               
              </div>
              <div className="col-2">
                <label className="">{formData.pixel}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.activeArea}</label>
                <div className="inputBlock">
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">.</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                      <span className="space">x</span>
                      <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">.</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                </div>
               
                </div>
                <div className="col-2">
                  <label className="">{formData.technology}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.compared}</label>
                <input
                  type="text"
                  defaultValue=""/>
              </div>
              <div className="col-2">
                  <label className="">{formData.view}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.bestView}</label>
                <input
                  type="text"
                  defaultValue=""/>
                </div>
                <div className="col-2">
                  <label className="">{formData.reaction}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.colors}</label>
                <input
                  type="text"
                  defaultValue=""/>
                </div>
                <div className="col-2">
                  <label className="">{formData.saturation}</label>
                  <input
                    type="text"
                    defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.brightness}</label>
                <input
                  type="text"
                  defaultValue=""/>
                </div>
                <div className="col-2">
                  <label className="">{formData.whiteColor}</label>
                  <div className="inputBlock">
                  <span className="space">0.</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">,</span>
                    <span className="space">0.</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                      
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                  <label className="required">{formData.interface.title}</label>
                  <select>
                    {formData.size.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                <div className="inputBlock mt-20">
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">x</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                  </div>
                  {errors.resolution && (<span className="error">{errorMsg}</span>)}
              </div>
              <div className="col-2">
                <label className="">{formData.IC.title}</label>
                <select>
                  {formData.IC.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
              <label className="">{formData.temp}</label>
                <div className="inputBlock mt-20">
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">~</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">/</span>
                      <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                    <span className="space">~</span>
                    <input
                      type="text"
                      className="max-w-col-5"
                      defaultValue=""/>
                  </div>
                </div>
              <div className="col-2">
                <label className="">{formData.outward}</label>
                <div className="inputBlock mt-20">
                    <input
                      type="text"
                      className="max-w-col-6"
                      defaultValue=""/>
                    <span className="space">.</span>
                    <input
                      type="text"
                      className="max-w-col-6"
                      defaultValue=""/>
                    <span className="space">x</span>
                      <input
                      type="text"
                      className="max-w-col-6"
                      defaultValue=""/>
                    <span className="space">.</span>
                    <input
                      type="text"
                      className="max-w-col-6"
                      defaultValue=""/>
                      <span className="space">x</span>
                      <input
                      type="text"
                      className="max-w-col-6"
                      defaultValue=""/>
                    <span className="space">.</span>
                    <input
                      type="text"
                      className="max-w-col-6"
                      defaultValue=""/>
                  </div>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.touchMode.title}</label>
                <select>
                  {formData.touchMode.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                  </select>
              </div>
              <div className="col-2">
              <label className="">{formData.touchTechnology.title}</label>
                <select>
                  {formData.touchTechnology.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                  </select>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.fittingMethod.title}</label>
                <select>
                  {formData.fittingMethod.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
              <div className="col-2">
                <label className="">{formData.CL.title}</label>
                <select>
                  {formData.CL.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="">{formData.coverMaterial.title}</label>
                  <select>
                    {formData.coverMaterial.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                </div>
            </div>
          </div>

          <div className="classificationBlock">
          <div className="subTitle">{formData.formTitle2}</div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.board.title}</label>
                <div className="checkbox-col">
                    {formData.board.option.map((item, i) => (
                      <div className="hannstarCheckBox" key={i}>
                        <input
                          id={item.value}
                          type="checkbox"
                          value={item.value}
                          {...register("board", { required: true })}
                        />
                        <label htmlFor={item.value}>{item.text}</label>
                      </div>
                    ))}
                  </div>
              </div>
              <div className="col-2">
                <label className="required">{formData.communication.title}</label>
                <select>
                  {formData.communication.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.AVI.title}</label>
                <select>
                  {formData.AVI.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
                <div className="col-2">
                  <label className="required">{formData.internet.title}</label>
                  <select>
                    {formData.internet.option.map(({ value, text }) => (
                      <option value={value}>{text}</option>
                    ))}
                  </select>
                </div>
            </div>
            <div className="row">
              <div className="col-2">
                <label className="">{formData.other}</label>
                <input
                type="text"
                defaultValue=""/>
              </div>
            </div>
          </div>

          <div className="classificationBlock">
          <div className="subTitle">{formData.formTitle3}</div>
            <div className="row">
              <div className="col-2">
                <label className="required">{formData.forecast}</label>
                <input
                type="text"
                defaultValue=""/>
              </div>
              <div className="col-2">
                <label className="required">{formData.applications.title}</label>
                <select>
                  {formData.applications.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.endProducts}</label>
                <input
                type="text"
                defaultValue=""/>
              </div>
              <div className="col-2">
                <label className="required">{formData.life}</label>
                <input
                type="text"
                defaultValue=""/>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <label className="required">{formData.time.title}</label>
                <select>
                  {formData.time.option.map(({ value, text }) => (
                    <option value={value}>{text}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <label>{formData.remark}</label>
                <textarea
                  className="companyRemark"
                  defaultValue=""
                />
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <label>{formData.file}</label>
                <input type="file" multiple className="btn" onChange={addFile}/>
                { files.length > 0 && files.map(file=>(
                  <p>{file}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="BtnBlock">
            <input className="btn" type="submit" defaultValue={formData.save} />
            <div className="btn">
              {formData.reset}
            </div>
            <input className="confirm" type="submit" defaultValue={formData.submit}/>
          </div>
          </form>
        </div>
      </>
    )
  }

  return (
    <Layout>
      <Columns type={ColType.OneCol} content={
        <>
          <Breadcrumbs {...formData.breadcrumbs} />
          <FormBlock />
        </>
      } />
    </Layout>
  );
};

export default TFTCustomized;
