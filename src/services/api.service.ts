import { ResponseType, PriceFormParams, UserParams } from "../types/api";
import service from "./api.interceptors";

export const apiMethods = {
  fetchPost: "posts",
  fetchAppEnterPrice: "/rest/V1/AppEnterPrice/", //申請企業權限
  fetchAppVendor: "/rest/V1/AppVendor", //申請供應商權限  
  fetchAccountInfo: "/rest/V1/getAccountInfo",
  fetchMemberGroupList: "/rest/V1/MemberGroupList",
  fetchJoinMemberGroup: "/rest/V1/JoinMemberGroup",
  fetchGetD360Art: "/rest/V1/getCMS",
  fetchInitParseapply: "/rest/V1/eService/InitIssue",//取得客服解析申請
  fetchSendParseapply: "/rest/V1/eService/SetIssue",//送出客服解析申請
  fetchInitGreenapply: "/rest/V1/eService/InitGreen",//取得法規申請
  fetchSendGreenapply: "/rest/V1/eService/SetGreen",//送出法規申請
};

export const postEnterPrice = (params: PriceFormParams) =>
  service.post(apiMethods.fetchAppEnterPrice, { ...params });
export const postAppVendor = (params: PriceFormParams) =>
  service.post(apiMethods.fetchAppVendor, { ...params });
// export const getTodoData = (id: number) =>
//   service.get(apiMethods.fetchTodoData(id));
export const postUserData = (params: UserParams) =>
  service.post(apiMethods.fetchPost, { ...params });
export const postAccountInfo = (params: any) =>
  service.post(apiMethods.fetchAccountInfo, { ...params });
export const postMemberGroupList = (params: any) =>
  service.post(apiMethods.fetchMemberGroupList, { ...params });
export const postJoinMemberGroup = (params: any) =>
  service.post(apiMethods.fetchJoinMemberGroup, { ...params });
export const postGetD360Art = (params: any) =>
service.post(apiMethods.fetchGetD360Art, { ...params });
export const postInitParseapply = (params: any) =>
service.post(apiMethods.fetchInitParseapply, { ...params });
export const postSendParseapply = (params: any) => {
const interceptors = () => {
  service.interceptors.request.use(config => {
    config.headers = { 'Content-Type': 'multipart/form-data' }
    return config;
  });
};
interceptors();
return service.post(apiMethods.fetchSendParseapply, params);
} 
export const postInitGreenapply = (params: any) =>
service.post(apiMethods.fetchInitGreenapply, { ...params });
export const postSendGreenapply = (params: any) => {
const interceptors = () => {
  service.interceptors.request.use(config => {
    config.headers = { 'Content-Type': 'multipart/form-data' }
    return config;
  });
};
interceptors();
return service.post(apiMethods.fetchSendGreenapply, params);
} 

